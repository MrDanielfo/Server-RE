import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userEnrollment: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['SUPER', 'ADMIN', 'TEACHER', 'STUDENT']
    },
    educationalProgram: {
        type: Schema.Types.ObjectId,
        ref: 'EducationalProgram'
    },
    entryPeriod: {
        type: String,
        required: true
    },
    email: [String],
    password: {
        type: String,
        required: true
    },
    phone: [String],
    address: {
        type: String,
        required: false
    },
    academicLoad : [
        {
            type: Schema.Types.ObjectId,
            ref: 'AcademicLoad'
        }
    ]
}, { timestamps: true })

mongoose.Types.ObjectId.prototype.valueOf = function() {
  return this.toString();
};

module.exports = User = mongoose.model('User', UserSchema);
