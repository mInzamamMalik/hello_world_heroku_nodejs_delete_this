import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("I am a hello world server");
})
app.get("/profile", (req, res) => {
    res.send("here is your profile");
})
app.get("/about", (req, res) => {
    res.send("new message for about");
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
