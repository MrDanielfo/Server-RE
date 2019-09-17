import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AcademicLoadSchema = new Schema({
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
            subject: {
                type: Schema.Types.ObjectId,
                ref: 'Subject'
            },
            first: {
                type: Number
            },
            second: {
                type: Number
            },
            third: {
                type: Number
            },
            fourth : {
                type: Number
            },
            final: {
                type: Number
            }      
        }
    ]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = AcademicLoad = mongoose.model('AcademicLoad', AcademicLoadSchema);