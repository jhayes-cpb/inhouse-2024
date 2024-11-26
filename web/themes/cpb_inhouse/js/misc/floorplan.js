/*

2022-10-17

iteration: 5

*/

var officeNumber = "";
var firstName = "";
var lastName = "";
var positionTitle = "";
var picture = "";
var phoneNumber = "";
var email = "";
var department = "";
var employeeInformation = "";
var squaresContent = "";
var employeesNamesList = [];
var employees = {};

function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 1000);
  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

/* ================ BEGIN MAP STRUCTURES ================== */

var mapItems = {
  "id": 2641,
  "editor": {
    "selected_shape": "spot-8932"
  },
  "general": {
    "name": "CPB Floorplan",
    "width": 6282,
    "height": 5619,
    "image_url": "/sites/default/files/img/cpb_map.png"
  },
  "spots": [
    {
      "id": "3053B",
      "type": "rect",
      "x": 34.1,
      "y": 34.3,
      "width": 2.1,
      "height": 3.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3046",
      "type": "rect",
      "x": 40.3,
      "y": 32,
      "width": 3.2,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3045",
      "type": "rect",
      "x": 43.6,
      "y": 31.9,
      "width": 3,
      "height": 5.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3055a",
      "type": "rect",
      "x": 32.9,
      "y": 13.5,
      "width": 3.4,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3021",
      "type": "rect",
      "x": 87.4,
      "y": 39.3,
      "width": 5.5,
      "height": 6.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3055b",
      "type": "rect",
      "x": 29.3,
      "y": 13.4,
      "width": 3.5,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3056",
      "type": "rect",
      "x": 16.1,
      "y": 15.3,
      "width": 8,
      "height": 3.9,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3052",
      "type": "rect",
      "x": 16.2,
      "y": 39.7,
      "width": 6.1,
      "height": 5.9,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3050",
      "type": "rect",
      "x": 25.8,
      "y": 39.8,
      "width": 3.7,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3049",
      "type": "rect",
      "x": 29.5,
      "y": 39.8,
      "width": 3.5,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2003a",
      "type": "rect",
      "x": 52.9,
      "y": 68.2,
      "width": 4.9,
      "height": 5.9,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3047",
      "type": "poly",
      "x": 37.174,
      "y": 39.1,
      "width": 6.47,
      "height": 6.451,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#a9a9ab",
        "fill_opacity": 0.44960056390977443
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-523951\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Available Office.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      },
      "points": [
        {
          "x": 0,
          "y": 12.026238605248878
        },
        {
          "x": 57.45586979058166,
          "y": 10.79373613512644
        },
        {
          "x": 57.862392295801136,
          "y": 1.867792057857765
        },
        {
          "x": 100,
          "y": 0
        },
        {
          "x": 99.59361910736348,
          "y": 99.40243644561204
        },
        {
          "x": 0.40631356654364825,
          "y": 100
        }
      ]
    },
    {
      "id": "3048",
      "type": "rect",
      "x": 32.9,
      "y": 39.8,
      "width": 4.2,
      "height": 5.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3044",
      "type": "rect",
      "x": 43.7,
      "y": 39.3,
      "width": 3.7,
      "height": 6.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3038",
      "type": "rect",
      "x": 59.2,
      "y": 39.2,
      "width": 3.6,
      "height": 6.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3037",
      "type": "rect",
      "x": 62.8,
      "y": 39.3,
      "width": 4.6,
      "height": 6.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2027",
      "type": "rect",
      "x": 95.1,
      "y": 85.4,
      "width": 4.9,
      "height": 9.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3040",
      "type": "rect",
      "x": 58.3,
      "y": 30.8,
      "width": 3.4,
      "height": 6.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3023",
      "type": "rect",
      "x": 78.6,
      "y": 39.2,
      "width": 4.1,
      "height": 6.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3009",
      "type": "rect",
      "x": 78.3,
      "y": 5.6,
      "width": 3.6,
      "height": 6.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3020",
      "type": "poly",
      "x": 92.9,
      "y": 39.3,
      "width": 7.1,
      "height": 6.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#a9a9ab",
        "fill_opacity": 0.44960056390977443
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-523951\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Available Office.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      },
      "points": [
        {
          "x": 2.4555953851833157,
          "y": 0
        },
        {
          "x": 25.419110322495364,
          "y": 0.3211187148797202
        },
        {
          "x": 25.78565266494029,
          "y": 21.082693452492922
        },
        {
          "x": 100,
          "y": 16.062149833294683
        },
        {
          "x": 99.19419839666025,
          "y": 96.25875366845162
        },
        {
          "x": 0,
          "y": 100
        }
      ]
    },
    {
      "id": "3022",
      "type": "rect",
      "x": 82.6,
      "y": 39.2,
      "width": 4.8,
      "height": 6.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3033",
      "type": "rect",
      "x": 70.9,
      "y": 31.8,
      "width": 3.9,
      "height": 5.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3018",
      "type": "rect",
      "x": 94.9,
      "y": 29.2,
      "width": 5.1,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3016",
      "type": "rect",
      "x": 94.8,
      "y": 16.4,
      "width": 5.1,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3015",
      "type": "rect",
      "x": 94.9,
      "y": 10.7,
      "width": 5,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3013",
      "type": "rect",
      "x": 89.1,
      "y": 5.5,
      "width": 3.5,
      "height": 6.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "spot-6924",
      "x": 52.3,
      "y": 37.6,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-530541\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Maui\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> Canon iR C5235  <br><b>Features:</b>   Color, Duplex, Staple, Letter/Legal, Copier, Scan to Email <br><b>Location:</b> Across Cleveland Park Conference Room\"}}},{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Austin\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> HP Laserjet 600 M601 \\n<b>Features:</b>  Black/White, Duplex, Letter/Legal <br>\\n<b>Location:</b> Across Cleveland Park Conference Room\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-82731\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Maui</h3></div><div id=\"sq-element-759421\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> Canon iR C5235  <br><b>Features:</b>   Color, Duplex, Staple, Letter/Legal, Copier, Scan to Email <br><b>Location:</b> Across Cleveland Park Conference Room</p></div><div id=\"sq-element-787381\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Austin</h3></div><div id=\"sq-element-567971\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> HP Laserjet 600 M601 <br><b>Features:</b>  Black/White, Duplex, Letter/Legal <br><b>Location:</b> Across Cleveland Park Conference Room</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "3012",
      "type": "rect",
      "x": 85.6,
      "y": 5.6,
      "width": 3.5,
      "height": 6.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3019",
      "type": "rect",
      "x": 94.9,
      "y": 35,
      "width": 5.1,
      "height": 5.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3011",
      "type": "rect",
      "x": 81.9,
      "y": 5.7,
      "width": 3.5,
      "height": 6.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3008",
      "type": "rect",
      "x": 74.9,
      "y": 5.4,
      "width": 3.4,
      "height": 6.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3005",
      "type": "rect",
      "x": 71.2,
      "y": 5.4,
      "width": 3.6,
      "height": 6.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3004",
      "type": "rect",
      "x": 67.3,
      "y": 5.5,
      "width": 4,
      "height": 6.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-218131\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3006",
      "type": "rect",
      "x": 71,
      "y": 14.5,
      "width": 3.9,
      "height": 5.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3007",
      "type": "rect",
      "x": 74.9,
      "y": 14.3,
      "width": 3.8,
      "height": 5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3025",
      "type": "rect",
      "x": 78.7,
      "y": 27.9,
      "width": 4.7,
      "height": 4.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3027",
      "type": "rect",
      "x": 78.7,
      "y": 19.2,
      "width": 4.7,
      "height": 4.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3026",
      "type": "rect",
      "x": 78.6,
      "y": 23.4,
      "width": 4.6,
      "height": 4.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3030",
      "type": "rect",
      "x": 73,
      "y": 39.1,
      "width": 5.7,
      "height": 6.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3031",
      "type": "rect",
      "x": 74.8,
      "y": 31.9,
      "width": 3.8,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3035",
      "type": "rect",
      "x": 65.3,
      "y": 31.9,
      "width": 3.6,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3034",
      "type": "rect",
      "x": 67.5,
      "y": 39.3,
      "width": 5.4,
      "height": 6.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2006",
      "type": "rect",
      "x": 62.9,
      "y": 61,
      "width": 4,
      "height": 7.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2008",
      "type": "rect",
      "x": 67,
      "y": 60.9,
      "width": 4,
      "height": 7.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2010",
      "type": "rect",
      "x": 71.2,
      "y": 61,
      "width": 4.4,
      "height": 7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2012",
      "type": "rect",
      "x": 75.5,
      "y": 61.1,
      "width": 4,
      "height": 7.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2014",
      "type": "rect",
      "x": 79.6,
      "y": 61,
      "width": 3.9,
      "height": 7.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2016",
      "type": "rect",
      "x": 83.6,
      "y": 61.1,
      "width": 4,
      "height": 7.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2018",
      "type": "rect",
      "x": 87.8,
      "y": 61.1,
      "width": 4.6,
      "height": 7.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2019",
      "type": "rect",
      "x": 92.4,
      "y": 61.1,
      "width": 7.5,
      "height": 7.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2020",
      "type": "rect",
      "x": 94.9,
      "y": 67.9,
      "width": 5,
      "height": 5.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2024",
      "type": "rect",
      "x": 94.8,
      "y": 80.4,
      "width": 5.1,
      "height": 5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2022",
      "type": "rect",
      "x": 94.9,
      "y": 73.5,
      "width": 5,
      "height": 7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2030",
      "type": "rect",
      "x": 75.4,
      "y": 94.5,
      "width": 8.9,
      "height": 5.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2017b",
      "type": "rect",
      "x": 89.7,
      "y": 70.4,
      "width": 2.4,
      "height": 3.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2028",
      "type": "rect",
      "x": 93.5,
      "y": 94.7,
      "width": 6.5,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2035",
      "type": "rect",
      "x": 68,
      "y": 94.7,
      "width": 7.2,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2037",
      "type": "rect",
      "x": 62.8,
      "y": 94.7,
      "width": 5.4,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2040",
      "type": "rect",
      "x": 57.8,
      "y": 94.7,
      "width": 4.8,
      "height": 3.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2046a",
      "type": "rect",
      "x": 41.7,
      "y": 87.4,
      "width": 3.2,
      "height": 2.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2000",
      "type": "rect",
      "x": 40.5,
      "y": 66.2,
      "width": 5.5,
      "height": 3.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2009",
      "type": "rect",
      "x": 71.5,
      "y": 70.2,
      "width": 3.9,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2013",
      "type": "rect",
      "x": 77.5,
      "y": 70.4,
      "width": 4.5,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2015",
      "type": "rect",
      "x": 82.1,
      "y": 70.4,
      "width": 4.6,
      "height": 5.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "spot-8877",
      "x": 54.3,
      "y": 72.9,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "bottom"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-237902\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Los Angeles\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<strong>Description:</strong> HP Laserjet 600 M601 <br> <strong>Features:</strong> Black/White, Duplex, Letter/Legal <br> <strong>Location:</strong> Inside Copy Room \"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-37861\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Los Angeles</h3></div><div id=\"sq-element-153071\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"> <strong>Description:</strong> HP Laserjet 600 M601 <br> <strong>Features:</strong> Black/White, Duplex, Letter/Legal <br> <strong>Location:</strong> Inside Copy Room </p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "2039",
      "type": "rect",
      "x": 56.7,
      "y": 87.5,
      "width": 3.8,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2004",
      "type": "rect",
      "x": 57.8,
      "y": 68.2,
      "width": 6.9,
      "height": 6.1,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2031c",
      "type": "rect",
      "x": 87.4,
      "y": 87.6,
      "width": 4.8,
      "height": 5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3014",
      "type": "poly",
      "x": 92.626,
      "y": 5.5,
      "width": 7.357,
      "height": 6.755,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#a9a9ab",
        "fill_opacity": 0.44960056390977443
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-523951\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Available Office.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      },
      "points": [
        {
          "x": 32.03512754021032,
          "y": 100
        },
        {
          "x": 2.361145116124648,
          "y": 97.34259561687243
        },
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 100,
          "y": 1.1770762684790486
        },
        {
          "x": 99.22520205592119,
          "y": 78.34990939883471
        },
        {
          "x": 33.751906489729244,
          "y": 77.44019662500675
        }
      ]
    },
    {
      "id": "2031b",
      "type": "rect",
      "x": 82.5,
      "y": 87.5,
      "width": 4.8,
      "height": 5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2031a",
      "type": "rect",
      "x": 77.5,
      "y": 87.6,
      "width": 4.8,
      "height": 4.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2003b",
      "type": "rect",
      "x": 53,
      "y": 61.1,
      "width": 10,
      "height": 7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2036",
      "type": "rect",
      "x": 67.9,
      "y": 87.4,
      "width": 4.3,
      "height": 5.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2038",
      "type": "rect",
      "x": 60.6,
      "y": 87.6,
      "width": 4.1,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2045",
      "type": "rect",
      "x": 44.9,
      "y": 94.6,
      "width": 3.8,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2051",
      "type": "rect",
      "x": 34.9,
      "y": 76,
      "width": 4.7,
      "height": 4.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2050",
      "type": "rect",
      "x": 35,
      "y": 80.2,
      "width": 4.7,
      "height": 4.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2049",
      "type": "rect",
      "x": 35,
      "y": 85.1,
      "width": 4.7,
      "height": 4.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2046c",
      "type": "rect",
      "x": 37.3,
      "y": 92.1,
      "width": 2.9,
      "height": 2.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "rect-2500",
      "type": "rect",
      "x": 16.9,
      "y": 61.1,
      "width": 12.7,
      "height": 11.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-40561\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Diane D. Blair Room (Board Room Part A)\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: 22 \\nRoom Capacity: 35\\nPhone: None\\nPolycom: 9842\\nFeatures: Rear projection, surround sound\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Important: The Board Room is made up by removing the partition between the Diane D. Blair Room and the James R. Killian Room. To reserve the entire Board Room, you must reserve both Parts A and B individually.\\nPlease contact Office Services to reserve this room.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-144661\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Diane D. Blair Room (Board Room Part A)</h2></div><div id=\"sq-element-918061\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: 22 <br>Room Capacity: 35<br>Phone: None<br>Polycom: 9842<br>Features: Rear projection, surround sound</p></div><div id=\"sq-element-788151\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Important: The Board Room is made up by removing the partition between the Diane D. Blair Room and the James R. Killian Room. To reserve the entire Board Room, you must reserve both Parts A and B individually.<br>Please contact Office Services to reserve this room.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "rect-2501",
      "type": "rect",
      "x": 5.1,
      "y": 60.9,
      "width": 11.9,
      "height": 11.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-705171\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Gallery Place\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: NA\\nRoom Capacity: NA\\nPhone: NA \\nPolycom: NA\\nFeatures: NA\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-679361\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Gallery Place</h2></div><div id=\"sq-element-396341\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: NA<br>Room Capacity: NA<br>Phone: NA <br>Polycom: NA<br>Features: NA</p></div><div id=\"sq-element-401971\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "rect-2249",
      "type": "rect",
      "x": 29.5,
      "y": 61,
      "width": 7.9,
      "height": 11.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-90101\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"James R. Killian Room (Board Room Part B)\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: 14\\nRoom Capacity: 25\\nPhone: 9610 \\nPolycom: None\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Important: The Board Room is made up by removing the partition between the Diane D. Blair Room and the James R. Killian Room. To reserve the entire Board Room, you must reserve both Parts A and B individually.\\nPlease contact Office Services to reserve this room.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-933711\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">James R. Killian Room (Board Room Part B)</h2></div><div id=\"sq-element-16481\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: 14<br>Room Capacity: 25<br>Phone: 9610 <br>Polycom: None</p></div><div id=\"sq-element-81161\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Important: The Board Room is made up by removing the partition between the Diane D. Blair Room and the James R. Killian Room. To reserve the entire Board Room, you must reserve both Parts A and B individually.<br>Please contact Office Services to reserve this room.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "spot-9340",
      "x": 54.4,
      "y": 67,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "bottom"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-136051\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Mailroom\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> Canon ir C5185 \\n<b>Features:</b>   Color, Duplex, Staple/HolePunch, Letter/Legal, Copier, Scan to Email \\n<b>Location:</b> Inside the Mailroom \"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-672301\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Mailroom</h3></div><div id=\"sq-element-43781\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> Canon ir C5185 <br><b>Features:</b>   Color, Duplex, Staple/HolePunch, Letter/Legal, Copier, Scan to Email <br><b>Location:</b> Inside the Mailroom </p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "2042",
      "type": "rect",
      "x": 48.8,
      "y": 94.6,
      "width": 4,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-577411\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Woodley Park\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: NA\\nRoom Capacity: NA\\nPhone: NA \\nPolycom: NA\\nFeatures: NA\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-153061\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Woodley Park</h2></div><div id=\"sq-element-778481\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: NA<br>Room Capacity: NA<br>Phone: NA <br>Polycom: NA<br>Features: NA</p></div><div id=\"sq-element-812571\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "3042",
      "type": "rect",
      "x": 47.4,
      "y": 39.2,
      "width": 5.5,
      "height": 6.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2033",
      "type": "rect",
      "x": 77.5,
      "y": 75.9,
      "width": 7.8,
      "height": 9.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "position": "left",
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-645841\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Executive Conference Room\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: 14\\nRoom Capacity: 20\\nPhone: 9611 \\nPolycom: 9645\\nFeatures: SmartBoard flat-panel screen\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-761421\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Executive Conference Room</h2></div><div id=\"sq-element-164231\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: 14<br>Room Capacity: 20<br>Phone: 9611 <br>Polycom: 9645<br>Features: SmartBoard flat-panel screen</p></div><div id=\"sq-element-151531\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "2041",
      "type": "rect",
      "x": 52.8,
      "y": 94.5,
      "width": 5.1,
      "height": 5.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "poly-7171",
      "type": "poly",
      "x": 38.1,
      "y": 5.9,
      "width": 7.455,
      "height": 11.579,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff",
        "fill": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "position": "bottom",
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-180801\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"VTC Room\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Information Pending.\\n\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\".\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#c0c0c0\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-155311\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">VTC Room</h2></div><div id=\"sq-element-716521\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Information Pending.<br></p></div><div id=\"sq-element-304251\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #c0c0c0; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #c0c0c0; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #c0c0c0; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">.</p></div><div class=\"squares-clear\"></div></div>"
      },
      "points": [
        {
          "x": 0.1657178419744142,
          "y": 0.722675916147572
        },
        {
          "x": 100,
          "y": 0
        },
        {
          "x": 98.49283319633683,
          "y": 100
        },
        {
          "x": 0,
          "y": 98.88880952623093
        }
      ]
    },
    {
      "id": "spot-876",
      "x": 88.7,
      "y": 84.7,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "left"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-453051\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Honolulu\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> Canon iR C5235 \\n<b>Features:</b>Color, Duplex, Staple, Letter/Legal, Copier, Scan to Email \\n<b>Location:</b> Outside the Executive Kitchen (2024) \"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-340151\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Honolulu</h3></div><div id=\"sq-element-112751\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> Canon iR C5235 <br><b>Features:</b>Color, Duplex, Staple, Letter/Legal, Copier, Scan to Email <br><b>Location:</b> Outside the Executive Kitchen (2024) </p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "spot-8613",
      "x": 48.3,
      "y": 92.3,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-819751\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Milwaukee\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> HP Laserjet 600 M601\\n<b>Features:</b> Black/White, Duplex, Letter/Legal\\n<b>Location:</b> Inside 2044\"}}},{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Florida\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> HP Color LaserJet CP4520 \\n<b>Features:</b> Color, Duplex, Letter/Legal\\n<b>Location:</b> Inside 2044\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-544241\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Milwaukee</h3></div><div id=\"sq-element-222221\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> HP Laserjet 600 M601<br><b>Features:</b> Black/White, Duplex, Letter/Legal<br><b>Location:</b> Inside 2044</p></div><div id=\"sq-element-170141\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Florida</h3></div><div id=\"sq-element-979371\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> HP Color LaserJet CP4520 <br><b>Features:</b> Color, Duplex, Letter/Legal<br><b>Location:</b> Inside 2044</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "3029O",
      "type": "rect",
      "x": 85,
      "y": 14.2,
      "width": 2.1,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029B",
      "type": "rect",
      "x": 90.1,
      "y": 14.2,
      "width": 2.8,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029D",
      "type": "rect",
      "x": 90.1,
      "y": 16.9,
      "width": 2.8,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029C",
      "type": "rect",
      "x": 87.1,
      "y": 16.8,
      "width": 2.9,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029E",
      "type": "rect",
      "x": 87,
      "y": 21.7,
      "width": 3.1,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029G",
      "type": "rect",
      "x": 87.2,
      "y": 24.4,
      "width": 2.9,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029F",
      "type": "rect",
      "x": 90.1,
      "y": 21.6,
      "width": 2.8,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029I",
      "type": "rect",
      "x": 87.2,
      "y": 27,
      "width": 2.8,
      "height": 2.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029K",
      "type": "rect",
      "x": 87.3,
      "y": 32,
      "width": 2.8,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029J",
      "type": "rect",
      "x": 89.9,
      "y": 26.9,
      "width": 3.1,
      "height": 2.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029H",
      "type": "rect",
      "x": 90.1,
      "y": 24.3,
      "width": 2.8,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029M",
      "type": "rect",
      "x": 87.3,
      "y": 34.5,
      "width": 2.7,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029L",
      "type": "rect",
      "x": 90,
      "y": 32.1,
      "width": 2.9,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029N",
      "type": "rect",
      "x": 90,
      "y": 34.6,
      "width": 3.1,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3051",
      "type": "rect",
      "x": 22.3,
      "y": 39.7,
      "width": 3.4,
      "height": 5.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029Q",
      "type": "rect",
      "x": 85.1,
      "y": 34.7,
      "width": 2.2,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3029P",
      "type": "rect",
      "x": 85.1,
      "y": 32,
      "width": 2.2,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3036",
      "type": "rect",
      "x": 61.7,
      "y": 32,
      "width": 3.6,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3041",
      "type": "rect",
      "x": 50.2,
      "y": 32.6,
      "width": 3.4,
      "height": 4.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3043",
      "type": "rect",
      "x": 46.8,
      "y": 31.9,
      "width": 3.3,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053A",
      "type": "rect",
      "x": 36.4,
      "y": 34.1,
      "width": 1.9,
      "height": 3.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053I",
      "type": "rect",
      "x": 16.3,
      "y": 34.2,
      "width": 2.3,
      "height": 3.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053C",
      "type": "rect",
      "x": 31.6,
      "y": 34.3,
      "width": 2.4,
      "height": 3.4,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053D",
      "type": "rect",
      "x": 29.4,
      "y": 34.1,
      "width": 2.1,
      "height": 3.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053E",
      "type": "rect",
      "x": 25.4,
      "y": 34.3,
      "width": 2.1,
      "height": 3.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053F",
      "type": "rect",
      "x": 23.2,
      "y": 34.3,
      "width": 2.2,
      "height": 3.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053G",
      "type": "rect",
      "x": 21.1,
      "y": 34.3,
      "width": 2.1,
      "height": 3.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3053H",
      "type": "rect",
      "x": 18.6,
      "y": 34.3,
      "width": 2.5,
      "height": 3.2,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3017",
      "type": "rect",
      "x": 95,
      "y": 21.8,
      "width": 5,
      "height": 7.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "spot-8932",
      "x": 84.8,
      "y": 33.1,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "left"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-39021\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Chicago\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<p>\\n    <strong>Description:</strong> HP Laserjet 600 M601\\n    <br>\\n    <strong>Features:</strong> Black/White, Duplex, Letter/Legal\\n    <br>\\n    <strong>Location:</strong> Outside cubicle K\\n    <br>\"}}},{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Oakland\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> HP Color LaserJet CP4520  \\n<b>Features:</b>  Color, Duplex, Letter/Legal  \\n<b>Location:</b> Outside cubicle K \"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-671901\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Chicago</h3></div><div id=\"sq-element-939301\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><p><br>    <strong>Description:</strong> HP Laserjet 600 M601<br>       <strong>Features:</strong> Black/White, Duplex, Letter/Legal<br>      <strong>Location:</strong> Outside cubicle K<br>  </p></div><div id=\"sq-element-764551\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Oakland</h3></div><div id=\"sq-element-228781\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> HP Color LaserJet CP4520  <br><b>Features:</b>  Color, Duplex, Letter/Legal  <br><b>Location:</b> Outside cubicle K </p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "3029A",
      "type": "rect",
      "x": 87.1,
      "y": 14.3,
      "width": 2.8,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "spot-8867",
      "x": 86,
      "y": 17.3,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "left"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-680811\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Cleveland Park\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> Canon ir3245  \\n<b>Features:</b> Black/White, Duplex, Staple/HolePunch, Letter/Legal, Copier, Scan to Email  \\n<br><b>Location:</b> Across Dupont Huddle Room\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-635491\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Cleveland Park</h3></div><div id=\"sq-element-355771\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> Canon ir3245  <br><b>Features:</b> Black/White, Duplex, Staple/HolePunch, Letter/Legal, Copier, Scan to Email  <br><br><b>Location:</b> Across Dupont Huddle Room</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "spot-7784",
      "x": 89.5,
      "y": 20,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "left"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-121781\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Baltimore\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"    <strong>Description:</strong> HP Laserjet 600 M601\\n    <br>\\n    <strong>Features:</strong> Black/White, Duplex, Letter/Legal\\n    <br>\\n    <strong>Location:</strong> Outside cubicle C\\n    <br>\\n    </p>\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-49791\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Baltimore</h3></div><div id=\"sq-element-565111\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">    <strong>Description:</strong> HP Laserjet 600 M601<br> <strong>Features:</strong> Black/White, Duplex, Letter/Legal<br>     <strong>Location:</strong> Outside cubicle C<br>    <br><br>    </p></p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "spot-3681",
      "x": 26.9,
      "y": 38.6,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "left"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-691581\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Portland\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\" <strong>Description:</strong> HP Color Laserjet Enterprise M652<br>  <strong>Features:</strong> Color, Letter/Legal, Duplex     <br>    <strong>Location:</strong> Inside cubicle F\\n\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-908111\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Portland</h3></div><div id=\"sq-element-585671\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"> <strong>Description:</strong> HP Color Laserjet Enterprise M652<br>      <strong>Features:</strong> Color, Letter/Legal, Duplex <br>       <strong>Location:</strong> Inside cubicle F<br></p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "3055c",
      "type": "rect",
      "x": 26.1,
      "y": 13.6,
      "width": 3.4,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3055d",
      "type": "rect",
      "x": 29.5,
      "y": 10.9,
      "width": 3.5,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3055f",
      "type": "rect",
      "x": 29.5,
      "y": 8.3,
      "width": 3.3,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3055e",
      "type": "rect",
      "x": 26,
      "y": 10.8,
      "width": 3.6,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "3055g",
      "type": "rect",
      "x": 26.1,
      "y": 8.3,
      "width": 3.4,
      "height": 2.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 10,
        "stroke_dasharray": "#0080c0"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "bottom",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2046d",
      "type": "rect",
      "x": 35,
      "y": 92.1,
      "width": 2.2,
      "height": 2.7,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2046b",
      "type": "rect",
      "x": 40,
      "y": 92,
      "width": 3,
      "height": 2.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2029",
      "type": "rect",
      "x": 84.3,
      "y": 94.7,
      "width": 9.2,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "position": "left",
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2017d",
      "type": "rect",
      "x": 88,
      "y": 75.9,
      "width": 2.9,
      "height": 3.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2017a",
      "type": "rect",
      "x": 86.8,
      "y": 70.3,
      "width": 2.7,
      "height": 3.5,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "2017c",
      "type": "rect",
      "x": 85.1,
      "y": 75.9,
      "width": 2.9,
      "height": 3.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "rect-6061",
      "type": "rect",
      "x": 6.6,
      "y": 74.3,
      "width": 9.5,
      "height": 9.6,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-598061\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Adams Morgan\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: 12\\nRoom Capacity: 20\\nPhone: 9613 \\nPolycom: None\\nFeatures: SmartBoard, Multiple room arrangement options\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-821951\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Adams Morgan</h2></div><div id=\"sq-element-582811\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: 12<br>Room Capacity: 20<br>Phone: 9613 <br>Polycom: None<br>Features: SmartBoard, Multiple room arrangement options</p></div><div id=\"sq-element-338861\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "rect-9844",
      "type": "rect",
      "x": 78.7,
      "y": 14.4,
      "width": 4.5,
      "height": 4.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-624881\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Dupont\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: TBA\\nRoom Capacity: TBA\\nPhone: TBA\\nPolycom: TBA\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\".\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-247531\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Dupont</h2></div><div id=\"sq-element-242571\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: TBA<br>Room Capacity: TBA<br>Phone: TBA<br>Polycom: TBA</p></div><div id=\"sq-element-830851\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "3039",
      "type": "rect",
      "x": 52.9,
      "y": 39.3,
      "width": 6.3,
      "height": 6.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080FF",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-230761\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Cleveland Park\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: TBA\\nRoom Capacity: TBA\\nPhone: TBA\\nPolycom: TBA\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\".\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-851361\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Cleveland Park</h2></div><div id=\"sq-element-615791\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: TBA<br>Room Capacity: TBA<br>Phone: TBA<br>Polycom: TBA</p></div><div id=\"sq-element-390601\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "rect-9369",
      "type": "rect",
      "x": 78.7,
      "y": 32.4,
      "width": 4.5,
      "height": 4.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-108611\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Trinidad\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Table Seating: TBA\\nRoom Capacity: TBA\\nPhone: TBA\\nPolycom: TBA\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\".\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-965961\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Trinidad</h2></div><div id=\"sq-element-58791\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Table Seating: TBA<br>Room Capacity: TBA<br>Phone: TBA<br>Polycom: TBA</p></div><div id=\"sq-element-759521\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "2043",
      "type": "rect",
      "x": 53,
      "y": 87.5,
      "width": 3.6,
      "height": 5.3,
      "default_style": {
        "border_radius": 0,
        "background_color": "#A9A9AB",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0"
      },
      "mouseover_style": {
        "border_radius": 0,
        "background_color": "#004080",
        "background_opacity": 0.47967575187969924,
        "border_color": "#0080c0",
        "fill": "#000000"
      },
      "tooltip_style": {
        "background_opacity": 0.8999647556390977,
        "width": 400,
        "auto_width": 1
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-805361\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Image\",\"iconClass\":\"fa fa-camera\"},\"options\":{\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-4\"}}}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"CPB Employee.\"},\"layout\":{\"column_span\":{\"lg\":{\"class\":\"sq-col-lg-8\"}}}}}]}}]}",
        "squares_content": ""
      }
    },
    {
      "id": "rect-4425",
      "type": "rect",
      "x": 67.9,
      "y": 70.2,
      "width": 3.5,
      "height": 5.8,
      "default_style": {
        "border_radius": 0,
        "background_color": "#8080ff"
      },
      "mouseover_style": {
        "border_radius": 10
      },
      "tooltip_style": {
        "position": "left",
        "width": 350
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-689751\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Georgetown\",\"heading\":\"h2\"},\"font\":{\"font_size\":\"18\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Room Details TBA\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.\"},\"font\":{\"font_size\":\"10\",\"text_color\":\"#a9a9ab\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-318361\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h2 id=\"\" style=\"font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 18px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Georgetown</h2></div><div id=\"sq-element-202181\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Room Details TBA</p></div><div id=\"sq-element-5741\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 10px; font-weight: normal; font-style: normal; line-height: 22px; color: #a9a9ab; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Book this conference room directly through its calendar in Outlook. To do this, invite the “room” to your meeting as a resource when scheduling in Outlook. If you have any questions, please contact someone in IT or Office Services.</p></div><div class=\"squares-clear\"></div></div>"
      }
    },
    {
      "id": "spot-4859",
      "x": 92,
      "y": 77.2,
      "width": 20,
      "height": 20,
      "default_style": {
        "use_icon": 1,
        "icon_type": "custom",
        "icon_url": "/files/img/printer.png"
      },
      "tooltip_style": {
        "padding": 10,
        "position": "left"
      },
      "tooltip_content": {
        "content_type": "content-builder",
        "squares_json": "{\"containers\":[{\"id\":\"sq-container-84741\",\"settings\":{\"elements\":[{\"settings\":{\"name\":\"Heading\",\"iconClass\":\"fa fa-header\"},\"options\":{\"heading\":{\"text\":\"Philadelphia\"}}},{\"settings\":{\"name\":\"Paragraph\",\"iconClass\":\"fa fa-paragraph\"},\"options\":{\"text\":{\"text\":\"<b>Description:</b> HP Laserjet 600 M601\\n<b>Features:</b>Black/White, Duplex, Letter/Legal\\n<b>Location:</b> Outside 2017D\"}}}]}}]}",
        "squares_content": "<div class=\"squares-container\"><div id=\"sq-element-266381\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><h3 id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">Philadelphia</h3></div><div id=\"sq-element-815961\" class=\"squares-element sq-col-lg-12 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\"><b>Description:</b> HP Laserjet 600 M601<br><b>Features:</b>Black/White, Duplex, Letter/Legal<br><b>Location:</b> Outside 2017D</p></div><div class=\"squares-clear\"></div></div>"
      }
    }
  ]
};

