const _0x5e1f68 = _0x1bb5;
function _0x4428() {
  const _0x2407d0 = [
    "23866UnEdAx",
    "95538gSQDLi",
    "5205162fANMCD",
    "1582266bbeAlg",
    "mongoose",
    "env",
    "host",
    "connect",
    "then",
    "2435985TOZyGa",
    "log",
    "2401904Udsixp",
    "1544McRKXE",
    "MongoDB\x20Database\x20connected\x20with\x20HOST:",
    "2NUZeYb",
    "20lHzmPQ",
    "DB_LOCAL_URI",
    "exports",
  ];
  _0x4428 = function () {
    return _0x2407d0;
  };
  return _0x4428();
}
function _0x1bb5(_0x4b2efe, _0x500438) {
  const _0x442833 = _0x4428();
  return (
    (_0x1bb5 = function (_0x1bb55d, _0x126662) {
      _0x1bb55d = _0x1bb55d - 0x1dd;
      let _0x40f483 = _0x442833[_0x1bb55d];
      return _0x40f483;
    }),
    _0x1bb5(_0x4b2efe, _0x500438)
  );
}
(function (_0x54aec4, _0x432cd8) {
  const _0x4c8a7a = _0x1bb5,
    _0x235145 = _0x54aec4();
  while (!![]) {
    try {
      const _0x307e39 =
        (parseInt(_0x4c8a7a(0x1dd)) / 0x1) *
          (-parseInt(_0x4c8a7a(0x1eb)) / 0x2) +
        -parseInt(_0x4c8a7a(0x1de)) / 0x3 +
        (parseInt(_0x4c8a7a(0x1e9)) / 0x4) *
          (-parseInt(_0x4c8a7a(0x1ec)) / 0x5) +
        parseInt(_0x4c8a7a(0x1df)) / 0x6 +
        parseInt(_0x4c8a7a(0x1e0)) / 0x7 +
        -parseInt(_0x4c8a7a(0x1e8)) / 0x8 +
        -parseInt(_0x4c8a7a(0x1e6)) / 0x9;
      if (_0x307e39 === _0x432cd8) break;
      else _0x235145["push"](_0x235145["shift"]());
    } catch (_0x8a98a0) {
      _0x235145["push"](_0x235145["shift"]());
    }
  }
})(_0x4428, 0x719fe);
const mongoose = require(_0x5e1f68(0x1e1)),
  connectDatabase = () => {
    const _0x4f6198 = _0x5e1f68;
    mongoose[_0x4f6198(0x1e4)](process[_0x4f6198(0x1e2)][_0x4f6198(0x1ed)], {})[
      _0x4f6198(0x1e5)
    ]((_0x3c1038) => {
      const _0x327104 = _0x4f6198;
      console[_0x327104(0x1e7)](
        _0x327104(0x1ea) + _0x3c1038["connection"][_0x327104(0x1e3)]
      );
    });
  };
module[_0x5e1f68(0x1ee)] = connectDatabase;
