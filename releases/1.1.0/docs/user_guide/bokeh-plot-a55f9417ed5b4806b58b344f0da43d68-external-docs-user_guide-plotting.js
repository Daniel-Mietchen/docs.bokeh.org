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
      };var element = document.getElementById("7e0095bc-170f-46d3-87fc-65d3d71c0bf2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7e0095bc-170f-46d3-87fc-65d3d71c0bf2' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"cd2381c1-8a70-4f3c-8746-431ed7183c50":{"roots":{"references":[{"attributes":{"overlay":{"id":"27065","type":"BoxAnnotation"}},"id":"27041","type":"BoxZoomTool"},{"attributes":{},"id":"27064","type":"Selection"},{"attributes":{},"id":"27035","type":"BasicTicker"},{"attributes":{"below":[{"id":"27029","type":"LinearAxis"}],"center":[{"id":"27033","type":"Grid"},{"id":"27038","type":"Grid"}],"left":[{"id":"27034","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27055","type":"GlyphRenderer"}],"title":{"id":"27058","type":"Title"},"toolbar":{"id":"27045","type":"Toolbar"},"x_range":{"id":"27021","type":"DataRange1d"},"x_scale":{"id":"27025","type":"LinearScale"},"y_range":{"id":"27023","type":"DataRange1d"},"y_scale":{"id":"27027","type":"LinearScale"}},"id":"27020","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"27021","type":"DataRange1d"},{"attributes":{},"id":"27044","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27065","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27064","type":"Selection"},"selection_policy":{"id":"27063","type":"UnionRenderers"}},"id":"27052","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"27035","type":"BasicTicker"}},"id":"27038","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27039","type":"PanTool"},{"id":"27040","type":"WheelZoomTool"},{"id":"27041","type":"BoxZoomTool"},{"id":"27042","type":"SaveTool"},{"id":"27043","type":"ResetTool"},{"id":"27044","type":"HelpTool"}]},"id":"27045","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27054","type":"Line"},{"attributes":{},"id":"27030","type":"BasicTicker"},{"attributes":{"source":{"id":"27052","type":"ColumnDataSource"}},"id":"27056","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27053","type":"Line"},{"attributes":{},"id":"27027","type":"LinearScale"},{"attributes":{"data_source":{"id":"27052","type":"ColumnDataSource"},"glyph":{"id":"27053","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27054","type":"Line"},"selection_glyph":null,"view":{"id":"27056","type":"CDSView"}},"id":"27055","type":"GlyphRenderer"},{"attributes":{},"id":"27039","type":"PanTool"},{"attributes":{"text":""},"id":"27058","type":"Title"},{"attributes":{},"id":"27040","type":"WheelZoomTool"},{"attributes":{},"id":"27060","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27060","type":"BasicTickFormatter"},"ticker":{"id":"27035","type":"BasicTicker"}},"id":"27034","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27062","type":"BasicTickFormatter"},"ticker":{"id":"27030","type":"BasicTicker"}},"id":"27029","type":"LinearAxis"},{"attributes":{},"id":"27025","type":"LinearScale"},{"attributes":{},"id":"27062","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"27030","type":"BasicTicker"}},"id":"27033","type":"Grid"},{"attributes":{},"id":"27042","type":"SaveTool"},{"attributes":{},"id":"27063","type":"UnionRenderers"},{"attributes":{},"id":"27043","type":"ResetTool"},{"attributes":{"callback":null},"id":"27023","type":"DataRange1d"}],"root_ids":["27020"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"cd2381c1-8a70-4f3c-8746-431ed7183c50","roots":{"27020":"7e0095bc-170f-46d3-87fc-65d3d71c0bf2"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
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