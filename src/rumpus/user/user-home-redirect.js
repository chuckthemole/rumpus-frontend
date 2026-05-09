import React from "react";
import {
    Navigate,
} from "react-router-dom";

import {
    useCurrentUser,
    LOGGER
} from "@rumpushub/common-react";

import LandingPageBody from "../landing";

export default function UserHomeRedirect() {
    const { user, loading } = useCurrentUser();

    /**
     * Optional loading state while auth resolves
     */
    if (loading) {
        LOGGER.debug("[UserHomeRedirect] loading...");
        return null;
    }

    /**
     * Logged-in users go to dashboard
     */
    if (user) {
        LOGGER.debug("[UserHomeRedirect] current user:", user);
        return (
            <Navigate
                to="/home"
                replace
            />
        );
    }

    LOGGER.debug("[UserHomeRedirect] returning LandingPageBody.");

    /**
     * Public visitors see marketing page
     */
    return <LandingPageBody />;
}