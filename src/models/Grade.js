import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    academicLoad: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicLoad'
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
    final: {
        type: Number
    },
    approved: {
        type: Boolean
    }
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model('Grade', GradeSchema);