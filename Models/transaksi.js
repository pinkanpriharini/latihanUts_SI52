const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
    produk_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'produk_id',
        required: true,
    },

    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pengguna',
        required: true,
    },

    jumlah: {
        type: Number,
    },

    total_harga: {
        type: Number,
    },

    tanggal_transaksi: {
        type : Date,
    },
});

const transaksi = mongoose.model('transaksi', transaksiSchema);
module.exports = transaksi;