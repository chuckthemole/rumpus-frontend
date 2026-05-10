import * as React from "react";
import {
    useNavigate,
    useLocation
} from "react-router-dom";

import { UserLandingPage, TransitionRender } from "@rumpushub/common-react";
import { RUMPUS_USER_NAVIGATION } from "./navigation/rumpus-user-navigation.config";
import { RequireAuth } from "@rumpushub/common-react/dist/components/auth";

export default function RumpusUserLandingPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <TransitionRender
            delay={1000}
            duration={3000}
            type="scale"
        >
            <RequireAuth>
                <UserLandingPage
                    activePath={location.pathname}
                    onNavigate={(item) => navigate(item.href)}
                    sidebarSections={RUMPUS_USER_NAVIGATION}
                />
            </RequireAuth>
        </TransitionRender>
    );

}