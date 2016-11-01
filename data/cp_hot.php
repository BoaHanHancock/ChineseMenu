<?php
/**
*向客户端返回精品菜谱列表，以JSON格式
*/
header('Content-Type:application/json;charset=UTF-8');

@$type = $_GET['type'];
if(empty($type)){
    echo '[]';
    return;
}
$conn = mysqli_connect('127.0.0.1', 'root', '', 'caipu', 3306);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT * FROM cp_hot";
$result = mysqli_query($conn,$sql);

$output = [];
while(($row=mysqli_fetch_assoc($result))!==null){
	$output[] = $row;

}
echo json_encode($output);
