const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const championStatsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    profileImage: {
        type: String,
        default: "https://firebasestorage.googleapis.com/v0/b/travel-the-worlds.appspot.com/o/profiles%2Ficons8-user-90.png?alt=media&token=0ce400b7-93a6-46ef-b9d1-23ca0b626d79"
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    country: String,
    userLocation: {
        lat: {
            type: Number,
            require: true
        },
        lng: {
            type: Number,
            require: true
        }
    },
    savedPosts: [{
        type: Schema.Types.ObjectId,
        default: []
    }],
    totalSavedPosts: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('ChampionStats', championStatsSchema);