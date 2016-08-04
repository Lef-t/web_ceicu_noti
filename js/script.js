$(function() {
    function actualDay(date) {
        return date.getDate();
        // Devuelvo la fecha actual
    };

    function actualMonth(date) {
        var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return months[date.getMonth()];
        // Le paso date.getMonth() al vector months, que me devuelve el numero del mes y lo uso como índice para devolver el mes actual en español. 
    };

    function actualYear(date) {
        return date.getFullYear();
        // Devuelvo el año actual
    };

    function getActualDate() {
        var date = new Date();
        // Genero un objeto de tipo Date para después pasarlo a las funciones antes creadas
        return (actualDay(date) + " de " + actualMonth(date) + " de " + actualYear(date));
    }
    $("#timeToday").text(getActualDate());
    // Llamo a getDate() y lo inserto en HTML
});