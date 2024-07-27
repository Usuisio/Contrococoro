import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DialogueFrame } from './DialogueFrame';  // 既存のDialogueFrameをインポート
import { flagKeyValueDic } from './FlagControllContainer';
import { DocumentAccordionLayer } from './DocumentAccordionLayer';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FadeOutOverlay = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? 'none' : fadeOut} 1s ease-in-out forwards;
  pointer-events: none; // これにより、オーバーレイがクリックイベントを妨げません
  z-index: 100;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface FadeInLayerProps {
  flags: flagKeyValueDic;  // 既存のDialogueFrameのプロップス
}

export const FadeInLayer: React.FC<FadeInLayerProps> = ({ flags }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 150);  // 少し遅延を入れて、コンポーネントが確実にマウントされてから開始

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Content>
        <DocumentAccordionLayer flags={flags} />
      </Content>
     <FadeOutOverlay $isVisible={isOverlayVisible} />
    </Container>
  );
};