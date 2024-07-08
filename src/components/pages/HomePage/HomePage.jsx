import { dados } from "../../../data/dados";
import { useState } from "react";
import { FinanceForm } from "../../FinanceForm/FinanceForm";
import { PageTemplate } from "../../PageTemplate/PageTemplate";
import { Total } from "../../Total/Total";
import { FinanceList } from "../../FinanceList/FinanceList";

import styles from "./HomePage.module.scss";

export function HomePage() {
  const [financeList, setFinanceList] = useState(dados);

  return (
    <PageTemplate>
      <div className={styles.box1}>
        <div className={styles.box2}>
          <div className={styles.box3}>
            <FinanceForm
              financeList={financeList}
              setFinanceList={setFinanceList}
            />
            <Total financeList={financeList} />
          </div>
          <FinanceList
            financeList={financeList}
            setFinanceList={setFinanceList}
          />
        </div>
      </div>
    </PageTemplate>
  );
}
