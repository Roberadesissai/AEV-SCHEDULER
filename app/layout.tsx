import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { Sidemenu } from "@/components/side-menu";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My App',
  description: 'An advanced dashboard application.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}