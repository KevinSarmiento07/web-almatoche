import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MainCucPage = () => {
  return (
    <div>
      <div className="mt-14  mx-auto  w-full ">
        <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5">
          <NavLink to={"/cucuta/menu"}>
            <Button fullWidth sx={{ color: "black", fontWeight: "bold" }}>
              MENÚ
            </Button>
          </NavLink>
        </div>
        <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5">
          <NavLink to="https://api.whatsapp.com/send/?phone=%2B573102611139&text&type=phone_number&app_absent=0" target="_blank">
            <Button LinkComponent={"https://api.whatsapp.com/send/?phone=%2B573102611139&text&type=phone_number&app_absent=0"} fullWidth sx={{ color: "black", fontWeight: "bold" }}>
              WHATSAPP
            </Button>
          </NavLink>
        </div>
        <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5">
          <Button fullWidth sx={{ color: "black", fontWeight: "bold" }}>
            UBICACIÓN
          </Button>
        </div>
      </div>
    </div>
  );
};
