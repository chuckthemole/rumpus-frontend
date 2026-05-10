import React from "react";

import {
    Navigate,
} from "react-router-dom";

import {
    useCurrentUser,
    LOGGER,
    ComponentLoading,
} from "@rumpushub/common-react";

import LandingPageBody from "../landing";

export default function UserHomeRedirect() {

    const {
        user,
        loading,
    } = useCurrentUser();

    /**
     * -------------------------------------------------------------------------
     * Loading
     * -------------------------------------------------------------------------
     */

    if (loading) {

        LOGGER.debug(
            "[UserHomeRedirect] loading..."
        );

        return (
            <ComponentLoading />
        );
    }

    /**
     * -------------------------------------------------------------------------
     * Authenticated
     * -------------------------------------------------------------------------
     */

    if (user) {

        LOGGER.debug(
            "[UserHomeRedirect] redirecting user",
            user
        );

        return (
            <Navigate
                to="/home"
                replace
            />
        );
    }

    /**
     * -------------------------------------------------------------------------
     * Public
     * -------------------------------------------------------------------------
     */

    LOGGER.debug(
        "[UserHomeRedirect] rendering landing page"
    );

    return (
        <LandingPageBody />
    );
}