var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
];

var deskTypes = desks.reduce(
  function (sum, desk) {
    if (desk.type === 'sitting') {
      sum.sitting++;
    } else {
      sum.standing++;
    }

    return sum;
  },
  { sitting: 0, standing: 0 }
);
