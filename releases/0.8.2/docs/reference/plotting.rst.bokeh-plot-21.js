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

  var elt = document.getElementById("3d8ac1fa-a1c6-430e-8abc-5e38048037aa");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3d8ac1fa-a1c6-430e-8abc-5e38048037aa' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "cc6762b8-60d8-4fd5-aaad-536fcd9e5641", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3], "size": [10, 20, 25]}, "column_names": ["size", "x", "y"], "id": "cc6762b8-60d8-4fd5-aaad-536fcd9e5641", "doc": null, "tags": []}}, {"id": "9d4fe7e1-8c88-475f-9eae-92b9b17ff8fd", "type": "LinearAxis", "attributes": {"id": "9d4fe7e1-8c88-475f-9eae-92b9b17ff8fd", "formatter": {"id": "c7f33df7-dac1-4496-bd9a-1533b64970bb", "type": "BasicTickFormatter"}, "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "aaf56845-f7dc-4072-bf42-3e42778744cf", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b8c304b5-1fb5-4bc8-92c7-0c2bb222e16f", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "b8c304b5-1fb5-4bc8-92c7-0c2bb222e16f", "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "7b3b98db-5254-4d3b-8f75-ea017f6ac095", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "cc6762b8-60d8-4fd5-aaad-536fcd9e5641", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "7b3b98db-5254-4d3b-8f75-ea017f6ac095", "doc": null, "tags": []}}, {"id": "c7f33df7-dac1-4496-bd9a-1533b64970bb", "type": "BasicTickFormatter", "attributes": {"id": "c7f33df7-dac1-4496-bd9a-1533b64970bb", "doc": null, "tags": []}}, {"id": "c1b4dac0-56d7-4e38-a572-363c64eb9350", "type": "ResetTool", "attributes": {"plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "c1b4dac0-56d7-4e38-a572-363c64eb9350"}}, {"id": "3a094f26-7e18-46f1-b3cf-8e3d4f92cf73", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "3a094f26-7e18-46f1-b3cf-8e3d4f92cf73", "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "e1346d4b-9e1a-4e17-a274-72c6c2a9fae9", "type": "Grid", "attributes": {"id": "e1346d4b-9e1a-4e17-a274-72c6c2a9fae9", "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "aaf56845-f7dc-4072-bf42-3e42778744cf", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ad6e5d69-99e2-4754-9958-d694c9e5db2c", "type": "ToolEvents", "attributes": {"geometries": [], "id": "ad6e5d69-99e2-4754-9958-d694c9e5db2c", "doc": null, "tags": []}}, {"id": "4c276cc1-9723-4737-bb91-e17e7fc48c85", "type": "LinearAxis", "attributes": {"id": "4c276cc1-9723-4737-bb91-e17e7fc48c85", "formatter": {"id": "7ba02a73-4ff5-4534-a319-2d395e800f48", "type": "BasicTickFormatter"}, "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "c2de81d2-74f3-45b2-9c8a-91df41336836", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "047b99ad-568f-47e7-ad98-e0477a0f14f2", "type": "ResizeTool", "attributes": {"plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "047b99ad-568f-47e7-ad98-e0477a0f14f2"}}, {"id": "aaf56845-f7dc-4072-bf42-3e42778744cf", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "aaf56845-f7dc-4072-bf42-3e42778744cf", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "b5798b65-7104-4c7b-9f83-a86b6843622f", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "d1d11a17-23af-42d2-bd66-7c5b244c1ee2", "type": "Triangle"}, "name": null, "data_source": {"id": "cc6762b8-60d8-4fd5-aaad-536fcd9e5641", "type": "ColumnDataSource"}, "id": "b5798b65-7104-4c7b-9f83-a86b6843622f", "glyph": {"id": "d02e2f0b-eee2-4687-895e-1749843815f8", "type": "Triangle"}, "tags": [], "doc": null}}, {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "ad6e5d69-99e2-4754-9958-d694c9e5db2c", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "4c276cc1-9723-4737-bb91-e17e7fc48c85", "type": "LinearAxis"}, {"id": "f3814556-4d46-439b-849d-f4662ca99ba8", "type": "Grid"}, {"id": "9d4fe7e1-8c88-475f-9eae-92b9b17ff8fd", "type": "LinearAxis"}, {"id": "e1346d4b-9e1a-4e17-a274-72c6c2a9fae9", "type": "Grid"}, {"id": "b5798b65-7104-4c7b-9f83-a86b6843622f", "type": "GlyphRenderer"}], "id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "extra_x_ranges": {}, "doc": null, "below": [{"id": "4c276cc1-9723-4737-bb91-e17e7fc48c85", "type": "LinearAxis"}], "right": [], "x_range": {"id": "7b3b98db-5254-4d3b-8f75-ea017f6ac095", "type": "DataRange1d"}, "left": [{"id": "9d4fe7e1-8c88-475f-9eae-92b9b17ff8fd", "type": "LinearAxis"}], "tools": [{"id": "8e445b33-2e57-43d3-be41-5aa0a679ad4c", "type": "PanTool"}, {"id": "b8c304b5-1fb5-4bc8-92c7-0c2bb222e16f", "type": "WheelZoomTool"}, {"id": "3a094f26-7e18-46f1-b3cf-8e3d4f92cf73", "type": "BoxZoomTool"}, {"id": "0188a342-1e3c-4301-8d4d-89798640fbc3", "type": "PreviewSaveTool"}, {"id": "047b99ad-568f-47e7-ad98-e0477a0f14f2", "type": "ResizeTool"}, {"id": "c1b4dac0-56d7-4e38-a572-363c64eb9350", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "d758d059-65d3-4f9f-a8bc-fc23467d1776", "type": "DataRange1d"}, "tags": []}}, {"id": "0188a342-1e3c-4301-8d4d-89798640fbc3", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "0188a342-1e3c-4301-8d4d-89798640fbc3"}}, {"id": "7ba02a73-4ff5-4534-a319-2d395e800f48", "type": "BasicTickFormatter", "attributes": {"id": "7ba02a73-4ff5-4534-a319-2d395e800f48", "doc": null, "tags": []}}, {"id": "8e445b33-2e57-43d3-be41-5aa0a679ad4c", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "8e445b33-2e57-43d3-be41-5aa0a679ad4c", "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "f3814556-4d46-439b-849d-f4662ca99ba8", "type": "Grid", "attributes": {"id": "f3814556-4d46-439b-849d-f4662ca99ba8", "plot": {"id": "318f3571-f4a4-4f74-a280-b4e885a69fbf", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "c2de81d2-74f3-45b2-9c8a-91df41336836", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d758d059-65d3-4f9f-a8bc-fc23467d1776", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "cc6762b8-60d8-4fd5-aaad-536fcd9e5641", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "d758d059-65d3-4f9f-a8bc-fc23467d1776", "doc": null, "tags": []}}, {"id": "d1d11a17-23af-42d2-bd66-7c5b244c1ee2", "type": "Triangle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "d1d11a17-23af-42d2-bd66-7c5b244c1ee2", "line_color": {"value": "#1f77b4"}, "size": {"field": "size", "units": "screen"}, "tags": [], "line_width": {"value": 2, "units": "data"}}}, {"id": "d02e2f0b-eee2-4687-895e-1749843815f8", "type": "Triangle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "line_width": {"value": 2, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "fill_color": {"value": "#99D594"}, "id": "d02e2f0b-eee2-4687-895e-1749843815f8", "line_color": {"value": "#99D594"}, "tags": [], "size": {"field": "size", "units": "screen"}}}, {"id": "c2de81d2-74f3-45b2-9c8a-91df41336836", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "c2de81d2-74f3-45b2-9c8a-91df41336836", "mantissas": [2, 5, 10], "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3d8ac1fa-a1c6-430e-8abc-5e38048037aa", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3d8ac1fa-a1c6-430e-8abc-5e38048037aa", all_models);
    });
  }

}(this));