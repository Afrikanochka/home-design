import React from 'react'
import { AboutStyled } from './AboutStyled';
import light from '../../images/image-about-light.jpg';
import dark from '../../images/image-about-dark.jpg'

const About = () => {
    return (
    <AboutStyled>
    <div className="about" id="about-us" >
      <div className="about__img">
        <img src={light} alt="darts" className="about-img" />
      </div>
      <div className="about__content-group">
        <h2 className="about__h2">Про нас</h2>
        <p className="about__p">
        Наша багатофункціональна колекція поєднує в собі дизайн та функціональність, щоб задовольнити ваші потреби.
          Індивідуальний смак. Зробіть кожну кімнату унікальною або оберіть єдину тему, яка
          найкраще висловлює ваші інтереси та те, що вас надихає. Ми готові допомогти вам створити
          простір мрії!
        </p>
      </div>
      <div className="about__img">
        <img src={dark} alt="darts" className="about-img" />
      </div>
      </div>
    </AboutStyled>
    );
}

export default About;