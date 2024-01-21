const _0x5ec153 = _0x3cdb;
(function (_0x2942ea, _0x37465b) {
  const _0x316953 = _0x3cdb,
    _0x477d70 = _0x2942ea();
  while (!![]) {
    try {
      const _0x680783 =
        -parseInt(_0x316953(0x7a)) / 0x1 +
        -parseInt(_0x316953(0x74)) / 0x2 +
        -parseInt(_0x316953(0x7b)) / 0x3 +
        parseInt(_0x316953(0x6c)) / 0x4 +
        -parseInt(_0x316953(0x76)) / 0x5 +
        -parseInt(_0x316953(0x79)) / 0x6 +
        parseInt(_0x316953(0x78)) / 0x7;
      if (_0x680783 === _0x37465b) break;
      else _0x477d70["push"](_0x477d70["shift"]());
    } catch (_0x2292a8) {
      _0x477d70["push"](_0x477d70["shift"]());
    }
  }
})(_0x2384, 0x65bdf);
const express = require(_0x5ec153(0x6e)),
  router = express[_0x5ec153(0x73)]({ mergeParams: !![] }),
  {
    getFoodItem,
    createFoodItem,
    getAllFoodItems,
    deleteFoodItem,
    updateFoodItem,
  } = require("../controllers/foodItemController");
function _0x2384() {
  const _0x4fd261 = [
    "patch",
    "delete",
    "exports",
    "Router",
    "930422WGlABH",
    "/item",
    "697440eutSdK",
    "route",
    "9714649KhZKSE",
    "3602910rHIlVi",
    "18960myqaoM",
    "103779hDJgaF",
    "1150660NrRVnv",
    "get",
    "express",
    "/items/:storeId",
  ];
  _0x2384 = function () {
    return _0x4fd261;
  };
  return _0x2384();
}
function _0x3cdb(_0x1d3dc4, _0x5018cb) {
  const _0x2384b6 = _0x2384();
  return (
    (_0x3cdb = function (_0x3cdb8f, _0x4ba179) {
      _0x3cdb8f = _0x3cdb8f - 0x6c;
      let _0x1ae143 = _0x2384b6[_0x3cdb8f];
      return _0x1ae143;
    }),
    _0x3cdb(_0x1d3dc4, _0x5018cb)
  );
}
router[_0x5ec153(0x77)](_0x5ec153(0x75))["post"](createFoodItem),
  router[_0x5ec153(0x77)](_0x5ec153(0x6f))[_0x5ec153(0x6d)](getAllFoodItems),
  router[_0x5ec153(0x77)]("/item/:foodId")
    ["get"](getFoodItem)
    [_0x5ec153(0x70)](updateFoodItem)
    [_0x5ec153(0x71)](deleteFoodItem),
  (module[_0x5ec153(0x72)] = router);
