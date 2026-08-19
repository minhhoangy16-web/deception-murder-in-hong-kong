import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deception: Murder in Hong Kong | AI Forensic Scientist",
  description: "Trò chơi suy luận phá án kịch tính Deception: Murder in Hong Kong với Nhà giám định pháp y được điều khiển bởi AI thông minh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="tabletop-bg min-h-screen text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
