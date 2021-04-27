function* Generators() {
  yield "Gia tri lan 1";
  yield "gia tri lan 2";
  return "gia tri cuoi cung";
}

const thucThi = Generators();
console.log("la 1", thucThi.next());
console.log("la 2", thucThi.next());
console.log("la 3", thucThi.next());

/// nhuong cho function khac chay truoc

function* names() {
  yield "Đậu Xuân Quân";
}
function* text() {
  yield "Xin chào";
  yield* names();
  yield "22 tuổi";
}
const show = text();
console.log("L1:", show.next());
console.log("L2:", show.next());
console.log("L3:", show.next());

//// luon khong bao h dung lai

function* voTan() {
  while (true) {
    yield "Vong lap vo tan";
  }
}
const test = voTan();
console.log("l1 :", test.next());
console.log("l2 :", test.next());
