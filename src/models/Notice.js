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
    text: {
        type: String,
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
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