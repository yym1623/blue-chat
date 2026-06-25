import { Link } from "react-router-dom";

// data
import { userProfiles } from "@/data/userProfile";

type UserProfileModalProps = {
  open: boolean;
  userId: number | null;
  onClose: () => void;
};

export function UserProfileModal({ open, userId, onClose }: UserProfileModalProps) {
  if (!open || !userId) return null;

  const user = userProfiles.find((user) => user.id === userId);

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
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[500px] rounded-t-3xl bg-surface px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-xl">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-text/20" />

        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div
              className={`flex size-20 items-center justify-center rounded-3xl text-2xl font-semibold text-white ${user.color}`}
            >
              {user.avatar}
            </div>
            {user.online && (
              <span className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-surface bg-emerald-400" />
            )}
          </div>

          <h2 id="user-profile-title" className="mt-4 text-lg font-semibold text-text-h">
            {user.name}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <Link
            to={`/chat/${user.id}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-bg py-3 text-sm font-medium text-text-h transition-colors hover:text-text"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>채팅하기</span>
          </Link>
          <Link
            to={`/user/${user.id}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-bg py-3 text-sm font-medium text-text-h transition-colors hover:text-text"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span>프로필</span>
          </Link>
        </div>
      </div>
    </div>
  );
}