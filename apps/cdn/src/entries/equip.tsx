import { InnovationPage, getEquipData } from "@repo/ui";
import { mount } from "../bootstrap";

const assetBase = import.meta.env.PROD
  ? "https://gmhlab.github.io/monorepo/"
  : import.meta.env.BASE_URL;

mount(
  <InnovationPage
    data={getEquipData(assetBase)}
    logoSrc={`${assetBase}crest-dark.png`}
    footerLogoSrc={`${assetBase}crest-light.png`}
  />,
);
