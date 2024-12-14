<?php
    $msg = "{'status':'Fail'}"; 
     require_once("../dbConnect/connect.php");
     $act = isset($_POST['act']) ? $_POST['act'] : "";
     $id = isset($_POST['id']) ? $_POST['id'] : "";
     $date = isset($_POST['date']) ? $_POST['date'] : "";
     $no1 = isset($_POST['no1']) ? $_POST['no1'] : "";
     $nn1 = isset($_POST['nn1']) ? $_POST['nn1'] : "";
     $nn2 = isset($_POST['nn2']) ? $_POST['nn2'] : "";
     
     if($act == 'create'){
        $sql = "insert into account (date,buy,detail,TotalBuy) 
                values('$date','$no1','$nn2','$nn1')";
               
        if($conn->query($sql) === true){
            $msg = "('status':'Complete')";
        }                 
        echo $msg;    
    }

    
    if($act == 'read'){
        $sql = "select * from account"; 
        $result = $conn->query($sql);
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    }

    if($act == 'delete'){
        $sql = "delete from account Where id = '$id'";
        if($conn->query($sql)){
            $msg = "('status':'Complete')";
        }
        echo $msg;
    }


    if($act =='update'){
        $sql = "update account set
        date = '$date',
        buy = '$no1',
        TotalBuy = '$nn2'
                where detail = '$nn1'";
               
            if($conn->query($sql)){
                $msg = "('status':'Complete')";
            }
            echo $msg;
        }   
?>
