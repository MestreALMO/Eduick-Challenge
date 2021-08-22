import Image from "next/Image";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Post = {
  project: string;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3100/?start=0&limit=12");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

import { MenuBarLogged } from "../../components/menuBarLogged";
import { CssShapeYellowDoubled } from "../../components/cssShapeYellowDoubled";
import {
  Container,
  BottomBar,
  WelcomeUser,
  DashboardContent,
  ContentLoggedInCenter,
  MenuBarLoggedFixed,
  ContentLoggedDiv,
  ContentLoggedDivCenter,
  WelcomeUserText,
  WelcomeUserImage,
  WelcomeUserImageDivBackground,
} from "./styles";
import { ContentLogged } from "../../components/contentLogged";

const Dashboard = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [projects, setProjects] = useState(posts);
  const [hasMore, setHasMore] = useState(true);

  const getMoreProject = async () => {
    const res = await fetch(
      `http://localhost:3100/?start=${projects.length}&limit=${
        projects.length + 6
      }`
    );
    const newProjects = await res.json();
    setProjects((project) => [...project, ...newProjects]);
  };

  return (
    <>
      <Container>
        <MenuBarLogged />
        <MenuBarLoggedFixed>test</MenuBarLoggedFixed>

        <DashboardContent>
          <ContentLoggedInCenter>
            <WelcomeUser>
              <WelcomeUserText>
                <h1>
                  Hello <span>Student</span>
                  <span className="yellow">.</span>
                </h1>
                <p>
                  Whether you are a student trying to find your ideal private
                  language teachers/tutors
                </p>
              </WelcomeUserText>
              {/* This is the yellow shape component */}
              <CssShapeYellowDoubled />

              {/* This is the image that only is displayed in wider screens */}
              <WelcomeUserImage>
                <WelcomeUserImageDivBackground></WelcomeUserImageDivBackground>
                <Image
                  src="/logged/meeting.png"
                  alt="meeting"
                  width="209"
                  height="173"
                />
              </WelcomeUserImage>
            </WelcomeUser>

            <InfiniteScroll
              dataLength={projects.length}
              next={getMoreProject}
              hasMore={hasMore}
              loader={<h3>&nbsp;</h3>}
              endMessage={<h4>&nbsp;</h4>}
            >
              <ContentLoggedDivCenter>
                <ContentLoggedDiv>
                  {projects.map((project) => (
                    <ContentLogged {...project} />
                  ))}
                </ContentLoggedDiv>
              </ContentLoggedDivCenter>
            </InfiniteScroll>
          </ContentLoggedInCenter>
        </DashboardContent>

        <BottomBar>
          <p className="bottom-bar-small-window">
            Copyright © 2020&nbsp;<strong>Eduick</strong>.
          </p>
          <p className="bottom-bar-big-window">
            Copyright © 2020&nbsp;<strong>Eduick</strong>. Todos os direitos
            reservados.
          </p>
        </BottomBar>
      </Container>
    </>
  );
};

export default Dashboard;
