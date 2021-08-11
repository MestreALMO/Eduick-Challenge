import { Container } from "./styles";

interface MainTitlesProps {
  white: string;
  yellow: string;
}

export const MainTitles = ({ white, yellow }: MainTitlesProps) => {
  return (
    <>
      <Container>
        {white}
        <span>{yellow}</span>
      </Container>
    </>
  );
};
