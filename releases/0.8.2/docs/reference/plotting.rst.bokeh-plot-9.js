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

  var elt = document.getElementById("1e61111e-b958-40a5-ae84-4f4d66117246");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1e61111e-b958-40a5-ae84-4f4d66117246' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "9c9e76d1-9975-4ac7-9b7d-3a9b021fc20d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [6, 7, 2, 4, 5], "x": [1, 2, 3, 4, 5]}, "column_names": ["x", "y"], "id": "9c9e76d1-9975-4ac7-9b7d-3a9b021fc20d", "doc": null, "tags": []}}, {"id": "96f0e79f-5403-4ac4-91c2-fe43586fbce5", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "d66f7e28-01f5-453c-9d97-83cfd0d117a3", "type": "Line"}, "name": null, "data_source": {"id": "9c9e76d1-9975-4ac7-9b7d-3a9b021fc20d", "type": "ColumnDataSource"}, "id": "96f0e79f-5403-4ac4-91c2-fe43586fbce5", "glyph": {"id": "46e45a12-b763-4c0a-bffe-7bd62955ef0f", "type": "Line"}, "tags": [], "doc": null}}, {"id": "0b154f13-8ed2-46ce-8f7f-ee008b9e8f8a", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9c9e76d1-9975-4ac7-9b7d-3a9b021fc20d", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "0b154f13-8ed2-46ce-8f7f-ee008b9e8f8a", "doc": null, "tags": []}}, {"id": "2cbe5b41-24c0-4bd7-8c6b-62961b94c6a8", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "2cbe5b41-24c0-4bd7-8c6b-62961b94c6a8", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "7141cbec-df6b-473a-a0bd-062e722d6470", "type": "ToolEvents", "attributes": {"geometries": [], "id": "7141cbec-df6b-473a-a0bd-062e722d6470", "doc": null, "tags": []}}, {"id": "6b7919f9-1d43-472d-9c3f-dd55e4f7c65b", "type": "LinearAxis", "attributes": {"id": "6b7919f9-1d43-472d-9c3f-dd55e4f7c65b", "formatter": {"id": "b518021e-8ffd-4f4d-ae32-de59bd5b1711", "type": "BasicTickFormatter"}, "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "ea93eb0d-4a87-4a63-8775-ad6200aaca4c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "95c104d8-b9dc-4c08-bae9-e6407ec318f2", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "95c104d8-b9dc-4c08-bae9-e6407ec318f2"}}, {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "7141cbec-df6b-473a-a0bd-062e722d6470", "type": "ToolEvents"}, "title": "line", "extra_y_ranges": {}, "renderers": [{"id": "6b7919f9-1d43-472d-9c3f-dd55e4f7c65b", "type": "LinearAxis"}, {"id": "1db10d7d-8d00-4b8c-a26c-241796040423", "type": "Grid"}, {"id": "8fc7231a-c193-477a-a142-63df7ea64b44", "type": "LinearAxis"}, {"id": "84e03eb0-0c22-4eb3-99e9-3ed6c2da5435", "type": "Grid"}, {"id": "96f0e79f-5403-4ac4-91c2-fe43586fbce5", "type": "GlyphRenderer"}], "id": "c7c4f508-afdc-4de2-9e43-df294b779297", "extra_x_ranges": {}, "doc": null, "below": [{"id": "6b7919f9-1d43-472d-9c3f-dd55e4f7c65b", "type": "LinearAxis"}], "right": [], "x_range": {"id": "f2884055-a143-472e-aae5-f2e6715c52f3", "type": "DataRange1d"}, "left": [{"id": "8fc7231a-c193-477a-a142-63df7ea64b44", "type": "LinearAxis"}], "above": [], "tools": [{"id": "d5be1ce6-896b-4a42-8648-2a9d2906f314", "type": "PanTool"}, {"id": "36cf0486-e051-4857-8bdb-37545d50975f", "type": "WheelZoomTool"}, {"id": "30a035b9-e389-4505-ad43-e34a5a39e1a3", "type": "BoxZoomTool"}, {"id": "95c104d8-b9dc-4c08-bae9-e6407ec318f2", "type": "PreviewSaveTool"}, {"id": "aae98762-d881-42aa-abf4-6f522135fe76", "type": "ResizeTool"}, {"id": "90346289-81b2-4305-9372-fb34a28e0c1f", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "0b154f13-8ed2-46ce-8f7f-ee008b9e8f8a", "type": "DataRange1d"}, "tags": []}}, {"id": "f2884055-a143-472e-aae5-f2e6715c52f3", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9c9e76d1-9975-4ac7-9b7d-3a9b021fc20d", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "f2884055-a143-472e-aae5-f2e6715c52f3", "doc": null, "tags": []}}, {"id": "46e45a12-b763-4c0a-bffe-7bd62955ef0f", "type": "Line", "attributes": {"tags": [], "line_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "46e45a12-b763-4c0a-bffe-7bd62955ef0f", "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "b518021e-8ffd-4f4d-ae32-de59bd5b1711", "type": "BasicTickFormatter", "attributes": {"id": "b518021e-8ffd-4f4d-ae32-de59bd5b1711", "doc": null, "tags": []}}, {"id": "30a035b9-e389-4505-ad43-e34a5a39e1a3", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "30a035b9-e389-4505-ad43-e34a5a39e1a3", "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "d5be1ce6-896b-4a42-8648-2a9d2906f314", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "d5be1ce6-896b-4a42-8648-2a9d2906f314", "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "84e03eb0-0c22-4eb3-99e9-3ed6c2da5435", "type": "Grid", "attributes": {"id": "84e03eb0-0c22-4eb3-99e9-3ed6c2da5435", "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "2cbe5b41-24c0-4bd7-8c6b-62961b94c6a8", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "8fc7231a-c193-477a-a142-63df7ea64b44", "type": "LinearAxis", "attributes": {"id": "8fc7231a-c193-477a-a142-63df7ea64b44", "formatter": {"id": "d8eabf02-a956-4a24-8352-c00f106fd014", "type": "BasicTickFormatter"}, "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "2cbe5b41-24c0-4bd7-8c6b-62961b94c6a8", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d66f7e28-01f5-453c-9d97-83cfd0d117a3", "type": "Line", "attributes": {"tags": [], "line_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "d66f7e28-01f5-453c-9d97-83cfd0d117a3", "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "ea93eb0d-4a87-4a63-8775-ad6200aaca4c", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "ea93eb0d-4a87-4a63-8775-ad6200aaca4c", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "1db10d7d-8d00-4b8c-a26c-241796040423", "type": "Grid", "attributes": {"id": "1db10d7d-8d00-4b8c-a26c-241796040423", "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "ea93eb0d-4a87-4a63-8775-ad6200aaca4c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d8eabf02-a956-4a24-8352-c00f106fd014", "type": "BasicTickFormatter", "attributes": {"id": "d8eabf02-a956-4a24-8352-c00f106fd014", "doc": null, "tags": []}}, {"id": "90346289-81b2-4305-9372-fb34a28e0c1f", "type": "ResetTool", "attributes": {"plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "90346289-81b2-4305-9372-fb34a28e0c1f"}}, {"id": "aae98762-d881-42aa-abf4-6f522135fe76", "type": "ResizeTool", "attributes": {"plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "aae98762-d881-42aa-abf4-6f522135fe76"}}, {"id": "36cf0486-e051-4857-8bdb-37545d50975f", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "36cf0486-e051-4857-8bdb-37545d50975f", "plot": {"id": "c7c4f508-afdc-4de2-9e43-df294b779297", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1e61111e-b958-40a5-ae84-4f4d66117246", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1e61111e-b958-40a5-ae84-4f4d66117246", all_models);
    });
  }

}(this));