$("#signup").click(function() {
    $("#first").fadeOut("fast",function() {
        $("#second").fadeIn("fast");
    });
});

$("#signin").click(function() {
    $("#second").fadeOut("fast",function() {
        $("#first").fadeIn("fast");
    });
});

$(function() {
    $("form[name='login']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: "Mohon Masukkan Email yang Valid!",

            password: {
                required: "Password Belum Diisi!",
            }
        },
        submitHandler: function(form){
            form.submit();
        }
    });
});

$(function() {
    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            dob: "required",
            notel: "required",
            email1: {
                required: true,
                email: true
            },
            password1: {
                required: true,
                minlength: 8
            },
            // confirm_password: {
            //     required: true,
            //     minlength : 8
            // },
            confirm_password: {
                required : true
            },
            tac : {
                required : true,
            }
        },
        
        messages: {
            firstname: "Masukkan Nama Depan",
            lastname: "Masukkan Nama Belakang",
            dob: "Pilih Tanggal Lahir Anda",
            notel: "Masukkan Nomor Telepon Anda",
            password1: {
                required: "Masukkan Password",
                minlength: "Minimal Password adalah 8 karakter"
            },
            // confirm_password: {
            //     required: "Ulangi Masukkan Password",
            //     minlength: "Minimal Password adalah 8 karakter"
            // },
            confirm_password: "Ulangi Masukkan Password",
            tac : "Mohon di klik!",
            email1: "Mohon Masukkan Email yang Valid!"
        },

        submitHandler: function(form){
            form.submit();
        }
    });
});

function forgotPassword(){
    var email = prompt("Masukkan Email Anda Disini");
    if(email){
        alert("Kode verifikasi telah dikirim. Silahkan periksa email Anda!");
    }
};

// function onChange() {
//     const password = document.querySelector('input[name=password1]');
//     const confirm = document.querySelector('input[name=confirm_password]');
//     if (confirm.value === password.value) {
//       confirm.setCustomValidity('');
//     } else {
//       confirm.setCustomValidity('Passwords do not match');
//     }
// }

$(document).ready(function(){
    $("#confirm_password").bind('keyup change', function(){
      check_Password( $("#password1").val(), $("#confirm_password").val() )

    $("#btn-daf").click(function(){
      check_Password( $("#password1").val(), $("#confirm_password").val() )
    })
  })

  function check_Password( Pass, Con_Pass){
    if(Pass === ""){

    }else if( Pass === Con_Pass){
      $("#btn-daf").removeAttr("onclick")
      $('#confirm_password_msg').show()
    //   $("#confirm_password_msg").html('<div class="alert alert-success">Password matched</div>')
    $("#confirm_password_msg").html('<div class="text-success">Password matched</div>')
    }else{
      $("#confirm_password").focus()
      $('#confirm_password_msg').show()
      $("#confirm_password_msg").html('<div class="text-danger">Password not matched!</div>')
    }
  }
})

$("#eye").click(function() {
	var password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
    $('#eye').toggleClass("fa-eye fa-eye-slash");
  } else {
    password.type = "password";
    $('#eye').toggleClass("fa-eye-slash fa-eye");
  }
});

$("#eye1").click(function() {
	var password = document.getElementById("password1");
  if (password.type === "password") {
    password.type = "text";
    $('#eye1').toggleClass("fa-eye fa-eye-slash");
  } else {
    password.type = "password";
    $('#eye1').toggleClass("fa-eye-slash fa-eye");
  }
});

$("#eye2").click(function() {
	var password = document.getElementById("confirm_password");
  if (password.type === "password") {
    password.type = "text";
    $('#eye2').toggleClass("fa-eye fa-eye-slash");
  } else {
    password.type = "password";
    $('#eye2').toggleClass("fa-eye-slash fa-eye");
  }
});
