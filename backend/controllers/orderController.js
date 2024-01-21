function _0x4ad2(_0x11c403, _0x4169a9) {
  const _0x5ac378 = _0x5ac3();
  return (
    (_0x4ad2 = function (_0x4ad22b, _0x5710ce) {
      _0x4ad22b = _0x4ad22b - 0x1d9;
      let _0x3c725f = _0x5ac378[_0x4ad22b];
      return _0x3c725f;
    }),
    _0x4ad2(_0x11c403, _0x4169a9)
  );
}
const _0xd78b44 = _0x4ad2;
(function (_0x5a6854, _0x2c97a5) {
  const _0x3145e5 = _0x4ad2,
    _0xe00b36 = _0x5a6854();
  while (!![]) {
    try {
      const _0x3206d7 =
        (-parseInt(_0x3145e5(0x1f7)) / 0x1) *
          (parseInt(_0x3145e5(0x1e8)) / 0x2) +
        -parseInt(_0x3145e5(0x1ea)) / 0x3 +
        -parseInt(_0x3145e5(0x1de)) / 0x4 +
        -parseInt(_0x3145e5(0x1db)) / 0x5 +
        (parseInt(_0x3145e5(0x1f0)) / 0x6) *
          (parseInt(_0x3145e5(0x1f1)) / 0x7) +
        -parseInt(_0x3145e5(0x1e7)) / 0x8 +
        (parseInt(_0x3145e5(0x1ee)) / 0x9) * (parseInt(_0x3145e5(0x1eb)) / 0xa);
      if (_0x3206d7 === _0x2c97a5) break;
      else _0xe00b36["push"](_0xe00b36["shift"]());
    } catch (_0x2f0ae7) {
      _0xe00b36["push"](_0xe00b36["shift"]());
    }
  }
})(_0x5ac3, 0x9a2a9);
const Order = require(_0xd78b44(0x1dc)),
  FoodItem = require(_0xd78b44(0x1e4)),
  { ObjectId } = require("mongodb"),
  ErrorHandler = require(_0xd78b44(0x1d9)),
  catchAsyncErrors = require(_0xd78b44(0x1f6));
(exports[_0xd78b44(0x1e9)] = catchAsyncErrors(
  async (_0x4e98fd, _0xb1357, _0x22bc0d) => {
    const _0x2416f8 = _0xd78b44,
      {
        orderItems: _0x5e63aa,
        deliveryInfo: _0x2dca76,
        itemsPrice: _0x364de6,
        taxPrice: _0x4c42aa,
        deliveryCharge: _0x41dfe3,
        finalTotal: _0x556a0,
        paymentInfo: _0x2ba91a,
      } = _0x4e98fd["body"],
      _0x1e5f83 = await Order[_0x2416f8(0x1e6)]({
        orderItems: _0x5e63aa,
        deliveryInfo: _0x2dca76,
        itemsPrice: _0x364de6,
        taxPrice: _0x4c42aa,
        deliveryCharge: _0x41dfe3,
        finalTotal: _0x556a0,
        paymentInfo: _0x2ba91a,
        paidAt: Date["now"](),
        user: _0x4e98fd[_0x2416f8(0x1df)]["id"],
        restaurant: _0x4e98fd[_0x2416f8(0x1e3)][_0x2416f8(0x1ed)],
      });
    _0xb1357[_0x2416f8(0x1e0)](0xc8)["json"]({
      success: !![],
      order: _0x1e5f83,
    });
  }
)),
  (exports[_0xd78b44(0x1f4)] = catchAsyncErrors(
    async (_0x368eba, _0xbd839a, _0xd9457c) => {
      const _0x6e1f87 = _0xd78b44,
        _0x368eb2 = await Order[_0x6e1f87(0x1f2)](
          _0x368eba[_0x6e1f87(0x1ef)]["id"]
        )
          [_0x6e1f87(0x1dd)]("user", "name\x20email")
          [_0x6e1f87(0x1dd)](_0x6e1f87(0x1ed))
          [_0x6e1f87(0x1f3)]();
      if (!_0x368eb2)
        return _0xd9457c(new ErrorHandler(_0x6e1f87(0x1da), 0x194));
      _0xbd839a[_0x6e1f87(0x1e0)](0xc8)[_0x6e1f87(0x1f5)]({
        success: !![],
        order: _0x368eb2,
      });
    }
  )),
  (exports[_0xd78b44(0x1e5)] = catchAsyncErrors(
    async (_0x3787c9, _0x2f5fa8, _0x313f57) => {
      const _0x4fdb1e = _0xd78b44,
        _0x481f34 = new ObjectId(_0x3787c9[_0x4fdb1e(0x1df)]["id"]),
        _0x24054a = await Order[_0x4fdb1e(0x1ec)]({ user: _0x481f34 })
          ["populate"]("user", "name\x20email")
          ["populate"](_0x4fdb1e(0x1ed))
          [_0x4fdb1e(0x1f3)]();
      _0x2f5fa8["status"](0xc8)[_0x4fdb1e(0x1f5)]({
        success: !![],
        orders: _0x24054a,
      });
    }
  )),
  (exports["allOrders"] = catchAsyncErrors(
    async (_0x4a7c76, _0x548aed, _0x3e3a3c) => {
      const _0x5d296e = _0xd78b44,
        _0x1dbb19 = await Order[_0x5d296e(0x1ec)]();
      let _0x22cf41 = 0x0;
      _0x1dbb19[_0x5d296e(0x1e1)]((_0x4400ec) => {
        const _0x5056a9 = _0x5d296e;
        _0x22cf41 += _0x4400ec[_0x5056a9(0x1e2)];
      }),
        _0x548aed[_0x5d296e(0x1e0)](0xc8)[_0x5d296e(0x1f5)]({
          success: !![],
          totalAmount: _0x22cf41,
          orders: _0x1dbb19,
        });
    }
  ));
function _0x5ac3() {
  const _0x417486 = [
    "../models/order",
    "populate",
    "3031344YlJKUy",
    "user",
    "status",
    "forEach",
    "finalTotal",
    "body",
    "../models/foodItem",
    "myOrders",
    "create",
    "9699744QZENeN",
    "1448JIxWFm",
    "newOrder",
    "3414612qZZAVe",
    "680GVXdCL",
    "find",
    "restaurant",
    "555183rSgFeb",
    "params",
    "4626pylYJy",
    "7469iwGAzz",
    "findById",
    "exec",
    "getSingleOrder",
    "json",
    "../middlewares/catchAsyncErrors",
    "682BjbKMh",
    "../utils/errorHandler",
    "No\x20Order\x20found\x20with\x20this\x20ID",
    "3918160wqGljL",
  ];
  _0x5ac3 = function () {
    return _0x417486;
  };
  return _0x5ac3();
}
