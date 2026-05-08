import { Grid } from '../../layouts/Grid/Grid';
import { Flex } from '../../layouts/Flex/Flex';
import { Header } from '../../composites/Headers/Headers';
import { InnovationsSection } from './components/section';
import { InnovationsHero } from './components/hero';

export function Innovations() {
  return (
    <main className="relative overflow-hidden">
      <Header currentPath="/innovations" />

      <div aria-hidden className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#AA9868] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#AA9868]/30 to-transparent rounded-full blur-3xl" />
      </div>

      <Grid columns="clamp(0rem, 4vw, 6rem) 1fr clamp(0rem, 4vw, 6rem)" alignItems="stretch" className="relative">
        <div className="bg-gradient-to-r from-[#033C5A] to-transparent" />
        <Flex direction="column">
          <InnovationsHero />
          <InnovationsSection />
        </Flex>
        <div className="bg-gradient-to-l from-[#033C5A]/50 to-transparent" />
      </Grid>
    </main>
  );
}
