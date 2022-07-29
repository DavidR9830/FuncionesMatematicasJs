var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url:"tile.webp",
    cargaOk: false
};
var vaca = {
    url: "vaca.webp",
    cargaOk: false
};

var cantidad = aleatorio (5,25);

fondo.imagen = new Image (); // aca es donde se hace la carga de la fondo
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen= new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener ("load", cargarVacas);

function cargarFondo () 
{
 fondo.cargaOk = true;
 dibujar ();
}

function cargarVacas ()
{
    vaca.cargaOk = true;
    dibujar();
}

function dibujar () 
{
   
    if (fondo.cargaOk)
    {
        papel.drawImage (fondo.imagen,0,0);
    }

    for (var v= 0; v < 10; v++) 
    {
        if (vaca.cargaOk)
        {
            console.log (cantidad);
            var x = aleatorio (0,5);
            var y = aleatorio (0,5);
            var x = x* 80;
            var y = y * 80;

            papel.drawImage (vaca.imagen,x,y);
        }
    }
    
  
}



/*for (var i=0; i<10; i++)
{
    z = aleatorio (60,100);
    document.write(z + ", ");
}*/

function aleatorio (min,maxi)
{
    var resultado;
    resultado = Math.floor (Math.random() * (maxi - min +1)) + min;
    return resultado;
}