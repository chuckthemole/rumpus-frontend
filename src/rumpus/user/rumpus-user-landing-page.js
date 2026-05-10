import * as React from "react";
import {
    useNavigate,
    useLocation
} from "react-router-dom";

import { UserLandingPage } from "@rumpushub/common-react";

export default function RumpusUserLandingPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <UserLandingPage
            activePath={location.pathname}
            onNavigate={(item) => navigate(item.href)}
        />
    );

}