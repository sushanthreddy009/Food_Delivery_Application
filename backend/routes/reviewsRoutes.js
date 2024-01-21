const _0x42309e = _0x1a39;
(function (_0xa436b3, _0x75b29e) {
  const _0x2dfc8e = _0x1a39,
    _0x1f6409 = _0xa436b3();
  while (!![]) {
    try {
      const _0x1421c7 =
        parseInt(_0x2dfc8e(0xfc)) / 0x1 +
        (-parseInt(_0x2dfc8e(0xf4)) / 0x2) *
          (parseInt(_0x2dfc8e(0x102)) / 0x3) +
        -parseInt(_0x2dfc8e(0xfb)) / 0x4 +
        -parseInt(_0x2dfc8e(0xf6)) / 0x5 +
        -parseInt(_0x2dfc8e(0xf8)) / 0x6 +
        (-parseInt(_0x2dfc8e(0xf9)) / 0x7) *
          (-parseInt(_0x2dfc8e(0xfd)) / 0x8) +
        parseInt(_0x2dfc8e(0xf3)) / 0x9;
      if (_0x1421c7 === _0x75b29e) break;
      else _0x1f6409["push"](_0x1f6409["shift"]());
    } catch (_0x152bd9) {
      _0x1f6409["push"](_0x1f6409["shift"]());
    }
  }
})(_0x5ed5, 0xd17e4);
function _0x1a39(_0x5cc1ee, _0x45355c) {
  const _0x5ed566 = _0x5ed5();
  return (
    (_0x1a39 = function (_0x1a39c3, _0x73b97c) {
      _0x1a39c3 = _0x1a39c3 - 0xf3;
      let _0x1c417a = _0x5ed566[_0x1a39c3];
      return _0x1c417a;
    }),
    _0x1a39(_0x5cc1ee, _0x45355c)
  );
}
function _0x5ed5() {
  const _0x1af521 = [
    "patch",
    "../controllers/authController",
    "1496130VKeGry",
    "delete",
    "get",
    "27807966uahLxr",
    "6FDBIwL",
    "Router",
    "8204400fwCrNt",
    "post",
    "3200298bDxfWA",
    "1939553HnQlrl",
    "../controllers/reviewController",
    "1566704ePrZzy",
    "722063odUiqJ",
    "32WhtoRL",
    "/:reviewId",
    "express",
  ];
  _0x5ed5 = function () {
    return _0x1af521;
  };
  return _0x5ed5();
}
const express = require(_0x42309e(0xff)),
  router = express[_0x42309e(0xf5)]({ mergeParams: !![] }),
  {
    setUserRestaurantIds,
    createReviews,
    getAllReviews,
    getReview,
    updateReview,
    deleteReview,
  } = require(_0x42309e(0xfa)),
  authController = require(_0x42309e(0x101));
router["use"](authController["protect"]),
  router["route"]("/")
    ["get"](getAllReviews)
    [_0x42309e(0xf7)](setUserRestaurantIds, createReviews),
  router["route"](_0x42309e(0xfe))
    [_0x42309e(0x104)](getReview)
    [_0x42309e(0x100)](updateReview)
    [_0x42309e(0x103)](deleteReview),
  (module["exports"] = router);
