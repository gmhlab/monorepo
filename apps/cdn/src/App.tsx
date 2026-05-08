import { Innovations } from "@repo/ui";

const crestUrl = import.meta.env.PROD
  ? "https://gmhlab.github.io/monorepo/crest.png"
  : `${import.meta.env.BASE_URL}crest.png`;

export default function App() {
  return <Innovations logoSrc={crestUrl} />;
}