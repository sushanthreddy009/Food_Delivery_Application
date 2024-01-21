function _0xcbab(_0x41206c, _0x334f50) {
  const _0x15ecc0 = _0x15ec();
  return (
    (_0xcbab = function (_0xcbabb1, _0x108e95) {
      _0xcbabb1 = _0xcbabb1 - 0x1b9;
      let _0x100efb = _0x15ecc0[_0xcbabb1];
      return _0x100efb;
    }),
    _0xcbab(_0x41206c, _0x334f50)
  );
}
const _0x4c5583 = _0xcbab;
function _0x15ec() {
  const _0x5bf91a = [
    "345668cxSSsX",
    "/count",
    "192uNfVJQ",
    "json",
    "status",
    "709065fNiOAB",
    "30YxWNZe",
    "440sIfZqf",
    "17567011hnSemw",
    "express",
    "604649tvjPol",
    "Router",
    "62982oVJJOx",
    "7954820mmducb",
    "2MwmXud",
    "../models/restaurant",
    "134169AREisn",
    "countDocuments",
    "get",
  ];
  _0x15ec = function () {
    return _0x5bf91a;
  };
  return _0x15ec();
}
(function (_0x1177e5, _0x18f215) {
  const _0x4634d2 = _0xcbab,
    _0x432904 = _0x1177e5();
  while (!![]) {
    try {
      const _0x855b96 =
        (parseInt(_0x4634d2(0x1c4)) / 0x1) *
          (parseInt(_0x4634d2(0x1c8)) / 0x2) +
        -parseInt(_0x4634d2(0x1bf)) / 0x3 +
        (parseInt(_0x4634d2(0x1ba)) / 0x4) *
          (-parseInt(_0x4634d2(0x1c0)) / 0x5) +
        (parseInt(_0x4634d2(0x1bc)) / 0x6) *
          (-parseInt(_0x4634d2(0x1ca)) / 0x7) +
        (-parseInt(_0x4634d2(0x1c1)) / 0x8) *
          (-parseInt(_0x4634d2(0x1c6)) / 0x9) +
        -parseInt(_0x4634d2(0x1c7)) / 0xa +
        parseInt(_0x4634d2(0x1c2)) / 0xb;
      if (_0x855b96 === _0x18f215) break;
      else _0x432904["push"](_0x432904["shift"]());
    } catch (_0x5d8dd1) {
      _0x432904["push"](_0x432904["shift"]());
    }
  }
})(_0x15ec, 0x673c9);
const express = require(_0x4c5583(0x1c3)),
  router = express[_0x4c5583(0x1c5)](),
  Restaurant = require(_0x4c5583(0x1c9));
router[_0x4c5583(0x1b9)](_0x4c5583(0x1bb), async (_0x1770dd, _0xf3b9ae) => {
  const _0x39cc9c = _0x4c5583;
  try {
    const _0x43eb26 = await Restaurant[_0x39cc9c(0x1cb)]();
    _0xf3b9ae["json"]({ count: _0x43eb26 });
  } catch (_0x48a0d5) {
    _0xf3b9ae[_0x39cc9c(0x1be)](0x1f4)[_0x39cc9c(0x1bd)]({
      error: "Unable\x20to\x20fetch\x20the\x20number\x20of\x20restaurants.",
    });
  }
}),
  (module["exports"] = router);
