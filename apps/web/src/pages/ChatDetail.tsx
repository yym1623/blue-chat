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

export function ChatDetail() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center gap-3 border-b border-text/10 bg-surface px-4 py-3">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-amber-400 text-sm font-semibold text-white">
          김
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-text-h">김민수</p>
          <p className="text-xs text-text">마지막 활동 3분 전</p>
        </div>
        <span className="material-symbols-outlined cursor-pointer text-text hover:text-text-h">
          more_vert
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-bg px-4 py-4">
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
  );
}
