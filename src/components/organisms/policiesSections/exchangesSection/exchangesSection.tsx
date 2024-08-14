import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function ExchangesSection() {
  return (
    <main className={styles.main}>
      <main className={styles.main}>
        <p className={styles.title}>Política de Trocas e Devoluções </p>
        <section className={styles.boxText}>
          <section>
            <p>1. Condições Gerais</p>
            <p className={zillaSlab.className}>
              - A Banana {"Monkey's"} se compromete a realizar trocas ou
              devoluções de produtos que apresentem defeitos de fabricação ou
              que não atendam às expectativas do cliente, respeitando o prazo de
              7 dias corridos após o recebimento do produto. <br />- Para
              solicitar a troca ou devolução, o cliente deve entrar em contato
              com nosso atendimento pelo e-mail ou telefone informado no site,
              detalhando o motivo da solicitação.
            </p>
          </section>
          <section>
            <p>2. Produtos Elegíveis para Troca/Devolução</p>
            <p className={zillaSlab.className}>
              - O produto deve estar em perfeitas condições, sem sinais de uso,
              com a etiqueta original intacta e na embalagem original.
              <br />- Produtos com defeito de fabricação serão analisados pela
              nossa equipe, e, caso constatado o defeito, o cliente poderá optar
              pela troca ou reembolso.
            </p>
          </section>
          <section>
            <p>3. Procedimento para Troca/Devolução</p>
            <p className={zillaSlab.className}>
              - Após o contato inicial, a Banana {"Monkey's"} fornecerá as
              instruções para envio do produto.
              <br />- O frete da primeira troca é por conta da loja. Em casos de
              devolução, o reembolso será feito na mesma forma de pagamento
              utilizada na compra, após o recebimento e análise do produto.
            </p>
          </section>
        </section>
      </main>
    </main>
  );
}
