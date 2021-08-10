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
