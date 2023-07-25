var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = 
  trips.map(function(speed){
    return speed.distance / speed.time ;
  }
  );
