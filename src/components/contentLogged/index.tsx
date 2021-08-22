import { AiFillStar } from "react-icons/ai";
import Image from "next/Image";

import {
  Container,
  ImageContent,
  StarsAndLessonsNumber,
  Stars,
  LessonsNumber,
  ContentTitle,
} from "./styles";

interface interfaceProjects {
  project: string;
}

export const ContentLogged = (props: interfaceProjects) => {
  const myLoader = () => {
    return (
      "https://github.com/MestreALMO/" +
      props.project +
      "/blob/main/_README.md/img01.png?raw=true"
    );
  };

  return (
    <>
      <Container>
        <ImageContent>
          <Image
            loader={myLoader}
            src={
              "https://github.com/MestreALMO/" +
              props.project +
              "/blob/main/_README.md/img01.png?raw=true"
            }
            alt={props.project}
            width="1919"
            height="1079"
          />
        </ImageContent>
        <StarsAndLessonsNumber>
          <Stars>
            <span className="yellow-stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            {/* <span className="gray-stars">
              <AiFillStar />
              <AiFillStar />
            </span> */}
          </Stars>
          <LessonsNumber>10 LESSONS</LessonsNumber>
        </StarsAndLessonsNumber>
        <ContentTitle>{props.project}</ContentTitle>
      </Container>
    </>
  );
};
