import { RiMenu2Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/Image";
import { useState } from "react";
import Modal from "react-modal";
import { FiEye, FiEyeOff } from "react-icons/fi";

import {
  Container,
  EduickImage,
  LogIn,
  GetStartedModalButton,
  PasswordLabel,
} from "./styles";
import { MainTitles } from "../mainTitles";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "#2A1A6B",
    color: "#fff",
    padding: "1rem",
    margin: "0",
  },
};

export const MenuBar = () => {
  // menu-bar-modal
  const [menuBarModalIsOpen, setMenuBarModalIsOpen] = useState(false);

  function openMenuBarModal() {
    setMenuBarModalIsOpen(true);
  }

  function closeMenuBarModal() {
    setMenuBarModalIsOpen(false);
  }

  // get-started-modal
  const [getStartedModalIsOpen, setGetStartedModalIsOpen] = useState(false);

  function openGetStartedModal() {
    setGetStartedModalIsOpen(true);
  }

  function closeGetStartedModal() {
    setGetStartedModalIsOpen(false);
  }

  // password icon
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  function changePasswordVisibility() {
    passwordVisibility === false
      ? setPasswordVisibility(true)
      : setPasswordVisibility(false);
    return;
  }

  return (
    <>
      <Container>
        <button type="button" onClick={openMenuBarModal}>
          <RiMenu2Fill />
        </button>
        <EduickImage>
          <Image src="/logo.png" width="140" height="23" />
        </EduickImage>

        {/* modal-menu */}
        <Modal
          isOpen={menuBarModalIsOpen}
          onRequestClose={closeMenuBarModal}
          overlayClassName="react-modal-overlay"
          className="menu-bar-modal"
        >
          <button
            type="button"
            onClick={closeMenuBarModal}
            className="react-modal-close"
          >
            <VscChromeClose />
          </button>

          <EduickImage>
            <Image src="/logo.png" width="140" height="23" />
          </EduickImage>
          <div className="menuBarOptions">
            <ul>
              <li>
                <button type="button">How it works</button>
              </li>
              <li>
                <button type="button">About us</button>
              </li>
            </ul>
            <button
              className="menuBarButton"
              type="button"
              onClick={openGetStartedModal}
            >
              Get Started
            </button>
          </div>
        </Modal>

        {/* modal-menu */}
        <Modal
          isOpen={getStartedModalIsOpen}
          onAfterOpen={closeMenuBarModal}
          onRequestClose={closeGetStartedModal}
          overlayClassName="react-modal-overlay"
          className="get-started-modal"
        >
          <button
            type="button"
            onClick={closeGetStartedModal}
            className="react-modal-close"
          >
            <VscChromeClose />
          </button>

          <MainTitles white={"Get Started "} yellow={"just login"} />

          <LogIn>
            <label htmlFor="login-username">
              <p>Username</p>
              <input type="text" id="login-username" />
            </label>
            <PasswordLabel htmlFor="login-password">
              <p>Password</p>
              <div className="PasswordInputPlusButton">
                <input
                  type={passwordVisibility === true ? "password" : "text"}
                  id="login-password"
                />
                <button type="button" onClick={changePasswordVisibility}>
                  {passwordVisibility === true ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
            </PasswordLabel>
            <GetStartedModalButton type="button">LOGIN</GetStartedModalButton>
          </LogIn>
        </Modal>
      </Container>
    </>
  );
};
