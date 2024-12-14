<?php
    $msg = "{'status':'Fail'}"; 
     require_once("../dbConnect/connect.php");
     $act = isset($_POST['act']) ? $_POST['act'] : "";
     $stdCode = isset($_POST['stdCode']) ? $_POST['stdCode'] : "";
     $stdName = isset($_POST['stdName']) ? $_POST['stdName'] : "";
     $num1 = isset($_POST['num1']) ? $_POST['num1'] : "";
     $num2 = isset($_POST['num2']) ? $_POST['num2'] : "";
     $num3 = isset($_POST['num3']) ? $_POST['num3'] : "";
     $num4 = isset($_POST['num4']) ? $_POST['num4'] : "";
    //  $shownum = isset($_POST['shownum']) ? $_POST['shownum'] : "";
    //  $showgrade = isset($_POST['showgrade']) ? $_POST['showgrade'] : "";

     if($act == 'create'){
        $sql = "insert into graed (stdCode,stdName,num1,num2,num3,num4) 
                values('$stdCode','$stdName','$num1','$num2','$num3','$num4')";
        if($conn->query($sql) === true){
            $msg = "('status':'Complete')";
        }                 
        echo $msg;    
    }

    if($act == 'read'){
        $sql = "select * from graed"; 
        $result = $conn->query($sql);
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    }

    if($act == 'delete'){
        $sql = "delete from graed Where stdCode = '$stdCode'";
        if($conn->query($sql)){
            $msg = "('status':'Complete')";
        }
        echo $msg;
    }


    if($act =='update'){
        $sql = "update graed set
                
                
                stdName = '$stdName',
                num1 = '$num1',
                num2 = '$num2',
                num3 = '$num3',
                num4 = '$num4'
                
                where stdCode = '$stdCode'";
            if($conn->query($sql)){
                $msg = "('status':'Complete')";
            }
            echo $msg;
        }   
?>