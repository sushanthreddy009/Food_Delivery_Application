function _0x269e() {
  const _0x47b051 = [
    "../controllers/restaurantController",
    "route",
    "get",
    "delete",
    "182vevUIP",
    "/:storeId/reviews",
    "101703xsQcnS",
    "9198936IFvCNN",
    "express",
    "332936hLBJuQ",
    "8041743RsNdsO",
    "post",
    "1441804jBcdoh",
    "713058XhBRId",
    "exports",
    "use",
    "./menu",
    "877396uYkfCM",
    "/:storeId",
    "Router",
    "5egPlRh",
  ];
  _0x269e = function () {
    return _0x47b051;
  };
  return _0x269e();
}
const _0x41d284 = _0x1603;
(function (_0x4c04f8, _0x1a48d8) {
  const _0x5c184d = _0x1603,
    _0x1ef13c = _0x4c04f8();
  while (!![]) {
    try {
      const _0x5e3358 =
        parseInt(_0x5c184d(0x1d5)) / 0x1 +
        parseInt(_0x5c184d(0x1d4)) / 0x2 +
        parseInt(_0x5c184d(0x1ce)) / 0x3 +
        -parseInt(_0x5c184d(0x1d9)) / 0x4 +
        (parseInt(_0x5c184d(0x1c7)) / 0x5) *
          (parseInt(_0x5c184d(0x1cf)) / 0x6) +
        (parseInt(_0x5c184d(0x1cc)) / 0x7) *
          (-parseInt(_0x5c184d(0x1d1)) / 0x8) +
        -parseInt(_0x5c184d(0x1d2)) / 0x9;
      if (_0x5e3358 === _0x1a48d8) break;
      else _0x1ef13c["push"](_0x1ef13c["shift"]());
    } catch (_0x2d77e9) {
      _0x1ef13c["push"](_0x1ef13c["shift"]());
    }
  }
})(_0x269e, 0xc4cd3);
function _0x1603(_0x387859, _0x3476f0) {
  const _0x269e54 = _0x269e();
  return (
    (_0x1603 = function (_0x160379, _0x44fbd) {
      _0x160379 = _0x160379 - 0x1c5;
      let _0x37ccdc = _0x269e54[_0x160379];
      return _0x37ccdc;
    }),
    _0x1603(_0x387859, _0x3476f0)
  );
}
const express = require(_0x41d284(0x1d0)),
  router = express[_0x41d284(0x1c6)]({ mergeParams: !![] }),
  {
    getAllRestaurants,
    createRestaurant,
    getRestaurant,
    deleteRestaurant,
  } = require(_0x41d284(0x1c8)),
  menuRoutes = require(_0x41d284(0x1d8)),
  reviewRoutes = require("./reviewsRoutes");
router[_0x41d284(0x1c9)]("/")
  [_0x41d284(0x1ca)](getAllRestaurants)
  [_0x41d284(0x1d3)](createRestaurant),
  router["route"](_0x41d284(0x1c5))
    ["get"](getRestaurant)
    [_0x41d284(0x1cb)](deleteRestaurant),
  router[_0x41d284(0x1d7)]("/:storeId/menus", menuRoutes),
  router[_0x41d284(0x1d7)](_0x41d284(0x1cd), reviewRoutes),
  (module[_0x41d284(0x1d6)] = router);
