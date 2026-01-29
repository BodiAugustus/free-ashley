// app/components/Section9.tsx  (or e.g. SectionSupportAshley.tsx)
import Image from "next/image";

const Section9 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 lg:py-10 flex-grow flex flex-col justify-center">
        <div className="space-y-8 lg:space-y-10 text-center">
          {/* Main plea */}
          <h2 className="text-3xl sm:text-4xl  font-bold leading-tight text-red-400">
            Help Free Ashley by joining her fight today!
          </h2>

          {/* Book CTA – prominent */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-400">
              Pre-purchase Tristan and Ashley&apos;s unbelievable true story{" "}
              <em>False Positive</em> now!
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              <em>False Positive</em> is being published on October 20, 2026.
              Every copy sold gives Ashley more resources and publicity to win
              her freedom.
            </p>

            <a
              href="https://www.TristanNettles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-sky-950 font-bold text-2xl rounded-xl shadow-2xl transform hover:scale-105 active:scale-100 transition-all duration-200"
            >
              Pre-Order Ashley&apos;s Book
            </a>
          </div>

          {/* Social channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {/* YouTube */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">
                Join the YouTube Channel
              </h4>
              <a
                href="https://www.youtube.com/@TristanNettlesFreeAshley"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 active:scale-100 transition-all duration-200"
              >
                Subscribe on YouTube
              </a>
            </div>

            {/* Twitter/X */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Follow on X (Twitter)</h4>
              <a
                href="https://twitter.com/tristan_nettles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 active:scale-100 transition-all duration-200"
              >
                Follow @tristan_nettles
              </a>
            </div>

            {/* Donation */}
            <div className=" col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
              <h4 className="text-xl font-semibold">Direct Donation</h4>

              <a
                href="https://www.backabuddy.co.za/campaign/ashley-oosthuizens-fight-for-freedom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 active:scale-100 transition-all duration-200"
              >
                Ashley&apos;s Prison Fund
              </a>
            </div>
          </div>

          {/* Optional: Add Ashley photo if desired for emotional close */}
          {/* 
          <div className="relative mx-auto max-w-md lg:max-w-lg pt-8">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-slate-700/50">
              <Image
                src="/ashley6.jpg"
                alt="Ashley Oosthuizen teaching children – a reminder of her kind spirit"
                fill
                className="object-cover"
              />
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Section9;
