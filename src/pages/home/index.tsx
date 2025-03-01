import { useEffect, useState } from "react";

import { Social } from "../../components/Social";

import { db } from "../../services/firebaseConnection";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialLinksProps {
  fcebook: string;
  instagran: string;
  youtube: string;
}

export function Home() {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linkRef = collection(db, "Links");
      const queryRef = query(linkRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let lista = [] as LinkProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });

        setLinks(lista);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const dockRef = doc(db, "social", "link");
      getDoc(dockRef).then((snapchot) => {
        if (snapchot.data() !== undefined) {
          setSocialLinks({
            fcebook: snapchot.data()?.Facebook,
            instagran: snapchot.data()?.instagran,
            youtube: snapchot.data()?.youtub,
          });
        }
      });
    }
    loadSocialLinks();
  });

  return (
    <div className="flex flex-col w-ful py-4 items-center justify-center ">
      <h1 className="md:text-4xl text-3xl font-bold text-cyan-200 mt-20">
        Erickdps_DEV
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((item) => (
          <section
            style={{ backgroundColor: item.bg }}
            key={item.id}
            className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
          >
            <a href={item.url} target="_blank">
              <p className="text-base md:text-lg" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}
        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Social url={socialLinks?.fcebook}>
              <FaFacebook size={35} color="#fff" />
            </Social>
            <Social url={socialLinks.youtube}>
              <FaYoutube size={35} color="#fff" />
            </Social>
            <Social url={socialLinks.instagran}>
              <FaInstagram size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
