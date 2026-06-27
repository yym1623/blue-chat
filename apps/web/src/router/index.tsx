import { createBrowserRouter } from "react-router-dom";

// layouts
import { DefaultLayout } from "@/layouts/DefaultLayout";

// pages
import { Home } from "@/pages/Home";
import { Chat } from "@/pages/Chat";
import { User } from '@/pages/User';
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: "홈" },
      },
      {
        path: "/chat",
        element: <Chat />,
        handle: { title: "채팅" },
      },
      {
        path: "/user",
        element: <User />,
        handle: { title: "프로필" },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);