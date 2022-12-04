const supabase = require('../database');

const getIndex = async (req, res, next) => {
  return res.render("index")
}

const cekOrder = async (req, res, next) => {
  return res.render("cekorder")
}

async function dataTiket(ket, nTikets){
  let results = [];
  if (ket == 'kereta'){
    const {data: penumpangs, error: errPenumpang} = await supabase
      .from('tiketKereta')
      .select()
      .in('tiketpid', nTikets)
    results = penumpangs
    return results;
  } 
  else {
    const {data: penumpangs, error: errPenumpang} = await supabase
      .from('tiketPesawat')
      .select()
      .in('tiketpid', nTikets)
    results = penumpangs
    return results;
  }
}

const Etiket = async (req, res, next) => {
  let email = req.body.inputEmail;
  let orderID = (req.body.inputOrderId) - 7000;


  const {data: tiket, error: errortiket} = await supabase 
    .from('transaksi')
    .select()
    .eq('transaksiID', orderID)

  let noTikets = tiket[0].noTiket;
  let keterangan = tiket[0].keterangan;

  console.log(noTikets, keterangan)

  const results = await dataTiket(keterangan, noTikets);

  console.log(results)

  const {data: dataPemesan, errors: errorsPemesan} = await supabase
    .from('pemesan')
    .select()
    .eq('pemesanID', results[0].pemesanID)

  console.log(dataPemesan)

  if (email === dataPemesan[0].emailPemesan && keterangan == 'pesawat'){
    console.log('ini sama')
    const {data: allData, error: errorallData} = await supabase
    .from('rutePesawat')
    .select(`*, 
            pesawat(namaMaskapai), asal: provinsiAsal(namaProvinsi, namaBandara), tujuan: provinsiTujuan(namaProvinsi, namaBandara)`)
    .eq('ruteID', results[0].ruteP);

    return res.render('pesawatF/cetakTiketP', {
      orderID: orderID + 7000,
      dataP: allData, 
      dataPenumpang: results,
      ket : "cekorder"
    })
  } else {
    console.log('ini tidak sama')
    const {data: allData, error: errorallData} = await supabase
    .from('ruteKereta')
    .select(`*, 
            kereta(namaKereta), asal: kotaAsal(namaKota, namaStasiun), tujuan: kotaTujuan(namaKota, namaStasiun)`)
    .eq('ruteID', results[0].ruteK);
    console.log(allData);

    return res.render('keretaF/cetakTiketK', {
      orderID: orderID + 7000,
      dataK: allData, 
      dataPenumpang: results,
      ket : "cekorder", 
      dataPemesan: dataPemesan,
    })
  }
}

// function untuk sudah ada akun
const userIndex = async (req, res, next) => {
  console.log(req.body.email)
  console.log(req.body.password)

  const { data:d1, error:err1 } = await supabase.auth.signInWithPassword({
    email: req.body.email,
    password: req.body.password,
  })
  const { data: { users }, error } = await supabase.auth.admin.listUsers()
  console.log(d1, err1)
}



module.exports ={
  getIndex,
  cekOrder,
  Etiket,
  userIndex,
};