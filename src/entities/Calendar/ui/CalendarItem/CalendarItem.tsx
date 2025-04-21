import React from "react";
import { ListDataType } from "@/shared/type/ListDataType";

export const CalendarItem = ({
  listData,
  onClick,
}: {
  listData: ListDataType;
  onClick: () => void;
}) => {
  return (
    <ul onClick={onClick} style={{ height: "100%" }}>
      {listData?.map((item) => (
        <li key={item.id}>
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
};
