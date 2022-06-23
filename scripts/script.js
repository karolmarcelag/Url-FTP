function convertir()
{
    if($("#privada").val() != "")
    {
        var urlPrivada = $("#privada").val()
        var a = urlPrivada.indexOf("ftp://")
        var b = urlPrivada.indexOf("@172.31.13.99/")
        var usuario = urlPrivada.substring(6, b)
        var ruta = urlPrivada.substring(b)
        var rutaCompleta =  ruta.substring(14)
        console.log("Usuario: " + usuario)
        console.log("Ruta: " + rutaCompleta)
        var urlPublica = urlPrivada.replace(urlPrivada, "https://ftp3.syscom.mx/usuarios/" + usuario + "/" + rutaCompleta)
        $("#publica").val(urlPublica)
    }
}

function copiar()
{
    var urlPublica = document.getElementById("publica").value
    navigator.clipboard.writeText(urlPublica)
    console.log(urlPublica)
}

/*function copiar()
{

    console.log('Funcion de copiar')
    if($("#privada").val() != "")
    {
        $("#publica").prop({"disabled":false})
        var urlPublica = document.getElementById("publica")
        urlPublica.ariaSelected()
        document.execCommand("copy")
        alert("Copied!")
    }
    else
    {
        $("#publica").prop({"disabled":true})
    }
}*/

    