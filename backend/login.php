<?php
    header("Access-control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    $email=$_POST['email'];
    $password=$_POST['password'];
    //database connecion
    $conn = new mysqli('localhost','root','','registration');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$query1=mysqli_query($conn,"select * from `signup` where email='$email'");
		$result=mysqli_num_rows($query1);
		if($result==1){
			while($row=mysqli_fetch_array($query1)){
                if($row[4]==$password){
                    echo "success";
                }
                else{
                    echo "Failed";
                }
            }
		}
		else{
			echo "Failed";
		}
	}
?>