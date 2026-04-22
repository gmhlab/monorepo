import { InnovationCard } from './card';
import { MessageSquareHeart, Camera } from 'lucide-react';

export function InnovationsSection() {
  return (
    <div className="overflow-hidden py-20 relative w-full ">
        <div className="container flex-wrap mx-auto max-w-6xl flex w-full gap-12 px-8 relative">
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
            href='/gmh/innovations/equip'
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
            href='/gmh/innovations/photovoice'
          />
        </div>
      </div>
  );
}
