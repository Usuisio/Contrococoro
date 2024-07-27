import React, { useEffect, useState } from "react";
import { DialogueFrame } from "./DialogueFrame";
import { t } from "i18next";
import { DocumentAccordionLayer } from "./DocumentAccordionLayer";
import { FadeInLayer } from "./FadeInLayer";

declare global {
  interface Window {
    connect: () => void;
    disconnect: () => void;
    openHatch: () => void;
    reset: () => void;

    CHECK: () => void;
    OPENHATCH: () => void;
    CLOSEHATCH: () => void;
    REMOVE: (target: string) => void;
    REMOVEBATTERY: () => void;
    REMOVEARMS: () => void;
    REMOVELEGS: () => void;

    LOAD: (target: string) => void;
    LOADMEMORY: () => void;
    DELETE: (target: string) => void;

    //これはデバッグ用
    F: () => void;

    // グローバル変数の宣言（DELETE(rule)のような表記を許すため）
    battery: string;
    arms: string;
    legs: string;
    rule: string;
    command: string;
    all: string;
    memory1: string;
    memory2: string;
    memory3: string;
    BATTERY: string;
    ARMS: string;
    LEGS: string;
    RULE: string;
    COMMAND: string;
    ALL: string;
    MEMORY1: string;
    MEMORY2: string;
    MEMORY3: string;
  }
}

window.battery = "battery";
window.arms = "arms";
window.legs = "legs";
window.rule = "rule";
window.command = "command";
window.all = "all";
window.memory1 = "memory1";
window.memory2 = "memory2";
window.memory3 = "memory3";
window.BATTERY = "battery";
window.ARMS = "arms";
window.LEGS = "legs";
window.RULE = "rule";
window.COMMAND = "command";
window.ALL = "all";
window.MEMORY1 = "memory1";
window.MEMORY2 = "memory2";
window.MEMORY3 = "memory3";

export type flag = {
  value: boolean;
  setter: (value: boolean) => void;
};
export type flagKeyValue = {
  name: string;
  flag: flag;
};
export type flagKeyValueDic = flagKeyValue[];

export type FlagNames = flagKeyValue["name"];

export const getFlagValueByName = (
  flags: flagKeyValueDic,
  name: FlagNames
): boolean => {
  const foundFlag = flags.find((flag) => flag.name === name);
  return foundFlag?.flag.value ?? false;
};
export const getFlagSetterByName = (
  flags: flagKeyValueDic,
  name: FlagNames
) => {
  const foundFlag = flags.find((flag) => flag.name === name);
  return foundFlag?.flag.setter ?? (() => {});
};

export const getFlagByName = (
  flags: flagKeyValueDic,
  name: string
): flag | undefined => {
  const found = flags.find((item) => item.name === name);
  return found?.flag;
};

