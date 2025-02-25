import { ReactNode, useState, useEffect } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
    const [loading, setLoading] = useState(true);
    const [signet, setSignet] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email  
        }

        localStorage.setItem("@reactlink", JSON.stringify(userData))
        setLoading(false);
        setSignet(true);

      } else {
        setLoading(false);
        setSignet(false)
      }

      return () =>{
        unsub();
      }
    });

  }, []);

  if(loading){
    return <div></div>
  }

  if(!signet){
    return<Navigate to="/login"/>
  }

  return children;
}
