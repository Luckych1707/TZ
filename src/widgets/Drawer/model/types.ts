import { ListDataType } from "@/shared/type/ListDataType";
import { Dayjs } from "dayjs";

export type DrawerProps = {
  onClose: () => void;
  listData: ListDataType;
  setTasks: (value: ListDataType) => void;
  currentDate: Dayjs;
};
