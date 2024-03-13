/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from "@mui/material";

export const MenuEnCopas = ({ title, items = [] }) => {
  return (
    <div id="enCopas" className="mt-14">
      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 ">
        {items.map((item, index) => {
          const { name, description, price } = item;
          return (
            <div className="min-h-36" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#FCE480", color: "black" }}>
                <div className="flex flex-column text-start">
                  <CardContent style={{ paddingBottom: 0 }}>
                    <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"}>
                      {name}
                    </Typography>
                    <Typography variant="subtitle1" component="div" fontFamily={"'Poppins', sans-serif"} sx={{ color: "#001" }}>
                      {description}
                    </Typography>
                    <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} fontWeight={"bold"}>
                      $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
