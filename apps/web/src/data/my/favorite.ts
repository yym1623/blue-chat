import { me } from "./me";
import { favorites } from "@/data/favorites";
import { users } from "@/data/users";


export const favorite = users.filter((user) => favorites.some((favorite) => favorite.favorite_user_id === user.id && favorite.user_id === me.id));