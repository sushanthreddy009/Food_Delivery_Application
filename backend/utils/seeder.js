function _0x1763(_0xabd848, _0x39c831) {
  const _0x164d20 = _0x164d();
  return (
    (_0x1763 = function (_0x176366, _0x15130d) {
      _0x176366 = _0x176366 - 0xd2;
      let _0x412cac = _0x164d20[_0x176366];
      return _0x412cac;
    }),
    _0x1763(_0xabd848, _0x39c831)
  );
}
const _0x555bab = _0x1763;
(function (_0x46681f, _0x575c78) {
  const _0x504ccb = _0x1763,
    _0x417ac0 = _0x46681f();
  while (!![]) {
    try {
      const _0xfa5bb0 =
        -parseInt(_0x504ccb(0xe2)) / 0x1 +
        (-parseInt(_0x504ccb(0xe5)) / 0x2) * (parseInt(_0x504ccb(0xdb)) / 0x3) +
        parseInt(_0x504ccb(0xe3)) / 0x4 +
        parseInt(_0x504ccb(0xe4)) / 0x5 +
        (parseInt(_0x504ccb(0xd3)) / 0x6) * (parseInt(_0x504ccb(0xd6)) / 0x7) +
        (-parseInt(_0x504ccb(0xda)) / 0x8) *
          (-parseInt(_0x504ccb(0xd7)) / 0x9) +
        (-parseInt(_0x504ccb(0xd4)) / 0xa) * (parseInt(_0x504ccb(0xd8)) / 0xb);
      if (_0xfa5bb0 === _0x575c78) break;
      else _0x417ac0["push"](_0x417ac0["shift"]());
    } catch (_0x513419) {
      _0x417ac0["push"](_0x417ac0["shift"]());
    }
  }
})(_0x164d, 0xd3274);
const Fooditem = require("../models/foodItem"),
  dotenv = require(_0x555bab(0xde)),
  connectDatabase = require(_0x555bab(0xd9)),
  fooditems = require(_0x555bab(0xe0)),
  { connect } = require(_0x555bab(0xdf));
dotenv[_0x555bab(0xdd)]({ path: "backend/config/config.env" }),
  connectDatabase();
const seedFooditems = async () => {
  const _0x40fc7b = _0x555bab;
  try {
    await Fooditem[_0x40fc7b(0xd5)](),
      await Fooditem[_0x40fc7b(0xd2)](fooditems),
      process["exit"]();
  } catch (_0xe89cb2) {
    console[_0x40fc7b(0xe1)](_0xe89cb2[_0x40fc7b(0xdc)]), process["exit"]();
  }
};
function _0x164d() {
  const _0x22b36e = [
    "33bdwLhv",
    "../config/database",
    "3061032wGoRLL",
    "3963WhgDkX",
    "message",
    "config",
    "dotenv",
    "mongoose",
    "../data/foodItem.json",
    "log",
    "1553569ZzpwJN",
    "4682012hporqs",
    "4776470PbjgEm",
    "1052OyBEpI",
    "insertMany",
    "3851664hSsVNn",
    "123570jmAGMz",
    "deleteMany",
    "7tAALyT",
    "9TDzZdp",
  ];
  _0x164d = function () {
    return _0x22b36e;
  };
  return _0x164d();
}
seedFooditems();
