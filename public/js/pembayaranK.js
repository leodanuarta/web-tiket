function promo(){
    let harga = $('#harga').text()
    let hargaPromo
    switch ($('#kodePromo').val()) {
      case ('GITRAIN') :
        hargaPromo = harga * 0.5
        console.log(harga)
        $('#harga').html('<del>' + harga + '</del>')
        $('#rowPromo')
        .html( 
            '<span>Total Bayar</span>' + 
           ' <span>'+
           ' Rp'+
           ' <span id="hargaPromo">' + hargaPromo + '</span>'+
           ' </span>'
        )
        $('#apply').attr("disabled", "disabled")
        $('#kodePromo').attr("disabled", "disabled")
        $('#message').html('<div class="text-success">SIP PROMO SUDAH TERPASANG</div>');
        break;
  
      case ('GIBACK') :
        hargaPromo = harga * 0.6
        console.log(harga)
        $('#harga').html('<del>' + harga + '</del>')
        $('#rowPromo')
        .html( 
            '<span>Total Bayar</span>' + 
           ' <span>'+
           ' Rp'+
           ' <span id="hargaPromo">' + hargaPromo + '</span>'+
           ' </span>'
        )
        $('#apply').attr("disabled", "disabled")
        $('#kodePromo').attr("disabled", "disabled")
        $('#message').html('<div class="text-success">SIP PROMO SUDAH TERPASANG</div>');
        break;
  
      case ('GILATER') :
        hargaPromo = harga * 0.6
        console.log(harga)
        $('#harga').html('<del>' + harga + '</del>')
        $('#rowPromo')
        .html( 
            '<span>Total Bayar</span>' + 
           ' <span>'+
           ' Rp'+
           ' <span id="hargaPromo">' + hargaPromo + '</span>'+
           ' </span>'
        )
        $('#apply').attr("disabled", "disabled")
        $('#kodePromo').attr("disabled", "disabled")
        $('#message').html('<div class="text-success">SIP PROMO SUDAH TERPASANG</div>');
        break;
  
      case ('GINEWYEAR') :
        hargaPromo = harga - 100000
        console.log(harga)
        $('#harga').html('<del>' + harga + '</del>')
        $('#rowPromo')
        .html( 
            '<span>Total Bayar</span>' + 
           ' <span>'+
           ' Rp'+
           ' <span id="hargaPromo">' + hargaPromo + '</span>'+
           ' </span>'
        )
        $('#apply').attr("disabled", "disabled")
        $('#kodePromo').attr("disabled", "disabled")
        $('#message').html('<div class="text-success">SIP PROMO SUDAH TERPASANG</div>');
        break;
      
      default: 
        $('#message').html('<div class="text-danger">KODE PROMO ANDA TIDAK VALID !</div>');
    }
  }
  