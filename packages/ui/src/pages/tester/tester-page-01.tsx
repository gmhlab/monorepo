import { Header } from "../../composites/Headers/Headers";
import { Footer } from "../../composites/Footers/Footers";
import { Hero } from "../../composites/Sections/Heroes";
import { Panel } from "../../composites/Sections/Panels";
import { Flex } from "../../layout/Flex/Flex";
import { BrandedTemplate } from "../../templates";
import { LinkInBio01 } from "../link-in-bios/Linkinbio-01";
import { DashboardPage } from "../dashboard-page";

export type InnovationsProps = {
  logoSrc?: string;
  footerLogoSrc?: string;
};

export function TesterPage01({ logoSrc, footerLogoSrc }: InnovationsProps = {}) {
  return (
    <BrandedTemplate
      showBackdrop={true}
      showGutters={true}
      header={<Header currentPath="/innovations" logoSrc={logoSrc} />}
      footer={<Footer logoSrc={footerLogoSrc} />}
    >
      <DashboardPage />
    </BrandedTemplate>
  );
}
