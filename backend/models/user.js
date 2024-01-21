const _0x104742 = _0x1c35;
function _0x1c35(_0x174318, _0x3b0fb1) {
  const _0x3f5ff3 = _0x3f5f();
  return (
    (_0x1c35 = function (_0x1c3597, _0x317560) {
      _0x1c3597 = _0x1c3597 - 0xee;
      let _0x247f2b = _0x3f5ff3[_0x1c3597];
      return _0x247f2b;
    }),
    _0x1c35(_0x174318, _0x3b0fb1)
  );
}
(function (_0x1a1a7d, _0x591bde) {
  const _0xd51a55 = _0x1c35,
    _0x30f8d5 = _0x1a1a7d();
  while (!![]) {
    try {
      const _0xc9b5ea =
        -parseInt(_0xd51a55(0xf9)) / 0x1 +
        (parseInt(_0xd51a55(0x10e)) / 0x2) * (parseInt(_0xd51a55(0xfd)) / 0x3) +
        (parseInt(_0xd51a55(0x110)) / 0x4) *
          (parseInt(_0xd51a55(0x113)) / 0x5) +
        (parseInt(_0xd51a55(0xf1)) / 0x6) *
          (-parseInt(_0xd51a55(0x106)) / 0x7) +
        parseInt(_0xd51a55(0xfe)) / 0x8 +
        (parseInt(_0xd51a55(0x103)) / 0x9) *
          (parseInt(_0xd51a55(0x102)) / 0xa) +
        parseInt(_0xd51a55(0x10f)) / 0xb;
      if (_0xc9b5ea === _0x591bde) break;
      else _0x30f8d5["push"](_0x30f8d5["shift"]());
    } catch (_0x3150b2) {
      _0x30f8d5["push"](_0x30f8d5["shift"]());
    }
  }
})(_0x3f5f, 0xf4097);
const mongoose = require(_0x104742(0xf3)),
  validator = require("validator"),
  bcrypt = require(_0x104742(0xf6)),
  jwt = require(_0x104742(0x108)),
  crypto = require("crypto"),
  userSchema = new mongoose["Schema"]({
    name: {
      type: String,
      required: [!![], _0x104742(0xff)],
      maxLength: [0x1e, _0x104742(0x101)],
    },
    email: {
      type: String,
      required: [!![], _0x104742(0xf8)],
      unique: !![],
      lowercase: !![],
      validate: [validator["isEmail"], _0x104742(0x118)],
    },
    password: {
      type: String,
      required: [!![], _0x104742(0xf5)],
      minlength: [0x6, _0x104742(0x114)],
      select: ![],
    },
    passwordConfirm: {
      type: String,
      required: [!![], "Please\x20consfirm\x20your\x20password"],
      validate: function (_0xb2d882) {
        const _0x18bb63 = _0x104742;
        return _0xb2d882 === this[_0x18bb63(0xf7)];
      },
      message: _0x104742(0xfa),
    },
    avatar: {
      public_id: { type: String, required: !![] },
      url: { type: String, required: !![] },
    },
    role: {
      type: String,
      enum: ["user", _0x104742(0xf2), _0x104742(0x10d)],
      default: _0x104742(0xfc),
    },
    phoneNumber: { type: String, required: !![] },
    createdAt: { type: Date, default: Date[_0x104742(0x104)]() },
    passwordChangedAt: Date,
    active: { type: Boolean, default: !![], select: ![] },
    passwordResetToken: String,
    passwordResetExpires: Date,
  });
function _0x3f5f() {
  const _0x1f2449 = [
    "hex",
    "jsonwebtoken",
    "update",
    "sha256",
    "passwordChangedAt",
    "createHash",
    "admin",
    "2387206KzuqLI",
    "9353355HaXLrU",
    "24tnLCoE",
    "digest",
    "passwordResetToken",
    "558505yaRkgr",
    "Your\x20password\x20must\x20be\x20longer\x20than\x206\x20characters",
    "passwordConfirm",
    "hash",
    "toString",
    "Please\x20enter\x20valid\x20email\x20address",
    "methods",
    "passwordResetExpires",
    "correctPassword",
    "354BLoGmM",
    "restaurant-owner",
    "mongoose",
    "createPasswordResetToken",
    "Please\x20enter\x20your\x20password",
    "bcryptjs",
    "password",
    "Please\x20enter\x20your\x20email",
    "1452803RoUxZD",
    "password\x20are\x20not\x20same\x20!",
    "changedPasswordAfter",
    "user",
    "3YZGIiq",
    "6907336FOkgBW",
    "Please\x20enter\x20your\x20name",
    "pre",
    "Your\x20name\x20cannot\x20exceed\x2030\x20characters",
    "1792510bYjImk",
    "36bRMAIG",
    "now",
    "getTime",
    "218561JDhpEO",
  ];
  _0x3f5f = function () {
    return _0x1f2449;
  };
  return _0x3f5f();
}
userSchema[_0x104742(0x100)]("save", async function (_0x502cd6) {
  const _0xa1f0fd = _0x104742;
  if (!this["isModified"]("password")) return _0x502cd6();
  (this[_0xa1f0fd(0xf7)] = await bcrypt[_0xa1f0fd(0x116)](
    this[_0xa1f0fd(0xf7)],
    0xc
  )),
    (this[_0xa1f0fd(0x115)] = undefined),
    _0x502cd6();
}),
  (userSchema[_0x104742(0xee)][_0x104742(0xf0)] = async function (
    _0x82086d,
    _0x3bd57d
  ) {
    return await bcrypt["compare"](_0x82086d, _0x3bd57d);
  }),
  (userSchema[_0x104742(0xee)][_0x104742(0xfb)] = function (_0x33b420) {
    const _0x2bfb6e = _0x104742;
    if (this[_0x2bfb6e(0x10b)]) {
      const _0x4f3302 = parseInt(
        this[_0x2bfb6e(0x10b)][_0x2bfb6e(0x105)]() / 0x3e8,
        0xa
      );
      return _0x33b420 < _0x4f3302;
    }
    return ![];
  }),
  (userSchema[_0x104742(0xee)][_0x104742(0xf4)] = function () {
    const _0x5e5899 = _0x104742,
      _0x44bb5a = crypto["randomBytes"](0x20)[_0x5e5899(0x117)]("hex");
    return (
      (this[_0x5e5899(0x112)] = crypto[_0x5e5899(0x10c)](_0x5e5899(0x10a))
        [_0x5e5899(0x109)](_0x44bb5a)
        [_0x5e5899(0x111)](_0x5e5899(0x107))),
      (this[_0x5e5899(0xef)] = Date[_0x5e5899(0x104)]() + 0xa * 0x3c * 0x3e8),
      _0x44bb5a
    );
  }),
  (module["exports"] = mongoose["model"]("User", userSchema));
