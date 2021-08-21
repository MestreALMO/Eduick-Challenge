import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999999;
  height: 100%;
  min-width: 300px;

  .display-none {
    display: none;
  }
`;

export const MainBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
  background: #7a57fd;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MobileWidth = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 900px) {
    max-width: 1160px;
  }
`;

export const MenuBarLoggedLeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EduickImage = styled.div`
  width: 6rem;
  font-size: 1.2rem;
`;

export const MyClasses = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
    margin: 0 1rem;
    padding: 0.6rem;
    border: none;
    background: inherit;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const WarningYellowCircle = styled.div`
  position: absolute;
  width: 9.6px;
  height: 9.6px;
  right: 0px;
  top: 0px;

  background: #ffd74f;
  border-radius: 6px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const ButtonPlusImage = styled.div`
  display: flex;
`;

export const MobileButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem;
  border: none;
  border-radius: 10px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2e3a59;
  background: inherit;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const ChangeToTeacherModeButton = styled.button`
  display: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.35);
  }

  @media screen and (min-width: 900px) {
    display: flex;
    min-width: 210px;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0 1rem;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    color: #fff;
    background: #200e64;
    font-weight: 400;
  }
`;

export const DropdownBarDropped = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;

export const ChangeMode = styled.button`
  background: #fff;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  color: #7a57fd;
  padding: 1rem;
  opacity 1;
  border: none;
  /* padding: 100%; */
  display: flex;
  justify-content: center;
`;

export const ChangeModeMaxWidth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  padding: 1rem;

  svg {
    font-size: 1.4rem;
    color: #2e3a59;
    opacity 0.4;
  }
`;

export const CloseTranslucidButton = styled.button`
  background: #fff;
  width: 100%;
  min-height: 100%;
  opacity 0.6;
  display: flex;
  align-items: flex-start;
  border: none;
  padding: 1rem;
  cursor: inherit;
`;
