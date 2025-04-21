import { Dayjs } from "dayjs";
import { ListDataType } from "@/shared/type/ListDataType";

export type CalendarHeaderProps = {
  value: Dayjs;
  onChange: (data: Dayjs) => void;
  onUploadTask: (value: ListDataType) => void;
};
