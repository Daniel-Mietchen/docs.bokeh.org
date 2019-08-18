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
      };var element = document.getElementById("ab1732c2-4719-49df-98e8-06054fa95375");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ab1732c2-4719-49df-98e8-06054fa95375' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cfddf269-dede-4508-ac9b-36bbd17d5a94":{"roots":{"references":[{"attributes":{"below":[{"id":"27610","type":"LinearAxis"}],"center":[{"id":"27614","type":"Grid"},{"id":"27619","type":"Grid"}],"left":[{"id":"27615","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27636","type":"GlyphRenderer"}],"title":{"id":"27639","type":"Title"},"toolbar":{"id":"27626","type":"Toolbar"},"x_range":{"id":"27602","type":"DataRange1d"},"x_scale":{"id":"27606","type":"LinearScale"},"y_range":{"id":"27604","type":"DataRange1d"},"y_scale":{"id":"27608","type":"LinearScale"}},"id":"27601","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27644","type":"UnionRenderers"},{"attributes":{},"id":"27625","type":"HelpTool"},{"attributes":{},"id":"27620","type":"PanTool"},{"attributes":{},"id":"27611","type":"BasicTicker"},{"attributes":{},"id":"27624","type":"ResetTool"},{"attributes":{"data_source":{"id":"27633","type":"ColumnDataSource"},"glyph":{"id":"27634","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27635","type":"HBar"},"selection_glyph":null,"view":{"id":"27637","type":"CDSView"}},"id":"27636","type":"GlyphRenderer"},{"attributes":{},"id":"27621","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"27641","type":"BasicTickFormatter"},"ticker":{"id":"27616","type":"BasicTicker"}},"id":"27615","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27620","type":"PanTool"},{"id":"27621","type":"WheelZoomTool"},{"id":"27622","type":"BoxZoomTool"},{"id":"27623","type":"SaveTool"},{"id":"27624","type":"ResetTool"},{"id":"27625","type":"HelpTool"}]},"id":"27626","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"27635","type":"HBar"},{"attributes":{"overlay":{"id":"27646","type":"BoxAnnotation"}},"id":"27622","type":"BoxZoomTool"},{"attributes":{},"id":"27641","type":"BasicTickFormatter"},{"attributes":{},"id":"27643","type":"BasicTickFormatter"},{"attributes":{},"id":"27616","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27602","type":"DataRange1d"},{"attributes":{"text":""},"id":"27639","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27646","type":"BoxAnnotation"},{"attributes":{},"id":"27623","type":"SaveTool"},{"attributes":{"callback":null},"id":"27604","type":"DataRange1d"},{"attributes":{},"id":"27606","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"27616","type":"BasicTicker"}},"id":"27619","type":"Grid"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"27634","type":"HBar"},{"attributes":{"ticker":{"id":"27611","type":"BasicTicker"}},"id":"27614","type":"Grid"},{"attributes":{},"id":"27608","type":"LinearScale"},{"attributes":{"callback":null,"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]},"selected":{"id":"27645","type":"Selection"},"selection_policy":{"id":"27644","type":"UnionRenderers"}},"id":"27633","type":"ColumnDataSource"},{"attributes":{"source":{"id":"27633","type":"ColumnDataSource"}},"id":"27637","type":"CDSView"},{"attributes":{},"id":"27645","type":"Selection"},{"attributes":{"formatter":{"id":"27643","type":"BasicTickFormatter"},"ticker":{"id":"27611","type":"BasicTicker"}},"id":"27610","type":"LinearAxis"}],"root_ids":["27601"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"cfddf269-dede-4508-ac9b-36bbd17d5a94","roots":{"27601":"ab1732c2-4719-49df-98e8-06054fa95375"}}];
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