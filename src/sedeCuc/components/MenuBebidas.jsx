import { Card, CardContent, CardMedia, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
export const MenuBebidas = ({ title, naturales, refrescantes, sodas, other }) => {
  return (
    <div id="bebidas" className="mt-14">
      <div className=" text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>
      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          {naturales.title}
        </Typography>
      </div>

      <div className="text-start my-3  bg-[#FCE480] w-auto py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={400} color={"black"}>
          {naturales.description}
        </Typography>
      </div>

      <div className=" flex flex-wrap gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {naturales.fruits.map((item, index) => {
          return (
            <div className=" grid" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#FCE480", color: "black" }}>
                <div className="flex flex-column text-start">
                  <CardContent style={{ paddingTop: 5, paddingBottom: 5 }}>
                    <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"}>
                      {item}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 mt-5">
        {naturales.items.map((item, index) => {
          const { name, description, price } = item;
          return (
            <div className="min-h-36" key={index}>
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#FCE480", color: "black" }}>
                <div className="flex flex-column text-start" style={{ width: "-webkit-fill-available" }}>
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
                {item.image != undefined ? <CardMedia component="img" sx={{ width: 125 }} image={`/images/menu/${item.image}`} alt={item.image} /> : ""}
              </Card>
            </div>
          );
        })}
      </div>

      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          {refrescantes.title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 mt-5">
        {refrescantes.items.map((item, index) => {
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

      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          {sodas.title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 mt-5">
        {sodas.items.map((item, index) => {
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
                {item.image != undefined ? <CardMedia component="img" sx={{ width: 125 }} image={`/images/menu/${item.image}`} alt={item.image} /> : ""}
              </Card>
            </div>
          );
        })}
      </div>

      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          {other.title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 mt-5">
        {other.items.map((item, index) => {
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
