"use client";

import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Footer from "@/components/molecules/footer/footer";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import CardIcon from "@/components/icons/cardIcon/cardIcon";
import Input, { InputController } from "@/components/atoms/input/input";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import {
  validateAddressData,
  validateCardData,
  validatePayerData,
} from "@/utils/checkoutValidators.utils";
import { darkToastOptions } from "@/utils/toast.utils";
import PaymentOptionSwitch, {
  PaymentOption,
} from "@/components/molecules/paymentOptionSwitch/paymentOptionSwitch";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export interface PayerData {
  name: InputController;
  email: InputController;
  cpf: InputController;
  cellphone: InputController;
}

export interface AddressData {
  cep: InputController;
  state: InputController;
  city: InputController;
  neighborhood: InputController;
  street: InputController;
  number: InputController;
  complement: InputController;
}

export interface CardData {
  name: InputController;
  cardNumber: InputController;
  validateDate: InputController;
  code: InputController;
}

export default function CheckoutPayment() {
  const [paymentOption, setPaymentOption] = useState<PaymentOption>("pix");
  const [payerDataForm, setPayerDataForm] = useState<PayerData>({
    name: { value: "", hasError: false },
    email: { value: "", hasError: false },
    cpf: { value: "", hasError: false },
    cellphone: { value: "", hasError: false },
  });
  const [addressDataForm, setAddressDataForm] = useState<AddressData>({
    cep: { value: "", hasError: false },
    state: { value: "", hasError: false },
    city: { value: "", hasError: false },
    neighborhood: { value: "", hasError: false },
    street: { value: "", hasError: false },
    number: { value: "", hasError: false },
    complement: { value: "", hasError: false },
  });
  const [cardDataForm, setCardDataForm] = useState<CardData>({
    name: { value: "", hasError: false },
    cardNumber: { value: "", hasError: false },
    validateDate: { value: "", hasError: false },
    code: { value: "", hasError: false },
  });

  function handleOnChangePaymentType(newType: PaymentOption) {
    setPaymentOption(newType);
  }

  function handleOnCorfirmData() {
    const validatePayerObject = validatePayerData(payerDataForm);
    setPayerDataForm(validatePayerObject.form);

    if (validatePayerObject.error) {
      toast.error(validatePayerObject.error, darkToastOptions);
      return;
    }

    const validateAddressObject = validateAddressData(addressDataForm);
    setAddressDataForm(validateAddressObject.form);

    if (validateAddressObject.error) {
      toast.error(validateAddressObject.error, darkToastOptions);
      return;
    }

    if (paymentOption == "card") {
      const validateCardObject = validateCardData(cardDataForm);
      console.log(validateCardObject);
      setCardDataForm(validateCardObject.form);

      if (validateCardObject.error) {
        toast.error(validateCardObject.error, darkToastOptions);
        return;
      }
    }

    toast.success("Criando pagamento", darkToastOptions);
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
          <section className={styles.subSection}>
            <PaymentOptionSwitch
              form={cardDataForm}
              paymentOption={paymentOption}
              onChange={handleOnChangePaymentType}
            />
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
