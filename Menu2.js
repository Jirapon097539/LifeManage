var prg = 'php/Menu2.php';
var act = 'create';
var p = [];
$(function(){
    
    display('read')
    $("form#b1").submit(function(){
        var formData = new FormData(this);
        formData.append("act",act);
        $.ajax({
            url: prg,
            type: 'POST',
            data: formData,
            async: false,
            success: function (data) {
                console.log(data);
                display('read')
                
            },
            cache: false,
            contentType: false,
            processData: false
        });  
        return false;
        
    });

})



function display(act){
    $.post(prg,{act},function(data,status) {
        row = "<table class='table table-bordered '>";
        row += "<thead >";
        row += "<tr>";
        row += "<th rowspan = '2' style = 'text-align: center';>ลำดับที่</th>";
        row += "<th rowspan = '2' style = 'text-align: center';>วัน/เดือน/ปี</th>";
        row += "<th rowspan = '2' style = 'text-align: center';>ประเภทค่าใช้จ่าย</th>";
        row += "<th rowspan = '2' style = 'text-align: center';>รายละเอียด</th>";
        row += "<th colspan='2' style = 'text-align: center';>จำนวนเงิน</th>";
        row += "<th rowspan = '2'></th>";
        row += "</tr>";
        row += "<tr>";
        row += "<th style = 'text-align: center';>รายรับ</th>";
        row += "<th style = 'text-align: center';>รายจ่าย</th>";      
        row += "</tr>";
        row += "</thead>";
        row += "<tbody>";
        p = JSON.parse(data)
        $.each(p, function (index,obj) { 
                row += "<tr>"; 
                row += "<td >"+obj.id+"</td>";
                row += "<td >"+obj.date+"</td>";
                row += "<td >"+obj.buy+"</td>";
                row += "<td >"+obj.detail+"</td>";
                row += "<td ><div id = 'show1'>"+obj.TotalBuy+"</div></td>";
                row += "<td ><div id = 'show2'></div>"+obj.TotalBuy+"</td>";
                row += "<td align ='center'><button class='btn btn-success'onclick = edit('"+index+"') ><i class = 'fa fa-edit fa-lg'></i></button>&nbsp;&nbsp;&nbsp;"
                row += "<button class='btn btn-warning'onclick = del('" + obj.id+ "')><i class = 'fa fa-trash fa-lg'></i></button></td>";
                row += "</tr>";
        });
        row += "<tr>"
        row += "<td colspan = '4' style = 'text-align: center';>รวม</td>";
        row += "<td ></td>";
        row += "<td ></td>";
        row += "<td ></td>";
        row += "</tr>"
        row += "</tbody>";
        row += "</table>";
        $("#showno").html(row);
        
    });
}

function edit(i){
    act = 'update';
    id = p[i].id
    $("#date").val(p[i].date);
    $("#no1").val(p[i].buy);
    $("#nn1").val(p[i].TotalBuy);
    $("#nn2").val(p[i].detail);
}
function clear(){
    $("#date").val("");
    $("#no1").val("");
    $("#nn1").val("");
    $("#nn2").val("");
}

function del(id){
    if(confirm("ต้องการลบ ?")){
        $.post(prg,{id:id,act :'delete'},function(data,status){
        display('read');
        })
    }
}

