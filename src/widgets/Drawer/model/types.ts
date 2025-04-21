import { ListDataType } from "@/shared/type/ListDataType";
import { Dayjs } from "dayjs";

export type DrawerProps = {
  onClose: () => void;
  listData: ListDataType;
  onAddTask: (value: ListDataType) => void;
  calendarItemDate: Dayjs;
};
