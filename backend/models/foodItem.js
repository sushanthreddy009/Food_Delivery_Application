const _0x393a96 = _0x5815;
(function (_0x346772, _0x5ac6f0) {
  const _0x7f11e3 = _0x5815,
    _0x290361 = _0x346772();
  while (!![]) {
    try {
      const _0x4b6c67 =
        parseInt(_0x7f11e3(0x1f4)) / 0x1 +
        (parseInt(_0x7f11e3(0x1f7)) / 0x2) *
          (parseInt(_0x7f11e3(0x1f6)) / 0x3) +
        (parseInt(_0x7f11e3(0x208)) / 0x4) *
          (parseInt(_0x7f11e3(0x202)) / 0x5) +
        (-parseInt(_0x7f11e3(0x203)) / 0x6) *
          (-parseInt(_0x7f11e3(0x1fd)) / 0x7) +
        -parseInt(_0x7f11e3(0x1fa)) / 0x8 +
        -parseInt(_0x7f11e3(0x1fc)) / 0x9 +
        parseInt(_0x7f11e3(0x206)) / 0xa;
      if (_0x4b6c67 === _0x5ac6f0) break;
      else _0x290361["push"](_0x290361["shift"]());
    } catch (_0x4a450e) {
      _0x290361["push"](_0x290361["shift"]());
    }
  }
})(_0x223a, 0xc878c);
const mongoose = require("mongoose"),
  foodSchema = new mongoose[_0x393a96(0x201)]({
    name: {
      type: String,
      required: [!![], _0x393a96(0x1f9)],
      trim: !![],
      maxLength: [0x64, _0x393a96(0x205)],
    },
    price: {
      type: Number,
      required: [!![], _0x393a96(0x207)],
      maxLength: [0x5, _0x393a96(0x204)],
      default: 0x0,
    },
    description: { type: String, required: [!![], _0x393a96(0x200)] },
    ratings: { type: Number, default: 0x0 },
    images: [
      {
        public_id: { type: String, required: !![] },
        url: { type: String, required: !![] },
      },
    ],
    menu: {
      type: mongoose[_0x393a96(0x201)][_0x393a96(0x1f8)]["ObjectId"],
      ref: _0x393a96(0x1fb),
    },
    stock: {
      type: Number,
      required: [!![], "Please\x20enter\x20foodItem\x20stock"],
      maxLength: [0x5, _0x393a96(0x1f5)],
      default: 0x0,
    },
    restaurant: {
      type: mongoose["Schema"][_0x393a96(0x1f8)]["ObjectId"],
      ref: "Restaurant",
    },
    numOfReviews: { type: Number, default: 0x0 },
    reviews: [
      {
        name: { type: String, required: !![] },
        rating: { type: Number, required: !![] },
        Comment: { type: String, required: !![] },
      },
    ],
    createdAt: { type: Date, default: Date["now"] },
  });
function _0x5815(_0xe2f494, _0x19a739) {
  const _0x223a37 = _0x223a();
  return (
    (_0x5815 = function (_0x5815de, _0x12b86a) {
      _0x5815de = _0x5815de - 0x1f4;
      let _0x146c34 = _0x223a37[_0x5815de];
      return _0x146c34;
    }),
    _0x5815(_0xe2f494, _0x19a739)
  );
}
module[_0x393a96(0x1ff)] = mongoose[_0x393a96(0x1fe)]("FoodItem", foodSchema);
function _0x223a() {
  const _0x4e282d = [
    "Please\x20enter\x20FoodItem\x20description",
    "Schema",
    "6575gOsBSr",
    "30462QEyqAI",
    "FoodItem\x20name\x20cannot\x20exceed\x205\x20characters\x20",
    "FoodItem\x20name\x20cannot\x20exceed\x20100\x20characters\x20",
    "2433440ncTqMu",
    "Please\x20enter\x20FoodItem\x20price",
    "584UtNxcX",
    "827172WUrTZp",
    "foodItems\x20can\x27t\x20exceed\x205\x20characters",
    "669rrnroM",
    "12438IKdlFy",
    "Types",
    "Please\x20enter\x20FoodItem\x20name",
    "8386976knfrJg",
    "Menu",
    "10811070TIupqM",
    "581CzAVVB",
    "model",
    "exports",
  ];
  _0x223a = function () {
    return _0x4e282d;
  };
  return _0x223a();
}
