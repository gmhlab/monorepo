import { motion } from 'motion/react';
import { TextContentHeading } from '../../../primitives/Text/Text';
import { Section, FlexItem, Flex } from '../../../layout';

const partners = [
  { name: 'UNICEF', abbr: 'UNICEF' },
  { name: 'World Health Organization', abbr: 'WHO' },
  { name: 'World Bank', abbr: 'WB' },
  { name: 'USAID', abbr: 'USAID' },
  { name: 'Gates Foundation', abbr: 'BMGF' },
  { name: 'Red Cross', abbr: 'ICRC' },
  { name: 'Médecins Sans Frontières', abbr: 'MSF' },
  { name: 'UNDP', abbr: 'UNDP' },
  { name: 'GAVI Alliance', abbr: 'GAVI' },
  { name: 'Global Fund', abbr: 'GF' },
];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <Flex alignPrimary="center" alignSecondary="center" gap="200" className="px-4 shrink-0">
      <div className="w-12 h-12 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
        <span className="text-xs text-white/90 tracking-wide">{abbr}</span>
      </div>
      <span className="text-white/70 whitespace-nowrap">{name}</span>
    </Flex>
  );
}

export function PartnerMarquee() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <Section padding='1600'>
      <Flex direction="column" gap="800" alignSecondary="center" container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextContentHeading heading="Trusted by Leading Global Partners" align='center' />

        </motion.div>

      {/* Marquee row 1 - scrolls left */}
        <Flex>
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: {duration: 30, repeat: Infinity, ease: 'linear'} }}
          >
            {duplicatedPartners.map((partner, i) => (
              <LogoItem key={`row1-${i}`} name={partner.name} abbr={partner.abbr} />
            ))}
          </motion.div>
        </Flex>

        {/* Marquee row 2 - scrolls right */}
        <Flex>
          <motion.div
            className="flex"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ x: {duration: 30, repeat: Infinity, ease: 'linear'} }}
          >
            {[...duplicatedPartners].reverse().map((partner, i) => (
              <LogoItem key={`row2-${i}`} name={partner.name} abbr={partner.abbr} />
            ))}
          </motion.div>
        </Flex>
      </Flex>
    </Section>
  );
}
