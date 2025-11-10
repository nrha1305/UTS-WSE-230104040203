let students = require("../data/students");

// GET semua mahasiswa
exports.getAll = (req, res) => {
  res.status(200).json(students);
};

// GET mahasiswa by id
exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
  res.status(200).json(student);
};

// POST tambah mahasiswa
exports.create = (req, res) => {
  const { name, npm, major } = req.body;

  if (!name || !npm || !major) {
    return res.status(400).json({ message: "Field name, npm, major wajib diisi" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    npm,
    major
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
};

// PUT update mahasiswa
exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, npm, major } = req.body;

  const student = students.find(s => s.id === id);
  if (!student) return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });

  if (!name || !npm || !major) {
    return res.status(400).json({ message: "Field name, npm, major wajib diisi" });
  }

  student.name = name;
  student.npm = npm;
  student.major = major;

  res.status(200).json(student);
};

// DELETE mahasiswa
exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });

  students.splice(index, 1);
  res.status(204).send();
};
