import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";

const zillaSlab = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function PrivacySection() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Políticas de Privacidade</p>
      <section className={styles.boxText}>
        <section>
          <p>1. Introdução</p>
          <p className={zillaSlab.className}>
            Esta Política de Privacidade descreve como coletamos, usamos e
            protegemos as informações pessoais dos usuários do nosso site de
            venda de roupas. Ao utilizar nosso site, você concorda com a coleta
            e uso de informações de acordo com esta política.
          </p>
        </section>
        <section>
          <p>2. Coleta de Informações</p>
          <p className={zillaSlab.className}>
            Coletamos diferentes tipos de informações para fornecer e melhorar
            nossos serviços:
            <br />
            - Informações Pessoais: Quando você se registra em nosso site, faz
            uma compra ou entra em contato conosco, podemos coletar informações
            como nome, endereço de e-mail, endereço de entrega, número de
            telefone e informações de pagamento.
            <br />- Informações de Navegação: Utilizamos cookies e tecnologias
            semelhantes para coletar informações sobre como você utiliza nosso
            site. Essas informações são usadas de maneira agregada para nos
            ajudar a entender as preferências dos usuários e melhorar a
            experiência no site.
          </p>
        </section>
        <section>
          <p>3. Uso das Informações</p>
          <p className={zillaSlab.className}>
            Utilizamos as informações coletadas para diversos fins, incluindo:
            <br />
            - Processar e gerenciar suas compras e pedidos.
            <br />
            - Melhorar e personalizar a sua experiência no nosso site.
            <br />
            - Enviar comunicações promocionais, se você optou por recebê-las.
            <br />
            - Responder às suas solicitações e fornecer suporte ao cliente.
            <br />- Analisar e melhorar nossos serviços, sem identificar
            individualmente os usuários.
          </p>
        </section>
        <section>
          <p>4. Compartilhamento de Informações</p>
          <p className={zillaSlab.className}>
            Não vendemos, trocamos ou transferimos suas informações pessoais
            para terceiros, exceto quando necessário para processar seus pedidos
            ou conforme exigido por lei. Podemos compartilhar suas informações
            com:
            <br />
            - Provedores de Serviços: Terceiros que nos ajudam a operar nosso
            site, conduzir nossos negócios ou prestar serviços a você, desde que
            esses terceiros concordem em manter suas informações confidenciais.
            <br />- Conformidade Legal: Autoridades competentes quando
            necessário para cumprir com uma obrigação legal ou proteger nossos
            direitos, propriedade ou segurança.
          </p>
        </section>
        <section>
          <p>5. Segurança das Informações</p>
          <p className={zillaSlab.className}>
            Implementamos uma série de medidas de segurança para proteger suas
            informações pessoais. Usamos criptografia, firewalls e outras
            tecnologias e procedimentos de segurança para ajudar a proteger seus
            dados contra acessos não autorizados, alterações, divulgações ou
            destruição.
          </p>
        </section>
        <section>
          <p>6. Seus Direitos</p>
          <p className={zillaSlab.className}>
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais. Também pode optar por não receber comunicações
            promocionais a qualquer momento. Para exercer esses direitos, entre
            em contato conosco através das informações fornecidas na seção de
            contato.
          </p>
        </section>
        <section>
          <p>7. Alterações nesta Política de Privacidade</p>
          <p className={zillaSlab.className}>
            Reservamo-nos o direito de atualizar ou modificar esta Política de
            Privacidade a qualquer momento. Qualquer alteração será publicada
            nesta página e a data da última atualização será revisada.
          </p>
        </section>
        <section>
          <p>8. Contato</p>
          <p className={zillaSlab.className}>
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco: bananamonk3ys@gmail.com
          </p>
        </section>
      </section>
    </main>
  );
}
