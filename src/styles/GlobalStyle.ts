import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  /* Primary Palette */
  --Color-primary: #FF577F;
  --Color-primary-Focus: #FF427F;
  --Color-primary-Negative: #59323F;
  --color-overley: rgba(0, 0, 0, .35);

  /* Grey Scale Palette */

  --Grey-4: #121214;
  --Grey-3: #212529;
  --Grey-2: #343B41;
  --Grey-1: #868E96;
  --Grey-0: #F8F9FA;

  /* Feedback Palette */

  --Negative: #E83F5B;
  --Warning: #ffcd07;
  --Sucess: #3FE864;
  --Information: #155bcb;
}

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
