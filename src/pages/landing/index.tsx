import { useState } from "react";
import Image from "next/Image";

import {
  Container,
  SearchForm,
  SearchTitle,
  Occupancy,
  TextInput,
  SearchButton,
  LandingImage,
} from "./styles";
import { MenuBar } from "../../components/menuBar";
import { LandingShape } from "../../components/landingShape";

export const Landing = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);

  return (
    <>
      <Container>
        <SearchForm>
          <MenuBar />
          <SearchTitle>
            Find your <span>best teacher</span>
          </SearchTitle>

          <TextInput
            type="text"
            placeholder="Type here what you are looking for"
          />
          <Occupancy>
            <label htmlFor="radioTeacher">
              <input type="radio" name="occupancy" id="radioTeacher" />
              <span>I'm a teacher</span>
            </label>
            <label htmlFor="radioStudant">
              <input type="radio" name="occupancy" id="radioStudant" />
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
