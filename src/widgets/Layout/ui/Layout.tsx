import { Flex, Layout as AntdLayout, Spin } from "antd";
import { Suspense } from "react";
import { Outlet } from "@tanstack/react-router";

export const Layout = () => {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <AntdLayout.Content>
        <AntdLayout.Content style={{ padding: "38px 64px" }}>
          <Suspense
            fallback={
              <Flex justify="center" align="center" style={{ height: "100%" }}>
                <Spin size="large" />
              </Flex>
            }
          >
            <Outlet />
          </Suspense>
        </AntdLayout.Content>
      </AntdLayout.Content>
    </AntdLayout>
  );
};
