import en from "./en.json";
import sk from "./sk.json";
import {MessageFormatElement} from "react-intl";
import {Language} from "../Language";

const messages: Partial<Record<Language, Record<string, MessageFormatElement[]>>> = {
    "en-US": en,
    "sk-SK": sk,
};

export default messages;
