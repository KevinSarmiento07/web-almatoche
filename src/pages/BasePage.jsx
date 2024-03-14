import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";

export const BasePage = () => {
  return (
    <div className="h-full bg-auto bg-center ">
      <div className="flex flex-col mx-auto h-auto">
        <div className=" mx-auto my-5">
          <img src="/images/logo.jpg" className="rounded-full" width={225} height={150} />
        </div>
        <div>
          <Typography variant="h4" fontWeight="bold" color="black">
            TRABÁJANOS CON EL ALMA 💛
          </Typography>
        </div>

        <Outlet />

        <FooterPage />
      </div>
    </div>
  );
};
