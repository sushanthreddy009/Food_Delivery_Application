const _0x437311 = _0x45b8;
(function (_0x5c88bd, _0x3c7cd9) {
  const _0xbd2a6b = _0x45b8,
    _0x21a81e = _0x5c88bd();
  while (!![]) {
    try {
      const _0x4ed023 =
        (-parseInt(_0xbd2a6b(0xac)) / 0x1) *
          (-parseInt(_0xbd2a6b(0x9b)) / 0x2) +
        (-parseInt(_0xbd2a6b(0xa1)) / 0x3) * (parseInt(_0xbd2a6b(0xb1)) / 0x4) +
        (-parseInt(_0xbd2a6b(0xab)) / 0x5) * (parseInt(_0xbd2a6b(0xa4)) / 0x6) +
        (parseInt(_0xbd2a6b(0xa3)) / 0x7) * (parseInt(_0xbd2a6b(0xaf)) / 0x8) +
        (-parseInt(_0xbd2a6b(0xa6)) / 0x9) *
          (-parseInt(_0xbd2a6b(0xa5)) / 0xa) +
        -parseInt(_0xbd2a6b(0xb3)) / 0xb +
        parseInt(_0xbd2a6b(0xa0)) / 0xc;
      if (_0x4ed023 === _0x3c7cd9) break;
      else _0x21a81e["push"](_0x21a81e["shift"]());
    } catch (_0x5f3b76) {
      _0x21a81e["push"](_0x21a81e["shift"]());
    }
  }
})(_0x3570, 0x4da22);
function _0x3570() {
  const _0x3e62d2 = [
    "couponValidate",
    "7109160ccHFkG",
    "159279mZwrae",
    "$discount",
    "54334QBPwgi",
    "59406ZQIOjF",
    "822490unlIhs",
    "27WXaYdN",
    "body",
    "add\x20₹\x20",
    "find",
    "$maxDiscount",
    "75zLYgsa",
    "1GMCWwZ",
    "\x20more\x20to\x20avail\x20this\x20offer",
    "No\x20coupon\x20found\x20with\x20given\x20Id",
    "504bzQFkF",
    "updateCoupon",
    "44hBegpq",
    "status",
    "3442076ALGJkw",
    "$minAmount",
    "createCoupon",
    "json",
    "create",
    "deleteCoupon",
    "../middlewares/catchAsyncErrors",
    "70514ndZKKu",
    "params",
    "couponId",
    "success",
  ];
  _0x3570 = function () {
    return _0x3e62d2;
  };
  return _0x3570();
}
const Coupon = require("../models/couponModel"),
  ErrorHandler = require("../utils/errorHandler"),
  catchAsync = require(_0x437311(0x9a));
function _0x45b8(_0x5377c2, _0x501df0) {
  const _0x35701b = _0x3570();
  return (
    (_0x45b8 = function (_0x45b869, _0x2339f2) {
      _0x45b869 = _0x45b869 - 0x99;
      let _0x430dba = _0x35701b[_0x45b869];
      return _0x430dba;
    }),
    _0x45b8(_0x5377c2, _0x501df0)
  );
}
(exports[_0x437311(0xb5)] = catchAsync(
  async (_0x54888a, _0x29b42e, _0x568def) => {
    const _0x35b8b8 = _0x437311,
      _0x3e63b1 = await Coupon[_0x35b8b8(0xb7)](_0x54888a[_0x35b8b8(0xa7)]);
    _0x29b42e["status"](0xc8)["json"]({ status: "success", data: _0x3e63b1 });
  }
)),
  (exports["getCoupon"] = catchAsync(
    async (_0xc812ec, _0x44915a, _0x4142f2) => {
      const _0x23184e = _0x437311,
        _0x52879f = await Coupon[_0x23184e(0xa9)]();
      _0x44915a[_0x23184e(0xb2)](0xc8)[_0x23184e(0xb6)]({
        status: _0x23184e(0x9e),
        data: _0x52879f,
      });
    }
  )),
  (exports[_0x437311(0xb0)] = catchAsync(
    async (_0x432c7a, _0x295156, _0x58d385) => {
      const _0x31e622 = _0x437311,
        _0x291a58 = await Coupon["findByIdAndUpdate"](
          _0x432c7a[_0x31e622(0x9c)][_0x31e622(0x9d)],
          _0x432c7a[_0x31e622(0xa7)],
          { new: !![], runValidators: !![] }
        );
      if (!_0x291a58)
        return _0x58d385(
          new ErrorHandler("No\x20Coupon\x20found\x20with\x20that\x20ID", 0x194)
        );
      _0x295156["status"](0xc8)[_0x31e622(0xb6)]({
        status: _0x31e622(0x9e),
        data: _0x291a58,
      });
    }
  )),
  (exports[_0x437311(0x99)] = catchAsync(
    async (_0x3c648d, _0xaf9a06, _0x281efd) => {
      const _0x12afac = _0x437311,
        _0x6c84ce = await Coupon["findByIdAndDelete"](
          _0x3c648d[_0x12afac(0x9c)][_0x12afac(0x9d)]
        );
      if (!_0x6c84ce)
        return _0x281efd(new ErrorHandler(_0x12afac(0xae), 0x194));
      _0xaf9a06["status"](0xcc)[_0x12afac(0xb6)]({ status: _0x12afac(0x9e) });
    }
  )),
  (exports[_0x437311(0x9f)] = catchAsync(
    async (_0x3962d4, _0x4249c3, _0x4c186a) => {
      const _0x35464b = _0x437311,
        { couponCode: _0x2d7459, cartItemsTotalAmount: _0x5e1d49 } =
          _0x3962d4[_0x35464b(0xa7)],
        _0x3c0d48 = await Coupon["aggregate"]([
          {
            $addFields: {
              finalTotal: {
                $cond: [
                  { $gte: [_0x5e1d49, _0x35464b(0xb4)] },
                  {
                    $subtract: [
                      _0x5e1d49,
                      {
                        $min: [
                          {
                            $multiply: [
                              _0x5e1d49,
                              { $divide: [_0x35464b(0xa2), 0x64] },
                            ],
                          },
                          _0x35464b(0xaa),
                        ],
                      },
                    ],
                  },
                  _0x5e1d49,
                ],
              },
              message: {
                $cond: [
                  { $gte: [_0x5e1d49, _0x35464b(0xb4)] },
                  "",
                  {
                    $concat: [
                      _0x35464b(0xa8),
                      {
                        $toString: { $subtract: [_0x35464b(0xb4), _0x5e1d49] },
                      },
                      _0x35464b(0xad),
                    ],
                  },
                ],
              },
            },
          },
          {
            $project: {
              _id: 0x0,
              subTitle: 0x1,
              couponName: 0x1,
              details: 0x1,
              minAmount: 0x1,
              finalTotal: 0x1,
              message: 0x1,
            },
          },
        ]);
      if (!_0x3c0d48)
        return _0x4c186a(new ErrorHandler("Invalid\x20coupon\x20code.", 0x194));
      _0x4249c3["status"](0xc8)[_0x35464b(0xb6)]({
        status: _0x35464b(0x9e),
        data: _0x3c0d48,
      });
    }
  ));
