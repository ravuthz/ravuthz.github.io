// Place any global data in this file.

// You can import this data from anywhere in your site by using the `import` keyword.
const { VITE_APP_TITLE } = import.meta.env;

export const SITE_COLOR = '#3498db';
export const SITE_TITLE = VITE_APP_TITLE;
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const COPYRIGHT = 'Ravuthz © ' + new Date().getFullYear();

export const MENU_ITEMS = [
    {
        id: "about",
        name: "About",
        link: "#about"
    },
    {
        id: "services",
        name: "Services",
        link: "#services"
    },
    {
        id: "work",
        name: "Work",
        link: "#work"
    },
    {
        id: "blog",
        name: "Blog",
        link: "/blog"
    },
    // {
    //     id: "statistics",
    //     name: "Statistics",
    //     link: "#statistics"
    // },
];