/* ================ END MAP STRUCTURES ================== */



(function ($) {
  //Fill empty offices tooltips

  $.getJSON('/rest/cpbemployee_2021?_format=json').done(function (json) {
    $.each(json, function (i, employee) {
      if (employee.field_cpb_office_number == null) return true;
      officeNumber = employee.field_cpb_office_number;

      firstName = employee.field_first_name;
      lastName = employee.title;

      // Use the new Drupal 9 cpb_employee_picture Media reference field:
      if (typeof employee.field_cpb_employee_picture_export !== 'undefined') {
        if (employee.field_cpb_employee_picture_export !== null) {

          if (employee.field_cpb_employee_picture_export.media_image_1) {
            decoded = employee.field_cpb_employee_picture_export.media_image_1.replace(/\\n/g, "\\n")
              .replace(/\\'/g, "\\'")
              .replace(/\\"/g, '\\"')
              .replace(/\\&/g, "\\&")
              .replace(/\\r/g, "\\r")
              .replace(/\\t/g, "\\t")
              .replace(/\\b/g, "\\b")
              .replace(/\\f/g, "\\f")
              .replace(/[\u0000-\u0019]+/g, "");
            var a = new DOMParser().parseFromString(decoded, "text/html");
            var src = a.getElementsByTagName('img')[0].src;
            picture = src;
          }
        }
      }

      positionTitle = employee.field_title;
      phoneNumber = employee.field_phone_number;
      email = employee.field_email;
      employee.full_name = firstName + " " + lastName;

      var departmentName = employee.term_node_tid;

      // 2022-10-05 --- reverse the switch because the taxonomy uses the full name and there's no short code anymore

      switch (departmentName) {
        case "Educational Media and Learning Experiences":
          department = "EMLE";
          break;
        case "Corporate and Public Affairs":
          department = "CP&A";
          break;
        case "Chief Operating Officer":
          department = "COO";
          break;
        case "Human Resources":
          department = "HR";
          break;
        case "Executive Office":
          department = "EXEC";
          break;
        case "Information Technology":
          department = "IT";
          break;
        case "Innovation and System Strategies":
          department = "MSTRA";
          break;
        // 2022-10-05 -- Does not exist
        //case "OBA":
          //department = "Office of Business Affairs";
          //break;
        case "Office of Budget and Finance":
          department = "OBF";
          break;
        case "Office of the Corporate Secretary":
          department = "OCS";
          break;
        case "Office of the Inspector General":
          department = "OIG";
          break;
        case "Office of the General Counsel":
          department = "OGC";
          break;
        case "Office Services":
          department = "OS";
          break;
        case "Radio, Journalism, and CSG Services":
          department = "RADIO";
          break;
        case "Ready to Learn":
          department = "RTL";
          break;
        // 2022-10-06 -- Does not exist
        //case "SD.SGA":
        //  department = "System Development and Station Grants Administration";
        //  break;
        case "Television":
          department = "TVP";
          break;
        case "Engagement":
          department = "ENG";
          break;
      }

      employeeInformation = '<h3>' + employee.full_name + ' </h3><br><strong> Office: '
        + officeNumber + '</br></strong>'
        + positionTitle + '</br>'
        + departmentName + '</br>'
        + phoneNumber + '</br><a href="mailto:' + email + '">'
        + email + '</a>' + '</br>  <img src="/sites/default/files/logos/teams.svg" width="36" height="36" alt="Teams Chat Icon" target="_blank"> <a href="https://teams.microsoft.com/l/chat/0/0?users=' + email + '">Chat with '
        + firstName + '</a>';

      employeesNamesList.push(firstName + " " + lastName);

      $.each(mapItems.spots, function (i, item) {

        //Color each Department
        if (item.id == officeNumber) {

          switch (department) {
            case "C&PA":
              item.default_style.background_color = "#FAA43A";
              item.default_style.fill = "#FAA43A";
              break;
            case "COO":
              item.default_style.background_color = "#60BD68";
              item.default_style.fill = "#60BD68";
              break;
            case "HR":
              item.default_style.background_color = "#F17CB0";
              item.default_style.fill = "#F17CB0";
              break;
            case "IT":
              item.default_style.background_color = "#B2912F";
              item.default_style.fill = "#B2912F";
              break;
            case "MSTRA":
              item.default_style.background_color = "#B276B2";
              item.default_style.fill = "#B276B2";
              break;
            case "OBF":
              item.default_style.background_color = "#F15854";
              item.default_style.fill = "#F15854";
              break;
            case "OCS":
              item.default_style.background_color = "#FEC500";
              item.default_style.fill = "#FEC500";
              break;
            case "OIG":
              item.default_style.background_color = "#252048";
              item.default_style.fill = "#252048";
              break;
            case "OGC":
              item.default_style.background_color = "#A4C616";
              item.default_style.fill = "#A4C616";
              break;
            case "OS":
              item.default_style.background_color = "#CD6336";
              item.default_style.fill = "#CD6336";
              break;
            case "RADIO":
              item.default_style.background_color = "#197697";
              item.default_style.fill = "#197697";
              break;
            case "RTL":
              item.default_style.background_color = "#98CC96";
              item.default_style.fill = "#98CC96";
              break;
            case "TVP":
              item.default_style.background_color = "#FFE9A3";
              item.default_style.fill = "#FFE9A3";
              break;
            case "EXEC":
              item.default_style.background_color = "#00ffde";
              item.default_style.fill = "#00ffde";
              break;
            case "ENG":
              item.default_style.background_color = "#8700ff";
              item.default_style.fill = "#8700ff";
              break;
            default:
              item.default_style.background_color = "#A9A9AB";
              item.default_style.fill = "#A9A9AB";
              break;
          }

          //This will keep adding more elements to the tooltip in  case we have more than one people that uses one single space. Ex. Front Desk
          squaresContent = item.tooltip_content.squares_content;
          squaresContent += "<div class=\"squares-container\"><div id=\"sq-element-389841\" class=\"squares-element sq-col-lg-4 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><img src=\"" + picture + "\" id=\"\" style=\"\" class=\"\"></div><div id=\"sq-element-484441\" class=\"squares-element sq-col-lg-8 \" style=\"margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; \"><p id=\"\" style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none;  margin: 0; padding: 0;\" class=\"\">" + employeeInformation + "</p></div><div class=\"squares-clear\"></div></div>";

          item.tooltip_content.squares_content = squaresContent;


          return false;
        }
      });
    });

    //Fill any remaining tool tips as empty spaces

    $.each(mapItems.spots, function (i, item) {
      if (typeof (item.tooltip_content.squares_content) !== "undefined") {
        if (item.tooltip_content.squares_content == "") {
          item.tooltip_content.squares_content = '<h4 style="color:#FFF"><i class="fa fa-info-circle" aria-hidden="true"></i> Workspace Available</h4>';
        }
      }

    });

    function closeTooltip() {
      $('.cpb-tooltip-visible').removeClass('cpb-tooltip-visible');
      $('.close-btn').remove();

    }


    function createTooltipWindow(officeNumber) {
      //Close all other open tooltips
      $('.imp-tooltip').removeClass('cpb-tooltip-visible');

      //Open tooltip based on the office number
      $.imageMapProOpenTooltip("CPB Floorplan", officeNumber);

      $('.imp-tooltip-visible').addClass('cpb-tooltip-visible').append('<div class="close-btn"><i class="fa fa-times-circle" aria-hidden="true"></i></div>');
      $('.close-btn').click(function () { closeTooltip(); });
      $('html, body').animate({
        scrollTop: $(".cpb-tooltip-visible").offset().top - $(".cpb-tooltip-visible").height() - 80
      }, 400);

    }

    onReady(function () {
      show('cpb-floorplan', true);
      show('loading', false);
      //get url hash for office number
      var urlHash = window.location.hash.substr(1);

      if (urlHash != "") {
        createTooltipWindow(urlHash);
      }
    });

    function openTooltip(value) {
      //Find the employee based in the employee name
      $.each(json, function (i, employee) {
        if (employee.full_name == value) {
          createTooltipWindow(employee.field_cpb_office_number);
        }
      })
    }
    //Create map
    $('#cpb-floorplan').imageMapPro(mapItems);


    //search map
    var searchField = $("#cpb-employee-search");

    searchField.autocomplete({
      source: employeesNamesList,
      select: function (event, ui) {
        openTooltip(ui.item.value);
      }
    });



    searchField.keypress(function (e) {
      if (e.which == 13) {

        openTooltip($("#cpb-employee-search").val());
        return false;

      }
    });

    $("#search-btn").click(function () {
      openTooltip();
    })

  })

})(jQuery);
