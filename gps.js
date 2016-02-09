function mostrar(posicion)
{
	document.write(posicion.coords.latitude + "," + posicion.coords.longitude);
}
navigator.geolocation.getCurrentPosition(mostrar);