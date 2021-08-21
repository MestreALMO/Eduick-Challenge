import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Shape = styled.div`
  display: none;
  background: linear-gradient(180deg, #ffc700 0%, rgba(255, 199, 0, 0.6) 100%);
  transform: rotate(-180deg);
  border-radius: 50%;
  border-bottom-right-radius: 0;

  @media screen and (min-width: 900px) {
    display: flex;
    position: absolute;
    width: 110px;
    height: 110px;
    top: 310px;
    left: -60px;
  }
`;
