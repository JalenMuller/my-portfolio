import { lang } from "../data/lang";

export default function LangString(props: { stringName: string }) {
  const name: string = props.stringName;
  const langCode: string | null = localStorage.getItem("lang");
  const returnString = lang[langCode ?? "en"][name];
  if (!returnString) {
    console.log(`string ${name} was not found for language ${langCode}`);
    return "";
  }
  return returnString;
}
