const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    pengguna_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'pengguna',
        required: true,
    },

    produk_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        required: true,
    },

    jumlah: {
        type: Number,
    },

    status: {
        type: String,
    },

    tanggal_pesanan: {
        type: Date,
    },
});

const pesanan = mongoose.model('pesanan', pesananSchema);
module.exports = pesanan;