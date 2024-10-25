const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    transaksi_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'transaksi',
        required: true,
    },

    metode_pembayaran: {
        type : String,
    },

    jumlah: {
        type: Number,
    },

    tanggal_pembayaran: {
        type: Date,
    },

    status: {
        type: String,
    },
});

const pembayaran = mongoose.model('pembayaran', produkSchema);
module.exports = pembayaran;