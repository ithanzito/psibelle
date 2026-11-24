import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppAndPwa } from "@/components/WhatsAppCta";
import { PSI_PROFILE } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1F363D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(PSI_PROFILE.siteUrl),
  title: {
    default: `${PSI_PROFILE.name} | ${PSI_PROFILE.crp} – TCC em Sorocaba e Online`,
    template: `%s | ${PSI_PROFILE.name}`,
  },
  description:
    "Psicóloga Isabelle Momesso (CRP 06/85692) em Sorocaba/SP (Clínica Almenara) e Terapia Online para todo o Brasil e exterior. Terapia Cognitivo-Comportamental (TCC) para Adolescentes, Adultos, Idosos e Casais.",
  keywords: [
    "Psicóloga em Sorocaba",
    "Isabelle Momesso",
    "Psicóloga TCC Sorocaba",
    "Terapia Cognitivo-Comportamental",
    "Terapia Online",
    "Clínica Almenara Sorocaba",
    "Ansiedade",
    "Depressão",
    "Limites e Autoestima",
    "Terapia de Casal Sorocaba",
    "CRP 06/85692",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: PSI_PROFILE.siteUrl,
    siteName: PSI_PROFILE.name,
    title: `${PSI_PROFILE.name} | ${PSI_PROFILE.crp} – Psicoterapia TCC`,
    description:
      "Atendimentos presenciais em Sorocaba (Clínica Almenara) e online para todo o Brasil e exterior. Escuta acolhedora, ética e baseada em evidências científicas.",
    images: [
      {
        url: "/images/isabelle-poltrona.jpg",
        width: 1024,
        height: 1280,
        alt: PSI_PROFILE.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: PSI_PROFILE.name,
    identifier: PSI_PROFILE.crp,
    url: PSI_PROFILE.siteUrl,
    telephone: "+55-15-99123-0882",
    email: PSI_PROFILE.email,
    image: `${PSI_PROFILE.siteUrl}/images/isabelle-poltrona.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Coronel Nogueira Padilha, 1100",
      addressLocality: "Sorocaba",
      addressRegion: "SP",
      postalCode: "18020-000",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [PSI_PROFILE.instagramUrl, PSI_PROFILE.tiktokUrl],
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-sand-50 text-sage-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppAndPwa />
      </body>
    </html>
  );
}
