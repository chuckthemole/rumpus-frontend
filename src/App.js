import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    Footer,
    Header,
    Section,
    RumpusQuillForm,
    RumpusQuill,
    AuthRoot,
    LayoutSettingsProvider,
    useLayoutSettings,
    FontSettingsProvider,
    ColorSettingsProvider,
    RumpusModalProvider,
    getApi,
    LOGGER,
    predefinedColorLayouts
} from '@rumpushub/common-react';

export default function App() {
    const appRef = useRef(null);
    const [appElement, setAppElement] = useState(null);

    useEffect(() => {
        if (appRef.current) {
            setAppElement(appRef.current);
        }
    }, []);

    return (
        <LayoutSettingsProvider>
            <div ref={appRef} className="app-container">
                <RumpusModalProvider appElement={appElement}>
                    <ColorSettingsProvider
                        target={appRef}
                        colorLayouts={predefinedColorLayouts}
                    >

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
                    </ColorSettingsProvider>
                </RumpusModalProvider>
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
