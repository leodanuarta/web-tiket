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
            email: "Mohon Masukkan Email yang Valid!"
        },

        submitHandler: function(form){
            form.submit();
        }
    });
});