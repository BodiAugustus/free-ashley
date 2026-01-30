// app/components/Missing.tsx  (or wherever you place it)
import Image from "next/image";
const Section1 = () => {
  return (
    <main className="min-h-screen bg-[var(--color-primary)] text-white font-[var(--font-serif)]">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold pt-8">
          Ashley Oosthuizen has spent more than{" "}
          <span className="text-red-400">five years</span> in Thai prison.
        </h1>
      </header>
      <section className="max-w-4xl mx-auto p-4 text-[var(--color-text-muted)]">
        {/* Parent container for side-by-side images */}
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
          {/* Happy / Free Photo */}
          <div className="flex-1">
            <div className="relative w-full aspect-[16/16] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/Ashley_Oosthuizen.jpg"
                alt="Ashley Oosthuizen happy and free"
                fill
                className="object-cover"
                priority // Optional: if this is above the fold
              />
            </div>
          </div>

          {/* Prisoner Photo */}
          <div className="flex-1">
            <div className="relative w-full aspect-[16/16] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/jail.jpg"
                alt="Ashley Oosthuizen as a prisoner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Text and button */}
        <div className="text-center">
          <p className="mb-4 text-xl text-white pt-2">
            She was arrested on the island of Koh Samui at the age of 21 after
            being forced to take the fall for the man she loved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Section1;
