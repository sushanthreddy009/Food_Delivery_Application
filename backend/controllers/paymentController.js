function _0x5d59(_0x28f9a2, _0x529fa5) {
  const _0x250d88 = _0x250d();
  return (
    (_0x5d59 = function (_0x5d5943, _0x302258) {
      _0x5d5943 = _0x5d5943 - 0x190;
      let _0x2017ea = _0x250d88[_0x5d5943];
      return _0x2017ea;
    }),
    _0x5d59(_0x28f9a2, _0x529fa5)
  );
}
const _0x3a6c30 = _0x5d59;
function _0x250d() {
  const _0xdb44b5 = [
    "amount",
    "processPayment",
    "json",
    "status",
    "env",
    "828915nKkWzg",
    "inr",
    "197226QqFfEk",
    "447190TqueOz",
    "23860VMnXQI",
    "stripe",
    "STRIPE_API_KEY",
    "body",
    "accept_a_payment",
    "661424gnGXNH",
    "STRIPE_SECRET_KEY",
    "577704scMngJ",
    "../middlewares/catchAsyncErrors",
    "dotenv",
    "35eMvoTw",
    "393176zXTUTz",
  ];
  _0x250d = function () {
    return _0xdb44b5;
  };
  return _0x250d();
}
(function (_0x2aedad, _0x1ceb4) {
  const _0x355c17 = _0x5d59,
    _0x5bac0b = _0x2aedad();
  while (!![]) {
    try {
      const _0xc79fc9 =
        -parseInt(_0x355c17(0x198)) / 0x1 +
        parseInt(_0x355c17(0x197)) / 0x2 +
        -parseInt(_0x355c17(0x19f)) / 0x3 +
        -parseInt(_0x355c17(0x19d)) / 0x4 +
        parseInt(_0x355c17(0x194)) / 0x5 +
        (parseInt(_0x355c17(0x196)) / 0x6) *
          (parseInt(_0x355c17(0x1a2)) / 0x7) +
        -parseInt(_0x355c17(0x1a3)) / 0x8;
      if (_0xc79fc9 === _0x1ceb4) break;
      else _0x5bac0b["push"](_0x5bac0b["shift"]());
    } catch (_0x3d428a) {
      _0x5bac0b["push"](_0x5bac0b["shift"]());
    }
  }
})(_0x250d, 0x1dfb2);
const catchAsyncErrors = require(_0x3a6c30(0x1a0)),
  dotenv = require(_0x3a6c30(0x1a1));
dotenv["config"]({ path: "./config/config.env" });
const stripe = require(_0x3a6c30(0x199))(
  process[_0x3a6c30(0x193)][_0x3a6c30(0x19e)]
);
(exports[_0x3a6c30(0x190)] = catchAsyncErrors(
  async (_0x10f77f, _0xd5d944, _0x3ed1f5) => {
    const _0x38302a = _0x3a6c30,
      _0x250b6c = await stripe["paymentIntents"]["create"]({
        amount: _0x10f77f[_0x38302a(0x19b)][_0x38302a(0x1a4)],
        currency: _0x38302a(0x195),
        metadata: { integration_check: _0x38302a(0x19c) },
      });
    _0xd5d944["status"](0xc8)[_0x38302a(0x191)]({
      success: !![],
      client_secret: _0x250b6c["client_secret"],
    });
  }
)),
  (exports["sendStripApi"] = catchAsyncErrors(
    async (_0x173f81, _0x381bf3, _0x976b0f) => {
      const _0x5a0c08 = _0x3a6c30;
      _0x381bf3[_0x5a0c08(0x192)](0xc8)[_0x5a0c08(0x191)]({
        stripeApiKey: process[_0x5a0c08(0x193)][_0x5a0c08(0x19a)],
      });
    }
  ));
