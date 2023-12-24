/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}