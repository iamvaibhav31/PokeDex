import React from "react";
import Card from "@/modules/components/Card/Card";
import type { CardListProps } from "./CardList.type";
const CardList = ({ data }: CardListProps) => {
  return (
    <>
      {data.map((item) => (
        <Card
          id={item.id}
          image={item.image}
          classification={item.classification}
          name={item.name}
          number={item.number}
          types={item.types}
          key={item.id}
        />
      ))}
    </>
  );
};

export default CardList;
