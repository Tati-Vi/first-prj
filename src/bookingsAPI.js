const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  console.log("🚀 ~ file: bookingsAPI.js:11 ~ fetchAPI ~ date:", date)
  let result = [];

  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  console.log("🚀 ~ file: bookingsAPI.js:17 ~ fetchAPI ~ random:", random())
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  console.log("🚀 ~ file: bookingsAPI.js:12 ~ fetchAPI ~ result:", result)
  return result;
}

export function submitAPI(formData) {
  console.log("🚀 ~ file: bookingsAPI.js:32 ~ submitAPI ~ formData:", formData)
  return true;
}
