import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title:
    "Muhammad Abu Bakkar Siddik |  Full Stack Developer | React js, React Native, Python, Django",
  description:
    "I am a full-stack developer with hands-on experience across the MERN stack, Python, Django, and React Native. My journey began with building dynamic web applications using MongoDB, Express, React, and Node.js, and has since grown to encompass server-side development with Django and cross-platform mobile development with React Native — giving me the versatility to work across the full spectrum of modern application development.",
  // add favicon
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        className="font-sans antialiased bg-black text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
