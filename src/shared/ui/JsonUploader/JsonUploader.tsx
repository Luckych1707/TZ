import React from "react";
import { ListDataType } from "@/shared/type/ListDataType";
import { Flex, Input, Typography } from "antd";

type Props = {
  onUploadTask: (value: ListDataType) => void;
};

export const JsonUploader = ({ onUploadTask }: Props) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const parsedData = JSON.parse(e.target.result as string);
        onUploadTask(parsedData);
      } catch (err) {
        console.error(err);
      }
    };

    reader.readAsText(file);
  };

  return (
    <Flex align="center" vertical>
      <Typography.Text strong>Загрузить задачу</Typography.Text>
      <Input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        variant="borderless"
      />
    </Flex>
  );
};
