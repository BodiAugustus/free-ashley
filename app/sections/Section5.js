// app/components/Section5.tsx  (or e.g. SectionPrisonReality.tsx)
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-0 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left column: Prison photo + key facts */}
          <div className="flex-1 space-y-8 lg:space-y-4 mb-10 lg:mb-0">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-md">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50">
                <Image
                  src="/ashleyPrison.jpg"
                  alt="Ashley Oosthuizen inside Koh Samui Provincial Prison with her mother, Lynn."
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left">
              Ashley has been incarcerated since October 8, 2020, in Thai
              Prison.
            </h3>
          </div>

          {/* Right column: Examples list + closing statement */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            <div className="p-6 border border-slate-700/50 rounded-xl bg-slate-900/30 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl leading-relaxed text-center lg:text-left mb-5">
                Reports of rape, torture, and murder in police custody on
                Thailand&apos;s Gulf are disturbingly common.
              </h3>
              <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
                Recent Documented Cases of Abuse in the Region:
              </h3>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li>
                  <a
                    href="https://www.aljazeera.com/news/2021/8/31/drug-suspects-murder-ignites-calls-for-police-reform-in-thailand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-red-500"
                  >
                    1) Drug suspect suffocated to death by police on camera
                    (Nakhon Sawan, Aug 2021)
                  </a>
                </li>
                <li>
                  <a
                    href="https://thethaiger.com/hot-news/crime/koh-samui-senior-police-officer-faces-charges-for-allegedly-raping-a-suspect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-red-500"
                  >
                    2) Senior officer raped 21-year-old Burmese woman inside Bo
                    Phut Police Station, Koh Samui – Jan 2021{" "}
                    <span className="text-yellow-400 font-bold">
                      (same facility Ashley was held in)
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.reddit.com/r/ThailandTourism/comments/ly77e1/getting_away_with_crime_on_koh_tao_courtesy_of/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-red-500"
                  >
                    3) Koh Tao police help cover up assaults and murders (March
                    2021)
                  </a>
                </li>
                <li>
                  <a
                    href="https://thethaiger.com/news/national/police-in-thailand-reward-snitch-with-drugs-gmt?fbclid=IwAR3ch1rO8q8Wjn_VJ6rSuLjt_LzjcVjwVW_KjdAFJuZzawpeHTcm4taHwQg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-red-500"
                  >
                    4) Police rewarded informant with drugs (Thailand, Oct 2022)
                  </a>
                </li>
                <li>
                  <a
                    href="https://fulcrum.sg/thailands-police-in-2025-politicised-reshuffle-and-endemic-corruption/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-red-500"
                  >
                    5) Police accused of corruption, extortion, and kidnapping
                    Koh Samui, 2025
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
