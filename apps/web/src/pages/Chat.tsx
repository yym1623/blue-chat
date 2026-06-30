import { useState } from "react";
import dayjs from "dayjs";

// components
import { ChatDetailModal } from "@/components/Modals/ChatDetailModal";
import { Avatar } from '@/components/Avatar'

// data
import { getChatList } from "@/data/my/room";




export function Chat() {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [openChatDetailModal, setOpenChatDetailModal] = useState(false);
  
  function handleChatEvent(id: number) {
    setSelectedChatId(id)
    setOpenChatDetailModal(true)
  }


  console.log("getChatList", getChatList())

  return (
    <div className="flex-1 overflow-y-auto">
      <ul className="">
        {getChatList().map((room) => (
          <li key={room.roomId}>              
            <button type="button" onClick={() => handleChatEvent(room.roomId)} className="flex w-full items-center justify-between gap-3 px-4 py-2 text-start transition-colors hover:bg-surface active:bg-surface cursor-pointer" >
              <div className="flex items-center gap-2">
                <Avatar avatar={room.avatar} online={room.online} />
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-tight text-text-h">{room.name}</span>
                  <span className="truncate text-sm text-text">{room.message}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="shrink-0 text-xs text-text">{dayjs(room.messageTime).format("M월 D일")}</span>
                <span className={`flex size-5 shrink-0 items-center justify-center rounded-full ${room.unread && "bg-rose-500"} text-[10px] font-semibold text-white`}>
                  {room.unread && room.unread}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>


      {/* 모달 */}
      {/* key - 모달 컴포넌트의 키를 선택된 채팅방의 아이디로 설정하여 모달을 다시 렌더링할 때 컴포넌트를 재생성하고 상태를 초기화합니다. */}
      <ChatDetailModal
        key={selectedChatId}
        isOpen={openChatDetailModal}
        onClose={() => setOpenChatDetailModal(false)}
        roomId={selectedChatId}
      />
    </div>
  );
}
