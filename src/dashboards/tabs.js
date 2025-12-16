import React, { useState } from "react";

// * * * Tabs * * *
import Home from "./tab_home";
import MachineDashboard from "./machine_dashboard";
import MachineTaskManager from "./machine_task_manager";
import LogDashboard from "./log_dashboard";
// import ApiDocsSelector from "../buildshift/openapi/api_docs_selector";

// * * * rumpushub * * * 
import {
    LOGGER,
    ApiPersistence,
    AdminSiteSettingsDashboard,
    EntityTaskManager,
} from "@rumpushub/common-react";

export default function Tabs() {

    // Define tabs as an array of objects to simplify state management
    const tabs = [

        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Home tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        { key: "home", label: "Home", component: <Home /> },


        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Machines tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        {
            key: "machines",
            label: "Machines",
            component: (
                <MachineDashboard
                    persistence={
                        ApiPersistence(
                            "/api/arduino_consumer/arduino/get-machines/",
                            "RUMPSHIFT_API"
                        )}
                />
            ),
        },
        
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Machine task manager tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        { key: "machineTaskManager", label: "Machine Task Manager", component: <MachineTaskManager /> },

        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Site settingsz tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        { key: "siteSettings", label: "Site Settings", component: <AdminSiteSettingsDashboard /> },

        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Analytics tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        {
            key: "analytics",
            label: "Analytics",
            component: (
                <CounterSessionChart
                    apiUrl="/api/rumpshift-analytics/counter-session-data/"
                    showControls={true}
                    simplifiedLevel={SimplifiedLevel.DETAILED}
                />
            ),
        },

        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Apis tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        { key: "apis", label: "Apis", component: <ApiDocsSelector /> },

        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        // Logs tab
        // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        { key: "logs", label: "Logs", component: <LogDashboard /> },

    ];

    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (key) => {
        LOGGER.debug(`[Tabs] Switching to tab: ${key}`);
        setActiveTab(key);
    };

    const activeComponent = tabs.find((tab) => tab.key === activeTab)?.component;

    return (
        <>
            <div className="tabs is-boxed">
                <ul>
                    {tabs.map((tab) => (
                        <li key={tab.key} className={activeTab === tab.key ? "is-active" : ""}>
                            <a onClick={() => handleTabClick(tab.key)}>
                                <span>{tab.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="is-centered has-background-light box">
                {activeComponent}
            </div>
        </>
    );
}
