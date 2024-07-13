import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
const start = [
  `${base_url}images/fmani4.png`,
  `${base_url}images/fmani3.png`,
  `${base_url}images/fmani5.png`,
  `${base_url}images/fmani2.png`,
  `${base_url}images/fmani1.png`,
];

const finish = [
  `${base_url}images/fmanifin1.png`,
  `${base_url}images/fmanifin2.png`,
  `${base_url}images/fmanifin3.png`,
  `${base_url}images/fmanifin4.png`,
];

type key = "start" | "finish";
export const FaceAnimation = ({animationKey}: { animationKey: key }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = animationKey === "start"? start : finish;

    useEffect(() => {

      let interval: number;
      setCurrentIndex(0); // animationKey が変更されたときに最初の画像から再生する
  
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 >= images.length) {
            clearInterval(interval); // 最後の画像を表示したらインターバルをクリアする
            return prevIndex;
          }
          return prevIndex + 1;
        });
        }, 150); // 150msごとに画像を切り替える
    
        return () => clearInterval(interval);
      }, [animationKey, images.length]);
    
  return (
    <div className="animation-container">
      <CharacterImageDiv
        src={images[currentIndex]}
        alt="Animation Frame"
      />
    </div>
  );
};
