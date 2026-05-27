import { Innovations } from "@repo/ui";

const assetBase = import.meta.env.PROD
  ? "https://gmhlab.github.io/monorepo/"
  : import.meta.env.BASE_URL;

export default function App() {
  return (
    <Innovations />
  );
}
