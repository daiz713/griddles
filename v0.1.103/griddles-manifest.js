﻿/**
 * Griddles 
 * (c) 2013-2014 daiz. https://github.com/daiz713/griddles
 * License: MIT
 */

var griddles = griddles || {};

 /* User settings */
griddles.msgLoading = "...griddlesJS";

/* flags 
griddles.xhrimg = false;
griddles.cca = false;
*/

griddles.layout = {
    "page_title": "griddlesJS",
    "page_icon": "icon.png",
    "page_bar_color": "#000",
    "page_bar_bg_color": "#F3D51A",
    "background_color": "#e5e5e5",
    "window": {
        "portrait": {
            "card_width_px": 275,
            "stream_margin_left_px": 8,
            "stream_margin_right_px": 8,
            "card_margin_bottom": 14,
            "card_paddings": [2, 2, 2, 2],
            "card_border_radius": [0, 0, 0, 0]
        },
        "landscape": {
            "card_width_px": 430,
            "stream_margin_left_px": 17,
            "stream_margin_right_px": 17,
            "card_margin_bottom": 34,
            "card_paddings": [4, 4, 4, 4],
            "card_border_radius": [3, 3, 3, 3]
        }
    },
    "card_height_px": "auto",         // OR INT Number
    "available_width_percent": 98,
    "max_streams_limit": 4,
    "card_tooltip": false,
    "load_limit": false,
    "griddles.layout.clear": false,
    "cards": [],
    "menu_items": [
        "タップしてメニューを選択",
        "白色カード",
        "カラフルカード"
    ]
};

griddles.layout.cardOnClick = function(j) {
    myApp.cardOnClick(j);
}

griddles.layout.menuOnChange = function(j) {
    myApp.menuOnChange(j);
}

/*
griddles.layout.scrollEnd = function() {
   return false;
}
*/

griddles.layout.scrollEnd = function() {
   myApp.scrollEnd();
   return true;
}

griddles.layout.cards.push(
    griddles.card(
        {
         "card": "#FFF1A8", 
         "type": "loading_wait", 
         "init": "<div style='padding: 10px; font-family: Meiryo, Arial; font-size: 13px;'><center>読み込んでいます...</center></div>", 
         "wide": true
        }
    )
);


