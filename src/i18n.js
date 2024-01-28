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
      "Support": "STØTT RADIO RILINDJA" ,
      "Fredag":"LIVE HVER FREDAG",
      "Home":"HJEM",
      "Program":"PROGRAM",
    }
  },
  sq: {
    translation: {
      "Nettradio": "24/7 Internet Radio",
      "Program": "PROGRAMI - INTERVISTA",
      "Gjest": "Mysafir në studio",
      "Dato": "Data",
      "Klokkeslett": "Koha", 
      "Support": "NDIHMO RADIO RILINDJEN",
      "Fredag":"LIVE CDO TE PREMTE",
      "Home":"BALLINA",
      "Program":"PROGRAMET",
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