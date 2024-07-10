import React from "react";
import styled from "styled-components";

const CharacterImageDiv = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 0;
`;

const base_url = import.meta.env.BASE_URL;

const getCharacterImageString = (expression: string) => {};

export type characterImageType = {
    b:string
    f:string
    lh:string
    rh:string
    lf:string
    rf:string
}

export default function CharacterImage({ character }: { character: characterImageType }) {
  return (
    <div>
      <CharacterImageDiv 
      src={base_url + `images/${character.b}.png`} 
      alt={`キャラクター`} 
      />
      <CharacterImageDiv
        src={base_url + `images/${character.f}.png`}
        alt={`キャラクター `}
      />
      <CharacterImageDiv
          src={base_url + `images/${character.rh}.png`}
          alt={`キャラクター `}
      />
        <CharacterImageDiv
            src={base_url + `images/${character.rf}.png`}
            alt={`キャラクター `}
        />
        <CharacterImageDiv
            src={base_url + `images/${character.lf}.png`}
            alt={`キャラクター `}
        />
        <CharacterImageDiv
            src={base_url + `images/${character.lh}.png`}
            alt={`キャラクター `}
      />
    </div>
  );
}
