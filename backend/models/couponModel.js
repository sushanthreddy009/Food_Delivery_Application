function _0x488b(_0x5afbbf, _0x9ede6b) {
  const _0x1d68f9 = _0x1d68();
  return (
    (_0x488b = function (_0x488baa, _0x283896) {
      _0x488baa = _0x488baa - 0x15c;
      let _0x148744 = _0x1d68f9[_0x488baa];
      return _0x148744;
    }),
    _0x488b(_0x5afbbf, _0x9ede6b)
  );
}
const _0x1b15ea = _0x488b;
function _0x1d68() {
  const _0x3d2e62 = [
    "2354247ccPmfT",
    "mongoose",
    "model",
    "coupon",
    "502bTEmhh",
    "1578fWZTGP",
    "String",
    "11zSCHbG",
    "959416nWOQKf",
    "9157030CUhBNL",
    "1154901hanuoO",
    "517WTObGn",
    "Schema",
    "5827149ekhKUv",
    "60XzVGiP",
    "8xmoZiu",
  ];
  _0x1d68 = function () {
    return _0x3d2e62;
  };
  return _0x1d68();
}
(function (_0x41fad6, _0x7fa0b5) {
  const _0x29e2bc = _0x488b,
    _0x236088 = _0x41fad6();
  while (!![]) {
    try {
      const _0x3210d0 =
        (-parseInt(_0x29e2bc(0x15e)) / 0x1) *
          (parseInt(_0x29e2bc(0x167)) / 0x2) +
        -parseInt(_0x29e2bc(0x15d)) / 0x3 +
        parseInt(_0x29e2bc(0x16b)) / 0x4 +
        (parseInt(_0x29e2bc(0x161)) / 0x5) *
          (parseInt(_0x29e2bc(0x168)) / 0x6) +
        (-parseInt(_0x29e2bc(0x163)) / 0x7) *
          (-parseInt(_0x29e2bc(0x162)) / 0x8) +
        -parseInt(_0x29e2bc(0x160)) / 0x9 +
        (parseInt(_0x29e2bc(0x15c)) / 0xa) * (parseInt(_0x29e2bc(0x16a)) / 0xb);
      if (_0x3210d0 === _0x7fa0b5) break;
      else _0x236088["push"](_0x236088["shift"]());
    } catch (_0x2914e6) {
      _0x236088["push"](_0x236088["shift"]());
    }
  }
})(_0x1d68, 0x51427);
const mongoose = require(_0x1b15ea(0x164)),
  couponSchema = new mongoose[_0x1b15ea(0x15f)]({
    couponName: { type: String, required: !![], unique: !![], upperCase: !![] },
    subTitle: { type: _0x1b15ea(0x169), required: !![] },
    minAmount: { type: Number, required: !![] },
    maxDiscount: { type: Number },
    discount: { type: Number, required: !![] },
    details: { type: String, required: !![] },
    expire: { type: Date, required: !![] },
  });
module["exports"] = mongoose[_0x1b15ea(0x165)](_0x1b15ea(0x166), couponSchema);
