import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    educationalProgram: {
        type: Schema.Types.ObjectId,
        ref: 'EducationalProgram'
    },
    credits: {
        type: Number,
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    classroom: {
        type: String,
        required: true
    },
    schedule: [
        {
            time: {
                type: String,
                required: true
            },   
        }
    ]
    
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = mongoose.model('Subject', SubjectSchema);