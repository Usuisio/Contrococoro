import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { flagKeyValueDic, getFlagSetterByName, getFlagValueByName } from './FlagControllContainer';
import { DocumentAccordionLayer } from './DocumentAccordionLayer';

const fadeToBlack = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BlackoutOverlay = styled.div<{ $isVisible: boolean, $isFadingToBlack: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible 
    ? (props.$isFadingToBlack ? fadeToBlack : 'none') 
    : fadeIn} 1s ease-in-out forwards;
  pointer-events: none;
  z-index: 100;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface FadeInLayerProps {
  flags: flagKeyValueDic;
}

export const FadeInLayer: React.FC<FadeInLayerProps> = ({ flags }) => {
  const [isBlackoutVisible, setIsBlackoutVisible] = useState(true);
  const [isFadingToBlack, setIsFadingToBlack] = useState(false);

  const [showTitle, setShowTitle] = useState(false);

  const handleAnimationEnd = useCallback(() => {
    if (isFadingToBlack) {
      //タイトル画面の表示は暗転しっぱなしにする
      if(getFlagValueByName(flags, 'showTitle')) {
        setShowTitle(true);
        return;
      } 
      
      getFlagSetterByName(flags, 'blackOut')(false);
      
      //ここで暗転中にやりたいことを書く
      //エンディングAルートの、写真を出すときの処理
      if(getFlagValueByName(flags, 'isEndingA')) {
        getFlagSetterByName(flags, 'showPhotoA')(true);
      }
      //エンディングBルートの、バッテリーを交換する処理
      if(getFlagValueByName(flags, 'isEnableRemoveBattery')) {
        getFlagSetterByName(flags, 'finishReplaceBattery')(true);
        getFlagSetterByName(flags, "NeedToForceChange")(true);
      }
      //エンディングBルートの、写真を出すときの処理
      if(getFlagValueByName(flags, 'isEndingB')) {
        getFlagSetterByName(flags, 'showPhotoB')(true);
      }
    }
  }, [isFadingToBlack, flags]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlackoutVisible(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (getFlagValueByName(flags, 'blackOut')) {
      setIsBlackoutVisible(true);
      setIsFadingToBlack(true);
    } else {
      setIsBlackoutVisible(false);
      setIsFadingToBlack(false);
    }
  }, [flags]);

  return (
    <Container>
      <Content>
        <DocumentAccordionLayer flags={flags} />
      </Content>
      <BlackoutOverlay 
        $isVisible={isBlackoutVisible} 
        $isFadingToBlack={isFadingToBlack} 
        onAnimationEnd={handleAnimationEnd}
      />
      {showTitle && <div>リペア・ザ・ココロ</div>}
    </Container>
  );
};