const supabase = require('../database');


const pesawat = async (req, res, next) => {
  const { data, error } = await supabase.from('provinsi').select()
  
  // console.log(req.body.userFN)
  console.log(req.body)
  
  // console.log(data)
  return res.render("pesawatF/pesawat", {provs : data});
}

const pembayaranP = async (req, res, next) => {
  let key = req.params.ruteP;
  let berangkat = req.params.berangkatP;
  let dewasa = Number(req.params.dewasaP);
  let anak = Number(req.params.anakP);
  let bayi= Number(req.params.bayiP);
  // data pemesan
  let titlePemesan = req.body.titlePemesan;
  let namadepPemesan = req.body.namaDepanPemesan;
  let namabelPemesan = req.body.namaBelakangPemesan;
  let notelPemesan = req.body.notelPemesan;
  let emailPemesan = req.body.emailPemesan;

  // perhitungan jumlah penumpang
  let jumlahPenumpang = dewasa + anak + bayi;
  
  // function untuk insert data ke table pemesan
  const {data: insPemesan, error: errInsPemesan} = await supabase 
    .from('pemesan')
    .insert([
      { 
        titlePemesan: `${titlePemesan}`,
        namadepPemesan: `${namadepPemesan}`,
        namabelPemesan: `${namabelPemesan}`,
        notelPemesan: `${notelPemesan}`,
        emailPemesan: `${emailPemesan}`
      }
    ])
    .select()
  console.log(insPemesan)
  
  // fungsi untuk input data penumpang
  let titleP = req.body.titlePenumpang;
  let namadepP = req.body.namaDepanPenumpang;
  let namabelP = req.body.namaBelakangPenumpang;

  for(let i = 0; i != jumlahPenumpang; i++){
    const {data: insTiket, error: errInsTiket} = await supabase
      .from('tiketPesawat')
      .insert([
        {
          pemesanID: `${insPemesan[0].pemesanID}`,
          ruteP: `${key}`,
          tanggalP: `${berangkat}`,
          titleP: `${titleP[i]}`,
          namadepP: `${namadepP[i]}`, 
          namabelP:`${namabelP[i]}`,
        }
        ])
        .select()
        console.log('insert ke ' + i)
        console.log(insTiket)
    }  
    

  // fungsi untuk insert table transaksi

    // fungsi ini untuk mencari tiketID yang satu pemesanID
    const {data: tiketID, error: errTikeID} = await supabase
      .from('tiketPesawat')
      .select()
      .match({
        pemesanID: insPemesan[0].pemesanID
      })

      var arr = [];
      
      for(let i = 0; i != tiketID.length; i++) {
        arr.push(tiketID[i].tiketpid)
      }
      console.log(arr)
      
      // fungsi untuk insert data ID Tiket ke dalam table transaksi
      const {data: insTrans, error: errInsTrans} = await supabase
        .from('transaksi')
        .insert([
          {
            noTiket: arr,
            keterangan: 'pesawat'
          }
        ])
        .select()

  // fungsi untuk menampilkan data rute pesawat                                             
  const { data: rutePesawat, error: errorRute } = await supabase
    .from('rutePesawat')
    .select(`*, pesawat (namaMaskapai) , asal: provinsiAsal (namaProvinsi), tujuan: provinsiTujuan (namaProvinsi)`)
    .eq('ruteID', `${key}`)

  return res.render("pesawatF/pembayaranPesawat"
  ,{
    dataP: rutePesawat,
    tanggalP: berangkat,
    penumpang: jumlahPenumpang,
    orderID: insTrans,
  })
}

// function untuk menampilkan detail dari tiket pesawat
const datapemesanP = async (req, res, next) => {
  const key = req.params.ruteP;
  const berangkat = req.params.berangkatP;
  let dewasa = Number(req.params.dewasaP);
  let anak = Number(req.params.anakP);
  let bayi= Number(req.params.bayiP);

  let jumlah = dewasa + bayi + anak;
  // console.log(jumlah)
  // console.log(berangkat)

  //fungsi untuk menampilkan detail tiket pesawat
   const { data: rutePesawat, error: errorRute } = await supabase
                                                  .from('rutePesawat')
                                                  .select(`*, pesawat (namaMaskapai) , asal: provinsiAsal (namaProvinsi), tujuan: provinsiTujuan (namaProvinsi)`)
                                                  .eq('ruteID', `${key}`)

  console.log(rutePesawat);
  return res.render("pesawatF/datapemesanP"
  ,{
    dataP: rutePesawat, 
    berangkatP: berangkat,
    dewasaP: dewasa,
    anakP: anak,
    bayiP: bayi,
    jumlahP: jumlah
  })
}

async function dataTiket(ket, nTikets) {
  let results = [];
  if (ket == 'pesawat'){
    const {data: penumpangs, error: errPenumpang} = await supabase
      .from('tiketPesawat')
      .select()
      .in('tiketpid', nTikets)
    results = penumpangs
    return results;
  } 
}


// function untuk menampilkan e-tiket 
const cetakTiketP = async (req, res, next) => {
  let orderID = req.params.orderID;

  orderID = orderID - 7000;

  const {data: etiketP, error: errEtiketP} = await supabase
    .from('transaksi')
    .select()
    .eq('transaksiID', orderID)


  let nTikets = etiketP[0].noTiket;
  let keterangan = etiketP[0].keterangan;

  const results = await dataTiket(keterangan, nTikets);
  console.log(results)

  const {data: allData, error: errorallData} = await supabase
                  .from('rutePesawat')
                  .select(`*, 
                          pesawat(namaMaskapai), asal: provinsiAsal(namaProvinsi, namaBandara), tujuan: provinsiTujuan(namaProvinsi, namaBandara)`)
                  .eq('ruteID', results[0].ruteP);

  console.log(allData)
  return res.render('pesawatF/cetakTiketP',{
    dataPenumpang: results,
    orderID: orderID + 7000,
    dataP: allData,
    ket : 'main'
  })
}

// function untuk mengambil data 
const cariTiket = async (req, res, next) => {
  const asal = req.body.asalP;
  const tujuan = req.body.tujuanP;
  const berangkat = req.body.berangkatP;


  // const berangkatZ = berangkat + "Z"
  // const tanggal = new Date(berangkatZ)
  // const tanggalP = () => {
  //   return [tanggal.getDate(), tanggal.getMonth() + 1, tanggal.getFullYear()].join('-')
  // }


  const kelasP = req.body.kelasP;
  const dewasa = req.body.dewasaP;
  const anak = req.body.anakP;
  const bayi = req.body.bayiP;

  const {data: provinsiP, error: errorprovinsiP} = await supabase.from('provinsi').select().in('airportID', [`${asal}`, `${tujuan}`]);
  const {data: allData, error: errorallData} = await supabase
                  .from('rutePesawat')
                  .select(`*, 
                          pesawat(namaMaskapai)`)
                  .match({provinsiAsal : `${asal}`, provinsiTujuan: `${tujuan}`} );
  

  return res.render('pesawatF/tiketPesawat'
  , {
    asalP: asal,
    tujuanP: tujuan,
    berangkatP: berangkat,
    kelasP: kelasP,
    dewasaP: dewasa,
    anakP: anak,
    bayiP: bayi,
    prov: provinsiP,
    tiketPs: allData
  });

}

const Upesawat = async (req, res, next) => {
  console.log(req.body)
}



module.exports ={
  pesawat,
  pembayaranP,
  datapemesanP,
  cetakTiketP,
  cariTiket,
  Upesawat,
}