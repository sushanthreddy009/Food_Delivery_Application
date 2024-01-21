const _0x1bd9f5 = _0x2948;
(function (_0x3467b0, _0x3344dd) {
  const _0x390b30 = _0x2948,
    _0x10eab0 = _0x3467b0();
  while (!![]) {
    try {
      const _0x333190 =
        -parseInt(_0x390b30(0xff)) / 0x1 +
        -parseInt(_0x390b30(0x10f)) / 0x2 +
        (parseInt(_0x390b30(0xfd)) / 0x3) * (-parseInt(_0x390b30(0xf3)) / 0x4) +
        (-parseInt(_0x390b30(0xf6)) / 0x5) *
          (parseInt(_0x390b30(0x103)) / 0x6) +
        (-parseInt(_0x390b30(0xf7)) / 0x7) *
          (parseInt(_0x390b30(0x10a)) / 0x8) +
        (-parseInt(_0x390b30(0xf4)) / 0x9) *
          (-parseInt(_0x390b30(0xfb)) / 0xa) +
        parseInt(_0x390b30(0x109)) / 0xb;
      if (_0x333190 === _0x3344dd) break;
      else _0x10eab0["push"](_0x10eab0["shift"]());
    } catch (_0x1233ed) {
      _0x10eab0["push"](_0x10eab0["shift"]());
    }
  }
})(_0xdd06, 0x592c4);
const app = require(_0x1bd9f5(0x10e)),
  connectDatabase = require(_0x1bd9f5(0xf9)),
  dotenv = require(_0x1bd9f5(0x10b)),
  cloudinary = require(_0x1bd9f5(0x100)),
  { setDriver } = require(_0x1bd9f5(0x105));
function _0xdd06() {
  const _0x5aa3c3 = [
    "log",
    "exit",
    "63892AwHHKr",
    "2860614vPNcea",
    "CLOUDINARY_API_KEY",
    "5220PtcCNE",
    "2222647ZecDCt",
    "\x20in\x20",
    "./config/database",
    "NODE_ENV",
    "10EZefYH",
    "config",
    "69jsSvbm",
    "listen",
    "235310hmWCll",
    "cloudinary",
    "CLOUDINARY_API_SECRET",
    "Shutting\x20down\x20the\x20server\x20due\x20to\x20Unhandled\x20Promise\x20rejection",
    "3282UoiSbj",
    "unhandledRejection\x20",
    "mongoose",
    "env",
    "\x20mode.",
    "Shutting\x20down\x20server\x20due\x20to\x20uncaught\x20exception",
    "24725140uiFYQx",
    "8IERIXD",
    "dotenv",
    "PORT",
    "uncaughtException",
    "./app",
    "1418112IxDveY",
  ];
  _0xdd06 = function () {
    return _0x5aa3c3;
  };
  return _0xdd06();
}
process["on"](_0x1bd9f5(0x10d), (_0x439bd6) => {
  const _0x30dcc4 = _0x1bd9f5;
  console["log"]("ERROR:\x20" + _0x439bd6["stack"]),
    console[_0x30dcc4(0xf1)](_0x30dcc4(0x108)),
    process["exit"](0x1);
}),
  dotenv[_0x1bd9f5(0xfc)]({ path: "./config/config.env" }),
  connectDatabase(),
  cloudinary[_0x1bd9f5(0xfc)]({
    cloud_name: process[_0x1bd9f5(0x106)]["CLOUDINARY_CLOUD_NAME"],
    api_key: process[_0x1bd9f5(0x106)][_0x1bd9f5(0xf5)],
    api_secret: process[_0x1bd9f5(0x106)][_0x1bd9f5(0x101)],
  });
function _0x2948(_0x2b98ca, _0x2dd960) {
  const _0xdd06c7 = _0xdd06();
  return (
    (_0x2948 = function (_0x29484, _0x3833ee) {
      _0x29484 = _0x29484 - 0xf1;
      let _0x32f7b1 = _0xdd06c7[_0x29484];
      return _0x32f7b1;
    }),
    _0x2948(_0x2b98ca, _0x2dd960)
  );
}
const server = app[_0x1bd9f5(0xfe)](
  process[_0x1bd9f5(0x106)][_0x1bd9f5(0x10c)],
  () => {
    const _0x5db625 = _0x1bd9f5;
    console["log"](
      "Server\x20started\x20on\x20PORT:\x20" +
        process[_0x5db625(0x106)][_0x5db625(0x10c)] +
        _0x5db625(0xf8) +
        process[_0x5db625(0x106)][_0x5db625(0xfa)] +
        _0x5db625(0x107)
    );
  }
);
process["on"](_0x1bd9f5(0x104), (_0x30b888) => {
  const _0x5beff6 = _0x1bd9f5;
  console[_0x5beff6(0xf1)]("ERROR:\x20" + _0x30b888["message"]),
    console[_0x5beff6(0xf1)](_0x5beff6(0x102)),
    server["close"](() => {
      const _0x3142a0 = _0x5beff6;
      process[_0x3142a0(0xf2)](0x1);
    });
});
