import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: inherit;
  color: inherit;
  min-width: 100%;

  button {
    background: inherit;
    color: inherit;
    border: none;
    padding-right: 1rem;
    svg {
      font-size: 1.2rem;
      transition: color 0.2s;

      &:hover {
        color: #000;
      }
    }
  }

  @media screen and (min-width: 900px) {
    .open-menu-bar-modal {
      display: none;
    }
  }
`;

export const EduickImage = styled.div`
  width: 6rem;
  font-size: 1.2rem;
`;

export const BigBar = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
    margin-left: 4rem;
    justify-content: space-between;
    width: 100%;
    max-width: 61rem;

    ul {
      display: flex;

      li {
        margin: 0.5rem;

        button {
          padding: 1rem;
          font-family: "Open Sans", sans-serif;
          border-radius: 10px;
          min-width: 6rem;

          &:hover {
            background: #7f5cf1;
          }
        }
      }
    }

    .get-started-big-bar {
      font-family: "Open Sans", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffd70f;
      border-radius: 10px;
      padding: 1rem 2rem;
      color: #744ff4;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const LogIn = styled.form`
  padding: 4rem 0 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.6rem;

    p {
      margin-bottom: 0.2rem;
    }

    input {
      width: 100%;
      padding: 0.6rem;
      background: rgba(255, 255, 255, 0.24);
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.24);
      color: #fff;
    }
  }
`;

export const PasswordLabel = styled.label`
  #password-checkbox {
    display: none;
  }

  button {
    border: none;
    background: inherit;
    color: #fff;
  }

  .PasswordInputPlusButton {
    display: flex;
    position: relative;

    input {
      padding-right: 2.4rem;
    }
    button {
      position: absolute;
      top: 0rem;
      right: 0rem;
      padding: 0.6rem;
      font-size: 1.2rem;
    }
  }
`;

export const GetStartedModalButton = styled.a`
  margin: 0.6rem 0 0;
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
    width: 100%;
  }
`;
