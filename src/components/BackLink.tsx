import Link from "next/link";
import { PropsWithChildren } from "react";
import { ImArrowLeft } from "react-icons/im";

interface Props {
  href: string;
}

export default function BackLink({ children, href }: PropsWithChildren<Props>) {
  return (
    <Link href={href} className="flex items-center gap-2 mb-10 text-white">
      <ImArrowLeft />
      <span className="underline hover:no-underline">{children}</span>
    </Link>
  );
}
