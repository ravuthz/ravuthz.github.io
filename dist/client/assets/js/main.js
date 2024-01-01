document.addEventListener('alpine:init', () => {
    Alpine.data('navbar', () => ({
        mobileMenu: false,
        triggerMobileNavItem(id) {
            mobileMenu = false;
            this.triggerNavItem(id)
        }
    }))
});
