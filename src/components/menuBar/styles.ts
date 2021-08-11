import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: inherit;
  color: inherit;

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
`;

export const EduickImage = styled.div`
  width: 6rem;
  font-size: 1.2rem;
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

export const GetStartedModalButton = styled.button`
  margin: 0.6rem 0 0;
  width: 100%;
  padding: 0.8rem;
  color: #744ff4;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  background: #ffd74f;
  border-radius: 4px;
  border: none;
  margin-bottom: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #ffd70f;
  }
`;
