import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilal K. | Full-Stack Software Developer",
  description:
    "Personal portfolio website showcasing projects, skills, journey, and contact information.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const key = "portfolio-theme";
            const stored = localStorage.getItem(key);
            const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const theme = stored === "light" || stored === "dark" ? stored : system;
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
          })();`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
