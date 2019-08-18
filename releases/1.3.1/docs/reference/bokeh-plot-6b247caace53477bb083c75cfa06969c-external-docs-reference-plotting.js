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
      };var element = document.getElementById("008fa643-dd1c-478d-ad4d-d6a6241bf32a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '008fa643-dd1c-478d-ad4d-d6a6241bf32a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"e41eec36-0ae5-4423-b410-e74ea01133fc":{"roots":{"references":[{"attributes":{},"id":"16986","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"16956","type":"LinearAxis"}],"center":[{"id":"16960","type":"Grid"},{"id":"16965","type":"Grid"}],"left":[{"id":"16961","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16982","type":"GlyphRenderer"}],"title":{"id":"16985","type":"Title"},"toolbar":{"id":"16972","type":"Toolbar"},"x_range":{"id":"16948","type":"DataRange1d"},"x_scale":{"id":"16952","type":"LinearScale"},"y_range":{"id":"16950","type":"DataRange1d"},"y_scale":{"id":"16954","type":"LinearScale"}},"id":"16947","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"16990","type":"BoxAnnotation"}},"id":"16968","type":"BoxZoomTool"},{"attributes":{},"id":"16957","type":"BasicTicker"},{"attributes":{},"id":"16988","type":"BasicTickFormatter"},{"attributes":{},"id":"16969","type":"SaveTool"},{"attributes":{"ticker":{"id":"16957","type":"BasicTicker"}},"id":"16960","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16990","type":"BoxAnnotation"},{"attributes":{},"id":"16970","type":"ResetTool"},{"attributes":{"formatter":{"id":"16986","type":"BasicTickFormatter"},"ticker":{"id":"16962","type":"BasicTicker"}},"id":"16961","type":"LinearAxis"},{"attributes":{},"id":"16991","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16981","type":"SquareX"},{"attributes":{},"id":"16971","type":"HelpTool"},{"attributes":{},"id":"16962","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16948","type":"DataRange1d"},{"attributes":{},"id":"16992","type":"UnionRenderers"},{"attributes":{},"id":"16966","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"16962","type":"BasicTicker"}},"id":"16965","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16966","type":"PanTool"},{"id":"16967","type":"WheelZoomTool"},{"id":"16968","type":"BoxZoomTool"},{"id":"16969","type":"SaveTool"},{"id":"16970","type":"ResetTool"},{"id":"16971","type":"HelpTool"}]},"id":"16972","type":"Toolbar"},{"attributes":{},"id":"16954","type":"LinearScale"},{"attributes":{"callback":null},"id":"16950","type":"DataRange1d"},{"attributes":{"data_source":{"id":"16979","type":"ColumnDataSource"},"glyph":{"id":"16980","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16981","type":"SquareX"},"selection_glyph":null,"view":{"id":"16983","type":"CDSView"}},"id":"16982","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16980","type":"SquareX"},{"attributes":{"source":{"id":"16979","type":"ColumnDataSource"}},"id":"16983","type":"CDSView"},{"attributes":{},"id":"16952","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16991","type":"Selection"},"selection_policy":{"id":"16992","type":"UnionRenderers"}},"id":"16979","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"16988","type":"BasicTickFormatter"},"ticker":{"id":"16957","type":"BasicTicker"}},"id":"16956","type":"LinearAxis"},{"attributes":{"text":""},"id":"16985","type":"Title"},{"attributes":{},"id":"16967","type":"WheelZoomTool"}],"root_ids":["16947"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"e41eec36-0ae5-4423-b410-e74ea01133fc","roots":{"16947":"008fa643-dd1c-478d-ad4d-d6a6241bf32a"}}];
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