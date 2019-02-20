import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyles = createGlobalStyle`
    /* about styles */
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700');

    * {
        font-family: 'Poppins', sans-serif;
    }
    .about {
        padding: 70px 0;
    }

    .about__top {
        display: flex;
        flex-wrap: wrap;
        width: 70%;

        .picture {
            width: 150px;
            height: 150px;
            overflow: hidden;
            border-radius: 50%;
            border: 1px solid;

            img {
                width: 100%;
            }
        }

        .profile {
            padding-left: 30px;

            h2 {
                font-size: 40px;
                margin: 0;
                    
                &.h2--mini {
                    font-size: 20px;
                }
            }

            p {
                margin: 0;
                font-size: 15px;
            }

            .profile__pessoal {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
            }
        }
    }

    .about__bottom {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .item {
            width: 50%;
            padding-top: 35px;
            padding-left: 30px;

            h2 {
                font-size: 25px;
                margin-top: 0;
                margin-bottom: 10px;
            }

            ul {
                padding: 0 20px;
                display: flex;
                flex-wrap: wrap;

                li {
                    width: 50%;
                }
            }

            a {
                color: #000;
                font-size: 20px;
                margin: 0 10px;
                transition: all .2s ease-in-out;

                &:hover {
                    opacity: .7;
                }

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-left: 0;
                }
            }

            p {
                margin-top: 0;
                margin-bottom: 10px;
            }
        }
    }

    /* formação styles */

    .formacao {
        background: #ccc;
        padding: 70px 0;
        width: 100%;
        text-align: center;

        h2 {
            font-size: 40px;
            margin-bottom: 0;
            margin-top: 0;
            text-align: center;
        }
    }

    /* portfolio styles */
    .portfolio {
        padding: 70px 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        h2 {
            text-align: center;
            width: 100%;
            font-size: 40px;
            margin-top: 0;
        }

        .portfolio__item {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 50%;
            padding: 0px 40px;
            margin: 40px 0;

            .portfolio__imagem {
                width: 550px;

                img {
                    width: 100%;
                }
            }

            .portfolio__desc {
                padding-left: 30px;
                text-align: center;

                .portfolio__link {
                    display: block;
                    margin-bottom: 10px;
                }

                h2 {
                    font-size: 30px;
                    margin-bottom: 0;
                }

                a {
                    background: #000;
                    color: #fff;
                    padding: 10px 50px;
                    font-size: 20px;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: bold;
                    display: inline-block;
                    margin: 0 auto;
                    transition: all .2s ease-in-out;

                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
    }

    /* banner */
    .banner {
        width: 100%;
        height: 70vh;
        background: #000;

        .content__banner {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;

            h2 {
                color: #fff;
                margin: 0;
            }
        }

    }

    /* medias queries */
    @media only screen and (max-width: 1024px) {
        .leftpart {
            width: 100%;
            position: relative;
            top: 0;
            margin-bottom: 0;
        }

        .middlepart {
            width: 100%;

            .item {
                margin: 10px 0;
            }
        }
    }
`;

export default GlobalStyles;