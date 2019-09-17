import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        default: false
    }
}, { timestamps: true});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = Notice = mongoose.model('Notice', NoticeSchema);