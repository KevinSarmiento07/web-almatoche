import { useEffect } from "react";

export const NavBarCuc = () => {
  useEffect(() => {
    const tab = document.querySelector(".tabs");

    let badges = tab?.querySelectorAll(".tab");
    badges?.forEach((badge) => {
      badge.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionId = badge.getAttribute("name");
        tab.querySelector(".active").classList.remove("active");
        badge.classList.add("active");

        scrollToSection(sectionId, () => {
          badge.scrollIntoView({
            inline: "center",
            behavior: "smooth",
          });
        });
      });
    });
  }, []);

  function scrollToSection(sectionId, callback) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(callback, 500);
    }
  }

  return (
    <div className="slider">
      <ul className="tabs">
        <li className="tab active" name="conHelado">
          CON HELADO
        </li>
        <li className="tab " name="enCopas">
          EN COPAS
        </li>
        <li className="tab" name="malteadas">
          MALTEADAS
        </li>
        <li className="tab" name="ensFrutas">
          ENSALADAS DE FRUTAS
        </li>
        <li className="tab" name="wafles">
          WAFLES
        </li>
        <li className="tab" name="saludable">
          SALUDABLE
        </li>
        <li className="tab" name="adiciones">
          ADICIONES
        </li>
        <li className="tab" name="bebidas">
          BEBIDAS
        </li>
      </ul>
    </div>
  );
};
