import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.ts";
import { Note } from "./models/note.model.ts";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/api/notes/", async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (e: any) {
    console.error("unexpected error : ", e);

    res.status(500).json({ message: "Failed to fetch notes " });
  }
});

app.post("/api/notes/create", async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(200).json({ message: "note Created successfully ", note });
  } catch (e: any) {
    console.error("error in note creation ", e.message);

    res.status(500).json({ message: "Internal Server error" });
  }
});

app.put("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateNote = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateNote) {
      return res.status(404).json({ meeesge: "Note not found " });
    }

    res.status(200).json({ updateNote });
  } catch (e: any) {
    console.error("error in  update notes : ", e);
    res.status(500).json({ message: "Internal Server error" });
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not Found" });
    }

    res
      .status(200)
      .json({ message: "Note Deleted Success", body: deletedNote });
  } catch (e: any) {
    console.error("error in deleting notes : ", e.message);

    res.status(500).json({ message: "Internal Server error" });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Started at http://localhost:${PORT}`);
});
