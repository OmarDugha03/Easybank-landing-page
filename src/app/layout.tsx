import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          montserrat.className +
          ` w-full mx-auto text-slate-900 dark:text-slate-200`
        }>
        {children}
      </body>
    </html>
  );
}
