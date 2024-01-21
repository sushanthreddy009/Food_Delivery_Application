const _0x38fc6d = _0x4299;
function _0x481c() {
  const _0x389709 = [
    "22890xMLwzt",
    "./routes/restaurant",
    "view\x20engine",
    "CLOUDINARY_CLOUD_NAME",
    "./routes/auth",
    "set",
    "fail",
    "742870aKBcSO",
    "/api/v1/eats/menus",
    "config",
    "express",
    "originalUrl",
    "./routes/foodItem",
    "./routes/reviewsRoutes",
    "16AcLnwp",
    "CLOUDINARY_API_KEY",
    "exports",
    "urlencoded",
    "join",
    "27EClyjh",
    "cookie-parser",
    "136imaXMZ",
    "857052EBaPpR",
    "746970iEzVdl",
    "/api/v1/eats",
    "CLOUDINARY_API_SECRET",
    "4184904HattSi",
    "path",
    "pug",
    "env",
    "./routes/menu",
    "cloudinary",
    "53894VndfTH",
    "200547kQYaOC",
    "use",
    "/api/v1",
    "./routes/payment",
    "/api/v1/reviews",
    "./routes/couponRoutes",
    "30kb",
    "json",
    "views",
  ];
  _0x481c = function () {
    return _0x389709;
  };
  return _0x481c();
}
(function (_0x4e97ae, _0x4ef0d4) {
  const _0x4552b4 = _0x4299,
    _0x571fd4 = _0x4e97ae();
  while (!![]) {
    try {
      const _0xbcedea =
        (-parseInt(_0x4552b4(0x114)) / 0x1) *
          (-parseInt(_0x4552b4(0x126)) / 0x2) +
        parseInt(_0x4552b4(0x127)) / 0x3 +
        (parseInt(_0x4552b4(0x11b)) / 0x4) *
          (-parseInt(_0x4552b4(0x106)) / 0x5) +
        parseInt(_0x4552b4(0x11d)) / 0x6 +
        parseInt(_0x4552b4(0x11c)) / 0x7 +
        -parseInt(_0x4552b4(0x120)) / 0x8 +
        (parseInt(_0x4552b4(0x119)) / 0x9) * (parseInt(_0x4552b4(0x10d)) / 0xa);
      if (_0xbcedea === _0x4ef0d4) break;
      else _0x571fd4["push"](_0x571fd4["shift"]());
    } catch (_0x8b7926) {
      _0x571fd4["push"](_0x571fd4["shift"]());
    }
  }
})(_0x481c, 0x46904);
const express = require(_0x38fc6d(0x110)),
  app = express(),
  path = require(_0x38fc6d(0x121)),
  cookieParser = require(_0x38fc6d(0x11a)),
  bodyParser = require("body-parser"),
  cloudinary = require(_0x38fc6d(0x125)),
  fileUpload = require("express-fileupload"),
  errorMiddleware = require("./middlewares/errors");
function _0x4299(_0x3cca63, _0xca55f4) {
  const _0x481cf0 = _0x481c();
  return (
    (_0x4299 = function (_0x42991f, _0x5e98a3) {
      _0x42991f = _0x42991f - 0x101;
      let _0x2a503e = _0x481cf0[_0x42991f];
      return _0x2a503e;
    }),
    _0x4299(_0x3cca63, _0xca55f4)
  );
}
app["use"](express["json"]()),
  app[_0x38fc6d(0x128)](bodyParser[_0x38fc6d(0x117)]({ extended: !![] })),
  app[_0x38fc6d(0x128)](cookieParser()),
  app[_0x38fc6d(0x128)](fileUpload()),
  cloudinary[_0x38fc6d(0x10f)]({
    cloud_name: process[_0x38fc6d(0x123)][_0x38fc6d(0x109)],
    api_key: process[_0x38fc6d(0x123)][_0x38fc6d(0x115)],
    api_secret: process[_0x38fc6d(0x123)][_0x38fc6d(0x11f)],
  });
const foodRouter = require(_0x38fc6d(0x112)),
  restaurant = require(_0x38fc6d(0x107)),
  menuRouter = require(_0x38fc6d(0x124)),
  coupon = require(_0x38fc6d(0x102)),
  review = require(_0x38fc6d(0x113)),
  order = require("./routes/order"),
  auth = require(_0x38fc6d(0x10a)),
  payment = require(_0x38fc6d(0x12a));
app[_0x38fc6d(0x128)](express["json"]({ limit: _0x38fc6d(0x103) })),
  app[_0x38fc6d(0x128)](
    express[_0x38fc6d(0x117)]({ extended: !![], limit: "30kb" })
  ),
  app[_0x38fc6d(0x128)](_0x38fc6d(0x11e), foodRouter),
  app[_0x38fc6d(0x128)](_0x38fc6d(0x10e), menuRouter),
  app[_0x38fc6d(0x128)]("/api/v1/eats/stores", restaurant),
  app[_0x38fc6d(0x128)]("/api/v1/eats/orders", order),
  app[_0x38fc6d(0x128)](_0x38fc6d(0x101), review),
  app[_0x38fc6d(0x128)]("/api/v1/users", auth),
  app[_0x38fc6d(0x128)](_0x38fc6d(0x129), payment),
  app["use"]("/api/v1/coupon", coupon),
  app[_0x38fc6d(0x10b)](_0x38fc6d(0x108), _0x38fc6d(0x122)),
  app[_0x38fc6d(0x10b)](
    _0x38fc6d(0x105),
    path[_0x38fc6d(0x118)](__dirname, _0x38fc6d(0x105))
  ),
  app["all"]("*", (_0x2281a3, _0x151500, _0x1fa5d3) => {
    const _0x38c0ea = _0x38fc6d;
    _0x151500["status"](0x194)[_0x38c0ea(0x104)]({
      status: _0x38c0ea(0x10c),
      message:
        "Can\x27t\x20find\x20" +
        _0x2281a3[_0x38c0ea(0x111)] +
        "\x20on\x20this\x20server\x20!",
    });
  }),
  app["use"](errorMiddleware),
  (module[_0x38fc6d(0x116)] = app);
