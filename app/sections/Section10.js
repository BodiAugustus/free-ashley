// app/components/Section10.tsx  (or e.g. SectionJoinTheFight.tsx – final call-to-action)
import Image from "next/image";

const Section10 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 lg:py-10 flex-grow flex flex-col justify-center">
        <div className="space-y-10 lg:space-y-10 text-center">
          {/* Urgent plea with updated age/sentence */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-red-400">
            Join the Fight to Free Ashley!
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto">
            Ashley Oosthuizen is only{" "}
            <span className="text-yellow-400 font-bold">26 years old</span>.
            Right now, as you read this, she remains in a Thai prison—miserable,
            isolated, and far from home. She has served over{" "}
            <span className="text-yellow-400 font-bold">5 years</span>.
          </h3>

          <h3 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto font-bold">
            It is in no one&apos;s best interest for her to continue suffering
            in these wretched conditions. Help us bring her home.
          </h3>

          {/* Happy photo for contrast */}
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="relative w-full aspect-[5/4] overflow-hidden rounded-2xl shadow-2xl border border-slate-700/50 max-w-sm">
              <Image
                src="/Ashley5.jpg"
                alt="Ashley Oosthuizen happy and free on a beach with friends – the life she deserves to reclaim"
                fill
                className="cover-all"
              />
            </div>
          </div>

          {/* Final rallying cry */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-yellow-400 pt-8">
            Join our growing movement right now as we fight to{" "}
            <span className="text-red-400">FREE ASHLEY OOSTHUIZEN</span> from
            Thai prison!
          </h3>

          <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-yellow-500 tracking-wide pt-6">
            #FreeAshley
          </div>

          {/* Tie back to support from prior section */}
          <p className="text-lg sm:text-xl mt-8 max-w-3xl mx-auto text-slate-300">
            Continue supporting Ashley&apos;s fight through the books, YouTube,
            X, or direct donation. Every action brings her closer to freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section10;
