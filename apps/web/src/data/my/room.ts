import { me } from "@/data/my/me";
import { rooms } from "@/data/rooms";
import { participantsList } from "@/data/participants";
import { users } from "@/data/users";
import { messages } from "@/data/messages";


// 채팅방 입장시 참여자 목록 조회
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


// 채팅방 입장시 메시지 목록 (말풍선 body)
export function getRoomMessages(roomId: number) {
  return messages
    .filter((message) => message.room_id === roomId)
    .sort((a, b) => a.id - b.id)
    .map((message) => ({
      id: message.id,
      content: message.content,
      user_id: message.user_id,
      isMe: message.user_id === me.id,
      created_at: message.created_at,
    }));
}


// 내가 참여한 방 목록
export function getChatList() {
  return rooms.filter((room) =>
    participantsList.some(
      (p) => p.room_id === room.id && p.user_id === me.id
    )
  ).map((room) => {
    // 이 방 참여자
    const parts = participantsList.filter((p) => p.room_id === room.id);

    // 1:1이면 상대 유저 (나 제외)
    const other = parts
      .map((p) => users.find((u) => u.id === p.user_id))
      // .find((u) => u && u.id !== myUserId); // 인자 구분
      .find((u) => u && u.id !== me.id);

    // 마지막 메시지
    const lastMessage = messages
      .filter((m) => m.room_id === room.id)
      .at(-1);

    return {
      roomId: room.id,
      name: room.name ?? other?.name,
      avatar: other?.avatar,
      message: lastMessage?.content,
      // unread, date ...
    };
  });
}