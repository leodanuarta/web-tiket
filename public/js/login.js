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
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            password2: {
                required: true,
                minlength : 8
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
            password: {
                required: "Masukkan Password",
                minlength: "Minimal Password adalah 8 karakter"
            },
            password2: {
                required: "Ulangi Masukkan Password",
                minlength: "Minimal Password adalah 8 karakter"
            },
            tac : "Mohon di klik!",
            email: "Mohon Masukkan Email yang Valid!"
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

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password2]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}
