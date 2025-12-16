import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgeCode - لوحة التحكم المرئية لبناء المواقع",
  description: "منصة متقدمة لبناء المواقع بشكل مرئي باستخدام تقنيات حديثة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
