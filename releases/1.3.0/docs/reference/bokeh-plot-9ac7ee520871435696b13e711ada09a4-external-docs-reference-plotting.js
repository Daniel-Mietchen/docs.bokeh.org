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
      };var element = document.getElementById("bac2ca1e-b743-4d99-8cba-ee6ed2957afe");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bac2ca1e-b743-4d99-8cba-ee6ed2957afe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"128ab78b-c679-4b20-a945-6456e72d16d3":{"roots":{"references":[{"attributes":{"formatter":{"id":"14924","type":"BasicTickFormatter"},"ticker":{"id":"14897","type":"BasicTicker"}},"id":"14896","type":"LinearAxis"},{"attributes":{},"id":"14906","type":"HelpTool"},{"attributes":{},"id":"14927","type":"Selection"},{"attributes":{},"id":"14897","type":"BasicTicker"},{"attributes":{"source":{"id":"14914","type":"ColumnDataSource"}},"id":"14918","type":"CDSView"},{"attributes":{"callback":null},"id":"14883","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14901","type":"PanTool"},{"id":"14902","type":"WheelZoomTool"},{"id":"14903","type":"BoxZoomTool"},{"id":"14904","type":"SaveTool"},{"id":"14905","type":"ResetTool"},{"id":"14906","type":"HelpTool"}]},"id":"14907","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"14897","type":"BasicTicker"}},"id":"14900","type":"Grid"},{"attributes":{"data_source":{"id":"14914","type":"ColumnDataSource"},"glyph":{"id":"14915","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14916","type":"CircleCross"},"selection_glyph":null,"view":{"id":"14918","type":"CDSView"}},"id":"14917","type":"GlyphRenderer"},{"attributes":{},"id":"14889","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14916","type":"CircleCross"},{"attributes":{"callback":null},"id":"14885","type":"DataRange1d"},{"attributes":{},"id":"14926","type":"UnionRenderers"},{"attributes":{},"id":"14887","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14925","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"14922","type":"BasicTickFormatter"},"ticker":{"id":"14892","type":"BasicTicker"}},"id":"14891","type":"LinearAxis"},{"attributes":{},"id":"14901","type":"PanTool"},{"attributes":{"text":""},"id":"14920","type":"Title"},{"attributes":{},"id":"14902","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"14925","type":"BoxAnnotation"}},"id":"14903","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14915","type":"CircleCross"},{"attributes":{},"id":"14922","type":"BasicTickFormatter"},{"attributes":{},"id":"14892","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"14927","type":"Selection"},"selection_policy":{"id":"14926","type":"UnionRenderers"}},"id":"14914","type":"ColumnDataSource"},{"attributes":{},"id":"14904","type":"SaveTool"},{"attributes":{},"id":"14924","type":"BasicTickFormatter"},{"attributes":{},"id":"14905","type":"ResetTool"},{"attributes":{"ticker":{"id":"14892","type":"BasicTicker"}},"id":"14895","type":"Grid"},{"attributes":{"below":[{"id":"14891","type":"LinearAxis"}],"center":[{"id":"14895","type":"Grid"},{"id":"14900","type":"Grid"}],"left":[{"id":"14896","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14917","type":"GlyphRenderer"}],"title":{"id":"14920","type":"Title"},"toolbar":{"id":"14907","type":"Toolbar"},"x_range":{"id":"14883","type":"DataRange1d"},"x_scale":{"id":"14887","type":"LinearScale"},"y_range":{"id":"14885","type":"DataRange1d"},"y_scale":{"id":"14889","type":"LinearScale"}},"id":"14882","subtype":"Figure","type":"Plot"}],"root_ids":["14882"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"128ab78b-c679-4b20-a945-6456e72d16d3","roots":{"14882":"bac2ca1e-b743-4d99-8cba-ee6ed2957afe"}}];
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