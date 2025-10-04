"use client";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  // Use usePathname para obter o caminho da URL atual
  const pathname = usePathname();

  // Condição para não renderizar o Footer na home ('/')
  const isHome = pathname === "/";

  if (isHome) {
    return null;
  }

  return <Footer />;
}
