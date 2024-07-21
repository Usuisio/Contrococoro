import React, { useEffect, useState } from "react";
import { DialogueFrame } from "./DialogueFrame";
import { t } from "i18next";

declare global {
  interface Window {
    connect: () => void;
    disconnect: () => void;
      openHatch: () => void;
    reset: () => void;

    CHECK: () => void;
    OPENHATCH: () => void;
    REMOVE: () => void;
    REMOVEBATTERY: () => void;
    REMOVEARMS : () => void;
    REMOVELEGS : () => void;

    LOAD : () => void;
    LOADMEMORY : () => void;
    DELETE: (target: string) => void;

    // グローバル変数の宣言（DELETE(rule)のような表記を許すため）
    rule: string;
    command: string;
  }
}
window.rule = "rule";
window.command = "command";

export type flag = {
  value: boolean;
  setter: (value: boolean) => void;
};
export type flagKeyValue = {
  name: string;
  flag: flag;
};
export type flagKeyValueDic = flagKeyValue[];

export const getFlagByName = (
  flags: flagKeyValueDic,
  name: string
): flag | undefined => {
  const found = flags.find((item) => item.name === name);
  return found?.flag;
};

export const FlagControllContainer = () => {
  const [fCheck, setFCheck] = useState(false);
  const [fOpenHatch, setFOpenHatch] = useState(false);
  const [isOpenHatch, setIsOpenHatch] = useState(false);
  const [fRemoveBatteryRejected, setFRemoveBatteryRejected] = useState(false);
  const [fCheckMemoryRejected, setFCheckMemoryRejected] = useState(false);
  const [fCheckMemory, setFCheckMemory] = useState(false);
  const [isEnableDelete, setIsEnableDelete] = useState(false);
  const [fDeleteRule, setFDeleteRule] = useState(false);
  const [fDeleteCommand, setFDeleteCommand] = useState(false);
  const [fRemoveBattery, setFRemoveBattery] = useState(false);

  const flags: flagKeyValueDic = [
    { name: "fCheck", flag: { value: fCheck, setter: setFCheck } },
    { name: "fOpenHatch", flag: { value: fOpenHatch, setter: setFOpenHatch } },
    {
      name: "fRemoveRejected",
      flag: {
        value: fRemoveBatteryRejected,
        setter: setFRemoveBatteryRejected,
      },
    },
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
      name: "fRemoveBattery",
      flag: { value: fRemoveBattery, setter: setFRemoveBattery },
    },
    {
      name: "isOpenHatch",
      flag: { value: isOpenHatch, setter: setIsOpenHatch },
    },
    {
      name: "isEnableDelete",
      flag: { value: isEnableDelete, setter: setIsEnableDelete },
    },
  ];

  const SetFlags = (key: string) => {
    const found = getFlagByName(flags, key);
    if (found) {
      found.setter(true);
      console.log(`${key} has been activated!`);
    }
  };

  useEffect(() => {
    window.CHECK = () => {
      SetFlags("fCheck");
      SetFlags("isEnableDelete");
    };

    window.DELETE = (target: any) => {
        // targetを文字列に変換し、大文字化
        let targetStr = String(target).toUpperCase();

      if (getFlagByName(flags, "isEnableDelete")?.value) {

        if (targetStr === "RULE") {
            console.log("rule deleted");
          SetFlags("fDeleteRule");
        } else if (target === "command") {
          SetFlags("fDeleteCommand");
        }
      } else {
        console.log(
          t("consoleDeleteError")
        );
      }
    };
  }, [flags]);

  return (
    <>
      <DialogueFrame flags={flags} />
    </>
  );
};
