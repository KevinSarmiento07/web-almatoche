import { NavBarCuc } from "../components/NavBarCuc";
import "../components/styles/MenuCucPage.css";
import { MenuConHelado } from "../components/MenuConHelado";
import { MenuEnCopas } from "../components/MenuEnCopas";
import { MenuMalteadas } from "../components/MenuMalteadas";
import { MenuEnsFrutas } from "../components/MenuEnsFrutas";
import { MenuWafles } from "../components/MenuWafles";
import { MenuSaludable } from "../components/MenuSaludable";
import { MenuBebidas } from "../components/MenuBebidas";
import { MenuAdiciones } from "../components/MenuAdiciones";
import { MenuSlider } from "../components/MenuSlider";
import { MenuDesayunos } from "../components/MenuDesayunos";
import { MenuSoloFresas } from "../components/MenuSoloFresas";
export const MenuCucPage = () => {
  const data = {
    conHelado: {
      title: "CON HELADO",
      items: [
        {
          name: "Cono Sencillo",
          description: "Cono o vaso de una bola de helado de preferencia.",
          price: 5000,
          image: "conoSencillo.jpg",
        },
        {
          name: "Cono Doble",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 8000,
          image: "conoDoble.jpg",
        },
        {
          name: "Cono Kids",
          description: "Una bola de helado de vainilla decorada en forma de ratoncito.",
          price: 6000,
          image: "conoKids.jpg",
        },
        {
          name: "Canastilla de Galleta S",
          description: "Dos bolas de helado de preferencia con salsa de preferencia.",
          price: 8500,
        },
        {
          name: "Canastilla de Galleta M",
          description: "Cono o vaso de dos bolas de helado de preferencia.",
          price: 12000,
        },
        {
          name: "Canastilla de Galleta con Fruta",
          description: "Dos bolas de helado de preferencia + una fruta de preferencia (banano, fresa, mango, durazno).",
          price: 11000,
          image: "canFruta.jpg",
        },
        {
          name: "Brownie con Helado",
          description: "Brownie, helado de vainilla, salsa de chocolate y cereza",
          price: 10900,
          image: "browHelado.jpg",
        },
        {
          name: "Banana Split",
          description: "Helado de fresa, vainilla y chocolate, crema chantilly y cerezas.(Adiciona queso por $2.000).",
          price: 14000,
          image: "banSplit.jpg",
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
          image: "copaSat.jpg",
        },
        {
          name: "Copa Melocotón",
          description: "Melocotones en almíbar con crema chantilly y dos bolas de helado de preferencia.",
          price: 13000,
          image: "copaMel.jpg",
        },
        {
          name: "Copa Toche",
          description: "Tres bolas de helado de preferencia con fruta (banano, fresa y mango), crema de la casa y crema chantilly.",
          price: 15000,
          image: "copaToche.jpg",
        },
        {
          name: "Vaso tropical*",
          description: "(Apartir de 6 unidades $11.000) Fruta, crema de la casa, una bola de helado de vainilla y granola",
          price: 14000,
          image: "vasoTropical.jpg",
        }
      ],
    },
    soloFresas: {
      title: "SOLO FRESAS",
      description: "Nuestras salsas para las fresas son gratis, elige una: Arequipe, Chocolate, Leche condensada (Adiciona helado por $3.000).",
      items: [
        {
          name: "Fresas Clásicas",
          description: "Fresas con crema de leche, crema chantilly y salsa de elección.",
          price: 10900,
          image: "fresaClasica.jpg",
        },
        {
          name: "Fresas con Brownie",
          description: "Fresas con crema de leche, crema chantilly, brownie y salsa de elección.",
          price: 14900,
          image: "fresaConBrownie.jpg",
        },
        {
          name: "Fresas con Queso",
          description: "Fresas con crema de leche, crema chantilly, queso y salsa de elección.",
          price: 15500,
          image: "fresasConQueso.jpg",
        },
        {
          name: "Fresas con Melocotón",
          description: "Fresas con crema de leche, crema chantilly, melocotón en almbibar y salsa de elección.",
          price: 16500,
        },
      ],
    },
    malteadas: {
      title: "MALTEADAS",
      description: "Todas nuestras malteadas se preparan con 200gr de helado de vainilla y llevan crema chantilly",
      price: 15000,
      image: "malteada.jpg",
      items: [
        {
          name: "Brownie",
        },
        {
          name: "Oreo",
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
      ],
    },
    ensaladaDeFrutas: {
      title: "ENSALADAS DE FRUTAS",
      description: "Nuestras ensaladas de frutas están preparadas con:",
      fruits: ["Banano", "Mango", "Fresa", "Papaya", "Melón", "Arandanos", "Manzana", "Kiwi", "Queso", "Granola", "Crema de la casa"],
      items: [
        {
          name: " Ensalada de Frutas con Granola",
          description: "Ensalada de banano, mango, fresa, papaya, melón, arándanos, manzana y kiwi.",
          price: 13900,
          image: "ensGranola.jpg",
        },
        {
          name: "Ensalada Ligera",
          description: "Una bola de helado de preferenciapara complementar.",
          price: 15900,
          image: "ensLigera.jpg",
        },
        {
          name: "Ensalada Toche",
          description: "Dos bolas de helado de preferencia para complementar.",
          price: 19000,
          image: "ensToche.jpg",
        },
        {
          name: "Ensalada Megaoche",
          description: "Tres bolas de helado de preferencia para complementar.",
          price: 23900,
          image: "ensMegaToche.jpg",
        }
      ],
    },
    wafles: {
      title: "WAFLES",
      items: [
        {
          name: "Waffle Ármalo Como Quieras",
          description: "Con tres sencillos pasos tendrás el waffle perfecto:",
          price: 17900,
          image: "wafleArmalo.jpg",
          steps: [
            {
              name: "PASO 1",
              description: "(Elige una salsa)",
              items: ["Arequipe", "Avellana", "Leche Condensada"],
            },
            {
              name: "PASO 2",
              description: "(Elige dos frutas)",
              items: ["Banano", "Mango", "Fresa", "Durazno"],
            },
            {
              name: "PASO 3",
              description: "(Elige 1 helado)",
              items: ["Elige helados disponibles de preferencia"],
            },
          ],
        },
        {
          name: "Waffle Clasico",
          description: "Waffle, una bola de helado de preferencia y elige una salsa (arequipe, chocolate, avellana o leche condensada).",
          price: 15900,
          steps: [],
          image: "wafleClasico.jpg",
        },
        {
          name: "Waffle Toche",
          description: "Waffle, avellana, helado de preferencia, fresa, banano y lluvia de galleta oreo triturada",
          price: 18900,
          steps: [],
          image: "wafleToche.jpg",
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
          image: "ensGranola.jpg",
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
            price: 7500,
          },
          {
            name: "Batido 16 onz en leche",
            price: 8500,
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
        image: "jugoNat.jpg",
        fruits: ["Fresa", "Maracuyá", "Lulo", "Banano", "Tomate de árbol", "Papaya", "Mora", "Mango", "Guanabana"],
        items: [
          {
            name: "Personal en agua",
            description: "Vaso de 16 onz.",
            price: 5000,
          },
          {
            name: "Personal en leche",
            description: "Vaso de 16 onz.",
            price: 6000,
            image: "jugoLeche.jpg",
          },
          {
            name: "Jarra en agua",
            description: "Un litro de jugo natural.",
            price: 10000,
            image: "jarraAgua.jpg",
          },
          {
            name: "Jarra en leche",
            description: "Un litro de jugo natural.",
            price: 13000,
          },
        ],
      },
      refrescantes: {
        title: "REFRESCANTES",
        items: [
          {
            name: "Limonada",
            description: "Vaso de 16 onz preparado en agua con limón natural.",
            price: 5000,
          },
          {
            name: "Granizado en agua*",
            description: "Vaso de 16 onz. *Se prepara con las mismas frutas de los jugos naturales.",
            price: 6000,
          },
          {
            name: "Granizado en leche*",
            description: "Vaso de 16 onz. *Se prepara con las mismas frutas de los jugos naturales.",
            price: 7000,
          },
          {
            name: "Cerezada",
            description: "Vaso de 16 onz preparado en agua con limón natural y cerezas en almíbar.",
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
            name: "Limonada en Soda",
            description: "Vaso de 16onz preparada en soda con limón nartural.",
            price: 7000,
            image: "sodaLimo.jpg",
          },
          {
            name: "Cerezada en Soda",
            description: "Vaso de 16onz preparada en soda con limón natural y cerezas en almíbar.",
            price: 8900,
            image: "sodaCer.jpg",
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
            description: "Pet de 500 ml.",
            price: 3000,
          },
          {
            name: "Gaseosa Familiar",
            description: "Pet de 1.5 litros.",
            price: 7000,
          },
        ],
      },
    },
    desayunos: {
      title: "DESAYUNOS / MEDIA TARDE SORPRESA",
      items: {
        title: "DESAYUNOS SORPRESA",
        price: 70000,
        items: [
          {
            image: "desayunoSor.jpg",
          },
          {
            image: "desayunoSor2.jpg",
          },
          {
            image: "desayunoSor3.jpg",
          },
        ],
      }
    },
  };

  const slider = [
    {
      name: "DESAYUNOS SORPRESA",
      image: "desayunoSor.jpg",
    },
    {
      name: "ENSALADA TOCHE",
      image: "ensToche2.jpg",
    },
    {
      name: "WAFLE TOCHE",
      image: "wafleToche.jpg",
    },
    {
      name: "JARRAS",
      image: "jarraAgua.jpg",
    },
  ];
  return (
    <div>
      <NavBarCuc />

      <div className="mx-4 mt-24 mb-24">
        <MenuSlider items={slider} />
        <MenuConHelado title={data.conHelado.title} items={data.conHelado.items} />

        <MenuEnCopas title={data.enCopas.title} items={data.enCopas.items} />
        <MenuSoloFresas title={data.soloFresas.title} description={data.soloFresas.description} items={data.soloFresas.items} />
        <MenuMalteadas title={data.malteadas.title} price={data.malteadas.price} items={data.malteadas.items} description={data.malteadas.description} image={data.malteadas.image} />

        <MenuEnsFrutas title={data.ensaladaDeFrutas.title} description={data.ensaladaDeFrutas.description} fruits={data.ensaladaDeFrutas.fruits} items={data.ensaladaDeFrutas.items} />

        <MenuWafles title={data.wafles.title} items={data.wafles.items} />

        <MenuSaludable title={data.saludable.title} items={data.saludable.items} batidos={data.saludable.batidos} />

        <MenuAdiciones title={data.adiciones.title} items={data.adiciones.items} />

        <MenuBebidas title={data.jugos.title} naturales={data.jugos.naturales} refrescantes={data.jugos.refrescantes} sodas={data.jugos.sodas} other={data.jugos.other} />

        <MenuDesayunos title={data.desayunos.title} items={data.desayunos.items} />
      </div>
    </div>
  );
};
