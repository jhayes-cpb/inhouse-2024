(function ($) {
    $(document).ready(function () {

        $('#printer-container').imageMapPro({
            "id": 3025,
            "editor": {"tool": "select", "shapeCounter": {"spots": 2}},
            "general": {
                "name": "Printers",
                "shortcode": "Printers",
                "width": 6282,
                "height": 5619,
                "naturalWidth": 6282,
                "naturalHeight": 5619
            },
            "image": {"url": "/files/img/cpb_map_printers.png"},
            "layers": {
                "layers_list": [{
                    "id": 0,
                    "title": "3rd Floor",
                    "image_url": "cpb_map_3rd.png",
                    "image_width": 6282,
                    "image_height": 2565
                }, {
                    "id": 1,
                    "title": "2nd Floor",
                    "image_url": "cpb_map_2nd.png",
                    "image_width": 6282,
                    "image_height": 2516
                }]
            },
            "spots": [{
                "id": "spot-4166",
                "title": "Single",
                "x": 24.383,
                "y": 32.748,
                "width": 40,
                "height": 40,
                "x_image_background": 24.383,
                "y_image_background": 32.748,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-551021",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Portland"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<strong>Description:</strong> HP Color Laserjet Enterprise M652\n<strong>Features:</strong> Color, Letter/Legal, Duplex\n<strong>Location:</strong> Inside cubicle F"}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-5178",
                "title": "Double",
                "x": 85.453,
                "y": 31.059,
                "width": 40,
                "height": 40,
                "x_image_background": 85.453,
                "y_image_background": 31.059,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-387871",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Chicago"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Laserjet 600 M601\n<b>Features:</b> Black/White, Duplex, Letter/Legal\n<b>Location:</b> Outside cubicle K"}}
                                }, {
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Oakland"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Color LaserJet CP4520\n<b>Features:</b> Color, Duplex, Letter/Legal\n<b>Location:</b> Outside cubicle K"}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-9775",
                "title": "Baltimore",
                "x": 88.582,
                "y": 16.705,
                "width": 40,
                "height": 40,
                "x_image_background": 88.582,
                "y_image_background": 16.705,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"position": "left", "width": 400},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-903411",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Baltimore"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Laserjet 600 M601\n<b>Features:</b> Black/White, Duplex, Letter/Legal\n<b>Location:</b> Outside cubicle C\n"}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-2059",
                "title": "Double Copy",
                "x": 85.453,
                "y": 31.059,
                "width": 40,
                "height": 40,
                "x_image_background": 85.453,
                "y_image_background": 31.059,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"position": "left", "width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-893971",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Chicago"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Laserjet 600 M601\n<b>Features:</b> Black/White, Duplex, Letter/Legal\n<b>Location:</b> Outside cubicle K"}}
                                }, {
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Oakland"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Color LaserJet CP4520\n<b>Features:</b> Color, Duplex, Letter/Legal\n<b>Location:</b> Outside cubicle K"}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-2470",
                "title": "Cleveland",
                "x": 85.777,
                "y": 12.844,
                "width": 40,
                "height": 40,
                "x_image_background": 85.777,
                "y_image_background": 12.844,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"position": "left", "width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-540991",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Cleveland Park"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> Canon ir3245\n<b>Features:</b> Black/White, Duplex, Staple/HolePunch, Letter/Legal, Copier, Scan to Email\n<b>Location:</b> Across Dupont Huddle Room"}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-45",
                "title": "Mailroom",
                "x": 54.486,
                "y": 65.076,
                "width": 40,
                "height": 40,
                "x_image_background": 54.486,
                "y_image_background": 65.076,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-462021",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Mailroom"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> Canon ir C5185 \n<b>Features:</b>   Color, Duplex, Staple/HolePunch, Letter/Legal, Copier, Scan to Email \n<b>Location:</b> Inside the Mailroom "}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-8045",
                "title": "Los Angeles",
                "x": 54.702,
                "y": 71.228,
                "width": 40,
                "height": 40,
                "x_image_background": 54.702,
                "y_image_background": 71.228,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-955191",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Los Angeles"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<strong>Description:</strong> HP Laserjet 600 M601 <br> <strong>Features:</strong> Black/White, Duplex, Letter/Legal <br> <strong>Location:</strong> Inside Copy Room "}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-2872",
                "title": "Philadelphia",
                "x": 91.387,
                "y": 74.485,
                "width": 40,
                "height": 40,
                "x_image_background": 91.387,
                "y_image_background": 74.485,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"position": "left", "width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-379021",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Philadelphia"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Laserjet 600 M601\n<b>Features:</b>Black/White, Duplex, Letter/Legal\n<b>Location:</b> Outside 2017D"}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-1409",
                "title": "Honolulu",
                "x": 86.532,
                "y": 82.205,
                "width": 40,
                "height": 40,
                "x_image_background": 86.532,
                "y_image_background": 82.205,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"position": "left", "width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-564671",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Honolulu"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> Canon iR C5235 \n<b>Features:</b>Color, Duplex, Staple, Letter/Legal, Copier, Scan to Email \n<b>Location:</b> Outside the Executive Kitchen (2024) "}}
                                }]
                            }
                        }]
                    }
                }
            }, {
                "id": "spot-5619",
                "title": "Double Copy Copy",
                "x": 47.689,
                "y": 90.287,
                "width": 40,
                "height": 40,
                "x_image_background": 47.689,
                "y_image_background": 90.287,
                "default_style": {
                    "icon_type": "custom",
                    "icon_fontawesome_id": "print",
                    "icon_fill": "#fcba03",
                    "icon_url": "/themes/cpb_inhouse/js/print-duotone-orange.svg",
                    "icon_is_pin": 0,
                    "icon_shadow": 1
                },
                "mouseover_style": {"icon_fill": "#fcba03"},
                "tooltip_style": {"width": 400, "auto_width": 0},
                "tooltip_content": {
                    "squares_settings": {
                        "containers": [{
                            "id": "sq-container-725651",
                            "settings": {
                                "elements": [{
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Milwaukee"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Laserjet 600 M601\n<b>Features:</b> Black/White, Duplex, Letter/Legal\n<b>Location:</b> Inside 2044"}}
                                }, {
                                    "settings": {"name": "Heading", "iconClass": "fa fa-header"},
                                    "options": {
                                        "heading": {"text": "Florida"},
                                        "font": {"font_size": "18", "font_weight": "bold"}
                                    }
                                }, {
                                    "settings": {"name": "Paragraph", "iconClass": "fa fa-paragraph"},
                                    "options": {"text": {"text": "<b>Description:</b> HP Color LaserJet CP4520 \n<b>Features:</b> Color, Duplex, Letter/Legal\n<b>Location:</b> Inside 2044"}}
                                }]
                            }
                        }]
                    }
                }
            }]
        });

    });

}(jQuery));

