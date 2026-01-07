import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    Footer,
    Header,
    Section,
    RumpusQuillForm,
    RumpusQuill,
    AuthRoot,
    useColorSettings,
    LayoutSettingsProvider,
    useLayoutSettings,
    FontSettingsProvider,
    getApi,
    LOGGER
} from '@rumpushub/common-react';

export default function App() {
    const appRef = useRef(null);
    const { initColors } = useColorSettings();

    useEffect(() => {
        initColors();
    }, []);

    return (
        <LayoutSettingsProvider>
            <div ref={appRef} className="app-container">
                <FontSettingsProvider
                    target={appRef}
                    persist
                    slots={{
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
                            storageKey: "quillFont"
                        }
                    }}
                >
                    <AuthRoot className="app-inner">
                        <Header
                            header_path={"/view/header"}
                        />

                        <main className="app-content columns is-centered">
                            <div className="column"></div>
                            <LayoutContent />
                            <div className="column"></div>
                        </main>

                        <Footer footer_path={"/view/footer"} />
                    </AuthRoot>

                </FontSettingsProvider>
            </div>
        </LayoutSettingsProvider>
    );
}

// Separate component to consume layout context for main content
function LayoutContent() {
    const { layout } = useLayoutSettings();

    return (
        <div className={`column ${layout.columnWidth}`}>
            <Outlet />
        </div>
    );
}
