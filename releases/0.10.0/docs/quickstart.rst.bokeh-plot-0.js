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

  var elt = document.getElementById("ab9c436a-0bc4-4f18-87b8-650e7b400463");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab9c436a-0bc4-4f18-87b8-650e7b400463' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"doc": null, "id": "59dcf647-b708-49b7-9474-ed70e492f2a1", "tags": []}, "type": "BasicTickFormatter", "id": "59dcf647-b708-49b7-9474-ed70e492f2a1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "axis_label": "x", "formatter": {"type": "BasicTickFormatter", "id": "59dcf647-b708-49b7-9474-ed70e492f2a1"}, "ticker": {"type": "BasicTicker", "id": "ae3a75d1-9c9f-4b82-bc32-916b5ed8ce5f"}, "id": "e17669cb-6c97-43d0-8d0f-3f652f339bf4"}, "type": "LinearAxis", "id": "e17669cb-6c97-43d0-8d0f-3f652f339bf4"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "3841c828-7a21-4655-b496-e7a3ce0a092f"}, "type": "DataRange1d", "id": "3841c828-7a21-4655-b496-e7a3ce0a092f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "id": "7f1b4027-d955-4e5f-a5eb-dd0066359a59"}, "type": "ResizeTool", "id": "7f1b4027-d955-4e5f-a5eb-dd0066359a59"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "34c4ddf7-2ac9-4a93-9356-42f25bdfcd36"}, "type": "WheelZoomTool", "id": "34c4ddf7-2ac9-4a93-9356-42f25bdfcd36"}, {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781", "attributes": {"x_range": {"type": "DataRange1d", "id": "3841c828-7a21-4655-b496-e7a3ce0a092f"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "31a2bc35-24e2-4877-91ac-4970644de6c4"}, {"type": "WheelZoomTool", "id": "34c4ddf7-2ac9-4a93-9356-42f25bdfcd36"}, {"type": "BoxZoomTool", "id": "ea86abb6-efea-44c8-adc4-6775a8e4231d"}, {"type": "PreviewSaveTool", "id": "0c301d5d-18bd-42ed-83a7-03e866e8e530"}, {"type": "ResizeTool", "id": "7f1b4027-d955-4e5f-a5eb-dd0066359a59"}, {"type": "ResetTool", "id": "d59799d4-39dd-46ba-a447-86a500df8613"}, {"type": "HelpTool", "id": "cb6d123a-1ad9-4636-8ba7-32e7d313606e"}], "title": "simple line example", "extra_y_ranges": {}, "renderers": [{"type": "LinearAxis", "id": "e17669cb-6c97-43d0-8d0f-3f652f339bf4"}, {"type": "Grid", "id": "b5b595db-3a06-4a75-a1f6-18b033d89657"}, {"type": "LinearAxis", "id": "4e8fee3c-d76a-4e0e-bd98-51fc482f90c3"}, {"type": "Grid", "id": "1d98017a-98a6-48f1-80c5-95b3166d60c2"}, {"type": "Legend", "id": "8b821c19-ac60-4b75-b042-af8fbaa6c301"}, {"type": "GlyphRenderer", "id": "1562c8e6-7669-487b-aded-1bd1d7362f28"}], "extra_x_ranges": {}, "below": [{"type": "LinearAxis", "id": "e17669cb-6c97-43d0-8d0f-3f652f339bf4"}], "tool_events": {"type": "ToolEvents", "id": "e64809e6-d08e-42e2-8dc0-7d2e95a57546"}, "above": [], "doc": null, "y_range": {"type": "DataRange1d", "id": "2be03b74-d16f-48c5-9819-e1d4fce2ebd2"}, "id": "b37b4447-d6ee-4a32-8700-381ea7119781", "left": [{"type": "LinearAxis", "id": "4e8fee3c-d76a-4e0e-bd98-51fc482f90c3"}]}}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "e64809e6-d08e-42e2-8dc0-7d2e95a57546"}, "type": "ToolEvents", "id": "e64809e6-d08e-42e2-8dc0-7d2e95a57546"}, {"attributes": {"doc": null, "id": "f9124104-a9ea-40f4-9a23-3f00fcabbad7", "tags": []}, "type": "BasicTickFormatter", "id": "f9124104-a9ea-40f4-9a23-3f00fcabbad7"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "31e09eca-f7bd-40f0-b255-9c4620049b6d"}, "type": "Line", "id": "31e09eca-f7bd-40f0-b255-9c4620049b6d"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "05b27cbf-52e0-4197-8174-d05bc8e51096"}, "type": "Line", "id": "05b27cbf-52e0-4197-8174-d05bc8e51096"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "31a2bc35-24e2-4877-91ac-4970644de6c4"}, "type": "PanTool", "id": "31a2bc35-24e2-4877-91ac-4970644de6c4"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "3d415d11-5bfc-4814-adfb-3b963c0be6ac"}, "id": "1d98017a-98a6-48f1-80c5-95b3166d60c2"}, "type": "Grid", "id": "1d98017a-98a6-48f1-80c5-95b3166d60c2"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ae3a75d1-9c9f-4b82-bc32-916b5ed8ce5f", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "ae3a75d1-9c9f-4b82-bc32-916b5ed8ce5f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "id": "cb6d123a-1ad9-4636-8ba7-32e7d313606e"}, "type": "HelpTool", "id": "cb6d123a-1ad9-4636-8ba7-32e7d313606e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "ea86abb6-efea-44c8-adc4-6775a8e4231d"}, "type": "BoxZoomTool", "id": "ea86abb6-efea-44c8-adc4-6775a8e4231d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "legends": [["Temp.", [{"type": "GlyphRenderer", "id": "1562c8e6-7669-487b-aded-1bd1d7362f28"}]]], "tags": [], "doc": null, "id": "8b821c19-ac60-4b75-b042-af8fbaa6c301"}, "type": "Legend", "id": "8b821c19-ac60-4b75-b042-af8fbaa6c301"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "3d415d11-5bfc-4814-adfb-3b963c0be6ac", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "3d415d11-5bfc-4814-adfb-3b963c0be6ac"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "axis_label": "y", "formatter": {"type": "BasicTickFormatter", "id": "f9124104-a9ea-40f4-9a23-3f00fcabbad7"}, "ticker": {"type": "BasicTicker", "id": "3d415d11-5bfc-4814-adfb-3b963c0be6ac"}, "id": "4e8fee3c-d76a-4e0e-bd98-51fc482f90c3"}, "type": "LinearAxis", "id": "4e8fee3c-d76a-4e0e-bd98-51fc482f90c3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "ae3a75d1-9c9f-4b82-bc32-916b5ed8ce5f"}, "id": "b5b595db-3a06-4a75-a1f6-18b033d89657"}, "type": "Grid", "id": "b5b595db-3a06-4a75-a1f6-18b033d89657"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "id": "0c301d5d-18bd-42ed-83a7-03e866e8e530"}, "type": "PreviewSaveTool", "id": "0c301d5d-18bd-42ed-83a7-03e866e8e530"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "2be03b74-d16f-48c5-9819-e1d4fce2ebd2"}, "type": "DataRange1d", "id": "2be03b74-d16f-48c5-9819-e1d4fce2ebd2"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "b37b4447-d6ee-4a32-8700-381ea7119781"}, "tags": [], "doc": null, "id": "d59799d4-39dd-46ba-a447-86a500df8613"}, "type": "ResetTool", "id": "d59799d4-39dd-46ba-a447-86a500df8613"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [6, 7, 2, 4, 5], "x": [1, 2, 3, 4, 5]}, "id": "0df79839-6dd6-49e6-9263-46ec90644703"}, "type": "ColumnDataSource", "id": "0df79839-6dd6-49e6-9263-46ec90644703"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "05b27cbf-52e0-4197-8174-d05bc8e51096"}, "data_source": {"type": "ColumnDataSource", "id": "0df79839-6dd6-49e6-9263-46ec90644703"}, "tags": [], "doc": null, "selection_glyph": null, "id": "1562c8e6-7669-487b-aded-1bd1d7362f28", "glyph": {"type": "Line", "id": "31e09eca-f7bd-40f0-b255-9c4620049b6d"}}, "type": "GlyphRenderer", "id": "1562c8e6-7669-487b-aded-1bd1d7362f28"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ab9c436a-0bc4-4f18-87b8-650e7b400463", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ab9c436a-0bc4-4f18-87b8-650e7b400463", all_models);
    });
  }

}(this));