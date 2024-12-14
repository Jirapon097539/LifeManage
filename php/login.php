<?php

    require_once("../dbConnect/connect.php");


    $email = isset($_POST['email'])?$_POST['email']:"";
    $password = isset($_POST['password'])?$_POST['password']:"";
  
        
    $sql = "select * from user where email =  '$email' and password =  '$password'";
    $result = $conn->query($sql);
    if($result->num_rows)
    {
        $row = $result->fetch_assoc();
        if($row['password'] == $password)
            echo $row['FullName'];
        else
            echo "รหัสผ่านไม่ถูกต้อง !";
    }    
    else    
        echo "ไม่พบข้อมูลผู้ใช้ !";
?>