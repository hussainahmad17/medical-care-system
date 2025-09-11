import Service from "../models/Service.js";

// Create new service
export const createService = async (req, res, next) => {
  try {
    const { title, description, icon, isActive } = req.body;

    const service = await Service.create({
      title,
      description,
      icon,
      isActive,
    });

    res.status(201).json(service);
  } catch (error) {
    next(error);
  }
};

// Get all services
export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    next(error);
  }
};

// Get service by ID
export const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch (error) {
    next(error);
  }
};

// Update service
export const updateService = async (req, res, next) => {
  try {
    const { title, description, icon, isActive } = req.body;

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { title, description, icon, isActive },
      { new: true, runValidators: true }
    );

    if (!service) return res.status(404).json({ message: "Service not found" });

    res.json(service);
  } catch (error) {
    next(error);
  }
};

// Delete service
export const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    next(error);
  }
};
