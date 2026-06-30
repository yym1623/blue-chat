import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";

// components
import { Avatar } from "@/components/Avatar";

//hooks
import { useModalTransition } from "@/hooks/useModalTransition";

// data
// import { getRoomWithParticipants } from "@/data/my/message";
import { getMessages } from "@/data/my/message";
import { me } from "@/data/my/me";


type ChatDetailModalProps = {
  isOpen: boolean;
  roomId: number | null;
  onClose: () => void;
};


export function ChatDetailModal({ isOpen, roomId, onClose }: ChatDetailModalProps) {
  const { close, backdrop, sheet } = useModalTransition(isOpen, onClose);

  const [text, setText] = useState('');
  const [roomMessages, setRoomMessages] = useState(() =>
    roomId ? getMessages(roomId) : []
  );

  const isInitialMount = useRef(true);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
  
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return; // 진입 시 smooth 스킵 (위 effect가 auto로 처리)
    }
  
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [roomMessages]);
  
  useEffect(() => {
    if (!isOpen) {
      isInitialMount.current = true; // 닫을 때 리셋
      return;
    }
  
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'auto' });
    });
  }, [isOpen, roomId]);
  
  if (!isOpen || !roomId) return null;


  function handleAdd(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (e.nativeEvent.isComposing) return;

      const content = text.trim();
      if(!content) return

      setRoomMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          content,
          name: me?.name,
          avatar: me?.avatar,
          online: me?.online,
          isMe: true,
          created_at: new Date().toISOString(),
        },
      ])

      // 입력 초기화
      setText('');
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="모달 닫기"
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${backdrop}`}
        onClick={close}
      />

      <div
        className={`relative flex h-full bg-bg w-full  max-w-[500px] flex-col shadow-xl transition-transform duration-300 ease-out ${sheet}`}
      >
        <div className="flex min-h-0 flex-1 flex-col relative">
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="뒤로가기"
                onClick={close}
                className="flex items-center justify-center rounded-full cursor-pointer text-text transition-colors hover:bg-bg hover:text-text-h active:bg-bg/80"
              >
                <span className="material-symbols-outlined">keyboard_arrow_left</span>
              </button>
              <button type="button" className="flex items-center gap-2.5 cursor-pointer">
                <Avatar avatar="" online={false} />
                <span className="text-base font-bold tracking-tight text-text-h">이름</span>
              </button>

            </div>

            <div className={`flex items-center gap-1 ${location.pathname === '/user' ? "hidden" : ""}`}>
              <button
                type="button"
                aria-label="검색"
                className="flex size-9 items-center justify-center rounded-full cursor-pointer text-text transition-colors hover:bg-bg hover:text-text-h active:bg-bg/80"
              >
                <span className="material-symbols-outlined text-[22px]">search</span>
              </button>
              <button
                type="button"
                aria-label="추가"
                className="flex size-9 items-center justify-center rounded-full cursor-pointer text-text transition-colors hover:bg-bg hover:text-text-h active:bg-bg/80"
              >
                <span className="material-symbols-outlined text-[22px]">more_horiz</span>
              </button>
            </div>
          </div>

          {/* messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            <p className="text-center text-xs text-text">2026년 6월 23일 월요일</p>

            {roomMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
              >
                {message.isMe ? (
                  <div className="flex max-w-[75%] items-end gap-1">
                    <span className="text-[10px] text-text">
                      {dayjs(message.created_at).format("M월 D일")}
                    </span>
                    <div className="rounded-xl rounded-tr-sm bg-[#fee500] px-3 py-2 text-sm leading-relaxed text-[#191919] shadow-sm">
                      <p>{message.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex max-w-[75%] items-start gap-2">
                    <Avatar avatar={message.avatar} online={message.online} />

                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-xs font-medium text-text-h">{message.name}</span>
                      <div className="flex items-end gap-1">
                        <div className="rounded-xl rounded-tl-sm bg-surface px-3 py-2 text-sm leading-relaxed text-text-h shadow-sm">
                          <p>{message.content}</p>
                        </div>
                        <span className="text-[10px] text-text">
                          {dayjs(message.created_at).format("M월 D일")}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* 채팅 동적 아래 고정 */}
            <div ref={bottomRef} />
          </div>

          {/* message input */}
          <div className="border-t border-text/10 bg-surface px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-end gap-2">
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-text hover:bg-bg"
              >
                <span className="material-symbols-outlined text-[22px]">add</span>
              </button>

              <div className="flex min-h-9 flex-1 items-center rounded-2xl bg-bg px-3 py-2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {handleAdd(e)}}
                  placeholder="메시지를 입력하세요"
                  className="w-full bg-transparent text-sm text-text-h outline-none placeholder:text-text"
                />
              </div>

              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-text hover:bg-bg"
              >
                <span className="material-symbols-outlined text-[22px]">sentiment_satisfied</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}