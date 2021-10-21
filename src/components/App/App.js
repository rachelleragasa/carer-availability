import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Header from "../Header/Header"
import GlobalStyles from "../../styles/global"
import Carers from "../Carers/Carers"

const App = () => {
  return (
    <>
      <Helmet>
        <title>Carer Availability</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <MainContent>
        <Carers />
      </MainContent>
    </>
  );
}

const MainContent = styled.main`
  padding: 60px 20px;
  max-width: 1440px;
  margin: 0 auto;
`

export default App;
