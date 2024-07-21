import i18n from "../i18n";
import { characterImageType } from "./CharacterImage";
import { flagKeyValueDic, getFlagByName } from "./FlagControllContainer";


export const getCurrentText = (flags: flagKeyValueDic) => {

    let currentText = dialogueTextDic["sample1"];
    
    if (getFlagByName(flags,"fCheck")?.value) {
        currentText = dialogueTextDic["sample2"];
    } 

    return currentText;
}

const characterTypeSample: characterImageType = {
    b: "bo1",
    f: "f111",
    lh: "lh1",
    rh: "rh1",
    lf: "lf1",
    rf: "rf1",
    i: "none",
  };
  
  const characterTypeSample1: characterImageType = {
    f: "f111",
  };
  
  const characterTypeSample2: characterImageType = {
    f: "f114",
    i: "igreet",
  };
  const characterTypeSample3: characterImageType = {
    f: "f131",
    i: "iheart",
  };
  const characterTypeSample4: characterImageType = {
    f: "f311s",
    i: "iase",
  };
  const characterTypeSample_Manipulated: characterImageType = {
    f: "fmanipulated",
    i: "none",
  };
  const characterTypeSample_animation: characterImageType = {
    f: "manipulatedAnimation",
    i: "none",
    lh: "lh1",
    rh: "rh2",
    lf: "lf2",
    rf: "rf2",
  };
  const characterTypeSample_finishedAnimation: characterImageType = {
    f: "finishedAnimation",
    i: "none",
  };
  const f151s: characterImageType = {
    f: "f151s",
    i: "imoyamoya",
  };
  
  const characterTypeSample_hatchOpen: characterImageType = {
    b: "bo2",
    f: "fmani1",
  };
  

export const dialogueTextDic = {
    "sample1": [
        { text: "", expression: characterTypeSample },
        {
            text: "こんにちは！\n今日もメンテナンスお願いしま……",
            expression: characterTypeSample,
        },
        { text: "……もしかして、あなた、ニンゲン？", expression: characterTypeSample2 },
        {
            text: i18n.t("sample1"),
            expression: characterTypeSample3,
        },
        {
            text: "……あんまり、くすぐったくしないでね？",
            expression: characterTypeSample4,
        },
        { text: "", expression: characterTypeSample },
    ],
    "sample2": 
        [
            {
              text: "外部コンソールから接続されました。\nメンテナンスモードに切り替わります。",
              expression: characterTypeSample_animation,
            },
            {
              text: i18n.t("sample2"),
              expression: characterTypeSample_Manipulated,
            },
          
    ],
    "sample3": [
        {
            text: i18n.t("sample3"),
            expression: characterTypeSample_hatchOpen,
        },
    ],
    "sample4": [
            { text: "", expression: characterTypeSample_finishedAnimation },
            { text: "……あ、終わった？", expression: characterTypeSample1 },
            {
              text: i18n.t("sample4"),
              expression: f151s,
            },
    ],
}
