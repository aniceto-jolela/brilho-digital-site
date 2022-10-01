import React from "react";
import Header from "components/menu/header";
import Footer from "components/menu/footer";
import { PropsChildren } from "./types";
import { Box } from "@mui/material";

const Layout = ({ children }: PropsChildren) => {
  return (
    <React.Fragment>
      <Header />
      <Box sx={{backgroundColor: "#f7f6f6",marginTop: 6,marginBottom: -1,paddingTop: 5,paddingBottom: 2,}} >
        {children}
      </Box>

      <Footer />
    </React.Fragment>
  );
};
export default Layout;
