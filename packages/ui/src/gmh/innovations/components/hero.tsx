export function InnovationsHero() {
  return (
      <div className="overflow-hidden relative w-full">
          <div className="container px-8 pt-20 pb-0 mx-auto flex-col max-w-6xl gap-6 items-start justify-start relative">
            <div className="flex flex-row items-start justify-start p-0 relative">
              <h1 className="text-6xl md:text-8xl font-serif text-foreground leading-none tracking-tight bg-gradient-to-r from-foreground via-foreground to-muted bg-clip-text text-transparent">
                Innovations
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start p-0 relative w-full max-w-4xl">
              <p className="text-3xl leading-relaxed text-[#AA9868] font-light">
                Explore the center's latest innovations. And maybe a little extra
                added text for good measure.
              </p>
            </div>
          </div>
      </div>
  );
}
