export type Participant = {
  id: number;
  user_id: number;
  room_id: number;
  last_read_message_id?: number | null;
  joined_at?: string;
  created_at?: string;
  updated_at?: string ;
};