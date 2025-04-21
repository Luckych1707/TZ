import React, { useState } from "react";
import { Button, Drawer as DrawerAnte, Flex, Input, Typography } from "antd";

import { DrawerProps } from "@/widgets/Drawer/model/types";
import { downloadTasks } from "@/shared/helpers/utils/downloadTasks";

export const Drawer = ({
  onClose,
  listData,
  setTasks,
  currentDate,
}: DrawerProps) => {
  const [newTaskContent, setNewTaskContent] = useState<string>("");

  const addTask = () => {
    const newTask = {
      id: new Date().toISOString(),
      date: currentDate.format("YYYY-MM-DD"),
      content: newTaskContent,
    };

    setTasks([newTask]);
    setNewTaskContent("");
  };

  return (
    <DrawerAnte
      title={currentDate.format("YYYY-MM-DD")}
      onClose={onClose}
      open={!!listData}
      extra={
        <>
          {listData?.length > 0 && (
            <Button onClick={() => downloadTasks(listData)}>
              Выгрузить задачи
            </Button>
          )}
        </>
      }
    >
      <Flex vertical gap="8px">
        <Typography.Text strong>
          {`Список задач ${listData?.length == 0 ? "пока пуст" : ""}`}
        </Typography.Text>

        {listData?.map((item, index) => (
          <Flex gap="4px" key={item?.id}>
            <Typography.Text strong>{index + 1}.</Typography.Text>
            <Typography.Text>{item?.content}</Typography.Text>
          </Flex>
        ))}

        <Flex vertical gap="4px">
          <Input
            value={newTaskContent}
            placeholder={"Текст задачи"}
            onChange={(e) => setNewTaskContent(e.target.value)}
          />
          <Button onClick={addTask}>Создать задачу</Button>
        </Flex>
      </Flex>
    </DrawerAnte>
  );
};
