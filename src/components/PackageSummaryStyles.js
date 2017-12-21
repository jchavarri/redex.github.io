// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css   = require("bs-css/src/Css.js");
var CssEx = require("../utils/CssEx.js");
var Theme = require("../styles/Theme.js");

function root(type_) {
  return Css.style(/* :: */[
              Css.display(/* Flex */3),
              /* :: */[
                Css.justifyContent(/* SpaceBetween */5),
                /* :: */[
                  Css.unsafe("padding", ".75em 1.5em"),
                  /* :: */[
                    Css.marginBottom(Css.em(0.5)),
                    /* :: */[
                      Css.boxShadow(Theme.Shadow[/* panel */1]),
                      /* :: */[
                        Css.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
                        /* :: */[
                          Css.lineHeight(Css.em(1.45)),
                          /* :: */[
                            Css.unsafe("backgroundImage", CssEx.if_(+(type_ === "unpublished"), Theme.Panel[/* crosshatchBackground */1])),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var name = Css.style(/* :: */[
      Css.color(Theme.Color[/* link */4]),
      /* :: */[
        Css.fontSize(Css.em(1.1)),
        /* :: */[
          Css.textDecoration(/* None */0),
          /* :: */[
            Css.hover(/* :: */[
                  Css.unsafe("textDecoration", "underline"),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var version = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.fontStyle(/* Italic */1),
        /* :: */[
          Css.marginLeft(Css.em(0.5)),
          /* [] */0
        ]
      ]
    ]);

function unpublishedLabel(param) {
  if (param === "unpublished") {
    return Css.style(/* :: */[
                Css.fontSize(Css.em(0.85)),
                /* :: */[
                  Css.fontStyle(/* Italic */1),
                  /* :: */[
                    Css.marginLeft(Css.em(0.5)),
                    /* :: */[
                      Css.color(Theme.Color[/* bad */6]),
                      /* [] */0
                    ]
                  ]
                ]
              ]);
  } else {
    return Css.style(/* :: */[
                Css.display(/* None */1),
                /* [] */0
              ]);
  }
}

var description = Css.style(/* :: */[
      Css.unsafe("textOverflow", "ellipsis"),
      /* :: */[
        Css.overflow(/* Hidden */1),
        /* :: */[
          Css.unsafe("margin", ".5ex 0 1ex"),
          /* [] */0
        ]
      ]
    ]);

var tags = Css.style(/* :: */[
      Css.color(Theme.Color[/* link */4]),
      /* :: */[
        Css.selector("& a", /* :: */[
              Css.unsafe("backgroundColor", "hsla(6.9, 90%, 90%, .4)"),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var tagsIcon = Css.style(/* :: */[
      Css.opacity(0.25),
      /* [] */0
    ]);

var props = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.flexDirection(/* Column */2),
        /* :: */[
          Css.justifyContent(/* SpaceBetween */5),
          /* :: */[
            Css.alignItems(/* FlexEnd */1),
            /* [] */0
          ]
        ]
      ]
    ]);

var updated = Css.style(/* :: */[
      Css.opacity(0.75),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* [] */0
        ]
      ]
    ]);

var license = Css.style(/* :: */[
      Css.display(/* InlineBlock */11),
      /* :: */[
        Css.opacity(0.75),
        /* :: */[
          Css.fontSize(Css.em(0.85)),
          /* :: */[
            Css.unsafe("whiteSpace", "nowrap"),
            /* :: */[
              Css.border(Css.px(1), /* Solid */2, Theme.Color[/* text */3]),
              /* :: */[
                Css.unsafe("padding", "0 1ex"),
                /* :: */[
                  Css.unsafe("marginTop", "1ex"),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var nolicense = Css.style(/* :: */[
      Css.color(Theme.Color[/* bad */6]),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.border(Css.px(1), /* Solid */2, Theme.Color[/* bad */6]),
            /* :: */[
              Css.unsafe("padding", "0 1ex"),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var stars = Css.style(/* :: */[
      Css.opacity(0.75),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* [] */0
        ]
      ]
    ]);

var starIcon = Css.style(/* :: */[
      Css.marginLeft(Css.em(0.25)),
      /* :: */[
        Css.transform(Css.translateY(Css.px(-1))),
        /* :: */[
          Css.opacity(0.75),
          /* [] */0
        ]
      ]
    ]);

exports.root             = root;
exports.name             = name;
exports.version          = version;
exports.unpublishedLabel = unpublishedLabel;
exports.description      = description;
exports.tags             = tags;
exports.tagsIcon         = tagsIcon;
exports.props            = props;
exports.updated          = updated;
exports.license          = license;
exports.nolicense        = nolicense;
exports.stars            = stars;
exports.starIcon         = starIcon;
/* name Not a pure module */
