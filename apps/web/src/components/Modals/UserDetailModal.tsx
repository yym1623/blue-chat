import { Link } from "react-router-dom";

// hooks
import { useModalTransition } from "@/hooks/useModalTransition";
// data
import { users } from "@/data/users";
import { me } from "@/data/my/me";

type UserDetailModalProps = {
  open: boolean;
  userId: number | null;
  onClose: () => void;
};

export function UserDetailModal({ open, userId, onClose }: UserDetailModalProps) {
  const { close, backdrop, sheet } = useModalTransition(open, onClose);

  if (!open || !userId) return null;

  const user = users.find((user) => user.id === userId);
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="user-profile-title"
    >
      <button
        type="button"
        aria-label="모달 닫기"
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${backdrop}`}
        onClick={close}
      />

      <div
        className={`relative flex h-full w-full max-w-[500px] flex-col justify-between bg-surface px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-xl transition-transform duration-300 ease-out ${sheet}`}
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-text/10 text-sm text-text-h"
            onClick={close}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          <div className="flex items-center gap-2">
            {me?.id === userId && (
              <button
                type="button"
                className="flex h-8 cursor-pointer items-center rounded-full border border-text/10 px-3 text-sm text-text-h"
              >
                프로필 편집
              </button>
            )}
            <button
              type="button"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-text/10 text-sm text-text-h"
            >
              <span className="material-symbols-outlined text-[18px]">more_horiz</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="flex size-20 items-center justify-center rounded-3xl bg-primary font-semibold">
              {user.avatar ? (
                user.avatar
              ) : (
                <span className="material-symbols-outlined text-4xl!">person</span>
              )}
            </div>
            {user.online && (
              <span className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-surface bg-emerald-400" />
            )}
          </div>

          <h2 id="user-profile-title" className="mt-4 text-lg font-semibold text-text-h">
            {user.name}
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-2 w-full">
            <Link
              to={`/chat/${user.id}`}
              onClick={close}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-bg py-3 text-sm font-medium text-text-h transition-colors hover:text-text"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>채팅하기</span>
            </Link>
            <div className="flex items-center justify-center gap-1.5 rounded-xl bg-bg py-3 text-sm font-medium text-text-h transition-colors hover:text-text">
              <span className="material-symbols-outlined text-[20px]">person</span>
              <span>프로필</span>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
