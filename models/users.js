const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

function getESTDate() {
    return moment.tz("America/New_York").toDate();
}

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: { type: Date, default: getESTDate },
    updated: { type: Date, default: getESTDate }
});

UserSchema.pre('save', function(next) {
    this.updated = getESTDate(); 
    next();
});

module.exports = mongoose.model('User', UserSchema);