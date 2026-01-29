// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Export metadata (no 'type' needed in JS)
export const metadata = {
  metadataBase: new URL("https://freeashley.org"),

  title: {
    default:
      "Free Ashley Oosthuizen – Fighting Wrongful Imprisonment in Thailand",
    template: "%s | Free Ashley Oosthuizen",
  },

  description:
    "Ashley Oosthuizen has been imprisoned in Thailand since October 2020 after being coerced into signing for MDMA. Join the fight to bring her home through awareness, support, and action.",

  keywords: [
    "Ashley Oosthuizen",
    "Free Ashley",
    "Thai prison injustice",
    "Koh Samui",
    "wrongful imprisonment",
    "coerced confession",
    "human rights Thailand",
    "Tristan Nettles",
    "Hearts4Ashley",
    "The Shepherd",
    "False Positive",
    "The King",
    "Ukraine War",
    "The War in Ukraine",
  ],

  authors: [
    { name: "Tristan Nettles", url: "https://twitter.com/tristan_nettles" },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Free Ashley",
    title: "Free Ashley Oosthuizen – Bring Her Home",
    description:
      "Over 5 years in Thai prison. Help raise awareness, funds, and global pressure for justice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free Ashley Oosthuizen Campaign – Justice for Ashley",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Ashley Oosthuizen – Join the Fight for Justice",
    description:
      "Wrongfully imprisoned in Thailand since 2020. Share her story. Support the cause. #FreeAshley",
    images: ["/twitter-card.jpg"],
    creator: "@tristan_nettles",
    site: "@tristan_nettles",
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${inter.variable} dark`}>
      <head>
        {/* Optional: Google Search Console verification tag if you have one */}
        {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
      </head>
      <body className="overflow-x-hidden antialiased bg-[var(--color-primary)] text-white font-[var(--font-inter)]">
        <Navbar />
        {children}
        <ToastContainer position="bottom-center" theme="dark" />
        {/* Structured data (JSON-LD) for better search engine understanding */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Free Ashley",
              url: "https://freeashley.org",
              description:
                "Campaign to free Ashley Oosthuizen from wrongful imprisonment in Thailand.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://freeashley.org/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
