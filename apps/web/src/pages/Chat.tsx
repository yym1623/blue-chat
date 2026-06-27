import { useState } from "react";

// components
import { ChatDetailModal } from "@/components/Modals/ChatDetailModal";

const chats = [
  {
    id: 1,
    name: "김민수",
    message: "내일 몇 시쯤이 편해?",
    time: "오후 3:24",
    unread: 2,
    avatar: "김",
    color: "bg-amber-400",
  },
  {
    id: 2,
    name: "Blue Chat 팀",
    message: "새로운 기능이 업데이트됐어요 🎉",
    time: "오전 11:02",
    unread: 0,
    avatar: "B",
    color: "bg-sky-500",
  },
  {
    id: 3,
    name: "이서연",
    message: "사진 확인해줘!",
    time: "어제",
    unread: 5,
    avatar: "이",
    color: "bg-emerald-400",
  },
  {
    id: 4,
    name: "프론트 스터디",
    message: "오늘 모노레포 세팅 끝!",
    time: "월요일",
    unread: 0,
    avatar: "F",
    color: "bg-violet-400",
  },
  {
    id: 5,
    name: "박지훈",
    message: "ㅋㅋㅋ 알겠어",
    time: "2026.06.20.",
    unread: 0,
    avatar: "박",
    color: "bg-rose-400",
  },
] as const;

export function Chat() {

  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [openChatDetailModal, setOpenChatDetailModal] = useState(false);
  
  function handleChatEvent(id: number) {
    setSelectedChatId(id)
    setOpenChatDetailModal(true)
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <button
              type="button"
              onClick={() => handleChatEvent(chat.id)}
              className="flex w-full items-center gap-3 px-4 py-3 text-start transition-colors hover:bg-surface active:bg-surface cursor-pointer"
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold text-white ${chat.color}`}
              >
                {chat.avatar}
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-0.5 flex items-center justify-between gap-2">
                  <span className="truncate font-medium text-text-h">
                    {chat.name}
                  </span>
                  <span className="shrink-0 text-xs text-text">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm text-text">{chat.message}</p>
                  {chat.unread > 0 && (
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <ChatDetailModal
        open={openChatDetailModal}
        chatId={selectedChatId}
        onClose={() => setOpenChatDetailModal(false)}
      />
    </div>
  );
}
