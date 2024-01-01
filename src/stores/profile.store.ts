import { atom } from "nanostores";

export type Profile = any;

// For both server and client 
export const $profile = atom<Record<string, Profile>>({});
export const syncProfile = (data: any) => {
    if (!$profile.get()) {
        $profile.set(data);
    }
    return $profile.get();
}