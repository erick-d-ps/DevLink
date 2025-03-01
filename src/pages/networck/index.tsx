import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function NetWorck() {
  const [Facebook, setFacebook] = useState("");
  const [instagran, setInstagran] = useState("");
  const [youtub, setYoutub] = useState("");

  useEffect(() => {
    function loadingLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined)
          setFacebook(snapshot.data()?.Facebook)
          setInstagran(snapshot.data()?.instagran)
          setYoutub(snapshot.data()?.youtub)
      });
    }

    loadingLinks();
  }, []);

  function handlRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      Facebook: Facebook,
      instagran: instagran,
      youtub: youtub,
    })
      .then(() => [alert("Cadastrado com sucesso!")])
      .catch((error) => {
        console.log("ERRO AO CADASTRAR!" + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas Redes sociais
      </h1>

      <form onSubmit={handlRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">
          Link do Facebook
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facevbook..."
          value={Facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagran
        </label>
        <Input
          type="url"
          placeholder="Digite a url do instagran..."
          value={instagran}
          onChange={(e) => setInstagran(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do Youtube
        </label>
        <Input
          type="url"
          placeholder="Digite a url do youtube..."
          value={youtub}
          onChange={(e) => setYoutub(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
