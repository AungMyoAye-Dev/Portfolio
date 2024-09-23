import Hero from "@/components/Hero";
import ThemeChanger from "@/components/ThemeChanger";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <ThemeChanger />
    </section>
  );
}
