const _0x575f42 = _0x4d40;
(function (_0x22f073, _0x4316eb) {
  const _0x2e3d41 = _0x4d40,
    _0x449bf5 = _0x22f073();
  while (!![]) {
    try {
      const _0x329dbb =
        (parseInt(_0x2e3d41(0xc0)) / 0x1) * (-parseInt(_0x2e3d41(0xa4)) / 0x2) +
        -parseInt(_0x2e3d41(0xbe)) / 0x3 +
        (parseInt(_0x2e3d41(0xbf)) / 0x4) * (-parseInt(_0x2e3d41(0xc2)) / 0x5) +
        (parseInt(_0x2e3d41(0xaf)) / 0x6) * (parseInt(_0x2e3d41(0xa8)) / 0x7) +
        (parseInt(_0x2e3d41(0xaa)) / 0x8) * (-parseInt(_0x2e3d41(0xab)) / 0x9) +
        (-parseInt(_0x2e3d41(0xb1)) / 0xa) *
          (-parseInt(_0x2e3d41(0xb8)) / 0xb) +
        (-parseInt(_0x2e3d41(0xbb)) / 0xc) * (-parseInt(_0x2e3d41(0xac)) / 0xd);
      if (_0x329dbb === _0x4316eb) break;
      else _0x449bf5["push"](_0x449bf5["shift"]());
    } catch (_0x41db0c) {
      _0x449bf5["push"](_0x449bf5["shift"]());
    }
  }
})(_0x3a82, 0xb7859);
function _0x4d40(_0x2975ca, _0x1ecf19) {
  const _0x3a826d = _0x3a82();
  return (
    (_0x4d40 = function (_0x4d4092, _0x53fc39) {
      _0x4d4092 = _0x4d4092 - 0xa4;
      let _0x1067f8 = _0x3a826d[_0x4d4092];
      return _0x1067f8;
    }),
    _0x4d40(_0x2975ca, _0x1ecf19)
  );
}
function _0x3a82() {
  const _0x363680 = [
    "success",
    "json",
    "722ItrifQ",
    "../utils/errorHandler",
    "storeId",
    "status",
    "3591dPoqrv",
    "getReview",
    "2658768xUKuHG",
    "36wXMCDb",
    "221tpZVXh",
    "reviewId",
    "restaurant",
    "2316vsiAHH",
    "create",
    "44860pYztjT",
    "body",
    "params",
    "findByIdAndDelete",
    "updateReview",
    "No\x20Review\x20with\x20given\x20Id",
    "deleteReview",
    "660SuovdM",
    "tourId",
    "../models/reviewModel",
    "2542956mBVCrt",
    "user",
    "find",
    "1961079uAbEGI",
    "4yqJcsa",
    "2SEXimv",
    "../middlewares/catchAsyncErrors",
    "6670975bPwiZJ",
  ];
  _0x3a82 = function () {
    return _0x363680;
  };
  return _0x3a82();
}
const AppError = require(_0x575f42(0xa5)),
  Review = require(_0x575f42(0xba)),
  catchAsync = require(_0x575f42(0xc1));
(exports["setUserRestaurantIds"] = (_0x32bc53, _0x517718, _0x439968) => {
  const _0x3af094 = _0x575f42;
  if (!_0x32bc53[_0x3af094(0xb2)]["user"])
    _0x32bc53[_0x3af094(0xb2)][_0x3af094(0xbc)] = _0x32bc53["user"]["id"];
  if (!_0x32bc53[_0x3af094(0xb2)][_0x3af094(0xae)])
    _0x32bc53[_0x3af094(0xb2)][_0x3af094(0xae)] =
      _0x32bc53[_0x3af094(0xb3)][_0x3af094(0xa6)];
  _0x439968();
}),
  (exports["createReviews"] = catchAsync(
    async (_0x573641, _0x9ac81c, _0x579df3) => {
      const _0x5bc7a4 = _0x575f42,
        _0x12e1ad = await Review[_0x5bc7a4(0xb0)](_0x573641[_0x5bc7a4(0xb2)]);
      _0x9ac81c[_0x5bc7a4(0xa7)](0xc9)["json"]({
        status: _0x5bc7a4(0xc3),
        data: _0x12e1ad,
      });
    }
  )),
  (exports["getAllReviews"] = catchAsync(
    async (_0x77c949, _0x52c51d, _0x224c9e) => {
      const _0x331f21 = _0x575f42;
      let _0x4777d4 = {};
      if (_0x77c949["params"][_0x331f21(0xb9)])
        _0x4777d4 = { restaurant: _0x77c949[_0x331f21(0xb3)][_0x331f21(0xb9)] };
      const _0x1821ca = await Review[_0x331f21(0xbd)](_0x4777d4);
      _0x52c51d[_0x331f21(0xa7)](0xc8)[_0x331f21(0xc4)]({
        status: _0x331f21(0xc3),
        data: _0x1821ca,
      });
    }
  )),
  (exports[_0x575f42(0xa9)] = catchAsync(
    async (_0x49f69e, _0x916bf3, _0x5777f0) => {
      const _0x4f47b3 = _0x575f42,
        _0x155eb8 = await Review["findById"](
          _0x49f69e[_0x4f47b3(0xb3)][_0x4f47b3(0xad)]
        );
      if (!_0x155eb8) return _0x5777f0(new AppError(_0x4f47b3(0xb6), 0x194));
      _0x916bf3["status"](0xc8)[_0x4f47b3(0xc4)]({
        status: "success",
        data: _0x155eb8,
      });
    }
  )),
  (exports[_0x575f42(0xb5)] = catchAsync(
    async (_0x191b9a, _0x5a65b1, _0x9232f6) => {
      const _0x55200f = _0x575f42,
        _0xae3ca = await Review["findByIdAndUpdate"](
          _0x191b9a[_0x55200f(0xb3)]["reviewId"],
          _0x191b9a[_0x55200f(0xb2)],
          { new: !![], runValidators: !![] }
        );
      if (!_0xae3ca)
        return _0x9232f6(
          new AppError("No\x20Review\x20with\x20given\x20Id", 0x194)
        );
      _0x5a65b1[_0x55200f(0xa7)](0xc8)[_0x55200f(0xc4)]({
        status: _0x55200f(0xc3),
        data: _0xae3ca,
      });
    }
  )),
  (exports[_0x575f42(0xb7)] = catchAsync(
    async (_0x19ecb0, _0x567252, _0x3f7eed) => {
      const _0x166051 = _0x575f42,
        _0x3bab0e = await Review[_0x166051(0xb4)](
          _0x19ecb0["params"]["reviewId"]
        );
      if (!_0x3bab0e)
        return _0x3f7eed(
          new AppError("No\x20Review\x20with\x20given\x20Id", 0x194)
        );
      _0x567252["status"](0xcc)["json"]({ status: "success" });
    }
  ));
