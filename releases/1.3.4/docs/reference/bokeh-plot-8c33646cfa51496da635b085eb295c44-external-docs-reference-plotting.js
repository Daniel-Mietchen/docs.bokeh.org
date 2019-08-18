(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("03aae4aa-3efe-4650-a4d2-e8c2d4277397");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '03aae4aa-3efe-4650-a4d2-e8c2d4277397' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"d8e1d4ce-4e98-44b1-ab41-170d7accda13":{"roots":{"references":[{"attributes":{"text":""},"id":"16072","type":"Title"},{"attributes":{},"id":"16039","type":"LinearScale"},{"attributes":{"callback":null},"id":"16037","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"16049","type":"BasicTicker"}},"id":"16052","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16068","type":"MultiLine"},{"attributes":{},"id":"16054","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"16044","type":"BasicTicker"}},"id":"16047","type":"Grid"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16067","type":"MultiLine"},{"attributes":{"overlay":{"id":"16079","type":"BoxAnnotation"}},"id":"16055","type":"BoxZoomTool"},{"attributes":{},"id":"16044","type":"BasicTicker"},{"attributes":{"data_source":{"id":"16066","type":"ColumnDataSource"},"glyph":{"id":"16067","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16068","type":"MultiLine"},"selection_glyph":null,"view":{"id":"16070","type":"CDSView"}},"id":"16069","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"16074","type":"BasicTickFormatter"},"ticker":{"id":"16049","type":"BasicTicker"}},"id":"16048","type":"LinearAxis"},{"attributes":{},"id":"16056","type":"SaveTool"},{"attributes":{},"id":"16076","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"16076","type":"BasicTickFormatter"},"ticker":{"id":"16044","type":"BasicTicker"}},"id":"16043","type":"LinearAxis"},{"attributes":{},"id":"16077","type":"Selection"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"16077","type":"Selection"},"selection_policy":{"id":"16078","type":"UnionRenderers"}},"id":"16066","type":"ColumnDataSource"},{"attributes":{},"id":"16057","type":"ResetTool"},{"attributes":{"callback":null},"id":"16035","type":"DataRange1d"},{"attributes":{},"id":"16041","type":"LinearScale"},{"attributes":{"source":{"id":"16066","type":"ColumnDataSource"}},"id":"16070","type":"CDSView"},{"attributes":{},"id":"16074","type":"BasicTickFormatter"},{"attributes":{},"id":"16053","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16079","type":"BoxAnnotation"},{"attributes":{},"id":"16058","type":"HelpTool"},{"attributes":{},"id":"16078","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16053","type":"PanTool"},{"id":"16054","type":"WheelZoomTool"},{"id":"16055","type":"BoxZoomTool"},{"id":"16056","type":"SaveTool"},{"id":"16057","type":"ResetTool"},{"id":"16058","type":"HelpTool"}]},"id":"16059","type":"Toolbar"},{"attributes":{"below":[{"id":"16043","type":"LinearAxis"}],"center":[{"id":"16047","type":"Grid"},{"id":"16052","type":"Grid"}],"left":[{"id":"16048","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16069","type":"GlyphRenderer"}],"title":{"id":"16072","type":"Title"},"toolbar":{"id":"16059","type":"Toolbar"},"x_range":{"id":"16035","type":"DataRange1d"},"x_scale":{"id":"16039","type":"LinearScale"},"y_range":{"id":"16037","type":"DataRange1d"},"y_scale":{"id":"16041","type":"LinearScale"}},"id":"16034","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16049","type":"BasicTicker"}],"root_ids":["16034"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"d8e1d4ce-4e98-44b1-ab41-170d7accda13","roots":{"16034":"03aae4aa-3efe-4650-a4d2-e8c2d4277397"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();