export type User = {
  id: number;
  auth_id?: number;
  name: string;
  avatar: string;
  online: boolean;
  status: string;
  created_at?: string;
  updated_at?: string;
};
