import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import CharacterImage, { characterImageType } from "./CharacterImage";

import { dialogueTextDic, getCurrentText } from "./DialogueTextDic";
import { flagKeyValueDic } from "./FlagControllContainer";

const Container = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 600px;
  width: 100%;
  height: 100%;
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
  background-color: rgba(251, 251, 251, 0.9); /* 半透明の黒色背景 */
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
      return css`
        ${growAnimation} 0.5s forwards
      `;
    } else if (!$isvisible && $islastdialogue) {
      return css`
        ${shrinkAnimation} 0.5s forwards
      `;
    }
    return "none";
  }};
`;

const DialogueTextStyle = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const DisplayedText = ({ text }: { text: string }) => {
  return (
    <DialogueTextStyle>
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </DialogueTextStyle>
  );
};

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
  color: #e5e8ef;
  border: 4px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  b: "bo1",
  f: "f111",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1",
  i: "none",
};

const characterTypeSample_Manipulated: characterImageType = {
  f: "fmanipulated",
  i: "none",
};


interface DialogueProps {
  flags: flagKeyValueDic;
}

export const  DialogueFrame = ({flags} : DialogueProps) => {
  const [character, setCharacter] = useState(characterTypeSample);
  const [dialogue, setDialogue] = useState(dialogueTextDic.sample1);
  const [isManipulated, setIsManipulated] = useState(false);

  const [isvisible, setisvisible] = useState(false);
  const [islastdialogue, setislastdialogue] = useState(false);

  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  //Dialogue内容設定用のuseEffect
  //TODO:更新のタイミングがflags変更時でOKなのかの確認
  useEffect(() => {
    setDialogue(getCurrentText(flags));
  }, [flags]);

  useEffect(() => {
    if (dialogue.length > 0) {
      setCharacter(dialogue[0].expression);
      setisvisible(true);
      setislastdialogue(false);
      setDisplayedText(""); // テキストリセット
      setTextIndex(0); // インデックスリセット
    } else {
      isManipulated
        ? setCharacter(characterTypeSample_Manipulated)
        : setCharacter(characterTypeSample);
      setislastdialogue(true);
      setisvisible(false);
    }
  }, [dialogue, isManipulated]);

  useEffect(() => {
    if (dialogue.length > 0 && textIndex < dialogue[0].text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + dialogue[0].text[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 50); // 表示速度調整（ミリ秒）
      return () => clearTimeout(timer);
    }
  }, [dialogue, textIndex]);


  window.connect = () => {
    setDialogue(dialogueTextDic.sample2);
    setIsManipulated(true);
    window.reset = () => {
      setDialogue(dialogueTextDic.sample1);
      setIsManipulated(false);
    };
  
  };
  window.openHatch = () => {
    setDialogue(dialogueTextDic.sample3);
  };
  window.disconnect = () => {
    setDialogue(dialogueTextDic.sample4);
    setIsManipulated(false);
  };

  const handleClick = () => {
    if (dialogue.length > 0) {
      const tempDialogue = [...dialogue];
      tempDialogue.shift();
      setDialogue(tempDialogue);
    }
  };

  return (
    <Container onClick={handleClick}>
      <CharacterImage character={character} />

      {dialogue.length > 0 && dialogue[0].text === "" ? (
        <></>
      ) : isManipulated ? (
        dialogue.length > 0 && (
          <ManipulatedDialogueBox>
            <DisplayedText text={displayedText} />
          </ManipulatedDialogueBox>
        )
      ) : (
        <DialogueBox
          $isvisible={isvisible}
          $islastdialogue={islastdialogue}
          onClick={handleClick}
        >
          {dialogue.length > 0 && <DisplayedText text={displayedText} />}
        </DialogueBox>
      )}
    </Container>
  );
};

