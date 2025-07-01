const React = require('react');
import { GET_USER_PATH } from "../rumpus";
import { Common } from "../rumpus";

import { getApi } from "@rumpushub/common-react";

/**
 * Loads the current user from the database
 * 
 * @returns {User}
 */
export async function load_current_user() {
    const api = getApi();
    try {
        const response = await api.get('/api/current_user');
        return response.data;
    } catch (error) {
        const err = new Error('Failed to load current user.');
        err.status = error.response?.status || 500;
        err.info = error.response?.data || null;
        throw err;
    }
}


export async function loader_by_id(id) {
    const requestOptions = {
        method: Common.GET,
        headers: {
            'Accept': 'application/json',
        },
    };
    const response = await fetch(GET_USER_PATH + id, requestOptions);
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.

    if (!response.ok) {
        const error = new Error('An error occurred while fetching user with the id: ' + id);
        // Attach extra info to the error object.
        error.info = await response.json();
        error.status = response.status;
        throw error;
    }

    return response.json();
}