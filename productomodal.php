<?php
require('conexion.php');

if(isset($_GET['h']) && $_GET['h']=='modal'){
	$query="SELECT * FROM `productos` WHERE `id` = $_POST[producto_id]";
	$resource=$conn->query($query);
	if($total=$resource->num_rows){
		$data=array();
		while ($row = $resource->fetch_assoc()){
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

?>