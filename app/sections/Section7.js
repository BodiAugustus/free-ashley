// app/components/Section7.tsx  (or e.g. SectionWarForFreedom.tsx)
import Image from "next/image";

const Section7 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-0 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left column: Tristan's decision and efforts */}
          <div className="flex-1 space-y-8 lg:space-y-5 mb-10 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-center lg:text-left">
              The War in Ukraine
            </h2>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              Once this website was live and The Shepherd novel was sent to be
              published in early 2022, Tristan took his fight for Ashley to new
              extremes.
            </h3>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              Tristan left everything behind to volunteer with the Ukrainian
              International Legion to fight in the war against Russia in
              Ukraine. He believed that by risking his own life to defend other
              people&apos;s freedom, that others would help him in his fight for
              Ashley&apos;s.
            </h3>
          </div>

          {/* Right column: Photo of Tristan with fellow fighters */}
          <div className="flex-1">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <div className="relative max-w-sm lg:max-w-md  lg:aspect-[5/4] sm:aspect-[3/4] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/syn5.jpg"
                  alt="Tristan Nettles standing with fellow International Legion volunteers before a mission in Ukraine"
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

export default Section7;
