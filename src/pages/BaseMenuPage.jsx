import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";
export const BaseMenuPage = () => {
  return (
    <div className="h-full bg-auto bg-center ">
      <div className="flex flex-col mx-auto h-auto">
        <Outlet />

        <FooterPage />
      </div>
    </div>
  );
};
