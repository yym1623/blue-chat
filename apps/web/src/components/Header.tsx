import { useState } from "react";
import { useLocation, useMatches } from "react-router-dom";

// components
import { UserProfileModal } from "@/components/Modals/UserProfileModal";
import { Avatar } from "@/components/Avatar";

// data
import { me } from "@/data/my/me";

export function Header() {
  const location = useLocation();

  const matches = useMatches();
  const handle = matches.at(-1)?.handle as { title?: string };


  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openUserProfileModal, setOpenUserProfileModal] = useState(false);
  
  function handleUserEvent(id: number) {
    setSelectedUserId(id)
    setOpenUserProfileModal(true)
  }

  return (
    <header className="border-text/10 bg-bg px-4 py-3">
      <div className="flex items-center justify-between h-12">
        {location.pathname === '/' ? (
          <button type="button" className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleUserEvent(me?.id)}>
            <Avatar avatar={me?.avatar} online={me?.online} />
            <span className="text-base font-bold tracking-tight text-text-h">{me?.name}</span>
          </button>
        ) : (
          <div className="text-xl font-bold tracking-tight text-text-h">{handle && handle?.title}</div>
        )}

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
            <span className="material-symbols-outlined text-[22px]">add</span>
          </button>
        </div>
      </div>

      <UserProfileModal
        open={openUserProfileModal}
        userId={selectedUserId}
        onClose={() => setOpenUserProfileModal(false)}
      />
    </header>
  );
}
