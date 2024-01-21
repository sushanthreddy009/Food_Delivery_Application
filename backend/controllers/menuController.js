function _0x5382(_0x41e9ef, _0x5ee2b0) {
  const _0x147196 = _0x1471();
  return (
    (_0x5382 = function (_0x538203, _0x1d4ed8) {
      _0x538203 = _0x538203 - 0x1cb;
      let _0x418be7 = _0x147196[_0x538203];
      return _0x418be7;
    }),
    _0x5382(_0x41e9ef, _0x5ee2b0)
  );
}
const _0x3ab57b = _0x5382;
(function (_0x29df74, _0x42d037) {
  const _0x326a27 = _0x5382,
    _0x3afdf8 = _0x29df74();
  while (!![]) {
    try {
      const _0x226fef =
        (parseInt(_0x326a27(0x1e1)) / 0x1) *
          (parseInt(_0x326a27(0x1cd)) / 0x2) +
        -parseInt(_0x326a27(0x1da)) / 0x3 +
        (-parseInt(_0x326a27(0x1d6)) / 0x4) *
          (parseInt(_0x326a27(0x1d8)) / 0x5) +
        parseInt(_0x326a27(0x1d4)) / 0x6 +
        -parseInt(_0x326a27(0x1cf)) / 0x7 +
        -parseInt(_0x326a27(0x1e0)) / 0x8 +
        parseInt(_0x326a27(0x1d9)) / 0x9;
      if (_0x226fef === _0x42d037) break;
      else _0x3afdf8["push"](_0x3afdf8["shift"]());
    } catch (_0x3c8ccf) {
      _0x3afdf8["push"](_0x3afdf8["shift"]());
    }
  }
})(_0x1471, 0xe7554);
const Menu = require(_0x3ab57b(0x1df)),
  ErrorHandler = require("../utils/errorHandler"),
  catchAsync = require(_0x3ab57b(0x1db)),
  Restaurant = require("../models/restaurant");
function _0x1471() {
  const _0xec6e9 = [
    "135AXfaEQ",
    "28870110UHPbAM",
    "1780521KbQkSh",
    "../middlewares/catchAsyncErrors",
    "populate",
    "deleteMenu",
    "exec",
    "../models/menu",
    "1151736ytbPma",
    "246872plULIf",
    "storeId",
    "success",
    "json",
    "2kwpNgT",
    "create",
    "13169422ZzDAzT",
    "createMenu",
    "status",
    "params",
    "FoodItem",
    "5913966zjnKKx",
    "menu.items",
    "129476GjHasj",
    "getAllMenus",
  ];
  _0x1471 = function () {
    return _0xec6e9;
  };
  return _0x1471();
}
(exports[_0x3ab57b(0x1d7)] = catchAsync(
  async (_0x319735, _0x3aea3b, _0x27d5b1) => {
    const _0x1690bd = _0x3ab57b;
    let _0x4e0c7e;
    _0x319735[_0x1690bd(0x1d2)][_0x1690bd(0x1e2)] &&
      (_0x4e0c7e = {
        restaurant: _0x319735[_0x1690bd(0x1d2)][_0x1690bd(0x1e2)],
      });
    const _0x265680 = await Menu["find"](_0x4e0c7e)
      [_0x1690bd(0x1dc)]({ path: _0x1690bd(0x1d5), model: _0x1690bd(0x1d3) })
      [_0x1690bd(0x1de)]();
    _0x3aea3b[_0x1690bd(0x1d1)](0xc8)["json"]({
      status: "success",
      count: _0x265680["length"],
      data: _0x265680,
    });
  }
)),
  (exports[_0x3ab57b(0x1d0)] = catchAsync(
    async (_0x574c71, _0x2df546, _0x4cd2c5) => {
      const _0x3fd6a0 = _0x3ab57b,
        _0x2325d4 = await Menu[_0x3fd6a0(0x1ce)](_0x574c71["body"]);
      _0x2df546[_0x3fd6a0(0x1d1)](0xc9)[_0x3fd6a0(0x1cc)]({
        status: "success",
        data: _0x2325d4,
      });
    }
  )),
  (exports[_0x3ab57b(0x1dd)] = catchAsync(
    async (_0x28f25d, _0x584036, _0x49c27e) => {
      const _0x336cfd = _0x3ab57b,
        _0x512b19 = await Menu["findByIdAndDelete"](
          _0x28f25d[_0x336cfd(0x1d2)]["menuId"]
        );
      if (!_0x512b19)
        return _0x49c27e(
          new ErrorHandler(
            "No\x20document\x20found\x20with\x20that\x20ID",
            0x194
          )
        );
      _0x584036[_0x336cfd(0x1d1)](0xcc)[_0x336cfd(0x1cc)]({
        status: _0x336cfd(0x1cb),
      });
    }
  ));
