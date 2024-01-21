const _0x5da6b6 = _0x49e2;
function _0x49e2(_0x53287e, _0x5188c1) {
  const _0x1b7682 = _0x1b76();
  return (
    (_0x49e2 = function (_0x49e2c7, _0x549388) {
      _0x49e2c7 = _0x49e2c7 - 0xaa;
      let _0x5ad6f4 = _0x1b7682[_0x49e2c7];
      return _0x5ad6f4;
    }),
    _0x49e2(_0x53287e, _0x5188c1)
  );
}
(function (_0x2350fb, _0x191648) {
  const _0x4d9f07 = _0x49e2,
    _0x6612be = _0x2350fb();
  while (!![]) {
    try {
      const _0x34d12a =
        (parseInt(_0x4d9f07(0xbf)) / 0x1) * (-parseInt(_0x4d9f07(0xb5)) / 0x2) +
        -parseInt(_0x4d9f07(0xaf)) / 0x3 +
        (parseInt(_0x4d9f07(0xc2)) / 0x4) * (-parseInt(_0x4d9f07(0xb0)) / 0x5) +
        parseInt(_0x4d9f07(0xc9)) / 0x6 +
        (-parseInt(_0x4d9f07(0xc6)) / 0x7) * (parseInt(_0x4d9f07(0xbc)) / 0x8) +
        (parseInt(_0x4d9f07(0xc1)) / 0x9) * (parseInt(_0x4d9f07(0xb8)) / 0xa) +
        (parseInt(_0x4d9f07(0xb1)) / 0xb) * (parseInt(_0x4d9f07(0xbb)) / 0xc);
      if (_0x34d12a === _0x191648) break;
      else _0x6612be["push"](_0x6612be["shift"]());
    } catch (_0x44d8fe) {
      _0x6612be["push"](_0x6612be["shift"]());
    }
  }
})(_0x1b76, 0x812f6);
const mongoose = require(_0x5da6b6(0xba)),
  orderSchema = mongoose[_0x5da6b6(0xc4)]({
    deliveryInfo: {
      address: { type: String, required: !![] },
      city: { type: String, required: !![] },
      phoneNo: { type: String, required: !![] },
      postalCode: { type: String, required: !![] },
      country: { type: String, required: !![] },
    },
    restaurant: {
      type: mongoose[_0x5da6b6(0xc4)]["Types"][_0x5da6b6(0xbe)],
      ref: _0x5da6b6(0xc7),
    },
    user: {
      type: mongoose["Schema"][_0x5da6b6(0xb7)]["ObjectId"],
      required: !![],
      ref: _0x5da6b6(0xb9),
    },
    orderItems: [
      {
        name: { type: String, required: !![] },
        quantity: { type: Number, required: !![] },
        image: { type: String, required: !![] },
        price: { type: Number, required: !![] },
        fooditem: {
          type: mongoose["Schema"][_0x5da6b6(0xb7)]["ObjectId"],
          required: !![],
          ref: _0x5da6b6(0xac),
        },
      },
    ],
    paymentInfo: { id: { type: String }, status: { type: String } },
    paidAt: { type: Date },
    itemsPrice: { type: Number, required: !![], default: 0x0 },
    taxPrice: { type: Number, required: !![], default: 0x0 },
    deliveryCharge: { type: Number, required: !![], default: 0x0 },
    finalTotal: { type: Number, required: !![], default: 0x0 },
    orderStatus: { type: String, required: !![], default: _0x5da6b6(0xaa) },
    deliveredAt: { type: Date },
    createdAt: { type: Date, default: Date[_0x5da6b6(0xbd)] },
  });
function _0x1b76() {
  const _0x31abfb = [
    "ObjectId",
    "855187KqWDjT",
    "model",
    "2649123InIYOc",
    "4TNcPAu",
    "quantity",
    "Schema",
    "exports",
    "70idglOB",
    "Restaurant",
    "stock",
    "363546MwPinz",
    "Processing",
    "fooditem",
    "FoodItem",
    "Order",
    "Insufficient\x20stock\x20for\x20\x27",
    "2869932LQJRON",
    "1941055qClNhZ",
    "23277309KwmANK",
    "name",
    "\x27\x20in\x20this\x20order.",
    "orderItems",
    "2LqZblX",
    "findById",
    "Types",
    "20GiYkbG",
    "User",
    "mongoose",
    "12KaHpPo",
    "28976AeFTQU",
    "now",
  ];
  _0x1b76 = function () {
    return _0x31abfb;
  };
  return _0x1b76();
}
orderSchema["pre"]("save", async function (_0x1256a2) {
  const _0x3033fb = _0x5da6b6;
  try {
    for (const _0x542912 of this[_0x3033fb(0xb4)]) {
      const _0x1d6e98 = await mongoose[_0x3033fb(0xc0)]("FoodItem")[
        _0x3033fb(0xb6)
      ](_0x542912[_0x3033fb(0xab)]);
      if (!_0x1d6e98) throw new Error("Food\x20item\x20not\x20found.");
      if (_0x1d6e98[_0x3033fb(0xc8)] < _0x542912[_0x3033fb(0xc3)])
        throw new Error(
          _0x3033fb(0xae) + _0x542912[_0x3033fb(0xb2)] + _0x3033fb(0xb3)
        );
      (_0x1d6e98[_0x3033fb(0xc8)] -= _0x542912[_0x3033fb(0xc3)]),
        await _0x1d6e98["save"]();
    }
    _0x1256a2();
  } catch (_0x45c602) {
    _0x1256a2(_0x45c602);
  }
}),
  (module[_0x5da6b6(0xc5)] = mongoose[_0x5da6b6(0xc0)](
    _0x5da6b6(0xad),
    orderSchema
  ));
