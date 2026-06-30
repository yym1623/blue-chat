import { me } from "@/data/my/me";
import { rooms } from "@/data/rooms";
import { participantsList } from "@/data/participants";
import { users } from "@/data/users";
import { messages } from "@/data/messages";


// 내가 참여한 방 목록
export function getChatList() {
  return rooms.filter((room) =>
    // 내가 참여한 방 중에서
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

    // 안읽은 메시지 개수
    const unread = participantsList.find((p) => p.room_id === room.id && p.user_id === me.id)?.last_read_message_id;

    return {
      roomId: room.id,
      name: room.name ?? other?.name,
      avatar: other?.avatar,
      message: lastMessage?.content,
      messageTime: lastMessage?.created_at,
      online: other?.online,
      unread: unread,
    };
  });
}