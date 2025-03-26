import enDayjsTranslations from "dayjs/locale/en";
import plDayjsTranslations from "dayjs/locale/pl";
import deDayjsTranslations from "dayjs/locale/de";
import ltDayjsTranslations from "dayjs/locale/lt";
import arDayjsTranslations from "dayjs/locale/ar";  // Arabic locale
import hiDayjsTranslations from "dayjs/locale/hi";  // Hindi locale
import frDayjsTranslations from "dayjs/locale/fr";  // French locale
import { en, pl, de, lt ,ar , fr , hi } from "@/locales";
import { LocaleType } from "./types";

export const localesData: LocaleType[] = [
  {
    id: "en",
    lang: en,
    translateCode: "en-GB",
    dayjsTranslations: enDayjsTranslations
  },
  {
    id: "pl",
    lang: pl,
    translateCode: "pl-PL",
    dayjsTranslations: plDayjsTranslations
  },
  {
    id: "lt",
    lang: lt,
    translateCode: "lt-LT",
    dayjsTranslations: ltDayjsTranslations
  },
  {
    id: "de",
    lang: de,
    translateCode: "de-DE",
    dayjsTranslations: deDayjsTranslations
  },
  {
    id: "ar",
    lang: ar,  // Add Arabic translations
    translateCode: "ar",
    dayjsTranslations: arDayjsTranslations
  },
  {
    id: "hi",
    lang: hi,  // Add Hindi translations
    translateCode: "hi",
    dayjsTranslations: hiDayjsTranslations
  },
  {
    id: "fr",
    lang: fr,  // Add French translations
    translateCode: "fr",
    dayjsTranslations: frDayjsTranslations
  }
];

class Locales {
  public locales: LocaleType[] = localesData;

  getLocales() {
    return this.locales;
  }

  addLocales(locale: LocaleType) {
    this.locales.push(locale);
  }
}

const locales = new Locales();

export { locales };
