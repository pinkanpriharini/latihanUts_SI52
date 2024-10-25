const produk = require("./models/produk");

const produkIndex = async (req, res)=> {
    try{
        const produk = await produk.find({});
        res.status(200).json({message: 'success'}).json(produk);

    } catch (error) {
        res.status(400).json({message: 'failed'});
    }
}

//fungsi untukmemasukan data produk
const produkInsert = async (req,res) => {
    try{
        const {nama,price,category} = req.body;

        //buat instance produk baru
        const produk = new produk({
            nama,
            deskripsi,
            harga,
            stok,
            kategori_id
        });
        await produk.save();
        res.status(200).json({message: 'success',data: produk});
    } catch( error){
        res.status(400).json({mssage: "failed"});
    }
};
module.exports = { produkIndex, produkInsert}