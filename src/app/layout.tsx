import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevUp App - V1.0",
  description: "A new way of showing yours projects ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
