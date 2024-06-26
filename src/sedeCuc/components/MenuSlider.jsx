import { CardMedia, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
/* eslint-disable react/prop-types */
export const MenuSlider = ({ items = [] }) => {
  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <div className="text-center my-3 bg-[#FCE480] w-auto py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          PRODUCTOS ESTRELLA
        </Typography>
      </div>
      <Carousel className="SecondExample w-full  h-[390px] md:h-[500px] " duration={100} navButtonsAlwaysVisible>
        {items.map((item, index) => {
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
      <Typography variant="h5" sx={{ width: "100%", backgroundColor: "#FCE480", borderRadius: 10 }} fontFamily={"'Poppins', sans-serif"} fontWeight={900} color={"black"}>
        {item.name}
      </Typography>
    </Paper>
  );
}
