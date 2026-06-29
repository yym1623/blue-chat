export type Room = {
  id: number;
  type?: "dm" | "group" | null;
  name?: string | null;
  created_at?: string;
  updated_at?: string;
};