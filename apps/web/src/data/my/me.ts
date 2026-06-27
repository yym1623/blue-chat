import { users } from "@/data/users";
import { auth } from "@/data/auth";

export const me = users.find((user) => user.id === auth[0].id);