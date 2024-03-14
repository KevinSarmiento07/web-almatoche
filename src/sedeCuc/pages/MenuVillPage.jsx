import { MenuConHelado } from "../components/MenuConHelado";
import { MenuEnCopas } from "../components/MenuEnCopas";
import { MenuMalteadas } from "../components/MenuMalteadas";
import { MenuEnsFrutas } from "../components/MenuEnsFrutas";
import { MenuWafles } from "../components/MenuWafles";
import { MenuSaludable } from "../components/MenuSaludable";
import { MenuBebidas } from "../components/MenuBebidas";
import { MenuAdiciones } from "../components/MenuAdiciones";
import { NavBarVill } from "../components/NavBarVill";
export const MenuVillPage = () => {
  const data = {
    conHelado: {
      title: "CON HELADO",
      items: [
        {
          name: "Cono Sencillo",
          description: "Cono o vaso de una bola de helado de preferencia.",
          price: 5000,
        },
        {
          name: "Cono Doble",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 8000,
        },
        {
          name: "Cono Kids",
          description: "Una bola de helado de vainilla decorada en forma de ratoncito.",
          price: 6000,
        },
        {
          name: "Canastilla de Galleta S",
          description: "Dos bolas de helado de preferencia con salsa de preferencia.",
          price: 8000,
        },
        {
          name: "Canastilla de Galleta M",
          description: "Tres bolas de helado de preferencia con salsa de preferencia.",
          price: 11000,
        },
        {
          name: "Canastilla de Galleta con Fruta",
          description: "Dos bolas de helado de preferencia + una fruta de preferencia (banano, fresa, mango, durazno).",
          price: 10000,
        },
        {
          name: "Brownie con Helado",
          description: "Brownie, helado de vainilla, salsa de chocolate y cereza",
          price: 11000,
        },
        {
          name: "Gusanito",
          description: "Dos bolas de helado de preferencia 3 bolas de helado (vainilla, fresa, chocolate), gomitas y salsas de preferencia.",
          price: 13000,
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
          description: "Helado de vainilla, maracuyá y mora con fruta (banano, fresa y mango), crema de la casa y crema chantilly.",
          price: 14000,
        },
        {
          name: "Copa Brownie",
          description: "2 bolas de helado de vainilla, arequipe, brownie, dulce de frutos rojos, avellana y quipitos.",
          price: 16000,
        },
        {
          name: "Copa Fresas con Queso",
          description: "Fresas, crema chantilly, crema de leche, salsa de frutos rojos y queso.",
          price: 16000,
        },

        {
          name: "Fresas con Crema*",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 9900,
        },
      ],
    },
    malteadas: {
      title: "MALTEADAS",
      description: "Todas nuestras malteadas se preparan con 200gr de helado de vainilla y llevan crema chantilly",
      price: 14000,
      items: [
        {
          name: "Vainila",
        },
        {
          name: "Brownie",
        },
        {
          name: "Café",
        },
        {
          name: "Galaxia Kids",
        },
        {
          name: "Avellana",
        },
        {
          name: "MiniChips",
        },
        {
          name: "Oreo",
        },
        {
          name: "Frutos Rojos",
        },
        {
          name: "Llanera (Pan de Arroz)",
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
          price: 14000,
        },
        {
          name: "Ensalada Toche",
          description: "Dos bolas de helado de preferencia para complementar.",
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
          steps: [
            {
              name: "PASO 1",
              description: "(Elige una salsa)",
              items: ["Arequipe", "Mora", "Avellana", "Leche Condensada"],
            },
            {
              name: "PASO 2",
              description: "(Elige dos frutas)",
              items: ["Banano", "Mango", "Fresa", "Durazno"],
            },
            {
              name: "PASO 3",
              description: "(Elige un helado)",
              items: ["Vainilla", "Fresa", "Mora", "Arequipe", "Macadamia", "Chocolate", "Maracuyá", "Mandarina"],
            },
          ],
        },
        {
          name: "Waffle Clasico",
          description: "Waffle, una bola de helado de preferencia y elige una salsa (arequipe, mora, chocolate, avellana o leche condensada).",
          price: 14900,
          steps: [],
        },
        {
          name: "Waffle Toche",
          description: "Waffle, avellana, helado de preferencia, fresa, banano y lluvia de galleta oreo triturada",
          price: 18900,
          steps: [],
        },
      ],
    },
    saludable: {
      title: "SALUDABLE",
      items: [
        {
          name: "Ensalada de Frutas con Granola",
          description: "Ensalada de banano, mango, fresa, papaya, melón, arándanos, manzana y kiwi.",
          price: 12000,
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
            price: 9500,
          },
          {
            name: "Batido 16 onz en leche",
            price: 10500,
          },
        ],
      },
      parfaits: {
        title: "PARFAITS",
        description: "Nuestros parfaits con yogurt casero",
        items: [
          {
            name: "Tropical",
            description: "Fresa - Árandanos - Granola - Banano",
          },
          {
            name: "Tentación",
            description: "Fresa - Mango - Granola - Banano",
          },
          {
            name: "Toche",
            description: "Fresa - Árandanos - Granola - Durazno",
          },
        ],
        size: [
          {
            name: "Parfaits 14 onz",
            price: 11000,
          },
          {
            name: "Parfaits 16 onz",
            price: 13000,
          },
          {
            name: "Smoothie 16 onz con yogurt casero",
            price: 14000,
          },
        ],
      },
    },
    adiciones: {
      title: "ADICIONES",
      items: [
        {
          name: "Brownie",
          price: 3000,
        },
        {
          name: "Queso",
          price: 3500,
        },
        {
          name: "Oreo",
          price: 3000,
        },
        {
          name: "Helado",
          price: 3000,
        },
        {
          name: "Fruta",
          price: 2500,
        },
      ],
    },
    jugos: {
      title: "BEBIDAS",
      naturales: {
        title: "JUGOS NATURALES",
        description: "Pide nuestros Jugos Naturales en agua o leche:",
        fruits: ["Fresa", "Maracuyá", "Lulo", "Banano", "Frutos Rojos", "Mora", "Mango", "Guanabana"],
        items: [
          {
            name: "Personal en agua",
            description: "Vaso de 16 onz.",
            price: 7000,
          },
          {
            name: "Personal en leche",
            description: "Vaso de 16 onz.",
            price: 8000,
          },
          {
            name: "Jarra en agua",
            description: "Un litro de jugo natural.",
            price: 13000,
          },
          {
            name: "Jarra en leche",
            description: "Un litro de jugo natural.",
            price: 15000,
          },
        ],
      },
      refrescantes: {
        title: "REFRESCANTES",
        items: [
          {
            name: "Cítrica",
            description: "Vaso de 16 onz preparado en agua con limón natural.",
            price: 6000,
          },
          {
            name: "Granizado en agua*",
            description: "Vaso de 16 onz. *Se prepara con las mismas frutas de los jugos naturales.",
            price: 8000,
          },
          {
            name: "Granizado en leche*",
            description: "Vaso de 16 onz. *Se prepara con las mismas frutas de los jugos naturales.",
            price: 9000,
          },
          {
            name: "Cerezada",
            description: "Vaso de 16 onz preparado en agua con limón natural y cerezas en almíbar.",
            price: 8000,
          },
          {
            name: "Limonada de Coco",
            description: "Vaso de 16 onz preparado en leche.",
            price: 8000,
          },
          {
            name: "Piña Colada",
            description: "Vaso de 16 onz preparado en leche.",
            price: 8000,
          },
          {
            name: "Milo Frío",
            description: "Vaso de 16 onz preparado en leche.",
            price: 8000,
          },
        ],
      },
      sodas: {
        title: "SODAS",
        items: [
          {
            name: "Cítrica en Soda",
            description: "Vaso de 16onz preparada en soda con limón nartural.",
            price: 8000,
          },
          {
            name: "Hierbabuena en Soda",
            description: "Vaso de 16onz preparada en soda con limón natural y hojas de la planta reflescante hierbabuena.",
            price: 8500,
          },
          {
            name: "Cerezada en Soda",
            description: "Vaso de 16onz preparada en soda con limón natural y cerezas en almíbar.",
            price: 8900,
          },
          {
            name: "Cerezada en Frutos Rojos",
            description: "Vaso de 16onz preparada en soda con frutos rojos.",
            price: 8900,
          },
        ],
      },
      other: {
        title: "OTRAS BEBIDAS",
        items: [
          {
            name: "Agua natural",
            description: "Pet 600 ml.",
            price: 3000,
          },
          {
            name: "Agua saborizada / Con Gas",
            description: "Pet 600 ml.",
            price: 3500,
          },
          {
            name: "Cola y Pola",
            description: "Lata de 330 cm³.",
            price: 4000,
          },
          {
            name: "Cerveza de preferencia",
            description: "Poker, Aguila, Aguila Light, Club Colombia y Corona.",
            price: 5000,
          },
          {
            name: "Gaseosa Personal",
            description: "Pet de 400 ml.",
            price: 4000,
          },
          {
            name: "Gaseosa Familiar",
            description: "Pet de 1.5 litros.",
            price: 8000,
          },
        ],
      },
    },
  };
  return (
    <div>
      <NavBarVill />

      <div className="mx-4 mt-24 mb-52">
        <MenuConHelado title={data.conHelado.title} items={data.conHelado.items} />

        <MenuEnCopas title={data.enCopas.title} items={data.enCopas.items} />

        <MenuMalteadas title={data.malteadas.title} price={data.malteadas.price} items={data.malteadas.items} description={data.malteadas.description} />

        <MenuEnsFrutas title={data.ensaladaDeFrutas.title} description={data.ensaladaDeFrutas.description} fruits={data.ensaladaDeFrutas.fruits} items={data.ensaladaDeFrutas.items} />

        <MenuWafles title={data.wafles.title} items={data.wafles.items} />

        <MenuSaludable title={data.saludable.title} items={data.saludable.items} batidos={data.saludable.batidos} parfaits={data.saludable.parfaits} />

        <MenuAdiciones title={data.adiciones.title} items={data.adiciones.items} />

        <MenuBebidas title={data.jugos.title} naturales={data.jugos.naturales} refrescantes={data.jugos.refrescantes} sodas={data.jugos.sodas} other={data.jugos.other} />
      </div>
    </div>
  );
};
