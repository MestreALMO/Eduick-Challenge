import {
  Container,
  EduickImage,
  MobileWidth,
  ButtonPlusImage,
  MobileButton,
  UserImage,
  DropdownBarDropped,
  MainBar,
  ChangeMode,
  CloseTranslucidButton,
  ChangeModeMaxWidth,
  MenuBarLoggedLeftSide,
  MyClasses,
  ChangeToTeacherModeButton,
  WarningYellowCircle,
} from "./styles";
import Image from "next/Image";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

export const MenuBarLogged = () => {
  const [dropdownBar, setDropdownBar] = useState(0);

  return (
    <>
      <Container className="ContainerFullHeight">
        <MainBar>
          <MobileWidth>
            <MenuBarLoggedLeftSide>
              <EduickImage>
                <Image src="/logo.png" width="140" height="23" />
              </EduickImage>
              <MyClasses>My Classes</MyClasses>
            </MenuBarLoggedLeftSide>
            <ButtonPlusImage>
              <MobileButton
                type="button"
                onClick={() => {
                  dropdownBar === 0 ? setDropdownBar(1) : setDropdownBar(0);
                }}
              >
                <div className={dropdownBar === 0 ? "" : "display-none"}>
                  <AiOutlineDown />
                </div>
                <div className={dropdownBar === 0 ? "display-none" : ""}>
                  <AiOutlineUp />
                </div>
              </MobileButton>

              <ChangeToTeacherModeButton type="button">
                Change to teacher mode
              </ChangeToTeacherModeButton>

              <UserImage>
                <Image src="/logged/user-image.png" width="34" height="34" />
                <WarningYellowCircle></WarningYellowCircle>
              </UserImage>
            </ButtonPlusImage>
          </MobileWidth>
        </MainBar>
        <DropdownBarDropped
          onClick={() => {
            dropdownBar === 0 ? setDropdownBar(1) : setDropdownBar(0);
          }}
          className={dropdownBar === 0 ? "display-none" : ""}
        >
          <ChangeMode type="button">
            <ChangeModeMaxWidth>
              <p>CHANGE TO TEACHER MODE</p>
              <BsArrowRight />
            </ChangeModeMaxWidth>
          </ChangeMode>
          {/* Below it is a giant button translucid that closes the bar when clicked
          on, by accessing the page it does not feel like a button */}
          <CloseTranslucidButton
            type="button"
            onClick={() => {
              dropdownBar === 0 ? setDropdownBar(1) : setDropdownBar(0);
            }}
          ></CloseTranslucidButton>
        </DropdownBarDropped>
      </Container>
    </>
  );
};
