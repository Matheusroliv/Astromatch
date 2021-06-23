import React, { useState } from 'react'
import styled from 'styled-components'
import AstromatchLogo from '../assets/images/astromatchlogo.png'

const CardPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const CardSize = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  height: 400px;
  width: 265px;
  background-color: #FFF;
`
const CardHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  height: 34px;

  img {
    height: 32px;
    width: 99px;
  }
`

export default function MainCard() {
  const [Page, setPage] = useState("ChoosePage")

  const pageChange = (page) => {
      setPage(page)
  }

  const renderPage = () => {
    switch (Page) {
      case "ChoosePage":
        return (
          <CardPosition>
            <CardSize>
              <CardHead>
                <img src={AstromatchLogo} />
                <button onClick={() => pageChange("MatchPage")}>1</button>
              </CardHead>
            </CardSize>
          </CardPosition>
        )
      case "MatchPage":
        return (
          <CardPosition>
            <CardSize>
              <CardHead>
                <img src={AstromatchLogo} />
                <div>2</div>
              </CardHead>
            </CardSize>
          </CardPosition>
        )
      default:
        return <h1>Page not found</h1>
    }
  };

  return (
      <div>
        {renderPage()}
      </div>
  )
}