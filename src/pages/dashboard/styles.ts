import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: #000;
`;

export const MenuBarLoggedFixed = styled.div`
  visibility: 0;
  padding: 1.8rem;
`;

export const DashboardContent = styled.div`
  padding: 1rem;
  background: #f1f5f7;
`;

export const WelcomeUser = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem 1rem 3rem;
  max-width: 380px;

  @media screen and (min-width: 900px) {
    min-width: 776px;
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 1220px) {
    max-width: 1172px;
  }

  h1 {
    color: #200e64;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    padding-bottom: 0.6rem;

    span {
      font-weight: 700;
    }

    .yellow {
      color: #ffb800;
    }
  }

  p {
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
  }
`;

export const WelcomeUserText = styled.div`
  @media screen and (min-width: 900px) {
    max-width: 1090px;
    padding-right: 2rem;
  }
`;

export const WelcomeUserImage = styled.div`
  display: none;
  position: relative;
  padding: 1rem;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const WelcomeUserImageDivBackground = styled.div`
  position: absolute;
  width: 166px;
  height: 270px;
  left: 0px;
  top: -60px;
  border-top-right-radius: 100%;

  background: linear-gradient(
    180deg,
    rgba(155, 155, 155, 0.15) 0%,
    #eef2f4 0.01%,
    #ffffff 100%
  );
  transform: rotate(-90deg);
`;

export const ContentLoggedInCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentLoggedDiv = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 796px;
  }

  @media screen and (min-width: 1220px) {
    max-width: initial;
  }
`;

export const ContentLoggedDivCenter = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1190px;
  }
`;

export const BottomBar = styled.div`
  flex-direction: column;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  padding: 0.6rem;

  .bottom-bar-small-window {
    @media screen and (min-width: 900px) {
      display: none;
    }
  }

  .bottom-bar-big-window {
    display: none;

    @media screen and (min-width: 900px) {
      display: flex;
      justify-content: center;
    }
  }
`;
