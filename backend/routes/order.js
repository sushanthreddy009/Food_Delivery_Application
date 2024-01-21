const _0x375a15 = _0x4374;
(function (_0x37113a, _0x3b4291) {
  const _0x34d42d = _0x4374,
    _0x483313 = _0x37113a();
  while (!![]) {
    try {
      const _0x234e3e =
        parseInt(_0x34d42d(0x1aa)) / 0x1 +
        (parseInt(_0x34d42d(0x1ba)) / 0x2) *
          (-parseInt(_0x34d42d(0x1b6)) / 0x3) +
        (-parseInt(_0x34d42d(0x1af)) / 0x4) *
          (-parseInt(_0x34d42d(0x1b0)) / 0x5) +
        parseInt(_0x34d42d(0x1b2)) / 0x6 +
        (-parseInt(_0x34d42d(0x1b1)) / 0x7) *
          (-parseInt(_0x34d42d(0x1bd)) / 0x8) +
        (parseInt(_0x34d42d(0x1b3)) / 0x9) *
          (-parseInt(_0x34d42d(0x1ad)) / 0xa) +
        -parseInt(_0x34d42d(0x1ae)) / 0xb;
      if (_0x234e3e === _0x3b4291) break;
      else _0x483313["push"](_0x483313["shift"]());
    } catch (_0x66b173) {
      _0x483313["push"](_0x483313["shift"]());
    }
  }
})(_0x4f29, 0x94e73);
function _0x4f29() {
  const _0x4ef517 = [
    "866878oDPTOn",
    "route",
    "Router",
    "966860rKVmmA",
    "18284981CPrCqx",
    "20hGnJOb",
    "176405rvHCvT",
    "371pFBscZ",
    "7289190QaBUwr",
    "9YVyJuu",
    "../controllers/authController",
    "/me/myOrders",
    "5343udezbw",
    "/:id",
    "post",
    "protect",
    "1070vxWMkl",
    "../controllers/orderController",
    "get",
    "160536mzgyqH",
  ];
  _0x4f29 = function () {
    return _0x4ef517;
  };
  return _0x4f29();
}
const express = require("express"),
  router = express[_0x375a15(0x1ac)](),
  { newOrder, getSingleOrder, myOrders } = require(_0x375a15(0x1bb)),
  authController = require(_0x375a15(0x1b4));
function _0x4374(_0xe6c813, _0x4d6d95) {
  const _0x4f2932 = _0x4f29();
  return (
    (_0x4374 = function (_0x43749a, _0x497974) {
      _0x43749a = _0x43749a - 0x1aa;
      let _0x19d40b = _0x4f2932[_0x43749a];
      return _0x19d40b;
    }),
    _0x4374(_0xe6c813, _0x4d6d95)
  );
}
router["route"]("/new")[_0x375a15(0x1b8)](
  authController[_0x375a15(0x1b9)],
  newOrder
),
  router[_0x375a15(0x1ab)](_0x375a15(0x1b7))[_0x375a15(0x1bc)](
    authController[_0x375a15(0x1b9)],
    getSingleOrder
  ),
  router[_0x375a15(0x1ab)](_0x375a15(0x1b5))[_0x375a15(0x1bc)](
    authController[_0x375a15(0x1b9)],
    myOrders
  ),
  (module["exports"] = router);
