import { TOKEN } from "./constants";

export function saveToken (token: string) {
    localStorage.setItem(TOKEN, token);
}

export function getToken () {
    return localStorage.getItem(TOKEN);
}