var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every(function (user) {
  return user.hasSubmitted;
});
