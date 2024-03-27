$(document).ready(function () {

//Pin CHILE - Mapa interactivo.
$(".chile-pin").click(function () {

    $.post('infopaises.php?j=infochile', function (data, stage) {
        data = $.parseJSON(data);
        console.log(data);

        $.each(data, function (key, value) {
            $('#id-mitad-texto').empty().append('<div id="id-plantilla" class="plantilla col-12"> <div class="container-titulo-pais d-flex col-md-12"> <div class="col-md-7 d-flex justify-content-start align-items-center"> <p id="caja-nombre-pais" class="nombre-pais mb-0"> ' + value.nombre_pais + ' </p> </div> <div class="col-md-2 d-flex justify-content-end align-items-center bandera-titulo"></div> <div class="col-md-3 d-flex justify-content-end align-items-center boton-titulo"> <button type="button" class="btn btn-primary boton-volver"> Navegar </button> </div> </div> <p id="caja-descripcion-pais" class="descripcion-pais mb-0"> ' + value.descripcion_pais + ' </p> <div class="contenedor-productos-pais"> <div id="id-container-crear" class="container d-flex justify-content-between p-0"></div> </div> </div>');
        });

        $.post('productodestacado.php?v=chile', function (data, stage) {
            // Datos productos
            data = $.parseJSON(data);
            console.log(data);

            $.each(data, function (key, value) {
                $('#id-container-crear').append(' <div class="col-md-4 m-0 col-destacado"> <div class="card card-destacado"><img class="card-img-top-destacado" src="assets/img/' + value.codigo + '.png" alt=""> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between align-items-center"> <div> <p class="price m-0">$ ' + value.precio + '</p> </div> <div><button class="boton-vermas btn btn-secondary px-3" type="button" data-id="' + value.id + '"> Ver más </button></div> </div> </div> </div> </div>');
            });

            $(".boton-vermas").off('click');
            $('.boton-vermas').click(function () {
                $.post('productomodal.php?h=modal', { 'producto_id': $(this).data('id') }).done(function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpo = '<div class="row"> <div class="col-5 p-0 imagen-grande-modal border"> <img src="assets/img/' + value.codigo + '.png" class="img-fluid img-modal-grande" alt=""> </div> <div class="col-7 px-4 py-0"> <div> <h2 class="nombre-modal">' + value.nombre + '</h2> <h5 class="categoria-modal"> Categoría: ' + value.categoria + '</h5> <p class="descripcion-modal m-0">' + value.descripcion + '</p> <p class="precio-modal">$' + value.precio + '</p> </div> <div id="id-img-modal" class="d-flex col-md-12 justify-content-between"></div> <div class="d-flex col-md-12 justify-content-end botonera-modal align-items-end"> <button type="button" class="boton-carrito-modal"> Agregar al Carro </button> </div> </div> </div>';
                        $('.modal-body').empty().append(cuerpo);
                        $('#vermodal').modal('show');
                    });
                });

                $.post('imgmodal.php?m=imgmodal', function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpote = '<div class="col-md-4 m-1 border col-destacado"> <img class="imagen-pequeña-modal" src="assets/img/' + value.codigo + '.png" alt="" data-codigo="' + value.codigo + '"></div>';
                        $('#id-img-modal').append(cuerpote);
                    });

                    $('.imagen-pequeña-modal').click(function () {
                        var codigoImagen = $(this).data("codigo");
                        var imagenGrandeSrc = "assets/img/" + codigoImagen + ".png";
                        $('.img-modal-grande').attr("src", imagenGrandeSrc);
                    });
                });

            });

            $('.boton-volver').click(function () {
                $('.container-todo').css('background', 'rgb(52,0,179)');
                $('.container-todo').css('background', 'linear-gradient(90deg, rgba(52,0,179,1) 0%, rgba(0,3,33,1) 100%)');
                $('#id-plantilla').remove();
                $('#id-mitad-texto').empty().append('<p id="text-home" class="texto-home"> Bienvenido a <span class="span-texto-home"> GLOBALMARKET </span> <br> Navega y compra por el mundo </p>');
                $(".fs-3dglobe-container").animate({
                    left: '0%',
                    top: '0%',
                    height: '100%',
                    width: '100%',
                }, 1000);
            });

        });

        $('#text-home').hide();
        $('#container-home').css('background-image', 'url("assets/img/chile-fondo.jpg")');
        $('.bandera-titulo').css('background-image', 'url("assets/img/pin-chile.png")');
        $(".fs-3dglobe-container").animate({
            left: '50%',
            top: '0%',
            height: '100%',
            width: '100%',
        }, 1000);
    });
});

