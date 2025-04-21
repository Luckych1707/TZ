import React, { useState } from "react";
import { Calendar as CalendarAnt } from "antd";

import { Drawer } from "@/widgets/Drawer";
import { Dayjs } from "dayjs";
import { getCalendarData } from "@/shared/helpers/utils/getCalendarData";
import taskList from "@/shared/mock/DATE.json";
import { CalendarHeader, CalendarItem } from "@/entities/Calendar";

export const Calendar = () => {
  const [calendarItemDate, setCalendarItemDate] = useState<Dayjs | null>(null);
  const [calendarDate, setCalendarDate] = useState<Dayjs | null>(null);
  const [tasks, setTasks] = useState(taskList);

  return (
    <>
      <CalendarAnt
        value={calendarDate ?? undefined}
        onChange={(date) => setCalendarDate(date)}
        cellRender={(current) => (
          <CalendarItem
            listData={getCalendarData({ currentDay: current, taskList: tasks })}
            onClick={() => setCalendarItemDate(current)}
          />
        )}
        headerRender={(config) => (
          <CalendarHeader
            value={config.value}
            onChange={config.onChange}
            onUploadTask={(value) => setTasks(() => [...tasks, ...value])}
          />
        )}
      />

      {calendarItemDate && (
        <Drawer
          listData={getCalendarData({
            currentDay: calendarItemDate,
            taskList: tasks,
          })}
          onClose={() => setCalendarItemDate(null)}
          calendarItemDate={calendarItemDate}
          onAddTask={(value) => setTasks(() => [...tasks, ...value])}
        />
      )}
    </>
  );
};
