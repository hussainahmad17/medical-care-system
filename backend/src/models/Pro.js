import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["nurse", "physiotherapist", "caretaker"],
      required: true,
    },

    experience: {
      type: Number, // years of experience
      default: 0,
    },

    specialization: {
      type: String, // e.g., ICU, wound care, geriatrics
    },

    documents: [
      {
        fileName: String,
        fileUrl: String, // stored file path or cloud URL
        type: String, // e.g., "cv", "license", "id-card"
      },
    ],

    references: [
      {
        name: String,
        contact: String,
        relation: String,
      },
    ],

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    adminNotes: {
      type: String, // remarks by admin
    },
  },
  { timestamps: true }
);

const Professional = mongoose.model("Professional", professionalSchema);
export default Professional;
