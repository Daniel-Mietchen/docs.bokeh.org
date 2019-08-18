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
      };var element = document.getElementById("8dd8f51c-d572-4c52-bf2c-5bb18b627096");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8dd8f51c-d572-4c52-bf2c-5bb18b627096' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"995a5954-8fcb-419c-822a-185d846805e5":{"roots":{"references":[{"attributes":{},"id":"34908","type":"UnionRenderers"},{"attributes":{},"id":"34880","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"34896","type":"Line"},{"attributes":{"below":[{"id":"34884","type":"LinearAxis"}],"center":[{"id":"34888","type":"Grid"},{"id":"34893","type":"Grid"}],"left":[{"id":"34889","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"34898","type":"GlyphRenderer"}],"title":{"id":"34904","type":"Title"},"toolbar":{"id":"34894","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"34876","type":"Range1d"},"x_scale":{"id":"34880","type":"LinearScale"},"y_range":{"id":"34878","type":"DataRange1d"},"y_scale":{"id":"34882","type":"LinearScale"}},"id":"34875","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34909","type":"Selection"},{"attributes":{},"id":"34882","type":"LinearScale"},{"attributes":{"callback":null},"id":"34878","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"34897","type":"Line"},{"attributes":{"formatter":{"id":"34905","type":"BasicTickFormatter"},"ticker":{"id":"34900","type":"FixedTicker"}},"id":"34884","type":"LinearAxis"},{"attributes":{"data_source":{"id":"34895","type":"ColumnDataSource"},"glyph":{"id":"34896","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34897","type":"Line"},"selection_glyph":null,"view":{"id":"34899","type":"CDSView"}},"id":"34898","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"34904","type":"Title"},{"attributes":{"source":{"id":"34895","type":"ColumnDataSource"}},"id":"34899","type":"CDSView"},{"attributes":{"band_hatch_alpha":0.6,"band_hatch_color":"lightgrey","band_hatch_pattern":"/","band_hatch_scale":10,"band_hatch_weight":0.5,"ticker":{"id":"34902","type":"FixedTicker"}},"id":"34888","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"34876","type":"Range1d"},{"attributes":{},"id":"34905","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"34907","type":"BasicTickFormatter"},"ticker":{"id":"34890","type":"BasicTicker"}},"id":"34889","type":"LinearAxis"},{"attributes":{"ticks":[0,2,4,6,8,10]},"id":"34900","type":"FixedTicker"},{"attributes":{},"id":"34890","type":"BasicTicker"},{"attributes":{"ticks":[0,2,4,6,8,10]},"id":"34902","type":"FixedTicker"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"34890","type":"BasicTicker"}},"id":"34893","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[1,3,4,3,1,2,6,5,2,3,4]},"selected":{"id":"34909","type":"Selection"},"selection_policy":{"id":"34908","type":"UnionRenderers"}},"id":"34895","type":"ColumnDataSource"},{"attributes":{},"id":"34907","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"34894","type":"Toolbar"}],"root_ids":["34875"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"995a5954-8fcb-419c-822a-185d846805e5","roots":{"34875":"8dd8f51c-d572-4c52-bf2c-5bb18b627096"}}];
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