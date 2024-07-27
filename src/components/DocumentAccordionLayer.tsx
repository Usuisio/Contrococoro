import React from "react";
import i18n from "../i18n";
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
  width: 330px;
  max-height: 70vh;
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

  const accordionData: AccordionData[] = [
    {
      id: 0,
      title: i18n.t("docs0_title"),
      content:
      i18n.t("docs0_desc"),
      expandable: false,
      isVisible: () => true, // 常に表示
    },
    {
      id: 1,
      title: i18n.t("docs1_title"),
      content: i18n.t("docs1_desc"),
      expandable: true,
      // isVisible: () => getFlagValueCore("isFirstTalkEnd"),
      isVisible: () => true, // 常に表示
    },
    {
      id: 2,
      title: i18n.t("docs2_title"),
      content: i18n.t("docs2_desc"),
      expandable: true,
      // isVisible: () => getFlagValueCore("isCheckEnd"),
      isVisible: () => true, // 常に表示
    },
    {
      id: 3,
      title: i18n.t("docs3_title"),
      content: i18n.t("docs3_desc"),
      expandable: true,
      // isVisible: () => getFlagValueCore("isCheckEnd"),
      isVisible: () => true, // 常に表示
    },
    {
      id: 4,
      title: i18n.t("docs4_title"),
      content: i18n.t("docs4_desc"),
      expandable: true,
      // isVisible: () => getFlagValueCore("isEnableDelete"),
      isVisible: () => true, // 常に表示
    },
    {
      id: 5,
      title: i18n.t("docs5_title"),
      content: i18n.t("docs5_desc"),
      expandable: true,
      // isVisible: () => getFlagValueCore("isEnableDelete"),
      isVisible: () => true, // 常に表示
    },
    
    {
      id: 100,
      title: i18n.t("docs100_title"),
      content:
      i18n.t("docs100_desc"),
      expandable: false,
      isVisible: () => true, // 常に表示
    },
  ];

  const getFlagValue = (flagName: FlagNames): boolean => {
    const flag = flags.find((f) => f.name === flagName);
    return flag ? flag.flag.value : false;
  };

  return (
    <Container>
      
      <DialogueFrame flags={flags}/>
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
                  <Typography>
                    {item.content.split("\n").map((line, index, array) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < array.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            )
        )}
      </AccordionContainer>
    </Container>
  );
};
