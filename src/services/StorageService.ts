export const setSessionStorage = (jwt: string) => {
    localStorage.setItem("token", jwt);
}