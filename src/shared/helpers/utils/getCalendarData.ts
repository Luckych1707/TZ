import type { Dayjs } from "dayjs";
import { ListDataType } from "@/shared/type/ListDataType";

type Props = { currentDay: Dayjs | null; taskList: ListDataType };

export const getCalendarData = ({ currentDay, taskList }: Props) => {
  const currentDate = currentDay?.format("YYYY-MM-DD");

  const listData: ListDataType = taskList
    .map((item) => {
      if (currentDate == item.date)
        return { id: item.id, date: item.date, content: item.content };
    })
    .filter((element) => element !== undefined);

  return listData || [];
};
