import type { User } from "@/types/user";

export const userFavorites: User[] = [
  {
    id: 1,
    name: "김민수",
    avatar: "김",
    color: "bg-amber-400",
    online: true,
  },
  {
    id: 2,
    name: "이서연",
    avatar: "이",
    color: "bg-emerald-400",
    online: true,
  },
  {
    id: 3,
    name: "박지훈",
    avatar: "박",
    color: "bg-rose-400",
    online: false,
  },
];

export const userProfiles: User[] = [
  ...userFavorites,
  {
    id: 4,
    name: "최유진",
    status: "오늘도 화이팅!",
    avatar: "최",
    color: "bg-sky-500",
    online: true,
  },
  {
    id: 5,
    name: "정하늘",
    status: "운동 갔다 올게요 💪",
    avatar: "정",
    color: "bg-violet-400",
    online: false,
  },
  {
    id: 6,
    name: "한소율",
    status: "맛있는 거 먹는 중",
    avatar: "한",
    color: "bg-orange-400",
    online: true,
  },
  {
    id: 7,
    name: "오준서",
    status: "회의 중...",
    avatar: "오",
    color: "bg-teal-400",
    online: false,
  },
];