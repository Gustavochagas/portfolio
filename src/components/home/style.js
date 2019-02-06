import { createGlobalStyle } from 'styled-components';

const LeftPartStyles = createGlobalStyle`
  .person {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
  }
  
  .leftpart {
      display: flex;
      padding: 20px;
      justify-content: center;
      width: 20%;
      height: 450px;
      background: #000;
      margin: 20px 0;
      position: sticky;
      top: 20px;

      .leftpart__top {
        text-align: center;

        .picture {
            width: 150px;
            height: 150px;
            margin: 0 auto; 
            border-radius: 50%;
            box-shadow: 1px 1px 39px 0px rgba(204,204,204,1);
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
          
        h2 {
            margin: 0;
            margin-top: 30px;
            margin-bottom: 20px;
            color: #fff;
        }

        p {
            margin: 0;
            margin-bottom: 20px;
            font-size: 15px;
            color: #fff;
        }

        span {
            color: #fff;
            margin: 0;
            margin-bottom: 20px;
            font-size: 14px;
            display: block;
            width: 100%;
        }

        .leftpart__links {
            display: inline-block;
            margin: 10px 5px;
            color: #fff;
            transition: all .2s ease-in-out;

            i {
                font-size: 20px;
            }

            &:hover {
                color: #ff0000;
            }
        }
      }
    }

    .middlepart {
        width: calc(80% - 40px);
        
        .item {
            background: #000;
            margin: 20px;
            padding: 50px;
            display: flex;
            align-items: center;

            div {
                width: 100%;
            }
        }

        h2 {
            margin: 0;
            margin-bottom: 20px;
            color: #fff;
            font-size: 30px;

            &.mini {
                font-size: 20px;
                margin-top: 50px;
            }
        }

        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #fff;

            &:not(:last-child) {
                margin-bottom: 15px;
            }
        }

        span {
            display: block;
            width: 100%;
            color: #fff;

            &.date {
                margin-bottom: 10px;
            }
        }

        .works {
            padding-left: 30px;
            padding: 30px;
            border-bottom: 1px solid rgba(255,255,255,0.4);
            width: 100%;
        }

        ul {
            padding: 0;
            list-style: none;

            li {
                color: #fff;
            }
        }
    }

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

export default LeftPartStyles;