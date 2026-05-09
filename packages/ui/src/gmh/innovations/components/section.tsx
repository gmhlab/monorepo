import { InnovationCard } from './card';
import { MessageSquareHeart, Camera } from 'lucide-react';
import { Section } from '../../../layouts/Section/Section';         
import { Grid } from '../../../layouts/Grid/Grid';    

export function InnovationsSection() {
  return (
      <Section padding="1200" className="overflow-hidden relative">
        <Grid
          container
          columns="repeat(auto-fill, minmax(min(20rem, 100%), 24rem))"
          gap="600"
          className="mx-auto max-w-6xl relative justify-start"
        >
          <InnovationCard
            title="EQUIP"
            description={
              <>
                <span className="font-bold text-[#033C5A]">EQUIP is for trainers and supervisors</span>
                <span className="text-gray-600"> to improve the quality of their teams's psychosocial and mental health helping skills.</span>
              </>
            }
            imageFilter="from-blue-600/60 to-blue-800/80"
            icon={<MessageSquareHeart />}
            href='https://gwglobalmentalhealth.com/innovations/equip'
          />
          <InnovationCard
            title="PhotoVoice™"
            description={
              <>
                <span className="font-bold text-[#033C5A]">Photography and digital storytelling</span>
                <span className="text-gray-600"> to address stigma in the context of mental health.</span>
              </>
            }
            imageFilter="from-blue-700/60 to-indigo-800/80"
            icon={<Camera />}
            href='https://gwglobalmentalhealth.com/innovations/photovoice'
          />
        </Grid>
      </Section>
  );
}
