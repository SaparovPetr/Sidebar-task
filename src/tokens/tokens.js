const animationTokens = {
    fastDuration: "var(--duration-fast)",
    mediumDuration: "var(--duration-medium)",
    slowDuration: "var(--duration-slow)",
    delayShort: "var(--delay-short)",
    delayMedium: "var(--delay-medium)",
    easeInOut: "var(--timing-ease-in-out)",
    ease: "var(--timing-ease)",
};

export const themeTokens = {
    light: {
        ...animationTokens,
        sidebarBackground: "var(--color-sidebar-background-light-default)",
        hoverBackground: "var(--color-sidebar-background-light-hover)",
        activeBackground: "var(--color-sidebar-background-light-active)",
        textColor: "var(--color-text-light-default)",
        hoverTextColor: "var(--color-text-light-hover)",
        activeTextColor: "var(--color-text-light-active)",
        logoColor: "var(--color-text-logo-light-default)",
        buttonBackground: "var(--color-button-background-light-default)",
        activeButtonBackground: "var(--color-button-background-light-active)",
    },
    dark: {
        ...animationTokens,
        sidebarBackground: "var(--color-sidebar-background-dark-default)",
        hoverBackground: "var(--color-sidebar-background-dark-hover)",
        activeBackground: "var(--color-sidebar-background-dark-active)",
        textColor: "var(--color-text-dark-default)",
        hoverTextColor: "var(--color-text-dark-hover)",
        activeTextColor: "var(--color-text-dark-active)",
        logoColor: "var(--color-text-logo-dark-default)",
        buttonBackground: "var(--color-button-background-dark-default)",
        activeButtonBackground: "var(--color-button-background-dark-active)",
    },
};