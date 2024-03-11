import { useEffect } from "react";

export const NavBarCuc = () => {
  useEffect(() => {
    const tab = document.querySelector(".tabs");

    let badges = tab?.querySelectorAll(".tab");
    badges?.forEach((badge) => {
      badge.addEventListener("click", () => {
        tab.querySelector(".active").classList.remove("active");
        badge.classList.add("active");

        badge.scrollIntoView({
          inline: "center",
          block: "center",
        });
      });
    });
  }, []);
  return (
    <div className="slider">
      <ul className="tabs">
        <li className="tab">
          <a href="#conHelado">Con Helado</a>
        </li>
        <li className="tab active">En Copas</li>
        <li className="tab">Malteadas</li>
        <li className="tab">Ensaladas de Frutas</li>
        <li className="tab">
          <a href="#wafles">Wafles</a>
        </li>
        <li className="tab">Saludable</li>
        <li className="tab">Adiciones</li>
        <li className="tab">Jugos Naturales</li>
        <li className="tab">Refrescantes</li>
        <li className="tab">Sodas</li>
        <li className="tab">Otras Bebidas</li>
      </ul>
    </div>
  );
};
