import { Inter } from "next/font/google";
import "./globals.css";
import { SideBar } from "./Components/SideBar";
import CustomScroll from "./Components/CustomScroll"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Portfolio ",
  description: "Lakshmanshankar's Online Portfolio, Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SideBar>
            {children}
          </SideBar>
      </body>
    </html>
  );
}
