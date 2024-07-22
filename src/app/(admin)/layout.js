import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBAr from "@/dashboardComponents/SideBAr";
import { DashBoardContext } from "@/dashboardComponents/dashboardContext/DashBoardContext";
import { ToastContainer, toast } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MGSS - Quality Products for Every Need",
};

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ToastContainer/>
          <DashBoardContext>
            <SideBAr />
            {children}
          </DashBoardContext>
        </body>
      </html>
    </>
  );
}
