import mongoose from 'mongoose';

const schemaEntrySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: [
        'Organization',
        'WebPage',
        'LocalBusiness',
        'LocalBusiness2',
        'BreadcrumbList',
        'Product',
        'Service',
        'NewsArticle'
      ]
    },
    pageUrl: {
      type: String,
      required: function () {
        return !this.isGlobal;
      },
      default: 'global'
    },
    isGlobal: {
      type: Boolean,
      default: false
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },
    created_date: {
      type: Date,
      default: Date.now
    },
    modified_date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: { createdAt: 'created_date', updatedAt: 'modified_date' }
  }
);

const SchemaEntry = mongoose.models.SchemaEntry || mongoose.model('SchemaEntry', schemaEntrySchema);

export default SchemaEntry;
