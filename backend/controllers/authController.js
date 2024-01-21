const _0x43429f = _0x449f;
function _0x38ce() {
  const _0x5de32a = [
    "1658481DcVoFW",
    "Old\x20password\x20is\x20incorrect",
    "There\x20was\x20an\x20error\x20sending\x20the\x20email,\x20try\x20again\x20later!",
    "json",
    "create",
    "cookie",
    "_id",
    "log",
    "5kgmUKP",
    "../models/user",
    "createPasswordResetToken",
    "iat",
    "authorization",
    "secure_url",
    "update",
    "protect",
    "correctPassword",
    "2993586pRKKYx",
    "8WGiMAn",
    "Token\x20is\x20invalid\x20or\x20has\x20expired",
    "User\x20recently\x20changed\x20password\x20!\x20please\x20log\x20in\x20again.",
    "startsWith",
    "now",
    "../middlewares/catchAsyncErrors",
    "There\x20is\x20no\x20user\x20with\x20email\x20address\x20.",
    "save",
    "Invalid\x20Email\x20or\x20Password",
    "3220189wqrOcO",
    "password",
    "JWT_EXPIRES_TIME",
    "passwordResetExpires",
    "passwordResetToken",
    "16CiHYCp",
    "findByIdAndUpdate",
    "35LLCDCv",
    "jsonwebtoken",
    "changedPasswordAfter",
    "7421544YBbYzq",
    "createHash",
    "status",
    "2840iUOhpj",
    "destroy",
    "Password\x20updated\x20successfully",
    "c6Eka2VMeuOk7Od0JvHFTCNxzDE",
    "df8dnez80",
    "updatePassword",
    "email",
    "forgotPassword",
    "avatar",
    "avatars",
    "passwordConfirm",
    "findById",
    "cloudinary",
    "+password",
    "JWT_SECRET",
    "uploader",
    "jwt",
    "getUserProfile",
    "../utils/email",
    "body",
    "/users/resetPassword/",
    "signup",
    "Please\x20enter\x20email\x20&\x20password",
    "12584lhjxFX",
    "single",
    "385231413173631",
    "sha256",
    "scale",
    "headers",
    "verify",
    "digest",
    "public_id",
    "60980KSHdWQ",
    "user",
    "Bearer",
    "error",
    "select",
    "updateProfile",
    "env",
    "findOne",
    "1300905mIfddb",
  ];
  _0x38ce = function () {
    return _0x5de32a;
  };
  return _0x38ce();
}
(function (_0x442209, _0x5eaf41) {
  const _0x21bd01 = _0x449f,
    _0x48125a = _0x442209();
  while (!![]) {
    try {
      const _0x5dea18 =
        (parseInt(_0x21bd01(0x8a)) / 0x1) * (parseInt(_0x21bd01(0xb0)) / 0x2) +
        (parseInt(_0x21bd01(0xb9)) / 0x3) * (parseInt(_0x21bd01(0x7a)) / 0x4) +
        (-parseInt(_0x21bd01(0xc1)) / 0x5) *
          (-parseInt(_0x21bd01(0x79)) / 0x6) +
        -parseInt(_0x21bd01(0x83)) / 0x7 +
        (-parseInt(_0x21bd01(0x88)) / 0x8) * (parseInt(_0x21bd01(0xb8)) / 0x9) +
        (parseInt(_0x21bd01(0x90)) / 0xa) * (-parseInt(_0x21bd01(0xa7)) / 0xb) +
        -parseInt(_0x21bd01(0x8d)) / 0xc;
      if (_0x5dea18 === _0x5eaf41) break;
      else _0x48125a["push"](_0x48125a["shift"]());
    } catch (_0x2aeac9) {
      _0x48125a["push"](_0x48125a["shift"]());
    }
  }
})(_0x38ce, 0xef13c);
const User = require(_0x43429f(0xc2)),
  crypto = require("crypto"),
  jwt = require(_0x43429f(0x8b)),
  { promisify } = require("util"),
  ErrorHandler = require("../utils/errorHandler"),
  Email = require(_0x43429f(0xa2)),
  catchAsyncErrors = require(_0x43429f(0x7f)),
  cloudinary = require(_0x43429f(0x9c))["v2"],
  { CloudinaryStorage } = require("multer-storage-cloudinary"),
  multer = require("multer"),
  signToken = (_0x3f6689) => {
    const _0x2331f5 = _0x43429f;
    return jwt["sign"]({ id: _0x3f6689 }, process["env"]["JWT_SECRET"], {
      expiresIn: process[_0x2331f5(0xb6)]["JWT_EXPIRES_TIME"] + "d",
    });
  },
  createSendToken = (_0x41eed4, _0x417ba4, _0x6c972c) => {
    const _0x3d6fdd = _0x43429f,
      _0x3a497e = signToken(_0x41eed4[_0x3d6fdd(0xbf)]),
      _0x28a1fd = {
        expires: new Date(
          Date[_0x3d6fdd(0x7e)]() +
            process[_0x3d6fdd(0xb6)][_0x3d6fdd(0x85)] *
              0x18 *
              0x3c *
              0x3c *
              0x3e8
        ),
        httpOnly: !![],
      };
    _0x6c972c[_0x3d6fdd(0xbe)]("jwt", _0x3a497e, _0x28a1fd),
      (_0x41eed4["password"] = undefined),
      _0x6c972c[_0x3d6fdd(0x8f)](_0x417ba4)[_0x3d6fdd(0xbc)]({
        success: !![],
        token: _0x3a497e,
        data: { user: _0x41eed4 },
      });
  };
