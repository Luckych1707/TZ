import "dayjs/locale/ru";

import { RouterProvider } from "@tanstack/react-router";
import { Flex, Spin } from "antd";
import { Suspense } from "react";

import { router } from "@/app/providers/RouterProvider";

const Providers = () => {
  return (
    <Suspense
      fallback={
        <Flex justify="center" align="center" style={{ height: "100vh" }}>
          <Spin size="large" />
        </Flex>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Providers;
