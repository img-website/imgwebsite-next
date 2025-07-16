import mongoose from 'mongoose';

export const LEAD_STATUS = {
  UPCOMING: 1,
  CAREER: 2,
};

const leadSchema = new mongoose.Schema(
  {
    contact_name: { type: String, default: null },
    mobile_number: { type: String, default: null },
    email: { type: String, default: null },
    organization: { type: String, default: null },
    requirements: { type: String, default: null },
    description: { type: String, default: null },
    budget: { type: String, default: null },
    attachments: { type: [String], default: [] },
    path: { type: String, default: null },
    assign_to: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', default: null },
    assigned_date: { type: Date, default: null },
    status: { type: Number, enum: [1, 2], default: LEAD_STATUS.UPCOMING },
    created_date: { type: Date, default: Date.now },
    modified_date: { type: Date, default: Date.now }
  },
  {
    timestamps: { createdAt: 'created_date', updatedAt: 'modified_date' }
  }
);

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default Lead;
