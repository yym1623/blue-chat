import { createBrowserRouter } from "react-router-dom";

// layouts
import { DefaultLayout } from "@/layouts/DefaultLayout";

// pages
import { Home } from "@/pages/Home";
import { Chat } from "@/pages/Chat";
import { ChatDetail } from "@/pages/ChatDetail";
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
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/chat/:id",
        element: <ChatDetail />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);