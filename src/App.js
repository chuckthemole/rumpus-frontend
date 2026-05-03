import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    LOGGER,
    AppProviders,
    AppShell
} from '@rumpushub/common-react';

export default function App() {
    const appRef = useRef(null);
    const [appElement, setAppElement] = useState(null);

    useEffect(() => {
        if (appRef.current) {
            LOGGER.debug("[App] setting app element to appRef current.");
            setAppElement(appRef.current);
        } else {
            LOGGER.debug("[App] no appRef current.");
        }
    }, []);

    const appConfig = {
        auth: true,
        user: true,
        logger: true,
        modal: true,

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

    return (
        <AppProviders config={appConfig}>
            <AppShell />
        </AppProviders>
    );
}