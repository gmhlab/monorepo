import { Plus } from "lucide-react";
import { ImageWithFallback } from '../../../composites/image-with-fallback';
import { Flex, FlexItem } from '../../../layouts/Flex/Flex';

interface InnovationCardProps {
  title: string;
  description: React.ReactNode;
  imageFilter: string;
  imageSrc?: string;
  icon: React.ReactNode;
  href?: string;
}

const DEFAULT_IMAGE_SRC =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center&auto=format";

function EnhancedButton({ href }: { href?: string }) {
  const className = "group relative overflow-hidden inline-flex flex-row items-center gap-2 bg-gradient-to-r from-[#033C5A] to-[#045A85] hover:from-[#045A85] hover:to-[#033C5A] text-white px-6 py-3 rounded-lg shadow-lg shadow-[#033C5A]/30 hover:shadow-xl hover:shadow-[#033C5A]/50 transition-all duration-300 transform hover:-translate-y-0.5";

  const content = (
    <>
      <Plus className="size-4 shrink-0 relative z-10" />
      <span className="relative z-10 text-sm font-semibold">Learn More</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
}

function TextHeading({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="relative w-full">
      <h2 className="text-3xl font-black text-[#033C5A] leading-tight tracking-tight uppercase relative">
        {children}
        {/* Subtle underline accent */}
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#AA9868] to-transparent" />
      </h2>
    </Flex>
  );
}

function TextSubheading({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="relative w-full">
      <FlexItem size="fill" className="text-gray-300 text-base leading-relaxed">
        {children}
      </FlexItem>
    </Flex>
  );
}

function TextContentHeading({ title, description }: { title: string; description: React.ReactNode }) {
  return (
    <Flex direction="column" gap="300" className="relative w-full">
      <TextHeading>{title}</TextHeading>
      <TextSubheading>{description}</TextSubheading>

      {/* Decorative gradient line */}
      <div className="absolute -left-3 top-12 w-64 h-0.5">
        <div className="w-full h-full bg-gradient-to-r from-[#AA9868] via-[#AA9868]/60 to-transparent rounded-full shadow-lg shadow-[#AA9868]/20" />
      </div>
    </Flex>
  );
}

function ContentBox({ title, description, href }: { title: string; description: React.ReactNode; href?: string }) {
  return (
    <div className="absolute left-14 top-14 w-72 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/40 border border-white/20 p-6 z-10 transform hover:scale-105 transition-all duration-300">
      <Flex direction="column" gap="200">
        <TextContentHeading title={title} description={description} />
        <EnhancedButton href={href} />
      </Flex>
    </div>
  );
}

export function InnovationCard({ title, description, imageFilter, imageSrc, icon, href }: InnovationCardProps) {
  return (
    <div className="relative w-80 h-96 group">
      {/* Main image area with gradient overlay */}
      <div className="absolute inset-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
        <div className="relative w-full h-full">
          <ImageWithFallback
            src={imageSrc ?? DEFAULT_IMAGE_SRC}
            alt={`${title} background`}
            className="w-full h-full object-cover"
          />
          {/* Blue gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${imageFilter} mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#033C5A]/80 via-[#033C5A]/40 to-transparent" />
        </div>

        {/* White border with gradient glow */}
        <div className="absolute inset-0 border-4 border-white/80 rounded-2xl pointer-events-none" />
        <div className="absolute inset-0 border border-[#AA9868]/30 rounded-2xl pointer-events-none shadow-inner shadow-[#AA9868]/20" />
      </div>

      {/* Content overlay */}
      <ContentBox title={title} description={description} href={href} />
      
      {/* Subject-relevant icon */}
      <Flex alignPrimary="center" alignSecondary="center" className="absolute left-5 top-5 w-16 h-16 bg-gradient-to-br from-[#AA9868] to-[#AA9868]/70 rounded-xl shadow-lg shadow-[#AA9868]/30 backdrop-blur-sm border border-[#AA9868]/40 z-20 text-white [&>svg]:size-8 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </Flex>
    </div>
  );
}
