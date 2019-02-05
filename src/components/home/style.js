import { createGlobalStyle } from 'styled-components';

const LeftPartStyles = createGlobalStyle`
  .leftpart {
      display: flex;
      padding: 20px;
      justify-content: center;

      .leftpart__top {
        text-align: center;

        .picture {
            width: 100px;
            height: 100px;
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
        }

        p {
            margin: 0;
        }

        span {
            margin: 0;
            font-size: 14px;
        }
      }
  }
`;

export default LeftPartStyles;