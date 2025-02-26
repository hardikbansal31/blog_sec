import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import mysql, { Connection, QueryError, OkPacket } from "mysql2";

import cors from "cors";
const app = express();
app.use(cors());
const port = 9000;

app.use(express.json());

const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Hardik30",
  database: "hardik",
});

connection.connect((err: QueryError | null) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

const blogHandler: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { title, content } = req.query;

  if (typeof title !== "string" || typeof content !== "string") {
    res
      .status(400)
      .json({ error: "Title and content must be provided as strings." });
    return;
  }

  const sql = "INSERT INTO blogs (title, content) VALUES (?, ?)";
  connection.query(
    sql,
    [title, content],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Database error" });
        return;
      }
      res.json({
        message: "Blog created successfully",
        blogId: (result as OkPacket).insertId,
      });
    }
  );
};

app.get("/api/blogs", blogHandler);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
