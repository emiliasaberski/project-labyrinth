import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Loader } from './Loader'
import { StartPage } from './StartPage'
import { GameBoard } from './GameBoard'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainPage = () => {
  const isUserNameProvided = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.game.loading)

  return (
    <MainPageContainer>
      <Header />
      {isLoading ? <Loader /> : (<> {isUserNameProvided === '' ? <StartPage /> : <GameBoard />} </>)}
      <Footer />
    </MainPageContainer>
  )
}

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    min-height: 90vh;
    max-width: 100vw;
    margin: 0 auto;
    margin-bottom: 20px;
    color: rgb(197, 91, 95);
`