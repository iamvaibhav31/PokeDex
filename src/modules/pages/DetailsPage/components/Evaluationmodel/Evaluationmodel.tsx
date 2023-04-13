import React from "react";
import Modal from "@/lib/Modal/Modal";
import styles from "./Evaluationmodel.module.css";
import { EvaluationmodelProps } from "./Evaluationmodel.type";
import Card from "@/modules/components/Card/Card";
const Evaluationmodel = ({ isOpen, hideModal, data }: EvaluationmodelProps) => {
  return (
    <Modal isOpen={isOpen} hideModal={hideModal}>
      <div className={styles.container}>
        <div className={styles.header}>
          Evoluation Chart{" "}
          <span
            className={styles.closeButton}
            onClick={() => {
              hideModal?.();
            }}
          >
            X
          </span>
        </div>
        <div className={styles.cardCon}>
          {data.map((item, index) => (
            <Card
              classification={item.classification}
              id={item.id}
              image={item.image}
              name={item.name}
              number={item.number}
              types={item.types}
              key={index}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Evaluationmodel;
