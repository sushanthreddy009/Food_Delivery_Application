const _0x1b6a0c = _0xa935;
(function (_0x2ad7a9, _0xb3fa0e) {
  const _0x3acd10 = _0xa935,
    _0x5b30a7 = _0x2ad7a9();
  while (!![]) {
    try {
      const _0xdbbcea =
        parseInt(_0x3acd10(0xcd)) / 0x1 +
        parseInt(_0x3acd10(0xce)) / 0x2 +
        (parseInt(_0x3acd10(0xd3)) / 0x3) * (-parseInt(_0x3acd10(0xca)) / 0x4) +
        (parseInt(_0x3acd10(0xbd)) / 0x5) * (parseInt(_0x3acd10(0xc2)) / 0x6) +
        (parseInt(_0x3acd10(0xbc)) / 0x7) * (-parseInt(_0x3acd10(0xd0)) / 0x8) +
        parseInt(_0x3acd10(0xc9)) / 0x9 +
        (-parseInt(_0x3acd10(0xb8)) / 0xa) * (parseInt(_0x3acd10(0xc5)) / 0xb);
      if (_0xdbbcea === _0xb3fa0e) break;
      else _0x5b30a7["push"](_0x5b30a7["shift"]());
    } catch (_0x405fff) {
      _0x5b30a7["push"](_0x5b30a7["shift"]());
    }
  }
})(_0x279f, 0x69b54);
function _0xa935(_0xcac00d, _0x31037b) {
  const _0x279f88 = _0x279f();
  return (
    (_0xa935 = function (_0xa9358f, _0x4c7a53) {
      _0xa9358f = _0xa9358f - 0xb7;
      let _0x21a68a = _0x279f88[_0xa9358f];
      return _0x21a68a;
    }),
    _0xa935(_0xcac00d, _0x31037b)
  );
}
class APIFeatures {
  constructor(_0x5f07c0, _0x30724c) {
    const _0x259f30 = _0xa935;
    (this[_0x259f30(0xc6)] = _0x5f07c0), (this["queryStr"] = _0x30724c);
  }
  [_0x1b6a0c(0xd1)]() {
    const _0x3ad33 = _0x1b6a0c,
      _0x430af4 = this["queryStr"]["keyword"]
        ? {
            name: {
              $regex: this[_0x3ad33(0xd2)][_0x3ad33(0xbf)],
              $options: "i",
            },
          }
        : {};
    return (
      (this["query"] = this["query"][_0x3ad33(0xc0)]({ ..._0x430af4 })), this
    );
  }
  [_0x1b6a0c(0xc8)]() {
    const _0x3cb407 = _0x1b6a0c,
      _0x16b5e7 = { ...this[_0x3cb407(0xd2)] },
      _0x11338f = [_0x3cb407(0xbf), _0x3cb407(0xb9), "page"];
    _0x11338f[_0x3cb407(0xbb)]((_0x512b34) => delete _0x16b5e7[_0x512b34]);
    let _0xd51f2d = JSON["stringify"](_0x16b5e7);
    (_0xd51f2d = _0xd51f2d["replace"](
      /\b(gt|gte|lt|lte)\b/g,
      (_0x5ce1a0) => "$" + _0x5ce1a0
    )),
      (this["query"] = this[_0x3cb407(0xc6)][_0x3cb407(0xc0)](
        JSON[_0x3cb407(0xbe)](_0xd51f2d)
      ));
    if (this[_0x3cb407(0xd2)]["sortBy"]) {
      const _0x117d9e = this[_0x3cb407(0xd2)][_0x3cb407(0xc4)]["toLowerCase"]();
      if (_0x117d9e === _0x3cb407(0xc1)) sortQuery = { ratings: -0x1 };
      else
        _0x117d9e === _0x3cb407(0xcc) && (sortQuery = { numOfReviews: -0x1 });
    }
    return (
      (this[_0x3cb407(0xc6)] =
        this[_0x3cb407(0xc6)][_0x3cb407(0xb7)](sortQuery)),
      this
    );
  }
  [_0x1b6a0c(0xc3)](_0xc7080f) {
    const _0x461065 = _0x1b6a0c,
      _0x4326cd = Number(this["queryStr"][_0x461065(0xcb)]) || 0x1,
      _0x460811 = _0xc7080f * (_0x4326cd - 0x1);
    return (
      (this[_0x461065(0xc6)] = this[_0x461065(0xc6)]
        ["limit"](_0xc7080f)
        [_0x461065(0xc7)](_0x460811)),
      this
    );
  }
  [_0x1b6a0c(0xb7)]() {
    const _0x1567cb = _0x1b6a0c;
    if (this[_0x1567cb(0xd2)][_0x1567cb(0xc4)]) {
      const _0x41a96c =
        this[_0x1567cb(0xd2)][_0x1567cb(0xc4)][_0x1567cb(0xba)]();
      let _0xa4f813 = {};
      if (_0x41a96c === _0x1567cb(0xc1)) _0xa4f813 = { ratings: -0x1 };
      else _0x41a96c === "reviews" && (_0xa4f813 = { numOfReviews: -0x1 });
      this[_0x1567cb(0xc6)] = this[_0x1567cb(0xc6)]["sort"](_0xa4f813);
    }
    return this;
  }
}
function _0x279f() {
  const _0x4455c1 = [
    "reviews",
    "463920rUxrVa",
    "951388BZDTQA",
    "exports",
    "616vvUhCx",
    "search",
    "queryStr",
    "57eNCQdu",
    "sort",
    "4040060fkFsVU",
    "limit",
    "toLowerCase",
    "forEach",
    "48874VTLuXz",
    "1092735egyXQg",
    "parse",
    "keyword",
    "find",
    "ratings",
    "6AipstQ",
    "pagination",
    "sortBy",
    "22BpLsZT",
    "query",
    "skip",
    "filter",
    "6412671ozUdjJ",
    "19384WaZVav",
    "page",
  ];
  _0x279f = function () {
    return _0x4455c1;
  };
  return _0x279f();
}
module[_0x1b6a0c(0xcf)] = APIFeatures;
