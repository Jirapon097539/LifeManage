<?php
     $msg = "{'status':'Fail'}";
     require_once("../dbConnect/connect.php");
     $id = isset($_POST['id']) ? $_POST['id'] : "";
     $act = isset($_POST['act']) ? $_POST['act'] : "";
     $date = isset($_POST['date']) ? $_POST['date'] : "";
     $prdName = isset($_POST['prdName']) ? $_POST['prdName'] : "";
     $price = isset($_POST['price']) ? $_POST['price'] : "";
     $number = isset($_POST['number']) ? $_POST['number'] : "";
    

     if($act == 'create'){
        $sql = "insert into product (date,prdName,price,number) 
                values ('$date','$prdName','$price','$number')";
        if($conn->query($sql) === true){
            $msg = "('status':'Complete')";
        }                 
        echo $msg;    
    }


    if($act == 'read'){
        $sql = "select * from product"; 
        $result = $conn->query($sql);
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    }

    if($act == 'delete'){
        $sql = "delete from product Where id = '$id'";
        if($conn->query($sql)){
            $msg = "('status':'Complete')";
        }
        echo $msg;
    }


    if($act =='update'){
        $sql = "update product set
                date = '$date',
                price = '$price',
                number = '$number'
                where prdName = '$prdName'";
            if($conn->query($sql)){
                $msg = "('status':'Complete')";
            }
            echo $msg;
        }   

?>