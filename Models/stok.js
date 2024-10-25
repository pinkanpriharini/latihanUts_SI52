const mongoose = require("mongoose");

const stokSchema = new mongoose.Schema({
    produk_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        required: true,
    },

    jumlah: {
        type : Number,
    },

    tanggal_update: {
        type: Date,
    },

    keterangan: {
        type: String,
    },

    lokasi: {
        type: String,
    },
});

const stok = mongoose.model('stok', produkSchema);
module.exports = stok;