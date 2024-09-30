"use client";

import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Footer from "@/components/molecules/footer/footer";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import CardIcon from "@/components/icons/cardIcon/cardIcon";
import Input, { InputController } from "@/components/atoms/input/input";
import toast, { Toaster } from "react-hot-toast";
import { darkToastOptions } from "@/utils/toast.utils";
import { useState } from "react";
import validarCpf from "validar-cpf";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface PayerData {
  name: InputController;
  email: InputController;
  cpf: InputController;
  cellphone: InputController;
}

interface AddressData {
  cep: InputController;
  state: InputController;
  city: InputController;
  neighborhood: InputController;
  street: InputController;
  number: InputController;
  complement: InputController;
}

function validatePayerData(payerData: PayerData): PayerData {
  const { name, email, cpf, cellphone } = payerData;

  if (name.value == "") {
    name.hasError = true;
    toast.error("Digite um nome.", darkToastOptions);
    return { name, email, cpf, cellphone };
  }
  name.hasError = false;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email.value)) {
    email.hasError = true;
    toast.error("Digite um E-mail válido.", darkToastOptions);
    return { name, email, cpf, cellphone };
  }
  email.hasError = false;

  if (!validarCpf(cpf.value)) {
    cpf.hasError = true;
    toast.error("Digite um cpf válido.", darkToastOptions);
    return { name, email, cpf, cellphone };
  }
  cpf.hasError = false;

  if (cellphone.value == "") {
    cellphone.hasError = true;
    toast.error("Digite um número de celular.", darkToastOptions);
    return { name, email, cpf, cellphone };
  }
  if (cellphone.value.length != 16) {
    cellphone.hasError = true;
    toast.error("Digite um número de celular válido.", darkToastOptions);
    return { name, email, cpf, cellphone };
  }
  cellphone.hasError = false;

  return { name, email, cpf, cellphone };
}

export default function CheckoutPayment() {
  const [payerDataForm, setPayerDataForm] = useState<PayerData>({
    name: { value: "", hasError: false },
    email: { value: "", hasError: false },
    cpf: { value: "", hasError: false },
    cellphone: { value: "", hasError: false },
  });

  const addressDataForm: AddressData = {
    cep: { value: "", hasError: false },
    state: { value: "", hasError: false },
    city: { value: "", hasError: false },
    neighborhood: { value: "", hasError: false },
    street: { value: "", hasError: false },
    number: { value: "", hasError: false },
    complement: { value: "", hasError: false },
  };

  function handleOnCorfirmData() {
    const newPayerForm = validatePayerData(payerDataForm);
    setPayerDataForm(newPayerForm);

    console.log(payerDataForm);

    // if (newPayerForm) console.log("válido");
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <section className={styles.titleSection}>
          <CardIcon size={40} color="#000" />
          <p className={zillaSlab.className}>Pagamento</p>
        </section>
        <section className={styles.dataSection}>
          <section className={styles.subSection}>
            <p className={`${zillaSlab.className} ${styles.sectionTitle}`}>
              1 - Dados do pagador
            </p>
            <section className={styles.inputSection}>
              <Input
                placeholder="Nome completo"
                type="text"
                autocomplete="name"
                controller={payerDataForm.name}
              />
              <Input
                placeholder="E-mail"
                type="email"
                autocomplete="email"
                controller={payerDataForm.email}
              />
              <Input
                placeholder="CPF"
                type="cpf"
                controller={payerDataForm.cpf}
              />
              <Input
                placeholder="Celular com DDD"
                type="cellphone"
                autocomplete="tel"
                controller={payerDataForm.cellphone}
              />
            </section>
          </section>
          <section className={styles.subSection}>
            <p className={`${zillaSlab.className} ${styles.sectionTitle}`}>
              2 - Endereço de entrega
            </p>
            <section className={styles.inputSection}>
              <Input
                placeholder="CEP"
                type="cep"
                autocomplete="postal-code"
                controller={addressDataForm.cep}
              />
              <Input
                placeholder="Estado"
                type="text"
                autocomplete="address-level1"
                controller={addressDataForm.state}
              />
              <Input
                placeholder="Cidade"
                type="text"
                autocomplete="address-level2"
                controller={addressDataForm.city}
              />
              <Input
                placeholder="Bairro"
                type="text"
                autocomplete="address-level3"
                controller={addressDataForm.neighborhood}
              />
              <section className={styles.rowSection}>
                <Input
                  placeholder="Rua"
                  type="text"
                  autocomplete="address-line1"
                  controller={addressDataForm.street}
                />
                <div className={styles.addressNumberBox}>
                  <Input
                    placeholder="Número"
                    type="number"
                    autocomplete="address-line2"
                    controller={addressDataForm.number}
                  />
                </div>
              </section>

              <Input
                placeholder="Complemento"
                type="text"
                controller={addressDataForm.complement}
              />
            </section>
          </section>
          <div className={styles.boxButton}>
            <SecondaryButton
              width={"100%"}
              height={"54px"}
              text="Confirmar Dados"
              textTransform="uppercase"
              onClick={handleOnCorfirmData}
            />
          </div>
        </section>
        <Footer />
      </section>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
