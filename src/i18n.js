import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  no: {
    translation: {
      "Nettradio": "24/7 Nettradio",
      "Program": "PROGRAM - INTERVJU",
      "Gjest": "Gjest i studio",
      "Dato": "Dato",
      "Klokkeslett": "Klokkeslett",
      "Support": "Støtt Radio Rilindja" ,
      "Fredag":"LIVE HVER FREDAG",
      "Home":"HJEM",
      "Program":"PROGRAM",
      "FredagNy":"Live hver fredag fra kl. 20.00 - 23.00 (CET)",
      "Button":"Vis mer",
      "ProgramNy":"Kommende intervjuer",
      "ProgramI":"Her blir det vist artikler angående fremtidige intervjuer med gitt dato.",
    }
  },
  sq: {
    translation: {
      "Nettradio": "24/7 Internet Radio",
      "Program": "PROGRAMI - INTERVISTA",
      "Gjest": "Mysafir në studio",
      "Dato": "Data",
      "Klokkeslett": "Koha", 
      "Support": "Ndihmo Radio Rilindjen",
      "Fredag":"LIVE CDO TE PREMTE",
      "Home":"BALLINA",
      "Program":"PROGRAMET",
      "FredagNy": "Live cdo te premte nga ora 20.00 - 23.00 (CET)",
      "Button": "Shiko më shumë",
      "ProgramNy":"Intervistat e radhës",
      "ProgramI":"test",
    }
  },
  
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "sq", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;