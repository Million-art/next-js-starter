import HeroSection from "@/components/hero/page";
import NavBar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home',
}
export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Footer />
    </main>
  );
}
