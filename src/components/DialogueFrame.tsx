import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import CharacterImage, { characterImageType } from "./CharacterImage";
import {
  Choice,
  DialogueEntry,
  dialogueTextDic,
  getCurrentText,
} from "./DialogueTextDic";
import { flagKeyValueDic, getFlagSetterByName, getFlagValueByName } from "./FlagControllContainer";

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

const ChoiceContainer = styled.div`
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ChoiceButton = styled.button`
  background-color: rgba(251, 251, 251, 0.9);
  border: 2px solid #333;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: rgba(200, 200, 200, 0.9);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

interface DialogueProps {
  flags: flagKeyValueDic;
}

export const DialogueFrame = ({ flags }: DialogueProps) => {
  const [character, setCharacter] = useState(characterTypeSample);
  const [dialogue, setDialogue] = useState<DialogueEntry[]>(getCurrentText(flags));
  const [isManipulated, setIsManipulated] = useState(false);
  const [isvisible, setisvisible] = useState(false);
  const [islastdialogue, setislastdialogue] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [currentChoices, setCurrentChoices] = useState<Choice[]>([]);

  useEffect(() => {
    if(getFlagValueByName(flags, "NeedToForceChange")){
    setDialogue(getCurrentText(flags));
    getFlagSetterByName(flags, "NeedToForceChange")(false);
  }}, [flags]);

  useEffect(() => {
    if (dialogue.length > 0) {
      const currentEntry = dialogue[0];
      setCharacter(currentEntry.expression);
      setisvisible(true);
      setislastdialogue(false);
      setDisplayedText("");
      setTextIndex(0);
      setCurrentChoices(currentEntry.choices || []);

      setIsManipulated(currentEntry.isManipulated ?? false);
   
      if (currentEntry.flagAction) {
        currentEntry.flagAction(flags);
      }

    } else { 
      // setCharacter(characterTypeSample);
      setislastdialogue(true);
      setisvisible(false);
    }
  }, [dialogue]);

  useEffect(() => {
    if (dialogue.length > 0 && textIndex < dialogue[0].text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + dialogue[0].text[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [dialogue, textIndex]);

  const handleClick = () => {
    if (dialogue.length > 0 && currentChoices.length === 0) {
      const tempDialogue = [...dialogue];
      tempDialogue.shift();
      setDialogue(tempDialogue);
    }
    else{
      setDialogue(getCurrentText(flags));
    }
  };

  const handleChoiceClick = (choice: Choice) => {
    setDialogue(dialogueTextDic[choice.nextDialogue]);
  };

  return (
    <Container onClick={currentChoices.length > 0 ? undefined : handleClick}>
      <CharacterImage character={character} />
      {currentChoices.length <= 0 &&
        (dialogue.length > 0 && dialogue[0].text === "" ? (
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
        ))}

      {currentChoices.length > 0 && (
        <ChoiceContainer>
          {currentChoices.map((choice, index) => (
            <ChoiceButton key={index} onClick={() => handleChoiceClick(choice)}>
              {choice.text}
            </ChoiceButton>
          ))}
        </ChoiceContainer>
      )}
    </Container>
  );
};
