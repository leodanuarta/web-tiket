const supabase = require('../database');


const kereta = async(req, res, next) => {
  const {data, error} = await supabase.from('kota').select();
  console.log(data);
  return res.render("keretaF/kereta", {kotas: data});
}

const pembayaranK = async(req, res, next) => {
  return res.render("keretaF/pembayaranKereta")
}

const tiketK = async(req, res, next) => {
  return res.render("keretaF/tiketKereta")
}

const datapemesanK = async(req, res, next) => {
  return res.render("keretaF/datapemesanK")
}

const cetakTiketK = async (req, res, next) => {
  return res.render("keretaF/cetakTiketK")
}

// function untuk cari tiket kereta 
const cariTiketK = async (req, res, next) => {
  const asal = req.body.asalK;
  const tujuan = req.body.tujuanK;
  const berangkat = req.body.berangkatK;
  // const kota = req.body.kotaK;

  const dewasa = req.body.dewasaK;
  const anak = req.body.anakK;
  const bayi = req.body.bayiK;

  const {data, error} = await supabase.from('kota').select().in('stationID', [`${asal}`, `${tujuan}`]);
  

  console.log(asal, tujuan, berangkat, dewasa, anak, bayi, data);

  return res.render('keretaF/tiketKereta', {
    asalK: asal,
    tujuanK: tujuan,
    berangkatK: berangkat,
    dewasaK: dewasa,
    anakK: anak,
    bayiK: bayi,
    kota: data
  });
}

module.exports = {
  kereta,
  pembayaranK,
  tiketK,
  datapemesanK,
  cetakTiketK,
  cariTiketK,
}