function manageColors(calendarId) {
  var cal = CalendarAppExtended.getCalendarById("kuu19cijr6rmb2jhr3mn442ivc@group.calendar.google.com");
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