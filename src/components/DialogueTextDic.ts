import i18n from "../i18n";
import { characterImageType } from "./CharacterImage";
import { flagKeyValueDic, getFlagByName, getFlagSetterByName } from "./FlagControllContainer";

export type Choice = {
  text: string;
  nextDialogue: string;
};

export type DialogueEntry = {
  text: string;
  expression: characterImageType;
  choices?: Choice[];
  flagAction?: (flags: flagKeyValueDic) => void;
  isManipulated?: boolean;
};

export type DialogueTextDic = {
  [key: string]: DialogueEntry[];
};

//fがついているものは即時実行なのでreturn
export const getCurrentText = (flags: flagKeyValueDic) => {
  let currentText = dialogueTextDic["導入"];

  if (getFlagByName(flags, "isFirstTalkEnd")?.value) {
    currentText = dialogueTextDic["悩み"];
  }
  if (getFlagByName(flags, "fCheck")?.value) {
    if(getFlagByName(flags, "isCheckEnd")?.value){
      currentText = dialogueTextDic["自己診断_2回目以降"];
      return currentText;
    }
    currentText = dialogueTextDic["自己診断"];
    return currentText;
  }
  if (getFlagByName(flags, "isCheckEnd")?.value) {
    currentText = dialogueTextDic["バッテリー交換"];
  }

  if (getFlagByName(flags, "fOpenHatch")?.value) {
    currentText = dialogueTextDic["腹部ハッチ開放"];
    return currentText;
  }
  if (getFlagByName(flags, "fCloseHatch")?.value) {
    currentText = dialogueTextDic["腹部ハッチ閉鎖"];
    return currentText;
  }

  if (getFlagByName(flags, "fRemoveBatteryRejected")?.value) {
    currentText = dialogueTextDic["バッテリー交換拒否"];
    return currentText;
  }
  if(getFlagByName(flags, "fRemoveArms")?.value && !getFlagByName(flags, "isLookingForPassword")?.value){
    currentText = dialogueTextDic["腕を外す"];
    return currentText;

  }
  if(getFlagByName(flags, "fRemoveArms")?.value && getFlagByName(flags, "isLookingForPassword")?.value){
    currentText = dialogueTextDic["腕を外してパスワードを見つける"];
    return currentText;
  }
  if(getFlagByName(flags, "fRemoveLegs")?.value){
    currentText = dialogueTextDic["脚を外す"];
    return currentText;
  }


  return currentText;
};

const cBasic: characterImageType = {
  b: "bo1",
  f: "f111",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1",
  i: "none",
};

const c気づく: characterImageType = {
  f: "f114",
  i: "igreet",
};

const cすごい: characterImageType = {
  f: "f131",
  i: "iheart",
};

const c恥ずかしい: characterImageType = {
  f: "f311s",
  i: "iase",
};

const c操作開始 : characterImageType = {
  f: "manipulatedAnimation",
  i: "none",
  lh: "lh1",
  rh: "rh2",
  lf: "lf2",
  rf: "rf2",
};

const c操作開始_腕を外す : characterImageType = {
  f: "manipulatedAnimation",
  i: "none",
  lh: "none",
  rh: "none",
};
const c腕を戻す : characterImageType = {
  f: "f145s",
  i: "imoyamoya",
  lh: "lh1",
  rh: "rh2",
};
const c操作開始_脚を外す : characterImageType = {
  f: "manipulatedAnimation",
  i: "none",
  lh: "lh1",
  rh: "rh3",
  lf: "none",
  rf: "none",
};
const c脚を戻す : characterImageType = {
  f: "f145s",
  i: "imoyamoya",
  lf: "lf1",
  rf: "rf1",
};

const c操作中 : characterImageType = {
  f: "fmanipulated",
  i: "none",
};

const c操作終了 : characterImageType = {
  f: "finishedAnimation",
  i: "none",
};

const cハッチ開放 : characterImageType = {
  b: "bo2",
  f: "fmani1",
};
const cハッチ閉鎖 : characterImageType = {
  b: "bo1",
  f: "fmani1",
};


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

