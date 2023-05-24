import { lang } from "../data/lang";

export default function LangString(props: { stringName: string }) {
  const name: string = props.stringName;
  const langCode: string | null = localStorage.getItem("lang");
  const returnString = lang[langCode ?? "en"][name];
  if (!returnString) {
    console.warn(`string ${name} was not found for language ${langCode}`);
    return null;
  }

  return <span dangerouslySetInnerHTML={{ __html: returnString }} />;
}
