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

  var elt = document.getElementById("92d89ff2-3aef-4f8a-9402-0e44e868ea1c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '92d89ff2-3aef-4f8a-9402-0e44e868ea1c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "be2ea12e-e17e-42e4-ace6-89e37025a8fd", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "80c5d993-80ed-4c0a-9e3a-fbf241074489", "type": "ColumnDataSource"}, "id": "be2ea12e-e17e-42e4-ace6-89e37025a8fd", "glyph": {"id": "5e782134-202b-4c36-a81d-66f7f2f21a7a", "type": "Text"}, "tags": [], "doc": null}}, {"id": "22674f0a-3fed-4e95-9f0e-5e8441dc4ba3", "type": "BasicTickFormatter", "attributes": {"id": "22674f0a-3fed-4e95-9f0e-5e8441dc4ba3", "doc": null, "tags": []}}, {"id": "80c5d993-80ed-4c0a-9e3a-fbf241074489", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["0", "1", "2"], "angle": [7.755806863549801, 5.301437602932776, 5.988660995905542, 6.283185307179586], "x": [-0.12252142541195167, 0.6944627912745023, 1.1961754196652608, 1.25], "y": [-1.243980908340246, -1.0393370153781818, -0.3628558465680792, -3.061616997868383e-16]}, "column_names": ["text", "angle", "y", "x"], "id": "80c5d993-80ed-4c0a-9e3a-fbf241074489", "doc": null, "tags": []}}, {"id": "5e6f074b-faef-4f66-be0a-d478d04f31a7", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "2a88414b-13f3-44fd-bc50-dcae6cfc38fd", "type": "ColumnDataSource"}, "id": "5e6f074b-faef-4f66-be0a-d478d04f31a7", "glyph": {"id": "39a1d54d-159b-4707-bb79-d86c5eea84f1", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "7e42b865-82e3-45ba-9457-2167b6111d9f", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "6e6cc086-b64d-4755-bb96-795d5c7f5632", "type": "ColumnDataSource"}, "id": "7e42b865-82e3-45ba-9457-2167b6111d9f", "glyph": {"id": "120c6020-3c69-4d1e-930c-238cdc1d4859", "type": "Text"}, "tags": [], "doc": null}}, {"id": "e1b652d8-7b30-46d6-a5bb-52f92f224a81", "type": "BasicTickFormatter", "attributes": {"id": "e1b652d8-7b30-46d6-a5bb-52f92f224a81", "doc": null, "tags": []}}, {"id": "5e782134-202b-4c36-a81d-66f7f2f21a7a", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "tags": [], "y": {"field": "y", "units": "data"}, "id": "5e782134-202b-4c36-a81d-66f7f2f21a7a", "angle": {"field": "angle", "units": "data"}, "text_align": "center", "text_baseline": "middle", "x": {"field": "x", "units": "data"}, "doc": null}}, {"id": "6e6cc086-b64d-4755-bb96-795d5c7f5632", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["cpu1", "cpu2", "cpu3"], "x": [0.26787840265556284, -0.6865496962822614, 0.38889916311372125], "y": [0.6467156727579007, -0.13656322541128954, -0.5820287286117818]}, "column_names": ["text", "y", "x"], "id": "6e6cc086-b64d-4755-bb96-795d5c7f5632", "doc": null, "tags": []}}, {"id": "16c70652-c24d-46e7-b9e2-2f9e60372d72", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"fill": ["#f22c40", "#f22c40", "#f22c40", "#f22c40"], "end": [0.3272492347489368, 0.39269908169872414, 1.1780972450961724, 2.356194490192345, 2.356194490192345], "start": [-0.06544984694978735, 0, 0.39269908169872414, 1.1780972450961724, 2.356194490192345]}, "column_names": ["fill", "end", "start"], "id": "16c70652-c24d-46e7-b9e2-2f9e60372d72", "doc": null, "tags": []}}, {"id": "a243069e-1672-42eb-b301-7852e41a2e5b", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "6b5db437-0236-4103-ba24-8384ad68f5c7", "type": "ColumnDataSource"}, "id": "a243069e-1672-42eb-b301-7852e41a2e5b", "glyph": {"id": "f88ed0e7-0e12-462b-9f35-bb64750d0f4f", "type": "Wedge"}, "tags": [], "doc": null}}, {"id": "db324dc1-2b4f-498d-b713-e271945c3383", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"fill": ["#407ee7", "#407ee7", "#407ee7", "#407ee7"], "end": [4.908738521234051, 5.694136684631499, 6.283185307179586, 6.283185307179586], "start": [4.319689898685965, 4.908738521234051, 5.694136684631499, 6.283185307179586]}, "column_names": ["fill", "end", "start"], "id": "db324dc1-2b4f-498d-b713-e271945c3383", "doc": null, "tags": []}}, {"id": "18299f9c-0099-4069-a010-6dc05c8d87e3", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "tags": [], "y": {"field": "y", "units": "data"}, "id": "18299f9c-0099-4069-a010-6dc05c8d87e3", "angle": {"field": "angle", "units": "data"}, "text_align": "center", "text_baseline": "middle", "x": {"field": "x", "units": "data"}, "doc": null}}, {"id": "5308d43c-f307-4181-b93f-ee1562329b75", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "4adf78c5-ca96-4a2d-a3c6-9817c92fed6d", "type": "ColumnDataSource"}, "id": "5308d43c-f307-4181-b93f-ee1562329b75", "glyph": {"id": "18299f9c-0099-4069-a010-6dc05c8d87e3", "type": "Text"}, "tags": [], "doc": null}}, {"id": "dc227ebf-4fd3-4437-ad2e-448f58e6fc23", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "16c70652-c24d-46e7-b9e2-2f9e60372d72", "type": "ColumnDataSource"}, "id": "dc227ebf-4fd3-4437-ad2e-448f58e6fc23", "glyph": {"id": "39a94711-321e-4636-8dcb-35834c3dd06c", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "44fef9b0-70fe-4fe0-a7ec-65cbacb22a52", "type": "BasicTicker", "attributes": {"id": "44fef9b0-70fe-4fe0-a7ec-65cbacb22a52", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "6b5db437-0236-4103-ba24-8384ad68f5c7", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"end": [2.356194490192345, 4.319689898685965, 6.283185307179586], "start": [0, 2.356194490192345, 4.319689898685965], "colors": ["#f22c40", "#5ab738", "#407ee7"]}, "column_names": ["end", "start", "colors"], "id": "6b5db437-0236-4103-ba24-8384ad68f5c7", "doc": null, "tags": []}}, {"id": "120c6020-3c69-4d1e-930c-238cdc1d4859", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "tags": [], "y": {"field": "y", "units": "data"}, "id": "120c6020-3c69-4d1e-930c-238cdc1d4859", "text_baseline": "middle", "text_align": "center", "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "cfbf7505-fdd7-44dc-b9a9-f65137b74a86", "type": "Range1d", "attributes": {"end": 2, "start": -2, "id": "cfbf7505-fdd7-44dc-b9a9-f65137b74a86", "doc": null, "tags": []}}, {"id": "2a88414b-13f3-44fd-bc50-dcae6cfc38fd", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"fill": ["#5ab738", "#5ab738", "#5ab738", "#5ab738"], "end": [3.3379421944391554, 3.5342917352885173, 4.319689898685965, 4.319689898685965], "start": [2.356194490192345, 3.3379421944391554, 3.5342917352885173, 4.319689898685965]}, "column_names": ["fill", "end", "start"], "id": "2a88414b-13f3-44fd-bc50-dcae6cfc38fd", "doc": null, "tags": []}}, {"id": "6a04b710-d510-46e1-b967-3dbe88959431", "type": "ResizeTool", "attributes": {"plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "6a04b710-d510-46e1-b967-3dbe88959431"}}, {"id": "f26d9dc1-bf07-4c4e-97de-e384350a7a4d", "type": "ToolEvents", "attributes": {"geometries": [], "id": "f26d9dc1-bf07-4c4e-97de-e384350a7a4d", "doc": null, "tags": []}}, {"id": "4adf78c5-ca96-4a2d-a3c6-9817c92fed6d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["0", "1", "2"], "angle": [5.988660995905543, 6.577709618453629, 7.0685834705770345, 7.461282552275758], "x": [-1.196175419665261, -1.1961754196652612, -0.8838834764831847, -0.4783542904563629], "y": [0.362855846568078, -0.3628558465680776, -0.8838834764831843, -1.154849415639108]}, "column_names": ["text", "angle", "y", "x"], "id": "4adf78c5-ca96-4a2d-a3c6-9817c92fed6d", "doc": null, "tags": []}}, {"id": "53c8fed1-070c-4fb6-ac37-24fbfc478008", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "53c8fed1-070c-4fb6-ac37-24fbfc478008", "plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "c679be9c-abc3-456d-95d4-18aa5ccb8184", "type": "BasicTicker", "attributes": {"id": "c679be9c-abc3-456d-95d4-18aa5ccb8184", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3a15f7eb-e138-4dcf-94e4-49ba9e3ebeaa", "type": "LinearAxis", "attributes": {"id": "3a15f7eb-e138-4dcf-94e4-49ba9e3ebeaa", "plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "e1b652d8-7b30-46d6-a5bb-52f92f224a81", "type": "BasicTickFormatter"}, "axis_label": null, "ticker": {"id": "44fef9b0-70fe-4fe0-a7ec-65cbacb22a52", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "05b1678d-3509-43c9-8201-799f8c1860e4", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "db324dc1-2b4f-498d-b713-e271945c3383", "type": "ColumnDataSource"}, "id": "05b1678d-3509-43c9-8201-799f8c1860e4", "glyph": {"id": "6171af92-c21a-48a9-9bc8-00efeee37603", "type": "AnnularWedge"}, "tags": [], "doc": null}}, {"id": "b50b5e07-6688-40aa-baa5-0065c040fec6", "type": "LinearAxis", "attributes": {"id": "b50b5e07-6688-40aa-baa5-0065c040fec6", "plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "22674f0a-3fed-4e95-9f0e-5e8441dc4ba3", "type": "BasicTickFormatter"}, "axis_label": null, "ticker": {"id": "c679be9c-abc3-456d-95d4-18aa5ccb8184", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "01276c4e-73da-4153-86d4-aed8c4e1dfef", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "01276c4e-73da-4153-86d4-aed8c4e1dfef", "plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "21dfcc05-56d4-4473-97a8-d072c0a6656c", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "21dfcc05-56d4-4473-97a8-d072c0a6656c", "plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "4bb9a0aa-d644-4201-ac8e-c0813a26f9c0", "type": "Range1d", "attributes": {"end": 2, "start": -2, "id": "4bb9a0aa-d644-4201-ac8e-c0813a26f9c0", "doc": null, "tags": []}}, {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "f26d9dc1-bf07-4c4e-97de-e384350a7a4d", "type": "ToolEvents"}, "title": null, "extra_y_ranges": {}, "renderers": [{"id": "b50b5e07-6688-40aa-baa5-0065c040fec6", "type": "LinearAxis"}, {"id": "3a15f7eb-e138-4dcf-94e4-49ba9e3ebeaa", "type": "LinearAxis"}, {"id": "a243069e-1672-42eb-b301-7852e41a2e5b", "type": "GlyphRenderer"}, {"id": "7e42b865-82e3-45ba-9457-2167b6111d9f", "type": "GlyphRenderer"}, {"id": "dc227ebf-4fd3-4437-ad2e-448f58e6fc23", "type": "GlyphRenderer"}, {"id": "4978001c-dde7-43ee-b4f5-0e2c5567cee7", "type": "GlyphRenderer"}, {"id": "5e6f074b-faef-4f66-be0a-d478d04f31a7", "type": "GlyphRenderer"}, {"id": "5308d43c-f307-4181-b93f-ee1562329b75", "type": "GlyphRenderer"}, {"id": "05b1678d-3509-43c9-8201-799f8c1860e4", "type": "GlyphRenderer"}, {"id": "be2ea12e-e17e-42e4-ace6-89e37025a8fd", "type": "GlyphRenderer"}], "id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "extra_x_ranges": {}, "doc": null, "below": [{"id": "b50b5e07-6688-40aa-baa5-0065c040fec6", "type": "LinearAxis"}], "right": [], "x_range": {"id": "cfbf7505-fdd7-44dc-b9a9-f65137b74a86", "type": "Range1d"}, "left": [{"id": "3a15f7eb-e138-4dcf-94e4-49ba9e3ebeaa", "type": "LinearAxis"}], "above": [], "tools": [{"id": "21dfcc05-56d4-4473-97a8-d072c0a6656c", "type": "PanTool"}, {"id": "53c8fed1-070c-4fb6-ac37-24fbfc478008", "type": "WheelZoomTool"}, {"id": "01276c4e-73da-4153-86d4-aed8c4e1dfef", "type": "BoxZoomTool"}, {"id": "d302fa4b-a23b-4f8b-ac1e-6f3e2420c312", "type": "PreviewSaveTool"}, {"id": "6a04b710-d510-46e1-b967-3dbe88959431", "type": "ResizeTool"}, {"id": "f9a8c58a-edb2-4b90-8e38-4b5b27301bea", "type": "ResetTool"}], "plot_width": 800, "plot_height": 800, "y_range": {"id": "4bb9a0aa-d644-4201-ac8e-c0813a26f9c0", "type": "Range1d"}, "tags": []}}, {"id": "39a94711-321e-4636-8dcb-35834c3dd06c", "type": "AnnularWedge", "attributes": {"y": {"value": 0, "units": "data"}, "inner_radius": {"value": 1, "units": "data"}, "end_angle": {"field": "end", "units": "data"}, "x": {"value": 0, "units": "data"}, "doc": null, "start_angle": {"field": "start", "units": "data"}, "tags": [], "outer_radius": {"value": 1.5, "units": "data"}, "id": "39a94711-321e-4636-8dcb-35834c3dd06c", "line_color": {"value": "white"}, "fill_color": {"field": "fill"}, "line_width": {"value": 2, "units": "data"}}}, {"id": "4978001c-dde7-43ee-b4f5-0e2c5567cee7", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "d6f46991-af2b-49f0-9b78-4c4e9fb27cd8", "type": "ColumnDataSource"}, "id": "4978001c-dde7-43ee-b4f5-0e2c5567cee7", "glyph": {"id": "142aaa13-b7ae-42d9-a72e-5440ca1c51f7", "type": "Text"}, "tags": [], "doc": null}}, {"id": "d302fa4b-a23b-4f8b-ac1e-6f3e2420c312", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "d302fa4b-a23b-4f8b-ac1e-6f3e2420c312"}}, {"id": "39a1d54d-159b-4707-bb79-d86c5eea84f1", "type": "AnnularWedge", "attributes": {"y": {"value": 0, "units": "data"}, "inner_radius": {"value": 1, "units": "data"}, "end_angle": {"field": "end", "units": "data"}, "x": {"value": 0, "units": "data"}, "doc": null, "start_angle": {"field": "start", "units": "data"}, "tags": [], "outer_radius": {"value": 1.5, "units": "data"}, "id": "39a1d54d-159b-4707-bb79-d86c5eea84f1", "line_color": {"value": "white"}, "fill_color": {"field": "fill"}, "line_width": {"value": 2, "units": "data"}}}, {"id": "f88ed0e7-0e12-462b-9f35-bb64750d0f4f", "type": "Wedge", "attributes": {"y": {"value": 0, "units": "data"}, "radius": {"value": 1, "units": "data"}, "doc": null, "x": {"value": 0, "units": "data"}, "start_angle": {"field": "start", "units": "data"}, "tags": [], "end_angle": {"field": "end", "units": "data"}, "id": "f88ed0e7-0e12-462b-9f35-bb64750d0f4f", "line_color": {"value": "white"}, "fill_color": {"field": "colors"}, "line_width": {"value": 2, "units": "data"}}}, {"id": "f9a8c58a-edb2-4b90-8e38-4b5b27301bea", "type": "ResetTool", "attributes": {"plot": {"id": "268c104b-c2fa-4d30-a7ee-9deebccbd15c", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "f9a8c58a-edb2-4b90-8e38-4b5b27301bea"}}, {"id": "142aaa13-b7ae-42d9-a72e-5440ca1c51f7", "type": "Text", "attributes": {"text": {"field": "text", "units": "data"}, "tags": [], "y": {"field": "y", "units": "data"}, "id": "142aaa13-b7ae-42d9-a72e-5440ca1c51f7", "angle": {"field": "angle", "units": "data"}, "text_align": "center", "text_baseline": "middle", "x": {"field": "x", "units": "data"}, "doc": null}}, {"id": "d6f46991-af2b-49f0-9b78-4c4e9fb27cd8", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"text": ["", "0", "1", "2"], "angle": [0.13089969389957473, 0.19634954084936207, 0.7853981633974483, 4.908738521234052, 5.497787143782138], "x": [1.239306076717263, 1.225981600504038, 0.8838834764831844, -0.24386290252016024, -0.8838834764831843], "y": [0.1631577402750645, 0.2438629025201603, 0.8838834764831843, 1.225981600504038, 0.8838834764831844]}, "column_names": ["text", "angle", "y", "x"], "id": "d6f46991-af2b-49f0-9b78-4c4e9fb27cd8", "doc": null, "tags": []}}, {"id": "6171af92-c21a-48a9-9bc8-00efeee37603", "type": "AnnularWedge", "attributes": {"y": {"value": 0, "units": "data"}, "inner_radius": {"value": 1, "units": "data"}, "end_angle": {"field": "end", "units": "data"}, "x": {"value": 0, "units": "data"}, "doc": null, "start_angle": {"field": "start", "units": "data"}, "tags": [], "outer_radius": {"value": 1.5, "units": "data"}, "id": "6171af92-c21a-48a9-9bc8-00efeee37603", "line_color": {"value": "white"}, "fill_color": {"field": "fill"}, "line_width": {"value": 2, "units": "data"}}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("92d89ff2-3aef-4f8a-9402-0e44e868ea1c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("92d89ff2-3aef-4f8a-9402-0e44e868ea1c", all_models);
    });
  }

}(this));