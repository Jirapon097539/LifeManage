<?php
 $msg = "{'status':'Fail'}";
    require_once("../dbConnect/connect.php");
    $act = isset($_POST['act']) ? $_POST['act'] : "";
    $pinId = isset($_POST['pinId']) ? $_POST['pinId']: "";
    $email = isset($_POST['email']) ? $_POST['email']: "";
    $password = isset($_POST['password']) ? $_POST['password']: "";
    $prefix = isset($_POST['prefix']) ? $_POST['prefix']: "";
    $FullName = isset($_POST['FullName']) ? $_POST['FullName']: "";
    $address = isset($_POST['address']) ? $_POST['address']: "";
    $province = isset($_POST['province']) ? $_POST['province']: "";
    $district = isset($_POST['district']) ? $_POST['district']: "";
    $subDistrict = isset($_POST['subDistrict']) ? $_POST['subDistrict']: "";
    $zipCode = isset($_POST['zipCode']) ? $_POST['zipCode']: "";
 
     
    $temp = isset($_FILES['image']['tmp_name']) ?$_FILES['image']['tmp_name']:"";
    $filename = isset($_FILES['image']['name'])?$_FILES['image']['name']:"";
    $target = '../images/'.$filename;
    move_uploaded_file($temp,$target);

    if($act == 'create'){
        $sql = "insert into user (pinId,email,password,prefix,FullName,address,subdistrict,district,province,image,zipCode) 
                values ('$pinId','$email','$password','$prefix','$FullName','$address','$subDistrict','$district','$province','$filename','$zipCode')";
                if($conn->query($sql) === true){
            $msg = "('status':'Complete')";
        }                 
        echo $msg;    
    }

    if($act =='update'){
        $sql = "update user set
               email = '$email',
                password = '$password',
                prefix = '$prefix',
                FullName = '$FullName',
                address = '$address',
                subdistrict = '$subDistrict',
                district = '$district',
                province = '$province',
                image = '$filename',
                zipCode = '$zipCode'
                where  pinId = '$pinId'";
            if($conn->query($sql)){
                $msg = "('status':'Complete')";
            }
            echo $msg;
        }  

    if($act == 'read'){
        $sql = "select * from user";
        $result = $conn->query($sql);
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
    }

    if($act == 'delete'){
        $sql = "delete from user Where pinId = '$pinId'";
        if($conn->query($sql)){
            $msg = "('status':'Complete')";
        }
        echo $msg;
    }

   

?>