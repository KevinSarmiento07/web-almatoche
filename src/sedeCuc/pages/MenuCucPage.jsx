import { NavBarCuc } from "../components/NavBarCuc";
import "../components/styles/MenuCucPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const MenuCucPage = () => {
  const data = {
    conHelado: {
      title: "CON HELADO",
      items: [
        {
          name: "Cono Sencillo",
          description: "Cono o vaso de una bola de helado de preferencia.",
          price: 4000,
        },
        {
          name: "Cono Doble",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 7000,
        },
        {
          name: "Cono Kids",
          description: "Una bola de helado de vainilla decorada en forma de ratoncito.",
          price: 5000,
        },
        {
          name: "Canastilla de Galleta S",
          description: "Dos bolas de helado de preferencia con salsa de preferencia.",
          price: 7500,
        },
        {
          name: "Canastilla de Galleta M",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 11000,
        },
        {
          name: "Canastilla de Galleta con Fruta",
          description: "Dos bolas de helado de preferencia + una fruta de preferencia (banano, fresa, mango, durazno).",
          price: 9000,
        },
        {
          name: "Brownie con Helado",
          description: "Brownie, helado de vainilla, salsa de chocolate y cereza",
          price: 9900,
        },
        {
          name: "Banana Split",
          description: "Helado de fresa, vainilla y chocolate, crema chantilly y cerezas.(Adiciona queso por $2.000).",
          price: 13000,
        },
      ],
    },
    enCopas: {
      title: "EN COPAS",
      items: [
        {
          name: "Copa Satudary",
          description: "Dos bolas de helado de preferencia, galleta de cono con salsa de chocolate o arequipe.",
          price: 8900,
        },
        {
          name: "Copa Melocotón",
          description: "Melocotones en almíbar con crema chantilly y dos bolas de helado de macadamia.",
          price: 11000,
        },
        {
          name: "Copa Toche",
          description: "Helado de vainilla, maracuyá y moracon fruta (banano, fresa y mango), crema de la casa y crema chantilly.",
          price: 14000,
        },
        {
          name: "Copa Fresas con Queso",
          description: "Fresas, crema chantilly, crema de leche, salsa de frutos rojos y queso.",
          price: 14000,
        },
        {
          name: "Fresas con Crema*",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 11000,
        },
      ],
    },
    malteadas: {
      title: "MALTEADAS",
      description: "Todas nuestras malteadas se preparan con 200gr de helado de vainilla y llevan crema chantilly",
      price: 14000,
      items: [
        {
          name: "Brownie",
        },
        {
          name: "Café",
        },
        {
          name: "MiniChips",
        },
        {
          name: "Oreo",
        },
        {
          name: "Galaxia Kids",
        },
        {
          name: "Frutos Rojos",
        },
        {
          name: "Vainila",
        },
        {
          name: "Avellana",
        },
        {
          name: "LLanera (Pan de Arroz)",
        },
      ],
    },
    ensaladaDeFrutas: {
      title: "ENSALADAS DE FRUTAS",
      description: "Nuestras ensaladas de frutas están preparadas con:",
      fruits: ["Banano", "Mango", "Fresa", "Papaya", "Melón", "Arandanos", "Manzana", "Kiwi", "Queso", "Granola", "Crema de la casa"],
      items: [
        {
          name: "Ensalada Ligera",
          description: "Una bola de helado de preferenciapara complementar.",
          price: 14900,
        },
        {
          name: "Ensalada Toche",
          description: "Una bola de helado de preferenciapara complementar.",
          price: 17000,
        },
      ],
    },
    wafles: {
      title: "WAFLES",
      items: [
        {
          name: "Waffle Ármalo Como Quieras",
          description: "Con tres sencillos pasos tendrás el waffle perfecto:",
          price: 16900,
        },
        {
          name: "Waffle Clasico",
          description: "Waffle, una bola de helado de preferencia y elige una salsa (arequipe, mora, chocolate, avellana o leche condensada).",
          price: 14900,
        },
        {
          name: "Waffle Toche",
          description: "Waffle, avellana, helado de preferencia, fresa, banano y lluvia de galleta oreo triturada",
          price: 18900,
        },
      ],
    },
    saludable: {
      title: "SALUDABLE",
      items: [
        {
          name: "Ensalada de Frutas con Granola",
          description: "Ensalada de banano, mango, fresa, papaya, melón, arándanos, manzana y kiwi.",
          price: 13000,
        },
      ],
      batidos: {
        title: "BATIDOS",
        description: "Nuestros Batidos",
        items: [
          {
            name: "Frutos Amarillos",
            description: "Banano - Mango",
          },
          {
            name: "Frutos Verdes",
            description: "Limón - Mango - Manzana Verde",
          },
          {
            name: "Frutos Rojos",
            description: "Fresa - Mora",
          },
        ],
        size: [
          {
            name: "Batido 16 onz en agua",
            price: 8000,
          },
          {
            name: "Batido 16 onz en leche",
            price: 9500,
          },
        ],
      },
    },
  };
  return (
    <div>
      <NavBarCuc />

      <div className="mx-4 mt-24 mb-52">
        <div id="conHelado">
          <div className="text-start my-3 bg-[#f8c82c] w-max py-1 px-2 rounded-lg">
            <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
              {data.conHelado.title}
            </Typography>
          </div>
          <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 ">
            {data.conHelado.items.map((item, index) => {
              const { name, description, price } = item;
              return (
                <div className="min-h-36" key={index}>
                  <Card sx={{ display: "flex", height: "100%", backgroundColor: "#f8c82c", color: "black" }}>
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
        <div id="enCopas" className="mt-14">
          <div className="text-start my-3 bg-[#f8c82c] w-max py-1 px-2 rounded-lg">
            <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
              {data.enCopas.title}
            </Typography>
          </div>
          <div className=" flex flex-wrap gap-4 grid sm:grid-cols-2 ">
            {data.enCopas.items.map((item, index) => {
              const { name, description, price } = item;
              return (
                <div className="min-h-36" key={index}>
                  <Card sx={{ display: "flex", height: "100%", backgroundColor: "#f8c82c", color: "black" }}>
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

        <div id="malteadas" className="mt-14">
          <div className="text-start my-3 bg-[#f8c82c] w-max py-1 px-2 rounded-lg">
            <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={800} color={"black"}>
              {data.malteadas.title}
            </Typography>
          </div>
          <div className="my-3">
            <div className="min-h-36 ">
              <Card sx={{ display: "flex", height: "100%", backgroundColor: "#f8c82c", color: "black" }}>
                <div className="flex flex-column text-start">
                  <CardContent style={{ paddingBottom: 0 }}>
                    <Typography component="div" variant="h5" fontFamily={"'Poppins', sans-serif"}>
                      {data.malteadas.title}
                    </Typography>
                    <Typography variant="subtitle1" component="div" fontFamily={"'Poppins', sans-serif"} sx={{ color: "#001" }}>
                      {data.malteadas.description}
                    </Typography>
                    <Typography variant="h6" fontFamily={"'Poppins', sans-serif"} fontWeight={"bold"}>
                      $ {data.malteadas.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
          <div className="text-start my-3  bg-[#f8c82c] w-max py-1 px-2 rounded-lg">
            <Typography variant="h5" fontFamily={"'Poppins', sans-serif"} fontWeight={400} color={"black"}>
              TIPOS DE MALTEADAS:
            </Typography>
          </div>
          <div className=" flex flex-wrap gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.malteadas.items.map((item, index) => {
              const { name } = item;
              return (
                <div className=" grid" key={index}>
                  <Card sx={{ display: "flex", height: "100%", backgroundColor: "#f8c82c", color: "black" }}>
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
      </div>
    </div>
  );
};