function _0x449f(_0xe97901, _0x2f26ee) {
  const _0x38ceaa = _0x38ce();
  return (
    (_0x449f = function (_0x449f35, _0x333107) {
      _0x449f35 = _0x449f35 - 0x75;
      let _0x451ba6 = _0x38ceaa[_0x449f35];
      return _0x451ba6;
    }),
    _0x449f(_0xe97901, _0x2f26ee)
  );
}
cloudinary["config"]({
  cloud_name: _0x43429f(0x94),
  api_key: _0x43429f(0xa9),
  api_secret: _0x43429f(0x93),
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: _0x43429f(0x99),
      transformation: [{ width: 0x96, crop: _0x43429f(0xab) }],
    },
  }),
  upload = multer({ storage: storage })[_0x43429f(0xa8)](_0x43429f(0x98));
(exports[_0x43429f(0xa5)] = catchAsyncErrors(
  async (_0x197cc2, _0x29bee0, _0x10b7bf) => {
    const _0x346f0a = _0x43429f,
      {
        name: _0x185af2,
        email: _0x6aa07e,
        password: _0x1820db,
        passwordConfirm: _0x3adae8,
        phoneNumber: _0x4a7dbb,
      } = _0x197cc2[_0x346f0a(0xa3)],
      _0x45e6bc = await cloudinary[_0x346f0a(0x9f)]["upload"](
        _0x197cc2[_0x346f0a(0xa3)][_0x346f0a(0x98)],
        { folder: _0x346f0a(0x99), width: 0x96, crop: _0x346f0a(0xab) }
      ),
      _0x581cd3 = await User[_0x346f0a(0xbd)]({
        name: _0x185af2,
        email: _0x6aa07e,
        password: _0x1820db,
        passwordConfirm: _0x3adae8,
        phoneNumber: _0x4a7dbb,
        avatar: {
          public_id: _0x45e6bc[_0x346f0a(0xaf)],
          url: _0x45e6bc["secure_url"],
        },
      });
    createSendToken(_0x581cd3, 0xc8, _0x29bee0);
  }
)),
  (exports["login"] = catchAsyncErrors(
    async (_0x1c324f, _0x2e7e0c, _0x26dca) => {
      const _0x488e84 = _0x43429f,
        { email: _0x5bd883, password: _0x4c921f } = _0x1c324f["body"];
      if (!_0x5bd883 || !_0x4c921f)
        return _0x26dca(new ErrorHandler(_0x488e84(0xa6), 0x190));
      const _0x5da503 = await User[_0x488e84(0xb7)]({ email: _0x5bd883 })[
        _0x488e84(0xb4)
      ](_0x488e84(0x9d));
      if (!_0x5da503) return _0x26dca(new ErrorHandler(_0x488e84(0x82), 0x191));
      const _0x52b142 = await _0x5da503[_0x488e84(0x78)](
        _0x4c921f,
        _0x5da503["password"]
      );
      if (!_0x52b142) return _0x26dca(new ErrorHandler(_0x488e84(0x82), 0x191));
      createSendToken(_0x5da503, 0xc8, _0x2e7e0c);
    }
  )),
  (exports[_0x43429f(0x77)] = catchAsyncErrors(
    async (_0x29d683, _0x588e0d, _0x38ad82) => {
      const _0x320974 = _0x43429f;
      let _0x5f4c81;
      if (
        _0x29d683[_0x320974(0xac)][_0x320974(0xc5)] &&
        _0x29d683["headers"]["authorization"][_0x320974(0x7d)](_0x320974(0xb2))
      )
        _0x5f4c81 =
          _0x29d683[_0x320974(0xac)][_0x320974(0xc5)]["split"]("\x20")[0x1];
      else
        _0x29d683["cookies"][_0x320974(0xa0)] &&
          (_0x5f4c81 = _0x29d683["cookies"][_0x320974(0xa0)]);
      if (!_0x5f4c81)
        return _0x38ad82(
          new ErrorHandler(
            "You\x20are\x20not\x20logged\x20in!\x20Please\x20log\x20in\x20to\x20get\x20access.",
            0x194
          )
        );
      const _0x57d26e = await promisify(jwt[_0x320974(0xad)])(
          _0x5f4c81,
          process[_0x320974(0xb6)][_0x320974(0x9e)]
        ),
        _0x5dd63f = await User[_0x320974(0x9b)](_0x57d26e["id"]);
      if (!_0x5dd63f)
        return _0x38ad82(new ErrorHandler(_0x320974(0x7c), 0x194));
      if (_0x5dd63f[_0x320974(0x8c)](_0x57d26e[_0x320974(0xc4)]))
        return _0x38ad82(new ErrorHandler(_0x320974(0x7c), 0x194));
      (_0x29d683[_0x320974(0xb1)] = _0x5dd63f), _0x38ad82();
    }
  )),
  (exports[_0x43429f(0xa1)] = catchAsyncErrors(
    async (_0xfe36a6, _0x2e983e, _0x22eaed) => {
      const _0x1de8b2 = _0x43429f,
        _0x335738 = await User["findById"](_0xfe36a6["user"]["id"]);
      _0x2e983e["status"](0xc8)[_0x1de8b2(0xbc)]({
        success: !![],
        user: _0x335738,
      });
    }
  )),
  (exports[_0x43429f(0x95)] = async (_0x2e52c8, _0x3d6d00, _0xfc75ef) => {
    const _0x2be2a2 = _0x43429f;
    try {
      console[_0x2be2a2(0xc0)](_0x2e52c8[_0x2be2a2(0xa3)]);
      const {
          oldPassword: _0x4e4220,
          newPassword: _0x1c1a35,
          newPasswordConfirm: _0x4b4c7c,
        } = _0x2e52c8[_0x2be2a2(0xa3)],
        _0x44a294 = await User["findById"](_0x2e52c8[_0x2be2a2(0xb1)]["id"])[
          "select"
        ](_0x2be2a2(0x9d)),
        _0xfaba5e = await _0x44a294[_0x2be2a2(0x78)](
          _0x4e4220,
          _0x44a294[_0x2be2a2(0x84)]
        );
      if (!_0xfaba5e)
        return _0xfc75ef(new ErrorHandler(_0x2be2a2(0xba), 0x190));
      (_0x44a294["password"] = _0x1c1a35),
        (_0x44a294[_0x2be2a2(0x9a)] = _0x4b4c7c),
        await _0x44a294["save"](),
        _0x3d6d00["status"](0xc8)[_0x2be2a2(0xbc)]({
          success: !![],
          message: _0x2be2a2(0x92),
        });
    } catch (_0xcf7f4a) {
      return (
        console[_0x2be2a2(0xb3)](_0xcf7f4a),
        _0xfc75ef(new ErrorHandler("Internal\x20Server\x20Error", 0x1f4))
      );
    }
  }),
  (exports[_0x43429f(0xb5)] = catchAsyncErrors(
    async (_0x3ec468, _0x1e831d, _0x13f2db) => {
      const _0xedf558 = _0x43429f,
        _0x61fffe = {
          name: _0x3ec468[_0xedf558(0xa3)]["name"],
          email: _0x3ec468[_0xedf558(0xa3)][_0xedf558(0x96)],
        };
      if (_0x3ec468["body"][_0xedf558(0x98)] !== "") {
        const _0x111291 = await User[_0xedf558(0x9b)](_0x3ec468["user"]["id"]),
          _0x4ebe37 = _0x111291["avatar"]["public_id"],
          _0x3d4474 = await cloudinary[_0xedf558(0x9f)][_0xedf558(0x91)](
            _0x4ebe37
          ),
          _0x4518d1 = await cloudinary["uploader"]["upload"](
            _0x3ec468[_0xedf558(0xa3)][_0xedf558(0x98)],
            { folder: _0xedf558(0x99), width: 0x96, crop: "scale" }
          );
        _0x61fffe[_0xedf558(0x98)] = {
          public_id: _0x4518d1[_0xedf558(0xaf)],
          url: _0x4518d1[_0xedf558(0x75)],
        };
      }
      const _0x17de82 = await User[_0xedf558(0x89)](
        _0x3ec468["user"]["id"],
        _0x61fffe,
        { new: !![], runValidators: !![], useFindAndModify: ![] }
      );
      _0x1e831d[_0xedf558(0x8f)](0xc8)["json"]({ success: !![] });
    }
  )),
  (exports[_0x43429f(0x97)] = catchAsyncErrors(
    async (_0x3fb72a, _0x2bb396, _0x2baf31) => {
      const _0xecf7b8 = _0x43429f,
        _0x3ebfdb = await User[_0xecf7b8(0xb7)]({
          email: _0x3fb72a[_0xecf7b8(0xa3)][_0xecf7b8(0x96)],
        });
      if (!_0x3ebfdb)
        return _0x2baf31(new ErrorHandler(_0xecf7b8(0x80), 0x194));
      const _0x35f32e = _0x3ebfdb[_0xecf7b8(0xc3)]();
      await _0x3ebfdb[_0xecf7b8(0x81)]({ validateBeforeSave: ![] });
      try {
        const _0x31b326 =
          process[_0xecf7b8(0xb6)]["FRONTEND_URL"] +
          _0xecf7b8(0xa4) +
          _0x35f32e;
        return (
          await new Email(_0x3ebfdb, _0x31b326)["sendPasswordReset"](),
          _0x2bb396[_0xecf7b8(0x8f)](0xc8)[_0xecf7b8(0xbc)]({
            status: "success",
            message: "Token\x20sent\x20to\x20email!",
          })
        );
      } catch (_0x2b5928) {
        return (
          (_0x3ebfdb[_0xecf7b8(0x87)] = undefined),
          (_0x3ebfdb[_0xecf7b8(0x86)] = undefined),
          await _0x3ebfdb["save"]({ validateBeforeSave: ![] }),
          _0x2baf31(new ErrorHandler(_0xecf7b8(0xbb), 0x1f4))
        );
      }
    }
  )),
  (exports["resetPassword"] = catchAsyncErrors(
    async (_0x3b9a1d, _0x3144be, _0x504885) => {
      const _0x5504f6 = _0x43429f,
        _0x50409f = crypto[_0x5504f6(0x8e)](_0x5504f6(0xaa))
          [_0x5504f6(0x76)](_0x3b9a1d["params"]["token"])
          [_0x5504f6(0xae)]("hex"),
        _0x13a6fd = await User[_0x5504f6(0xb7)]({
          passwordResetToken: _0x50409f,
          passwordResetExpires: { $gt: Date[_0x5504f6(0x7e)]() },
        });
      if (!_0x13a6fd)
        return _0x504885(new ErrorHandler(_0x5504f6(0x7b), 0x190));
      (_0x13a6fd["password"] = _0x3b9a1d[_0x5504f6(0xa3)]["password"]),
        (_0x13a6fd[_0x5504f6(0x9a)] =
          _0x3b9a1d[_0x5504f6(0xa3)][_0x5504f6(0x9a)]),
        (_0x13a6fd[_0x5504f6(0x87)] = undefined),
        (_0x13a6fd[_0x5504f6(0x86)] = undefined),
        await _0x13a6fd[_0x5504f6(0x81)](),
        createSendToken(_0x13a6fd, 0xc8, _0x3144be);
    }
  )),
  (exports["logout"] = catchAsyncErrors(
    async (_0xe51dc6, _0x338242, _0x247115) => {
      const _0x5b8185 = _0x43429f;
      _0x338242[_0x5b8185(0xbe)](_0x5b8185(0xa0), null, {
        expires: new Date(Date["now"]()),
        httpOnly: !![],
      }),
        _0x338242[_0x5b8185(0x8f)](0xc8)["json"]({
          success: !![],
          message: "Logged\x20out",
        });
    }
  ));
