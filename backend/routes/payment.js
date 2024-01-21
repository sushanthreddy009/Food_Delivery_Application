const _0x4d6768 = _0x234f;
(function (_0x2ebf74, _0x1b5dbb) {
  const _0x26ceae = _0x234f,
    _0xde31f1 = _0x2ebf74();
  while (!![]) {
    try {
      const _0x3a2e2b =
        (parseInt(_0x26ceae(0xdf)) / 0x1) * (parseInt(_0x26ceae(0xe5)) / 0x2) +
        (parseInt(_0x26ceae(0xdd)) / 0x3) * (-parseInt(_0x26ceae(0xe4)) / 0x4) +
        parseInt(_0x26ceae(0xe1)) / 0x5 +
        -parseInt(_0x26ceae(0xe3)) / 0x6 +
        (-parseInt(_0x26ceae(0xd5)) / 0x7) *
          (-parseInt(_0x26ceae(0xde)) / 0x8) +
        parseInt(_0x26ceae(0xe0)) / 0x9 +
        (-parseInt(_0x26ceae(0xdc)) / 0xa) * (parseInt(_0x26ceae(0xd7)) / 0xb);
      if (_0x3a2e2b === _0x1b5dbb) break;
      else _0xde31f1["push"](_0xde31f1["shift"]());
    } catch (_0x5f4afa) {
      _0xde31f1["push"](_0xde31f1["shift"]());
    }
  }
})(_0x57fa, 0xee1d3);
const express = require(_0x4d6768(0xe6)),
  router = express[_0x4d6768(0xd8)](),
  authController = require(_0x4d6768(0xe9)),
  { processPayment, sendStripApi } = require(_0x4d6768(0xd6));
function _0x234f(_0x5ee74b, _0x4b9efe) {
  const _0x57fa93 = _0x57fa();
  return (
    (_0x234f = function (_0x234f82, _0x980ce5) {
      _0x234f82 = _0x234f82 - 0xd5;
      let _0x42d54f = _0x57fa93[_0x234f82];
      return _0x42d54f;
    }),
    _0x234f(_0x5ee74b, _0x4b9efe)
  );
}
router[_0x4d6768(0xe2)](_0x4d6768(0xe8))[_0x4d6768(0xdb)](
  authController[_0x4d6768(0xda)],
  processPayment
),
  router[_0x4d6768(0xe2)]("/stripeapi")[_0x4d6768(0xd9)](
    authController[_0x4d6768(0xda)],
    sendStripApi
  ),
  (module[_0x4d6768(0xe7)] = router);
function _0x57fa() {
  const _0x897fc3 = [
    "1HMASiF",
    "11935926pifLxz",
    "9405655OMFQSN",
    "route",
    "7623288QKQpke",
    "1281464GMXeJB",
    "47716ZngOhy",
    "express",
    "exports",
    "/payment/process",
    "../controllers/authController",
    "28DZEQaJ",
    "../controllers/paymentController",
    "17876738CbWpDF",
    "Router",
    "get",
    "protect",
    "post",
    "10zBYrng",
    "9pNzSBe",
    "3201832mYjFHe",
  ];
  _0x57fa = function () {
    return _0x897fc3;
  };
  return _0x57fa();
}
