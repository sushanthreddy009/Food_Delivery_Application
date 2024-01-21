function _0x4334(_0xea2b1f, _0x1fc775) {
  const _0x42d1f0 = _0x42d1();
  return (
    (_0x4334 = function (_0x433452, _0x3d6a85) {
      _0x433452 = _0x433452 - 0xbb;
      let _0xb9f71 = _0x42d1f0[_0x433452];
      return _0xb9f71;
    }),
    _0x4334(_0xea2b1f, _0x1fc775)
  );
}
const _0x193a55 = _0x4334;
(function (_0x369365, _0x41941c) {
  const _0x328c05 = _0x4334,
    _0x3bbe96 = _0x369365();
  while (!![]) {
    try {
      const _0x4b7e96 =
        parseInt(_0x328c05(0xbd)) / 0x1 +
        -parseInt(_0x328c05(0xc8)) / 0x2 +
        (parseInt(_0x328c05(0xca)) / 0x3) * (parseInt(_0x328c05(0xc7)) / 0x4) +
        (parseInt(_0x328c05(0xc6)) / 0x5) * (-parseInt(_0x328c05(0xc4)) / 0x6) +
        -parseInt(_0x328c05(0xc1)) / 0x7 +
        (parseInt(_0x328c05(0xc9)) / 0x8) * (-parseInt(_0x328c05(0xbf)) / 0x9) +
        parseInt(_0x328c05(0xc2)) / 0xa;
      if (_0x4b7e96 === _0x41941c) break;
      else _0x3bbe96["push"](_0x3bbe96["shift"]());
    } catch (_0x184d8a) {
      _0x3bbe96["push"](_0x3bbe96["shift"]());
    }
  }
})(_0x42d1, 0xd3715);
const mongoose = require(_0x193a55(0xc5)),
  restaurantSchema = new mongoose[_0x193a55(0xbb)]({
    name: {
      type: String,
      required: [!![], "Please\x20enter\x20the\x20restaurant\x20name"],
      trim: !![],
      maxLength: [0x64, _0x193a55(0xc3)],
    },
    isVeg: { type: Boolean, default: ![] },
    address: {
      type: String,
      required: [!![], "Please\x20enter\x20the\x20restaurant\x20address"],
    },
    ratings: { type: Number, default: 0x0 },
    numOfReviews: { type: Number, default: 0x0 },
    location: {
      type: { type: String, enum: ["Point"], required: !![] },
      coordinates: { type: [Number], required: !![] },
    },
    reviews: [
      {
        name: { type: String, required: !![] },
        rating: { type: Number, required: !![] },
        Comment: { type: String, required: !![] },
      },
    ],
    images: [
      {
        public_id: { type: String, required: !![] },
        url: { type: String, required: !![] },
      },
    ],
    createdAt: { type: Date, default: Date[_0x193a55(0xbc)] },
  });
function _0x42d1() {
  const _0x553c3e = [
    "text",
    "index",
    "Schema",
    "now",
    "108753hbOLfx",
    "2dsphere",
    "5538852pPpBre",
    "exports",
    "11177474ZJHzgJ",
    "43552990BZTOFY",
    "Restaurant\x20name\x20cannot\x20exceed\x20100\x20characters",
    "6CIYRKh",
    "mongoose",
    "8169915nuFEHs",
    "38644pcPDxB",
    "1615430toUjxb",
    "16aWHDiM",
    "519iCayXN",
  ];
  _0x42d1 = function () {
    return _0x553c3e;
  };
  return _0x42d1();
}
restaurantSchema[_0x193a55(0xcc)]({ location: _0x193a55(0xbe) }),
  restaurantSchema["index"]({ address: _0x193a55(0xcb) }),
  (module[_0x193a55(0xc0)] = mongoose["model"]("Restaurant", restaurantSchema));