//Pin USA - Mapa interactivo.
$(".usa-pin").click(function () {

    $.post('infopaises.php?a=infousa', function (data, stage) {
        data = $.parseJSON(data);
        console.log(data);

        $.each(data, function (key, value) {
            $('#id-mitad-texto').empty().append('<div id="id-plantilla" class="plantilla col-12"> <div class="container-titulo-pais d-flex col-md-12"> <div class="col-md-7 d-flex justify-content-start align-items-center"> <p id="caja-nombre-pais" class="nombre-pais mb-0"> ' + value.nombre_pais + ' </p> </div> <div class="col-md-2 d-flex justify-content-end align-items-center bandera-titulo"></div> <div class="col-md-3 d-flex justify-content-end align-items-center boton-titulo"> <button type="button" class="btn btn-primary boton-volver"> Navegar </button> </div> </div> <p id="caja-descripcion-pais" class="descripcion-pais mb-0"> ' + value.descripcion_pais + ' </p> <div class="contenedor-productos-pais"> <div id="id-container-crear" class="container d-flex justify-content-between p-0"></div> </div> </div>');
        });

        $.post('productodestacado.php?z=usa', function (data, stage) {
            // Datos productos
            data = $.parseJSON(data);
            console.log(data);

            $.each(data, function (key, value) {
                $('#id-container-crear').append(' <div class="col-md-4 m-0 col-destacado"> <div class="card card-destacado"><img class="card-img-top-destacado" src="assets/img/' + value.codigo + '.png" alt=""> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between align-items-center"> <div> <p class="price m-0">$ ' + value.precio + '</p> </div> <div><button class="boton-vermas btn btn-secondary px-3" type="button" data-id="' + value.id + '"> Ver más </button></div> </div> </div> </div> </div>');

            });

            $(".boton-vermas").off('click');
            $('.boton-vermas').click(function () {
                $.post('productomodal.php?h=modal', { 'producto_id': $(this).data('id') }).done(function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpo = '<div class="row"> <div class="col-5 p-0 imagen-grande-modal border"> <img src="assets/img/' + value.codigo + '.png" class="img-fluid img-modal-grande" alt=""> </div> <div class="col-7 px-4 py-0"> <div> <h2 class="nombre-modal">' + value.nombre + '</h2> <h5 class="categoria-modal"> Categoría: ' + value.categoria + '</h5> <p class="descripcion-modal m-0">' + value.descripcion + '</p> <p class="precio-modal">$' + value.precio + '</p> </div> <div id="id-img-modal" class="d-flex col-md-12 justify-content-between"></div> <div class="d-flex col-md-12 justify-content-end botonera-modal align-items-end"> <button type="button" class="boton-carrito-modal"> Agregar al Carro </button> </div> </div> </div>';
                        $('.modal-body').empty().append(cuerpo);
                        $('#vermodal').modal('show');
                    });
                });

                $.post('imgmodal.php?m=imgmodal', function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpote = '<div class="col-md-4 m-1 border col-destacado"> <img class="imagen-pequeña-modal" src="assets/img/' + value.codigo + '.png" alt="" data-codigo="' + value.codigo + '"></div>';
                        $('#id-img-modal').append(cuerpote);
                    });

                    $('.imagen-pequeña-modal').click(function () {
                        var codigoImagen = $(this).data("codigo");
                        var imagenGrandeSrc = "assets/img/" + codigoImagen + ".png";
                        $('.img-modal-grande').attr("src", imagenGrandeSrc);
                    });
                });

            });

            $('.boton-volver').click(function () {
                $('.container-todo').css('background', 'rgb(52,0,179)');
                $('.container-todo').css('background', 'linear-gradient(90deg, rgba(52,0,179,1) 0%, rgba(0,3,33,1) 100%)');
                $('#id-plantilla').remove();
                $('#id-mitad-texto').empty().append('<p id="text-home" class="texto-home"> Bienvenido a <span class="span-texto-home"> GLOBALMARKET </span> <br> Navega y compra por el mundo </p>');
                $(".fs-3dglobe-container").animate({
                    left: '0%',
                    top: '0%',
                    height: '100%',
                    width: '100%',
                }, 1000);
            });

        });

        $('#text-home').hide();
        $('#container-home').css('background-image', 'url("assets/img/usa-fondo.jpg")');
        $('.bandera-titulo').css('background-image', 'url("assets/img/pin-usa.png")');
        $(".fs-3dglobe-container").animate({
            left: '50%',
            top: '0%',
            height: '100%',
            width: '100%',
        }, 1000);
    });
});

