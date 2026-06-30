import { me } from "@/data/my/me";
import { messages } from "@/data/messages";
import { rooms } from "@/data/rooms";
import { participantsList } from "@/data/participants";
import { users } from "@/data/users";


// 채팅방 입장시 메시지 목록 (말풍선 body)
export function getMessages(roomId: number) {
  return messages
    .filter((message) => message.room_id === roomId)
    .sort((a, b) => a.id - b.id)
    .map((message) => ({
      id: message.id,
      content: message.content,
      name: users.find((u) => u.id === message.user_id)?.name,
      avatar: users.find((u) => u.id === message.user_id)?.avatar,
      online: users.find((u) => u.id === message.user_id)?.online,
      isMe: message.user_id === me.id,
      created_at: message.created_at,
    }));
}

// 채팅방 입장시 참여자 목록 조회 (헤더용)
export function getRoomWithParticipants(roomId: number) {
  const room = rooms.find((r) => r.id === roomId);
  if (!room) return null;

  return {
    id: room.id,
    type: room.type,
    name: room.name,
    participants: participantsList
      .filter((p) => p.room_id === roomId)
      .map((p) => {
        const user = users.find((u) => u.id === p.user_id);
        return {
          participant_name: user?.name,
          avatar: user?.avatar,
        };
      }),
  };
}