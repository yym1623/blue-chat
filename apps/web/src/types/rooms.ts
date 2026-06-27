export type Rooms = {
  id: number;
  type?: "dm" | "group";
  name?: string;
  created_at: string;
  updated_at: string;
};