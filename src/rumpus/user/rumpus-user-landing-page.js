import * as React from "react";
import {
    useNavigate,
    useLocation
} from "react-router-dom";

import { UserLandingPage } from "@rumpushub/common-react";
import { RUMPUS_USER_NAVIGATION } from "./navigation/rumpus-user-navigation.config";

export default function RumpusUserLandingPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <UserLandingPage
            activePath={location.pathname}
            onNavigate={(item) => navigate(item.href)}
            sidebarSections={RUMPUS_USER_NAVIGATION}
        />
    );

}