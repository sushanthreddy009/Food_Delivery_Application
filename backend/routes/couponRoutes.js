function _0x4b03(_0x993634, _0x5ba434) {
  const _0xae6f9c = _0xae6f();
  return (
    (_0x4b03 = function (_0x4b03b9, _0x14f57b) {
      _0x4b03b9 = _0x4b03b9 - 0x19f;
      let _0xb98895 = _0xae6f9c[_0x4b03b9];
      return _0xb98895;
    }),
    _0x4b03(_0x993634, _0x5ba434)
  );
}
function _0xae6f() {
  const _0x2ed81f = [
    "2945873sxtEjY",
    "exports",
    "/validate",
    "421356MvXIdr",
    "4868NkUWoG",
    "post",
    "route",
    "../controllers/couponController",
    "265PBgYLI",
    "8818443evfDDH",
    "768336leGAMh",
    "2861979VWOsNS",
    "delete",
    "252892zsDkka",
    "/:couponId",
    "express",
    "7cfsRai",
  ];
  _0xae6f = function () {
    return _0x2ed81f;
  };
  return _0xae6f();
}
const _0x1d8b98 = _0x4b03;
(function (_0x349655, _0x46f7f2) {
  const _0x5bba93 = _0x4b03,
    _0x5d5bd1 = _0x349655();
  while (!![]) {
    try {
      const _0x5bd120 =
        (parseInt(_0x5bba93(0x1a0)) / 0x1) *
          (parseInt(_0x5bba93(0x1ae)) / 0x2) +
        -parseInt(_0x5bba93(0x1ac)) / 0x3 +
        (-parseInt(_0x5bba93(0x1a5)) / 0x4) *
          (parseInt(_0x5bba93(0x1a9)) / 0x5) +
        parseInt(_0x5bba93(0x1a4)) / 0x6 +
        -parseInt(_0x5bba93(0x1a1)) / 0x7 +
        parseInt(_0x5bba93(0x1ab)) / 0x8 +
        parseInt(_0x5bba93(0x1aa)) / 0x9;
      if (_0x5bd120 === _0x46f7f2) break;
      else _0x5d5bd1["push"](_0x5d5bd1["shift"]());
    } catch (_0x43394e) {
      _0x5d5bd1["push"](_0x5d5bd1["shift"]());
    }
  }
})(_0xae6f, 0x9080c);
const express = require(_0x1d8b98(0x19f)),
  {
    createCoupon,
    getCoupon,
    updateCoupon,
    deleteCoupon,
    couponValidate,
  } = require(_0x1d8b98(0x1a8)),
  router = express["Router"]();
router[_0x1d8b98(0x1a7)]("/")[_0x1d8b98(0x1a6)](createCoupon)["get"](getCoupon),
  router[_0x1d8b98(0x1a7)](_0x1d8b98(0x1af))
    ["patch"](updateCoupon)
    [_0x1d8b98(0x1ad)](deleteCoupon),
  router["route"](_0x1d8b98(0x1a3))["post"](couponValidate),
  (module[_0x1d8b98(0x1a2)] = router);
