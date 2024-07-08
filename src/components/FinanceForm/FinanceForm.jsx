import { useState } from "react";
import styles from "./FinanceForm.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

export function FinanceForm({ financeList, setFinanceList }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");

  function add() {
    const newFinanceData = {
      id: crypto.randomUUID(),
      type: type,
      description: description,
      value: type === "Despesa" ? value * -1 : value,
    };

    setFinanceList([...financeList, newFinanceData]);
    setDescription("");
    setValue("");
  }

  return (
    <div className={styles.formBox}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          className={styles.desc}
          type="text"
          placeholder="Digite aqui sua descrição"
          required
          maxLength={20}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>Ex: Compra de roupas</p>
        <label htmlFor="">Valor (R$)</label>
        <input
          id="valor"
          className={styles.number}
          type="number"
          placeholder="1"
          required
          min={0.01}
          step={0.01}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <label htmlFor="tipo">Tipo de valor</label>
        <div className={styles.selectBox}>
          <select
            id="tipo"
            name="tipo"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
          <div className={styles.iconArrow}>
            <RiArrowDropDownLine color="var(--color-gray-3)" size="26px" />
          </div>
        </div>

        <button type="submit">Inserir valor</button>
      </form>
    </div>
  );
}
