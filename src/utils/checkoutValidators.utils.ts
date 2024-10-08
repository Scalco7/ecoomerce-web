import { AddressData, CardData, PayerData } from "@/app/checkout/payment/page";
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

export function validateCardData(cardData: CardData): { form: CardData, error?: string } {
    const { name, cardNumber, validateDate, code } = cardData;

    if (name.value == "" || name.value == " ") {
        name.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite o nome do titular do cartão." };
    }
    name.hasError = false;


    if (cardNumber.value == "" || cardNumber.value == " ") {
        cardNumber.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite o número do cartão." };
    }

    if (!validateCardNumber(cardNumber.value)) {
        cardNumber.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite um número do cartão válido." };
    }
    cardNumber.hasError = false;


    if (validateDate.value == "" || validateDate.value == " ") {
        validateDate.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite a data de validade." };
    }

    if (!validateCardValidadeDate(validateDate.value)) {
        validateDate.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite uma data de validade válida." };
    }
    validateDate.hasError = false;


    if (code.value == "" || code.value == " ") {
        code.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite o código do cartão." };
    }

    if (code.value.length > 4 || code.value.length < 3) {
        code.hasError = true;
        return { form: { name, cardNumber, validateDate, code }, error: "Digite um código do cartão válido." };
    }
    code.hasError = false;

    return { form: { name, cardNumber, validateDate, code } };
}

function validateCardNumber(number: string): boolean {
    return number.replace(/\D/g, "")
        .split("")
        .reverse()
        .map(Number)
        .reduce((soma, digit, i) => soma + (i % 2 ? (digit * 2 > 9 ? digit * 2 - 9 : digit * 2) : digit), 0) % 10 === 0;
}

function validateCardValidadeDate(date: string): boolean {
    date = date.replace(/\D/g, "");
    if (date.length !== 4) return false;

    const month = parseInt(date.slice(0, 2), 10);
    const year = parseInt("20" + date.slice(2), 10);

    if (month < 1 || month > 12) return false;

    const today = new Date();
    const actualMonth = today.getMonth() + 1;
    const actualYear = today.getFullYear();

    return (year > actualYear) || (year === actualYear && month >= actualMonth);
}

function formIsValid(form: Record<string, InputController>): boolean {
    const errors = Object.keys(form).map((key) => {
        if (form[key].hasError) return true;
        return false;
    });

    return !errors.some((e) => e == true);
} //não usada ###