import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  permissions: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

const Department = mongoose.models.Department || mongoose.model('Department', departmentSchema);
export default Department;
