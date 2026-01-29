// app/components/Section2.tsx
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-grow flex flex-col justify-center ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 py-8 lg:py-0">
          {/* Left column: Tristan bio + portrait */}
          <div className="flex-1 mb-10 lg:mb-0">
            <h2 className="text-xl  leading-relaxed text-center lg:text-left mb-4 pt-4">
              Tristan Nettles was a medical school student, business owner, and
              former high school science teacher at Panyadee International
              School on Koh Samui, Thailand, from 2017 through 2020.
            </h2>

            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <div className="relative max-w-sm aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/shirtless.webp"
                  alt="Tristan Nettles"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right column: Details + screenshot */}
          <div className="flex-1 space-y-8 md:space-y-10">
            <h3 className="text-xl  leading-relaxed text-center lg:text-left mb-4">
              Tristan freely admitted to using bitcoin and the dark web to
              import party drugs to Panyadee International School starting in
              2017. More than a hundred packages were sent into the school
              before Ashley Oosthuizen ever lived in Thailand.
            </h3>

            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
              <div className="relative w-full aspect-[5/4] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/drugsmin.jpg"
                  alt="Party Drugs Being Ordered from NamasteLSD"
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

export default Section2;
