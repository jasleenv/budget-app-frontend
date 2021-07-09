export const apiUrl = () => {

    return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://whispering-beyond-68503.herokuapp.com"
//comments change it when I deploy herokuapp
}