//Pin FRANCIA - Mapa interactivo.
$(".francia-pin").click(function () {

    $.post('infopaises.php?b=infofrancia', function (data, stage) {
        data = $.parseJSON(data);
        console.log(data);

        $.each(data, function (key, value) {
            $('#id-mitad-texto').empty().append('<div id="id-plantilla" class="plantilla col-12"> <div class="container-titulo-pais d-flex col-md-12"> <div class="col-md-7 d-flex justify-content-start align-items-center"> <p id="caja-nombre-pais" class="nombre-pais mb-0"> ' + value.nombre_pais + ' </p> </div> <div class="col-md-2 d-flex justify-content-end align-items-center bandera-titulo"></div> <div class="col-md-3 d-flex justify-content-end align-items-center boton-titulo"> <button type="button" class="btn btn-primary boton-volver"> Navegar </button> </div> </div> <p id="caja-descripcion-pais" class="descripcion-pais mb-0"> ' + value.descripcion_pais + ' </p> <div class="contenedor-productos-pais"> <div id="id-container-crear" class="container d-flex justify-content-between p-0"></div> </div> </div>');
        });

        $.post('productodestacado.php?t=francia', function (data, stage) {
            // Datos productos
            data = $.parseJSON(data);
            console.log(data);

            $.each(data, function (key, value) {
                $('#id-container-crear').append(' <div class="col-md-4 m-0 col-destacado"> <div class="card card-destacado"><img class="card-img-top-destacado" src="assets/img/' + value.codigo + '.png" alt=""> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between align-items-center"> <div> <p class="price m-0">$ ' + value.precio + '</p> </div> <div><button class="boton-vermas btn btn-secondary px-3" type="button" data-id="' + value.id + '"> Ver más </button></div> </div> </div> </div> </div>');

            });

            $(".boton-vermas").off('click');
            $('.boton-vermas').click(function () {
                $.post('productomodal.php?h=modal', { 'producto_id': $(this).data('id') }).done(function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpo = '<div class="row"> <div class="col-5 p-0 imagen-grande-modal border"> <img src="assets/img/' + value.codigo + '.png" class="img-fluid img-modal-grande" alt=""> </div> <div class="col-7 px-4 py-0"> <div> <h2 class="nombre-modal">' + value.nombre + '</h2> <h5 class="categoria-modal"> Categoría: ' + value.categoria + '</h5> <p class="descripcion-modal m-0">' + value.descripcion + '</p> <p class="precio-modal">$' + value.precio + '</p> </div> <div id="id-img-modal" class="d-flex col-md-12 justify-content-between"></div> <div class="d-flex col-md-12 justify-content-end botonera-modal align-items-end"> <button type="button" class="boton-carrito-modal"> Agregar al Carro </button> </div> </div> </div>';
                        $('.modal-body').empty().append(cuerpo);
                        $('#vermodal').modal('show');
                    });
                });

                $.post('imgmodal.php?m=imgmodal', function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpote = '<div class="col-md-4 m-1 border col-destacado"> <img class="imagen-pequeña-modal" src="assets/img/' + value.codigo + '.png" alt="" data-codigo="' + value.codigo + '"></div>';
                        $('#id-img-modal').append(cuerpote);
                    });

                    $('.imagen-pequeña-modal').click(function () {
                        var codigoImagen = $(this).data("codigo");
                        var imagenGrandeSrc = "assets/img/" + codigoImagen + ".png";
                        $('.img-modal-grande').attr("src", imagenGrandeSrc);
                    });
                });

            });

            $('.boton-volver').click(function () {
                $('.container-todo').css('background', 'rgb(52,0,179)');
                $('.container-todo').css('background', 'linear-gradient(90deg, rgba(52,0,179,1) 0%, rgba(0,3,33,1) 100%)');
                $('#id-plantilla').remove();
                $('#id-mitad-texto').empty().append('<p id="text-home" class="texto-home"> Bienvenido a <span class="span-texto-home"> GLOBALMARKET </span> <br> Navega y compra por el mundo </p>');
                $(".fs-3dglobe-container").animate({
                    left: '0%',
                    top: '0%',
                    height: '100%',
                    width: '100%',
                }, 1000);
            });

        });

        $('#text-home').hide();
        $('#container-home').css('background-image', 'url("assets/img/francia-fondo.jpg")');
        $('.bandera-titulo').css('background-image', 'url("assets/img/pin-francia.png")');
        $(".fs-3dglobe-container").animate({
            left: '50%',
            top: '0%',
            height: '100%',
            width: '100%',
        }, 1000);
    });
});

