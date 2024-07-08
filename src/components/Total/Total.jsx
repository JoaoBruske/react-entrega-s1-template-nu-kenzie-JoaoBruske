import styles from "./Total.module.scss";

export function Total({ financeList }) {
  const total = financeList.reduce((acumulador, dadoAtual) => {
    return (
      acumulador +
      (dadoAtual.type === "despesa" ? dadoAtual.value * -1 : dadoAtual.value)
    );
  }, 0);

  return (
    <div className={styles.totalBox}>
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <span>
        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </span>
    </div>
  );
}
