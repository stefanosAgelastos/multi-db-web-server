const app = require("./index.js");
const PORT = process.env.NODE_DOCKER_PORT || 9090;

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error on: ${error}`)
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});
