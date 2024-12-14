var prg = 'php/Menu3.php';
var act = 'create';
var p = [];
$(function(){
    
    display('read')
    $("form#gre").submit(function(){
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
    let sum = "";
    $.post(prg,{act},function(data,status) {
        row = "<table id='personelTable' class='table table-hover'>";
        row += "<thead >";
        row += "<tr>";
        row += "<th >รหัสนักศึกษา</th>";
        row += "<th >ชื่อนักศึกษา</th>";
        row += "<th >คะแนนเก็บ</th>";
        row += "<th >คะแนนกลางภาค</th>";
        row += "<th >คะแนนจิตพิสัย</th>";
        row += "<th >คะแนนปลายภาค</th>";
        row += "<th >คะแนนรวม</th>";
        row += "<th >ผลการเรียน</th>";
        row += "<th >&nbsp;&nbsp;&nbsp;</th>";
        row += "</tr>";
        row += "</thead>";
        row += "<tbody>";
        p = JSON.parse(data)
        $.each(p, function (index,obj) {   
        Total = parseInt(obj.num1) + parseInt(obj.num2) + parseInt(obj.num3) + parseInt(obj.num4) ; 
        Grade =  grade(Total)
        row += "<tr>"; 
                row += "<td >"+obj.stdCode+"</td>";
                row += "<td >"+obj.stdName+"</td>";
                row += "<td >"+obj.num1+"</td>";
                row += "<td >"+obj.num2+"</td>";
                row += "<td >"+obj.num3+"</td>";
                row += "<td >"+obj.num4+"</td>";
                row += "<td >"+Total+"</td>";
                row += "<td >"+Grade+"</td>";
                row += "<td align ='center'><button class='btn btn-success'onclick = edit('"+index+"') ><i class = 'fa fa-edit fa-lg'></i></button>&nbsp;&nbsp;&nbsp;"
                row += "<button class='btn btn-warning'onclick = del('" + obj.stdCode+ "')><i class = 'fa fa-trash fa-lg'></i></button></td>";

                row += "</tr>";
        });
        row += "</tbody>";
        row += "</table>";
        $("#showgre").html(row);   

    });
}


function del(stdCode){
    if(confirm("ต้องการลบ ?")){
        $.post(prg,{stdCode,act :'delete'},function(data,status){
        display('read');
        })
    }
}

function edit(i){
    act = 'update';
    $("#stdCode").val(p[i].stdCode);
    $("#stdName").val(p[i].stdName);
    $("#num1").val(p[i].num1);
    $("#num2").val(p[i].num2);
    $("#num3").val(p[i].num3);
    $("#num4").val(p[i].num4);
    
}
function clear(){
    $("#stdCode").val("");
    $("#stdName").val("");
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");

}

function grade(score) {
    var grade = "0.0";
    if (score >= 50) grade = '1.0';
    if (score >= 55) grade = '1.5';
    if (score >= 60) grade = '2.0';
    if (score >= 65) grade = '2.5';
    if (score >= 70) grade = '3.0';
    if (score >= 75) grade = '3.5';
    if (score >= 80) grade = '4.0';
    return grade;

}

function cal() {
    let score = "";
   score = parseInt($('#num1').val()) + parseInt($('#num2').val()) + parseInt( $('#num3').val()) + parseInt($('#num4').val()) ;

   $("#shownum").val(score); 
   $("#showgrade").val(grade(score));
}