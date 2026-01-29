"use client";

import { useRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { toast } from "react-toastify";

export default function NewsletterSignup() {
  // Replace with YOUR real Mailchimp URL (from Embedded form → copy the action URL)
  const url =
    "https://tristannettles.us6.list-manage.com/subscribe/post?u=3b4d67cc62297380c8173019b&id=b48a3744f0";

  const formRef = useRef(null);

  return (
    <section className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col justify-center font-[var(--font-serif)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-6 lg:py-6 flex-grow flex flex-col justify-center">
        <div className="text-center space-y-6 lg:space-y-6">
          {/* Heading – emotional & urgent */}
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight text-red-400">
            Stay Updated – Help Bring Ashley Home
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto text-slate-200">
            Join thousands who care. Get exclusive updates on Ashley&apos;s
            case, book excerpts, and new ways to take action. No spam — just
            hope and progress.
          </p>
          {/* Mailchimp form wrapper – dark card style */}
          <div className="max-w-lg mx-auto bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-2xl">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  {/* Status feedback */}
                  {status === "sending" && (
                    <div className="text-blue-400 text-center mb-4">
                      Sending...
                    </div>
                  )}
                  {status === "error" && (
                    <div
                      className="text-red-400 text-center mb-4"
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {status === "success" && (
                    <div className="text-green-400 text-center mb-4 font-semibold">
                      Thank you! You&apos;re now subscribed.
                    </div>
                  )}

                  <form
                    ref={formRef}
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = formRef.current;

                      if (!form.checkValidity()) {
                        form.reportValidity();
                        return;
                      }

                      const formData = {
                        EMAIL: document
                          .getElementById("mce-EMAIL")
                          .value.trim(),
                        FNAME:
                          document.getElementById("mce-FNAME")?.value.trim() ||
                          "",
                        b_YOUR_u_VALUE_YOUR_LIST_ID: "", // honeypot – must stay empty
                      };

                      subscribe(formData);

                      toast.info("Submitting your subscription...", {
                        position: "bottom-center",
                        autoClose: 3000,
                      });
                    }}
                    className="space-y-6"
                  >
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="mce-EMAIL"
                        className="block text-lg mb-2 text-slate-200"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-5 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    {/* Optional First Name */}
                    <div>
                      <label
                        htmlFor="mce-FNAME"
                        className="block text-lg mb-2 text-slate-200"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                        placeholder="Your first name"
                        className="w-full px-5 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    {/* Honeypot – hidden */}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_YOUR_u_VALUE_YOUR_LIST_ID"
                        tabIndex="-1"
                        defaultValue=""
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-100"
                    >
                      Subscribe & Stand with Ashley
                    </button>
                  </form>

                  <p className="text-sm text-slate-400 mt-6 text-center">
                    We respect your privacy. Unsubscribe anytime. Powered by
                    Mailchimp.
                  </p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
