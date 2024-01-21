const _0x14f891 = _0x31c0;
(function (_0x14e874, _0x497360) {
  const _0x5ef026 = _0x31c0,
    _0x38aa57 = _0x14e874();
  while (!![]) {
    try {
      const _0x2e56c1 =
        parseInt(_0x5ef026(0x84)) / 0x1 +
        parseInt(_0x5ef026(0x97)) / 0x2 +
        (-parseInt(_0x5ef026(0x98)) / 0x3) *
          (-parseInt(_0x5ef026(0x8f)) / 0x4) +
        (-parseInt(_0x5ef026(0x91)) / 0x5) *
          (-parseInt(_0x5ef026(0x95)) / 0x6) +
        -parseInt(_0x5ef026(0x7d)) / 0x7 +
        (-parseInt(_0x5ef026(0x94)) / 0x8) * (parseInt(_0x5ef026(0x8b)) / 0x9) +
        -parseInt(_0x5ef026(0x89)) / 0xa;
      if (_0x2e56c1 === _0x497360) break;
      else _0x38aa57["push"](_0x38aa57["shift"]());
    } catch (_0x26de6b) {
      _0x38aa57["push"](_0x38aa57["shift"]());
    }
  }
})(_0x1aa3, 0xa3695);
const Fooditem = require(_0x14f891(0x8c)),
  ErrorHandler = require("../utils/errorHandler"),
  catchAsync = require(_0x14f891(0x7f)),
  APIFeatures = require(_0x14f891(0x86));
function _0x31c0(_0x27191c, _0x3d1c20) {
  const _0x1aa342 = _0x1aa3();
  return (
    (_0x31c0 = function (_0x31c09a, _0x42de7c) {
      _0x31c09a = _0x31c09a - 0x7d;
      let _0x1eadee = _0x1aa342[_0x31c09a];
      return _0x1eadee;
    }),
    _0x31c0(_0x27191c, _0x3d1c20)
  );
}
function _0x1aa3() {
  const _0x46a5f5 = [
    "find",
    "1156904zJgigZ",
    "6qedQeg",
    "No\x20foodItem\x20found\x20with\x20that\x20ID",
    "storeId",
    "911204dpTASR",
    "createFoodItem",
    "../middlewares/catchAsyncErrors",
    "deleteFoodItem",
    "create",
    "status",
    "No\x20document\x20found\x20with\x20that\x20ID",
    "602818qiqCum",
    "length",
    "../utils/apiFeatures",
    "findById",
    "findByIdAndUpdate",
    "12871610yJecuz",
    "getAllFoodItems",
    "9qtZEJu",
    "../models/foodItem",
    "updateFoodItem",
    "params",
    "1288072OmRDjf",
    "foodId",
    "20USUiWE",
    "success",
    "json",
    "8447008UtXafl",
    "1975854MQCPuF",
  ];
  _0x1aa3 = function () {
    return _0x46a5f5;
  };
  return _0x1aa3();
}
(exports[_0x14f891(0x8a)] = catchAsync(
  async (_0x36a7ba, _0x52905b, _0xb7e9e8) => {
    const _0x19f0b5 = _0x14f891;
    let _0x2ee446 = {};
    _0x36a7ba[_0x19f0b5(0x8e)][_0x19f0b5(0x9a)] &&
      (_0x2ee446 = { restaurant: _0x36a7ba[_0x19f0b5(0x8e)][_0x19f0b5(0x9a)] });
    const _0x6fda5c = await Fooditem[_0x19f0b5(0x96)](_0x2ee446);
    _0x52905b[_0x19f0b5(0x82)](0xc8)[_0x19f0b5(0x93)]({
      status: _0x19f0b5(0x92),
      results: _0x6fda5c[_0x19f0b5(0x85)],
      data: _0x6fda5c,
    });
  }
)),
  (exports[_0x14f891(0x7e)] = catchAsync(
    async (_0x58521a, _0x31e7ef, _0x3dc0f1) => {
      const _0x10e3dd = _0x14f891,
        _0xd5210c = await Fooditem[_0x10e3dd(0x81)](_0x58521a["body"]);
      _0x31e7ef[_0x10e3dd(0x82)](0xc9)[_0x10e3dd(0x93)]({
        status: _0x10e3dd(0x92),
        data: _0xd5210c,
      });
    }
  )),
  (exports["getFoodItem"] = catchAsync(
    async (_0x2c390c, _0x2103b9, _0x311d86) => {
      const _0x1da689 = _0x14f891,
        _0xa5fd27 = await Fooditem[_0x1da689(0x87)](
          _0x2c390c[_0x1da689(0x8e)][_0x1da689(0x90)]
        );
      if (!_0xa5fd27)
        return _0x311d86(new ErrorHandler(_0x1da689(0x99), 0x194));
      _0x2103b9["status"](0xc8)[_0x1da689(0x93)]({
        status: _0x1da689(0x92),
        data: _0xa5fd27,
      });
    }
  )),
  (exports[_0x14f891(0x8d)] = catchAsync(
    async (_0x321eec, _0x47ff8b, _0x28d8af) => {
      const _0x3dec83 = _0x14f891,
        _0x570a13 = await Fooditem[_0x3dec83(0x88)](
          _0x321eec[_0x3dec83(0x8e)][_0x3dec83(0x90)],
          _0x321eec["body"],
          { new: !![], runValidators: !![] }
        );
      if (!_0x570a13)
        return _0x28d8af(new ErrorHandler(_0x3dec83(0x83), 0x194));
      _0x47ff8b[_0x3dec83(0x82)](0xc8)[_0x3dec83(0x93)]({
        status: _0x3dec83(0x92),
        data: _0x570a13,
      });
    }
  )),
  (exports[_0x14f891(0x80)] = catchAsync(
    async (_0x2bc94e, _0x41c58d, _0x50adee) => {
      const _0x518cb1 = _0x14f891,
        _0x171ad1 = await Fooditem["findByIdAndDelete"](
          _0x2bc94e[_0x518cb1(0x8e)][_0x518cb1(0x90)]
        );
      if (!_0x171ad1)
        return _0x50adee(
          new ErrorHandler(
            "No\x20document\x20found\x20with\x20that\x20ID",
            0x194
          )
        );
      _0x41c58d[_0x518cb1(0x82)](0xcc)[_0x518cb1(0x93)]({
        status: _0x518cb1(0x92),
      });
    }
  ));
