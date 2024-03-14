/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from "@mui/material";

export const MenuSaludable = ({ title, items = [], batidos, parfaits }) => {
  return (
    <div id="saludable" className="mt-14">
      <div className="text-start my-3 bg-[#8B9F71] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 ">
        {items.map((item, index) => {
          const { name, description, price } = item;
          return (
            <div className="min-h-36" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#8B9F71", color: "black" }}>
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

      <div className="text-start my-3 bg-[#8B9F71] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          {batidos.description}:
        </Typography>
      </div>
      <div>
        <div className=" sm:flex  justify-start text-start">
          {batidos.items?.map((value, i) => {
            return (
              <div key={i} className="my-1 pr-3">
                <Card sx={{ display: "flex", backgroundColor: "#8B9F71" }}>
                  <div className="flex flex-col w-full">
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={"bold"}>
                        {value.name}
                      </Typography>
                      <Typography variant="subtitle1" color="whitesmoke" component="div" fontFamily={"'Poppins', sans-serif"}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" sm:flex  justify-start text-start">
        {batidos.size?.map((value, i) => {
          return (
            <div key={i} className="my-1 pr-3">
              <Card sx={{ display: "flex", backgroundColor: "#8B9F71" }}>
                <div className="flex flex-col w-full">
                  <CardContent sx={{ flex: "1 0 auto", display: "flex", justifyContent: "space-between" }}>
                    <Typography component="div" variant="h6" fontFamily={"'Poppins', sans-serif"}>
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
      <div className="text-start mt-5 mb-3 bg-[#8B9F71] w-auto py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          {parfaits.description}:
        </Typography>
      </div>
      <div>
        <div className=" sm:flex  justify-start text-start">
          {parfaits.items?.map((value, i) => {
            return (
              <div key={i} className="my-1 pr-3">
                <Card sx={{ display: "flex", backgroundColor: "#8B9F71" }}>
                  <div className="flex flex-col w-full">
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={"bold"}>
                        {value.name}
                      </Typography>
                      <Typography variant="subtitle1" color="whitesmoke" component="div" fontFamily={"'Poppins', sans-serif"}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" sm:flex  justify-start text-start">
        {parfaits.size?.map((value, i) => {
          return (
            <div key={i} className="my-1 pr-3">
              <Card sx={{ display: "flex", backgroundColor: "#8B9F71" }}>
                <div className="flex flex-col w-full">
                  <CardContent sx={{ flex: "1 0 auto", display: "flex", justifyContent: "space-between" }}>
                    <Typography component="div" variant="h6" fontFamily={"'Poppins', sans-serif"}>
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
