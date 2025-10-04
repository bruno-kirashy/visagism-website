import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full h-[250px] flex flex-col items-center justify-center border-t border-gray-500/50 bg-black">
      <div>
        <nav className="flex max-w-5xl md:gap-40 gap-12 md:text-[18px] text-[11px] md:my-12 my-5">
          <Link className="text-gray-600" href={"/"}>
            {" "}
            Home{" "}
          </Link>

          <Link className="text-gray-600" href={"/services"}>
            {" "}
            Services{" "}
          </Link>

          <Link className="text-gray-600" href={"/about"}>
            {" "}
            About{" "}
          </Link>

          <Link className="text-gray-600" href={"/contact"}>
            {" "}
            Contact{" "}
          </Link>
        </nav>
      </div>
      <div className="flex gap-6 text-gray-500 mb-5">
        <Instagram className="w-8 h-8 cursor-pointer" />
        <Facebook className="w-8 h-8 cursor-pointer" />
      </div>
      <div className="flex md:flex-wrap flex-col items-center justify-center gap-1 mb-2 md:text-[15px] text-[11px]">
        <p className="text-gray-400">
          &copy; 2025 | Todos os direitos reservados.
        </p>
        <p className=" cursor-pointer text-blue-500 transition-all duration-300 p-1 border border-transparent hover:ml-4 hover:text-blue-400/100 hover:scale-105  hover:border-blue-500">
          <a
            href={"https://github.com/bruno-kirashy"}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Bruno-Kirashy
          </a>
        </p>
      </div>
    </footer>
  );
};
