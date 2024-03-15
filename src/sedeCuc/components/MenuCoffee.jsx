import { Card, CardContent, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
export const MenuCoffee = ({ title, clasico, variado }) => {
  return (
    <div id="coffee" className="mt-14">
      <div className=" text-start my-3 bg-[#2A1E16] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"#DBD5C7"}>
          {title}
        </Typography>
      </div>

      <div className="text-start my-3 bg-[#2A1E16] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"#DBD5C7"} fontWeight={900}>
          {clasico.title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 mt-5">
        {clasico.items.map((item, index) => {
          const { name, description, price } = item;
          return (
            <div className="min-h-36" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#2A1E16", color: "black" }}>
                <div className="flex flex-column text-start" style={{ width: "-webkit-fill-available" }}>
                  <CardContent style={{ paddingBottom: 0, borderColor: "#96714B", borderWidth: "medium" }}>
                    <Typography component="div" variant="h5" color={"#DBD5C7"} fontFamily={"'Poppins', sans-serif"} fontWeight={600}>
                      {name}
                    </Typography>
                    <Typography variant="subtitle1" component="div" color={"#DBD5C7"} fontFamily={"'Poppins', sans-serif"}>
                      {description}
                    </Typography>
                    <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"#DBD5C7"} fontWeight={"bold"}>
                      $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="text-start my-3 bg-[#2A1E16] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"#DBD5C7"} fontWeight={900}>
          {variado.title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 mt-5">
        {variado.items.map((item, index) => {
          const { name, description, price } = item;
          return (
            <div className="min-h-36" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#2A1E16", color: "black" }}>
                <div className="flex flex-column text-start" style={{ width: "-webkit-fill-available" }}>
                  <CardContent style={{ paddingBottom: 0, borderColor: "#96714B", borderWidth: "medium" }}>
                    <Typography component="div" variant="h5" color={"#DBD5C7"} fontFamily={"'Poppins', sans-serif"} fontWeight={600}>
                      {name}
                    </Typography>
                    <Typography variant="subtitle1" color={"#DBD5C7"} component="div" fontFamily={"'Poppins', sans-serif"}>
                      {description}
                    </Typography>
                    <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"#DBD5C7"} fontWeight={"bold"}>
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
