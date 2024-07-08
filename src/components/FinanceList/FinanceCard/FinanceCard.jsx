import styles from "./FinanceCard.module.scss";

export function FinanceCard({
  dado: { id, description, type, value },
  financeList,
  setFinanceList,
}) {
  return (
    <li
      className={
        styles.card +
        " " +
        (type === "Entrada" ? styles.income : styles.expense)
      }
    >
      <div>
        <h3>{description}</h3>
        <span>{type}</span>
      </div>
      <div>
        <span className={styles.value}>
          {Math.abs(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() =>
            setFinanceList(financeList.filter((finance) => finance.id !== id))
          }
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
