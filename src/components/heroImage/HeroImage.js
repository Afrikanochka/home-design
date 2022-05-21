import css from "./HeroImage.module.css";
import { useEffect, useState } from "react";
import light from '../../images/desktop-image-hero-1.jpg';

function HeroImage({ slideNum, handleSlideNum }) {
  const [isMaxWidth, setIsMaxWidth] = useState(true);
 
  function checkWidth() {
    if (window.innerWidth > 1280) {
      setIsMaxWidth(true);
    } else if (window.innerWidth <= 1279) {
      setIsMaxWidth(false);
    }
  }

  useEffect(() => {
    checkWidth();
    
    window.addEventListener("resize", function () {
      setIsMaxWidth(window.innerWidth > 1280);
    });
  }, []);

  const desktopHeroImage = [
    "../../images/desktop-image-hero-" + [slideNum + 1] + ".jpg",
  ];
  const mobileHeroImage = [
    "../../images/mobile-image-hero-" + [slideNum + 1] + ".jpg",
  ];

  return (
    <>
      <div id="main"
        className={css["hero-image"]}
        style={
          isMaxWidth
            ? { backgroundImage: `url(` + desktopHeroImage + `)` }
            : { backgroundImage: `url(` + mobileHeroImage + `)` }
        }
      >
        <img src={light} alt="hero" />
      </div>
      {/* <div className={css["hero-image__control-button-group"]}>
        <div
          className={css["hero-image__previous-button"]}
          onClick={() => {
            handleSlideNum(slideNum - 1);
          }}
        ></div>
        <div
          className={css["hero-image__next-button"]}
          onClick={() => {
            handleSlideNum(slideNum + 1);
          }}
        ></div>
      </div> */}
    </>
  );
}

export default HeroImage;