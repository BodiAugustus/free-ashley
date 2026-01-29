// app/components/Section6.tsx  (or e.g. SectionTristanEfforts.tsx)
import Image from "next/image";

const Section6 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-0 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left column: Tristan's efforts text */}
          <div className="flex-1 space-y-8 lg:space-y-5 mb-10 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-center lg:text-left">
              Tristan&apos;s Fight for Ashley
            </h2>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              Since Ashley&apos;s arrest, Tristan resigned from medical school
              and taught himself how to code in order to bring Ashley&apos;s
              nightmare to the world.
            </h3>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              He simultaneously wrote and completed an original novel dedicated
              to Ashley.{" "}
              <span className="text-green-400 font-bold">
                100% of author profits
              </span>{" "}
              go directly towards supporting Ashley and her mother.
            </h3>
            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              Published March 12, 2024,{" "}
              <em>The Shepherd - A Bronze Age Tale</em> was the opening salvo of
              a global campaign to Free Ashley. The main barrage arrives this
              year, 2026, with the publications of{" "}
              <em className="text-sky-400">False Positive</em>, Tristan and
              Ashley&apos;s unbelievable true story, and{" "}
              <em className="text-sky-400">The King - A Bronze Age Tale</em>.
            </h3>
          </div>

          {/* Right column: Book cover + purpose */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <a
                href="https://www.amazon.com/Shepherd-Bronze-Age-Tale-ebook/dp/B0C1T48ZCJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl max-w-sm  shadow-2xl border border-slate-700/50">
                  <Image
                    src="/The-Shepherd-v02.jpg"
                    alt="Official cover of 'The Shepherd: A Bronze Age Tale' by Tristan Nettles – historical fiction dedicated to Ashley Oosthuizen"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>

            <p className="text-center lg:text-left text-lg text-slate-300">
              Click the cover to purchase on Amazon now and support Ashley!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
