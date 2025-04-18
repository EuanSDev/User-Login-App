import ReduxProvider from "@/components/ReduxProvider";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "User Login App",
  description: "An app that allows you to signup, login and view your user credentials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