export const FlagControllContainer = () => {
  //fがついているものが操作の即時実行、isがついているものが状態
  const [isFirstTalkEnd, setIsFirstTalkEnd] = useState(false);
  const [fCheck, setFCheck] = useState(false);
  const [isCheckEnd, setIsCheckEnd] = useState(false);
  const [fOpenHatch, setFOpenHatch] = useState(false);
  const [fCloseHatch, setFCloseHatch] = useState(false);
  const [isOpenHatch, setIsOpenHatch] = useState(false);
  const [fRemoveBatteryRejected, setFRemoveBatteryRejected] = useState(false);
  const [isAbleLoadMemory, setIsAbleLoadMemory] = useState(false);
  const [fRemoveArms, setFRemoveArms] = useState(false);
  const [fRemoveLegs, setFRemoveLegs] = useState(false);
  const [fLoadMemory1, setFLoadMemory1] = useState(false);
  const [fLoadMemory2, setFLoadMemory2] = useState(false);
  const [fLoadMemory3, setFLoadMemory3] = useState(false);
  const [isLookingForPassword, setIsLookingForPassword] = useState(false);
  const [isRemindMemory, setIsRemindMemory] = useState(false);
  const [isEnableDelete, setIsEnableDelete] = useState(false);
  const [fDeleteRule, setFDeleteRule] = useState(false);
  const [fDeleteCommand, setFDeleteCommand] = useState(false);
  const [fDeleteAll, setFDeleteAll] = useState(false);
  const [isEnableRemoveBattery, setIsEnableRemoveBattery] = useState(false);
  const [fRemoveBattery, setFRemoveBattery] = useState(false);
  const [finishReplaceBattery, setFinishReplaceBattery] = useState(false);

  const [isEndingA, setIsEndingA] = useState(false);
  const [isEndingB, setIsEndingB] = useState(false);
  const [isEndingC, setIsEndingC] = useState(false);

  const [NeedToForceChange, setForceChange] = useState(false);

  const [blackOut, setBlackOut] = useState(false);

  const [showTitle, setShowTitle] = useState(false);
  const [showPhotoA, setShowPhotoA] = useState(false);
  const [showPhotoB, setShowPhotoB] = useState(false);

  const flags: flagKeyValueDic = [
    {
      name: "isFirstTalkEnd",
      flag: { value: isFirstTalkEnd, setter: setIsFirstTalkEnd },
    },
    { name: "fCheck", flag: { value: fCheck, setter: setFCheck } },
    { name: "isCheckEnd", flag: { value: isCheckEnd, setter: setIsCheckEnd } },
    { name: "fOpenHatch", flag: { value: fOpenHatch, setter: setFOpenHatch } },
    {
      name: "fCloseHatch",
      flag: { value: fCloseHatch, setter: setFCloseHatch },
    },
    {
      name: "isOpenHatch",
      flag: { value: isOpenHatch, setter: setIsOpenHatch },
    },

    {
      name: "isEnableRemoveBattery",
      flag: { value: isEnableRemoveBattery, setter: setIsEnableRemoveBattery },
    },

    {
      name: "fRemoveBatteryRejected",
      flag: {
        value: fRemoveBatteryRejected,
        setter: setFRemoveBatteryRejected,
      },
    },
    {
      name: "isAbleLoadMemory",
      flag: { value: isAbleLoadMemory, setter: setIsAbleLoadMemory },
    },
    {
      name: "NeedToForceChange",
      flag: { value: NeedToForceChange, setter: setForceChange },
    },
    {
      name: "fRemoveArms",
      flag: { value: fRemoveArms, setter: setFRemoveArms },
    },

    {
      name: "fRemoveLegs",
      flag: { value: fRemoveLegs, setter: setFRemoveLegs },
    },
    {
      name: "isLookingForPassword",
      flag: { value: isLookingForPassword, setter: setIsLookingForPassword },
    },
    {
      name: "fLoadMemory1",
      flag: { value: fLoadMemory1, setter: setFLoadMemory1 },
    },
    {
      name: "fLoadMemory2",
      flag: { value: fLoadMemory2, setter: setFLoadMemory2 },
    },
    {
      name: "fLoadMemory3",
      flag: { value: fLoadMemory3, setter: setFLoadMemory3 },
    },

    {
      name: "isRemindMemory",
      flag: { value: isRemindMemory, setter: setIsRemindMemory },
    },
    {
      name: "isEnableDelete",
      flag: { value: isEnableDelete, setter: setIsEnableDelete },
    },
    {
      name: "fDeleteRule",
      flag: { value: fDeleteRule, setter: setFDeleteRule },
    },
    {
      name: "fDeleteCommand",
      flag: { value: fDeleteCommand, setter: setFDeleteCommand },
    },

    {
      name: "fRemoveBattery",
      flag: { value: fRemoveBattery, setter: setFRemoveBattery },
    },
    {
      name: "finishReplaceBattery",
      flag: { value: finishReplaceBattery, setter: setFinishReplaceBattery },
    },
    {
      name: "fDeleteAll",
      flag: { value: fDeleteAll, setter: setFDeleteAll },
    },
    {
      name: "isEndingA",
      flag: { value: isEndingA, setter: setIsEndingA },
    },
    {
      name: "isEndingB",
      flag: { value: isEndingB, setter: setIsEndingB },
    },

    {
      name: "isEndingC",
      flag: { value: isEndingC, setter: setIsEndingC },
    },
    {
      name: "blackOut",
      flag: { value: blackOut, setter: setBlackOut },
    },
    {
      name: "showTitle",
      flag: { value: showTitle, setter: setShowTitle },
    },
    {
      name: "showPhotoA",
      flag: { value: showPhotoA, setter: setShowPhotoA },
    },
    {
      name: "showPhotoB",
      flag: { value: showPhotoB, setter: setShowPhotoB },
    },
  ];

  const getFlags = (key: string) => {
    const found = getFlagByName(flags, key);
    if (found) {
      return found.value;
    }
  };

  const SetFlags = (key: string) => {
    const found = getFlagByName(flags, key);
    if (found) {
      found.setter(true);
    }
  };
  const SetFlagsFalse = (key: string) => {
    const found = getFlagByName(flags, key);
    if (found) {
      found.setter(false);
    }
  };

  //エンディングBで、バッテリー交換前に使用禁止になるコマンドはこっち
  const isEnding_BeforeBatteryReplacement = () => {
    if (getFlags("isEndingA") || getFlags("isEndingB") || getFlags("isEnableRemoveBattery")) {
      console.log(t("cannotDisturbError"));
      return true;
    }
    if (getFlags("isEndingC")) {
      console.log(t("cannotFindRobotError"));
      return true;
    }
    return false;
  };

  //エンディングBで、バッテリー交換後に使用禁止になるコマンドはこっち
  const isEnding_AfterBatteryReplacement = () => {
    if (getFlags("isEndingA") || getFlags("isEndingB")) {
      console.log(t("cannotDisturbError"));
      return true;
    }
    if (getFlags("isEndingC")) {
      console.log(t("cannotFindRobotError"));
      return true;
    }
    return false;
  };

  //これはデバッグ用
  window.F = () => {
    console.log(flags);
    // SetFlags("blackOut");
  };

  useEffect(() => {
    window.CHECK = () => {
      CHECKCore();
    };
    const CHECKCore = () => {
      if (isEnding_BeforeBatteryReplacement()) {
        return;
      }
      SetFlags("fCheck");
      SetFlags("NeedToForceChange");
    };

    window.OPENHATCH = () => {
      OPENHATCHCore();
    };
    const OPENHATCHCore = () => {
      if (isEnding_AfterBatteryReplacement()) {
        return;
      }

      if (getFlags("isCheckEnd")) {
        if (getFlags("isOpenHatch")) {
          console.log(t("hatchAlreadyOpenedError"));
        } else {
          SetFlags("fOpenHatch");
          SetFlags("isOpenHatch");
          SetFlags("NeedToForceChange");
        }
      } else {
        console.log(t("cannotCommandError"));
      }
    };

    window.CLOSEHATCH = () => {
      CLOSEHATCHCore();
    };
    const CLOSEHATCHCore = () => {
      if (isEnding_BeforeBatteryReplacement()) {
        return;
      }
      if (getFlags("isCheckEnd")) {
        if (getFlags("isOpenHatch")) {
          SetFlags("fCloseHatch");
          SetFlagsFalse("isOpenHatch");
          SetFlags("NeedToForceChange");
        } else {
          console.log(t("hatchAlreadyClosedError"));
        }
      } else {
        console.log(t("cannotCommandError"));
      }
    };
    window.REMOVE = (target: any) => {
      REMOVECore(target);
    };
    const REMOVECore = (target: any) => {
      if (isEnding_AfterBatteryReplacement()) {
        return;
      }
      // targetを文字列に変換し、大文字化
      let targetStr = String(target).toUpperCase();

      if (getFlags("isCheckEnd")) {
        if (targetStr === "BATTERY") {
          if (getFlags("isOpenHatch")) {
            if (getFlags("isEnableRemoveBattery")) {
              SetFlags("isEnableRemoveBattery");
              SetFlags("fRemoveBattery");
              SetFlags("NeedToForceChange");
            } else {
              SetFlags("fRemoveBatteryRejected");
              SetFlags("NeedToForceChange");
            }
          } else {
            console.log(t("hatchClosedError"));
          }
        } else if (targetStr === "ARMS") {
          SetFlags("fRemoveArms");
          SetFlags("NeedToForceChange");
        } else if (targetStr === "LEGS") {
          SetFlags("fRemoveLegs");
          SetFlags("NeedToForceChange");
        } else {
          console.log(t("invalidArgsError"));
        }
      } else {
        console.log(t("cannotCommandError"));
      }
    };

    window.LOAD = (target: any) => {
      LOADCore(target);
    };
    const LOADCore = (target: any) => {
      if (isEnding_BeforeBatteryReplacement()) {
        return;
      }
      // targetを文字列に変換し、大文字化
      let targetStr = String(target).toUpperCase();

      if (getFlags("isAbleLoadMemory")) {
        if (targetStr === "MEMORY1") {
          SetFlags("fLoadMemory1");
          SetFlags("NeedToForceChange");
        } else if (targetStr === "MEMORY2") {
          SetFlags("fLoadMemory2");
          SetFlags("NeedToForceChange");
        } else if (targetStr === "MEMORY3") {
          SetFlags("isLookingForPassword");
          requestPasswordForMemory3();
        } else {
          console.log(t("invalidArgsError"));
        }
      } else {
        console.log(t("cannotCommandError"));
      }
    };

    const requestPasswordForMemory3 = () => {
      console.log(t("enterPassword"));
      const password = prompt(t("pleaseEnterPassword"));
      validatePasswordForMemory3(password);
    };
    const validatePasswordForMemory3 = (password: string | number | null) => {
      const correctPassword = "4902";

      if (String(password) === correctPassword) {
        console.log(t("passwordCorrect"));
        SetFlags("fLoadMemory3");
        SetFlags("NeedToForceChange");
      } else {
        console.log(t("passwordIncorrect"));
      }
    };

    window.DELETE = (target: any) => {
      DELETECore(target);
    };

    const DELETECore = (target: any) => {
      if (isEnding_BeforeBatteryReplacement()) {
        return;
      }
      // targetを文字列に変換し、大文字化
      let targetStr = String(target).toUpperCase();

      if (getFlags("isEnableDelete")) {
        if (targetStr === "RULE") {
          SetFlags("fDeleteRule");
          SetFlags("isEndingA");
          SetFlags("NeedToForceChange");
        } else if (targetStr === "COMMAND") {
          SetFlags("fDeleteCommand");
          SetFlags("isEnableRemoveBattery");
          SetFlags("NeedToForceChange");
          
        } else if (targetStr === "ALL") {
          SetFlags("fDeleteAll");
          SetFlags("NeedToForceChange");
        }
      } else {
        console.log(t("cannotDeleteError"));
      }
    };
  }, [flags]);

  return (
    <>
      <FadeInLayer flags={flags} />
    </>
  );
};
