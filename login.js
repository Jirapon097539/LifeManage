$(function () {
    $("form#loginForm").submit(function () {
        var formData = new FormData(this);
        $.ajax({
            url: 'php/login.php',
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                // row = JSON.stringify(data)
                 alert(data)
                if(data !== 'ไม่พบข้อมูลผู้ใช้ !'){
                    $("#showName").html(data);
                    $("#admin").show();
                    $("#Users").show() 
                    $("#login").hide();
                    $("#logout").show();
                    $("#his").show();
                    $("#register").show();
                    $("#formContent").hide();
                }else{
                    $("#detail").load("html/register.html")
                }
                
            },
            cache: false,
            contentType: false,
            processData: false
        });
        clear()
        return false;

    });
});

function logout(){
    $("#logout").click(function(){
       window.location.href = 'index.html'
    })
    
}

function clear() {
    $("#email").val('');
    $("#password").val('');
}



