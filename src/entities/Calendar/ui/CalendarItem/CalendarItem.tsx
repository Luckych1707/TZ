import React from "react";
import { ListDataType } from "@/shared/type/ListDataType";

export const CalendarItem = (listData: ListDataType) => {
  return (
    <ul>
      {listData?.map((item) => (
        <li key={item.id}>
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
};
