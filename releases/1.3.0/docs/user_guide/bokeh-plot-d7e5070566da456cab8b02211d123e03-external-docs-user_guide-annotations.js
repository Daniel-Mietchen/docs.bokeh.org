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
      };var element = document.getElementById("e8af91a3-1162-4720-8f58-cdc1689c574c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e8af91a3-1162-4720-8f58-cdc1689c574c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"1bf05a68-4bcb-429c-9468-fa57d7e31f6f":{"roots":{"references":[{"attributes":{"data_source":{"id":"17916","type":"ColumnDataSource"},"glyph":{"id":"17917","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17918","type":"Circle"},"selection_glyph":null,"view":{"id":"17920","type":"CDSView"}},"id":"17919","type":"GlyphRenderer"},{"attributes":{},"id":"17927","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17918","type":"Circle"},{"attributes":{"formatter":{"id":"17923","type":"BasicTickFormatter"},"ticker":{"id":"17894","type":"BasicTicker"}},"id":"17893","type":"LinearAxis"},{"attributes":{},"id":"17923","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17925","type":"BasicTickFormatter"},"ticker":{"id":"17899","type":"BasicTicker"}},"id":"17898","type":"LinearAxis"},{"attributes":{"source":{"id":"17916","type":"ColumnDataSource"}},"id":"17920","type":"CDSView"},{"attributes":{"text":"Basic Title"},"id":"17883","type":"Title"},{"attributes":{},"id":"17903","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17903","type":"PanTool"},{"id":"17904","type":"WheelZoomTool"},{"id":"17905","type":"BoxZoomTool"},{"id":"17906","type":"SaveTool"},{"id":"17907","type":"ResetTool"},{"id":"17908","type":"HelpTool"}]},"id":"17909","type":"Toolbar"},{"attributes":{},"id":"17889","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17926","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"17894","type":"BasicTicker"}},"id":"17897","type":"Grid"},{"attributes":{},"id":"17891","type":"LinearScale"},{"attributes":{},"id":"17928","type":"Selection"},{"attributes":{"callback":null},"id":"17885","type":"DataRange1d"},{"attributes":{"below":[{"id":"17893","type":"LinearAxis"}],"center":[{"id":"17897","type":"Grid"},{"id":"17902","type":"Grid"}],"left":[{"id":"17898","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17919","type":"GlyphRenderer"}],"title":{"id":"17883","type":"Title"},"toolbar":{"id":"17909","type":"Toolbar"},"x_range":{"id":"17885","type":"DataRange1d"},"x_scale":{"id":"17889","type":"LinearScale"},"y_range":{"id":"17887","type":"DataRange1d"},"y_scale":{"id":"17891","type":"LinearScale"}},"id":"17882","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17894","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17917","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"17928","type":"Selection"},"selection_policy":{"id":"17927","type":"UnionRenderers"}},"id":"17916","type":"ColumnDataSource"},{"attributes":{},"id":"17925","type":"BasicTickFormatter"},{"attributes":{},"id":"17904","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"17899","type":"BasicTicker"}},"id":"17902","type":"Grid"},{"attributes":{"callback":null},"id":"17887","type":"DataRange1d"},{"attributes":{},"id":"17899","type":"BasicTicker"},{"attributes":{},"id":"17907","type":"ResetTool"},{"attributes":{},"id":"17908","type":"HelpTool"},{"attributes":{"overlay":{"id":"17926","type":"BoxAnnotation"}},"id":"17905","type":"BoxZoomTool"},{"attributes":{},"id":"17906","type":"SaveTool"}],"root_ids":["17882"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"1bf05a68-4bcb-429c-9468-fa57d7e31f6f","roots":{"17882":"e8af91a3-1162-4720-8f58-cdc1689c574c"}}];
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