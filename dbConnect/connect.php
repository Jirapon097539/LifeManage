<?php
    $dbHost = "localhost";          //database server
    $dbUser = "root";        //ชื่อผู้ใช้
    $dbPass = "";             //รหัสผ่าน
    $dbName = "Web_test";    //ชื่อฐานข้อมูล

    $conn = new mysqli($dbHost,$dbUser, $dbPass, $dbName);
    if($conn->connect_error){
        die("ติดต่อฐานข้อมูลไม่สำเร็จ :".$conn->connect_error);
    }
    $conn->query("set names utf8");
?>