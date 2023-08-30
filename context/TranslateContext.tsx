import { createContext, useContext } from "react"
import { useTranslation } from 'next-i18next';
import { TFunction } from "i18next";

const context:TFunction<string, undefined>[] = []
export const TranslateContext = createContext(context)
