export const apiURL = () => {

    return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : ""
//comments change it when I deploy herokuapp
}