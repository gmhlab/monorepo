import { motion } from 'motion/react';
import { Container } from '../../../layouts';

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
    <div className="flex items-center gap-3 px-8 shrink-0">
      <div className="w-12 h-12 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
        <span className="text-xs text-white/90 tracking-wide">{abbr}</span>
      </div>
      <span className="text-white/70 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function PartnerMarquee() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Container className="mb-8">
          <p className="text-center text-white/50 uppercase tracking-widest text-sm">
            Trusted by leading global partners
          </p>
        </Container>
      </motion.div>

      {/* Marquee row 1 - scrolls left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#033C5A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#033C5A] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedPartners.map((partner, i) => (
            <LogoItem key={`row1-${i}`} name={partner.name} abbr={partner.abbr} />
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 - scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#033C5A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#033C5A] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...duplicatedPartners].reverse().map((partner, i) => (
            <LogoItem key={`row2-${i}`} name={partner.name} abbr={partner.abbr} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
