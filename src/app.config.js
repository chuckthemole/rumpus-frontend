const appConfig = {
    auth: {
        enabled: true,
        roles: {
            endpoints: {
                listRoles: "/admin/authority-roles",
                createRole: "/api/user-roles",
                removeRole: "/api/user-roles",
            },
        },
        roles_assignments: {
            endpoints: {
                listRoles: "/api/authority-roles",
                listUserRoles: "/api/user-roles",
                grantRole: "/api/user-roles",
                revokeRole: "/api/user-roles",
            },
        },
    },

    user: {
        enabled: true,
    },

    logger: {
        enabled: true,
    },

    modal: {
        enabled: true,
    },

    theme: {
        enabled: true,
        color: {
            defaultLayout: "Sunset Glow",
            profileId: "global",
        },
        font: {
            slots: {
                primary: {
                    cssVar: "--primary-font",
                    default: "Inter",
                    storageKey: "primaryFont",
                },
                secondary: {
                    cssVar: "--secondary-font",
                    default: "Arial",
                    storageKey: "secondaryFont",
                },
                quill: {
                    cssVar: "--quill-font",
                    default: "Arial",
                    storageKey: "quillFont",
                },
            },
        },
    },
};

export default appConfig;