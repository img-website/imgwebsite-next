import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    minlength: [2, 'First name must be at least 2 characters long'],
    maxlength: [30, 'First name cannot exceed 30 characters'],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s]{2,30}$/.test(v);
      },
      message: 'First name should only contain letters and spaces'
    }
  },
  lastName: {
    type: String,
    trim: true,
    minlength: [2, 'Last name must be at least 2 characters long'],
    maxlength: [30, 'Last name cannot exceed 30 characters'],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s]{2,30}$/.test(v);
      },
      message: 'Last name should only contain letters and spaces'
    }
  },
 username: {
    type: String,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [30, 'Username cannot exceed 30 characters'],
    default: null,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9_]{3,30}$/.test(v);
      },
      message: 'Username should only contain letters, numbers, and underscores'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  mobileNumber: {
    type: String,
    validate: {
      validator: function(v) {
        // Allow empty or valid 10-digit number
        return v === '' || v === null || /^[0-9]{10}$/.test(v);
      },
      message: 'If provided, mobile number must be a valid 10-digit number'
    }
  },
  profileImage: {
    type: String,
    default: null
  },
  thumbnailImage: {
    type: String,
    default: null
  },
  largeImage: {
    type: String,
    default: null
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin'
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    default: null,
  },
  permissions: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  deleted_at: {
    type: Date,
    default: null,
  },
  accountStatus: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  lastLogin: {
    type: Date,
    default: null
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  registrationIP: {
    type: String,
    default: null
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  
  // 2FA fields
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String,
    select: false // Won't be included in query results by default
  },
  twoFactorTempSecret: {
    type: String,
    select: false // Temporary secret during setup
  },
  twoFactorPendingSetup: {
    type: Boolean,
    default: false
  },
  backupCodes: [{
    code: String,
    used: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});

// Virtual for full name
adminSchema.virtual('fullName').get(function() {
  if (this.firstName && this.lastName) {
    return `${this.firstName} ${this.lastName}`;
  }
  return '';
});

// Virtual for initials
adminSchema.virtual('initials').get(function() {
  if (this.firstName && this.lastName) {
    return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`.toUpperCase();
  }
  return '';
});

// Method to compare password
adminSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

adminSchema.pre(['find', 'findOne', 'countDocuments'], function () {
  const showDeleted = this.getOptions().showDeleted;
  if (!showDeleted && !this._conditions.deleted_at) {
    this.where({ deleted_at: null });
  }
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin; 