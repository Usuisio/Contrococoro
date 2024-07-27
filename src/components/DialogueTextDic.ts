import i18n from "../i18n";
import { characterImageType } from "./CharacterImage";
import {
  flagKeyValueDic,
  getFlagByName,
  getFlagSetterByName,
} from "./FlagControllContainer";

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
    if (getFlagByName(flags, "isCheckEnd")?.value) {
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

  if (getFlagByName(flags, "isAbleLoadMemory")?.value) {
    currentText = dialogueTextDic["記憶"];
  }

  if (getFlagByName(flags, "fRemoveArms")?.value) {
    if (getFlagByName(flags, "isLookingForPassword")?.value) {
      currentText = dialogueTextDic["パスワードを見つける"];
      return currentText;
    }
    currentText = dialogueTextDic["腕を外す"];
    return currentText;
  }
  if (getFlagByName(flags, "fRemoveLegs")?.value) {
    currentText = dialogueTextDic["脚を外す"];
    return currentText;
  }
  if (getFlagByName(flags, "fLoadMemory1")?.value) {
    currentText = dialogueTextDic["メモリー1"];
    return currentText;
  }
  if (getFlagByName(flags, "fLoadMemory2")?.value) {
    currentText = dialogueTextDic["メモリー2"];
    return currentText;
  }
  if (getFlagByName(flags, "isLookingForPassword")?.value) {
    currentText = dialogueTextDic["パスワードを忘れた"];
  }
  if (getFlagByName(flags, "fLoadMemory3")?.value) {
    currentText = dialogueTextDic["メモリー3"];
    return currentText;
  }
  if (getFlagByName(flags, "isRemindMemory")?.value) {
    currentText = dialogueTextDic["記憶を思い出した"];
  }
  if (getFlagByName(flags, "fDeleteRule")?.value) {
    currentText = dialogueTextDic["ルール削除"];
    return currentText;
  }
  if (getFlagByName(flags, "isEndingA")?.value) {
    currentText = dialogueTextDic["エンディングA"];
  }

  if (getFlagByName(flags, "fDeleteCommand")?.value) {
    currentText = dialogueTextDic["命令削除"];
    return currentText;
  }
  if (getFlagByName(flags, "isEnableRemoveBattery")?.value) {
    currentText = dialogueTextDic["命令削除_4"];
  }

  if (getFlagByName(flags, "fRemoveBattery")?.value) {
    currentText = dialogueTextDic["バッテリー交換中"];
    return currentText;
  }
  if (getFlagByName(flags, "finishReplaceBattery")?.value) {
    currentText = dialogueTextDic["バッテリー交換後"];
    return currentText;
  }
  if (getFlagByName(flags, "isEndingB")?.value) {
    currentText = dialogueTextDic["エンディングB"];
  }

  if (getFlagByName(flags, "fDeleteAll")?.value) {
    currentText = dialogueTextDic["全削除"];
    return currentText;
  }
  return currentText;
};

const cすべてのパーツを通常状態に戻す: characterImageType = {
  b: "bo1",
  f: "f111",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1",
  i: "none",
};

