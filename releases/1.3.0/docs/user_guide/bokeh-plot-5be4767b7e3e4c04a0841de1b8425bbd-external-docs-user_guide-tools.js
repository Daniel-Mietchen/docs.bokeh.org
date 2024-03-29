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
      };var element = document.getElementById("40502a3f-7188-4280-8343-176378acb29c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '40502a3f-7188-4280-8343-176378acb29c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f3c70b76-ab4a-4203-86ce-4facc0dca6d7":{"roots":{"references":[{"attributes":{},"id":"37219","type":"HelpTool"},{"attributes":{},"id":"37242","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"37210","type":"BasicTicker"}},"id":"37213","type":"Grid"},{"attributes":{"below":[{"id":"37204","type":"LinearAxis"}],"center":[{"id":"37208","type":"Grid"},{"id":"37213","type":"Grid"}],"left":[{"id":"37209","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37231","type":"GlyphRenderer"}],"title":{"id":"37194","type":"Title"},"toolbar":{"id":"37220","type":"Toolbar"},"x_range":{"id":"37196","type":"Range1d"},"x_scale":{"id":"37200","type":"LinearScale"},"y_range":{"id":"37198","type":"Range1d"},"y_scale":{"id":"37202","type":"LinearScale"}},"id":"37193","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":{"id":"37233","type":"BoxEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37214","type":"PanTool"},{"id":"37215","type":"WheelZoomTool"},{"id":"37216","type":"BoxZoomTool"},{"id":"37217","type":"SaveTool"},{"id":"37218","type":"ResetTool"},{"id":"37219","type":"HelpTool"},{"id":"37233","type":"BoxEditTool"}]},"id":"37220","type":"Toolbar"},{"attributes":{},"id":"37243","type":"Selection"},{"attributes":{"fill_alpha":{"field":"alpha"},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"field":"alpha"},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37229","type":"Rect"},{"attributes":{"callback":null,"data":{"alpha":[0.5,0.5,0.5],"height":[2,1,1.5],"width":[2,1,2],"x":[5,2,8],"y":[5,7,8]},"selected":{"id":"37243","type":"Selection"},"selection_policy":{"id":"37242","type":"UnionRenderers"}},"id":"37227","type":"ColumnDataSource"},{"attributes":{"text":"Box Edit Tool"},"id":"37194","type":"Title"},{"attributes":{"data_source":{"id":"37227","type":"ColumnDataSource"},"glyph":{"id":"37229","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37230","type":"Rect"},"selection_glyph":null,"view":{"id":"37232","type":"CDSView"}},"id":"37231","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"37196","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37230","type":"Rect"},{"attributes":{"source":{"id":"37227","type":"ColumnDataSource"}},"id":"37232","type":"CDSView"},{"attributes":{},"id":"37214","type":"PanTool"},{"attributes":{"formatter":{"id":"37240","type":"BasicTickFormatter"},"ticker":{"id":"37210","type":"BasicTicker"}},"id":"37209","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"37198","type":"Range1d"},{"attributes":{},"id":"37200","type":"LinearScale"},{"attributes":{"empty_value":1,"renderers":[{"id":"37231","type":"GlyphRenderer"}]},"id":"37233","type":"BoxEditTool"},{"attributes":{},"id":"37215","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"37205","type":"BasicTicker"}},"id":"37208","type":"Grid"},{"attributes":{"overlay":{"id":"37241","type":"BoxAnnotation"}},"id":"37216","type":"BoxZoomTool"},{"attributes":{},"id":"37238","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"37238","type":"BasicTickFormatter"},"ticker":{"id":"37205","type":"BasicTicker"}},"id":"37204","type":"LinearAxis"},{"attributes":{},"id":"37202","type":"LinearScale"},{"attributes":{},"id":"37210","type":"BasicTicker"},{"attributes":{},"id":"37217","type":"SaveTool"},{"attributes":{},"id":"37205","type":"BasicTicker"},{"attributes":{},"id":"37240","type":"BasicTickFormatter"},{"attributes":{},"id":"37218","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37241","type":"BoxAnnotation"}],"root_ids":["37193"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"f3c70b76-ab4a-4203-86ce-4facc0dca6d7","roots":{"37193":"40502a3f-7188-4280-8343-176378acb29c"}}];
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