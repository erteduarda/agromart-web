import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --background: #f0f2f5;
    --blue: #5429CC;
    --green: #3dad37;
    --green-light: #73ed6d;
    --text-title: #363F5F;

    //Paleta de cores Agromart
    --white: #ffffffff;
    --emerald: #5dd685ff;
    --emerald-2: #27cf83ff;
    --granny-smith-apple: #93e298ff;
    --emerald-3: #07cd78ff;
    --light-green: #a5e887ff;
    --emerald-4: #00cb76ff;
    --keppel: #28baa1ff;
    --emerald-5: #2C8B14

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #f5f5f5;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;