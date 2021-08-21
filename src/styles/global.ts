import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --landingBackground: #200E64;
        --landingColor: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0 auto;
        min-width: 320px;
        background: #200E64;
        color: #fff;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-bar-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #2A1A6B;
        padding: 1rem;
        color: #fff;
        display: flex;
        justify-content: center;

        @media screen and (min-width: 900px) {
            top: unset;
            bottom: unset;
            right: unset;
            left: unset;
            min-width: 30rem;
            max-width: 30rem;
            padding: 4rem;
        }

        .menu-bar-modal-div {
            min-width: 300px;
            max-width: 300px;
            position: relative;
        }

        .menuBarOptions {
            width: 100%;

            ul {
                margin-top: 8rem;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                li {
                        button {
                            font-size: 1.2rem;
                            background: none;
                            color: inherit;
                            border: none;
                            margin-bottom: 1rem;
                        }

                }
            }
        }

        .menuBarButton {
            background: #FFD74F;
            padding: 1rem;
            border-radius: 10px;
            border: none;
            color: #2A1A6B;
            margin-top: 3rem;
            width: 100%;
            transition: background 0.2s;
            font-family: "Open Sans", sans-serif;
            width: 100%;

            &:hover {
                background: #ffd70f;
            }
        }
    }

    .get-started-modal {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #6A40E4;
        padding: 1rem;
        color: #fff;

        @media screen and (min-width: 900px) {
            top: unset;
            bottom: unset;
            right: unset;
            left: unset;
            min-width: 30rem;
            max-width: 30rem;
            padding: 4rem;
        }

        .get-started-modal-div {
            max-width: 300px;
            min-width: 300px;
            position: relative;
        }
    }

    .react-modal-close {
        color: #fff;
        font-size: 1.8rem;
        border: none;
        padding: 0;
        position: absolute;
        top: 0rem;
        right: -0.4rem;
        background: inherit;
        transition: color 0.2s;

        &:hover {
            color: red;
        }

        @media screen and (min-width: 900px) {
            display: flex;
            top: -5rem;
            right: -6.8rem;
            background: #000;
            padding: 0.2rem;
            border-radius: 50%;
            opacity 0.6;
            transition: color 0.2s opacity 0.2s;

            &:hover {
                opacity 1;
            }
        }
    }
`;
