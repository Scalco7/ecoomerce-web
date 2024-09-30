import { AddressData, PayerData } from "@/app/checkout/payment/page";
import validarCpf from "validar-cpf";
import { InputController } from "@/components/atoms/input/input";

function validateCEP(cep: string): boolean {
    return /^\d{8}$/.test(cep.replace(/[^\d]+/g, ""));
}

export function validatePayerData(payerData: PayerData): { form: PayerData, error?: string } {
    const { name, email, cpf, cellphone } = payerData;

    if (name.value == "" || name.value == " ") {
        name.hasError = true;
        return { form: { name, email, cpf, cellphone }, error: "Digite um nome." };
    }
    name.hasError = false;

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email.value)) {
        email.hasError = true;
        return { form: { name, email, cpf, cellphone }, error: "Digite um E-mail válido." };
    }
    email.hasError = false;

    if (!validarCpf(cpf.value)) {
        cpf.hasError = true;
        return { form: { name, email, cpf, cellphone }, error: "Digite um cpf válido." };
    }
    cpf.hasError = false;

    if (cellphone.value == "") {
        cellphone.hasError = true;
        return { form: { name, email, cpf, cellphone }, error: "Digite um número de celular." };
    }
    if (cellphone.value.length != 16) {
        cellphone.hasError = true;
        return { form: { name, email, cpf, cellphone }, error: "Digite um número de celular válido." };
    }
    cellphone.hasError = false;

    return { form: { name, email, cpf, cellphone } };
}

export function validateAddressData(addressData: AddressData): { form: AddressData, error?: string } {
    const { cep, state, city, neighborhood, street, number, complement } =
        addressData;

    if (!validateCEP(cep.value)) {
        cep.hasError = true;
        return { form: { cep, state, city, neighborhood, street, number, complement }, error: "Digite um cep válido." };
    }
    cep.hasError = false;

    if (state.value == "" || state.value == " ") {
        state.hasError = true;
        return { form: { cep, state, city, neighborhood, street, number, complement }, error: "Digite um estado." };
    }
    state.hasError = false;

    if (city.value == "" || city.value == " ") {
        city.hasError = true;
        return { form: { cep, state, city, neighborhood, street, number, complement }, error: "Digite uma cidade." };
    }
    city.hasError = false;

    if (neighborhood.value == "" || neighborhood.value == " ") {
        neighborhood.hasError = true;
        return { form: { cep, state, city, neighborhood, street, number, complement }, error: "Digite um bairro." };
    }
    neighborhood.hasError = false;

    if (street.value == "" || street.value == " ") {
        street.hasError = true;
        return { form: { cep, state, city, neighborhood, street, number, complement }, error: "Digite uma rua." };
    }
    street.hasError = false;

    if (number.value == "" || number.value == " ") {
        number.hasError = true;
        return { form: { cep, state, city, neighborhood, street, number, complement }, error: "Digite um número." };
    }
    number.hasError = false;

    return { form: { cep, state, city, neighborhood, street, number, complement } };
}

function formIsValid(form: Record<string, InputController>): boolean {
    const errors = Object.keys(form).map((key) => {
        if (form[key].hasError) return true;
        return false;
    });

    return !errors.some((e) => e == true);
} //não usada ###