import { Sidebar } from "./Components/Sidebar";
import "./style.css"
export default function RootLayout({ children }) {
  return (
    <Sidebar>{children}</Sidebar>
  );
}
