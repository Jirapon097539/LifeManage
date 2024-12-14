var program = "php/Menu5.php";
var act = "create";
var per = [];

$(function(){
    display('read')
    $("form#Users").submit(function(){
        var formData = new FormData(this);
        formData.append("act",act);
        $.ajax({
            url: program,
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                alert(data);
                display('read')
               
            },
            cache: false,
            contentType: false,
            processData: false
        });  
        clear()
        return false;
        
    });

  
})
 
function display(act){
    
    $.post(program,{act},function(data,status) {
        
        row = "<table class='table table-bordered '>";
        row += "<thead>";
        row += "<tr>";
        row += "<th>เลขที่ประชาชน</th>"
        row += "<th>ชื่อ-สกุล</th>"
        row += "<th>e-mail</th>"
        row += "<th>ที่อยู่</th>"
        row += "<th>จังหวัด</th>"
        row += "<th>รหัสไปรษณีย์</th>"
        row += "<th>รูปภาพ</th>"
        row += "<th></th>"
        row += "</tr>";
        row += "</thead>";
        row += "<tbody>";
        per = JSON.parse(data)
        $.each(per, function (index,obj) { 
                row += "<tr>"; 
                row += "<td >"+obj.pinId+"</td>";
                row += "<td >"+obj.prefix+'&nbsp;'+obj.FullName+"</td>";
                row += "<td >"+obj.email+"</td>";
                row += "<td >"+obj.address+'&nbsp;'+obj.subdistrict+'&nbsp;'+obj.district+"</td>";
                row += "<td >"+obj.province+"</td>";
                row += "<td >"+obj.zipCode+"</td>";
                row += "<td ><img src='images/"+obj.image+"'style=' width:100px'></td>";
                row += "<td align ='center'><button class='btn btn-success'onclick = edit('"+index+"') ><i class = 'fa fa-edit fa-lg'></i></button>&nbsp;&nbsp;&nbsp;"
                row += "<button class='btn btn-warning'onclick = del('" + obj.pinId+ "')><i class = 'fa fa-trash fa-lg'></i></button></td>";
                row += "</tr>";
        });
        row += "</tbody>";
        row += "</table>";
        $("#showUsers").html(row)

    });
}


function preview() {
    frame.src=URL.createObjectURL(event.target.files[0]);
}

function del(pinId){
    if(confirm("ต้องการลบ ?")){
        $.post(program,{pinId,act :'delete'},function(data,status){
        display('read');
        })
    }
}

function edit(i){
    act = 'update';
    $("#email").val(per[i].email);
    $("#password").val(per[i].password);
    $("#prefix").val(per[i].prefix);
    $("#FullName").val(per[i].FullName);
    $("#address").val(per[i].address);
    $("#subDistrict").val(per[i].subdistrict);
    $("#district").val(per[i].district);
    $("#province").val(per[i].province);
    $("#zipCode").val(per[i].zipCode);
    $("#pinId").val(per[i].pinId);
    $("#frame").prop("src","images/"+per[i].image);
}
function clear(){
    $("#email").val("");
    $("#password").val("");
    $("#prefix").val("");
    $("#FullName").val("");
    $("#address").val("");
    $("#subDistrict").val("");
    $("#district").val("");
    $("#province").val("");
    $("#zipCode").val("");
    $("#pinId").val("");
    $("#image").val('');
    $("#frame").attr('src', '');
}
