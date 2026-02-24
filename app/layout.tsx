import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator To Cash — Formation Création de Contenu + IA",
  description: "Maîtrise l'IA pour créer du contenu qui convertit et génère des revenus. Formation complète pour entrepreneurs et créateurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: {
                      purple: '#7C3AED',
                      purpleLight: '#A78BFA',
                      orange: '#F97316',
                      orangeLight: '#FDBA74',
                      dark: '#0F0A1E',
                      card: '#1A1033',
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-[#0F0A1E] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
