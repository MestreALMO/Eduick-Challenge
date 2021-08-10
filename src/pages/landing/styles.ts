import styled from "styled-components";

export const Container = styled.div`
  background: var(--landingBackground);
  color: var(--landingColor);
  padding-bottom: 6.8rem;
`;

export const SearchForm = styled.form`
  padding: 1em;
  background: linear-gradient(#7a57fd, #6135d7);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: var(--landingColor);
`;

export const SearchTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  padding: 4rem 0;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    color: #ffeaa4;
  }
`;

export const TextInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: #744fef;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
`;

export const Occupancy = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.7rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;

  label {
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: #744fef;
    border-radius: 4px;
    padding: 1rem;
    text-transform: uppercase;
    width: 48%;

    input {
    }

    span {
      margin-left: 0.4rem;
    }
  }
`;

export const SearchButton = styled.button`
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

export const LandingImage = styled.div`
  min-width: 100%;
  /* max-width: 209px; */
  /* position: relative; */
  top: 4rem;
  left: 2.5rem;
  display: flex;
  justify-content: center;

  div {
    top: 50px;
    right: -40px;
    display: flex;
    justify-content: flex-end;
  }
`;
