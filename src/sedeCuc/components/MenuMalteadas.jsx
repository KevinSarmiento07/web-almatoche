/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const MenuMalteadas = ({ title, description, price, items = [], image }) => {
  return (
    <div id="malteadas" className="mt-14">
      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>
      <div className="my-3">
        <div className="min-h-36 ">
          <Card sx={{ display: "flex", height: "100%", backgroundColor: "#FCE480", color: "black" }}>
            <div className="flex flex-column text-start">
              <CardContent style={{ paddingBottom: 0 }}>
                <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"}>
                  {title}
                </Typography>
                <Typography variant="subtitle1" component="div" fontFamily={"'Poppins', sans-serif"} sx={{ color: "#001" }}>
                  {description}
                </Typography>
                <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} fontWeight={"bold"}>
                  $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </Typography>
              </CardContent>
            </div>
            {image != undefined ? <CardMedia component="img" sx={{ width: 125 }} image={`/images/menu/${image}`} alt={image} /> : ""}
          </Card>
        </div>
      </div>
      <div className="text-start my-3  bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={400} color={"black"}>
          TIPOS DE MALTEADAS:
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item, index) => {
          const { name } = item;
          return (
            <div className=" grid" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#FCE480", color: "black" }}>
                <div className="flex flex-column text-start">
                  <CardContent>
                    <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"}>
                      {name}
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
