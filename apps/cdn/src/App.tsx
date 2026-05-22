import { InnovationTemplate, getEquipData } from "@repo/ui";

const assetBase = import.meta.env.PROD
  ? "https://gmhlab.github.io/monorepo/"
  : import.meta.env.BASE_URL;

export default function App() {
  return (
    <InnovationTemplate
      data={getEquipData(assetBase)}
      logoSrc={`${assetBase}crest.png`}
      footerLogoSrc={`${assetBase}crest-light.png`}
    />
  );
}
