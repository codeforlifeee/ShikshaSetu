const Material = require('../models/Material');

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching materials' });
  }
};

exports.uploadMaterial = async (req, res) => {
  const { title, description, fileUrl } = req.body;

  try {
    const newMaterial = new Material({ title, description, fileUrl });
    await newMaterial.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(500).json({ message: 'Error uploading material' });
  }
};
