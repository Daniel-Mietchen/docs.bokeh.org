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
      };var element = document.getElementById("938403c9-f1ae-4e29-87bf-8a60cf97161f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '938403c9-f1ae-4e29-87bf-8a60cf97161f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2f858514-0e9c-46d1-b8ec-b3384f34ae88":{"roots":{"references":[{"attributes":{},"id":"32112","type":"LinearScale"},{"attributes":{"text":""},"id":"32143","type":"Title"},{"attributes":{},"id":"32129","type":"HelpTool"},{"attributes":{},"id":"32120","type":"BasicTicker"},{"attributes":{"formatter":{"id":"32147","type":"BasicTickFormatter"},"ticker":{"id":"32115","type":"BasicTicker"}},"id":"32114","type":"LinearAxis"},{"attributes":{},"id":"32125","type":"WheelZoomTool"},{"attributes":{},"id":"32145","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"32137","type":"ColumnDataSource"},"glyph":{"id":"32138","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32139","type":"Circle"},"selection_glyph":null,"view":{"id":"32141","type":"CDSView"}},"id":"32140","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32138","type":"Circle"},{"attributes":{},"id":"32147","type":"BasicTickFormatter"},{"attributes":{},"id":"32124","type":"PanTool"},{"attributes":{"callback":null},"id":"32108","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32139","type":"Circle"},{"attributes":{"below":[{"id":"32114","type":"LinearAxis"}],"center":[{"id":"32118","type":"Grid"},{"id":"32123","type":"Grid"}],"left":[{"id":"32119","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"32140","type":"GlyphRenderer"}],"title":{"id":"32143","type":"Title"},"toolbar":{"id":"32130","type":"Toolbar"},"x_range":{"id":"32106","type":"DataRange1d"},"x_scale":{"id":"32110","type":"LinearScale"},"y_range":{"id":"32108","type":"DataRange1d"},"y_scale":{"id":"32112","type":"LinearScale"}},"id":"32105","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32148","type":"UnionRenderers"},{"attributes":{"source":{"id":"32137","type":"ColumnDataSource"}},"id":"32141","type":"CDSView"},{"attributes":{},"id":"32110","type":"LinearScale"},{"attributes":{},"id":"32149","type":"Selection"},{"attributes":{"callback":null},"id":"32106","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"32120","type":"BasicTicker"}},"id":"32123","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32150","type":"BoxAnnotation"},{"attributes":{},"id":"32128","type":"ResetTool"},{"attributes":{"overlay":{"id":"32150","type":"BoxAnnotation"}},"id":"32126","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32124","type":"PanTool"},{"id":"32125","type":"WheelZoomTool"},{"id":"32126","type":"BoxZoomTool"},{"id":"32127","type":"SaveTool"},{"id":"32128","type":"ResetTool"},{"id":"32129","type":"HelpTool"}]},"id":"32130","type":"Toolbar"},{"attributes":{},"id":"32115","type":"BasicTicker"},{"attributes":{},"id":"32127","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"32149","type":"Selection"},"selection_policy":{"id":"32148","type":"UnionRenderers"}},"id":"32137","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"32115","type":"BasicTicker"}},"id":"32118","type":"Grid"},{"attributes":{"formatter":{"id":"32145","type":"BasicTickFormatter"},"ticker":{"id":"32120","type":"BasicTicker"}},"id":"32119","type":"LinearAxis"}],"root_ids":["32105"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"2f858514-0e9c-46d1-b8ec-b3384f34ae88","roots":{"32105":"938403c9-f1ae-4e29-87bf-8a60cf97161f"}}];
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