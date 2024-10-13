import { Raleway } from "next/font/google";
import "@/styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="grid min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
