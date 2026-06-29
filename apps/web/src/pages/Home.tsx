import { useState } from "react";

// COMPONENTS
import { UserDetailModal } from "@/components/Modals/UserDetailModal";
import { Avatar } from "@/components/Avatar";

// data
import { me } from "@/data/my/me";
import { users } from "@/data/users";
import { favorite } from "@/data/my/favorites";

export function Home() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openUserDetailModal, setOpenUserDetailModal] = useState(false);
  
  function handleUserEvent(id: number) {
    setSelectedUserId(id)
    setOpenUserDetailModal(true)
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <section className="border-b border-text/10 px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-text-h">즐겨찾기</h2>
          <span className="text-xs text-text">{favorite.length}명</span>
        </div>
        <ul className="flex gap-4 overflow-x-auto">
          {favorite.map((user) => (
            <li key={user.id} className="flex shrink-0 flex-col items-center gap-1.5">
              <button type="button" onClick={() => handleUserEvent(user.id)} className="cursor-pointer">
                <Avatar
                  avatar={user.avatar}
                  online={user.online}
                />
                <span className="w-full truncate font-bold text-center text-xs text-text-h">
                  {user.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-sm font-semibold text-text-h">친구</h2>
          <span className="text-xs text-text">{users.length}명</span>
        </div>
        <ul>
          {users.filter((user => user.id !== me.id)).map((user) => (
            <li key={user.id}>
              <button type="button" onClick={() => handleUserEvent(user.id)} className="flex w-full items-center gap-3 px-4 py-3 text-start transition-colors hover:bg-surface active:bg-surface cursor-pointer">
                <Avatar
                  avatar={user.avatar}
                  online={user.online}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-text-h">{user.name}</p>
                  {user.status && (
                    <p className="truncate text-sm text-text">{user.status}</p>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <UserDetailModal
        open={openUserDetailModal}
        userId={selectedUserId}
        onClose={() => setOpenUserDetailModal(false)}
      />
    </div>
  );
}
