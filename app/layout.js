import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./new/Components/Sidebar";
import "./new/style.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Portfolio ",
  description: "Lakshmanshankar's Online Portfolio, Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
