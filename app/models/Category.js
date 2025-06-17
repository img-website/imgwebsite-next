import mongoose from 'mongoose';
import slugify from 'slugify';

const categorySchema = new mongoose.Schema({
  status: {
    type: Number,
    enum: [1, 2, 3],
    default: 1
  },
  deleted_at: {
    type: Date,
    default: null
  },
  category_name: {
    type: String,
    required: [true, 'Please provide category name'],
    trim: true,
    maxlength: [100, 'Category name cannot be more than 100 characters'],
    unique: true
  },
  slug: {
    type: String,
    unique: true,
    index: true,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please provide category description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: {
    createdAt: 'created_date',
    updatedAt: 'modified_date'
  }
});

categorySchema.pre('validate', async function(next) {
  if (this.isModified('category_name')) {
    let baseSlug = slugify(this.category_name, {
      lower: true,
      strict: true,
      trim: true
    });

    let slugExists = true;
    let counter = 0;
    let candidateSlug = baseSlug;

    while (slugExists) {
      const existing = await mongoose.models.Category.findOne({
        slug: candidateSlug,
        _id: { $ne: this._id }
      });
      if (!existing) {
        slugExists = false;
      } else {
        counter += 1;
        candidateSlug = `${baseSlug}-${counter}`;
      }
    }

    this.slug = candidateSlug;
  }
  next();
});

categorySchema.index({ category_name: 'text', description: 'text' });

categorySchema.pre(['find', 'findOne', 'countDocuments'], function() {
  const showDeleted = this.getOptions().showDeleted;
  if (!showDeleted && !this._conditions.deleted_at) {
    this.where({ deleted_at: null });
  }
});

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
