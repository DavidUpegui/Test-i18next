import React, { ReactNode, useContext } from "react";
import { TranslateContext } from "./TranslateContext";
import { UseTranslationResponse, useTranslation } from "react-i18next";
import { TFunction } from "i18next";

type Props = {
  children: ReactNode;
};

function TranslationProvider({ children }: Props) {

  const getTranslation = (namespace:string):TFunction<string, undefined> => useTranslation(namespace).t
  const {t:indexT} = useTranslation('index') as {t:TFunction<string, undefined>}
  const {t:aboutT} = useTranslation('about') as {t:TFunction<string, undefined>}
  const {t:layoutT} = useTranslation('layout') as {t:TFunction<string, undefined>}
  const {t:commonT} = useTranslation('common') as {t:TFunction<string, undefined>}

  const translations:TFunction<string, undefined>[] = [indexT, aboutT, layoutT, commonT ]
  return (
    <TranslateContext.Provider value={translations}>
      {children}
    </TranslateContext.Provider>
  );
}

export default TranslationProvider;
