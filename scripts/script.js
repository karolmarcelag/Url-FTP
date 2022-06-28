var codigo = ""

function generar()
{
    var urlPrivada = $("#privada").val()
    var a = urlPrivada.indexOf("ftp://")
    var b = urlPrivada.indexOf("@172.31.13.99/")
    if(a >= 0 && b > 0)
    {
        var usuario = urlPrivada.substring(6, b)
        var rutaCompleta = urlPrivada.substring(b)
        var ruta =  rutaCompleta.substring(14)
        console.log("Usuario: " + usuario)
        console.log("Ruta: " + ruta)
        var urlPublica = urlPrivada.replace(urlPrivada, "https://ftp3.syscom.mx/usuarios/" + usuario + "/" + ruta)
        $("#publica").val(urlPublica)
    }
}

function copiar()
{
    if($("#privada").val() != "")
    {
        var urlPublica = $("#publica").val()
        navigator.clipboard.writeText(urlPublica)
        console.log("URL Pública: " + urlPublica)
    }
}

function ocultar()
{
    $("#mensaje1").css({"display":"none"})
    $("#mensaje2").css({"display":"none"})
}

function limpiar()
{
    $("#privada").val("")
    $("#publica").val("")
}

function validar()
{
    var urlPrivada = $("#privada").val()
    var a = urlPrivada.indexOf("ftp://")
    var b = urlPrivada.indexOf("@172.31.13.99/")
    if(a >= 0 && b > 0)
    {
        $("#mensaje1").css({"display":"block"})
        setTimeout(ocultar, 2000)
    }
    else
    {
        $("#publica").val("")
        $("#mensaje2").css({"display":"block"})
        setTimeout(ocultar, 2000)
    }
}

function mostrar()
{
    var urlPrivada = $("#privada").val()
    var a = urlPrivada.indexOf("ftp://")
    var b = urlPrivada.indexOf("@172.31.13.99/")
    if(a >= 0 && b > 0)
    {
        codigo = 
        "<div style='width:100%;'>"+
            $("#publica").val() +
        "</div><br>" + codigo
        $("#tabla").html(codigo)        
    }
}