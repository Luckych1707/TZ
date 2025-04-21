import React, { useState } from "react";
import { Calendar as CalendarAnt } from "antd";

import { Drawer } from "@/widgets/Drawer";
import { Dayjs } from "dayjs";
import { getCalendarData } from "@/shared/helpers/utils/getCalendarData";
import taskList from "@/shared/mock/DATE.json";
import { CalendarHeader, CalendarItem } from "@/entities/Calendar";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(null);

  const [tasks, setTasks] = useState(taskList);

  const showDrawer = (date: Dayjs) => {
    setCurrentDate(date);
  };

  const onClose = () => {
    setCurrentDate(null);
  };

  return (
    <>
      <CalendarAnt
        cellRender={(current) =>
          CalendarItem(
            getCalendarData({ currentDay: current, taskList: tasks }),
          )
        }
        headerRender={(config) => (
          <CalendarHeader
            value={config.value}
            onChange={config.onChange}
            setTasks={(value) => setTasks(() => [...tasks, ...value])}
          />
        )}
        onSelect={(date) => showDrawer(date)}
      />

      {currentDate && (
        <Drawer
          listData={getCalendarData({
            currentDay: currentDate,
            taskList: tasks,
          })}
          onClose={onClose}
          currentDate={currentDate}
          setTasks={(value) => setTasks(() => [...tasks, ...value])}
        />
      )}
    </>
  );
};
