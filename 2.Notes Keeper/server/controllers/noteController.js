import Note from '../models/Note.js'

export const getNotes = async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1});

    res.json(notes);

};

export const createNote = async (req, res) => {
    const {title, content} = req.body;

    if(!title || !content) return res.status(400).json({error: 'Title and content are required'});

    const note = await Note.create({title, content});
    res.status(201).json(note);
}

export const updateNote = async (req, res) => {
    const {id} = req.params;

    const note = await Note.findByIdAndUpdate(id);
    if (!note) return res.status(404).json({error: "Note not found"});

    res.json(note)
}

export const deleteNote = async (req, res) => {
    const {id} = req.params;
    const note = await Note.findByIdAndDelete(id);

    if(!note) return res.status(404).json({error: 'Note note found'})

    res.json({message: 'Note Deleted'})
}