//Pin MARRUECOS - Mapa interactivo.
$(".marruecos-pin").click(function () {

    $.post('infopaises.php?c=infomarruecos', function (data, stage) {
        data = $.parseJSON(data);
        console.log(data);

        $.each(data, function (key, value) {
            $('#id-mitad-texto').empty().append('<div id="id-plantilla" class="plantilla col-12"> <div class="container-titulo-pais d-flex col-md-12"> <div class="col-md-7 d-flex justify-content-start align-items-center"> <p id="caja-nombre-pais" class="nombre-pais mb-0"> ' + value.nombre_pais + ' </p> </div> <div class="col-md-2 d-flex justify-content-end align-items-center bandera-titulo"></div> <div class="col-md-3 d-flex justify-content-end align-items-center boton-titulo"> <button type="button" class="btn btn-primary boton-volver"> Navegar </button> </div> </div> <p id="caja-descripcion-pais" class="descripcion-pais mb-0"> ' + value.descripcion_pais + ' </p> <div class="contenedor-productos-pais"> <div id="id-container-crear" class="container d-flex justify-content-between p-0"></div> </div> </div>');
        });

        $.post('productodestacado.php?w=marruecos', function (data, stage) {
            // Datos productos
            data = $.parseJSON(data);
            console.log(data);

            $.each(data, function (key, value) {
                $('#id-container-crear').append(' <div class="col-md-4 m-0 col-destacado"> <div class="card card-destacado"><img class="card-img-top-destacado" src="assets/img/' + value.codigo + '.png" alt=""> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between align-items-center"> <div> <p class="price m-0">$ ' + value.precio + '</p> </div> <div><button class="boton-vermas btn btn-secondary px-3" type="button" data-id="' + value.id + '"> Ver más </button></div> </div> </div> </div> </div>');

            });

            $(".boton-vermas").off('click');
            $('.boton-vermas').click(function () {
                $.post('productomodal.php?h=modal', { 'producto_id': $(this).data('id') }).done(function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpo = '<div class="row"> <div class="col-5 p-0 imagen-grande-modal border"> <img src="assets/img/' + value.codigo + '.png" class="img-fluid img-modal-grande" alt=""> </div> <div class="col-7 px-4 py-0"> <div> <h2 class="nombre-modal">' + value.nombre + '</h2> <h5 class="categoria-modal"> Categoría: ' + value.categoria + '</h5> <p class="descripcion-modal m-0">' + value.descripcion + '</p> <p class="precio-modal">$' + value.precio + '</p> </div> <div id="id-img-modal" class="d-flex col-md-12 justify-content-between"></div> <div class="d-flex col-md-12 justify-content-end botonera-modal align-items-end"> <button type="button" class="boton-carrito-modal"> Agregar al Carro </button> </div> </div> </div>';
                        $('.modal-body').empty().append(cuerpo);
                        $('#vermodal').modal('show');
                    });
                });

                $.post('imgmodal.php?m=imgmodal', function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpote = '<div class="col-md-4 m-1 border col-destacado"> <img class="imagen-pequeña-modal" src="assets/img/' + value.codigo + '.png" alt="" data-codigo="' + value.codigo + '"></div>';
                        $('#id-img-modal').append(cuerpote);
                    });

                    $('.imagen-pequeña-modal').click(function () {
                        var codigoImagen = $(this).data("codigo");
                        var imagenGrandeSrc = "assets/img/" + codigoImagen + ".png";
                        $('.img-modal-grande').attr("src", imagenGrandeSrc);
                    });
                });

            });

            $('.boton-volver').click(function () {
                $('.container-todo').css('background', 'rgb(52,0,179)');
                $('.container-todo').css('background', 'linear-gradient(90deg, rgba(52,0,179,1) 0%, rgba(0,3,33,1) 100%)');
                $('#id-plantilla').remove();
                $('#id-mitad-texto').empty().append('<p id="text-home" class="texto-home"> Bienvenido a <span class="span-texto-home"> GLOBALMARKET </span> <br> Navega y compra por el mundo </p>');
                $(".fs-3dglobe-container").animate({
                    left: '0%',
                    top: '0%',
                    height: '100%',
                    width: '100%',
                }, 1000);
            });

        });

        $('#text-home').hide();
        $('#container-home').css('background-image', 'url("assets/img/marruecos-fondo.jpg")');
        $('.bandera-titulo').css('background-image', 'url("assets/img/pin-marruecos.png")');
        $(".fs-3dglobe-container").animate({
            left: '50%',
            top: '0%',
            height: '100%',
            width: '100%',
        }, 1000);
    });
});

