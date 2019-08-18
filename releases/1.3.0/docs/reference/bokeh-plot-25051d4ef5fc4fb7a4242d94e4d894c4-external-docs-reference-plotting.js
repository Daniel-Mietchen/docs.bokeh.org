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
      };var element = document.getElementById("790275bf-7839-499e-8122-fc6de64d5e6f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '790275bf-7839-499e-8122-fc6de64d5e6f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0d4a33ea-3e10-49f2-8b94-d45a2de661e1":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"16546","type":"BasicTicker"}},"id":"16549","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16576","type":"Selection"},"selection_policy":{"id":"16575","type":"UnionRenderers"}},"id":"16563","type":"ColumnDataSource"},{"attributes":{"source":{"id":"16563","type":"ColumnDataSource"}},"id":"16567","type":"CDSView"},{"attributes":{"below":[{"id":"16540","type":"LinearAxis"}],"center":[{"id":"16544","type":"Grid"},{"id":"16549","type":"Grid"}],"left":[{"id":"16545","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16566","type":"GlyphRenderer"}],"title":{"id":"16569","type":"Title"},"toolbar":{"id":"16556","type":"Toolbar"},"x_range":{"id":"16532","type":"DataRange1d"},"x_scale":{"id":"16536","type":"LinearScale"},"y_range":{"id":"16534","type":"DataRange1d"},"y_scale":{"id":"16538","type":"LinearScale"}},"id":"16531","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16565","type":"Ray"},{"attributes":{"callback":null},"id":"16534","type":"DataRange1d"},{"attributes":{"callback":null},"id":"16532","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16564","type":"Ray"},{"attributes":{},"id":"16536","type":"LinearScale"},{"attributes":{},"id":"16538","type":"LinearScale"},{"attributes":{"data_source":{"id":"16563","type":"ColumnDataSource"},"glyph":{"id":"16564","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16565","type":"Ray"},"selection_glyph":null,"view":{"id":"16567","type":"CDSView"}},"id":"16566","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"16569","type":"Title"},{"attributes":{"formatter":{"id":"16571","type":"BasicTickFormatter"},"ticker":{"id":"16541","type":"BasicTicker"}},"id":"16540","type":"LinearAxis"},{"attributes":{},"id":"16550","type":"PanTool"},{"attributes":{},"id":"16571","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16574","type":"BoxAnnotation"}},"id":"16552","type":"BoxZoomTool"},{"attributes":{},"id":"16551","type":"WheelZoomTool"},{"attributes":{},"id":"16573","type":"BasicTickFormatter"},{"attributes":{},"id":"16541","type":"BasicTicker"},{"attributes":{},"id":"16553","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16574","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"16541","type":"BasicTicker"}},"id":"16544","type":"Grid"},{"attributes":{},"id":"16575","type":"UnionRenderers"},{"attributes":{},"id":"16554","type":"ResetTool"},{"attributes":{"formatter":{"id":"16573","type":"BasicTickFormatter"},"ticker":{"id":"16546","type":"BasicTicker"}},"id":"16545","type":"LinearAxis"},{"attributes":{},"id":"16555","type":"HelpTool"},{"attributes":{},"id":"16576","type":"Selection"},{"attributes":{},"id":"16546","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16550","type":"PanTool"},{"id":"16551","type":"WheelZoomTool"},{"id":"16552","type":"BoxZoomTool"},{"id":"16553","type":"SaveTool"},{"id":"16554","type":"ResetTool"},{"id":"16555","type":"HelpTool"}]},"id":"16556","type":"Toolbar"}],"root_ids":["16531"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"0d4a33ea-3e10-49f2-8b94-d45a2de661e1","roots":{"16531":"790275bf-7839-499e-8122-fc6de64d5e6f"}}];
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