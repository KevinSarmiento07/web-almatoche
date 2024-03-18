import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="mt-14  mx-auto  w-full h-full">
      <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5 border-yellow-500 border-r-[1px] border-t-[1px] border-l-[1px]  border-b-[6px]">
        <NavLink to="/villavicencio">
          <Button fullWidth sx={{ color: "black", fontWeight: "bold" }}>
            SEDE VILLAVICENCIO
          </Button>
        </NavLink>
      </div>
      <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full border-yellow-500 border-r-[1px] border-t-[1px] border-l-[1px]  border-b-[6px]">
        <NavLink to="/cucuta">
          <Button fullWidth sx={{ color: "black", fontWeight: "bold" }}>
            SEDE CÚCUTA
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
