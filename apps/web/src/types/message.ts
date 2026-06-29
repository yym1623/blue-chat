export type Message = {
  id: number;
  room_id: number;
  user_id: number;
  content: string | null;
  created_at?: string;
  updated_at?: string;
};