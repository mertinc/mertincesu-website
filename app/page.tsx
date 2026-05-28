import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
// import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="pt-14">
        <Hero />
        <About />
        <Stack />
        {/* <Projects /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
