import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin: 1rem 0.5rem 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  max-width: 380px;
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.4rem;
`;

export const StarsAndLessonsNumber = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
`;

export const Stars = styled.div`
  .yellow-stars {
    color: #ffc908;
  }
  .gray-stars {
    color: #c4c4c4;
  }
`;

export const LessonsNumber = styled.p`
  padding: 0.4rem;
  background: #cfc9e9;
  border-radius: 10px;
  font-size: 0.7rem;
  font-family: "Open Sans", sans-serif;
`;

export const ContentTitle = styled.h1`
  font-size: 1.2rem;
  color: #200e64;
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
