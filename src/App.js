import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    Footer,
    Header,
    AuthRoot,
    LayoutSettingsProvider,
    useLayoutSettings,
    FontSettingsProvider,
    ColorSettingsProvider,
    RumpusModalProvider,
    LOGGER,
    LocalPersistence,
    EventLoggerProvider,
    CurrentUserProvider
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

    return (
        <LayoutSettingsProvider>
            <div ref={appRef} className="app-container">

                <ColorSettingsProvider
                    target={appElement}
                    persistence={LocalPersistence}
                    defaultLayout="Ocean Blue"
                    profileId={"global"}
                >
                    <FontSettingsProvider
                        target={appElement}
                        persistence={LocalPersistence}
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

                        <RumpusModalProvider appElement={appElement}>

                            <AuthRoot className="app-inner">
                                <CurrentUserProvider>
                                    <EventLoggerProvider>
                                        <Header
                                            header_path={"/view/header"}
                                        />

                                        <main className="app-content columns is-centered">
                                            <div className="column"></div>
                                            <LayoutContent />
                                            <div className="column"></div>
                                        </main>

                                        <Footer footer_path={"/view/footer"} />
                                    </EventLoggerProvider>
                                </CurrentUserProvider>
                            </AuthRoot>

                        </RumpusModalProvider>

                    </FontSettingsProvider>
                </ColorSettingsProvider>
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
