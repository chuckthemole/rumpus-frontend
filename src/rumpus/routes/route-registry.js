import React from "react";

import {
    createRouteElement,
    UserLandingPageIndex,
    UserProfilePage,
    PlaceholderPage
} from "@rumpushub/common-react";

function SecurityPage() {
    return (
        <PlaceholderPage
            title="Security"
            description="
                Manage passwords, sessions,
                MFA, and account protection settings.
            "
        />
    );
}

function PreferencesPage() {
    return (
        <PlaceholderPage
            title="Preferences"
            description="
                Configure account preferences and personalization settings.
            "
        />
    );
}

function NotificationsPage() {
    return (
        <PlaceholderPage
            title="Notifications"
            description="
                Configure notification delivery and communication preferences.
            "
        />
    );
}

function RetentionPoliciesPage() {
    return (
        <PlaceholderPage
            title="Retention Policies"
            description="
                Manage data retention and archival settings.
            "
        />
    );
}

function AuditLogsPage() {
    return (
        <PlaceholderPage
            title="Audit Logs"
            description="
                Review security events and account activity history.
            "
        />
    );
}

function ApiKeysPage() {
    return (
        <PlaceholderPage
            title="API Keys"
            description="
                Create and manage developer API credentials.
            "
        />
    );
}

function WebhooksPage() {
    return (
        <PlaceholderPage
            title="Webhooks"
            description="
                Configure outbound webhook integrations and event subscriptions.
            "
        />
    );
}

/**
 * -----------------------------------------------------------------------------
 * Home Route Registry
 * -----------------------------------------------------------------------------
 */

export const HOME_ROUTE_ELEMENTS = {

    index:
        createRouteElement(
            UserLandingPageIndex
        ),

    profile:
        createRouteElement(
            UserProfilePage,
            {
                requireAuth: true,
            }
        ),

    security:
        createRouteElement(SecurityPage),

    preferences:
        createRouteElement(PreferencesPage),

    notifications:
        createRouteElement(NotificationsPage),

    retention:
        createRouteElement(RetentionPoliciesPage),

    audit:
        createRouteElement(AuditLogsPage),

    "api-keys":
        createRouteElement(ApiKeysPage),

    webhooks:
        createRouteElement(WebhooksPage),
};