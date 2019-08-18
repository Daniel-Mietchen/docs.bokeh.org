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

  var elt = document.getElementById("6dda20a0-9b33-4a0b-a3a2-576754dcb69c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6dda20a0-9b33-4a0b-a3a2-576754dcb69c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "930119ad-ff65-49b8-85c8-92901168880e", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "930119ad-ff65-49b8-85c8-92901168880e", "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "a45f75d3-795a-4b5d-8d70-148795dc94fe", "type": "ResetTool", "attributes": {"plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "a45f75d3-795a-4b5d-8d70-148795dc94fe"}}, {"id": "cfc6467d-24e8-4f6e-bc65-883c1dde7ddd", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "cfc6467d-24e8-4f6e-bc65-883c1dde7ddd", "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "5e5ed5b6-1fec-4af1-8bb3-2a2b5d2ef0d1", "type": "Grid", "attributes": {"id": "5e5ed5b6-1fec-4af1-8bb3-2a2b5d2ef0d1", "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "2767bf94-bff9-47bd-a18d-05eda42b8247", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "5d1e4d17-aa52-4859-b6ee-2fc3679eb082", "type": "LinearAxis", "attributes": {"id": "5d1e4d17-aa52-4859-b6ee-2fc3679eb082", "formatter": {"id": "2babb0b1-66c7-4e94-971a-ed1e7ba84653", "type": "BasicTickFormatter"}, "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "95152d0a-efda-4f47-b57d-96abf3486356", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "03686a5e-0590-47cb-bf3b-16413730b8c2", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "5d1e4d17-aa52-4859-b6ee-2fc3679eb082", "type": "LinearAxis"}, {"id": "b185c589-b22e-41be-b732-a327286a745d", "type": "Grid"}, {"id": "ba69315d-2ade-4193-a9a9-4faa2b866e1a", "type": "LinearAxis"}, {"id": "5e5ed5b6-1fec-4af1-8bb3-2a2b5d2ef0d1", "type": "Grid"}, {"id": "cb1e71c0-f5cb-4669-ad01-4e9eb5a45bb4", "type": "GlyphRenderer"}], "id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "extra_x_ranges": {}, "doc": null, "below": [{"id": "5d1e4d17-aa52-4859-b6ee-2fc3679eb082", "type": "LinearAxis"}], "right": [], "x_range": {"id": "2095412f-3711-4708-8485-6285cce4e34c", "type": "DataRange1d"}, "left": [{"id": "ba69315d-2ade-4193-a9a9-4faa2b866e1a", "type": "LinearAxis"}], "tools": [{"id": "930119ad-ff65-49b8-85c8-92901168880e", "type": "PanTool"}, {"id": "bdbc851e-fd4a-4864-a21e-bf262602e39e", "type": "WheelZoomTool"}, {"id": "cfc6467d-24e8-4f6e-bc65-883c1dde7ddd", "type": "BoxZoomTool"}, {"id": "4a31db28-e888-4986-b3b4-fee9b765d84c", "type": "PreviewSaveTool"}, {"id": "c00ae497-3b24-41a5-acf5-2544e11df133", "type": "ResizeTool"}, {"id": "a45f75d3-795a-4b5d-8d70-148795dc94fe", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "02596e04-65e8-4c92-862a-c5389277d3e4", "type": "DataRange1d"}, "tags": []}}, {"id": "bdbc851e-fd4a-4864-a21e-bf262602e39e", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "bdbc851e-fd4a-4864-a21e-bf262602e39e", "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "95152d0a-efda-4f47-b57d-96abf3486356", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "95152d0a-efda-4f47-b57d-96abf3486356", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "0106b0c6-5cc3-4d2b-96aa-496180123b16", "type": "Segment", "attributes": {"doc": null, "y1": {"field": "y1", "units": "data"}, "line_alpha": {"value": 1.0, "units": "data"}, "x1": {"field": "x1", "units": "data"}, "id": "0106b0c6-5cc3-4d2b-96aa-496180123b16", "x0": {"field": "x0", "units": "data"}, "line_color": {"value": "#F4A582"}, "y0": {"field": "y0", "units": "data"}, "tags": [], "line_width": {"value": 3, "units": "data"}}}, {"id": "02596e04-65e8-4c92-862a-c5389277d3e4", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "68ce1c60-a5ea-434a-b28c-60ff6c4d2e0e", "type": "ColumnDataSource"}, "columns": ["y0", "y1"]}], "id": "02596e04-65e8-4c92-862a-c5389277d3e4", "doc": null, "tags": []}}, {"id": "b185c589-b22e-41be-b732-a327286a745d", "type": "Grid", "attributes": {"id": "b185c589-b22e-41be-b732-a327286a745d", "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "95152d0a-efda-4f47-b57d-96abf3486356", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "68ce1c60-a5ea-434a-b28c-60ff6c4d2e0e", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x0": [1, 2, 3], "y1": [1.2, 2.5, 3.7], "x1": [1, 2, 3], "y0": [1, 2, 3]}, "column_names": ["x0", "x1", "y0", "y1"], "id": "68ce1c60-a5ea-434a-b28c-60ff6c4d2e0e", "doc": null, "tags": []}}, {"id": "233046eb-a0b1-4fe8-bbc2-32322d88341e", "type": "Segment", "attributes": {"y0": {"field": "y0", "units": "data"}, "doc": null, "y1": {"field": "y1", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}, "x1": {"field": "x1", "units": "data"}, "x0": {"field": "x0", "units": "data"}, "id": "233046eb-a0b1-4fe8-bbc2-32322d88341e", "line_color": {"value": "#1f77b4"}, "tags": [], "line_width": {"value": 3, "units": "data"}}}, {"id": "c00ae497-3b24-41a5-acf5-2544e11df133", "type": "ResizeTool", "attributes": {"plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "c00ae497-3b24-41a5-acf5-2544e11df133"}}, {"id": "2babb0b1-66c7-4e94-971a-ed1e7ba84653", "type": "BasicTickFormatter", "attributes": {"id": "2babb0b1-66c7-4e94-971a-ed1e7ba84653", "doc": null, "tags": []}}, {"id": "ba69315d-2ade-4193-a9a9-4faa2b866e1a", "type": "LinearAxis", "attributes": {"id": "ba69315d-2ade-4193-a9a9-4faa2b866e1a", "formatter": {"id": "92ab0247-1cfe-41a9-aebb-3b95801dc511", "type": "BasicTickFormatter"}, "plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "2767bf94-bff9-47bd-a18d-05eda42b8247", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "92ab0247-1cfe-41a9-aebb-3b95801dc511", "type": "BasicTickFormatter", "attributes": {"id": "92ab0247-1cfe-41a9-aebb-3b95801dc511", "doc": null, "tags": []}}, {"id": "4a31db28-e888-4986-b3b4-fee9b765d84c", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "d012cd45-cb18-4f25-aa2a-9e6ed7b0d2c8", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "4a31db28-e888-4986-b3b4-fee9b765d84c"}}, {"id": "cb1e71c0-f5cb-4669-ad01-4e9eb5a45bb4", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "233046eb-a0b1-4fe8-bbc2-32322d88341e", "type": "Segment"}, "name": null, "data_source": {"id": "68ce1c60-a5ea-434a-b28c-60ff6c4d2e0e", "type": "ColumnDataSource"}, "id": "cb1e71c0-f5cb-4669-ad01-4e9eb5a45bb4", "glyph": {"id": "0106b0c6-5cc3-4d2b-96aa-496180123b16", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "2095412f-3711-4708-8485-6285cce4e34c", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "68ce1c60-a5ea-434a-b28c-60ff6c4d2e0e", "type": "ColumnDataSource"}, "columns": ["x0", "x1"]}], "id": "2095412f-3711-4708-8485-6285cce4e34c", "doc": null, "tags": []}}, {"id": "2767bf94-bff9-47bd-a18d-05eda42b8247", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "2767bf94-bff9-47bd-a18d-05eda42b8247", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "03686a5e-0590-47cb-bf3b-16413730b8c2", "type": "ToolEvents", "attributes": {"geometries": [], "id": "03686a5e-0590-47cb-bf3b-16413730b8c2", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6dda20a0-9b33-4a0b-a3a2-576754dcb69c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6dda20a0-9b33-4a0b-a3a2-576754dcb69c", all_models);
    });
  }

}(this));