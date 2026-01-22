export function InnovationHeader() {
  return (
    <div className="relative py-16 mb-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-8xl font-serif text-white mb-4">Innovation Title</h1>
        <p className="text-5xl font-serif text-white/90 text-3xl">What is it?</p>
      </div>
    </div>
  );
}
