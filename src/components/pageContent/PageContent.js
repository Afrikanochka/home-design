import React from 'react';
import { PageContentStyled } from './PageContentStyled';
import css from "../heroImage/HeroImage.module.css";

const PageContent = ({ slideNum, handleSlideNum }) => {
    const tabs = [
        {
          id: 0,
          title: "Відкрийте для себе інноваційні способи декорування",
          p: "Ми забезпечуємо неперевершену якість, комфорт і стиль для власників нерухомості. Ми поєднуємо форму та функціональність, щоб втілити ваше бачення в життя. Створіть кімнату у власному стилі з нашою колекцією і зробіть свою нерухомість відображенням вас і того, що ви любите.",
        },
        {
          id: 1,
          title: "Стиль - це рафінованість кожної деталі та логіка",
          p: "Приємні очам кольори і яскраві деталі інтер'єру роблять кожен проект мрією для будь-якого жителя. Приємною радістю стане те, що ні ваша дитина, ні котик чи собачка не зможе пошкодити цей інтер'єр.",
        },
        {
          id: 2,
          title: "Виготовлено з найкращих і доступних матеріалів",
          p: "Завдяки сучасним технологіям ми забезпечуєм високий рівень якості за доступними цінами. Ми турбуємось, щоб кожен продукт був максимально досконалим і послідовним. ",
        },
      ];

    return (
        <PageContentStyled>
         <div className="page-content">
      <h1 className="page-content__h1">{tabs[slideNum].title}</h1>

      <p className="page-content__p">{tabs[slideNum].p}</p>

      <div className="page-content__shop-now-group">
        <div className="page-content__shop-now">Shop Now</div>
        <div className="page-content__shop-now-arrow"></div>
      </div>
    </div>
    <div className={css["hero-image__control-button-group"]}>
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
        </div>
    </PageContentStyled>
    );
}

export default PageContent;