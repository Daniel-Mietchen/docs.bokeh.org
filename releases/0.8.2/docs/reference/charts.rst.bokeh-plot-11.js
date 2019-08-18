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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("ee2afaaa-b355-4e86-89ea-b47f9a749e40");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee2afaaa-b355-4e86-89ea-b47f9a749e40' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "cae10dc1-9a6d-404e-b601-fdf3fe4fa7c4", "type": "Grid", "attributes": {"id": "cae10dc1-9a6d-404e-b601-fdf3fe4fa7c4", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "dimension": 1, "ticker": {"id": "8457283d-5e8b-432e-a81a-57b218a384a3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f17aad05-60e8-4270-8316-b1f4be8a8fcb", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "24a905f3-3ffd-4eb8-884b-3e5eabfe8c36", "type": "ColumnDataSource"}, "id": "f17aad05-60e8-4270-8316-b1f4be8a8fcb", "glyph": {"id": "4baf7990-cca6-439f-8903-55e9fa20ed47", "type": "Line"}, "tags": [], "doc": null}}, {"id": "4baf7990-cca6-439f-8903-55e9fa20ed47", "type": "Line", "attributes": {"tags": [], "y": {"field": "y_jython", "units": "data"}, "id": "4baf7990-cca6-439f-8903-55e9fa20ed47", "line_color": {"value": "#407ee7"}, "doc": null, "x": {"field": "x_jython", "units": "data"}}}, {"id": "23ed098c-846d-4aff-82a8-e52d6e9b213b", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "23ed098c-846d-4aff-82a8-e52d6e9b213b", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "e32a0c19-c131-430a-850d-578f1ab1a9b9", "type": "LinearAxis", "attributes": {"id": "e32a0c19-c131-430a-850d-578f1ab1a9b9", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "eb0736d4-1b27-402d-8f84-639548910cff", "type": "BasicTickFormatter"}, "axis_label": "Languages", "ticker": {"id": "8457283d-5e8b-432e-a81a-57b218a384a3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ee5f417f-4eb9-46ec-83c9-7f5a3b950ce9", "type": "ToolEvents", "attributes": {"geometries": [], "id": "ee5f417f-4eb9-46ec-83c9-7f5a3b950ce9", "doc": null, "tags": []}}, {"id": "8f5a293e-867f-4591-94fa-838c37824378", "type": "Grid", "attributes": {"id": "8f5a293e-867f-4591-94fa-838c37824378", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "dimension": 0, "ticker": {"id": "6306fe54-b5fb-4e10-9631-2680d1e108b4", "type": "DatetimeTicker"}, "doc": null, "tags": []}}, {"id": "442e0123-0402-4b54-94de-d4c6ca2e9daa", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "442e0123-0402-4b54-94de-d4c6ca2e9daa", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "1b2011df-1322-436a-ac7a-d597c61c50e7", "type": "Line", "attributes": {"tags": [], "y": {"field": "y_pypy", "units": "data"}, "id": "1b2011df-1322-436a-ac7a-d597c61c50e7", "line_color": {"value": "#5ab738"}, "doc": null, "x": {"field": "x_pypy", "units": "data"}}}, {"id": "eb0736d4-1b27-402d-8f84-639548910cff", "type": "BasicTickFormatter", "attributes": {"id": "eb0736d4-1b27-402d-8f84-639548910cff", "doc": null, "tags": []}}, {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "ee5f417f-4eb9-46ec-83c9-7f5a3b950ce9", "type": "ToolEvents"}, "title": "TimeSeries", "extra_y_ranges": {}, "renderers": [{"id": "8990742f-e804-4529-a4b5-b3e0b7713336", "type": "DatetimeAxis"}, {"id": "e32a0c19-c131-430a-850d-578f1ab1a9b9", "type": "LinearAxis"}, {"id": "8f5a293e-867f-4591-94fa-838c37824378", "type": "Grid"}, {"id": "cae10dc1-9a6d-404e-b601-fdf3fe4fa7c4", "type": "Grid"}, {"id": "eebe1986-857d-4ac9-baec-527ce065168d", "type": "GlyphRenderer"}, {"id": "e8b739da-d239-49fe-b40d-144df6a5d137", "type": "GlyphRenderer"}, {"id": "f17aad05-60e8-4270-8316-b1f4be8a8fcb", "type": "GlyphRenderer"}, {"id": "3be74ead-59a2-49ec-bc5f-ddce513caf20", "type": "Legend"}], "id": "d2fc5e70-780d-45a8-920f-451f691b570a", "extra_x_ranges": {}, "doc": null, "below": [{"id": "8990742f-e804-4529-a4b5-b3e0b7713336", "type": "DatetimeAxis"}], "right": [], "x_range": {"id": "51d68fc9-ee66-4a70-bc7a-69070ae2f0a5", "type": "DataRange1d"}, "left": [{"id": "e32a0c19-c131-430a-850d-578f1ab1a9b9", "type": "LinearAxis"}], "above": [], "tools": [{"id": "23ed098c-846d-4aff-82a8-e52d6e9b213b", "type": "PanTool"}, {"id": "859078dd-534f-4601-aa80-3409f6bbe2bf", "type": "WheelZoomTool"}, {"id": "442e0123-0402-4b54-94de-d4c6ca2e9daa", "type": "BoxZoomTool"}, {"id": "eafef3e3-1ad0-4464-aebb-9d49f08d6f99", "type": "PreviewSaveTool"}, {"id": "8a1cbb1c-6a09-4042-bbda-e88b45c8a7e4", "type": "ResizeTool"}, {"id": "56ee5504-fa92-407e-b1cf-452bff0c5b4d", "type": "ResetTool"}], "plot_width": 600, "plot_height": 400, "y_range": {"id": "87b0e07c-486a-416e-ba22-7a5d9f6801b5", "type": "Range1d"}, "tags": []}}, {"id": "e8b739da-d239-49fe-b40d-144df6a5d137", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "24a905f3-3ffd-4eb8-884b-3e5eabfe8c36", "type": "ColumnDataSource"}, "id": "e8b739da-d239-49fe-b40d-144df6a5d137", "glyph": {"id": "1b2011df-1322-436a-ac7a-d597c61c50e7", "type": "Line"}, "tags": [], "doc": null}}, {"id": "eafef3e3-1ad0-4464-aebb-9d49f08d6f99", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "eafef3e3-1ad0-4464-aebb-9d49f08d6f99"}}, {"id": "8a1cbb1c-6a09-4042-bbda-e88b45c8a7e4", "type": "ResizeTool", "attributes": {"plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "8a1cbb1c-6a09-4042-bbda-e88b45c8a7e4"}}, {"id": "859078dd-534f-4601-aa80-3409f6bbe2bf", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "859078dd-534f-4601-aa80-3409f6bbe2bf", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "8990742f-e804-4529-a4b5-b3e0b7713336", "type": "DatetimeAxis", "attributes": {"id": "8990742f-e804-4529-a4b5-b3e0b7713336", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "e34dc8b9-0898-41d9-9715-8940afabf218", "type": "DatetimeTickFormatter"}, "axis_label": null, "ticker": {"id": "6306fe54-b5fb-4e10-9631-2680d1e108b4", "type": "DatetimeTicker"}, "doc": null, "tags": []}}, {"id": "e34dc8b9-0898-41d9-9715-8940afabf218", "type": "DatetimeTickFormatter", "attributes": {"id": "e34dc8b9-0898-41d9-9715-8940afabf218", "formats": {}, "doc": null, "tags": []}}, {"id": "ee5a931f-d11d-4f51-9d4b-0cbc99c94053", "type": "Line", "attributes": {"tags": [], "y": {"field": "y_python", "units": "data"}, "id": "ee5a931f-d11d-4f51-9d4b-0cbc99c94053", "line_color": {"value": "#f22c40"}, "doc": null, "x": {"field": "x_python", "units": "data"}}}, {"id": "24a905f3-3ffd-4eb8-884b-3e5eabfe8c36", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x_pypy": [1427310856000.0, 1427310916000.0, 1427310976000.0, 1427311036000.0, 1427311096000.0], "x_jython": [1427310856000.0, 1427310916000.0, 1427310976000.0, 1427311036000.0, 1427311096000.0], "y_python": [2, 3, 7, 5, 26], "x_python": [1427310856000.0, 1427310916000.0, 1427310976000.0, 1427311036000.0, 1427311096000.0], "y_jython": [22, 43, 10, 25, 26], "y_pypy": [12, 33, 47, 15, 126]}, "column_names": ["x_jython", "y_pypy", "x_python", "y_jython", "y_python", "x_pypy"], "id": "24a905f3-3ffd-4eb8-884b-3e5eabfe8c36", "doc": null, "tags": []}}, {"id": "51d68fc9-ee66-4a70-bc7a-69070ae2f0a5", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "24a905f3-3ffd-4eb8-884b-3e5eabfe8c36", "type": "ColumnDataSource"}, "columns": ["x_python"]}], "id": "51d68fc9-ee66-4a70-bc7a-69070ae2f0a5", "doc": null, "tags": []}}, {"id": "3be74ead-59a2-49ec-bc5f-ddce513caf20", "type": "Legend", "attributes": {"legends": [["python", [{"id": "eebe1986-857d-4ac9-baec-527ce065168d", "type": "GlyphRenderer"}]], ["pypy", [{"id": "e8b739da-d239-49fe-b40d-144df6a5d137", "type": "GlyphRenderer"}]], ["jython", [{"id": "f17aad05-60e8-4270-8316-b1f4be8a8fcb", "type": "GlyphRenderer"}]]], "orientation": "top_left", "id": "3be74ead-59a2-49ec-bc5f-ddce513caf20", "plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "6306fe54-b5fb-4e10-9631-2680d1e108b4", "type": "DatetimeTicker", "attributes": {"id": "6306fe54-b5fb-4e10-9631-2680d1e108b4", "doc": null, "tags": []}}, {"id": "eebe1986-857d-4ac9-baec-527ce065168d", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "24a905f3-3ffd-4eb8-884b-3e5eabfe8c36", "type": "ColumnDataSource"}, "id": "eebe1986-857d-4ac9-baec-527ce065168d", "glyph": {"id": "ee5a931f-d11d-4f51-9d4b-0cbc99c94053", "type": "Line"}, "tags": [], "doc": null}}, {"id": "56ee5504-fa92-407e-b1cf-452bff0c5b4d", "type": "ResetTool", "attributes": {"plot": {"id": "d2fc5e70-780d-45a8-920f-451f691b570a", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "56ee5504-fa92-407e-b1cf-452bff0c5b4d"}}, {"id": "87b0e07c-486a-416e-ba22-7a5d9f6801b5", "type": "Range1d", "attributes": {"end": 138.4, "start": -10.4, "id": "87b0e07c-486a-416e-ba22-7a5d9f6801b5", "doc": null, "tags": []}}, {"id": "8457283d-5e8b-432e-a81a-57b218a384a3", "type": "BasicTicker", "attributes": {"id": "8457283d-5e8b-432e-a81a-57b218a384a3", "mantissas": [2, 5, 10], "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ee2afaaa-b355-4e86-89ea-b47f9a749e40", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ee2afaaa-b355-4e86-89ea-b47f9a749e40", all_models);
    });
  }

}(this));