//Pin JAPON - Mapa interactivo.
$(".japon-pin").click(function () {

    $.post('infopaises.php?d=infojapon', function (data, stage) {
        data = $.parseJSON(data);
        console.log(data);

        $.each(data, function (key, value) {
            $('#id-mitad-texto').empty().append('<div id="id-plantilla" class="plantilla col-12"> <div class="container-titulo-pais d-flex col-md-12"> <div class="col-md-7 d-flex justify-content-start align-items-center"> <p id="caja-nombre-pais" class="nombre-pais mb-0"> ' + value.nombre_pais + ' </p> </div> <div class="col-md-2 d-flex justify-content-end align-items-center bandera-titulo"></div> <div class="col-md-3 d-flex justify-content-end align-items-center boton-titulo"> <button type="button" class="btn btn-primary boton-volver"> Navegar </button> </div> </div> <p id="caja-descripcion-pais" class="descripcion-pais mb-0"> ' + value.descripcion_pais + ' </p> <div class="contenedor-productos-pais"> <div id="id-container-crear" class="container d-flex justify-content-between p-0"></div> </div> </div>');
        });

        $.post('productodestacado.php?n=japon', function (data, stage) {
            // Datos productos
            data = $.parseJSON(data);
            console.log(data);

            $.each(data, function (key, value) {
                $('#id-container-crear').append(' <div class="col-md-4 m-0 col-destacado"> <div class="card card-destacado"><img class="card-img-top-destacado" src="assets/img/' + value.codigo + '.png" alt=""> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between align-items-center"> <div> <p class="price m-0">$ ' + value.precio + '</p> </div> <div><button class="boton-vermas btn btn-secondary px-3" type="button" data-id="' + value.id + '"> Ver más </button></div> </div> </div> </div> </div>');

            });

            $(".boton-vermas").off('click');
            $('.boton-vermas').click(function () {
                $.post('productomodal.php?h=modal', { 'producto_id': $(this).data('id') }).done(function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpo = '<div class="row"> <div class="col-5 p-0 imagen-grande-modal border"> <img src="assets/img/' + value.codigo + '.png" class="img-fluid img-modal-grande" alt=""> </div> <div class="col-7 px-4 py-0"> <div> <h2 class="nombre-modal">' + value.nombre + '</h2> <h5 class="categoria-modal"> Categoría: ' + value.categoria + '</h5> <p class="descripcion-modal m-0">' + value.descripcion + '</p> <p class="precio-modal">$' + value.precio + '</p> </div> <div id="id-img-modal" class="d-flex col-md-12 justify-content-between"></div> <div class="d-flex col-md-12 justify-content-end botonera-modal align-items-end"> <button type="button" class="boton-carrito-modal"> Agregar al Carro </button> </div> </div> </div>';
                        $('.modal-body').empty().append(cuerpo);
                        $('#vermodal').modal('show');
                    });
                });

                $.post('imgmodal.php?m=imgmodal', function (data, stage) {
                    data = $.parseJSON(data);
                    console.log(data);

                    $.each(data, function (key, value) {
                        var cuerpote = '<div class="col-md-4 m-1 border col-destacado"> <img class="imagen-pequeña-modal" src="assets/img/' + value.codigo + '.png" alt="" data-codigo="' + value.codigo + '"></div>';
                        $('#id-img-modal').append(cuerpote);
                    });

                    $('.imagen-pequeña-modal').click(function () {
                        var codigoImagen = $(this).data("codigo");
                        var imagenGrandeSrc = "assets/img/" + codigoImagen + ".png";
                        $('.img-modal-grande').attr("src", imagenGrandeSrc);
                    });
                });

            });

            $('.boton-volver').click(function () {
                $('.container-todo').css('background', 'rgb(52,0,179)');
                $('.container-todo').css('background', 'linear-gradient(90deg, rgba(52,0,179,1) 0%, rgba(0,3,33,1) 100%)');
                $('#id-plantilla').remove();
                $('#id-mitad-texto').empty().append('<p id="text-home" class="texto-home"> Bienvenido a <span class="span-texto-home"> GLOBALMARKET </span> <br> Navega y compra por el mundo </p>');
                $(".fs-3dglobe-container").animate({
                    left: '0%',
                    top: '0%',
                    height: '100%',
                    width: '100%',
                }, 1000);
            });

        });

        $('#text-home').hide();
        $('#container-home').css('background-image', 'url("assets/img/japon-fondo.jpg")');
        $('.bandera-titulo').css('background-image', 'url("assets/img/pin-japon.png")');
        $(".fs-3dglobe-container").animate({
            left: '50%',
            top: '0%',
            height: '100%',
            width: '100%',
        }, 1000);
    });
});

    /* //FUNCIONA - RESPALDO
    // FUNCION para filtrar productos por categoría, país y región.
    var categoriasSeleccionadas = [];
    function filtrarProductos(categoria, urlParam) {
        var checkbox = $('#id-' + categoria);
    
        checkbox.change(function() {
            if (checkbox.is(':checked')) {
                categoriasSeleccionadas.push(urlParam);
            } else {
                var index = categoriasSeleccionadas.indexOf(urlParam);
                if (index !== -1) {
                    categoriasSeleccionadas.splice(index, 1);
                }
            }
    
            // Realizar una solicitud para mostrar productos basados en todas las categorías seleccionadas
            mostrarProductos();
        });
    }
    
    function mostrarProductos() {
        // Construir la URL con todas las categorías seleccionadas
        var url = 'globalmarket.php?' + categoriasSeleccionadas.join('&');
    
        // Realizar la solicitud
        $.post(url, function(data, status) {
            data = $.parseJSON(data);
    
            // Limpiar el área de productos antes de agregar los nuevos
            $('#id-area-productos').empty();
    
            $.each(data, function(key, value) {
                var cuerpitox = '<div class="container col-md-4 mt-3"> <div class="col-md-12 m-0"> <div class="card"> <div class="container-card-img-top"> <img class="card-img-top" src="assets/img/' + value.codigo + '.png" alt=""> </div> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between"> <div> <p class="price">$ ' + value.precio + '</p> </div> <div><i class="bi bi-heart-fill"></i><i class="bi bi-cart"></i></div> </div> </div> </div> </div> </div>';
                $('#id-area-productos').append(cuerpitox); // Agregar elementos nuevos dentro del contenedor
            });
        });
    }
    
    // Llamar a la función para filtrar productos por categoría
    filtrarProductos('abarrotes', 'abarrotes=abarrotes');
    filtrarProductos('bebestibles', 'bebestibles=bebestibles');
    filtrarProductos('aseo', 'aseo=aseo');
    filtrarProductos('panaderia', 'panaderia=panaderia');
    filtrarProductos('pasteleria', 'pasteleria=pasteleria');
    filtrarProductos('chile', 'chile=chile');
    filtrarProductos('usa', 'usa=usa');
    filtrarProductos('francia', 'francia=francia');
    filtrarProductos('marruecos', 'marruecos=marruecos');
    filtrarProductos('japon', 'japon=japon');
    filtrarProductos('sudamerica', 'sudamerica=sudamerica');
    filtrarProductos('norteamerica', 'norteamerica=norteamerica');
    filtrarProductos('europa', 'europa=europa');
    filtrarProductos('africa', 'africa=africa');
    filtrarProductos('asia', 'asia=asia');
    */

    var categoriasSeleccionadas = [];
    function filtrarProductos(categoria, urlParam) {
        var checkbox = $('#id-' + categoria);

        checkbox.change(function () {
            if (checkbox.is(':checked')) {
                categoriasSeleccionadas.push(urlParam);
            } else {
                var index = categoriasSeleccionadas.indexOf(urlParam);
                if (index !== -1) {
                    categoriasSeleccionadas.splice(index, 1);
                }
            }

            // Realizar una solicitud para mostrar productos basados en todas las categorías seleccionadas
            mostrarProductos();
        });
    }

    function mostrarProductos() {
        // Construir la URL con todas las categorías seleccionadas
        var url = 'globalmarket.php?' + categoriasSeleccionadas.join('&');

        // Realizar la solicitud
        $.post(url, function (data, status) {
            data = $.parseJSON(data);

            // Limpiar el área de productos antes de agregar los nuevos
            $('#id-area-productos').empty();

            $.each(data, function (key, value) {
                var cuerpitox = '<div class="container col-md-4 mt-3"> <div class="col-md-12 m-0"> <div class="card"> <div class="container-card-img-top"> <img class="card-img-top" src="assets/img/' + value.codigo + '.png" alt=""> </div> <div class="card-body bg-primary"> <h5 class="card-title1">' + value.categoria + '</h5> <h5 class="card-title">' + value.nombre + '</h5> <p class="card-text"></p> <hr> <div class="d-flex justify-content-between"> <div> <p class="price">$ ' + value.precio + '</p> </div> <div><i class="bi bi-heart-fill"></i><i class="bi bi-cart"></i></div> </div> </div> </div> </div> </div>';
                $('#id-area-productos').append(cuerpitox); // Agregar elementos nuevos dentro del contenedor
            });
        });
    }

    $('.boton-limpiar-filtros').click(function () {
        // Deselecciona todos los checkbox
        $('input[type="checkbox"]').prop('checked', false);

        // Limpia el arreglo de categorías seleccionadas
        categoriasSeleccionadas = [];

        // Actualiza la lista de productos
        mostrarProductos();
    });

    // Llamar a la función para filtrar productos por categoría
    filtrarProductos('abarrotes', 'abarrotes=abarrotes');
    filtrarProductos('bebestibles', 'bebestibles=bebestibles');
    filtrarProductos('aseo', 'aseo=aseo');
    filtrarProductos('panaderia', 'panaderia=panaderia');
    filtrarProductos('chile', 'chile=chile');
    filtrarProductos('usa', 'usa=usa');
    filtrarProductos('francia', 'francia=francia');
    filtrarProductos('marruecos', 'marruecos=marruecos');
    filtrarProductos('japon', 'japon=japon');
    filtrarProductos('sudamerica', 'sudamerica=sudamerica');
    filtrarProductos('norteamerica', 'norteamerica=norteamerica');
    filtrarProductos('europa', 'europa=europa');
    filtrarProductos('africa', 'africa=africa');
    filtrarProductos('asia', 'asia=asia');

});