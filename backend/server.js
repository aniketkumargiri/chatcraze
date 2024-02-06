import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

// app
const app = express();

// port
const PORT = process.env.PORT || 5000;

// environment variables configuration
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.json())

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello worldAni!!");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port: ${PORT}`);
});