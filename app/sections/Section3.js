// app/components/Section3.tsx  (or rename as needed, e.g. SectionArrest.tsx)
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-0 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left column: Text + police confrontation image */}
          <div className="flex-1 space-y-8 lg:space-y-6 mb-10 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-center lg:text-left">
              Ashley&apos;s Arrest – October 8, 2020
            </h2>

            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left mb-4">
                On October 8th, 2020, a package arrived at Ashley&apos;s
                workplace, a restaurant owned by Tristan. During a busy shift,
                an undercover deliveryman made her sign for the package, even
                though he knew it was not addressed to her.
              </h3>
              <div className="relative max-w-sm aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/policeTest.jpg"
                  alt="From police file: Ashley being confronted with the package and its MDMA contents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column: Second image (Ashley being confronted) */}
          <div className="flex-1">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left mb-4">
                Within ten minutes, the Thai police arrived.
              </h3>
              <div className="relative max-w-sm aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/Ashley2.jpg"
                  alt="Ashley Oosthuizen during the police confrontation on October 8, 2020"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
