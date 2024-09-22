import { CardMedia, Typography, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

/* eslint-disable react/prop-types */
export const MenuDesayunos = ({ title, items }) => {
  return (
    <div id="bebidas" className="mt-14">
      <div className=" text-start my-3 bg-[#FCE480] py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>

      <div className="text-start my-3 bg-[#FCE480] w-max py-1 px-2 rounded-lg">
        <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} color={"black"} fontWeight={900}>
          $ {items.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </Typography>
      </div>
      <Carousel className="SecondExample w-full  h-[390px] md:h-[500px] " duration={100} navButtonsAlwaysVisible>
        {items.items.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Carousel>
      <br />
    </div>
  );
};

function Project({ item }) {
  return (
    <Paper className="Project paper-slider" elevation={10} sx={{ height: "100%", borderRadius: "20px", border: "solid", borderColor: "blanchedalmond" }}>
      <CardMedia image={`/images/menu/${item.image}`} alt={item.image} sx={{ backgroundSize: "cover", borderRadius: 5, md: { backgroundSize: "contain" } }}>
        <br />
        <div></div>
      </CardMedia>
    </Paper>
  );
}
