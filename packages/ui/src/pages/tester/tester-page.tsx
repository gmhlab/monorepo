import { Header } from "../../composites/Headers/Headers";
import { Footer } from "../../composites/Footers/Footers";
import { Hero } from "../../composites/Sections/Heroes";
import { Panel } from "../../composites/Sections/Panels";
import { Flex } from "../../layout/Flex/Flex";
import { BrandedTemplate } from "../../templates";
import { LinkInBioTemplate } from "../link-in-bios/link-in-bio";

export type InnovationsProps = {
  logoSrc?: string;
  footerLogoSrc?: string;
};

export function TesterPage({ logoSrc, footerLogoSrc }: InnovationsProps = {}) {
  return (
    <BrandedTemplate
      showBackdrop={true}
      showGutters={true}
      header={<Header currentPath="/innovations" logoSrc={logoSrc} />}
      footer={<Footer logoSrc={footerLogoSrc} />}
    >

      <LinkInBioTemplate
        avatar={<img src="https://placehold.co/100x100" alt="Avatar" className="rounded-full" />}
        heading="Get in Touch"
        description="Have questions or want to learn more about our services? Contact us today!"
        socialLinks={<Flex gap="400" alignPrimary="center" alignSecondary="center">
          <a href="https://twitter.com" aria-label="Twitter" className="text-3xl">🐦</a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-3xl">🔗</a>
          <a href="https://github.com" aria-label="GitHub" className="text-3xl">🐙</a>
          <a href="https://facebook.com" aria-label="Facebook" className="text-2xl">📘</a>
        </Flex>}
        links={<Flex gap="400" direction="column" alignPrimary="start" alignSecondary="start">
            <a href="mailto:info@company.com" className="bg-white/25 w-full text-white p-4 rounded">✉️ Email Me!!!</a>
            <a href="tel:+1234567890" className="bg-white/25 w-full text-white p-4 rounded">📞 Call Me!!!</a>
            <a href="https://calendly.com" className="bg-white/25 w-full text-white p-4 rounded">📅 Schedule a Meeting!!!</a>
            <a href="https://maps.google.com" className="bg-white/25 w-full text-white p-4 rounded">📍 Find Me!!!</a>
            <a href="https://wa.me/1234567890" className="bg-white/25 w-full text-white p-4 rounded">💬 WhatsApp Me!!!</a>
        </Flex>}
         background={<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-blue-900 opacity-15" />}
         className="mx-auto my-12 max-w-md text-white muted-foreground rounded-lg overflow-hidden shadow-lg"
      />
    </BrandedTemplate>
  );
}
