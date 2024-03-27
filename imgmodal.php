<?php
require('conexion.php');

if(isset($_GET['m']) && $_GET['m'] == 'imgmodal'){
	$query="SELECT * FROM `modal` WHERE `pais` LIKE 'usa'";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

?>