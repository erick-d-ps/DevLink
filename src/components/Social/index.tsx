
import { ReactNode } from "react";

interface SocialProps{
    url: string;
    children: ReactNode 
}

export function Social({url, children}: SocialProps ) {
  return (
  <a 
  href={url}
  rel="noopner noreferrer"
  target="-blank"
  >
   {children}
  </a> 

  );
}
