import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { FiTrash } from 'react-icons/fi'

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f2f3f4");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#000000");

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-white font-medium mt-2 mb-2">Nome do Link</label>
        <Input
          placeholder="Digit o nome do Link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">Url do Link </label>
        <Input
          type="url"
          placeholder="Digit a Url do Link..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <section className="flex my-4 gap-5">
          <div className="flex gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              cor do Link
            </label>
            <input
              className="w-10 h-10"
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              Fundo do Link
            </label>
            <input
              className="w-10 h-10"
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex flex-col items-center justify-center mb-7 p-1 border-gray-100/25 border-1 rounded-md">
            <label className="text-white font-medium mt-2 mb-2">
              Veja com está ficando
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-amber-50 rounded  px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p className="font-medium" style={{ color: textColorInput }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}

        <button className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium flex items-center justify-center gap 4 ">
          Cadastrar
        </button>
      </form>
      <h2 className="font-bold text-white mb-4 text-2xl">
        Meus Links
      </h2>
      <article className=" flex items-center justify-between w-11/12 max-w-xl rounded px-3 py-2 mb-2 font-medium select-none "
      style={{backgroundColor:"#2563EB", color:"#fff"}}
      >
        <p>Canal no Youtube</p>
        <div>
            <button
            className="border border-dashed p-1 cursor-pointer bg-neutral-700"
            >
                <FiTrash size={18} color="#fff"/>
            </button>
        </div>
      </article>
    </div>
  );
}
