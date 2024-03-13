import Paper from "@mui/material/Paper";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
/* eslint-disable react/prop-types */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "inherit",
  ...theme.typography.body2,
  textAlign: "center",
  color: "black",
  flexGrow: 1,
  fontFamily: "'Poppins', sans-serif",
}));
export const MenuWafles = ({ title, items = [] }) => {
  return (
    <div id="enCopas" className="mt-14">
      <div className="text-start my-3 bg-[#f8c82c] w-max py-1 px-2 rounded-lg">
        <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
          {title}
        </Typography>
      </div>
      <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 ">
        {items.map((item, index) => {
          const { name, description, price } = item;
          const display = item.steps.length > 0 ? "contents" : "";
          const heigth = item.steps.length > 0 ? "max-content" : "100%";
          return (
            <div className="min-h-36" key={index} style={{ display: display }}>
              <Card sx={{ display: "flex", height: heigth, backgroundColor: "#f8c82c", color: "black" }}>
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
              {item.steps?.length > 0 ? (
                <div>
                  {item.steps?.map((value, i) => {
                    console.log("Entro en el map");
                    console.log(value);
                    return (
                      <div key={i} className="my-1">
                        <Card sx={{ display: "flex", backgroundColor: "#CB9752", width: "100%" }}>
                          <div className="flex w-full">
                            <CardContent sx={{ flex: "1 0 auto", minWidth: 155 }}>
                              <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"}>
                                {value.name}
                              </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div" fontFamily={"'Poppins', sans-serif"}>
                                {value.description}
                              </Typography>
                            </CardContent>
                            <div className="flex items-center pl-1 pb-1 bg-[#E0AD7D] w-full">
                              <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                                {value.items.map((value, j) => {
                                  return (
                                    <Item elevation={4} key={j}>
                                      {value}
                                    </Item>
                                  );
                                })}
                              </Stack>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
