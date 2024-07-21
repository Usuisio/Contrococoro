import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import {
  flagKeyValueDic,
  FlagNames,
  getFlagValueByName,
} from "./FlagControllContainer";
import { DialogueFrame } from "./DialogueFrame";

interface AccordionData {
  id: number;
  title: string;
  content: string;
  expandable: boolean;
  isVisible: () => boolean;
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 300px;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledAccordion = styled(Accordion)<{ $expandable: boolean }>`
  &.MuiAccordion-root {
    margin: 0;
    background-color: transparent;
    &:before {
      display: none;
    }
    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
  &.Mui-disabled {
    background-color: transparent;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)<{
  $expandable: boolean;
}>`
  &.MuiAccordionSummary-root {
    background-color: ${(props) =>
      props.$expandable ? "rgba(0, 0, 0, 0.03)" : "rgba(0, 0, 0, 0.08)"};
    min-height: 48px;
    &.Mui-expanded {
      min-height: 48px;
    }
  }
  & .MuiAccordionSummary-content {
    margin: 12px 0;
    &.Mui-expanded {
      margin: 12px 0;
    }
  }
  & .MuiTypography-root {
    color: rgba(0, 0, 0, 0.87);
    font-weight: ${(props) => (props.$expandable ? 500 : 600)};
  }
`;

interface DialogueProps {
  flags: flagKeyValueDic;
}

export const DocumentAccordionLayer = ({ flags }: DialogueProps) => {
  const getFlagValueCore = (flagName: string): boolean => {
    return getFlagValueByName(flags, flagName);
  };
  const isPhase1 =
    getFlagValueCore("isFirstTalkEnd") && !getFlagValueCore("isEnableDelete");

  const accordionData: AccordionData[] = [
    {
      id: 0,
      title: "ロボット操作マニュアル",
      content:
        "F12キーでコンソールを開き、以下のコマンドを入力してください。\nすべて大文字で、()も含めて入力してください。",
      expandable: false,
      isVisible: () => true, // 常に表示
    },
    {
      id: 1,
      title: "診断（CHECK）",
      content: "CHECK()：ロボットが自己診断プログラムを開始します。",
      expandable: true,
      isVisible: () => isPhase1,
    },
    {
      id: 1,
      title: "診断（CHECK）",
      content:
        "CHECK()：ロボットが自己診断プログラムを開始します。\nCHECK(MEMORY)：ロボットの記憶をクロールします。",
      expandable: true,
      isVisible: () => getFlagValueCore("isEnableDelete"),
    },
    {
      id: 2,
      title: "取り外し（REMOVE）",
      content: "REMOVE(ARM)：腕を取り外します。",
      expandable: true,
      isVisible: () => getFlagValueCore("isFirstTalkEnd"),
    },
    {
      id: 3,
      title: "削除（DELETE）",
      content: "DELETE(RULE)：",
      expandable: true,
      isVisible: () => getFlagValueCore("isEnableDelete"),
    },
  ];

  const getFlagValue = (flagName: FlagNames): boolean => {
    const flag = flags.find((f) => f.name === flagName);
    return flag ? flag.flag.value : false;
  };

  return (
    <Container>
      <DialogueFrame flags={flags} />
      <AccordionContainer>
        {accordionData.map(
          (item) =>
            item.isVisible() && (
              <StyledAccordion
                key={item.id}
                disabled={!item.expandable}
                defaultExpanded={!item.expandable}
                disableGutters
                square
                $expandable={item.expandable}
              >
                <StyledAccordionSummary
                  expandIcon={item.expandable ? <ExpandMoreIcon /> : null}
                  aria-controls={`panel${item.id}-content`}
                  id={`panel${item.id}-header`}
                  $expandable={item.expandable}
                >
                  <Typography>{item.title}</Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </StyledAccordion>
            )
        )}
      </AccordionContainer>
    </Container>
  );
};
