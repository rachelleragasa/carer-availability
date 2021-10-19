import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header/Header"
import GlobalStyles from "../../styles/global"

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900" />
      </Helmet>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
