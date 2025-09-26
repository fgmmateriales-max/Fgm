import type { Metadata } from "next";
import { getCategorias } from "@/helper/categorias";
import "./globals.css";
import { Navbar } from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Soluciones y Materiales",
  description: "Created by Christian A. Rugna and Tomas K. Morelli",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const categorias = await getCategorias()


  return (
    <html lang="en">
      <body >
        <Navbar categorias={categorias} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
