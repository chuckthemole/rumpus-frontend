import React, { useMemo } from "react";

import Home from "./tab_home";
import LogDashboard from "./log_dashboard";
import ApiDocsSelector from "../rumpus/openapi/api_docs_selector";
import EditPersonalPage from "../rumpus/personal_page_editor";

import {
    LOGGER,
    AdminSiteSettingsDashboard,
    LocalStorageExplorer,
    AdminUserDashboard,
} from "@rumpushub/common-react";

export default function AdminDashboard() {
    /**
     * -------------------------------------------------------------------------
     * Debug imported dependencies (MOST IMPORTANT STEP)
     * -------------------------------------------------------------------------
     */
    LOGGER.debug("[AdminDashboard] import check", {
        Home,
        LogDashboard,
        ApiDocsSelector,
        EditPersonalPage,
        AdminSiteSettingsDashboard,
        LocalStorageExplorer,
        AdminUserDashboard,
    });

    /**
     * -------------------------------------------------------------------------
     * Tabs definition
     * -------------------------------------------------------------------------
     */
    const tabs = useMemo(() => {
        const rawTabs = [
            {
                key: "home",
                label: "Home",
                component: <Home />,
            },

            {
                key: "siteSettings",
                label: "Site Settings",
                component: <AdminSiteSettingsDashboard />,
            },

            {
                key: "analytics",
                label: "Analytics",
                component: <div>Analytics (placeholder)</div>,
            },

            {
                key: "apis",
                label: "Apis",
                component: <ApiDocsSelector />,
            },

            {
                key: "personalPage",
                label: "Personal Page",
                component: <EditPersonalPage />,
            },

            {
                key: "localStorageExplorer",
                label: "Local Storage Explorer",
                component: <LocalStorageExplorer />,
            },

            {
                key: "logs",
                label: "Logs",
                component: <LogDashboard />,
            },
        ];

        /**
         * ---------------------------------------------------------------------
         * Validate tab integrity BEFORE rendering (this catches your error)
         * ---------------------------------------------------------------------
         */
        rawTabs.forEach((tab) => {
            if (!tab.component) {
                LOGGER.error("[AdminDashboard] TAB HAS NO COMPONENT", tab);
            }

            if (tab.component === undefined) {
                LOGGER.error("[AdminDashboard] TAB COMPONENT IS UNDEFINED", {
                    tab,
                    possibleCause:
                        "likely bad import/export or missing default export",
                });
            }
        });

        LOGGER.debug("[AdminDashboard] tabs resolved", rawTabs);

        return rawTabs;
    }, []);

    /**
     * -------------------------------------------------------------------------
     * Guard: ensure no undefined components in render path
     * -------------------------------------------------------------------------
     */
    const safeTabs = useMemo(() => {
        return tabs.filter((t) => {
            const ok = t.component !== undefined && t.component !== null;

            if (!ok) {
                LOGGER.warn("[AdminDashboard] filtering invalid tab", t);
            }

            return ok;
        });
    }, [tabs]);

    return (
        <AdminUserDashboard
            tabs={safeTabs}
            initialTab="home"
        />
    );
}