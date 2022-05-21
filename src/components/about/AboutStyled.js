import styled from "styled-components";

export const AboutStyled = styled.div`
.about {
  margin-top: 20px;
  margin-bottom: 20px;
}


.about-img {
  height: 375px;
  width: 300px;
}

.about__content-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 305px;
  color: var(--black);
  padding: 0 35px;
  background-color: var(--white);
  padding: 60px 30px;
}

.about__h2 {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 14px;
}

.about__p {
  color: var(--dark-gray);
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
}

@media (min-width: 768px) {
  .about {
    display: flex;
    width: 768px;
  } 

  .about__content-group {
    padding: 0px 10px;
    width: 200px;
  } 
    
}

@media (min-width: 1280px) {
  .about {
    height: 265px;
    width: 1280px;
    display: flex;
    flex-direction: row;
  }

  .about__content-group {
    height: 265px;
    width: 320px;
    padding: 60px 20px;
  }

  .about-img {
    height: 420px;
    width: 375px;
  }

}

@media (min-width: 1280px) {
  .about__h2 {
    font-size: 12px;
    font-weight: 700;
  }
}
`