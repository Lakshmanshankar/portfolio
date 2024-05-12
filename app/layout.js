import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "./v2/ThemeProvider";

export const metadata = {
  title: "Lakshmanshankar portfolio ",
  description:
    "Lakshmanshankar portflio, I am fullstack developer with skills in modern web technologies and linux systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
