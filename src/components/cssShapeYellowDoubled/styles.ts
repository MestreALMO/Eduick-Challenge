import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: 390px) {
    right: 0rem;
    top: 1rem;
  }

  @media screen and (min-width: 900px) {
    right: 35rem;
    top: 10rem;
  }

  @media screen and (min-width: 1220px) {
    right: 49rem;
    top: 10rem;
  }
`;

export const BigYellowShape = styled.div`
  position: absolute;
  right: -2rem;
  top: -8rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border-bottom-right-radius: 0;

  background: linear-gradient(180deg, #ffc700 0%, rgba(255, 199, 0, 0.6) 100%);
  transform: rotate(-180deg);
`;

export const SmallYellowShape = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -9rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border-bottom-right-radius: 0;

  background: #ffb800;
  transform: rotate(-180deg);
`;
