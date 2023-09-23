function* genarateId() {
  for (let i = 65; i < 90; i++) {
    for (let j = 65; j < 90; j++) {
      yield String.fromCharCode(i, j);
    }
  }
}
const id = genarateId();
export default id;
