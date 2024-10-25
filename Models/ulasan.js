const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'produk_id',
        required: true,
    },

    pengguna_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'pengguna',
        required: true,
    },

    rating: {
        type: Number,
    },

    komentar: {
        type: String,
    },

    tanggal_ulasan: {
        type: Date,
    },
});

const ulasan = mongoose.model('ulasan', ulasanSchema);
module.exports = ulasan;