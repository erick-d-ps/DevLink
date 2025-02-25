import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { FormEvent, useState } from "react";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const [email, setEmaial] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function hadleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === "" || email === "") {
      alert("Prencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log("Erro ao fazer login:");
        console.log(error);
        alert("Email ou senha invalida");
        setEmaial("");
        setPassword("");
      });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl select-none">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
      <form
        onSubmit={hadleSubmit}
        className="w-full max-w-xl flex flex-col px-2"
      >
        <Input
          placeholder="Digite seu email..."
          type="email"
          value={email}
          onChange={(e) => setEmaial(e.target.value)}
        />
        <Input
          placeholder="******"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white cursor-pointer"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
