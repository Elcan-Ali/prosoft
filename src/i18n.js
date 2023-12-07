import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from './locale/az.json'
import en from './locale/en.json'
import ru from './locale/ru.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            az,
            en,
            ru
        },
        lng: "en"
    });

