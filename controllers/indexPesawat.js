const supabase = require('../database');


const pesawat = async (req, res, next) => {
  const { data, error } = await supabase.from('provinsi').select()
  
  // console.log(data)
  return res.render("pesawatF/pesawat", {provs : data});
}

const pembayaranP = async (req, res, next) => {
  return res.render("pesawatF/pembayaranPesawat")
}

const tiketP = async (req, res, next) => {
  
  return res.render("pesawatF/tiketPesawat");
}

const datapemesanP = async (req, res, next) => {
  return res.render("pesawatF/datapemesanP")
}

const cetakTiketP = async (req, res, next) => {
  return res.render("pesawatF/cetakTiketP")
}

// function untuk mengambil data 
const cariTiket = async (req, res, next) => {
  const asal = req.body.asalP;
  const tujuan = req.body.tujuanP;
  const berangkat = req.body.berangkatP;
 
  const kelas = req.body.kelasP;
  const dewasa = req.body.dewasaP;
  const anak = req.body.anakP;
  const bayi = req.body.bayiP;

  const {data, error} = await supabase.from('provinsi').select().in('airportID', [`${asal}`, `${tujuan}`]);

  console.log(asal, tujuan, berangkat, kelas, dewasa, anak, bayi, data);
  // // console.log(sql);
  return res.render('pesawatF/tiketPesawat'
  , {
    asalP: asal,
    tujuanP: tujuan,
    berangkatP: berangkat,
    kelasP: kelas,
    dewasaP: dewasa,
    anakP: anak,
    bayiP: bayi,
    prov: data
  });

}




module.exports ={
  pesawat,
  pembayaranP,
  tiketP,
  datapemesanP,
  cetakTiketP,
  cariTiket,
}