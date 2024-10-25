const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'produk',
        required: true,
    },

    persentase_diskon: {
        type : Number,
    },

    tanggal_mulai: {
        type: Date,
    },

    tanggal_selesai: {
        type: Date,
    },

    keterangan: {
        type: String,
    },
});

const diskon = mongoose.model('diskon', diskonSchema);
module.exports = diskon;