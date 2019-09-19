import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EntryPeriodSchema = new Schema({
    season: {
        type: String,
        enum: ['PRIMAVERA', 'OTONO']
    },
    year: {
        type: Number,
    }
}, { timestamps: true });

Schema.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};


module.exports = mongoose.model('EntryPeriod', EntryPeriodSchema)
