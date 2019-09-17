import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AcademicLoadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    period: {
        type: Date,
        required: true
    },
    grades: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Grade'
        }
    ]
}, { timestamps: true });

Schema.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = mongoose.model('AcademicLoad', AcademicLoadSchema);