
const Material = require('../models/Material');

exports.uploadMaterial = async (req, res) => {
  const { title, description } = req.body;
  const file = req.file.path; // Assuming you're using multer for file uploads

  try {
    const newMaterial = await Material.create({ title, description, file, createdBy: req.user.id });
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading material', error: error.message });
  }
};

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find({ createdBy: req.user.id });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching materials', error: error.message });
  }
};
