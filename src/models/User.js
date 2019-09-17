import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
        type: Schema.Types.ObjectId,
        ref: 'EntryPeriod'
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
    gender: {
        type: String,
        enum: ['HOMBRE', 'MUJER']
    },
    dateofBirth: {
        type: Date,
        required: true
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

UserSchema.pre("save", function (next) {
    let user = this;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
})

module.exports = mongoose.model('User', UserSchema);
