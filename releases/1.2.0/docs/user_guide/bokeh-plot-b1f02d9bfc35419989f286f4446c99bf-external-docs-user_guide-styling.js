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
      };var element = document.getElementById("cad97a3a-f7d5-4cc2-a586-aa670b83de83");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cad97a3a-f7d5-4cc2-a586-aa670b83de83' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"7c597988-e9f6-47d7-bd22-de203c1f4c89":{"roots":{"references":[{"attributes":{},"id":"33978","type":"HelpTool"},{"attributes":{},"id":"33961","type":"LinearScale"},{"attributes":{"ticker":{"id":"33964","type":"BasicTicker"}},"id":"33967","type":"Grid"},{"attributes":{},"id":"33973","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"33969","type":"BasicTicker"}},"id":"33972","type":"Grid"},{"attributes":{},"id":"33998","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33999","type":"BoxAnnotation"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"33993","type":"BasicTickFormatter"},"ticker":{"id":"33969","type":"BasicTicker"}},"id":"33968","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33955","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33988","type":"Circle"},{"attributes":{},"id":"33977","type":"ResetTool"},{"attributes":{"overlay":{"id":"33999","type":"BoxAnnotation"}},"id":"33975","type":"BoxZoomTool"},{"attributes":{},"id":"33976","type":"SaveTool"},{"attributes":{},"id":"33964","type":"BasicTicker"},{"attributes":{},"id":"33997","type":"Selection"},{"attributes":{},"id":"33969","type":"BasicTicker"},{"attributes":{},"id":"33959","type":"LinearScale"},{"attributes":{},"id":"33995","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"33963","type":"LinearAxis"}],"center":[{"id":"33967","type":"Grid"},{"id":"33972","type":"Grid"}],"left":[{"id":"33968","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33989","type":"GlyphRenderer"}],"title":{"id":"33991","type":"Title"},"toolbar":{"id":"33979","type":"Toolbar"},"x_range":{"id":"33955","type":"DataRange1d"},"x_scale":{"id":"33959","type":"LinearScale"},"y_range":{"id":"33957","type":"DataRange1d"},"y_scale":{"id":"33961","type":"LinearScale"}},"id":"33954","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"33957","type":"DataRange1d"},{"attributes":{"source":{"id":"33986","type":"ColumnDataSource"}},"id":"33990","type":"CDSView"},{"attributes":{},"id":"33993","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33973","type":"PanTool"},{"id":"33974","type":"WheelZoomTool"},{"id":"33975","type":"BoxZoomTool"},{"id":"33976","type":"SaveTool"},{"id":"33977","type":"ResetTool"},{"id":"33978","type":"HelpTool"}]},"id":"33979","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33987","type":"Circle"},{"attributes":{"data_source":{"id":"33986","type":"ColumnDataSource"},"glyph":{"id":"33987","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33988","type":"Circle"},"selection_glyph":null,"view":{"id":"33990","type":"CDSView"}},"id":"33989","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33997","type":"Selection"},"selection_policy":{"id":"33998","type":"UnionRenderers"}},"id":"33986","type":"ColumnDataSource"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"33995","type":"BasicTickFormatter"},"ticker":{"id":"33964","type":"BasicTicker"}},"id":"33963","type":"LinearAxis"},{"attributes":{"text":""},"id":"33991","type":"Title"},{"attributes":{},"id":"33974","type":"WheelZoomTool"}],"root_ids":["33954"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"7c597988-e9f6-47d7-bd22-de203c1f4c89","roots":{"33954":"cad97a3a-f7d5-4cc2-a586-aa670b83de83"}}];
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