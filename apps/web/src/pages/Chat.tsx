import { useState } from "react";

// components
import { ChatDetailModal } from "@/components/Modals/ChatDetailModal";
import { Avatar } from '@/components/Avatar'

// data
// import { rooms } from '@/data/rooms'
// import { getRoomWithParticipants } from "@/data/my/room";

import { getChatList } from "@/data/my/room";

console.log(getChatList())

export function Chat() {

  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [openChatDetailModal, setOpenChatDetailModal] = useState(false);
  
  function handleChatEvent(id: number) {
    setSelectedChatId(id)
    setOpenChatDetailModal(true)
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <ul className="">
        {getChatList().map((room) => (
          <li key={room.roomId}>              
            <button type="button" onClick={() => handleChatEvent(room.roomId)} className="flex w-full items-center justify-between gap-3 px-4 py-2 text-start transition-colors hover:bg-surface active:bg-surface cursor-pointer" >
              <div className="flex items-center gap-2">
                <Avatar />
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-tight text-text-h">name</span>
                  <span className="truncate text-sm text-text">message</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="shrink-0 text-xs text-text">yyyy-mm-dd</span>
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white">
                  1
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <ChatDetailModal
        isOpen={openChatDetailModal}
        onClose={() => setOpenChatDetailModal(false)}
        roomId={selectedChatId}
      />
    </div>
  );
}
