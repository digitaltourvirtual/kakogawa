(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC"
  },
  {
   "yaw": -64.79,
   "backwardYaw": 107.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95",
 "thumbnailUrl": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_t.jpg",
 "label": "WILLIAN (16)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50ABD9C4_4294_5E16_41A0_1CA1FB136817",
  "this.overlay_50E962A9_4294_521E_41C6_EEF1BEF26D89"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 14.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_78BE6A20_54C0_7190_41CC_A7608F3A642C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "partial": false,
 "id": "panorama_3E37F780_3555_561C_41C4_F9DF3F158C68",
 "thumbnailUrl": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_t.jpg",
 "hfov": 360,
 "label": "WILLIAN (21)",
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B05038_4294_4E7E_41C9_8320495CA6D7",
  "this.overlay_50F61DA4_4293_B616_41D0_74E01883A883",
  "this.overlay_500E5B6D_4293_D216_41C9_BBACB945FA3B"
 ]
},
{
 "idleSequence": "this.sequence_7BF8B15E_54C0_93B0_41D0_F77BDA882C72",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 125,
  "yaw": 113.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_7BF8B15E_54C0_93B0_41D0_F77BDA882C72",
 "id": "camera_7BF8815E_54C0_93B0_41D1_C4084AE74833",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_3E230489_354D_4A2C_41C7_05BD52902A43",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E230489_354D_4A2C_41C7_05BD52902A43_camera"
  },
  {
   "media": "this.panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_camera"
  },
  {
   "media": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_camera"
  },
  {
   "media": "this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC_camera"
  },
  {
   "media": "this.panorama_3E29050D_354D_4A24_41C0_2989123CF6CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_camera"
  },
  {
   "media": "this.panorama_3E36F484_3552_CA25_41AC_4141D253A967",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E36F484_3552_CA25_41AC_4141D253A967_camera"
  },
  {
   "media": "this.panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_camera"
  },
  {
   "media": "this.panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_camera"
  },
  {
   "media": "this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_camera"
  },
  {
   "media": "this.panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_camera"
  },
  {
   "media": "this.panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_camera"
  },
  {
   "media": "this.panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_camera"
  },
  {
   "media": "this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_camera"
  },
  {
   "media": "this.panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_camera"
  },
  {
   "media": "this.panorama_3E375A16_3552_DE25_41C3_B32E509A350F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E375A16_3552_DE25_41C3_B32E509A350F_camera"
  },
  {
   "media": "this.panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_camera"
  },
  {
   "media": "this.panorama_3E37F780_3555_561C_41C4_F9DF3F158C68",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_camera"
  },
  {
   "media": "this.panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_camera"
  },
  {
   "media": "this.panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_camera"
  },
  {
   "media": "this.panorama_3E367407_3555_4A23_41BA_F7A26891577E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E367407_3555_4A23_41BA_F7A26891577E_camera"
  },
  {
   "media": "this.panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_camera"
  },
  {
   "media": "this.panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_camera"
  },
  {
   "media": "this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_camera"
  },
  {
   "media": "this.panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_camera"
  },
  {
   "media": "this.panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_camera"
  },
  {
   "media": "this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_camera"
  },
  {
   "media": "this.panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_camera"
  },
  {
   "media": "this.panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_camera"
  },
  {
   "media": "this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_camera"
  },
  {
   "media": "this.panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_camera"
  },
  {
   "media": "this.panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_camera"
  },
  {
   "media": "this.panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_camera"
  },
  {
   "media": "this.panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_camera"
  },
  {
   "media": "this.panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_camera"
  },
  {
   "media": "this.panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_camera"
  },
  {
   "media": "this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_camera"
  },
  {
   "media": "this.panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_camera"
  },
  {
   "media": "this.panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_camera"
  },
  {
   "media": "this.panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_camera"
  },
  {
   "media": "this.panorama_3E3D201A_3552_CA2D_419F_A197A59049F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_camera"
  },
  {
   "media": "this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_camera"
  },
  {
   "media": "this.panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_camera"
  },
  {
   "media": "this.panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_camera"
  },
  {
   "media": "this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_camera"
  },
  {
   "media": "this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_camera"
  },
  {
   "media": "this.panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_camera"
  },
  {
   "media": "this.panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_camera"
  },
  {
   "media": "this.panorama_397A5F00_354E_D61D_4185_AE2870727EA0",
   "camera": "this.panorama_397A5F00_354E_D61D_4185_AE2870727EA0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_397A5F00_354E_D61D_4185_AE2870727EA0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 98.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7942FCFD_54C0_7270_41D3_8435295CA353",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 161.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79733D27_54C0_7390_41B5_FBFA405E6770",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -37.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_786BDABB_54C0_76F1_417C_7304D58A0A82",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 135,
 "partial": false,
 "id": "panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4",
 "thumbnailUrl": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_t.jpg",
 "hfov": 360,
 "label": "WILLIAN (23)",
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50CF18A5_429C_7E16_41B0_BD77F6502C37"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD",
 "thumbnailUrl": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_t.jpg",
 "label": "WILLIAN (11)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C3D880_4294_5E0E_41AE_AD40985DADA2",
  "this.overlay_50FE385A_4294_7E32_41C9_9550208A5046",
  "this.overlay_50100497_4294_5632_41BF_93CA3A2EEE22"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 33.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A8CEF1B_54C0_8FB0_41AA_8859BC9E1C74",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 22.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7BD8010B_54C0_9390_41B8_4E33987DB515",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -50.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79E65BDC_54C0_76B0_417D_A2BCE311E37C",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E36F484_3552_CA25_41AC_4141D253A967"
  },
  {
   "yaw": -154.79,
   "backwardYaw": -0.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E29050D_354D_4A24_41C0_2989123CF6CD",
 "thumbnailUrl": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_t.jpg",
 "label": "WILLIAN (6)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B4D682_4295_D212_41A7_757EE44347A3",
  "this.overlay_50F15372_4294_52F2_41B9_A0475DA46598"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -10.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_788E59FC_54C0_7270_41AD_FBCA9F967999",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA",
 "thumbnailUrl": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_t.jpg",
 "label": "WILLIAN (48)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50EBE394_4294_F236_41C7_2DF679EBB9B6"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 69.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_787B9A9C_54C0_76B0_41BF_3B76BA4C7712",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 164.71,
   "backwardYaw": 3.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A",
 "thumbnailUrl": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_t.jpg",
 "label": "WILLIAN (34)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BF1ED4_429F_D236_41C9_E87682767B42"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -179.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7B95D1E3_54C0_9290_41C5_58C5A201F871",
 "automaticZoomSpeed": 10
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_camera",
 "class": "PanoramaCamera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -142.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7BA4B26B_54C0_9190_41BE_1E8C0913E608",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -165.01,
   "backwardYaw": -49.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E375A16_3552_DE25_41C3_B32E509A350F",
 "thumbnailUrl": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_t.jpg",
 "label": "WILLIAN (19)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B45056_4294_CE32_4162_CB3CD6FFD360"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -176.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79B3EC52_54C0_71B3_419F_CAEDF9A9EABA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 169.21,
   "backwardYaw": 0.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5",
 "thumbnailUrl": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_t.jpg",
 "label": "WILLIAN (18)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50CF7530_4294_D60E_41C5_C52FC8994E51"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E36F484_3552_CA25_41AC_4141D253A967_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 80.03,
   "backwardYaw": -66.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E230489_354D_4A2C_41C7_05BD52902A43"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C",
 "thumbnailUrl": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_t.jpg",
 "label": "WILLIAN (3)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50EFB00F_4293_CE12_41B7_52113099513E",
  "this.overlay_50CCC380_4294_520E_41B7_EE5E1644C0E9"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 14.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_784BAA7F_54C0_7670_41BA_4698126904FB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "partial": false,
 "id": "panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B",
 "thumbnailUrl": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_t.jpg",
 "hfov": 360,
 "label": "WILLIAN (20)",
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B51DE6_4294_B612_41B0_43F15D4756E2",
  "this.overlay_50F484D7_4294_7632_41C9_0E770515B861"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -111.83,
   "backwardYaw": 84.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415",
 "thumbnailUrl": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_t.jpg",
 "label": "WILLIAN (32)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BF3E17_429C_B232_41C2_79D8C8F16A5B",
  "this.overlay_50FBFF2D_429C_5216_417F_7E8E2506B018"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 27.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A19E059_54C0_91B0_41CE_13AF37F73B62",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -177.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79544CCE_54C0_7290_41C6_3D263C10ADCF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 121.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7ACF6E66_54C0_7190_4186_F13932247D2E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 68.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79C78B93_54C0_76B1_4180_78A6A659E184",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 130.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79009DB2_54C0_72F0_41CD_CB34F29CD228",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 115.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_789009D7_54C0_72B0_41D1_21EA5962B87E",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -162.15,
   "backwardYaw": 3.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E230489_354D_4A2C_41C7_05BD52902A43"
  },
  {
   "yaw": 129.53,
   "backwardYaw": 161.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC"
  },
  {
   "yaw": -0.76,
   "backwardYaw": -154.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E29050D_354D_4A24_41C0_2989123CF6CD"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA",
 "thumbnailUrl": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_t.jpg",
 "label": "WILLIAN (4)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_509B1244_4294_D216_4194_37383D8C2F24",
  "this.overlay_50E4B65F_4294_F232_41CB_09AAB0075E5F",
  "this.overlay_5029DCED_4294_B616_41BE_F0C42606B58E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -12.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A4A9FCF_54C0_8E90_41C9_ED93DBAB49FF",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 81.67,
   "backwardYaw": -94.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C",
 "thumbnailUrl": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_t.jpg",
 "label": "WILLIAN (40)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BFB0CA_429C_CE12_41C6_21F58202C6A5",
  "this.overlay_50FB507E_429C_4EF2_41B3_4991E18BACB9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 3.53,
   "backwardYaw": 164.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A"
  },
  {
   "yaw": -43.51,
   "backwardYaw": 167.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3AE047_3557_4A24_41B3_628C417B31DF",
 "thumbnailUrl": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_t.jpg",
 "label": "WILLIAN (33)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B3F8AC_429C_5E16_41AE_10F7B3616D12",
  "this.overlay_50FF998E_429F_BE12_41CB_EC2D4DB5E0A7"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E367407_3555_4A23_41BA_F7A26891577E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -179.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79853C24_54C0_7190_41D0_A5D77F5F62C7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -179.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A7B0FFD_54C0_8E70_41C0_3EFBC67C4EF4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 167.17,
   "backwardYaw": 37.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87",
 "thumbnailUrl": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_t.jpg",
 "label": "WILLIAN (43)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BAFCF3_429D_F7F1_41B4_250F8E805DBB"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 25.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79D7AB72_54C0_7670_41AE_9C713E5DF116",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 164.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_78C10967_54C0_7390_41AC_19976E49E3A6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -98.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7AABEF78_54C0_8E70_41A9_26A9FFD83570",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -33.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7911BD84_54C0_7290_41D5_08FAD5B55959",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 84.53,
   "backwardYaw": -111.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415"
  },
  {
   "yaw": 0.67,
   "backwardYaw": 157.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95",
 "thumbnailUrl": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_t.jpg",
 "label": "WILLIAN (36)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B9B801_429C_5E0E_41C4_602A3CD69823",
  "this.overlay_50E1B473_429C_76F2_41CB_A73DB4275A5B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -157.65,
   "backwardYaw": 0.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F",
 "thumbnailUrl": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_t.jpg",
 "label": "WILLIAN (31)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BF9C6B_429C_F612_41B3_991F9B620F74"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -72.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7AFDCE92_54C0_8EB0_41CC_3020B1B66028",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 167.17,
   "backwardYaw": -43.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA",
 "thumbnailUrl": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_t.jpg",
 "label": "WILLIAN (35)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50A44FC8_429F_D21E_41A1_4139F754F8F9"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -18.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7827AB56_54C0_77B3_41C7_88545DCD8707",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 167.58,
   "backwardYaw": 32.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA",
 "thumbnailUrl": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_t.jpg",
 "label": "WILLIAN (29)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BCB3F4_429C_51F6_41B3_58CF5610534E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 155.2,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A9C9EED_54C0_8E90_41CB_CB457EB738F1",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 146.71,
   "backwardYaw": -45.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654"
  },
  {
   "yaw": 2.31,
   "backwardYaw": 165.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93"
  },
  {
   "yaw": -51.69,
   "backwardYaw": -165.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_397A5F00_354E_D61D_4185_AE2870727EA0"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258",
 "thumbnailUrl": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_t.jpg",
 "label": "WILLIAN (50)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50DF6729_4294_721E_41C1_A7EA4DF8E515",
  "this.overlay_5007D24A_4294_5212_41D0_9A7CE79B5E1B",
  "this.overlay_70BCEDA8_54C3_F29F_41B1_1C509F373EF8",
  "this.overlay_706BC0EA_54C3_B290_41C6_89630DD6DF73"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621",
 "thumbnailUrl": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_t.jpg",
 "label": "WILLIAN (39)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BE1BD3_429C_D232_41C7_CC24C09C2A57"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 179.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_780A9AF7_54C0_7671_41C0_796B3AEE4556",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -112.65,
   "backwardYaw": -15.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635",
 "thumbnailUrl": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_t.jpg",
 "label": "WILLIAN (47)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B6375C_429C_B236_4152_EB9B83C6831E",
  "this.overlay_50F2C458_429C_563E_41B8_D887E1771CB7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B"
  },
  {
   "yaw": -0.56,
   "backwardYaw": 142.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E367407_3555_4A23_41BA_F7A26891577E",
 "thumbnailUrl": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_t.jpg",
 "label": "WILLIAN (24)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BAD06A_429C_4E12_41CA_CA81403CBC1C",
  "this.overlay_50F99278_429C_D2FE_41CC_A968B9755DF4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 142.21,
   "backwardYaw": -0.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E367407_3555_4A23_41BA_F7A26891577E"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B",
 "thumbnailUrl": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_t.jpg",
 "label": "WILLIAN (25)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50D91064_429C_CE16_41BE_34B8B4E92AAA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -152.74,
   "backwardYaw": -146.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D201A_3552_CA2D_419F_A197A59049F2"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96",
 "thumbnailUrl": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_t.jpg",
 "label": "WILLIAN (44)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B29380_429D_B20E_41C5_1D8B68F7FC0D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 179.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7ABD0F49_54C0_8F90_41D3_6C1B05E1E287",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -160.51,
   "backwardYaw": -18.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5",
 "thumbnailUrl": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_t.jpg",
 "label": "WILLIAN (28)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C289DC_429C_5E36_41AE_5121477733F5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -164.6,
   "backwardYaw": 3.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D201A_3552_CA2D_419F_A197A59049F2"
  },
  {
   "yaw": -15.69,
   "backwardYaw": -112.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983",
 "thumbnailUrl": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_t.jpg",
 "label": "WILLIAN (46)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50DBC504_429C_D616_41C0_E7AA099E60F8",
  "this.overlay_50033685_429C_F216_41CB_A71D67C34136"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E36F484_3552_CA25_41AC_4141D253A967",
 "thumbnailUrl": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_t.jpg",
 "label": "WILLIAN (9)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50AE0047_4294_4E12_41CA_1E58ED9EF677",
  "this.overlay_50E321B2_4294_4E72_41CB_BD5087BA6784",
  "this.overlay_50270032_4294_CE72_41B1_C7C9B6D866C3"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 128.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_78FFB991_54C0_72B0_41BC_84926FA25F15",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -15.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7B85D20F_54C0_9190_419F_C97C64F26128",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -110.19,
   "backwardYaw": 86.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_397A5F00_354E_D61D_4185_AE2870727EA0"
  },
  {
   "yaw": -45.15,
   "backwardYaw": 146.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3DA726_3553_F664_41C1_3A4B8A385654",
 "thumbnailUrl": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_t.jpg",
 "label": "WILLIAN (49)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C3BFBE_4294_D272_41BA_35E5A8B7CE41",
  "this.overlay_50079FCC_4294_B216_4174_38C73E709343"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 67.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79A3BCA0_54C0_7290_4192_794F54E1106B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_camera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_43C84C70_4DCC_82DC_41A4_B08D245EB19E.ogg",
  "mp3Url": "media/audio_43C84C70_4DCC_82DC_41A4_B08D245EB19E.mp3"
 },
 "class": "MediaAudio",
 "id": "audio_43C84C70_4DCC_82DC_41A4_B08D245EB19E",
 "data": {
  "label": "WhatsApp Audio 2021-11-23 at 06.44.46 (online-audio-converter.com)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -12.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A3900B2_54C0_92F0_41C7_B4826F6E082C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -12.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7BB4923E_54C0_91F0_41D0_3A05083544AF",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 165.12,
   "backwardYaw": 2.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93",
 "thumbnailUrl": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_t.jpg",
 "label": "WILLIAN (52)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50D93249_4297_D21E_41BC_96441A7678EB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 107.03,
   "backwardYaw": -64.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95"
  },
  {
   "yaw": 0.67,
   "backwardYaw": 169.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5"
  },
  {
   "yaw": -49.24,
   "backwardYaw": -165.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E375A16_3552_DE25_41C3_B32E509A350F"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F",
 "thumbnailUrl": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_t.jpg",
 "label": "WILLIAN (17)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C71E6A_4295_F212_41C7_3FD2931CE363",
  "this.overlay_5006F31A_4295_B232_41BE_5C7C69EB05B9",
  "this.overlay_5027262E_4294_5213_41C1_F5B44501DA1C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 134.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_78ACAA41_54C0_7190_41C6_88DD638062BA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -147.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_781A8AD9_54C0_76B0_4193_17EB5DA8BB00",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 149.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7994EBFF_54C0_7670_41D1_CD7BA6BBB471",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -93.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7961AD56_54C0_73B0_41B4_4D22B28DF75A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 135,
 "partial": false,
 "id": "panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA",
 "thumbnailUrl": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_t.jpg",
 "hfov": 360,
 "label": "WILLIAN (22)",
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C1D0DA_4293_CE32_41C7_4F4938122F68"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 134.08,
  "class": "PanoramaCameraPosition",
  "pitch": -15.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7BE6F1B6_54C0_92F0_41AC_4167DFF635B9",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E36F484_3552_CA25_41AC_4141D253A967"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34",
 "thumbnailUrl": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_t.jpg",
 "label": "WILLIAN (14)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BE1D63_4294_B612_41B7_510FA4FE92F9",
  "this.overlay_50EAD91F_4294_DE32_41D0_52AE7B71E2D3",
  "this.overlay_500076BE_4294_F272_4192_58170D842FD4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -66.01,
   "backwardYaw": 80.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C"
  },
  {
   "yaw": 3.94,
   "backwardYaw": -162.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E230489_354D_4A2C_41C7_05BD52902A43",
 "thumbnailUrl": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_t.jpg",
 "label": "WILLIAN (2)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50CCA322_4293_D212_41C0_D3C2F5B1DBC5",
  "this.overlay_50BE9271_4294_520E_41C1_7DE54B4BD141"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 86.17,
   "backwardYaw": -110.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_397A5F00_354E_D61D_4185_AE2870727EA0",
 "thumbnailUrl": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_t.jpg",
 "label": "WILLIAN (1)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C0FEBC_4297_D276_41CF_F8266B457C55",
  "this.overlay_500BBC6E_4297_B612_41A0_E6E9A522FB26"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -18.15,
   "backwardYaw": -160.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5"
  },
  {
   "yaw": 32.58,
   "backwardYaw": 167.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B",
 "thumbnailUrl": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_t.jpg",
 "label": "WILLIAN (27)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BEB2BE_429D_B272_41B7_C57260C7638B",
  "this.overlay_50F880C2_429D_CE12_41C2_7DAD19B86606",
  "this.overlay_5000FE33_429D_D272_41CD_243C221C40F5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430",
 "thumbnailUrl": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_t.jpg",
 "label": "WILLIAN (13)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BDF24B_4294_5212_41CC_84910D8CA575",
  "this.overlay_50F7DF9E_4294_5232_41C7_253D3CB11DBE",
  "this.overlay_5014415C_4294_4E36_41B1_648A9844A0C0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -161.74,
   "backwardYaw": -30.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D",
 "thumbnailUrl": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_t.jpg",
 "label": "WILLIAN (42)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C9D43A_429D_D672_41C5_5F6CF095FC3F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -81.56,
   "backwardYaw": 104.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F"
  },
  {
   "yaw": 0.67,
   "backwardYaw": -157.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2",
 "thumbnailUrl": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_t.jpg",
 "label": "WILLIAN (30)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BCEABF_429C_B272_41CF_5EB35E614F5F",
  "this.overlay_50E7873E_429C_D272_41C8_2A44D0BEC979"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -22.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79F65BB9_54C0_76F0_41B1_FD3B1DF32485",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -94.65,
   "backwardYaw": 81.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C"
  },
  {
   "yaw": -30.42,
   "backwardYaw": -161.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D"
  },
  {
   "yaw": 37.49,
   "backwardYaw": 167.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676",
 "thumbnailUrl": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_t.jpg",
 "label": "WILLIAN (41)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B469C6_429C_7E12_41AC_65ED3E19F1DB",
  "this.overlay_50FCE572_429C_56F3_418A_0AE7191A0080",
  "this.overlay_500050DC_429C_4E36_4190_4B8581A1A776"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7838FB14_54C0_77B0_41C8_F4202339AE03",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 157.76,
   "backwardYaw": 0.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335",
 "thumbnailUrl": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_t.jpg",
 "label": "WILLIAN (37)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BD0A34_429C_5276_41C2_1298A21749B0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F",
 "thumbnailUrl": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_t.jpg",
 "label": "WILLIAN (12)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B69E04_4297_B216_4198_F57D051A8436",
  "this.overlay_50EDBB2A_4297_D212_41B5_89D16E1B278E",
  "this.overlay_5002EBAD_4297_F216_41A9_22DAACB3BA24"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 15.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A69A02B_54C0_9191_41D2_DD2126B94E83",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E375A16_3552_DE25_41C3_B32E509A350F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 17.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7ADF6E3C_54C0_71F0_41D5_18553E9484BE",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_78293B31_54C0_77F0_41D3_AEBB67A582B6",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 125,
  "yaw": -176.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_78293B31_54C0_77F0_41D3_AEBB67A582B6",
 "id": "camera_78292B31_54C0_77F0_41C3_BD2B890B693A",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 104.17,
   "backwardYaw": -81.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F",
 "thumbnailUrl": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_t.jpg",
 "label": "WILLIAN (26)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50BBDB78_429C_52FE_41BF_EBB126A9711D",
  "this.overlay_50F99C96_429C_7632_41B6_45C2EB0920E6"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 136.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_79306DE1_54C0_7290_41AF_62B074BF0E31",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7920FE0F_54C0_7190_41D1_240733C8BF2C",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "hfov": 125,
  "yaw": -99.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_7920FE0F_54C0_7190_41D1_240733C8BF2C",
 "id": "camera_7920CE0E_54C0_7191_41D1_4AC703BD433F",
 "class": "PanoramaCamera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 19.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A0A7085_54C0_9290_41A8_A5C77330A630",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -75.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A2930DD_54C0_92B0_41A6_E4DE390A2C94",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E367407_3555_4A23_41BA_F7A26891577E"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9",
 "thumbnailUrl": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_t.jpg",
 "label": "WILLIAN (15)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B17126_4294_CE13_41CA_C8B231B9097D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -176.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7BC83132_54C0_93F0_41CD_3B3AE20CD89B",
 "automaticZoomSpeed": 10
},
{
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E230489_354D_4A2C_41C7_05BD52902A43_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetHfov": 125,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -95.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7AEDEEBF_54C0_8EF0_41CB_66656DE39F51",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 161.44,
   "backwardYaw": 129.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E36F484_3552_CA25_41AC_4141D253A967"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E292603_354D_561C_41BD_B6C0E72746FC",
 "thumbnailUrl": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_t.jpg",
 "label": "WILLIAN (5)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50AF0C70_4294_760E_41CD_86EC7B736AD1",
  "this.overlay_50EDAEEC_4294_5216_4181_67FB498A9066",
  "this.overlay_50276D12_4295_D632_41CF_1425AA9B59C8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E292603_354D_561C_41BD_B6C0E72746FC_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": 3.12,
   "backwardYaw": -164.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983"
  },
  {
   "yaw": -146.19,
   "backwardYaw": -152.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96"
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "id": "panorama_3E3D201A_3552_CA2D_419F_A197A59049F2",
 "thumbnailUrl": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_t.jpg",
 "label": "WILLIAN (45)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50B3C9FD_429C_71F6_41CB_CD3FC57D18C8",
  "this.overlay_50FF4912_429C_5E32_41AB_F29DCDD5F1A1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 18.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7A5C1FA0_54C0_8E90_41BC_062EECEF0C2E",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -165.01,
   "backwardYaw": -51.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258"
  }
 ],
 "hfovMax": 135,
 "hfov": 360,
 "id": "panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D",
 "thumbnailUrl": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_t.jpg",
 "label": "WILLIAN (53)",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7,
      "height": 3584,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_50C14980_4297_FE0E_41CA_284F69711466"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 85.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_78EFC9B3_54C0_72F0_41D1_D955A4C80CA6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -14.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_785CBA60_54C0_7190_41D2_86119A49E6D5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 101.02,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_7BF6F18B_54C0_9291_41CC_3743FB2B86F1",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 7,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_498E74F4_545B_B067_41CC_63589B8419E3"
 ],
 "id": "Container_54B2586A_750B_85DC_41D9_68368732F926",
 "left": "0%",
 "width": 330,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "shadow": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "width": 115.05,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "shadow": false
},
{
 "paddingLeft": 0,
 "shadow": false,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "shadow": false,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC, this.camera_7ACF6E66_54C0_7190_4186_F13932247D2E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.63,
   "image": "this.AnimatedImageResource_4C2775BA_42F1_5D86_41C1_68A053C346E0",
   "pitch": -25.57,
   "yaw": 163.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50ABD9C4_4294_5E16_41A0_1CA1FB136817",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.63,
   "yaw": 163.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F, this.camera_7AFDCE92_54C0_8EB0_41CC_3020B1B66028); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.1,
   "image": "this.AnimatedImageResource_4C2795BF_42F1_5DFE_41B3_11EBF28FD8C2",
   "pitch": -20.25,
   "yaw": -64.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50E962A9_4294_521E_41C6_EEF1BEF26D89",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.1,
   "yaw": -64.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.9,
   "image": "this.AnimatedImageResource_4C20B5C6_42F1_5D8E_41AA_B4F53163DDF3",
   "pitch": -21.07,
   "yaw": -52.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B05038_4294_4E7E_41C9_8320495CA6D7",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.9,
   "yaw": -52.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.58,
   "image": "this.AnimatedImageResource_4C2175C7_42F1_5D8E_41B1_6A714ACC6A8D",
   "pitch": -22.3,
   "yaw": 1.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F61DA4_4293_B616_41D0_74E01883A883",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.58,
   "yaw": 1.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.12,
   "image": "this.AnimatedImageResource_4C21A5C7_42F1_5D8E_41CC_F2071062B64B",
   "pitch": -23.93,
   "yaw": 121.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_500E5B6D_4293_D216_41C9_BBACB945FA3B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.12,
   "yaw": 121.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_7BF8B15E_54C0_93B0_41D0_F77BDA882C72",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C2015C8_42F1_5D82_41C5_E5FBF7AAC9B0",
   "pitch": -25.16,
   "yaw": -166.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50CF18A5_429C_7E16_41B0_BD77F6502C37",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": -166.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.9,
   "image": "this.AnimatedImageResource_4C28D5AD_42F1_5D9D_41B5_0C5660888CC5",
   "pitch": -21.07,
   "yaw": 146.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C3D880_4294_5E0E_41AE_AD40985DADA2",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.9,
   "yaw": 146.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430, this.camera_7838FB14_54C0_77B0_41C8_F4202339AE03); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.1,
   "image": "this.AnimatedImageResource_4C2B75AE_42F1_5D9F_41B9_2462F51D89D0",
   "pitch": -20.25,
   "yaw": -116.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50FE385A_4294_7E32_41C9_9550208A5046",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.1,
   "yaw": -116.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.29,
   "image": "this.AnimatedImageResource_4C2B95AE_42F1_5D9F_41CB_7898C7D954D0",
   "pitch": -29.66,
   "yaw": 1.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50100497_4294_5632_41BF_93CA3A2EEE22",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.29,
   "yaw": 1.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.71,
   "image": "this.AnimatedImageResource_4C2895AA_42F1_5D87_41BF_8D5CD82A338A",
   "pitch": -28.43,
   "yaw": 9.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B4D682_4295_D212_41A7_757EE44347A3",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.71,
   "yaw": 9.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA, this.camera_780A9AF7_54C0_7671_41C0_796B3AEE4556); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.77,
   "image": "this.AnimatedImageResource_4C2B35AB_42F1_5D85_41D0_B4375304F137",
   "pitch": -36.2,
   "yaw": -154.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F15372_4294_52F2_41B9_A0475DA46598",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 32.77,
   "yaw": -154.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.58,
   "image": "this.AnimatedImageResource_4C3B95EA_42F1_5D86_41CE_3B4C71C88C2B",
   "pitch": -22.3,
   "yaw": -166.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50EBE394_4294_F236_41C7_2DF679EBB9B6",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.58,
   "yaw": -166.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF, this.camera_7BC83132_54C0_93F0_41CD_3B3AE20CD89B); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.85,
   "image": "this.AnimatedImageResource_4C3F75DA_42F1_5D86_41C3_1C8D2C31A0F1",
   "pitch": -28.02,
   "yaw": 164.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BF1ED4_429F_D236_41C9_E87682767B42",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.85,
   "yaw": 164.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F, this.camera_79009DB2_54C0_72F0_41CD_CB34F29CD228); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38,
   "image": "this.AnimatedImageResource_4C2145C5_42F1_5D82_41CF_1A6D4CE34CE6",
   "pitch": -20.66,
   "yaw": -165.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B45056_4294_CE32_4162_CB3CD6FFD360",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38,
   "yaw": -165.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F, this.camera_7A7B0FFD_54C0_8E70_41C0_3EFBC67C4EF4); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.99,
   "image": "this.AnimatedImageResource_4C2115C4_42F1_5D82_418F_D805CF042608",
   "pitch": -27.61,
   "yaw": 169.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50CF7530_4294_D60E_41C5_C52FC8994E51",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.99,
   "yaw": 169.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E230489_354D_4A2C_41C7_05BD52902A43, this.camera_7BF8815E_54C0_93B0_41D1_C4084AE74833); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 33.88,
   "image": "this.AnimatedImageResource_5322CBC1_4D71_3B72_41C5_AC078255AE5A",
   "pitch": -18.41,
   "yaw": 80.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50EFB00F_4293_CE12_41B7_52113099513E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 33.88,
   "yaw": 80.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430, this.camera_7BF6F18B_54C0_9291_41CC_3743FB2B86F1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.74,
   "image": "this.AnimatedImageResource_53210BC7_4D71_3B7E_41CB_02BE281F0F41",
   "pitch": -26.18,
   "yaw": 0.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50CCC380_4294_520E_41B7_EE5E1644C0E9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.74,
   "yaw": 0.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.9,
   "image": "this.AnimatedImageResource_4C21D5C5_42F1_5D82_41D0_5C8962FC5BBB",
   "pitch": -21.07,
   "yaw": -79.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B51DE6_4294_B612_41B0_43F15D4756E2",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.9,
   "yaw": -79.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.68,
   "image": "this.AnimatedImageResource_4C2075C6_42F1_5D8E_41C7_0B6A289E1243",
   "pitch": -21.89,
   "yaw": -3.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F484D7_4294_7632_41C9_0E770515B861",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.68,
   "yaw": -3.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95, this.camera_7AEDEEBF_54C0_8EF0_41CB_66656DE39F51); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.3,
   "image": "this.AnimatedImageResource_4C3C15D3_42F1_5D86_41C5_93FE838BABCB",
   "pitch": -19.43,
   "yaw": -111.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BF3E17_429C_B232_41C2_79D8C8F16A5B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.3,
   "yaw": -111.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.58,
   "image": "this.AnimatedImageResource_4C3C55D3_42F1_5D89_4174_7174BC505BEB",
   "pitch": -18.2,
   "yaw": -51.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50FBFF2D_429C_5216_417F_7E8E2506B018",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.58,
   "yaw": -51.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E230489_354D_4A2C_41C7_05BD52902A43, this.camera_78292B31_54C0_77F0_41C3_BD2B890B693A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.61,
   "image": "this.AnimatedImageResource_5D92E687_4D73_EDFE_41C0_52B82FDED22A",
   "pitch": -21.68,
   "yaw": -162.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_509B1244_4294_D216_4194_37383D8C2F24",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.61,
   "yaw": -162.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E29050D_354D_4A24_41C0_2989123CF6CD, this.camera_79D7AB72_54C0_7670_41AE_9C713E5DF116); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.41,
   "image": "this.AnimatedImageResource_5D92C688_4D73_EDF2_4165_FD4924F73D5C",
   "pitch": -25.36,
   "yaw": -0.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50E4B65F_4294_F232_41CB_09AAB0075E5F",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.41,
   "yaw": -0.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E292603_354D_561C_41BD_B6C0E72746FC, this.camera_7827AB56_54C0_77B3_41C7_88545DCD8707); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.69,
   "image": "this.AnimatedImageResource_5D92A68A_4D73_EDF6_41C8_A8FD986A9549",
   "pitch": -27.41,
   "yaw": 129.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5029DCED_4294_B616_41BE_F0C42606B58E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.69,
   "yaw": 129.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676, this.camera_78EFC9B3_54C0_72F0_41D1_D955A4C80CA6); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_4C3925DC_42F1_5D82_41C1_432F315B6AF8",
   "pitch": -21.48,
   "yaw": 81.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BFB0CA_429C_CE12_41C6_21F58202C6A5",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": 81.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_4C3955DD_42F1_5D82_41D0_336740ACE92E",
   "pitch": -21.48,
   "yaw": 162.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50FB507E_429C_4EF2_41B3_4991E18BACB9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": 162.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A, this.camera_7B85D20F_54C0_9190_419F_C97C64F26128); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.68,
   "image": "this.AnimatedImageResource_4C3CF5D9_42F1_5D82_41BF_C9179950EE16",
   "pitch": -21.89,
   "yaw": 3.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B3F8AC_429C_5E16_41AE_10F7B3616D12",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.68,
   "yaw": 3.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA, this.camera_7BB4923E_54C0_91F0_41D0_3A05083544AF); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.1,
   "image": "this.AnimatedImageResource_4C3F25D9_42F1_5D82_41CD_10541276BCA3",
   "pitch": -20.25,
   "yaw": -43.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50FF998E_429F_BE12_41CB_EC2D4DB5E0A7",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.1,
   "yaw": -43.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676, this.camera_7BA4B26B_54C0_9190_41BE_1E8C0913E608); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_4C3955E4_42F1_5D82_41C1_25889892231D",
   "pitch": -21.48,
   "yaw": 167.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BAFCF3_429D_F7F1_41B4_250F8E805DBB",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": 167.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415, this.camera_79C78B93_54C0_76B1_4180_78A6A659E184); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C3FD5DB_42F1_5D86_41CF_D77F6BD46E78",
   "pitch": -25.16,
   "yaw": 84.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B9B801_429C_5E0E_41C4_602A3CD69823",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": 84.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335, this.camera_79F65BB9_54C0_76F0_41B1_FD3B1DF32485); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.71,
   "image": "this.AnimatedImageResource_4C3E25DB_42F1_5D86_41CE_C039D26ED215",
   "pitch": -28.43,
   "yaw": 0.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50E1B473_429C_76F2_41CB_A73DB4275A5B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.71,
   "yaw": 0.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2, this.camera_79853C24_54C0_7190_41D0_A5D77F5F62C7); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.88,
   "image": "this.AnimatedImageResource_4C3DE5D3_42F1_5D86_41B3_5E5E32478297",
   "pitch": -24.75,
   "yaw": -157.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BF9C6B_429C_F612_41B3_991F9B620F74",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.88,
   "yaw": -157.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3AE047_3557_4A24_41B3_628C417B31DF, this.camera_79306DE1_54C0_7290_41AF_62B074BF0E31); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.51,
   "image": "this.AnimatedImageResource_4C3FA5DA_42F1_5D86_41CE_BEF300EC2838",
   "pitch": -25.98,
   "yaw": 167.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50A44FC8_429F_D21E_41A1_4139F754F8F9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.51,
   "yaw": 167.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B, this.camera_781A8AD9_54C0_76B0_4193_17EB5DA8BB00); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.57,
   "image": "this.AnimatedImageResource_4C22C5D1_42F1_5D82_419C_DFFEBAAFBA44",
   "pitch": -28.84,
   "yaw": 167.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BCB3F4_429C_51F6_41B3_58CF5610534E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.57,
   "yaw": 167.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D, this.camera_784BAA7F_54C0_7670_41BA_4698126904FB); this.mainPlayList.set('selectedIndex', 46)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.2,
   "image": "this.AnimatedImageResource_4C3A95EC_42F1_5D83_41BF_9FDD3102BD8C",
   "pitch": -19.84,
   "yaw": -51.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50DF6729_4294_721E_41C1_A7EA4DF8E515",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.2,
   "yaw": -51.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93, this.camera_785CBA60_54C0_7190_41D2_86119A49E6D5); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.9,
   "image": "this.AnimatedImageResource_4C3AC5ED_42F1_5D9D_41A2_07159140651C",
   "pitch": -21.07,
   "yaw": 2.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5007D24A_4294_5212_41D0_9A7CE79B5E1B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.9,
   "yaw": 2.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654, this.camera_78ACAA41_54C0_7190_41C6_88DD638062BA); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.71,
   "image": "this.AnimatedImageResource_7F1EF8D5_54C0_72B1_41B0_EB37C391227D",
   "pitch": -28.43,
   "yaw": 146.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70BCEDA8_54C3_F29F_41B1_1C509F373EF8",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.71,
   "yaw": 146.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.49,
   "image": "this.AnimatedImageResource_7F1F78D6_54C0_72B3_41C8_73E00A11F929",
   "pitch": -18.61,
   "yaw": -168.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_706BC0EA_54C3_B290_41C6_89630DD6DF73",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.49,
   "yaw": -168.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0_HS_3_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.31,
   "image": "this.AnimatedImageResource_4C3EE5DC_42F1_5D82_4197_FA7C14C45D12",
   "pitch": -14.52,
   "yaw": 76.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BE1BD3_429C_D232_41C7_CC24C09C2A57",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 39.31,
   "yaw": 76.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983, this.camera_78C10967_54C0_7390_41AC_19976E49E3A6); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_4C3B05E9_42F1_5D82_41D0_493BE5545377",
   "pitch": -21.48,
   "yaw": -112.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B6375C_429C_B236_4152_EB9B83C6831E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": -112.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37,
   "image": "this.AnimatedImageResource_4C3B45E9_42F1_5D82_41C5_F2A6F5F7720D",
   "pitch": -24.34,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F2C458_429C_563E_41B8_D887E1771CB7",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37,
   "yaw": 0.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.38,
   "image": "this.AnimatedImageResource_4C2075CD_42F1_5D82_41C4_1F82A7D90B1A",
   "pitch": -26.39,
   "yaw": 86.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BAD06A_429C_4E12_41CA_CA81403CBC1C",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.38,
   "yaw": 86.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B, this.camera_786BDABB_54C0_76F1_417C_7304D58A0A82); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.43,
   "image": "this.AnimatedImageResource_4C20A5CE_42F1_5D9E_41C2_FDE85C623210",
   "pitch": -29.25,
   "yaw": -0.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F99278_429C_D2FE_41CC_A968B9755DF4",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.43,
   "yaw": -0.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E367407_3555_4A23_41BA_F7A26891577E, this.camera_7ABD0F49_54C0_8F90_41D3_6C1B05E1E287); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C20C5CE_42F1_5D9E_4198_81FBAA4CB48E",
   "pitch": -25.16,
   "yaw": 142.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50D91064_429C_CE16_41BE_34B8B4E92AAA",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": 142.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3D201A_3552_CA2D_419F_A197A59049F2, this.camera_7A8CEF1B_54C0_8FB0_41AA_8859BC9E1C74); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.52,
   "image": "this.AnimatedImageResource_4C3995E5_42F1_5D82_41C1_1202350DC063",
   "pitch": -13.3,
   "yaw": -152.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B29380_429D_B20E_41C5_1D8B68F7FC0D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 39.52,
   "yaw": -152.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B, this.camera_79733D27_54C0_7390_41B5_FBFA405E6770); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.51,
   "image": "this.AnimatedImageResource_4C2285D1_42F1_5D82_4182_BCCFE047E444",
   "pitch": -25.98,
   "yaw": -160.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C289DC_429C_5E36_41AE_5121477733F5",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.51,
   "yaw": -160.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3D201A_3552_CA2D_419F_A197A59049F2, this.camera_79B3EC52_54C0_71B3_419F_CAEDF9A9EABA); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.39,
   "image": "this.AnimatedImageResource_53329C28_4D71_3D33_41A0_B652C595635F",
   "pitch": -23.93,
   "yaw": -164.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50DBC504_429C_D616_41C0_E7AA099E60F8",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.39,
   "yaw": -164.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635, this.camera_79A3BCA0_54C0_7290_4192_794F54E1106B); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.71,
   "image": "this.AnimatedImageResource_5332DC29_4D71_3D35_4192_C5A4BD8D01C0",
   "pitch": -27,
   "yaw": -15.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50033685_429C_F216_41CB_A71D67C34136",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.71,
   "yaw": -15.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA, this.camera_7A9C9EED_54C0_8E90_41CB_CB457EB738F1); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.49,
   "image": "this.AnimatedImageResource_4C2B65AB_42F1_5D85_41C1_4D7FE6693C69",
   "pitch": -18.61,
   "yaw": 165.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50AE0047_4294_4E12_41CA_1E58ED9EF677",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.49,
   "yaw": 165.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.58,
   "image": "this.AnimatedImageResource_4C2825AC_42F1_5D83_41D0_9329D53D682A",
   "pitch": -22.3,
   "yaw": 66.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50E321B2_4294_4E72_41CB_BD5087BA6784",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.58,
   "yaw": 66.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.35,
   "image": "this.AnimatedImageResource_4C28B5AD_42F1_5D9D_41A8_134DE891DC7A",
   "pitch": -23.11,
   "yaw": -55.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50270032_4294_CE72_41B1_C7C9B6D866C3",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.35,
   "yaw": -55.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_397A5F00_354E_D61D_4185_AE2870727EA0, this.camera_7961AD56_54C0_73B0_41B4_4D22B28DF75A); this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.93,
   "image": "this.AnimatedImageResource_4C3BC5EB_42F1_5D85_41C0_4A1460F7350E",
   "pitch": -16.57,
   "yaw": -110.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C3BFBE_4294_D272_41BA_35E5A8B7CE41",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.93,
   "yaw": -110.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258, this.camera_7911BD84_54C0_7290_41D5_08FAD5B55959); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.76,
   "image": "this.AnimatedImageResource_4C3A65EB_42F1_5D85_41A7_754238780260",
   "pitch": -17.39,
   "yaw": -45.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50079FCC_4294_B216_4174_38C73E709343",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.76,
   "yaw": -45.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258, this.camera_79544CCE_54C0_7290_41C6_3D263C10ADCF); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C3505EE_42F1_5D9F_41A2_05F58C459FB2",
   "pitch": -25.16,
   "yaw": 165.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50D93249_4297_D21E_41BC_96441A7678EB",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": 165.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E375A16_3552_DE25_41C3_B32E509A350F, this.camera_78BE6A20_54C0_7190_41CC_A7608F3A642C); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.68,
   "image": "this.AnimatedImageResource_4C27D5C1_42F1_5D82_41C6_E956D9A02D77",
   "pitch": -21.89,
   "yaw": -49.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C71E6A_4295_F212_41C7_3FD2931CE363",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.68,
   "yaw": -49.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5, this.camera_788E59FC_54C0_7270_41AD_FBCA9F967999); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.68,
   "image": "this.AnimatedImageResource_4C2665C2_42F1_5D86_41CE_6A82FC9416F8",
   "pitch": -21.89,
   "yaw": 0.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5006F31A_4295_B232_41BE_5C7C69EB05B9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.68,
   "yaw": 0.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95, this.camera_789009D7_54C0_72B0_41D1_21EA5962B87E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.3,
   "image": "this.AnimatedImageResource_4C2695C3_42F1_5D86_41CD_350A97954649",
   "pitch": -19.43,
   "yaw": 107.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5027262E_4294_5213_41C1_F5B44501DA1C",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.3,
   "yaw": 107.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "paddingLeft": 0,
 "shadow": false,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "shadow": false,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "shadow": false,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35,
   "image": "this.AnimatedImageResource_4C21F5C8_42F1_5D82_41B6_47761FD0856E",
   "pitch": -30.48,
   "yaw": 162.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C1D0DA_4293_CE32_41C7_4F4938122F68",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35,
   "yaw": 162.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_5D9006A3_4D73_ED37_41C5_47562ACAED30",
   "pitch": -21.48,
   "yaw": -122.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BE1D63_4294_B612_41B7_510FA4FE92F9",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": -122.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.63,
   "image": "this.AnimatedImageResource_5D90D6A4_4D73_ED31_41CC_AC7BA71E72A3",
   "pitch": -25.57,
   "yaw": 107.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50EAD91F_4294_DE32_41D0_52AE7B71E2D3",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.63,
   "yaw": 107.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C2495B8_42F1_5D83_41A9_3B83B0DB9F83",
   "pitch": -25.16,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_500076BE_4294_F272_4192_58170D842FD4",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": 0.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C, this.camera_7920CE0E_54C0_7191_41D1_4AC703BD433F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.63,
   "image": "this.AnimatedImageResource_53235BB4_4D71_3B12_41C0_1A468D4775D7",
   "pitch": -22.91,
   "yaw": -66.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50CCA322_4293_D212_41C0_D3C2F5B1DBC5",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.63,
   "yaw": -66.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA, this.camera_7ADF6E3C_54C0_71F0_41D5_18553E9484BE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.99,
   "image": "this.AnimatedImageResource_53226BBF_4D71_3B0E_41A6_5B43C24B682F",
   "pitch": -24.75,
   "yaw": 3.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BE9271_4294_520E_41C1_7DE54B4BD141",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.99,
   "yaw": 3.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C35F5F4_42F1_5D83_41C8_BC0B028340DE",
   "pitch": -25.16,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C0FEBC_4297_D276_41CF_F8266B457C55",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": 0.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3DA726_3553_F664_41C1_3A4B8A385654, this.camera_787B9A9C_54C0_76B0_41BF_3B76BA4C7712); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35,
   "image": "this.AnimatedImageResource_4C35C5F5_42F1_5D8D_41B4_7A5C06CC6140",
   "pitch": -30.48,
   "yaw": 86.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_500BBC6E_4297_B612_41A0_E6E9A522FB26",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35,
   "yaw": 86.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5, this.camera_7A0A7085_54C0_9290_41A8_A5C77330A630); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.39,
   "image": "this.AnimatedImageResource_4C23E5D0_42F1_5D82_4192_347ADC6A18EE",
   "pitch": -19.02,
   "yaw": -18.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BEB2BE_429D_B272_41B7_C57260C7638B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.39,
   "yaw": -18.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA, this.camera_7A3900B2_54C0_92F0_41C7_B4826F6E082C); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.67,
   "image": "this.AnimatedImageResource_4C2225D0_42F1_5D82_41C3_081C931E1A6A",
   "pitch": -17.8,
   "yaw": 32.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F880C2_429D_CE12_41C2_7DAD19B86606",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.67,
   "yaw": 32.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.68,
   "image": "this.AnimatedImageResource_4C2255D0_42F1_5D82_41CF_35C7B3B2C5CB",
   "pitch": -21.89,
   "yaw": 167.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5000FE33_429D_D272_41CD_243C221C40F5",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.68,
   "yaw": 167.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.46,
   "image": "this.AnimatedImageResource_4C2A85B5_42F1_5D8D_4197_04C7D6AD3E33",
   "pitch": -22.7,
   "yaw": -102.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BDF24B_4294_5212_41CC_84910D8CA575",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.46,
   "yaw": -102.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.67,
   "image": "this.AnimatedImageResource_4C2505B5_42F1_5D8D_41AA_C0B70AA6F984",
   "pitch": -17.8,
   "yaw": 108.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F7DF9E_4294_5232_41C7_253D3CB11DBE",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.67,
   "yaw": 108.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.12,
   "image": "this.AnimatedImageResource_4C2545B6_42F1_5D8F_419F_6C49DF0C1F87",
   "pitch": -27.2,
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5014415C_4294_4E36_41B1_648A9844A0C0",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.12,
   "yaw": -3.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676, this.camera_7994EBFF_54C0_7670_41D1_CD7BA6BBB471); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.46,
   "image": "this.AnimatedImageResource_4C3935DF_42F1_5DBE_41C0_30E3DC6FA1DF",
   "pitch": -22.7,
   "yaw": -161.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C9D43A_429D_D672_41C5_5F6CF095FC3F",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.46,
   "yaw": -161.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F, this.camera_7BD8010B_54C0_9390_41B8_4E33987DB515); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37,
   "image": "this.AnimatedImageResource_4C3D75D1_42F1_5D82_419E_710878EA0538",
   "pitch": -24.34,
   "yaw": 0.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BCEABF_429C_B272_41CF_5EB35E614F5F",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37,
   "yaw": 0.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F, this.camera_7A2930DD_54C0_92B0_41A6_E4DE390A2C94); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.85,
   "image": "this.AnimatedImageResource_4C3DA5D2_42F1_5D86_41AA_1057F076BABF",
   "pitch": -28.02,
   "yaw": -81.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50E7873E_429C_D272_41C8_2A44D0BEC979",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.85,
   "yaw": -81.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C, this.camera_7AABEF78_54C0_8E70_41A9_26A9FFD83570); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.68,
   "image": "this.AnimatedImageResource_4C39E5DD_42F1_5D82_41D0_9263C82239DB",
   "pitch": -21.89,
   "yaw": -94.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B469C6_429C_7E12_41AC_65ED3E19F1DB",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.68,
   "yaw": -94.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D, this.camera_7A5C1FA0_54C0_8E90_41BC_062EECEF0C2E); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.35,
   "image": "this.AnimatedImageResource_4C3E45DE_42F1_5DBE_41CF_401FD685BE54",
   "pitch": -23.11,
   "yaw": -30.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50FCE572_429C_56F3_418A_0AE7191A0080",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.35,
   "yaw": -30.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87, this.camera_7A4A9FCF_54C0_8E90_41C9_ED93DBAB49FF); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_4C3EF5DE_42F1_5DBE_41CA_9182E9B1C960",
   "pitch": -21.48,
   "yaw": 37.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_500050DC_429C_4E36_4190_4B8581A1A776",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": 37.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95, this.camera_7B95D1E3_54C0_9290_41C5_58C5A201F871); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.9,
   "image": "this.AnimatedImageResource_4C3EB5DC_42F1_5D82_41C6_7D117AE56F92",
   "pitch": -21.07,
   "yaw": 157.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BD0A34_429C_5276_41C2_1298A21749B0",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.9,
   "yaw": 157.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.09,
   "image": "this.AnimatedImageResource_4C2BE5B3_42F1_5D85_41D0_16182E532A28",
   "pitch": -15.75,
   "yaw": 2.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B69E04_4297_B216_4198_F57D051A8436",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 39.09,
   "yaw": 2.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.77,
   "image": "this.AnimatedImageResource_4C2A25B4_42F1_5D83_419A_888A630ACC36",
   "pitch": -11.66,
   "yaw": 113.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50EDBB2A_4297_D212_41B5_89D16E1B278E",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 39.77,
   "yaw": 113.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.52,
   "image": "this.AnimatedImageResource_4C2A45B4_42F1_5D83_4193_9532238BF658",
   "pitch": -13.3,
   "yaw": -98.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5002EBAD_4297_F216_41A9_22DAACB3BA24",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 39.52,
   "yaw": -98.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_78293B31_54C0_77F0_41D3_AEBB67A582B6",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38,
   "image": "this.AnimatedImageResource_4C2315CE_42F1_5D9F_41A9_787D8301682E",
   "pitch": -20.66,
   "yaw": -6.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50BBDB78_429C_52FE_41BF_EBB126A9711D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38,
   "yaw": -6.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2, this.camera_7942FCFD_54C0_7270_41D3_8435295CA353); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.84,
   "image": "this.AnimatedImageResource_4C23B5CF_42F1_5D9E_41A4_AC3B169E2D08",
   "pitch": -16.98,
   "yaw": 104.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F99C96_429C_7632_41B6_45C2EB0920E6",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 38.84,
   "yaw": 104.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_7920FE0F_54C0_7190_41D1_240733C8BF2C",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E367407_3555_4A23_41BA_F7A26891577E, this.camera_7BE6F1B6_54C0_92F0_41AC_4167DFF635B9); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.46,
   "image": "this.AnimatedImageResource_4C24E5B8_42F1_5D83_41B3_B021C22E46EB",
   "pitch": -22.7,
   "yaw": 162.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B17126_4294_CE13_41CA_C8B231B9097D",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.46,
   "yaw": 162.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA, this.camera_79E65BDC_54C0_76B0_417D_A2BCE311E37C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 33.77,
   "image": "this.AnimatedImageResource_4C29B5A9_42F1_5D85_41B7_447ADFC9A4B1",
   "pitch": -33.75,
   "yaw": 161.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50AF0C70_4294_760E_41CD_86EC7B736AD1",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 33.77,
   "yaw": 161.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35,
   "image": "this.AnimatedImageResource_4C29D5A9_42F1_5D85_41C9_089719E3519D",
   "pitch": -30.48,
   "yaw": -23.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50EDAEEC_4294_5216_4181_67FB498A9066",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35,
   "yaw": -23.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.12,
   "image": "this.AnimatedImageResource_4C2875AA_42F1_5D87_41CF_1EB532EC0792",
   "pitch": -27.2,
   "yaw": -144.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50276D12_4295_D632_41CF_1425AA9B59C8",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.12,
   "yaw": -144.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_1_HS_2_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983, this.camera_7A69A02B_54C0_9191_41D2_DD2126B94E83); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.76,
   "image": "this.AnimatedImageResource_4C39E5E6_42F1_5D8E_41C6_4576055E70EA",
   "pitch": -25.16,
   "yaw": 3.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50B3C9FD_429C_71F6_41CB_CD3FC57D18C8",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.76,
   "yaw": 3.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96, this.camera_7A19E059_54C0_91B0_41CE_13AF37F73B62); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.88,
   "image": "this.AnimatedImageResource_4C3855E6_42F1_5D8E_41C6_5820DFCA14AB",
   "pitch": -24.75,
   "yaw": -146.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50FF4912_429C_5E32_41AB_F29DCDD5F1A1",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.88,
   "yaw": -146.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_1_HS_1_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258, this.camera_78FFB991_54C0_72B0_41BC_84926FA25F15); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.79,
   "image": "this.AnimatedImageResource_4C35A5F4_42F1_5D83_41C0_B37AEC4153E8",
   "pitch": -21.48,
   "yaw": -165.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50C14980_4297_FE0E_41CA_284F69711466",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.79,
   "yaw": -165.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_1_HS_0_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "shadow": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_498C54F0_545B_B07F_41AD_BD74D9355024",
  "this.IconButton_498E64F4_545B_B067_41C8_E0221EDD8242"
 ],
 "id": "Container_498E74F4_545B_B067_41CC_63589B8419E3",
 "left": 0,
 "width": 330,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "overflow": "visible",
 "shadow": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "width": 110,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "overflow": "visible",
 "shadow": false
},
{
 "shadow": false,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "class": "Container",
 "paddingBottom": 0,
 "width": "91.304%",
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2775BA_42F1_5D86_41C1_68A053C346E0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37E168_3553_4AEC_41C6_57CC8EC9FF95_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2795BF_42F1_5DFE_41B3_11EBF28FD8C2",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C20B5C6_42F1_5D8E_41AA_B4F53163DDF3",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2175C7_42F1_5D8E_41B1_6A714ACC6A8D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37F780_3555_561C_41C4_F9DF3F158C68_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C21A5C7_42F1_5D8E_41CC_F2071062B64B",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3765E2_3555_CA1C_41A0_6BFBC9399AD4_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2015C8_42F1_5D82_41C5_E5FBF7AAC9B0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C28D5AD_42F1_5D9D_41B5_0C5660888CC5",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2B75AE_42F1_5D9F_41B9_2462F51D89D0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E372562_3552_CA1C_41C8_EFC689AA57FD_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2B95AE_42F1_5D9F_41CB_7898C7D954D0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2895AA_42F1_5D87_41BF_8D5CD82A338A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E29050D_354D_4A24_41C0_2989123CF6CD_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2B35AB_42F1_5D85_41D0_B4375304F137",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D48E8_3553_3BEC_419E_42F5B6118DCA_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3B95EA_42F1_5D86_41CE_3B4C71C88C2B",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3ABE83_3557_5623_41C8_28EA6A2AD87A_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3F75DA_42F1_5D86_41C3_1C8D2C31A0F1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E375A16_3552_DE25_41C3_B32E509A350F_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2145C5_42F1_5D82_41CF_1A6D4CE34CE6",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E378AC2_3552_DE1C_41AB_30CD135077D5_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2115C4_42F1_5D82_418F_D805CF042608",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5322CBC1_4D71_3B72_41C5_AC078255AE5A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E2965EF_354D_D5E3_41B0_17883EEBDF9C_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53210BC7_4D71_3B7E_41CB_02BE281F0F41",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C21D5C5_42F1_5D82_41D0_5C8962FC5BBB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E37D82B_3555_5A6C_41C4_CBB8301BFA6B_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2075C6_42F1_5D8E_41C7_0B6A289E1243",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3C15D3_42F1_5D86_41C5_93FE838BABCB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3AA2F8_3557_CFEC_41C5_98B4B0E78415_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3C55D3_42F1_5D89_4174_7174BC505BEB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5D92E687_4D73_EDFE_41C0_52B82FDED22A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5D92C688_4D73_EDF2_4165_FD4924F73D5C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E2975E1_354D_CA1C_41C1_2AD3F3467DFA_0_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5D92A68A_4D73_EDF6_41C8_A8FD986A9549",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3925DC_42F1_5D82_41C1_432F315B6AF8",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B378C_3555_D624_41C7_CDCC0CB3A02C_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3955DD_42F1_5D82_41D0_336740ACE92E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3CF5D9_42F1_5D82_41BF_C9179950EE16",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3AE047_3557_4A24_41B3_628C417B31DF_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3F25D9_42F1_5D82_41CD_10541276BCA3",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B0261_3555_4E1C_41C4_366F8C197B87_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3955E4_42F1_5D82_41C1_25889892231D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3FD5DB_42F1_5D86_41CF_D77F6BD46E78",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B5B7B_3556_DEE3_41B4_6EC233111C95_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3E25DB_42F1_5D86_41CE_C039D26ED215",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3A8512_3557_CA3C_41C4_97EA7D0E279F_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3DE5D3_42F1_5D86_41B3_5E5E32478297",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B7D9D_3556_DA27_41B8_73146B9254DA_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3FA5DA_42F1_5D86_41CE_BEF300EC2838",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3A58DE_3557_7A25_41A7_CCECBD53B1DA_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C22C5D1_42F1_5D82_419C_DFFEBAAFBA44",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3A95EC_42F1_5D83_41BF_9FDD3102BD8C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3AC5ED_42F1_5D9D_41A2_07159140651C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7F1EF8D5_54C0_72B1_41B0_EB37C391227D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DF439_3553_CA6C_41C9_4E74D2705258_0_HS_3_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7F1F78D6_54C0_72B3_41C8_73E00A11F929",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3BCA49_3555_5E2C_41B6_DA46CF9F0621_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3EE5DC_42F1_5D82_4197_FA7C14C45D12",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3B05E9_42F1_5D82_41D0_493BE5545377",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D4B31_3553_7E7F_41C1_BBE44B1C4635_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3B45E9_42F1_5D82_41C5_F2A6F5F7720D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2075CD_42F1_5D82_41C4_1F82A7D90B1A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E367407_3555_4A23_41BA_F7A26891577E_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C20A5CE_42F1_5D9E_41C2_FDE85C623210",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3621E3_3555_4DE3_41B3_24A257D0882B_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C20C5CE_42F1_5D9E_4198_81FBAA4CB48E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D00EC_3552_CBE4_41BB_5A5716B4BF96_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3995E5_42F1_5D82_41C1_1202350DC063",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3A3B38_3557_3E6D_41C1_FF3D01AB2CB5_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2285D1_42F1_5D82_4182_BCCFE047E444",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53329C28_4D71_3D33_41A0_B652C595635F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D3DA5_3553_3A67_41A5_432EBE6F3983_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5332DC29_4D71_3D35_4192_C5A4BD8D01C0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2B65AB_42F1_5D85_41C1_4D7FE6693C69",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2825AC_42F1_5D83_41D0_9329D53D682A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E36F484_3552_CA25_41AC_4141D253A967_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C28B5AD_42F1_5D9D_41A8_134DE891DC7A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3BC5EB_42F1_5D85_41C0_4A1460F7350E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DA726_3553_F664_41C1_3A4B8A385654_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3A65EB_42F1_5D85_41A7_754238780260",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3DB239_3553_4E6C_4198_0CCE67AABB93_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3505EE_42F1_5D9F_41A2_05F58C459FB2",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C27D5C1_42F1_5D82_41C6_E956D9A02D77",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2665C2_42F1_5D86_41CE_6A82FC9416F8",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E367A82_3553_5E1C_41C2_F1CC70EB802F_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2695C3_42F1_5D86_41CD_350A97954649",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3726B1_3555_D67F_41CA_3E075BE5CAEA_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C21F5C8_42F1_5D82_41B6_47761FD0856E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5D9006A3_4D73_ED37_41C5_47562ACAED30",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5D90D6A4_4D73_ED31_41CC_AC7BA71E72A3",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3783C2_3553_CE1C_41A1_240D3C60FB34_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2495B8_42F1_5D83_41A9_3B83B0DB9F83",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53235BB4_4D71_3B12_41C0_1A468D4775D7",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E230489_354D_4A2C_41C7_05BD52902A43_0_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53226BBF_4D71_3B0E_41A6_5B43C24B682F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C35F5F4_42F1_5D83_41C8_BC0B028340DE",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_397A5F00_354E_D61D_4185_AE2870727EA0_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C35C5F5_42F1_5D8D_41B4_7A5C06CC6140",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C23E5D0_42F1_5D82_4192_347ADC6A18EE",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2225D0_42F1_5D82_41C3_081C931E1A6A",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E35FD86_3556_FA24_41A8_599C2E3E799B_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2255D0_42F1_5D82_41CF_35C7B3B2C5CB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2A85B5_42F1_5D8D_4197_04C7D6AD3E33",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2505B5_42F1_5D8D_41AA_C0B70AA6F984",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3764C1_3553_4A1F_41AC_96EA7E88D430_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2545B6_42F1_5D8F_419F_6C49DF0C1F87",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B0398_3555_4E2C_41B0_ECB8976F961D_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3935DF_42F1_5DBE_41C0_30E3DC6FA1DF",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3D75D1_42F1_5D82_419E_710878EA0538",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3A76D5_3557_3624_41C6_D10FA3F60FB2_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3DA5D2_42F1_5D86_41AA_1057F076BABF",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C39E5DD_42F1_5D82_41D0_9263C82239DB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3E45DE_42F1_5DBE_41CF_401FD685BE54",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B15FE_3555_D5E5_41C3_DB00FEADE676_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3EF5DE_42F1_5DBE_41CA_9182E9B1C960",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3B9BB6_3555_5E65_41B5_3D827684A335_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3EB5DC_42F1_5D82_41C6_7D117AE56F92",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2BE5B3_42F1_5D85_41D0_16182E532A28",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2A25B4_42F1_5D83_419A_888A630ACC36",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E36B5E1_3553_4A1F_41B1_CD9C53789D9F_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2A45B4_42F1_5D83_4193_9532238BF658",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2315CE_42F1_5D9F_41A9_787D8301682E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E361FA5_3555_3667_41B6_D49AB8DA851F_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C23B5CF_42F1_5D9E_41A4_AC3B169E2D08",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E378374_3553_CEE5_41B6_F52BA7298CD9_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C24E5B8_42F1_5D83_41B3_B021C22E46EB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C29B5A9_42F1_5D85_41B7_447ADFC9A4B1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C29D5A9_42F1_5D85_41C9_089719E3519D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E292603_354D_561C_41BD_B6C0E72746FC_1_HS_2_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C2875AA_42F1_5D87_41CF_1EB532EC0792",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C39E5E6_42F1_5D8E_41C6_4576055E70EA",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3D201A_3552_CA2D_419F_A197A59049F2_1_HS_1_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C3855E6_42F1_5D8E_41C6_5820DFCA14AB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_3E3C5386_3553_4E24_41C4_DACCD4C09A0D_1_HS_0_0.png",
   "width": 420,
   "height": 330,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4C35A5F4_42F1_5D83_41C0_B37AEC4153E8",
 "frameDuration": 41
},
{
 "shadow": false,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundColorRatios": [
  0
 ],
 "width": 30,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#0089C8"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container blue"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "borderRadius": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "shadow": false,
 "children": [
  "this.Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
  "this.Image_5B50B0CE_4F70_E50E_41CE_90A8BEC7FA7B",
  "this.Image_5D73C763_4F53_2B36_41C3_119D860DEC5F",
  "this.Image_5DD80B96_4F51_3B11_41C5_F8923BA34C45",
  "this.Image_5CC03734_4F53_EB12_41C6_61C720B83853",
  "this.Image_5D12C339_4D3F_EB12_41CB_A27632B1E62C",
  "this.Image_5D9FBD06_4F51_DCFE_41AC_4770BF0F6A84",
  "this.Image_5D80A816_4D57_6511_41BE_F0132A94C20B"
 ],
 "id": "Container_498C54F0_545B_B07F_41AD_BD74D9355024",
 "left": "0%",
 "backgroundColorRatios": [
  0
 ],
 "width": 300,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 40,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#0089C8"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "class": "Container",
 "paddingBottom": 40,
 "data": {
  "name": "Buttons set"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 40
},
{
 "cursor": "hand",
 "shadow": false,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_498E64F4_545B_B067_41C8_E0221EDD8242",
 "left": 280,
 "width": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242.png",
 "borderRadius": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "class": "IconButton",
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "shadow": false,
 "children": [
  "this.Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
  "this.Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
  "this.Container_498D54F1_545B_B061_41D3_D6C6823E053E",
  "this.Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
  "this.Container_498C14F1_545B_B061_41C8_E3BA647331FB",
  "this.Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
  "this.Container_498D34F2_545B_B063_41CE_EF1298571ABE",
  "this.Button_498D04F2_545B_B063_41CA_0925CE4010D5",
  "this.Container_498EE4F2_545B_B063_41CC_AAA0CAD20379",
  "this.Button_498E34F2_545B_B063_41C6_44A1C5C4635E",
  "this.Container_498EC4F3_545B_B061_41C7_5B45D376F74D",
  "this.Button_498ED4F3_545B_B061_41A5_94E9C4493623",
  "this.Container_498EA4F3_545B_B061_41C1_2FA3B75745E0",
  "this.Button_5899D062_4F70_E536_41C4_56FB8F2C1649"
 ],
 "id": "Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.15,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 6,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "26.18%",
 "bottom": "27.53%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "-Level 1"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "maxHeight": 500,
 "maxWidth": 500,
 "id": "Image_5B50B0CE_4F70_E50E_41CE_90A8BEC7FA7B",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_5B50B0CE_4F70_E50E_41CE_90A8BEC7FA7B.png",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "26.577%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image9033"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "cursor": "hand",
 "shadow": false,
 "scaleMode": "fit_inside",
 "maxHeight": 1099,
 "maxWidth": 1091,
 "id": "Image_5D73C763_4F53_2B36_41C3_119D860DEC5F",
 "right": "1.82%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_5D73C763_4F53_2B36_41C3_119D860DEC5F.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "86.39%",
 "bottom": "0.19%",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "30.909%",
 "paddingTop": 0,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5544991095858', '_blank')",
 "borderRadius": 0,
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image10391"
 },
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "scaleMode": "fit_inside",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_5DD80B96_4F51_3B11_41C5_F8923BA34C45",
 "left": "31.73%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_5DD80B96_4F51_3B11_41C5_F8923BA34C45.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "87.45%",
 "bottom": "0.77%",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "29.091%",
 "paddingTop": 0,
 "click": "this.openLink('https://www.facebook.com/leloimoveismaringa/', '_blank')",
 "borderRadius": 0,
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image10338"
 },
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "scaleMode": "fit_inside",
 "maxHeight": 283,
 "maxWidth": 405,
 "id": "Image_5CC03734_4F53_EB12_41C6_61C720B83853",
 "left": "39.67%",
 "right": "0%",
 "borderSize": 0,
 "url": "skin/Image_5CC03734_4F53_EB12_41C6_61C720B83853.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "42.29%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://leloimoveis.com.br/', '_blank')",
 "borderRadius": 0,
 "height": "0.166%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image12070"
 },
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "scaleMode": "fit_inside",
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_5D12C339_4D3F_EB12_41CB_A27632B1E62C",
 "right": "5.05%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_5D12C339_4D3F_EB12_41CB_A27632B1E62C.png",
 "minHeight": 1,
 "bottom": "14.53%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "27.727%",
 "paddingTop": 0,
 "click": "this.openLink('http://tel:04432255858', '_blank')",
 "borderRadius": 0,
 "height": "11.855%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image15395"
 },
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "scaleMode": "fit_inside",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_5D9FBD06_4F51_DCFE_41AC_4770BF0F6A84",
 "left": "0.33%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_5D9FBD06_4F51_DCFE_41AC_4770BF0F6A84.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "87.15%",
 "bottom": "0.05%",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "25.909%",
 "paddingTop": 0,
 "click": "this.openLink('https://instagram.com/leloimoveis?utm_medium=copy_link', '_blank')",
 "borderRadius": 0,
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image12007"
 },
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "scaleMode": "fit_inside",
 "maxHeight": 283,
 "maxWidth": 405,
 "id": "Image_5D80A816_4D57_6511_41BE_F0132A94C20B",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_5D80A816_4D57_6511_41BE_F0132A94C20B.png",
 "minHeight": 1,
 "bottom": "12.24%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "69.091%",
 "paddingTop": 0,
 "click": "this.openLink('http://https://leloimoveis.com.br/', '_blank')",
 "borderRadius": 0,
 "height": "17.782%",
 "class": "Image",
 "paddingBottom": 0,
 "data": {
  "name": "Image15874"
 },
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 1 - Reception"
 },
 "shadowSpread": 1,
 "id": "Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "EXTERNAS >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_498D54F1_545B_B061_41D3_D6C6823E053E",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "shadowSpread": 1,
 "id": "Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "1\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_498C14F1_545B_B061_41C8_E3BA647331FB",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "shadowSpread": 1,
 "id": "Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 23,
 "paddingTop": 0,
 "label": "2\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 15)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_498D34F2_545B_B063_41CE_EF1298571ABE",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "shadowSpread": 1,
 "id": "Button_498D04F2_545B_B063_41CA_0925CE4010D5",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "3\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_498EE4F2_545B_B063_41CC_AAA0CAD20379",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "shadowSpread": 1,
 "id": "Button_498E34F2_545B_B063_41C6_44A1C5C4635E",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "4\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 27)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_498EC4F3_545B_B061_41C7_5B45D376F74D",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "shadowSpread": 1,
 "id": "Button_498ED4F3_545B_B061_41A5_94E9C4493623",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "5\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 33)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Button_583D1BA0_4F77_5B32_41CC_956C4320FE82"
 ],
 "id": "Container_498EA4F3_545B_B061_41C1_2FA3B75745E0",
 "scrollBarColor": "#000000",
 "shadow": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "class": "Container",
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 10,
 "shadow": false,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "shadowSpread": 1,
 "id": "Button_5899D062_4F70_E536_41C4_56FB8F2C1649",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "6\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.mainPlayList.set('selectedIndex', 38)",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundOpacity": 0
},
{
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "shadowSpread": 1,
 "id": "Button_583D1BA0_4F77_5B32_41CC_956C4320FE82",
 "left": "0%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "bottom": "-4900%",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingTop": 0,
 "label": "5\u00aa SALA >",
 "borderRadius": 0,
 "height": 50,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "textDecoration": "none",
 "paddingLeft": 10,
 "pressedBackgroundOpacity": 0
}],
 "shadow": false,
 "children": [
  "this.MainViewer",
  "this.Container_54B2586A_750B_85DC_41D9_68368732F926",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.7,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "minHeight": 20,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 20,
 "downloadEnabled": false,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "start": "this.playAudioList([this.audio_43C84C70_4DCC_82DC_41A4_B08D245EB19E]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "overflow": "visible",
 "paddingLeft": 0,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
