import React from "react";
import { PropsWithChildren } from "react";

export default function Navbar({ children }: PropsWithChildren<{}>) {
  return (
    <nav className="flex justify-start">
      <h1 className="my-8 self-center text-white text-4xl font-extrabold text-transparent">
        {children}
      </h1>
    </nav>
  );
}
