/**
 * -----------------------------------------------------------------------------
 * Default Navigation Configuration
 * -----------------------------------------------------------------------------
 *
 * This can later move into:
 *
 * /home/navigation/user-navigation.config.js
 *
 * if it grows significantly.
 */
export const RUMPUS_USER_NAVIGATION = [
    {
        id: "account",

        label: "Account",

        collapsible: true,

        defaultOpen: true,

        items: [
            {
                id: "profile",

                label: "Profile",

                href: "/home/profile",
            },

            {
                id: "security",

                label: "Security",

                href: "/home/security",
            },

            {
                id: "preferences",

                label: "Preferences",

                href: "/home/preferences",
            },
        ],
    },

    {
        id: "activity",

        label: "Activity",

        collapsible: true,

        defaultOpen: true,

        items: [
            {
                id: "notifications",

                label: "Notifications",

                href: "/home/notifications",
            },

            {
                id: "retention",

                label: "Retention Policies",

                href: "/home/retention",
            },

            {
                id: "audit",

                label: "Audit Logs",

                href: "/home/audit",
            },
        ],
    },

    {
        id: "developer",

        label: "Developer",

        collapsible: true,

        defaultOpen: false,

        items: [
            {
                id: "api-keys",

                label: "API Keys",

                href: "/home/api-keys",
            },

            {
                id: "webhooks",

                label: "Webhooks",

                href: "/home/webhooks",
            },
        ],
    },
];