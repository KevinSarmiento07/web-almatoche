/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from "@mui/material";

export const MenuAdiciones = ({ title, items = [] }) => {
  return (
    <div id="adiciones" className="mt-14">
      <div className=" text-start my-3 bg-[#f8c82c] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>

      <div className=" sm:flex  justify-start text-start flex-wrap">
        {items?.map((value, i) => {
          return (
            <div key={i} className="my-1 pr-3">
              <Card sx={{ display: "flex", backgroundColor: "#f8c82c" }}>
                <div className="flex w-full">
                  <CardContent sx={{ flex: "1 0 auto", display: "flex", justifyContent: "space-between" }} style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <Typography component="div" variant="h6" fontFamily={"'Poppins', sans-serif"} marginRight={5}>
                      {value.name}
                    </Typography>
                    <Typography variant="h6" component="div" fontFamily={"'Poppins', sans-serif"} alignSelf={"end"} fontWeight={"bold"}>
                      ${value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
