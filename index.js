const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArr) {
  const winData =  objArr.find(obj => obj["result"] === "W" );
  return winData === undefined ? (winData) : (winData["year"]);
};