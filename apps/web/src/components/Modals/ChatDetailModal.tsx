import { useModalTransition } from "@/hooks/useModalTransition";

// components
import { Avatar } from "@/components/Avatar";

const messages = [
  {
    id: 1,
    type: "other" as const,
    text: "안녕! blue-chat 테스트 중이야?",
    time: "오후 2:10",
  },
  {
    id: 2,
    type: "me" as const,
    text: "응 지금 홈이랑 채팅 화면 만들고 있어 ㅎㅎ",
    time: "오후 2:11",
  },
  {
    id: 3,
    type: "other" as const,
    text: "오 카카오톡 느낌 나게 해줘",
    time: "오후 2:12",
  },
  {
    id: 4,
    type: "me" as const,
    text: "알겠어! 일단 가볍게 입혀봤어",
    time: "오후 2:13",
  },
  {
    id: 5,
    type: "other" as const,
    text: "괜찮은데? 말풍선 색도 비슷하게 가면 좋겠다",
    time: "오후 2:14",
  },
  {
    id: 6,
    type: "me" as const,
    text: "노란색 말풍선은 카톡 시그니처지 ㅋㅋ",
    time: "오후 2:15",
  },
] as const;

type ChatDetailModalProps = {
  open: boolean;
  chatId: number | null;
  onClose: () => void;
};

export function ChatDetailModal({ open, chatId, onClose }: ChatDetailModalProps) {
  const { close, backdrop, sheet } = useModalTransition(open, onClose);

  if (!open || !chatId) return null;

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

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                    message.type === "me"
                      ? "rounded-tr-sm bg-[#fee500] text-[#191919]"
                      : "rounded-tl-sm bg-surface text-text-h"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`mt-1 text-[10px] ${
                      message.type === "me" ? "text-[#191919]/60" : "text-text"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
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