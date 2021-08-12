export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3003"
      : "https://protected-refuge-65737.herokuapp.com";
  };