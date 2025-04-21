import { downloadJSON } from "@/shared/helpers/utils/getJSONDate";
import { ListDataType } from "@/shared/type/ListDataType";

export const downloadTasks = (listData: ListDataType) => {
  const taskList = listData.map((item, index) => {
    return {
      id: new Date().toISOString() + index,
      date: item.date,
      content: item.content,
    };
  });
  downloadJSON(taskList, `Task on ${listData[0].date}`);
};
