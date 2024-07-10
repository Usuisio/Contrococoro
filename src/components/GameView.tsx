import React from 'react'
import { DialogueFrame } from './DialogueFrame'
import styled from 'styled-components';

const GameViewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${import.meta.env.BASE_URL}images/background.png);
  background-size: cover; /* 追加 */
  background-repeat: no-repeat; /* 繰り返しを無効化 */
  background-position: center; /* 中央に配置 */
`;

export const GameView = ()=>{
  return (
    <GameViewDiv>
        <DialogueFrame />
    </GameViewDiv>
  )
}

