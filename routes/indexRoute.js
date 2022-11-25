const express = require('express');
const { celebrate } = require('celebrate');
const router = express.Router();

// tanpa login
const { getIndex, cekOrder,
} = require('../controllers/indexController');

// source destinasi tanpa login
const { destinasiBali,  destinasiJakarta, destinasiLombok
, destinasiJogja, destinasiBogor} = require('../controllers/indexDestinasi');

//source kereta
const { kereta, pembayaranK, tiketK, datapemesanK, cetakTiketK } = require('../controllers/indexKereta');


// source pesawat 
const { pesawat, datapemesanP, tiketP, pembayaranP, cetakTiketP, cariTiket } = require('../controllers/indexPesawat');


// source login
const { loginReg } = require('../controllers/indexLogin');


// tarik file ejs disini
// index.ejs
router.get("/", getIndex);

// cekorder.ejs
router.get("/cekorder", cekOrder);

// destinasi ejs
router.get("/destinasibali", destinasiBali);
router.get("/destinasijakarta", destinasiJakarta);
router.get("/destinasibogor", destinasiBogor);
router.get("/destinasijogja", destinasiJogja);
router.get("/destinasilombok", destinasiLombok);


// folder kerta
router.get("/kereta", kereta);
router.get("/kereta/tiket", tiketK);
router.get("/kereta/tiket/data", datapemesanK);
router.get("/kereta/tiket/bayar", pembayaranK);
router.get("/kereta/tiket/e-tiket", cetakTiketK);


// folder pesawat

router.get("/pesawat", pesawat);
router.post("/cariTiket", cariTiket);
router.get("/pesawat/tiket", tiketP);
router.get("/pesawat/tiket/data", datapemesanP);
router.get("/pesawat/tiket/bayar", pembayaranP);
router.get("/pesawat/tiket/e-tiket", cetakTiketP);

// folder users
router.get("/login", loginReg);


module.exports = router;