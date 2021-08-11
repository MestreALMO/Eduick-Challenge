import { useState } from "react";
import Image from "next/Image";

import {
  Container,
  SearchForm,
  Occupancy,
  TextInput,
  SearchButton,
  LandingImage,
} from "./styles";
import { MenuBar } from "../../components/menuBar";
import { LandingShape } from "../../components/landingShape";
import { MainTitles } from "../../components/mainTitles";

export const Landing = () => {
  const [occupancyChecked, setOccupancyChecked] = useState(0);

  function changeOccupancyChecked(val: number) {
    setOccupancyChecked(val);
  }

  return (
    <>
      <Container>
        <SearchForm>
          <MenuBar />
          <div id="main-titles">
            <MainTitles white={"Find your "} yellow={"best teacher"} />
          </div>

          <TextInput
            type="text"
            placeholder="Type here what you are looking for"
          />
          <Occupancy>
            <label
              htmlFor="radioTeacher"
              className={occupancyChecked === 0 ? "OccupancyChecked" : ""}
            >
              <input
                type="radio"
                name="occupancy"
                id="radioTeacher"
                onChange={() => {
                  changeOccupancyChecked(0);
                }}
              />
              <span>I'm a teacher</span>
            </label>
            <label
              htmlFor="radioStudant"
              className={occupancyChecked === 1 ? "OccupancyChecked" : ""}
            >
              <input
                type="radio"
                name="occupancy"
                id="radioStudant"
                onChange={() => {
                  changeOccupancyChecked(1);
                }}
              />
              <span>I'm a studant</span>
            </label>
          </Occupancy>
          <SearchButton type="submit">SEARCH</SearchButton>

          <LandingImage>
            <div>
              <LandingShape />
              <Image src="/landing.png" alt="" width="209" height="416" />
            </div>
          </LandingImage>
        </SearchForm>
      </Container>
    </>
  );
};
