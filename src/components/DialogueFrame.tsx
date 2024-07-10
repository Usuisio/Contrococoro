import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import CharacterImage, { characterImageType } from "./CharacterImage";

const Container = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 600px;
  width: 100%;
  height: 100%;
`;

const BackgroundImageDiv = styled.img`
  position: absolute;
  width: 200%;
  height: 200%;
  object-fit: contain;
  z-index: -10;
`;

interface DialogueBoxProps {
  $isvisible: boolean;
  $islastdialogue: boolean;
}

const DialogueBox = styled.div<DialogueBoxProps>`
  position: absolute;
  bottom: 32px;
  left: 50%;
  padding: 16px, 16px, 32px;
  width: 80%;
  height: 20%;
  min-width: 400px;
  min-height: 100px;
  background-color: rgba(251, 251, 251, 0.8); /* 半透明の黒色背景 */
  border: 4px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateX(-50%) scale(0);
  animation: ${({ $isvisible, $islastdialogue }) => {
    if ($isvisible && !$islastdialogue) {
      return css`${growAnimation} 0.5s forwards`;
    } else if (!$isvisible && $islastdialogue) {
      return css`${shrinkAnimation} 0.5s forwards`;
    }
    return 'none';
  }};
;
`; 

const DialogueText = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

const ManipulatedDialogueBox = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px, 16px, 32px;
  width: 80%;
  height: 20%;
  min-width: 400px;
  min-height: 100px;
  background-color: rgba(71, 71, 83, 0.8); /* 半透明の黒色背景 */
  border: 4px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
;
`; 

const growAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(0);
  }
  to {
    transform: translateX(-50%) scale(1);
  }
`;

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(1);
  }
  to {
    transform: translateX(-50%) scale(0);
  }
`;
const characterTypeSample: characterImageType = {
  b: "b1",
  f: "f111",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1",
};

const characterTypeSample2: characterImageType = {
  b: "b1",
  f: "f132",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1",
};
const characterTypeSample3: characterImageType = {
  b: "b1",
  f: "f383",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1",
};
const characterTypeSample4: characterImageType = {
  b: "b1",
  f: "fmanipulated",
  lh: "lh1",
  rh: "rh2",
  lf: "lf2",
  rf: "rf2",
};

const sampleDialogues = [
  { text: "こんにちは！普通の表情です。", expression: characterTypeSample },
  { text: "わーい！嬉しいです！", expression: characterTypeSample2 },
  { text: "うえーん、悲しいよ...", expression: characterTypeSample3 },
];

declare global {
  interface Window {
    write: (text: string) => void;
  }
}

export const DialogueFrame = ({}) => {
  const [character, setCharacter] = useState(characterTypeSample);
  const [dialogue, setDialogue] = useState(sampleDialogues);
  const [isManipulated, setIsManipulated] = useState(false);

  const [isvisible, setisvisible] = useState(false);
  const [islastdialogue, setislastdialogue] = useState(false);
  
  useEffect(() => {
    if (dialogue.length > 0) {
      setCharacter(dialogue[0].expression);
      setisvisible(true);
      setislastdialogue(false);
    }
    else 
    {
      isManipulated ? setCharacter(characterTypeSample4) : setCharacter(characterTypeSample);
      setislastdialogue(true);
      setisvisible(false);
    }
  }, [dialogue]);

  window.write = () => {
    setDialogue([
      {
        text: "外部コンソールから接続されました。マニュアルモードに切り替わります。",
        expression: characterTypeSample4,
      },
    ]);
    setIsManipulated(true);
  };

  const handleClick = () => {
    if (dialogue.length > 0) {
      const tempDialogue = [...dialogue];
      tempDialogue.shift();
      setDialogue(tempDialogue);
    }
  };
  return (
    <Container>
      <CharacterImage character={character} />

      {isManipulated ? (
        dialogue.length > 0 &&
      <ManipulatedDialogueBox onClick={handleClick}>
          <DialogueText>{dialogue[0].text}</DialogueText>
        </ManipulatedDialogueBox>
      ) : (
        
      <DialogueBox $isvisible={isvisible} $islastdialogue={islastdialogue} onClick={handleClick}>
      {dialogue.length > 0 && (
          <DialogueText>{dialogue[0].text}</DialogueText>
      )}
        </DialogueBox>
      )}
    </Container>
  );
};
