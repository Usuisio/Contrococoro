import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaceAnimation } from "./FaceAnimation";

const CharacterImageDiv = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 0;
`;
const WholeCharacterImageDiv = styled.div`
  position: absolute;
  top: auto;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const base_url = import.meta.env.BASE_URL;

export type characterImageType = {
  b?: string;
  f?: string;
  lh?: string;
  rh?: string;
  lf?: string;
  rf?: string;
  i?: string;
};

export default function CharacterImage({
  character,
}: {
  character: characterImageType;
}) {
  const [prevFace, setPrevFace] = useState(character.f);
  const [prevBody, setPrevBody] = useState(character.b);
  const [prevLeftHand, setPrevLeftHand] = useState(character.lh);
  const [prevRightHand, setPrevRightHand] = useState(character.rh);
  const [prevLeftFoot, setPrevLeftFoot] = useState(character.lf);
  const [prevRightFoot, setPrevRightFoot] = useState(character.rf);
  const [prevIcon, setPrevIcon] = useState(character.i);

  useEffect(() => {
    if (
      character.f !== null &&
      character.f !== undefined &&
      character.f !== ""
    ) {
      setPrevFace(character.f);
    }
  }, [character.f]);
  useEffect(() => {
    if (
      character.b !== null &&
      character.b !== undefined &&
      character.b !== ""
    ) {
      setPrevBody(character.b);
    }
  }, [character.b]);
  useEffect(() => {
    if (
      character.lh !== null &&
      character.lh !== undefined &&
      character.lh !== ""
    ) {
      setPrevLeftHand(character.lh);
    }
  }, [character.lh]);
  useEffect(() => {
    if (
      character.rh !== null &&
      character.rh !== undefined &&
      character.rh !== ""
    ) {
      setPrevRightHand(character.rh);
    }
  }, [character.rh]);
  useEffect(() => {
    if (
      character.lf !== null &&
      character.lf !== undefined &&
      character.lf !== ""
    ) {
      setPrevLeftFoot(character.lf);
    }
  }, [character.lf]);
  useEffect(() => {
    if (
      character.rf !== null &&
      character.rf !== undefined &&
      character.rf !== ""
    ) {
      setPrevRightFoot(character.rf);
    }
  }, [character.rf]);
  useEffect(() => {
    if (
      character.i !== null &&
      character.i !== undefined &&
      character.i !== ""
    ) {
      setPrevIcon(character.i);
    }
  }, [character.i]);
  return (
    <WholeCharacterImageDiv>

      {character.f === "manipulatedAnimation" ? (
        <FaceAnimation animationKey="start" />
      ) : character.f === "finishedAnimation" ? (
        <FaceAnimation animationKey="finish" />
      ) : (
        <CharacterImageDiv
          src={base_url + `images/${prevFace}.png`}
          alt={`キャラクター `}
        />
      )}
      <CharacterImageDiv
        src={base_url + `images/${prevRightHand}.png`}
        alt={`キャラクター `}
      />
      <CharacterImageDiv
        src={base_url + `images/${prevBody}.png`}
        alt={`キャラクター`}
      />

      <CharacterImageDiv
        src={base_url + `images/${prevRightFoot}.png`}
        alt={`キャラクター `}
      />
      <CharacterImageDiv
        src={base_url + `images/${prevLeftFoot}.png`}
        alt={`キャラクター `}
      />
      <CharacterImageDiv
        src={base_url + `images/${prevLeftHand}.png`}
        alt={`キャラクター `}
      />

      {prevIcon === "none" ? <></>: (
        <CharacterImageDiv
          src={base_url + `images/${prevIcon}.png`}
          alt={`キャラクター `}
        />
      )}
    </WholeCharacterImageDiv>
  );
}
