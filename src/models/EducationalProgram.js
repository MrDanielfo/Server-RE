import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EducationalProgramSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    yearCreation: {
        type: String,
        required: true
    },
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject'
        }
    ],
    fieldStudy: {
        type: Schema.Types.ObjectId,
        ref: 'FieldStudy'
    }

}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = mongoose.model('EducationalProgram', EducationalProgramSchema); 