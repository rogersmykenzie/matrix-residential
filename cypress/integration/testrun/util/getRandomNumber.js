export default function getRandomNumber(low, high) {
  //inclusive
  return Math.floor(Math.random() * (high - low + 1)) + low;
}