export const dialogueTextDic: DialogueTextDic = {
  導入: [
    {
      text: i18n.t("textA_1"),
      expression: cBasic,
    },

    {
      text: i18n.t("textA_2"),
      expression: c気づく,
    },

    {
      text: i18n.t("textA_3"),
      expression: cすごい,
    },
    {
      text: "",
      expression: cBasic,
      choices: [{ text: i18n.t("choiceB"), nextDialogue: "自己紹介" }],
    },
  ],
  自己紹介: [
    {
      text: i18n.t("textB_1"),
      expression: cBasic,
    },

    {
      text: i18n.t("textB_2"),
      expression: cBasic,
    },

    {
      text: i18n.t("textB_3"),
      expression: cBasic,
    },
    {
      text: "",
      expression: cBasic,
      choices: [{ text: i18n.t("choiceC"), nextDialogue: "悩み" }],
    },
  ],
  悩み: [
    {
      text: i18n.t("textC_1"),
      expression: cBasic,
    },

    {
      text: i18n.t("textC_2"),
      expression: cBasic,
    },

    {
      text: i18n.t("textC_3"),
      expression: cBasic,
    },
    {
      text: i18n.t("textC_4"),
      expression: cBasic,
    },
    {
      text: i18n.t("textC_5"),
      expression: cBasic,
    },
    {
      text: i18n.t("textC_6"),
      expression: cBasic,

      flagAction: (flags) => {
        getFlagSetterByName(flags,"isFirstTalkEnd")(true);
      },
    },
  ],
  自己診断: [
    {
      text: i18n.t("textD_1"),
      expression: c操作開始,
      flagAction: (flags) => {
        //テキスト表示をすっ飛ばして診断始めたプレイヤー対策
        getFlagSetterByName(flags,"isFirstTalkEnd")(true);

        getFlagSetterByName(flags,"fCheck")(false);
      },
    },
      
      {
        text: i18n.t("textD_2"),
        expression: c操作中,
      },
  
      {
        text: i18n.t("textD_3"),
        expression: c操作中,
      },
      {
        text: i18n.t("textD_4"),
        expression: c操作中,
      },
      {
        text: i18n.t("textD_5"),
        expression: c操作中,
      },
      {
        text: i18n.t("textD_6"),
        expression: c操作中,
      },
      {
        text: "",
        expression: c操作終了,
      },
      {
        text: i18n.t("textD_7"),
        expression: cBasic,
      },
      {
        text: "",
        expression: cBasic,
        choices: [{ text: i18n.t("choiceE"), nextDialogue: "バッテリー交換" }],
      },
  ],
  自己診断_2回目以降: [
    {
      text: i18n.t("textD_1"),
      expression: c操作開始,
      flagAction: (flags) => {
        getFlagSetterByName(flags,"fCheck")(false);
      }
    },
      
      {
        text: i18n.t("textD_2"),
        expression: c操作中,
      },
  
      {
        text: i18n.t("textD_3"),
        expression: c操作中,
      },
      {
        text: i18n.t("textD_4"),
        expression: c操作中,
      },
      {
        text: i18n.t("textD_5"),
        expression: c操作中,
      },
      {
        text: i18n.t("textD_6"),
        expression: c操作中,
      },
      {
        text: "",
        expression: c操作終了,
      },
      {
        text: i18n.t("textD_7_2"),
        expression: cBasic,
      },
  ],
  バッテリー交換: [
    {
      text: i18n.t("textE_1"),
      expression: cBasic,
    },
    {
      text: i18n.t("textE_2"),
      expression: cBasic,
    },
    {
      text: i18n.t("textE_3"),
      expression: cBasic,
      
      flagAction: (flags) => {
        getFlagSetterByName(flags,"isCheckEnd")(true);
      }
    },
  ],
  腹部ハッチ開放: [
    {
      text: i18n.t("textF_1"),
      expression: cハッチ開放,
      flagAction: (flags) => {
        getFlagSetterByName(flags,"fOpenHatch")(false);
        getFlagSetterByName(flags,"isOpenHatch")(true);
      }
    },
  ],
  腹部ハッチ閉鎖: [
    {
      text: i18n.t("textF_1_a"),
      expression: cハッチ閉鎖,
      flagAction: (flags) => {
        getFlagSetterByName(flags,"fCloseHatch")(false);
        getFlagSetterByName(flags,"isOpenHatch")(false);
      }
    },
  ],
  バッテリー交換拒否: [
    {
      text: i18n.t("textF_2"),
      expression: c操作中,
    },
    {
      text: "",
      expression: c操作終了,
      flagAction: (flags) => {
        getFlagSetterByName(flags,"fRemoveBatteryRejected")(false);
      }
    },
    {
      text: i18n.t("textF_3"),
      expression: cBasic,
    },
    {
      text: i18n.t("textF_4"),
      expression: cBasic,
    },
    {
      text: "",
      expression: cBasic,
      choices: [{ text: i18n.t("choiceG"), nextDialogue: "バッテリー交換拒否_2" }],
    },
  ],
  バッテリー交換拒否_2: [
    {
      text: i18n.t("textG_1"),
      expression: cBasic,
    },
    {
      text: "",
      expression: cBasic,
      choices: [{ text: i18n.t("choiceH_1"), nextDialogue: "バッテリー交換拒否_3" },
      { text: i18n.t("choiceH_2"), nextDialogue: "バッテリー交換拒否_3" }],
    },
  ],
  バッテリー交換拒否_3: [
    {
      text: i18n.t("textH_1"),
      expression: cBasic,
    },
    {
      text: i18n.t("textH_2"),
      expression: cBasic,
    },
    {
      text: i18n.t("textH_3"),
      expression: cBasic,
    },
    {
      text: "",
      expression: cBasic,
      choices: [{ text: i18n.t("choiceI"), nextDialogue: "記憶" }],
    },
  ],
  記憶: [
    {
      text: i18n.t("textI_1"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_2"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_3"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_4"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_5"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_6"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_7"),
      expression: cBasic,
    },
    {
      text: i18n.t("textI_8"),
      expression: cBasic,
      
      flagAction: (flags) => {
        getFlagSetterByName(flags,"isAbleLoadMemory")(true);
      }
    },
  ],
  腕を外す: [
    {
      text: i18n.t("textArm_1"),
      expression: c操作開始_腕を外す,
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: i18n.t("textArm_2"),
      expression: c恥ずかしい,
    },
    {
      text:i18n.t("textArm_3"),
      expression: c腕を戻す,
    },
  ],

  脚を外す: [
    {
      text: i18n.t("textLeg_1"),
      expression: c操作開始_脚を外す,
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: i18n.t("textLeg_2"),
      expression: c恥ずかしい,
    },
    {
      text: i18n.t("textLeg_3"),
      expression: c脚を戻す,
    },
  ],

};
