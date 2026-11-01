import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    LOGGER,
    AppProviders,
    AppShell
} from '@rumpushub/common-react';

import appConfig from './app.config';

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

    return (
        <AppProviders config={appConfig}>
            <AppShell />
        </AppProviders>
    );
}