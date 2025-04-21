import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
} from "@tanstack/react-router";
import { Layout } from "@/widgets/Layout";
import CalendarPage from "@/pages/CalendarPage";

const rootRoute = createRootRoute({
  component: () => <Layout />,
});

const emptyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/*",
  component: () => <Navigate to="/" />,
});

const todoListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <CalendarPage to="/" />,
});

const routeTree = rootRoute.addChildren([emptyRoute, todoListRoute]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
