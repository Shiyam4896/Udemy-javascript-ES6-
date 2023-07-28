var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (sum, trip) {
  return trip.distance + sum;
}, 0);
