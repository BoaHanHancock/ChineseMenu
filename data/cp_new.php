<?php
header('Content-Type:application/json;charset=UTF-8');

@$type = $_GET['type'];
if($type != 1){
    echo '[]';
    return;
}
$conn = mysqli_connect('127.0.0.1','root','','caipu',3306);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT * FROM cp_new";
$result = mysqli_query($conn,$sql);

$output = [];
while(($row=mysqli_fetch_assoc($result))!==null){
	$output[] = $row;
}
echo json_encode($output);

?>