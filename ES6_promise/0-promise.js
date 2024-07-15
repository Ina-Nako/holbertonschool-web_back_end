export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Response received");
      }, 1000);
    });
}
