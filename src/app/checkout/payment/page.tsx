"use client";

import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Footer from "@/components/molecules/footer/footer";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import CardIcon from "@/components/icons/cardIcon/cardIcon";
import Input, { InputController } from "@/components/atoms/input/input";

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

export default function CheckoutPayment() {
  const payerDataForm: PayerData = {
    name: { value: "" },
    email: { value: "" },
    cpf: { value: "" },
    cellphone: { value: "" },
  };

  const addressDataForm: AddressData = {
    cep: { value: "" },
    state: { value: "" },
    city: { value: "" },
    neighborhood: { value: "" },
    street: { value: "" },
    number: { value: "" },
    complement: { value: "" },
  };

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
              <Input
                placeholder="Rua"
                type="text"
                autocomplete="address-line1"
                controller={addressDataForm.street}
              />
              <Input
                placeholder="Número"
                type="number"
                autocomplete="address-line2"
                controller={addressDataForm.number}
              />
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
              onClick={() => {
                console.log(addressDataForm);
              }}
            />
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}
