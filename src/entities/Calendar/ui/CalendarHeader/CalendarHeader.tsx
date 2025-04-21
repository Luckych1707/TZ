import React from "react";
import { Col, Flex, Row, Select } from "antd";
import JsonUploader from "@/shared/helpers/utils/JsonUploader";
import { CalendarHeaderProps } from "@/entities/Calendar/model/types";

export const CalendarHeader = ({
  value,
  onChange,
  setTasks,
}: CalendarHeaderProps) => {
  const start = 0;
  const end = 12;
  const monthOptions = [];

  let current = value.clone();
  const localeData = value.localeData();
  const months = [];

  for (let i = 0; i < 12; i++) {
    current = current.month(i);
    months.push(localeData.monthsShort(current));
  }

  for (let i = start; i < end; i++) {
    monthOptions.push(
      <Select.Option key={i} value={i}>
        {months[i]}
      </Select.Option>,
    );
  }

  const year = value.year();
  const month = value.month();
  const options = [];

  for (let i = year - 10; i < year + 10; i += 1) {
    options.push(
      <Select.Option key={i} value={i} onClick={(e) => e.stopPropagation()}>
        {i}
      </Select.Option>,
    );
  }

  return (
    <Flex>
      <div style={{ padding: 8 }}>
        <Row gutter={8}>
          <Col>
            <Select
              popupMatchSelectWidth={false}
              value={year}
              onChange={(newYear) => {
                const now = value.clone().year(newYear);
                onChange(now);
              }}
            >
              {options}
            </Select>
          </Col>

          <Col>
            <Select
              value={month}
              onChange={(newMonth) => {
                const now = value.clone().month(newMonth);
                onChange(now);
              }}
            >
              {monthOptions}
            </Select>
          </Col>
        </Row>
      </div>

      <JsonUploader setTasks={setTasks} />
    </Flex>
  );
};
