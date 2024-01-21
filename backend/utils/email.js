const _0x422197 = _0x41df;
(function (_0x54546c, _0x21ed35) {
  const _0x33ef41 = _0x41df,
    _0x13c7f6 = _0x54546c();
  while (!![]) {
    try {
      const _0x3a1307 =
        -parseInt(_0x33ef41(0x15e)) / 0x1 +
        (parseInt(_0x33ef41(0x16e)) / 0x2) *
          (-parseInt(_0x33ef41(0x16a)) / 0x3) +
        parseInt(_0x33ef41(0x166)) / 0x4 +
        parseInt(_0x33ef41(0x168)) / 0x5 +
        parseInt(_0x33ef41(0x174)) / 0x6 +
        -parseInt(_0x33ef41(0x16c)) / 0x7 +
        parseInt(_0x33ef41(0x15f)) / 0x8;
      if (_0x3a1307 === _0x21ed35) break;
      else _0x13c7f6["push"](_0x13c7f6["shift"]());
    } catch (_0x4b5c56) {
      _0x13c7f6["push"](_0x13c7f6["shift"]());
    }
  }
})(_0x3b6d, 0x8a407);
function _0x3b6d() {
  const _0x25e574 = [
    "74026oDEHNf",
    "welcome",
    ".pug",
    "EMAIL_FROM",
    "sendWelcome",
    "welcome\x20to\x20the\x20Order\x20It!",
    "2486580RMAnfi",
    "EMAIL_HOST",
    "firstName",
    "exports",
    "EMAIL_USERNAME",
    "from",
    "855156iFQXwO",
    "10007208ScaJkQ",
    "newTransport",
    "split",
    "renderFile",
    "env",
    "EMAIL_PASSWORD",
    "passwordReset",
    "2279304uWzdtc",
    "url",
    "3627455hgbdTp",
    "email",
    "66XXsNyB",
    "send",
    "5074489PtDzsY",
    "createTransport",
  ];
  _0x3b6d = function () {
    return _0x25e574;
  };
  return _0x3b6d();
}
function _0x41df(_0x2a4d26, _0x400467) {
  const _0x3b6daa = _0x3b6d();
  return (
    (_0x41df = function (_0x41dfce, _0x12310b) {
      _0x41dfce = _0x41dfce - 0x159;
      let _0x42f30f = _0x3b6daa[_0x41dfce];
      return _0x42f30f;
    }),
    _0x41df(_0x2a4d26, _0x400467)
  );
}
const nodemailer = require("nodemailer"),
  pug = require("pug"),
  htmlToText = require("html-to-text");
module[_0x422197(0x15b)] = class Email {
  constructor(_0x56f13c, _0x36147c) {
    const _0xe2c9a6 = _0x422197;
    (this["to"] = _0x56f13c[_0xe2c9a6(0x169)]),
      (this[_0xe2c9a6(0x15a)] =
        _0x56f13c["name"][_0xe2c9a6(0x161)]("\x20")[0x0]),
      (this[_0xe2c9a6(0x167)] = _0x36147c),
      (this[_0xe2c9a6(0x15d)] =
        "OrderIt\x20<" + process[_0xe2c9a6(0x163)][_0xe2c9a6(0x171)] + ">");
  }
  [_0x422197(0x160)]() {
    const _0x5310fe = _0x422197;
    return nodemailer[_0x5310fe(0x16d)]({
      host: process["env"][_0x5310fe(0x159)],
      port: process[_0x5310fe(0x163)]["EMAIL_PORT"],
      auth: {
        user: process[_0x5310fe(0x163)][_0x5310fe(0x15c)],
        pass: process[_0x5310fe(0x163)][_0x5310fe(0x164)],
      },
    });
  }
  async [_0x422197(0x16b)](_0x408aef, _0x425876) {
    const _0x4c9189 = _0x422197,
      _0xfa45d8 = pug[_0x4c9189(0x162)](
        __dirname + "/../view/" + _0x408aef + _0x4c9189(0x170),
        {
          firstName: this["firstName"],
          url: this[_0x4c9189(0x167)],
          subject: _0x425876,
        }
      ),
      _0x1551ff = {
        from: this["from"],
        to: this["to"],
        subject: _0x425876,
        html: _0xfa45d8,
        text: htmlToText["convert"](_0xfa45d8),
      };
    await this[_0x4c9189(0x160)]()["sendMail"](_0x1551ff);
  }
  async [_0x422197(0x172)]() {
    const _0x23e531 = _0x422197;
    await this[_0x23e531(0x16b)](_0x23e531(0x16f), _0x23e531(0x173));
  }
  async ["sendPasswordReset"]() {
    const _0x2e0d11 = _0x422197;
    await this[_0x2e0d11(0x16b)](
      _0x2e0d11(0x165),
      "password\x20reset\x20token\x20(valid\x20for\x20only\x2010\x20minutes)"
    );
  }
};
