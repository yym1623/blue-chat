import { useState } from "react";

// COMPONENTS
import { UserProfileModal } from "@/components/Modals/UserProfileModal";
import { Avatar } from "@/components/Avatar";

// data
import { userFavorites, userProfiles } from "@/data/userProfile";

export function Home() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openUserProfileModal, setOpenUserProfileModal] = useState(false);
  
  function handleUserEvent(id: number) {
    setSelectedUserId(id)
    setOpenUserProfileModal(true)
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <section className="border-b border-text/10 px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-text-h">즐겨찾기</h2>
          <span className="text-xs text-text">{userFavorites.length}명</span>
        </div>
        <ul className="flex gap-4 overflow-x-auto pb-1">
          {userFavorites.map((user) => (
            <li key={user.id} className="flex w-16 shrink-0 flex-col items-center gap-1.5">
              <button onClick={() => handleUserEvent(user.id)}>
                <Avatar
                  avatar={user.avatar}
                  color={user.color}
                  online={user.online}
                />
              </button>
              <span className="w-full truncate text-center text-xs text-text-h">
                {user.name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-sm font-semibold text-text-h">친구</h2>
          <span className="text-xs text-text">{userProfiles.length}명</span>
        </div>
        <ul>
          {userProfiles.map((user) => (
            <li key={user.id}>
              <button onClick={() => handleUserEvent(user.id)} className="flex w-full items-center gap-3 px-4 py-3 text-start transition-colors hover:bg-surface active:bg-surface">
                <Avatar
                  avatar={user.avatar}
                  color={user.color}
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


      <UserProfileModal
        open={openUserProfileModal}
        userId={selectedUserId}
        onClose={() => setOpenUserProfileModal(false)}
      />
    </div>
  );
}
