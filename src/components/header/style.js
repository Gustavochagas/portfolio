import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const HeaderStyles = createGlobalStyle`
  header {
    background: #000;
    position: sticky;
    top: 0;
    z-index: 99;

    .header__content {
      display: flex;
      flex-wrap: wrap;

      .logo {
        width: 20%;
        padding: 15px;

        p {
          margin: 0; 
        }

        a {
          text-decoration: none;
          color: #fff;
          transition: all .2s ease-in-out;

          &:hover {
            opacity: .6;
          }
        }
      }
      
      .menu {
        width: 80%;
        display: flex;
        flex-direction: row-reverse;

        nav {
          ul {
            list-style: none;
            padding: 0;

            li.menu__item {
              display: inline-block;
              padding: 0 30px;

              a.menu__link {
                color: #fff;
                text-decoration: none;
                position: relative;
                transition: all .2s ease-in-out;

                &:before {
                  content: '';
                  position: absolute;
                  bottom: -5px;
                  width: 100%;
                  height: 1px;
                  left: 0;
                  background: rgba(255,255,255,.6);
                  transition: all .2s ease-in-out;
                  transform-origin:left;
                  transform: scale(0);
                }

                &:hover {
                  opacity: .6;

                  &:before {
                    transform: scale(1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HeaderStyles;