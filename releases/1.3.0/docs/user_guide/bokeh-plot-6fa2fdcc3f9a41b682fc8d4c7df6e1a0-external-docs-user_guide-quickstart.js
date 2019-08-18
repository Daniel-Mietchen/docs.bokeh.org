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
      };var element = document.getElementById("579c9379-92bd-4543-92a6-80bc32c124c3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '579c9379-92bd-4543-92a6-80bc32c124c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"033f5469-1384-4274-a62a-8939098ac359":{"roots":{"references":[{"attributes":{"data_source":{"id":"30983","type":"ColumnDataSource"},"glyph":{"id":"30984","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30985","type":"Line"},"selection_glyph":null,"view":{"id":"30987","type":"CDSView"}},"id":"30986","type":"GlyphRenderer"},{"attributes":{},"id":"30974","type":"ResetTool"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"30986","type":"GlyphRenderer"}]},"id":"30995","type":"LegendItem"},{"attributes":{},"id":"30961","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30984","type":"Line"},{"attributes":{"overlay":{"id":"30993","type":"BoxAnnotation"}},"id":"30972","type":"BoxZoomTool"},{"attributes":{},"id":"30971","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"30952","type":"DataRange1d"},{"attributes":{},"id":"30958","type":"LinearScale"},{"attributes":{},"id":"30992","type":"BasicTickFormatter"},{"attributes":{},"id":"30975","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30970","type":"PanTool"},{"id":"30971","type":"WheelZoomTool"},{"id":"30972","type":"BoxZoomTool"},{"id":"30973","type":"SaveTool"},{"id":"30974","type":"ResetTool"},{"id":"30975","type":"HelpTool"}]},"id":"30976","type":"Toolbar"},{"attributes":{},"id":"30973","type":"SaveTool"},{"attributes":{},"id":"30970","type":"PanTool"},{"attributes":{},"id":"30966","type":"BasicTicker"},{"attributes":{},"id":"30956","type":"LinearScale"},{"attributes":{"below":[{"id":"30960","type":"LinearAxis"}],"center":[{"id":"30964","type":"Grid"},{"id":"30969","type":"Grid"},{"id":"30994","type":"Legend"}],"left":[{"id":"30965","type":"LinearAxis"}],"renderers":[{"id":"30986","type":"GlyphRenderer"}],"title":{"id":"30950","type":"Title"},"toolbar":{"id":"30976","type":"Toolbar"},"x_range":{"id":"30952","type":"DataRange1d"},"x_scale":{"id":"30956","type":"LinearScale"},"y_range":{"id":"30954","type":"DataRange1d"},"y_scale":{"id":"30958","type":"LinearScale"}},"id":"30949","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30993","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"30966","type":"BasicTicker"}},"id":"30969","type":"Grid"},{"attributes":{"callback":null},"id":"30954","type":"DataRange1d"},{"attributes":{"text":"simple line example"},"id":"30950","type":"Title"},{"attributes":{"axis_label":"y","formatter":{"id":"30992","type":"BasicTickFormatter"},"ticker":{"id":"30966","type":"BasicTicker"}},"id":"30965","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"31003","type":"Selection"},"selection_policy":{"id":"31002","type":"UnionRenderers"}},"id":"30983","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"30961","type":"BasicTicker"}},"id":"30964","type":"Grid"},{"attributes":{},"id":"30990","type":"BasicTickFormatter"},{"attributes":{},"id":"31003","type":"Selection"},{"attributes":{"axis_label":"x","formatter":{"id":"30990","type":"BasicTickFormatter"},"ticker":{"id":"30961","type":"BasicTicker"}},"id":"30960","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30985","type":"Line"},{"attributes":{"source":{"id":"30983","type":"ColumnDataSource"}},"id":"30987","type":"CDSView"},{"attributes":{},"id":"31002","type":"UnionRenderers"},{"attributes":{"items":[{"id":"30995","type":"LegendItem"}]},"id":"30994","type":"Legend"}],"root_ids":["30949"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"033f5469-1384-4274-a62a-8939098ac359","roots":{"30949":"579c9379-92bd-4543-92a6-80bc32c124c3"}}];
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