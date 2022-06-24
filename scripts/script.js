function convertir()
{
    if($("#privada").val() != "")
    {
        var urlPrivada = $("#privada").val()
        var a = urlPrivada.indexOf("@172.31.13.99/")
        var usuario = urlPrivada.substring(6, a)
        var rutaCompleta = urlPrivada.substring(a)
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
        var urlPublica = document.getElementById("publica").value
        navigator.clipboard.writeText(urlPublica)
        console.log("URL Pública: " + urlPublica)
    }
}

function mensaje()
{
    $("#mensaje1").css({"display":"block"})
}

/*function esperar(espera)
{
    string = "pausa_alerta("+ espera +")"
    setTimeout(string, espera)
    //mensaje = setTimeout(mensaje, 2000)
}

function pausa_alerta(espera)
{
    alert("ok " + espera/1000 + " segundos")
    //window.setTimeout(mensaje(), 2000)
    /*alert("Copiado")
    clearTimeout(mensaje)*/
    //$("#mensaje1").prop({"disabled":false})
/*}*/

function vaciar()
{
    document.getElementById("privada").value = ""
    document.getElementById("publica").value = ""
}