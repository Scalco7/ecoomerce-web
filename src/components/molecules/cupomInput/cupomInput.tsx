import { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function CupomInput() {
  const [cupom, setCupom] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  function applyCupom() {
    if (inputValue != "" && inputValue != " ") setCupom(inputValue);
  }

  function removeCupom() {
    setCupom(null);
  }

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    value = value.slice(0, 16).toUpperCase();

    setInputValue(value);
  }

  function handleOnClickButton() {
    if (cupom) removeCupom();
    else applyCupom();
  }

  return (
    <main className={`${poppins.className} ${styles.main}`}>
      <p className={styles.labelText}>Cupom:</p>
      <div className={styles.inputBox}>
        <input
          className={`${poppins.className} ${styles.input}`}
          style={{
            background: cupom ? "#C6FFAB" : "transparent",
          }}
          value={cupom ?? inputValue}
          placeholder="CUPOM"
          autoComplete="none"
          disabled={!!cupom}
          onChange={handleOnChangeValue}
        />
        <div className={styles.buttonBox} onClick={handleOnClickButton}>
          {cupom ? "Remover" : "Aplicar"}
        </div>
      </div>
    </main>
  );
}
