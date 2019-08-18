(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("6e34d8e4-79df-475a-a95c-a6f2bb10667d");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6e34d8e4-79df-475a-a95c-a6f2bb10667d' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"geometries": [], "tags": [], "doc": null, "id": "0eaee3a9-82db-4cea-866d-b77ce22ef51e"}, "type": "ToolEvents", "id": "0eaee3a9-82db-4cea-866d-b77ce22ef51e"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "axis_label_text_font": "sans-serif", "axis_label_text_font_size": {"value": "14.400000pt"}, "tags": [], "major_label_text_font_size": {"value": "10.000000pt"}, "axis_label_text_font_style": "normal", "major_label_text_font": "sans-serif", "doc": null, "major_label_text_font_style": "normal", "axis_label": "x", "formatter": {"type": "BasicTickFormatter", "id": "722a7aec-96fc-4714-ac05-ceed8d7afc79"}, "ticker": {"type": "BasicTicker", "id": "ce11b171-de8b-466c-8a16-909150357f07"}, "id": "75ba7154-d1f2-4ebb-9c3a-8977183c2777"}, "type": "LinearAxis", "id": "75ba7154-d1f2-4ebb-9c3a-8977183c2777"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "387bda8f-3715-4e20-9ac5-20af0b636b43"}, "type": "DataRange1d", "id": "387bda8f-3715-4e20-9ac5-20af0b636b43"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "axis_label_text_font": "sans-serif", "axis_label_text_font_size": {"value": "14.400000pt"}, "tags": [], "major_label_text_font_size": {"value": "10.000000pt"}, "axis_label_text_font_style": "normal", "major_label_text_font": "sans-serif", "doc": null, "major_label_text_font_style": "normal", "axis_label": "y", "formatter": {"type": "BasicTickFormatter", "id": "21ba2281-4794-4b16-8938-da93c7983c55"}, "ticker": {"type": "BasicTicker", "id": "e5f00688-c138-48c7-8f26-545e360c378d"}, "id": "7e246296-b988-4d4d-992e-d90ff9139ae7"}, "type": "LinearAxis", "id": "7e246296-b988-4d4d-992e-d90ff9139ae7"}, {"attributes": {"column_names": ["Series 0", "Series 1"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"Series 1": [1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 9.0, 9.0, 10.0, 10.0, 9.0, 9.0, 10.0, 10.0, 9.0, 9.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 13.0, 13.0, 12.0, 12.0, 13.0, 13.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 15.0, 15.0, 14.0, 14.0, 13.0, 13.0, 12.0, 12.0, 13.0, 13.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 12.0, 12.0, 11.0, 11.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 12.0, 12.0, 11.0, 11.0, 10.0, 10.0, 11.0, 11.0, 10.0, 10.0, 11.0, 11.0, 10.0, 10.0, 9.0, 9.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 9.0, 9.0, 8.0, 8.0, 7.0, 7.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 8.0, 8.0, 7.0, 7.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 17.0, 17.0, 16.0, 16.0, 17.0, 17.0, 18.0, 18.0, 19.0, 19.0, 20.0, 20.0, 19.0, 19.0, 18.0, 18.0, 19.0, 19.0, 20.0, 20.0, 19.0, 19.0, 20.0, 20.0, 21.0, 21.0], "Series 0": [0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 17.0, 17.0, 18.0, 18.0, 19.0, 19.0, 20.0, 20.0, 21.0, 21.0, 22.0, 22.0, 23.0, 23.0, 24.0, 24.0, 25.0, 25.0, 26.0, 26.0, 27.0, 27.0, 28.0, 28.0, 29.0, 29.0, 30.0, 30.0, 31.0, 31.0, 32.0, 32.0, 33.0, 33.0, 34.0, 34.0, 35.0, 35.0, 36.0, 36.0, 37.0, 37.0, 38.0, 38.0, 39.0, 39.0, 40.0, 40.0, 41.0, 41.0, 42.0, 42.0, 43.0, 43.0, 44.0, 44.0, 45.0, 45.0, 46.0, 46.0, 47.0, 47.0, 48.0, 48.0, 49.0, 49.0, 50.0, 50.0, 51.0, 51.0, 52.0, 52.0, 53.0, 53.0, 54.0, 54.0, 55.0, 55.0, 56.0, 56.0, 57.0, 57.0, 58.0, 58.0, 59.0, 59.0, 60.0, 60.0, 61.0, 61.0, 62.0, 62.0, 63.0, 63.0, 64.0, 64.0, 65.0, 65.0, 66.0, 66.0, 67.0, 67.0, 68.0, 68.0, 69.0, 69.0, 70.0, 70.0, 71.0, 71.0, 72.0, 72.0, 73.0, 73.0, 74.0, 74.0, 75.0, 75.0, 76.0, 76.0, 77.0, 77.0, 78.0, 78.0, 79.0, 79.0, 80.0, 80.0, 81.0, 81.0, 82.0, 82.0, 83.0, 83.0, 84.0, 84.0, 85.0, 85.0, 86.0, 86.0, 87.0, 87.0, 88.0, 88.0, 89.0, 89.0, 90.0, 90.0, 91.0, 91.0, 92.0, 92.0, 93.0, 93.0, 94.0, 94.0, 95.0, 95.0, 96.0, 96.0, 97.0, 97.0, 98.0, 98.0, 99.0]}, "id": "e84dffd6-f8b3-49f8-a12e-86f5e0c9077c"}, "type": "ColumnDataSource", "id": "e84dffd6-f8b3-49f8-a12e-86f5e0c9077c"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "59dd7a8e-1e25-40df-9497-6dd5ea197fc4"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "514889b7-eeeb-400b-bbb7-e57f7b955234"}, {"type": "WheelZoomTool", "id": "6cf02c0b-b18e-4470-8871-c8d37acb8ad7"}, {"type": "BoxZoomTool", "id": "6a0b3e5f-1528-442f-b476-6afcb7900e92"}, {"type": "PreviewSaveTool", "id": "c7073a7b-03c2-4207-bb3a-282a82733870"}, {"type": "ResizeTool", "id": "ea0f7af8-4491-44cd-932a-82acca2d6ea8"}, {"type": "ResetTool", "id": "c97f7ed4-158a-4a9f-9644-951f34fdbc00"}, {"type": "HelpTool", "id": "ce7215dd-7cc8-48d5-8fd8-5e78d63e430f"}], "title": "Step ggplot-based plot in Bokeh.", "extra_y_ranges": {}, "plot_width": 880, "renderers": [{"type": "LinearAxis", "id": "75ba7154-d1f2-4ebb-9c3a-8977183c2777"}, {"type": "Grid", "id": "da711555-a27c-4e88-a3f0-f7247a275fb5"}, {"type": "LinearAxis", "id": "7e246296-b988-4d4d-992e-d90ff9139ae7"}, {"type": "Grid", "id": "56389a75-6110-411f-9492-42c9c7bec834"}, {"type": "GlyphRenderer", "id": "7fd34675-c4ca-4cff-9b61-7cbd270b3e81"}, {"type": "GlyphRenderer", "id": "6150b6ee-776f-4aaf-845d-89aaa6d6a247"}], "extra_x_ranges": {}, "plot_height": 640, "tool_events": {"type": "ToolEvents", "id": "0eaee3a9-82db-4cea-866d-b77ce22ef51e"}, "above": [], "doc": null, "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613", "background_fill": "#E5E5E5", "y_range": {"type": "DataRange1d", "id": "387bda8f-3715-4e20-9ac5-20af0b636b43"}, "below": [{"type": "LinearAxis", "id": "75ba7154-d1f2-4ebb-9c3a-8977183c2777"}], "left": [{"type": "LinearAxis", "id": "7e246296-b988-4d4d-992e-d90ff9139ae7"}]}, "type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "tags": [], "doc": null, "id": "c97f7ed4-158a-4a9f-9644-951f34fdbc00"}, "type": "ResetTool", "id": "c97f7ed4-158a-4a9f-9644-951f34fdbc00"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "grid_line_color": {"value": "white"}, "tags": [], "doc": null, "id": "da711555-a27c-4e88-a3f0-f7247a275fb5", "grid_line_width": {"value": 1.4}, "ticker": {"type": "BasicTicker", "id": "ce11b171-de8b-466c-8a16-909150357f07"}, "dimension": 0}, "type": "Grid", "id": "da711555-a27c-4e88-a3f0-f7247a275fb5"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "tags": [], "doc": null, "id": "ea0f7af8-4491-44cd-932a-82acca2d6ea8"}, "type": "ResizeTool", "id": "ea0f7af8-4491-44cd-932a-82acca2d6ea8"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "tags": [], "doc": null, "id": "ce7215dd-7cc8-48d5-8fd8-5e78d63e430f"}, "type": "HelpTool", "id": "ce7215dd-7cc8-48d5-8fd8-5e78d63e430f"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "tags": [], "doc": null, "id": "c7073a7b-03c2-4207-bb3a-282a82733870"}, "type": "PreviewSaveTool", "id": "c7073a7b-03c2-4207-bb3a-282a82733870"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "grid_line_color": {"value": "white"}, "tags": [], "doc": null, "id": "56389a75-6110-411f-9492-42c9c7bec834", "grid_line_width": {"value": 1.4}, "ticker": {"type": "BasicTicker", "id": "e5f00688-c138-48c7-8f26-545e360c378d"}, "dimension": 1}, "type": "Grid", "id": "56389a75-6110-411f-9492-42c9c7bec834"}, {"attributes": {"line_color": {"value": "#000000"}, "line_alpha": {"value": 1.0}, "line_width": {"value": 1}, "doc": null, "tags": [], "y": {"field": "Series 1"}, "line_dash": [], "x": {"field": "Series 0"}, "id": "72724e0c-5ab3-44d7-948e-21bbcd5b208d"}, "type": "Line", "id": "72724e0c-5ab3-44d7-948e-21bbcd5b208d"}, {"attributes": {"doc": null, "id": "722a7aec-96fc-4714-ac05-ceed8d7afc79", "tags": []}, "type": "BasicTickFormatter", "id": "722a7aec-96fc-4714-ac05-ceed8d7afc79"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "6cf02c0b-b18e-4470-8871-c8d37acb8ad7"}, "type": "WheelZoomTool", "id": "6cf02c0b-b18e-4470-8871-c8d37acb8ad7"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "6a0b3e5f-1528-442f-b476-6afcb7900e92"}, "type": "BoxZoomTool", "id": "6a0b3e5f-1528-442f-b476-6afcb7900e92"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "e84dffd6-f8b3-49f8-a12e-86f5e0c9077c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "6150b6ee-776f-4aaf-845d-89aaa6d6a247", "glyph": {"type": "Line", "id": "72724e0c-5ab3-44d7-948e-21bbcd5b208d"}}, "type": "GlyphRenderer", "id": "6150b6ee-776f-4aaf-845d-89aaa6d6a247"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "32da0cc9-f3c9-455e-aef6-eab0615e6bbd"}, "tags": [], "doc": null, "selection_glyph": null, "id": "7fd34675-c4ca-4cff-9b61-7cbd270b3e81", "glyph": {"type": "X", "id": "5b136f08-ab75-4ccd-97f9-3d1186bfbd14"}}, "type": "GlyphRenderer", "id": "7fd34675-c4ca-4cff-9b61-7cbd270b3e81"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "59dd7a8e-1e25-40df-9497-6dd5ea197fc4"}, "type": "DataRange1d", "id": "59dd7a8e-1e25-40df-9497-6dd5ea197fc4"}, {"attributes": {"column_names": ["name"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"name": "ax_end"}, "id": "32da0cc9-f3c9-455e-aef6-eab0615e6bbd"}, "type": "ColumnDataSource", "id": "32da0cc9-f3c9-455e-aef6-eab0615e6bbd"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e5f00688-c138-48c7-8f26-545e360c378d"}, "type": "BasicTicker", "id": "e5f00688-c138-48c7-8f26-545e360c378d"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ce11b171-de8b-466c-8a16-909150357f07"}, "type": "BasicTicker", "id": "ce11b171-de8b-466c-8a16-909150357f07"}, {"attributes": {"doc": null, "id": "5b136f08-ab75-4ccd-97f9-3d1186bfbd14", "tags": []}, "type": "X", "id": "5b136f08-ab75-4ccd-97f9-3d1186bfbd14"}, {"attributes": {"doc": null, "id": "21ba2281-4794-4b16-8938-da93c7983c55", "tags": []}, "type": "BasicTickFormatter", "id": "21ba2281-4794-4b16-8938-da93c7983c55"}, {"attributes": {"plot": {"type": "Plot", "id": "fe281fd0-5d3f-44d1-b37b-5c35a6900613"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "514889b7-eeeb-400b-bbb7-e57f7b955234"}, "type": "PanTool", "id": "514889b7-eeeb-400b-bbb7-e57f7b955234"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6e34d8e4-79df-475a-a95c-a6f2bb10667d", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6e34d8e4-79df-475a-a95c-a6f2bb10667d", all_models);
    });
  }

}(this));