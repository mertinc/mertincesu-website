import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}) {
  const locale = resolveLocale((await params).lang);
  const dict = await getDictionary(locale);

  return (
    <>
      <Nav dict={dict.nav} locale={locale} />
      <main id="top" className="pt-14">
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Stack dict={dict.stack} />
        <Experience dict={dict.experience} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
