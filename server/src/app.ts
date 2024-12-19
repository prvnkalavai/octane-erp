import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// load env variables from .env (in the server folder or root)
dotenv.config({ path: path.join(__dirname, "../../.env") });

const app = express();

// allow JSON request bodies
app.use(express.json());

// allow cross-origin
app.use(cors());

// For testing, let's do a quick test route:
app.get("/", (req, res) => {
    res.send("Octane ERP Server is running!");
});

// We'll import router modules for customers, orders, etc. in Phase 2
// e.g. app.use("/api/customers", customersRouter);

export default app;