<?php
require('conexion.php');

if(isset($_GET['j']) && $_GET['j'] == 'infochile'){
	$query="SELECT * FROM `paises` WHERE `nombre_pais` LIKE 'Chile' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['a']) && $_GET['a'] == 'infousa'){
	$query="SELECT * FROM `paises` WHERE `nombre_pais` LIKE 'Estados Unidos' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['b']) && $_GET['b'] == 'infofrancia'){
	$query="SELECT * FROM `paises` WHERE `nombre_pais` LIKE 'Francia' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['c']) && $_GET['c'] == 'infomarruecos'){
	$query="SELECT * FROM `paises` WHERE `nombre_pais` LIKE 'Marruecos' ";
	$resource=$conn->query($query);
	if($total=$resource->num_rows) {
		$data=array();
		while ($row = $resource->fetch_assoc()) {
			$data[]=$row;
		}
		echo json_encode($data);
	}
}

if(isset($_GET['d']) && $_GET['d'] == 'infojapon'){
	$query="SELECT * FROM `paises` WHERE `nombre_pais` LIKE 'Japón' ";
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