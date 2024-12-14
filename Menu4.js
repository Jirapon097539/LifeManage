var prg = 'php/Menu4.php';
var act = 'create';
var p = [];
$(function(){
    display('read')
    $("form#Product").submit(function(){
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
        clear()
        return false;
        
    });


})

function display(act){
    $.post(prg,{act},function(data,status) {
        row = "<table class='table table-bordered '>";
        row += "<thead >";
        row += "<tr>";
        row += "<th style = 'text-align: center'; >ลำดับที่</th>";
        row += "<th style = 'text-align: center'; >วันที่เดือนปี</th>";
        row += "<th style = 'text-align: center';>ชื่อสินค้า</th>";
        row += "<th style = 'text-align: center';>ราคา</th>";
        row += "<th style = 'text-align: center';>จำนวน</th>";
        row += "<th style = 'text-align: center';>จำนวนเงิน</th>";
        row += "<th style = 'text-align: center';></th>";
        row += "</tr>";
        row += "</thead>";
        row += "<tbody>";
        p = JSON.parse(data)
        $.each(p, function (index,obj) { 
            total = parseInt(obj.price) * parseInt(obj.number) ;
       
                row += "<tr>"; 
                row += "<td style = 'text-align: center';>"+obj.id+"</td>";
                row += "<td style = 'text-align: center';>"+obj.date+"</td>";
                row += "<td style = 'text-align: center';>"+obj.prdName+"</td>";
                row += "<td style = 'text-align: center';>"+obj.price+"</td>";
                row += "<td style = 'text-align: center';>"+obj.number+"</td>";
                row += "<td style = 'text-align: center';>"+total+"</td>";
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
        $("#showProduct").html(row);
       
    });
}

function edit(i){
    id = p[i].id
    act = 'update';
    $("#date").val(p[i].date);
    $("#prdName").val(p[i].prdName);
    $("#price").val(p[i].price);
    $("#number").val(p[i].number);
}
function clear(){
    $("#date").val("");
    $("#prdName").val("");
    $("#price").val("");
    $("#number").val("");
}

function del(id){
    if(confirm("ต้องการลบ ?")){
        $.post(prg,{id:id,act :'delete'},function(data,status){
        display('read');
        })
    }
}


