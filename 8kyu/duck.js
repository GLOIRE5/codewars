/*Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name
*/
function duckDuckGoose(players, position) {
  return players[(position - 1) % players.length].name;
}