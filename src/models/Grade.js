import mongoose from 'moongose';
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
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