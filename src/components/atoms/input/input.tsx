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
  type: "text" | "email" | "number" | "cellphone" | "cpf" | "cep";
  controller: InputController;
  autocomplete?: HTMLInputAutoCompleteAttribute;
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

function cellphoneMask(numero: string): string {
  numero = numero.replace(/\D/g, "");

  if (numero.length <= 0) {
    return "";
  } else if (numero.length <= 2) {
    return `(${numero}`;
  } else if (numero.length <= 7) {
    return `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
  }

  return `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(
    3,
    7
  )}-${numero.slice(7, 11)}`;
}

function cpfMask(numero: string): string {
  numero = numero.replace(/\D/g, "");

  if (numero.length <= 3) {
    return numero;
  } else if (numero.length <= 6) {
    return `${numero.slice(0, 3)}.${numero.slice(3)}`;
  } else if (numero.length <= 9) {
    return `${numero.slice(0, 3)}.${numero.slice(3, 6)}.${numero.slice(6)}`;
  }

  return `${numero.slice(0, 3)}.${numero.slice(3, 6)}.${numero.slice(
    6,
    9
  )}-${numero.slice(9, 11)}`;
}

function cepMask(numero: string): string {
  numero = numero.replace(/\D/g, "");

  if (numero.length <= 5) {
    return numero;
  }

  return `${numero.slice(0, 5)}-${numero.slice(5, 8)}`;
}

export default function Input({
  placeholder,
  autocomplete,
  type,
  controller,
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
