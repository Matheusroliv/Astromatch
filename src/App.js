import React, { Fragment } from 'react';
import GlobalStyle from './themes/globalStyle'
import MainCard from './components/MainCard'

export default function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <MainCard></MainCard>
    </Fragment>
  )
}
