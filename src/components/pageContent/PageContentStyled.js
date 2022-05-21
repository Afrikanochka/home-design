import styled from "styled-components";

export const PageContentStyled = styled.div`
    .page-content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  color: var(--black);
  margin-bottom: 30px;
  background-color: var(--white);
  padding: 0 20px 0 30px;
}

.page-content__h1 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.page-content__p {
  color: var(--dark-gray);
  line-height: 22px;
  font-size: 11.5px;
  font-weight: 500;
}

.page-content__shop-now-group {
  width: 220px;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
}

.page-content__shop-now {
  text-transform: uppercase;
  letter-spacing: 12px;
  font-weight: 700;
}

.page-content__shop-now-group:hover {
  color: var(--dark-gray);
}

.page-content__shop-now-arrow {
  width: 40px;
  height: 14px;
  background-image: url("../../images/icon-arrow.svg");
}

@media (min-width: 768px) {
  .page-content {
    padding: 0px 50px;
  }
}

@media (min-width: 1280px) {
  .page-content {
    width: 40%;
    height: 535px;
    padding: 120px 50px;
    justify-content: center;
    margin-left: auto;
  }

  .page-content__h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }
}
`