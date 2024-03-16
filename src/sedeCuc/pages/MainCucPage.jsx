import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MainCucPage = () => {
  return (
    <div>
      <div className="mt-14  mx-auto  w-full ">
        <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5 border-yellow-500 border-r-[1px] border-t-[1px] border-l-[1px]  border-b-[6px]">
          <NavLink to={"/cucuta/menu"}>
            <Button fullWidth sx={{ color: "black", fontWeight: "bold" }}>
              MENÚ
            </Button>
          </NavLink>
        </div>
        <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5 border-yellow-500 border-r-[1px] border-t-[1px] border-l-[1px]  border-b-[6px]">
          <NavLink to="https://api.whatsapp.com/send/?phone=%2B573102611139&text&type=phone_number&app_absent=0" target="_blank">
            <Button LinkComponent={"https://api.whatsapp.com/send/?phone=%2B573102611139&text&type=phone_number&app_absent=0"} fullWidth sx={{ color: "black", fontWeight: "bold" }}>
              WHATSAPP
            </Button>
          </NavLink>
        </div>
        <div className="bg-[#FECE00] hover:bg-yellow-400 w-3/6 mx-auto rounded-full mb-5 border-yellow-500 border-r-[1px] border-t-[1px] border-l-[1px]  border-b-[6px]">
          <NavLink to="https://maps.app.goo.gl/PX8Vf6x1StWsS2MA8?g_st=ic" target="_blank">
            <Button fullWidth sx={{ color: "black", fontWeight: "bold" }}>
              UBICACIÓN
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
