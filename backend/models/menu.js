const _0x508988 = _0x1c32;
(function (_0x4f146c, _0x5d100f) {
  const _0x176858 = _0x1c32,
    _0x214443 = _0x4f146c();
  while (!![]) {
    try {
      const _0xa30074 =
        parseInt(_0x176858(0xd1)) / 0x1 +
        (parseInt(_0x176858(0xd0)) / 0x2) * (parseInt(_0x176858(0xc7)) / 0x3) +
        (parseInt(_0x176858(0xd3)) / 0x4) * (parseInt(_0x176858(0xc6)) / 0x5) +
        (parseInt(_0x176858(0xce)) / 0x6) * (-parseInt(_0x176858(0xc1)) / 0x7) +
        (-parseInt(_0x176858(0xcd)) / 0x8) * (parseInt(_0x176858(0xc8)) / 0x9) +
        (-parseInt(_0x176858(0xcf)) / 0xa) * (parseInt(_0x176858(0xc2)) / 0xb) +
        (parseInt(_0x176858(0xc4)) / 0xc) * (-parseInt(_0x176858(0xcb)) / 0xd);
      if (_0xa30074 === _0x5d100f) break;
      else _0x214443["push"](_0x214443["shift"]());
    } catch (_0x2c3f8b) {
      _0x214443["push"](_0x214443["shift"]());
    }
  }
})(_0x46e5, 0xe173e);
const mongoose = require("mongoose"),
  menuSchema = new mongoose[_0x508988(0xca)](
    {
      menu: [
        {
          category: { type: String },
          items: [
            {
              type: mongoose[_0x508988(0xca)][_0x508988(0xc5)][_0x508988(0xc3)],
              ref: "FoodItem",
            },
          ],
        },
      ],
      restaurant: {
        type: mongoose[_0x508988(0xca)][_0x508988(0xc5)][_0x508988(0xc3)],
        ref: _0x508988(0xcc),
      },
    },
    { toJSON: { virtuals: !![] }, toObject: { virtuals: !![] } }
  );
function _0x1c32(_0x35b88d, _0x504caf) {
  const _0x46e51e = _0x46e5();
  return (
    (_0x1c32 = function (_0x1c3262, _0x5b58da) {
      _0x1c3262 = _0x1c3262 - 0xc1;
      let _0x4887ec = _0x46e51e[_0x1c3262];
      return _0x4887ec;
    }),
    _0x1c32(_0x35b88d, _0x504caf)
  );
}
function _0x46e5() {
  const _0x2ea702 = [
    "10504CccOMp",
    "Restaurant",
    "335752kjEorH",
    "497778VNLQWI",
    "10FjkZAc",
    "2882102ZvRfLy",
    "664456duxXVM",
    "Menu",
    "20AcjQad",
    "105kgNvlc",
    "7576547qIiVsN",
    "ObjectId",
    "3324rPYfpG",
    "Types",
    "1184830ZITjrL",
    "3FgulBc",
    "45WuvuQN",
    "model",
    "Schema",
  ];
  _0x46e5 = function () {
    return _0x2ea702;
  };
  return _0x46e5();
}
(Menu = mongoose[_0x508988(0xc9)](_0x508988(0xd2), menuSchema)),
  (module["exports"] = Menu);
