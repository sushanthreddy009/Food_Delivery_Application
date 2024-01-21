function _0x1536(_0x2e5785, _0xc752bd) {
  const _0x1866dd = _0x1866();
  return (
    (_0x1536 = function (_0x1536a0, _0xe91af5) {
      _0x1536a0 = _0x1536a0 - 0x1e1;
      let _0x149d6d = _0x1866dd[_0x1536a0];
      return _0x149d6d;
    }),
    _0x1536(_0x2e5785, _0xc752bd)
  );
}
const _0x1f8d0f = _0x1536;
(function (_0x59da28, _0x8a502e) {
  const _0x29a841 = _0x1536,
    _0x2e2378 = _0x59da28();
  while (!![]) {
    try {
      const _0x191e24 =
        parseInt(_0x29a841(0x1f7)) / 0x1 +
        (-parseInt(_0x29a841(0x1e8)) / 0x2) *
          (-parseInt(_0x29a841(0x1f5)) / 0x3) +
        parseInt(_0x29a841(0x1e9)) / 0x4 +
        (-parseInt(_0x29a841(0x1e6)) / 0x5) *
          (parseInt(_0x29a841(0x1e3)) / 0x6) +
        parseInt(_0x29a841(0x1f6)) / 0x7 +
        parseInt(_0x29a841(0x1ec)) / 0x8 +
        -parseInt(_0x29a841(0x1f1)) / 0x9;
      if (_0x191e24 === _0x8a502e) break;
      else _0x2e2378["push"](_0x2e2378["shift"]());
    } catch (_0x52a0e6) {
      _0x2e2378["push"](_0x2e2378["shift"]());
    }
  }
})(_0x1866, 0x2853c);
const Restaurant = require("../models/restaurant"),
  ErrorHandler = require(_0x1f8d0f(0x1f4)),
  catchAsync = require(_0x1f8d0f(0x1e1)),
  APIFeatures = require("../utils/apiFeatures");
(exports[_0x1f8d0f(0x1ed)] = catchAsync(
  async (_0x368ed1, _0x4468b7, _0x34430a) => {
    const _0x26421e = _0x1f8d0f,
      _0x4b1bd5 = new APIFeatures(
        Restaurant[_0x26421e(0x1ea)](),
        _0x368ed1[_0x26421e(0x1f3)]
      )
        [_0x26421e(0x1f2)]()
        [_0x26421e(0x1e2)](),
      _0x4c7960 = await _0x4b1bd5["query"];
    _0x4468b7[_0x26421e(0x1fb)](0xc8)[_0x26421e(0x1e5)]({
      status: _0x26421e(0x1f0),
      count: _0x4c7960[_0x26421e(0x1e4)],
      restaurants: _0x4c7960,
    });
  }
)),
  (exports[_0x1f8d0f(0x1f8)] = catchAsync(
    async (_0x27c62a, _0xd03e80, _0x4a060b) => {
      const _0x158589 = _0x1f8d0f,
        _0x62f0ff = await Restaurant[_0x158589(0x1ee)](
          _0x27c62a[_0x158589(0x1e7)]
        );
      _0xd03e80[_0x158589(0x1fb)](0xc9)[_0x158589(0x1e5)]({
        status: _0x158589(0x1f0),
        data: _0x62f0ff,
      });
    }
  )),
  (exports["getRestaurant"] = catchAsync(
    async (_0x30e535, _0x5f98b1, _0x4487d1) => {
      const _0x137d50 = _0x1f8d0f,
        _0x39604f = await Restaurant["findById"](
          _0x30e535["params"][_0x137d50(0x1eb)]
        );
      if (!_0x39604f)
        return _0x4487d1(new ErrorHandler(_0x137d50(0x1fc), 0x194));
      _0x5f98b1[_0x137d50(0x1fb)](0xc8)[_0x137d50(0x1e5)]({
        status: "success",
        data: _0x39604f,
      });
    }
  )),
  (exports[_0x1f8d0f(0x1f9)] = catchAsync(
    async (_0x51e932, _0x2c5230, _0x114649) => {
      const _0x142d26 = _0x1f8d0f,
        _0x442503 = await Restaurant["findByIdAndDelete"](
          _0x51e932[_0x142d26(0x1ef)][_0x142d26(0x1eb)]
        );
      if (!_0x442503)
        return _0x114649(new ErrorHandler(_0x142d26(0x1fa), 0x194));
      _0x2c5230["status"](0xcc)[_0x142d26(0x1e5)]({ status: _0x142d26(0x1f0) });
    }
  ));
function _0x1866() {
  const _0x4e925c = [
    "No\x20Restaurant\x20found\x20with\x20that\x20ID",
    "../middlewares/catchAsyncErrors",
    "sort",
    "6MnAKFf",
    "length",
    "json",
    "1225235LyZMNm",
    "body",
    "2ebMmGo",
    "601212arAiqU",
    "find",
    "storeId",
    "185896hWhOjP",
    "getAllRestaurants",
    "create",
    "params",
    "success",
    "5621724cAzuuf",
    "search",
    "query",
    "../utils/errorHandler",
    "813453MRYmGh",
    "2258830wokQMH",
    "267482oeujGo",
    "createRestaurant",
    "deleteRestaurant",
    "No\x20document\x20found\x20with\x20that\x20ID",
    "status",
  ];
  _0x1866 = function () {
    return _0x4e925c;
  };
  return _0x1866();
}
