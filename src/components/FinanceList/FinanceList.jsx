import { FinanceCard } from "./FinanceCard/FinanceCard";
import styles from "./FinanceList.module.scss";

export function FinanceList({ financeList, setFinanceList }) {
  return (
    <div className={styles.listBox}>
      <h3>Resumo financeiro</h3>
      <ul>
        {financeList.length > 0 ? (
          financeList.map((dado) => (
            <FinanceCard
              key={dado.id}
              dado={dado}
              financeList={financeList}
              setFinanceList={setFinanceList}
            />
          ))
        ) : (
          <p>Você ainda não possui nenhum lançamento</p>
        )}
      </ul>
    </div>
  );
}
