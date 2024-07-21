// "use client";
// import { styled, Container, Box,useTheme } from "@mui/material";
// import React, { useState } from "react";
// import Header from "@/app/(DashboardLayout)/layout/header/Header";
// import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
// import Footer from "./layout/footer/page";

// const MainWrapper = styled("div")(() => ({
//   // display: "flex",
//   // minHeight: "100vh",
//   // width: "100%",
// }));

// const PageWrapper = styled("div")(() => ({
//   display: "flex",
//   flexGrow: 1,
//   paddingBottom: "60px",
//   flexDirection: "column",
//   zIndex: 1,
//   backgroundColor: "transparent",
// }));




// export default function RootLayout({
//   children,
// }) {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
//   const theme = useTheme();
//   return (
//     <MainWrapper className="mainwrapper">

//       {/* ------------------------------------------- */}
//       {/* Header */}
//       {/* ------------------------------------------- */}
//       <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />


//       {/* ------------------------------------------- */}
//       {/* page Wrapper */}
//       {/* ------------------------------------------- */}
//       <PageWrapper className="page-wrapper"
//           sx={{
//               [theme.breakpoints.up("lg")]: {
//                 ml: `270px`,
//               },
//           }}
//       >

//         {/* ------------------------------------------- */}
//         {/* Sidebar */}
//         {/* ------------------------------------------- */}
//         <Sidebar
//           isSidebarOpen={isSidebarOpen}
//           isMobileSidebarOpen={isMobileSidebarOpen}
//           onSidebarClose={() => setMobileSidebarOpen(false)}
//         />

//         {/* ------------------------------------------- */}
//         {/* PageContent */}
//         {/* ------------------------------------------- */}
//         <Container
//           sx={{
//             paddingTop: "20px",
//             maxWidth: "1200px",
//           }}
//         >
//           {/* ------------------------------------------- */}
//           {/* Page Route */}
//           {/* ------------------------------------------- */}
//           <Box mt={4} sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
//           {/* ------------------------------------------- */}
//           {/* End Page */}
//           {/* ------------------------------------------- */}

//           {/* ------------------------------------------- */}
//           {/* Footer */}
//           {/* ------------------------------------------- */}
//           <Footer />
//         </Container>
//       </PageWrapper>
//     </MainWrapper>
//   );
// }

import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";
import '../../app/globals.css'

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
