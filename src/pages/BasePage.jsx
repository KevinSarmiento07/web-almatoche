import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";
export const BasePage = () => {
  return (
    <div className="h-screen bg-auto bg-center ">
      <div className="flex flex-col mx-auto h-full">
        <div className=" mx-auto my-5">
          <img src="/images/logo.jpg" className="rounded-full" width={225} height={150} />
        </div>
        <div className="bg-[#FECE00] rounded-3xl mx-2">
          <Typography variant="h4" fontWeight="bold" color="black">
            TRABAJAMOS CON EL ALMA 🤍
          </Typography>
        </div>

        <Outlet />

        <FooterPage />
      </div>
    </div>
  );
};
