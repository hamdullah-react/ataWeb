import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MGSS - Quality Products for Every Need",

};

export default function Layout({ children }) {
  return (
<>
<html lang="en">
      <body className={inter.className}>
        {children}
        
  
   
      </body>
    </html>
</>
  );
}
