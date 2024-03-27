<?php
require('conexion.php');

$parametros = [
    'abarrotes' => 'categoria',
    'bebestibles' => 'categoria',
    'aseo' => 'categoria',
    'panaderia' => 'categoria',
    'pasteleria' => 'categoria',
    'chile' => 'pais',
    'usa' => 'pais',
    'francia' => 'pais',
    'marruecos' => 'pais',
    'japon' => 'pais',
    'sudamerica' => 'region',
    'norteamerica' => 'region',
    'europa' => 'region',
    'africa' => 'region',
    'asia' => 'region'
];

// Inicializar arrays separados para categorías y países
$categorias = array();
$paises = array();

// Procesar los parámetros GET y construir las condiciones de filtro
foreach ($parametros as $parametro => $variable) {
    if (isset($_GET[$parametro]) && $_GET[$parametro] == $parametro) {
        if ($variable == 'categoria') {
            $categorias[] = "$variable = '$parametro'";
        } elseif ($variable == 'pais') {
            $paises[] = "$variable = '$parametro'";
        } elseif ($variable == 'region') {
            $regiones[] = "$variable = '$parametro'";
        }
    }
}

// Construir la consulta SQL con las condiciones de filtro y ordenación
$query = "SELECT * FROM `productos` WHERE 1";

if (!empty($categorias)) {
    $query .= " AND (" . implode(" OR ", $categorias) . ")";
}

if (!empty($paises)) {
    $query .= " AND (" . implode(" OR ", $paises) . ")";
}

if (!empty($regiones)) {
    $query .= " AND (" . implode(" OR ", $regiones) . ")";
}

// Agregar la cláusula ORDER BY para ordenar por la columna "categoria"
$query .= " ORDER BY categoria";

// Ejecutar la consulta y obtener los resultados
$resource = $conn->query($query);
$total = $resource->num_rows;
$data = array();

while ($row = $resource->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

	/* //FUNCIONA - RESPALDO FILTRO POR CATEGORIA, PAIS Y REGION
$parametros = [
    'abarrotes' => 'categoria',
    'bebestibles' => 'categoria',
    'aseo' => 'categoria',
    'panaderia' => 'categoria',
    'pasteleria' => 'categoria',
    'chile' => 'pais',
    'usa' => 'pais',
    'francia' => 'pais',
    'marruecos' => 'pais',
    'japon' => 'pais',
    'sudamerica' => 'region',
    'norteamerica' => 'region',
    'europa' => 'region',
    'africa' => 'region',
    'asia' => 'region'
];

// Inicializar arrays separados para categorías y países
$categorias = array();
$paises = array();

// Procesar los parámetros GET y construir las condiciones de filtro
foreach ($parametros as $parametro => $variable) {
    if (isset($_GET[$parametro]) && $_GET[$parametro] == $parametro) {
        if ($variable == 'categoria') {
            $categorias[] = "$variable = '$parametro'";
        } elseif ($variable == 'pais') {
            $paises[] = "$variable = '$parametro'";
        } elseif ($variable == 'region') {
            $regiones[] = "$variable = '$parametro'";
        }
    }
}

// Construir la consulta SQL con las condiciones de filtro y ordenación
$query = "SELECT * FROM `productos` WHERE 1";

if (!empty($categorias)) {
    $query .= " AND (" . implode(" OR ", $categorias) . ")";
}

if (!empty($paises)) {
    $query .= " AND (" . implode(" OR ", $paises) . ")";
}

if (!empty($regiones)) {
    $query .= " AND (" . implode(" OR ", $regiones) . ")";
}

// Agregar la cláusula ORDER BY para ordenar por la columna "categoria"
$query .= " ORDER BY categoria";

// Ejecutar la consulta y obtener los resultados
$resource = $conn->query($query);
$total = $resource->num_rows;
$data = array();

while ($row = $resource->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

*/

?>