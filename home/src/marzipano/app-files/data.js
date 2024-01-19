var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-snchez-magallanes",
      "name": "Entrada Sánchez Magallanes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.02327105669325391,
        "pitch": 0.015474688606234466,
        "fov": 1.5036239095726056
      },
      "linkHotspots": [
        {
          "yaw": 0.703666549686158,
          "pitch": -0.043000241045728416,
          "rotation": 0,
          "target": "4-preescolar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1719432456575145,
          "pitch": 0.025363351275752066,
          "title": "Entrada Sánchez Magallanes<br>",
          "text": "Entrada Secundaria<br>"
        }
      ]
    },
    {
      "id": "1-entrada-lino-merino",
      "name": "Entrada Lino Merino",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.062880725735603,
          "pitch": 0.022300613911031775,
          "title": "Entrada Lino Merino<br>",
          "text": "Entrada Primaria<br>"
        }
      ]
    },
    {
      "id": "2-canchas",
      "name": "Canchas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.910234400039318,
          "pitch": -0.007845530815270507,
          "rotation": 0,
          "target": "3-foro"
        },
        {
          "yaw": -0.3393479432992397,
          "pitch": -0.002722070557231504,
          "rotation": 0,
          "target": "5-primaria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8477177690939008,
          "pitch": -0.002267189850183371,
          "title": "Cooperativa",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-foro",
      "name": "Foro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7955566057300487,
          "pitch": -0.049975960026348076,
          "rotation": 0,
          "target": "4-preescolar"
        },
        {
          "yaw": -2.407680075505903,
          "pitch": -0.09088281958364419,
          "rotation": 0,
          "target": "7-secundaria"
        },
        {
          "yaw": 1.453454636183272,
          "pitch": -0.004024546934942919,
          "rotation": 0,
          "target": "2-canchas"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7683431893320716,
          "pitch": -0.026349485480695378,
          "title": "Caja",
          "text": "Donde cobra doña Lichita<br>"
        }
      ]
    },
    {
      "id": "4-preescolar",
      "name": "Preescolar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9628537856840058,
          "pitch": -0.03364281541550618,
          "rotation": 0,
          "target": "3-foro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-primaria",
      "name": "Primaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5366203233756615,
          "pitch": -0.050219966628988644,
          "rotation": 0,
          "target": "2-canchas"
        },
        {
          "yaw": -2.745223305119193,
          "pitch": -0.07222044130116423,
          "rotation": 0,
          "target": "6-auditorio"
        },
        {
          "yaw": -1.2372851188047207e-8,
          "pitch": -0.26616875435287213,
          "rotation": 0,
          "target": "10-laboratorio-cmputo-1-primaria"
        },
        {
          "yaw": -2.9861601562742806,
          "pitch": -0.2584730197782896,
          "rotation": 0,
          "target": "11-laboratorio-cmputo-2-primaria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5803175177145707,
          "pitch": -0.08603323798149276,
          "title": "Dirección Primaria<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-auditorio",
      "name": "Auditorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.91732547267846,
          "pitch": 0.015722286875575975,
          "rotation": 0,
          "target": "5-primaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-secundaria",
      "name": "Secundaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8996329737485738,
          "pitch": 0.06687629634319592,
          "rotation": 0,
          "target": "3-foro"
        },
        {
          "yaw": -1.0737908173787378,
          "pitch": -0.9626405510671638,
          "rotation": 0,
          "target": "12-laboratorio-cmputo-secundaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bachillerato",
      "name": "Bachillerato",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0551408018446615,
          "pitch": -0.04302329175794739,
          "rotation": 0,
          "target": "9-cancha-bachillerato"
        },
        {
          "yaw": -1.5760993664970808,
          "pitch": -0.35215316509050965,
          "rotation": 0,
          "target": "13-laboratorio-cmputo-bachillerato"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cancha-bachillerato",
      "name": "Cancha Bachillerato",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-laboratorio-cmputo-1-primaria",
      "name": "Laboratorio Cómputo 1 Primaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0434403058397947,
          "pitch": 0.027306977832067147,
          "rotation": 0,
          "target": "5-primaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-laboratorio-cmputo-2-primaria",
      "name": "Laboratorio Cómputo 2 Primaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44582644357764956,
          "pitch": -0.02603996429483857,
          "rotation": 0,
          "target": "5-primaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-laboratorio-cmputo-secundaria",
      "name": "Laboratorio Cómputo Secundaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9510305835675599,
          "pitch": 0.15198029637609878,
          "rotation": 0,
          "target": "7-secundaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-laboratorio-cmputo-bachillerato",
      "name": "Laboratorio Cómputo Bachillerato",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.044520683047887,
          "pitch": 0.13853516154867052,
          "rotation": 0,
          "target": "8-bachillerato"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
