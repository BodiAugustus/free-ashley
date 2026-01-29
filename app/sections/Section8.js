// app/components/Section8.tsx  (or e.g. SectionMediaDisappointment.tsx)
import Image from "next/image";

const Section8 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-0 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left column: Tristan's media outreach and disappointment */}
          <div className="flex-1 space-y-8 lg:space-y-10 mb-10 lg:mb-0">
            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              After sending over 2,000 emails, Tristan finally secured interest
              from a major publication. Following a brutal mission that claimed
              multiple lives, including the second American KIA in Ukraine, a
              reporter named Seth Harp from Rollingstone responded to
              Tristan&apos;s persistent messages about Ashley.
            </h3>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left font-bold text-red-400">
              &quot;It&apos;s too bad she&apos;s not American&quot; — Seth Harp,
              Rollingstone
            </h3>

            <div className="text-center lg:text-left">
              <a
                href="https://www.rollingstone.com/politics/politics-news/stephen-zabielski-russia-ukraine-conflict-1371094/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-lg font-semibold transition-colors underline underline-offset-4 hover:no-underline"
              >
                Read the Rollingstone Article
              </a>
            </div>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              After seven months in-country running combat missions, and losing
              all but two of the original thirteen in his squad, Tristan left
              Ukraine.
            </h3>
          </div>

          {/* Right column: Photo of Stephen Zabielski's recovery */}
          <div className="flex-1">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl max-w-sm shadow-2xl border border-slate-700/50">
                <Image
                  src="/zeb.jpg"
                  alt="Stephen 'Zeb' Zabielski's body after recovery outside the Russian-held village of Dorashanka, Ukraine"
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

export default Section8;
