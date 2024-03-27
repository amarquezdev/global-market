<?php
require('conexion.php');

if(isset($_GET['v']) && $_GET['v'] == 'chile'){
	$query="SELECT * FROM `productos` WHERE `pais` LIKE 'chile' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['z']) && $_GET['z'] == 'usa'){
	$query="SELECT * FROM `productos` WHERE `pais` LIKE 'usa' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['t']) && $_GET['t'] == 'francia'){
	$query="SELECT * FROM `productos` WHERE `pais` LIKE 'francia' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['w']) && $_GET['w'] == 'marruecos'){
	$query="SELECT * FROM `productos` WHERE `pais` LIKE 'marruecos' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['n']) && $_GET['n'] == 'japon'){
	$query="SELECT * FROM `productos` WHERE `pais` LIKE 'japon' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['h']) && $_GET['h']=='modal'){
	$query="SELECT * FROM `productos` WHERE `id` = $_POST[id]";
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