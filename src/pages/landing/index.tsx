import { useState } from "react";
import Image from "next/Image";

import {
  Container,
  SearchForm,
  Occupancy,
  TextInput,
  SearchButton,
  LandingImage,
  ContainerWidth,
  OccupancyPlusButton,
  ContentAndForm,
  MenuScreenSizes,
  InTheRightShape,
} from "./styles";
import { MenuBar } from "../../components/menuBar";
import { LandingShape } from "../../components/landingShape";
import { YellowShape } from "../../components/yellowShape";
import { MainTitles } from "../../components/mainTitles";

const Landing = () => {
  const [occupancyChecked, setOccupancyChecked] = useState(0);

  function changeOccupancyChecked(val: number) {
    setOccupancyChecked(val);
  }

  return (
    <>
      <Container>
        <SearchForm>
          <ContainerWidth>
            <MenuScreenSizes>
              <div className="menu-bar-div">
                <MenuBar />
              </div>
              <ContentAndForm>
                <div id="main-titles">
                  <MainTitles white={"Find your "} yellow={"best teacher"} />

                  <p>
                    Whether you are a student trying to find your ideal private
                    language teachers/tutors or a teacher trying to find great
                    students for your customised private lessons!
                  </p>
                </div>

                <TextInput
                  type="text"
                  placeholder="Type here what you are looking for"
                />
                <OccupancyPlusButton>
                  <Occupancy>
                    <label
                      htmlFor="radioTeacher"
                      className={
                        occupancyChecked === 0 ? "OccupancyChecked" : ""
                      }
                    >
                      <input
                        type="radio"
                        name="occupancy"
                        id="radioTeacher"
                        checked={occupancyChecked === 0}
                        onChange={() => {
                          changeOccupancyChecked(0);
                        }}
                      />
                      <span>I'm a teacher</span>
                    </label>
                    <label
                      htmlFor="radioStudant"
                      className={
                        occupancyChecked === 1 ? "OccupancyChecked" : ""
                      }
                    >
                      <input
                        type="radio"
                        name="occupancy"
                        checked={occupancyChecked === 1}
                        id="radioStudant"
                        onChange={() => {
                          changeOccupancyChecked(1);
                        }}
                      />
                      <span>I'm a studant</span>
                    </label>
                  </Occupancy>
                  <SearchButton type="submit">SEARCH</SearchButton>
                </OccupancyPlusButton>
              </ContentAndForm>

              <LandingImage>
                <div className="landingImageDiv">
                  <LandingShape />
                  <Image src="/landing.png" alt="" width="209" height="416" />
                  <YellowShape />
                </div>
              </LandingImage>

              <InTheRightShape>
                <LandingShape />
              </InTheRightShape>
            </MenuScreenSizes>
          </ContainerWidth>
        </SearchForm>
      </Container>
    </>
  );
};

export default Landing;
