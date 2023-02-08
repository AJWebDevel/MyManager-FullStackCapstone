import { getToken } from "./authManager";

const apiUrl = "/api/List";

export const getAllLists = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            else {
                throw new Error("Unknown error has occured.");
            }
        });
    });
};

export const getListsByUser = () => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/userId`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((resp) => {
            if (resp.ok) {
                return resp.json
            }
            else {
                throw new Error("An unknown error as occured.");
            }
        });
    });
};