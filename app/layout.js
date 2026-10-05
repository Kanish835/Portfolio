import "./globals.css";

export const metadata = {
  title: "Kanish B M | Software Developer",
  description: "Portfolio of Kanish B M — CS undergrad, Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: "#0a0a0f",
                  secondary: "#0d1117",
                  surface: "#161b22",
                  surfaceLight: "#1c2128",
                  accent: "#58a6ff",
                  accentDim: "#1f6feb",
                  muted: "#8b949e",
                  border: "#30363d",
                  borderLight: "#3d444d",
                  textPrimary: "#f0f6fc",
                  textSecondary: "#c9d1d9",
                }
              }
            }
          }
        `}} />
      </head>
      <body className="bg-primary text-textPrimary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
