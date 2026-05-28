import { InnovationsPage } from "@repo/ui";
import { mount } from "../bootstrap";

const assetBase = import.meta.env.PROD
  ? "https://gmhlab.github.io/monorepo/"
  : import.meta.env.BASE_URL;

mount(
  <InnovationsPage
    logoSrc={`${assetBase}crest.png`}
    footerLogoSrc={`${assetBase}crest-light.png`}
  />,
);
