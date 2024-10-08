import { Poppins, Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import {
  ChangeEvent,
  HTMLInputAutoCompleteAttribute,
  useEffect,
  useRef,
  useState,
} from "react";

export interface InputController {
  value: string;
  hasError: boolean;
}

interface InputProps {
  placeholder: string;
  type:
    | "text"
    | "email"
    | "number"
    | "cellphone"
    | "cpf"
    | "cep"
    | "card number"
    | "card validate";
  controller: InputController;
  autocomplete?: HTMLInputAutoCompleteAttribute;
  onChange?: (value: string) => void;
}

const zillaSlab = Zilla_Slab({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

function cellphoneMask(number: string): string {
  number = number.replace(/\D/g, "");

  if (number.length <= 0) {
    return "";
  } else if (number.length <= 2) {
    return `(${number}`;
  } else if (number.length <= 7) {
    return `(${number.slice(0, 2)}) ${number.slice(2)}`;
  }

  return `(${number.slice(0, 2)}) ${number.slice(2, 3)} ${number.slice(
    3,
    7
  )}-${number.slice(7, 11)}`;
}

function cpfMask(number: string): string {
  number = number.replace(/\D/g, "");

  if (number.length <= 3) {
    return number;
  } else if (number.length <= 6) {
    return `${number.slice(0, 3)}.${number.slice(3)}`;
  } else if (number.length <= 9) {
    return `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(6)}`;
  }

  return `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(
    6,
    9
  )}-${number.slice(9, 11)}`;
}

function cepMask(number: string): string {
  number = number.replace(/\D/g, "");

  if (number.length <= 5) {
    return number;
  }

  return `${number.slice(0, 5)}-${number.slice(5, 8)}`;
}

function cardNumberMask(number: string): string {
  return number
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}

function cardValidateMask(number: string): string {
  number = number.replace(/\D/g, "").slice(0, 4);

  if (number.length == 2) {
    let month = parseInt(number.slice(0, 2));
    if (month > 12) month = 12;
    else if (month < 1) month = 1;
    number = month.toString().padStart(2, "0") + number.slice(2);
  }

  return number.replace(/(\d{2})(?=\d)/g, "$1/");
}

export default function Input({
  placeholder,
  autocomplete,
  type,
  controller,
  onChange,
}: InputProps) {
  const isInitialMount = useRef(true);
  const [inputValue, setInputValue] = useState("");
  const isPoppins = type != "email" && type != "text";
  const inputType = type == "email" ? type : "text";

  useEffect(() => setInputText(controller.value), []);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      controller.value = inputValue;
      controller.hasError = false;

      if (onChange) onChange(inputValue);
    }
  }, [inputValue]);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const actualInputText = event.target.value;
    setInputText(actualInputText);
  }

  function setInputText(text: string) {
    let newValue = text;

    switch (type) {
      case "number":
        newValue = text.replace(/\D/g, "");
        break;
      case "cellphone":
        newValue = cellphoneMask(text);
        break;
      case "cpf":
        newValue = cpfMask(text);
        break;
      case "cep":
        newValue = cepMask(text);
        break;
      case "card number":
        newValue = cardNumberMask(text);
        break;
      case "card validate":
        newValue = cardValidateMask(text);
        break;
    }

    setInputValue(newValue);
  }

  return (
    <input
      className={`${isPoppins ? poppins.className : zillaSlab.className} ${
        styles.input
      }`}
      style={{
        fontSize: isPoppins ? "15px" : "18px",
        backgroundColor: controller.hasError ? "#FFABAB" : "white",
      }}
      placeholder={placeholder}
      autoComplete={autocomplete}
      type={inputType}
      value={inputValue}
      onChange={(event) => handleOnChange(event)}
    />
  );
}