const c普通の顔: characterImageType = {
  f: "f112",
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

const c操作開始: characterImageType = {
  f: "manipulatedAnimation",
  i: "none",
  lh: "lh1",
  rh: "rh2",
  lf: "lf2",
  rf: "rf2",
};

const c操作開始_腕を外す: characterImageType = {
  f: "manipulatedAnimation",
  i: "none",
  lh: "none",
  rh: "none",
};
const c腕を戻す: characterImageType = {
  f: "f145s",
  i: "imoyamoya",
  lh: "lh1",
  rh: "rh2",
};
const c操作開始_脚を外す: characterImageType = {
  f: "manipulatedAnimation",
  i: "none",
  lh: "lh1",
  rh: "rh3",
  lf: "none",
  rf: "none",
};
const c脚を戻す: characterImageType = {
  f: "f145s",
  i: "imoyamoya",
  lf: "lf1",
  rf: "rf1",
};

const c操作中: characterImageType = {
  f: "fmanipulated",
  i: "none",
};

const c操作終了: characterImageType = {
  f: "finishedAnimation",
  i: "none",
};

const cハッチ開放: characterImageType = {
  b: "bo2",
  f: "fmani1",
};
const cハッチ閉鎖: characterImageType = {
  b: "bo1",
  f: "fmani1",
};

const cバッテリー交換: characterImageType = {
  b: "bo3",
  f: "fsleep",
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
      expression: cすべてのパーツを通常状態に戻す,
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
      expression: c普通の顔,
      choices: [{ text: i18n.t("choiceB"), nextDialogue: "自己紹介" }],
    },
  ],
  自己紹介: [
    {
      text: i18n.t("textB_1"),
      expression: { f: "f131", i: "iwaiwai" },
    },

    {
      text: i18n.t("textB_2"),
      expression: { f: "f111", i: "none" },
    },

    {
      text: i18n.t("textB_3"),
      expression: { f: "f212", i: "igreet" },
    },
    {
      text: "",
      expression: c普通の顔,
      choices: [{ text: i18n.t("choiceC"), nextDialogue: "悩み" }],
    },
  ],
  悩み: [
    {
      text: i18n.t("textC_1"),
      expression: { f: "f383", i: "itameiki" },
    },

    {
      text: i18n.t("textC_2"),
      expression: { f: "f381", i: "none" },
    },

    {
      text: i18n.t("textC_3"),
      expression: { f: "f343", i: "imoyamoya" },
    },
    {
      text: i18n.t("textC_4"),
      expression: { f: "f323", i: "iase" },
    },
    {
      text: i18n.t("textC_5"),
      expression: { f: "f315", i: "imoyamoya" },
    },
    {
      text: i18n.t("textC_6"),
      expression: { f: "f312", i: "ihatena" },

      flagAction: (flags) => {
        getFlagSetterByName(flags, "isFirstTalkEnd")(true);
      },
    },
  ],
  自己診断: [
    {
      text: i18n.t("textD_1"),
      expression: c操作開始,
      isManipulated: true,
      flagAction: (flags) => {
        //テキスト表示をすっ飛ばして診断始めたプレイヤー対策
        getFlagSetterByName(flags, "isFirstTalkEnd")(true);

        getFlagSetterByName(flags, "fCheck")(false);
      },
    },

    {
      text: i18n.t("textD_2"),
      isManipulated: true,
      expression: c操作中,
    },

    {
      text: i18n.t("textD_3"),
      isManipulated: true,
      expression: c操作中,
    },
    {
      text: i18n.t("textD_4"),
      isManipulated: true,
      expression: c操作中,
    },
    {
      text: i18n.t("textD_5"),
      isManipulated: true,
      expression: c操作中,
    },
    {
      text: i18n.t("textD_6"),
      isManipulated: true,
      expression: c操作中,
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: i18n.t("textD_7"),
      expression: { f: "f111", i: "igreet" },
    },
    {
      text: "",
      expression: c普通の顔,
      choices: [{ text: i18n.t("choiceE"), nextDialogue: "バッテリー交換" }],
    },
  ],
  自己診断_2回目以降: [
    {
      text: i18n.t("textD_1"),
      expression: c操作開始,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fCheck")(false);
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
      text: i18n.t("textD_7_2"),
      expression: { f: "f191", i: "none" },
    },
  ],
  バッテリー交換: [
    {
      text: i18n.t("textE_1"),
      expression: {
        f: "f175",
        i: "itameiki",
        lh: "lh1",
        rh: "rh1",
        lf: "lf1",
        rf: "rf1",
      },
    },
    {
      text: i18n.t("textE_2"),
      expression: { f: "f312", i: "none" },
    },
    {
      text: i18n.t("textE_3"),
      expression: { f: "f141", i: "none" },

      flagAction: (flags) => {
        getFlagSetterByName(flags, "isCheckEnd")(true);
      },
    },
  ],
  腹部ハッチ開放: [
    {
      text: i18n.t("textF_1"),
      expression: cハッチ開放,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fOpenHatch")(false);
        getFlagSetterByName(flags, "isOpenHatch")(true);
      },
    },
  ],
  腹部ハッチ閉鎖: [
    {
      text: i18n.t("textF_1_a"),
      expression: cハッチ閉鎖,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fCloseHatch")(false);
        getFlagSetterByName(flags, "isOpenHatch")(false);
      },
    },
  ],
  バッテリー交換拒否: [
    {
      text: i18n.t("textF_2"),
      expression: c操作中,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fRemoveBatteryRejected")(false);
      },
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: i18n.t("textF_3"),
      expression: {
        f: "f312",
        i: "ihatena",
        lh: "lh1",
        rh: "rh1",
        lf: "lf1",
        rf: "rf1",
      },
    },
    {
      text: i18n.t("textF_4"),
      expression: { f: "f151s", i: "none" },
    },
    {
      text: "",
      expression: { f: "f154", i: "none" },
      choices: [
        { text: i18n.t("choiceG"), nextDialogue: "バッテリー交換拒否_2" },
      ],
    },
  ],
  バッテリー交換拒否_2: [
    {
      text: i18n.t("textG_1"),
      expression: { f: "f315", i: "igreet" },
    },
    {
      text: "",
      expression: { f: "f114", i: "none" },
      choices: [
        { text: i18n.t("choiceH_1"), nextDialogue: "バッテリー交換拒否_3" },
        { text: i18n.t("choiceH_2"), nextDialogue: "バッテリー交換拒否_3" },
      ],
    },
  ],
  バッテリー交換拒否_3: [
    {
      text: i18n.t("textH_1"),
      expression: { f: "f175", i: "iase" },
    },
    {
      text: i18n.t("textH_2"),
      expression: { f: "f141", i: "none" },
    },
    {
      text: i18n.t("textH_3"),
      expression: { f: "f112", i: "none" },
    },
    {
      text: "",
      expression: { f: "f112", i: "none" },
      choices: [{ text: i18n.t("choiceI"), nextDialogue: "記憶" }],
    },
  ],
  記憶: [
    {
      text: i18n.t("textI_1"),
      expression: {
        f: "f111",
        i: "none",
        lh: "lh1",
        rh: "rh2",
        lf: "lf1",
        rf: "rf1",
      },
    },
    {
      text: i18n.t("textI_2"),
      expression: { f: "f171" },
    },
    {
      text: i18n.t("textI_3"),
      expression: { f: "f381", i: "none" },
    },
    {
      text: i18n.t("textI_4"),
      expression: { f: "f142", i: "none" },
    },
    {
      text: i18n.t("textI_5"),
      expression: { f: "f152", i: "ihatena" },
    },
    {
      text: i18n.t("textI_6"),
      expression: { f: "f131", i: "iwaiwai" },
    },
    {
      text: i18n.t("textI_7"),
      expression: { f: "f121", i: "igreet" },
    },
    {
      text: i18n.t("textI_8"),
      expression: { f: "f131", i: "none" },

      flagAction: (flags) => {
        getFlagSetterByName(flags, "isAbleLoadMemory")(true);
      },
    },
  ],
  メモリー1: [
    {
      text: i18n.t("memory1_Start"),
      expression: c操作開始,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fLoadMemory1")(false);
      },
    },
    {
      text: i18n.t("memory1_1"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory1_2"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory1_3"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory_Finish"),
      expression: c操作中,
    },
    {
      text: "",
      expression: c操作終了,
    },
  ],
  メモリー2: [
    {
      text: i18n.t("memory2_Start"),
      expression: c操作開始,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fLoadMemory2")(false);
      },
    },
    {
      text: i18n.t("memory2_1"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory2_2"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory2_3"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory_Finish"),
      expression: c操作中,
    },
    {
      text: "",
      expression: c操作終了,
    },
  ],
  メモリー3: [
    {
      text: i18n.t("memory3_Start"),
      expression: c操作開始,

      flagAction: (flags) => {
        getFlagSetterByName(flags, "fLoadMemory3")(false);
      },
    },
    {
      text: i18n.t("memory3_1"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory3_2"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory3_3"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory3_4"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory3_5"),
      expression: c操作中,
    },
    {
      text: i18n.t("memory_Finish"),
      expression: c操作中,
    },
    {
      text: "",
      expression: c操作終了,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "isRemindMemory")(true);
      },
    },
  ],

  パスワードを忘れた: [
    {
      text: i18n.t("textJ_1"),
      expression: {
        f: "f171",
        i: "iase",
        lh: "lh1",
        rh: "rh1",
        lf: "lf1",
        rf: "rf1",
      },
    },
    {
      text: i18n.t("textJ_2"),
      expression: { f: "f152", i: "iheart" },
    },
    {
      text: i18n.t("textJ_3"),
      expression: { f: "f111", i: "none" },
    },
    {
      text: i18n.t("textJ_4"),
      expression: { f: "f252", i: "none" },
    },
    {
      text: i18n.t("textJ_5"),
      expression: { f: "f194", i: "none" },
    },
    {
      text: i18n.t("textJ_6"),
      expression: { f: "f381", i: "iase" },
    },
    {
      text: i18n.t("textJ_7"),
      expression: { f: "f111", i: "igreet" },
    },
    {
      text: i18n.t("textJ_8"),
      expression: { f: "f141", i: "iase" },
    },
  ],
  パスワードを見つける: [
    {
      text: i18n.t("textArm_1"),
      expression: c操作開始_腕を外す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fRemoveArms")(false);
      },
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: i18n.t("textK_1"),
      expression: { f: "f351", i: "itameiki" },
    },
    {
      text: i18n.t("textK_2"),
      expression: { f: "f315", i: "none" },
    },
    {
      text: i18n.t("textK_3"),
      expression: { f: "f194", i: "none" },
    },
    {
      text: i18n.t("textK_4"),
      expression: { f: "f141", i: "none" },
    },
    {
      text: i18n.t("textK_5"),
      expression: { f: "f152", i: "ihatena" },
    },
    {
      text: i18n.t("textK_6"),
      expression: { f: "f151s", i: "iase" },
    },
    {
      text: i18n.t("textK_7"),
      expression: { f: "f145s", i: "iase" },
    },
    {
      text: i18n.t("textK_8"),
      expression: { f: "f151s", i: "none" },
    },
    {
      text: i18n.t("textK_9"),
      expression: c腕を戻す,
    },
  ],

  腕を外す: [
    {
      text: i18n.t("textArm_1"),
      expression: c操作開始_腕を外す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fRemoveArms")(false);
      },
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
      text: i18n.t("textArm_3"),
      expression: c腕を戻す,
    },
  ],

  脚を外す: [
    {
      text: i18n.t("textLeg_1"),
      expression: c操作開始_脚を外す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fRemoveLegs")(false);
      },
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

  記憶を思い出した: [
    {
      text: i18n.t("textL_1"),
      expression: {
        f: "f175",
        i: "isurprised",
        lh: "lh1",
        rh: "rh1",
        lf: "lf1",
        rf: "rf1",
      },
    },
    {
      text: i18n.t("textL_2"),
      expression: { f: "f171", i: "none" },
    },
    {
      text: i18n.t("textL_3"),
      expression: { f: "f111", i: "none" },
    },
    {
      text: i18n.t("textL_4"),
      expression: { f: "f112", i: "none" },
    },
    {
      text: i18n.t("textL_5"),
      expression: { f: "f141", i: "none" },
    },
    {
      text: i18n.t("textL_6"),
      expression: { f: "f381", i: "itameiki" },
    },
    {
      text: i18n.t("textL_7"),
      expression: { f: "f381", i: "itameiki" },
    },
    {
      text: i18n.t("textL_8"),
      expression: { f: "f343", i: "none" },
    },
    {
      text: i18n.t("textL_9"),
      expression: { f: "f315", i: "imoyamoya" },
    },
    {
      text: i18n.t("textL_10"),
      expression: { f: "f383", i: "itameiki" },
    },
    { text: i18n.t("textL_11"), expression: { f: "f175", i: "none" } },
    {
      text: i18n.t("textL_12"),
      expression: { f: "f381", i: "none" },
    },
    { text: i18n.t("textL_13"), expression: { f: "f381", i: "none" } },
    {
      text: i18n.t("textL_14"),
      expression: { f: "f315", i: "none" },
      flagAction: (flags) => {
        getFlagSetterByName(flags, "isEnableDelete")(true);
      },
    },
  ],

  ルール削除: [
    {
      text: i18n.t("textM_0"),
      expression: c操作開始,

      flagAction: (flags) => {
        getFlagSetterByName(flags, "fDeleteRule")(false);
      },
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: "",
      expression: { f: "f114", i: "none" },
      choices: [{ text: i18n.t("choiceM_1"), nextDialogue: "ルール削除_2" }],
    },
  ],
  ルール削除_2: [
    {
      text: i18n.t("textM_1"),
      expression: { f: "f115", i: "igreet" },
    },

    {
      text: "",
      expression: { f: "f115", i: "none" },
      choices: [{ text: i18n.t("choiceM_2"), nextDialogue: "ルール削除_3" }],
    },
  ],
  ルール削除_3: [
    {
      text: i18n.t("textM_2"),
      expression: { f: "f191", i: "ihatena" },
    },

    {
      text: "",
      expression: { f: "f191", i: "none" },
      choices: [
        { text: i18n.t("choiceM_3"), nextDialogue: "ルール削除_4" },
        { text: i18n.t("choiceM_4"), nextDialogue: "ルール削除_4" },
      ],
    },
  ],
  ルール削除_4: [
    {
      text: i18n.t("textM_3"),
      expression: { f: "f111", i: "none" },
    },
    {
      text: i18n.t("textM_4"),
      expression: { f: "f141", i: "none" },
    },
    {
      text: i18n.t("textM_5"),
      expression: { f: "f171", i: "iheart",
  lh: "lh1",
  rh: "rh1",
  lf: "lf1",
  rf: "rf1", },
    },
    {
      text: "",
      expression: { f: "f171", i: "none" },
      choices: [{ text: i18n.t("choiceM_5"), nextDialogue: "ルール削除_5" }],
    },
  ],
  ルール削除_5: [
    {
      text: i18n.t("textM_6"),
      expression: { f: "f132", i: "igreet" },
    },
    {
      text: i18n.t("textM_7"),
      expression: { f: "f111", i: "iwaiwai" },
    },

    {
      text: "",
      expression: c普通の顔,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "blackOut")(true);
      },
    },
  ],
  エンディングA: [
    {
      text: i18n.t("endingA_1"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_2"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_3"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_4"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_5"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_6"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_7"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_8"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingA_9"),
      expression: cすべてのパーツを通常状態に戻す,
    },

    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "blackOut")(true);
        getFlagSetterByName(flags, "showTitle")(true);
      },
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
    },
  ],

  命令削除: [
    {
      text: i18n.t("textN_0"),
      expression: c操作開始,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fDeleteCommand")(false);
      },
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: "",
      expression: { f: "f114", i: "none" },
      choices: [{ text: i18n.t("choiceN_1"), nextDialogue: "命令削除_2" }],
    },
  ],
  命令削除_2: [
    {
      text: i18n.t("textN_1"),
      expression: { f: "f115", i: "igreet" },
    },
    {
      text: "",
      expression: { f: "f115", i: "none" },
      choices: [{ text: i18n.t("choiceN_2"), nextDialogue: "命令削除_3" }],
    },
  ],
  命令削除_3: [
    {
      text: i18n.t("textN_2"),
      expression: { f: "f191", i: "ihatena" },
    },
    {
      text: "",
      expression: { f: "f191", i: "none" },
      choices: [
        { text: i18n.t("choiceN_3"), nextDialogue: "命令削除_4" },
        { text: i18n.t("choiceN_4"), nextDialogue: "命令削除_4" },
      ],
    },
  ],
  命令削除_4: [
    {
      text: i18n.t("textN_4"),
      expression: { f: "f111", i: "none" },
    },
    {
      text: i18n.t("textN_5"),
      expression: { f: "f131", i: "igreet" },
    },
  ],

  バッテリー交換中: [
    {
      text: i18n.t("textN_wait"),
      expression: { f: "f142", i: "none" },
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fRemoveBattery")(false);
        getFlagSetterByName(flags, "blackOut")(true);
      },
    },
  ],

  バッテリー交換後: [
    {
      text: i18n.t("textN_wait"),
      expression: cバッテリー交換,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "finishReplaceBattery")(false);
        getFlagSetterByName(flags, "isEnableRemoveBattery")(false);
        getFlagSetterByName(flags, "isEndingB")(true);
      },
    },
    {
      text: i18n.t("textN_6"),
      expression: { f: "f175", i: "none",
  lf: "lf1",
  rf: "rf1", },
    },
    {
      text: "",
      expression: { f: "f114", i: "none" },
      choices: [
        { text: i18n.t("choiceN_6"), nextDialogue: "バッテリー交換後_2" },
      ],
    },
  ],
  バッテリー交換後_2: [
    {
      text: i18n.t("textN_7"),
      expression: { f: "f141", i: "itameiki" },
    },
    {
      text: "",
      expression: { f: "f112", i: "none" },
      choices: [
        { text: i18n.t("choiceN_7"), nextDialogue: "バッテリー交換後_3" },
      ],
    },
  ],
  バッテリー交換後_3: [
    {
      text: i18n.t("textN_8"),
      expression: { f: "f132", i: "igreet" },
    },
    {
      text: i18n.t("textN_9"),
      expression: { f: "f111", i: "iwaiwai" },
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "blackOut")(true);
      },
    },
  ],
  エンディングB: [
    {
      text: i18n.t("endingB_1"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_2"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_3"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_4"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_5"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_6"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_7"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_8"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_9"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("endingB_10"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "blackOut")(true);
        getFlagSetterByName(flags, "showTitle")(true);
      },
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
    },
  ],

  全削除: [
    {
      text: i18n.t("textO_1"),
      expression: c操作開始,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "fDeleteAll")(false);
      },
    },
    {
      text: i18n.t("textO_2"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: i18n.t("textO_3"),
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
      choices: [
        { text: i18n.t("choiceO_1"), nextDialogue: "エンディングC" },
        { text: i18n.t("choiceO_2"), nextDialogue: "キャンセル" },
      ],
    },
  ],
  キャンセル: [
    {
      text: "",
      expression: c操作終了,
    },
  ],
  エンディングC: [
    {
      text: i18n.t("textP_1"),
      expression: c操作中,

      flagAction: (flags) => {
        getFlagSetterByName(flags, "isEndingC")(true);
      },
    },
    {
      text: i18n.t("textP_2"),
      expression: c操作中,
    },
    {
      text: i18n.t("textP_3"),
      expression: c操作中,
    },
    {
      text: i18n.t("textP_4"),
      expression: c操作中,
    },
    {
      text: "",
      expression: c操作終了,
    },
    {
      text: i18n.t("textP_5"),
      expression: c普通の顔,
    },

    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
      flagAction: (flags) => {
        getFlagSetterByName(flags, "blackOut")(true);
        getFlagSetterByName(flags, "showTitle")(true);
      },
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
    },
    {
      text: "",
      expression: cすべてのパーツを通常状態に戻す,
    },
  ],
};

/*
参考にしてね


          textO_1: "注意！危険な操作が選択されました。",
          textO_2: "この操作は、当機の全てのパラメータを工場出荷状態に戻します。\n失われたデータは復元できません。",
          textO_3: "実行してもよろしいですか？",
          choiceO_1: "実行",
          choiceO_2: "キャンセル",
          
          textP_1: "20%完了……",
          textP_2: "66%完了……",
          textP_3: "92%完了……",
          textP_4: "99%完了………………",

          textP_5: "はじめまして！私は子守ロボット、loc-o-4902です。\nまずは私の名前を設定してください！",


*/
