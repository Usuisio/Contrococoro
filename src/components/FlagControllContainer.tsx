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

    LOAD: () => void;
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
    memory1: string;
    memory2: string;
    memory3: string;
    BATTERY: string;
    ARMS: string;
    LEGS: string;
    RULE: string;
    COMMAND: string;
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
window.memory1 = "memory1";
window.memory2 = "memory2";
window.memory3 = "memory3";
window.BATTERY = "battery";
window.ARMS = "arms";
window.LEGS = "legs";
window.RULE = "rule";
window.COMMAND = "command";
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
  const [fCheckMemoryRejected, setFCheckMemoryRejected] = useState(false);
  const [isLookingForPassword, setIsLookingForPassword] = useState(false);
  const [fCheckMemory, setFCheckMemory] = useState(false);
  const [isEnableDelete, setIsEnableDelete] = useState(false);
  const [fDeleteRule, setFDeleteRule] = useState(false);
  const [fDeleteCommand, setFDeleteCommand] = useState(false);
  const [isEnableRemoveBattery, setIsEnableRemoveBattery] = useState(false);
  const [fRemoveBattery, setFRemoveBattery] = useState(false);

  const [NeedToForceChange, setForceChange] = useState(false);

  const flags: flagKeyValueDic = [
    {
      name: "isFirstTalkEnd",
      flag: { value: isFirstTalkEnd, setter: setIsFirstTalkEnd },
    },
    { name: "fCheck", flag: { value: fCheck, setter: setFCheck } },
    { name: "isCheckEnd", flag: { value: isCheckEnd, setter: setIsCheckEnd } },
    { name: "fOpenHatch", flag: { value: fOpenHatch, setter: setFOpenHatch } },
    { name: "fCloseHatch", flag: { value: fCloseHatch, setter: setFCloseHatch } },
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
      name: "fRemoveBattery",
      flag: { value: fRemoveBattery, setter: setFRemoveBattery },
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
    
    //ここから上使用中

    {
      name: "fCheckMemoryRejected",
      flag: { value: fCheckMemoryRejected, setter: setFCheckMemoryRejected },
    },
    {
      name: "fCheckMemory",
      flag: { value: fCheckMemory, setter: setFCheckMemory },
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
      name: "isEnableDelete",
      flag: { value: isEnableDelete, setter: setIsEnableDelete },
    },
  ];

  const getFlags = (key: string) => {
    const found =  getFlagByName(flags, key);
    if(found){
      return found.value;
    }
  }

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


//これはデバッグ用
window.F = () => {
  console.log(flags);
}

  useEffect(() => {
    window.CHECK = () => {
      CHECKCore();
    };
    const CHECKCore = () => {
      SetFlags("fCheck");
      SetFlags("NeedToForceChange");
    };

    window.OPENHATCH = () => {
      OPENHATCHCore();
    };
    const OPENHATCHCore = () => {
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
      // targetを文字列に変換し、大文字化
      let targetStr = String(target).toUpperCase();

      if (getFlags("isCheckEnd")) {
        if (targetStr === "BATTERY") {
          if (getFlags("isOpenHatch")) {
            if (getFlags("isEnableRemoveBattery")) {
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

    window.DELETE = (target: any) => {
      DELETECore(target);
    };

    const DELETECore = (target: any) => {
      // targetを文字列に変換し、大文字化
      let targetStr = String(target).toUpperCase();

      if (getFlags("isEnableDelete")) {
        if (targetStr === "RULE") {
          console.log("rule deleted");
          SetFlags("fDeleteRule");
        } else if (target === "command") {
          SetFlags("fDeleteCommand");
        }
      } else {
        console.log(t("consoleDeleteError"));
      }
    };
  }, [flags]);

  return (
    <>
      <FadeInLayer flags={flags} />
    </>
  );
};
