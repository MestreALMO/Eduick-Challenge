import styled from "styled-components";

export const Container = styled.div`
  background: var(--landingBackground);
  color: var(--landingColor);
  padding-bottom: 6.8rem;
  overflow: hidden;
  min-width: 320px;
  width: 100%;
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#7a57fd, #6135d7);
  background-repeat: no-repeat;
  color: var(--landingColor);
`;

export const ContainerWidth = styled.div`
  max-width: 440px;
  width: 90%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #main-titles {
    padding: 4rem 0;

    p {
      display: none;

      @media screen and (min-width: 900px) {
        display: flex;
        font-family: "Open Sans", sans-serif;
        max-width: 78%;
        margin: 2rem 0 0;
      }
    }
  }

  @media screen and (min-width: 900px) {
    max-width: 100%;
  }
`;

export const MenuScreenSizes = styled.div`
  .menu-bar-div {
    grid-area: header;
    width: 100%;

    @media screen and (min-width: 900px) {
    }
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-areas:
      "header header header"
      "img main shape";
  }
`;

export const ContentAndForm = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    grid-area: main;
  }
`;

export const TextInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: #7f5cf1;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
`;

export const OccupancyPlusButton = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    margin-bottom: 2em;
  }
`;

export const Occupancy = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.7rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  width: 100%;

  label {
    border: 1px solid #6f49ed;
    background: #6f49ed;
    border-radius: 4px;
    padding: 1rem;
    text-transform: uppercase;
    width: 48%;
    min-width: 140px;

    &:last-child {
      margin-left: 1rem;
    }

    input {
    }

    span {
      margin-left: 0.4rem;
    }
  }

  .OccupancyChecked {
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: #7f5cf1;
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  color: #744ff4;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  background: #ffd70f;
  border-radius: 4px;
  border: none;
  margin-bottom: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media screen and (min-width: 900px) {
    margin-left: 1rem;
  }
`;

export const LandingImage = styled.div`
  min-width: 100%;
  /* max-width: 209px; */
  /* position: relative; */
  top: 4rem;
  left: 2.5rem;
  display: flex;
  justify-content: center;

  .landingImageDiv {
    top: 60px;
    right: -40px;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  @media screen and (min-width: 900px) {
    grid-area: img;
    padding-right: 4rem;

    .landingImageDiv {
      right: 0px;
    }
  }
`;

export const InTheRightShape = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
    grid-area: shape;
    left: 0;
  }
`;
