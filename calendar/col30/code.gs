/**
* DOCUMENT CREATED BY JULIAN R. FIGUEROA
* about.me/julianrfigueroa
* This work is under a Creative 
* Commons License Atribution-ShareAlike 
* 3.0 Unported. CC-BY-SA
*/
/**
* Cambia colores independientemente deacuerdo a un
* código inicial.
*/
function manageColors(calendarId) {
  // CalendarAppExtended es una clase de una lib externa cuya documentación y manual es el siguiente:
  // https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/calendar
  // Lo tuve que usar porque en el momento de crear el presente no estaba la funcionalidad de
  // cambiarle el color a eventos individualmente sino a un calendario completo
  var cal = CalendarAppExtended.getCalendarById("EL_ID_DE_SU_COPIA_PROPIA_DEL_CALENDARIO");
  var events = cal.getEvents(new Date('09/01/2013'), new Date('09/06/2013'));
  for(var i in events){
    if(events[i].getTitle().indexOf("[AE]") == 0){ //Actividades Especiales
      events[i].setColor(11);
    } else if(events[i].getTitle().indexOf("[VJ]") == 0){ //Video Juegos
      events[i].setColor(6);
    } else if(events[i].getTitle().indexOf("[AM]") == 0){ //Aplicaciones Móviles
      events[i].setColor(10);
    } else if(events[i].getTitle().indexOf("[DEV]") == 0){ //Desarrollo
      events[i].setColor(5);
    } else if(events[i].getTitle().indexOf("[MK]") == 0){ //Música
      events[i].setColor(7);
    } else if(events[i].getTitle().indexOf("[TM]") == 0){ //TransMedia
      events[i].setColor(9);
    } else if(events[i].getTitle().indexOf("[AX]") == 0){ //Animación
      events[i].setColor(3);
    } else if(events[i].getTitle().indexOf("[NG]") == 0){ //Negocios
      events[i].setColor(8);
    }
  }
};