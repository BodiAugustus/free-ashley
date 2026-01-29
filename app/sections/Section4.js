// app/components/Section4.tsx  (or e.g. SectionInterrogation.tsx)
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-0 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          {/* Left column: Text */}
          <div className="flex-1 space-y-4 lg:space-y-4 mb-10 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left">
              Ashley&apos;s Coerced Confession
            </h2>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              After her arrest, Ashley Oosthuizen was taken to an unmarked
              government black house for interrogation. No lawyer or interpreter
              were present. Ashley was then forced to sign documents written
              entirely in Thai under threat of rape or death.
            </h3>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              This is tragically common in Thai police custody. Ashley was only{" "}
              <span className="text-red-400 font-bold">21 years old</span>, with
              no prior police record. She was completely alone, surrounded by 15
              men threatening her life if she refused.
            </h3>
            <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-md ">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/report1.png"
                  alt="Court-submitted document page 1: List of procedural injustices and coercion during interrogation"
                  fill
                  className="cover-all"
                />
              </div>
            </div>
          </div>

          {/* Right column: Court-submitted injustice documents */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-4">
              <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-md ">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                  <Image
                    src="/report2.png"
                    alt="Court-submitted document page 2: Continued evidence of threats and lack of due process"
                    fill
                    className="cover-all"
                  />
                </div>
              </div>

              <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-md mb-6">
                <div className="relative  aspect-[3/4] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                  <Image
                    src="/report3.png"
                    alt="Court-submitted document page 3: Further documentation of forced signing and intimidation"
                    fill
                    className="cover-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
