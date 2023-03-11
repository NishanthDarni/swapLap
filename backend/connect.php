<?php
    header("Access-control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
	//$data = json_decode(file_get_contents('php://input'), true);
	$name=$_POST['name'];
    $mobile_number=$_POST['mobile'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $conn = new mysqli('localhost','root','','registration');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$query1=mysqli_query($conn,"select * from `signup` where email='$email'");
		$result=mysqli_num_rows($query1);
		if($result>0){
			echo "you are already registered with this email";
		}
		else{
			$stmt = $conn->prepare("insert into signup(name,number,email,password) values(?, ?, ?, ?)");
			$stmt->bind_param("siss", $name, $mobile_number,$email, $password);
			$execval = $stmt->execute();
			echo "congratulations $name you are successfully registered for swaplap";
			?>
			<a href="home.html">go to home page</a>
			<?php
			$stmt->close();
			$conn->close();
		}
	}
?>