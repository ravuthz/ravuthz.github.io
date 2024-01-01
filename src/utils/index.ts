import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { $profile } from '@/stores/profile.store';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function apiFetch(input: RequestInfo | URL, init?: RequestInit) {
  const response = await fetch(input, init);
  const results = await response.json();
  return results;
}

export async function fetchProfile() {
  if ($profile.get()) {
    // Fetch profile from github if profile store is empty
    const data = await apiFetch(import.meta.env.PROFILE_URL).catch((error) => {
      console.error(error);
      return {};
    });
    // Set data to profile store ( work only with backend )
    $profile.set(data);
  }
  return $profile.get();
}