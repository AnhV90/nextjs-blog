"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider defaultTheme="light" attribute="class">
      {children}
    </NextThemesProvider>
  );
}
