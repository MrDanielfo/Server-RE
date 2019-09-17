import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FieldStudySchema = new Schema({
    area: {
        type: String,
        required: true
    }
})

Schema.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = FieldStudy = mongoose.model('FieldStudy', FieldStudySchema);