import "./globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Наше Наследие",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
