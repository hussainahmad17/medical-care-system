import Professional from "../models/Pro.js";

// Create new professional
export const createProfessional = async (req, res, next) => {
  try {
    const { name, email, phone, role, experience, specialization, documents, references, status, adminNotes } = req.body;

    const professionalExists = await Professional.findOne({ email });
    if (professionalExists) {
      return res.status(400).json({ message: "Professional already exists" });
    }

    const professional = await Professional.create({
      name,
      email,
      phone,
      role,
      experience,
      specialization,
      documents,
      references,
      status,
      adminNotes,
    });

    res.status(201).json(professional);
  } catch (error) {
    next(error);
  }
};

// Get all professionals
export const getProfessionals = async (req, res, next) => {
  try {
    const professionals = await Professional.find();
    res.json(professionals);
  } catch (error) {
    next(error);
  }
};

// Get professional by ID
export const getProfessionalById = async (req, res, next) => {
  try {
    const professional = await Professional.findById(req.params.id);
    if (!professional) return res.status(404).json({ message: "Professional not found" });
    res.json(professional);
  } catch (error) {
    next(error);
  }
};

// Update professional
export const updateProfessional = async (req, res, next) => {
  try {
    const { name, email, phone, role, experience, specialization, documents, references, status, adminNotes } = req.body;

    const professional = await Professional.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, role, experience, specialization, documents, references, status, adminNotes },
      { new: true, runValidators: true }
    );

    if (!professional) return res.status(404).json({ message: "Professional not found" });

    res.json(professional);
  } catch (error) {
    next(error);
  }
};

// Delete professional
export const deleteProfessional = async (req, res, next) => {
  try {
    const professional = await Professional.findByIdAndDelete(req.params.id);
    if (!professional) return res.status(404).json({ message: "Professional not found" });
    res.json({ message: "Professional deleted successfully" });
  } catch (error) {
    next(error);
  }
};
