const _0x567e2c = _0x31b2;
function _0x3df8() {
  const _0x3f899c = [
    "post",
    "ObjectId",
    "Restaurant",
    "findOne",
    "$restaurant",
    "Review\x20must\x20belong\x20to\x20a\x20user",
    "30dHYLRJ",
    "constructor",
    "findByIdAndUpdate",
    "save",
    "restaurant",
    "74587LElsCm",
    "79362LZGTJd",
    "avgRating",
    "3974650ZDBHfD",
    "pre",
    "1485085jDpZIC",
    "./restaurant",
    "40296NcnXOg",
    "getQuery",
    "119WkGHqF",
    "model",
    "calcAverageRatings",
    "Schema",
    "Review",
    "User",
    "2065648BuDiHQ",
    "nRating",
    "9AqsgUB",
    "mongoose",
    "337366EuGwqe",
    "exports",
    "length",
    "_originalQuery",
  ];
  _0x3df8 = function () {
    return _0x3f899c;
  };
  return _0x3df8();
}
(function (_0x1ed81c, _0x36441a) {
  const _0x1a2d2d = _0x31b2,
    _0xbd634 = _0x1ed81c();
  while (!![]) {
    try {
      const _0x548d95 =
        -parseInt(_0x1a2d2d(0x107)) / 0x1 +
        -parseInt(_0x1a2d2d(0x11a)) / 0x2 +
        (-parseInt(_0x1a2d2d(0x102)) / 0x3) *
          (parseInt(_0x1a2d2d(0x10e)) / 0x4) +
        parseInt(_0x1a2d2d(0x10c)) / 0x5 +
        (-parseInt(_0x1a2d2d(0x108)) / 0x6) *
          (-parseInt(_0x1a2d2d(0x110)) / 0x7) +
        (parseInt(_0x1a2d2d(0x116)) / 0x8) *
          (-parseInt(_0x1a2d2d(0x118)) / 0x9) +
        parseInt(_0x1a2d2d(0x10a)) / 0xa;
      if (_0x548d95 === _0x36441a) break;
      else _0xbd634["push"](_0xbd634["shift"]());
    } catch (_0x47a2f8) {
      _0xbd634["push"](_0xbd634["shift"]());
    }
  }
})(_0x3df8, 0x4d6c5);
const mongoose = require(_0x567e2c(0x119)),
  Restaurant = require(_0x567e2c(0x10d)),
  reviewSchema = new mongoose[_0x567e2c(0x113)](
    {
      review: {
        type: String,
        require: [!![], "Review\x20can\x20not\x20be\x20empty\x20!"],
      },
      rating: { type: Number, min: 0x1, max: 0x5 },
      restaurant: {
        type: mongoose[_0x567e2c(0x113)][_0x567e2c(0xfd)],
        ref: _0x567e2c(0xfe),
      },
      user: {
        type: mongoose[_0x567e2c(0x113)][_0x567e2c(0xfd)],
        ref: _0x567e2c(0x115),
        required: [!![], _0x567e2c(0x101)],
      },
    },
    {
      timestamps: !![],
      toJSON: { virtuals: !![] },
      toObject: { virtuals: !![] },
    }
  );
(reviewSchema["statics"][_0x567e2c(0x112)] = async function (_0x434be7) {
  const _0x3c6b8b = _0x567e2c,
    _0x45fe2e = await this["aggregate"]([
      { $match: { restaurant: _0x434be7 } },
      {
        $group: {
          _id: _0x3c6b8b(0x100),
          nRating: { $sum: 0x1 },
          avgRating: { $avg: "$rating" },
        },
      },
    ]);
  _0x45fe2e[_0x3c6b8b(0xfa)] > 0x0
    ? await Restaurant[_0x3c6b8b(0x104)](_0x434be7, {
        numOfReviews: _0x45fe2e[0x0][_0x3c6b8b(0x117)],
        ratings: _0x45fe2e[0x0][_0x3c6b8b(0x109)],
      })
    : await Restaurant[_0x3c6b8b(0x104)](_0x434be7, {
        numOfReviews: 0x0,
        ratings: 3.5,
      });
}),
  reviewSchema[_0x567e2c(0xfc)](_0x567e2c(0x105), function () {
    const _0x1d7a2d = _0x567e2c;
    this[_0x1d7a2d(0x103)][_0x1d7a2d(0x112)](this[_0x1d7a2d(0x106)]);
  }),
  reviewSchema[_0x567e2c(0x10b)](/^findOneAnd/, async function (_0x3a9fb4) {
    const _0xf44e77 = _0x567e2c;
    (this[_0xf44e77(0xfb)] = this[_0xf44e77(0x10f)]()), _0x3a9fb4();
  }),
  reviewSchema[_0x567e2c(0xfc)](/^findOneAnd/, async function () {
    const _0x523c7a = _0x567e2c,
      _0xbb52a4 = await this[_0x523c7a(0x111)][_0x523c7a(0xff)](
        this[_0x523c7a(0xfb)]
      );
    _0xbb52a4 &&
      (await _0xbb52a4["constructor"][_0x523c7a(0x112)](
        _0xbb52a4[_0x523c7a(0x106)]
      ));
  });
function _0x31b2(_0x2e712d, _0x49ce7c) {
  const _0x3df804 = _0x3df8();
  return (
    (_0x31b2 = function (_0x31b2a1, _0x4fb255) {
      _0x31b2a1 = _0x31b2a1 - 0xf9;
      let _0x39eca2 = _0x3df804[_0x31b2a1];
      return _0x39eca2;
    }),
    _0x31b2(_0x2e712d, _0x49ce7c)
  );
}
const Review = mongoose[_0x567e2c(0x111)](_0x567e2c(0x114), reviewSchema);
module[_0x567e2c(0xf9)] = Review;
