var thresholdMultiplier=2;

Config = {
    size:{
        'width':11,
        'height':19
    },
    highScoreCount: 11,
    highScores: [
        { name: 'MX',  score: 1223, level:  19, pieceType: 'prime' },
        { name: 'TLS', score:  929, level:  17, pieceType: 'four'  },
        { name: 'TON', score:  607, level:  13, pieceType: 'prime' },
        { name: 'MAY', score:  401, level:  11, pieceType: 'prime' },
        { name: 'ABI', score:  359, level:   7, pieceType: 'four'  },
        { name: 'ANA', score:   11, level:   5, pieceType: 'four'  },
        { name: 'ZOE', score:    8, level:   5, pieceType: 'four'  },
        { name: 'MON', score:    7, level:   3, pieceType: 'four'  },
        { name: 'XIA', score:    6, level:   3, pieceType: 'four'  },
        { name: 'QU',  score:    5, level:   2, pieceType: 'four'  },
        { name: 'FRM', score:    2, level:   1, pieceType: 'four'  }

        // { name: 'ABI', score:  359, level:   7, pieceType: 'four'  },
        // { name: 'ANA', score:  241, level:   5, pieceType: 'four'  },
        // { name: 'ZOE', score:  239, level:   5, pieceType: 'four'  },
        // { name: 'MON', score:  179, level:   3, pieceType: 'four'  },
        // { name: 'XIA', score:  131, level:   3, pieceType: 'four'  },
        // { name: 'QU',  score:   97, level:   2, pieceType: 'four'  },
        // { name: 'FRM', score:   37, level:   1, pieceType: 'four'  }

    ],
    levels:{
        1:{
            'interval':1009,
            'threshold':(53 * thresholdMultiplier)
        },
        2:{
            'interval':997,
            'threshold':(79 * thresholdMultiplier)
        },
        3:{
            'interval':977,
            'threshold':(103 * thresholdMultiplier)
        },
        4:{
            'interval':953,
            'threshold':(127 * thresholdMultiplier)
        },
        5:{
            'interval':937,
            'threshold':(157 * thresholdMultiplier)
        },
        6:{
            'interval':907,
            'threshold':(191 * thresholdMultiplier)
        },
        7:{
            'interval':881,
            'threshold':(251 * thresholdMultiplier)
        },
        8:{
            'interval':859,
            'threshold':(331 * thresholdMultiplier)
        },
        9:{
            'interval':839,
            'threshold':(419 * thresholdMultiplier)
        },
        10:{
            'interval':823,
            'threshold':(509 * thresholdMultiplier)
        },
        11:{
            'interval':809,
            'threshold':(599 * thresholdMultiplier)
        },
        12:{
            'interval':773,
            'threshold':(701 * thresholdMultiplier)
        },
        13:{
            'interval':757,
            'threshold':(821 * thresholdMultiplier)
        },
        15:{
            'interval':719,
            'threshold':(953 * thresholdMultiplier)
        },
        16:{
            'interval':673,
            'threshold':(1031 * thresholdMultiplier)
        },
        17:{
            'interval':653,
            'threshold':(1097 * thresholdMultiplier)
        },
        18:{
            'interval':641,
            'threshold':(1151 * thresholdMultiplier)
        },
        19:{
            'interval':617,
            'threshold':(1447 * thresholdMultiplier)
        },
        20:{
            'interval':601,
            'threshold':(1543 * thresholdMultiplier)
        },
        21:{
            'interval':587,
            'threshold':(1597 * thresholdMultiplier)
        },
        22:{
            'interval':569,
            'threshold':(1669 * thresholdMultiplier)
        },
        23:{
            'interval':547,
            'threshold':(1999 * thresholdMultiplier)
        },
        24:{
            'interval':521,
            'threshold':(2083 * thresholdMultiplier)
        },
        25:{
            'interval':499,
            'threshold':(2213 * thresholdMultiplier)
        },
        26:{
            'interval':479,
            'threshold':(2357 * thresholdMultiplier)
        },
        27:{
            'interval':461,
            'threshold':(2521 * thresholdMultiplier)
        },
        28:{
            'interval':443,
            'threshold':(2719 * thresholdMultiplier)
        },
        29:{
            'interval':431,
            'threshold':(3001 * thresholdMultiplier)
        },
        30:{
            'interval':409,
            'threshold':(3301 * thresholdMultiplier)
        },
        31:{
            'interval':389,
            'threshold':(3539 * thresholdMultiplier)
        },
        32:{
            'interval':373,
            'threshold':(3803 * thresholdMultiplier)
        },
        33:{
            'interval':353,
            'threshold':(4091 * thresholdMultiplier)
        },
        34:{
            'interval':337,
            'threshold':(4493 * thresholdMultiplier)
        },
        35:{
            'interval':313,
            'threshold':(5003 * thresholdMultiplier)
        },
        36:{
            'interval':293,
            'threshold':(5519 * thresholdMultiplier)
        },
        37:{
            'interval':281,
            'threshold':(6113 * thresholdMultiplier)
        },
        38:{
            'interval':269,
            'threshold':(6803 * thresholdMultiplier)
        },
        39:{
            'interval':251,
            'threshold':(7643 * thresholdMultiplier)
        },
        40:{
            'interval':233,
            'threshold':(8501 * thresholdMultiplier)
        },
        41:{
            'interval':223,
            'threshold':(9497 * thresholdMultiplier)
        },
        42:{
            'interval':197,
            'threshold':(11027 * thresholdMultiplier)
        },
        43:{
            'interval':181,
            'threshold':(11987 * thresholdMultiplier)
        },
        44:{
            'interval':167,
            'threshold':(13001 * thresholdMultiplier)
        },
        45:{
            'interval':151,
            'threshold':(14149 * thresholdMultiplier)
        },
        46:{
            'interval':137,
            'threshold':(15217 * thresholdMultiplier)
        },
        47:{
            'interval':113,
            'threshold':(16427 * thresholdMultiplier)
        },
        48:{
            'interval':103,
            'threshold':(17783 * thresholdMultiplier)
        },
        49:{
            'interval':89,
            'threshold':(19319 * thresholdMultiplier)
        },
        50:{
            'interval':73,
            'threshold':(21011 * thresholdMultiplier)
        },
        51:{
            'interval':61,
            'threshold':(23117 * thresholdMultiplier)
        },
        52:{
            'interval':59,
            'threshold':(26339 * thresholdMultiplier)
        },
        53:{
            'interval':53,
            'threshold':(30011 * thresholdMultiplier)
        }
    }
}