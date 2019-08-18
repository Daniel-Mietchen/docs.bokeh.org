document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("6b21d73a-d456-486b-8725-1858ef620295");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b21d73a-d456-486b-8725-1858ef620295' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"156c8e89-93a7-4bef-891c-6237096a53ce":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2e952e90-e0d9-44e7-bf3a-a04896055c90","type":"Circle"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"cee48ab9-021a-4641-bb2e-5f7a6c1e3e95","type":"GlyphRenderer"}]},"id":"e0b3fe82-3d00-4bd1-9462-ab797e91d06d","type":"LegendItem"},{"attributes":{"items":[{"id":"c0394ffa-be20-4a61-9582-679eb367efc9","type":"LegendItem"},{"id":"80b9c9a4-0d2b-447f-8e06-6fb1d6cf4570","type":"LegendItem"},{"id":"e0b3fe82-3d00-4bd1-9462-ab797e91d06d","type":"LegendItem"},{"id":"35ea3f3f-c46d-4fc2-a8b7-b4fa6a9de1bf","type":"LegendItem"},{"id":"997955f5-7f76-42fc-b642-13ab926dc47c","type":"LegendItem"}],"location":"top_left","plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"a5d6f5c0-d9ea-43e5-84fc-9a03e1b7f114","type":"Legend"},{"attributes":{"dimension":1,"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"},"ticker":{"id":"7b823a97-20a5-4402-8385-358050300858","type":"BasicTicker"}},"id":"c865b301-4c16-408c-bd81-c3f351abf9a4","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":[250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0],"y_values":[88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107]}},"id":"e11ee5ac-3cdb-44fa-91b8-a0ec66930a67","type":"ColumnDataSource"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"11e91c2a-2ae3-421b-a03b-b7e0f7a90353","type":"GlyphRenderer"}]},"id":"c0394ffa-be20-4a61-9582-679eb367efc9","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":[98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0],"y_values":[63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97]}},"id":"0a70eee9-ca32-4c17-857e-33d94904f3a1","type":"ColumnDataSource"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"884299f1-e861-47be-bc29-5eb32e9cd59e","type":"GlyphRenderer"}]},"id":"35ea3f3f-c46d-4fc2-a8b7-b4fa6a9de1bf","type":"LegendItem"},{"attributes":{"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"62777824-33ad-4a3a-93f0-0e194bb0216b","type":"HelpTool"},{"attributes":{"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"30d383bd-5b31-4178-8d47-2f0149ff22e7","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e60de9b6-b479-475e-bbbc-28387ed6f24e","type":"PanTool"},{"id":"30d383bd-5b31-4178-8d47-2f0149ff22e7","type":"WheelZoomTool"},{"id":"550640e3-8937-4d46-895b-faaee00b94f5","type":"BoxZoomTool"},{"id":"8a40a513-df23-414a-8607-a431509e700d","type":"SaveTool"},{"id":"2d3031d8-24b8-43e0-8747-ec896e3e51ce","type":"ResetTool"},{"id":"62777824-33ad-4a3a-93f0-0e194bb0216b","type":"HelpTool"}]},"id":"48432a7f-ec26-41f4-97fd-a3af156e1ecf","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":[121.0,131.0,183.0],"y_values":[67,103,77]}},"id":"bc629507-fe91-4ba2-b1b4-31921338bed0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0a70eee9-ca32-4c17-857e-33d94904f3a1","type":"ColumnDataSource"},"glyph":{"id":"56c7d575-49e4-432a-aa75-d8f3711f2551","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7e4e3a71-4298-44e3-9127-3cc4dad5947c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"HP vs DISPL (shaded by CYL)"},"id":"4683ed0d-3a72-4156-b775-08283c9092a6","type":"Title"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":[400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"90a4b1dd-766e-4465-827a-27d50ff1cb50","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"332b6a04-f570-4bef-a4f0-190bb4b2c078","type":"BoxAnnotation"},"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"550640e3-8937-4d46-895b-faaee00b94f5","type":"BoxZoomTool"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"6d1fb8f9-99a2-4f91-85f0-0bb66247bfb2","type":"BasicTickFormatter"},"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"},"ticker":{"id":"58a4b41c-ce9b-4c63-8d72-e2e54ec733fc","type":"BasicTicker"}},"id":"5dbf3ca5-d53c-4474-967f-9f23edbe88fa","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e55b6fbf-0403-4c59-9ec9-9a5854e4bc8b","type":"ColumnDataSource"},"glyph":{"id":"2e81aee2-59d9-4a65-9a00-7616a8a9e890","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"11e91c2a-2ae3-421b-a03b-b7e0f7a90353","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"90a4b1dd-766e-4465-827a-27d50ff1cb50","type":"ColumnDataSource"},"glyph":{"id":"2e952e90-e0d9-44e7-bf3a-a04896055c90","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"feeeae4a-b8be-474c-b02a-456775bd31e7","type":"GlyphRenderer"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"feeeae4a-b8be-474c-b02a-456775bd31e7","type":"GlyphRenderer"}]},"id":"997955f5-7f76-42fc-b642-13ab926dc47c","type":"LegendItem"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"ebb22f88-5163-49f4-b0ed-70666ca29528","type":"Range1d"},{"attributes":{"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"8a40a513-df23-414a-8607-a431509e700d","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2e81aee2-59d9-4a65-9a00-7616a8a9e890","type":"Circle"},{"attributes":{"below":[{"id":"5dbf3ca5-d53c-4474-967f-9f23edbe88fa","type":"LinearAxis"}],"height":400,"left":[{"id":"ba388e96-3218-46a4-a33a-d3f9f69adb6b","type":"LinearAxis"}],"renderers":[{"id":"332b6a04-f570-4bef-a4f0-190bb4b2c078","type":"BoxAnnotation"},{"id":"11e91c2a-2ae3-421b-a03b-b7e0f7a90353","type":"GlyphRenderer"},{"id":"7e4e3a71-4298-44e3-9127-3cc4dad5947c","type":"GlyphRenderer"},{"id":"cee48ab9-021a-4641-bb2e-5f7a6c1e3e95","type":"GlyphRenderer"},{"id":"884299f1-e861-47be-bc29-5eb32e9cd59e","type":"GlyphRenderer"},{"id":"feeeae4a-b8be-474c-b02a-456775bd31e7","type":"GlyphRenderer"},{"id":"a5d6f5c0-d9ea-43e5-84fc-9a03e1b7f114","type":"Legend"},{"id":"5dbf3ca5-d53c-4474-967f-9f23edbe88fa","type":"LinearAxis"},{"id":"ba388e96-3218-46a4-a33a-d3f9f69adb6b","type":"LinearAxis"},{"id":"33ecba88-f8a5-425f-a625-f4d693e5aeb8","type":"Grid"},{"id":"c865b301-4c16-408c-bd81-c3f351abf9a4","type":"Grid"}],"title":{"id":"4683ed0d-3a72-4156-b775-08283c9092a6","type":"Title"},"tool_events":{"id":"bb49fc9c-eae7-4a34-a9de-8ff57420432b","type":"ToolEvents"},"toolbar":{"id":"48432a7f-ec26-41f4-97fd-a3af156e1ecf","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"58ba82ac-b9f4-423b-ab3c-d68b3d641893","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ebb22f88-5163-49f4-b0ed-70666ca29528","type":"Range1d"}},"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"},"ticker":{"id":"58a4b41c-ce9b-4c63-8d72-e2e54ec733fc","type":"BasicTicker"}},"id":"33ecba88-f8a5-425f-a625-f4d693e5aeb8","type":"Grid"},{"attributes":{},"id":"6d1fb8f9-99a2-4f91-85f0-0bb66247bfb2","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"7e4e3a71-4298-44e3-9127-3cc4dad5947c","type":"GlyphRenderer"}]},"id":"80b9c9a4-0d2b-447f-8e06-6fb1d6cf4570","type":"LegendItem"},{"attributes":{"data_source":{"id":"bc629507-fe91-4ba2-b1b4-31921338bed0","type":"ColumnDataSource"},"glyph":{"id":"bf3e54ca-0ad6-4fac-89c6-064eed0f753c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cee48ab9-021a-4641-bb2e-5f7a6c1e3e95","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"332b6a04-f570-4bef-a4f0-190bb4b2c078","type":"BoxAnnotation"},{"attributes":{},"id":"f16d9c40-a404-430b-9601-0705a2cb9f68","type":"BasicTickFormatter"},{"attributes":{},"id":"58a4b41c-ce9b-4c63-8d72-e2e54ec733fc","type":"BasicTicker"},{"attributes":{},"id":"bb49fc9c-eae7-4a34-a9de-8ff57420432b","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"56c7d575-49e4-432a-aa75-d8f3711f2551","type":"Circle"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":[80.0,70.0,70.0,70.0],"y_values":[110,100,90,97]}},"id":"e55b6fbf-0403-4c59-9ec9-9a5854e4bc8b","type":"ColumnDataSource"},{"attributes":{},"id":"7b823a97-20a5-4402-8385-358050300858","type":"BasicTicker"},{"attributes":{"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"e60de9b6-b479-475e-bbbc-28387ed6f24e","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"bf3e54ca-0ad6-4fac-89c6-064eed0f753c","type":"Circle"},{"attributes":{"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"}},"id":"2d3031d8-24b8-43e0-8747-ec896e3e51ce","type":"ResetTool"},{"attributes":{"data_source":{"id":"e11ee5ac-3cdb-44fa-91b8-a0ec66930a67","type":"ColumnDataSource"},"glyph":{"id":"7bb9b735-755d-430c-b2c2-1e6704438a44","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"884299f1-e861-47be-bc29-5eb32e9cd59e","type":"GlyphRenderer"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"f16d9c40-a404-430b-9601-0705a2cb9f68","type":"BasicTickFormatter"},"plot":{"id":"2e24827f-a884-4a8f-8523-657dfe164fda","subtype":"Chart","type":"Plot"},"ticker":{"id":"7b823a97-20a5-4402-8385-358050300858","type":"BasicTicker"}},"id":"ba388e96-3218-46a4-a33a-d3f9f69adb6b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7bb9b735-755d-430c-b2c2-1e6704438a44","type":"Circle"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"58ba82ac-b9f4-423b-ab3c-d68b3d641893","type":"Range1d"}],"root_ids":["2e24827f-a884-4a8f-8523-657dfe164fda"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"156c8e89-93a7-4bef-891c-6237096a53ce","elementid":"6b21d73a-d456-486b-8725-1858ef620295","modelid":"2e24827f-a884-4a8f-8523-657dfe164fda"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});