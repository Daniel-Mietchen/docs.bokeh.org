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
      };var element = document.getElementById("30062e89-5eb3-4c3d-8422-4eed54f9becd");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '30062e89-5eb3-4c3d-8422-4eed54f9becd' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"b61a5c6f-e6df-44b0-b663-92c0197b60e8":{"roots":{"references":[{"attributes":{},"id":"10567","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"10550","type":"ColumnDataSource"}},"id":"10555","type":"CDSView"},{"attributes":{},"id":"10571","type":"Selection"},{"attributes":{"data_source":{"id":"10550","type":"ColumnDataSource"},"glyph":{"id":"10553","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10555","type":"CDSView"}},"id":"10554","type":"GlyphRenderer"},{"attributes":{},"id":"10560","type":"BasicTicker"},{"attributes":{},"id":"10563","type":"LinearScale"},{"attributes":{"formatter":{"id":"10567","type":"BasicTickFormatter"},"ticker":{"id":"10560","type":"BasicTicker"}},"id":"10557","type":"LinearAxis"},{"attributes":{"ticker":{"id":"10558","type":"BasicTicker"}},"id":"10559","type":"Grid"},{"attributes":{},"id":"10569","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10566","type":"DataRange1d"},{"attributes":{"callback":null},"id":"10564","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#fb9a99"},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"10553","type":"HexTile"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10565","type":"Toolbar"},{"attributes":{"callback":null,"data":{"q":[0,0,-1,-1,1,1,0],"r":[0,-1,0,1,-1,0,1]},"selected":{"id":"10571","type":"Selection"},"selection_policy":{"id":"10572","type":"UnionRenderers"}},"id":"10550","type":"ColumnDataSource"},{"attributes":{},"id":"10562","type":"LinearScale"},{"attributes":{},"id":"10572","type":"UnionRenderers"},{"attributes":{},"id":"10558","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"10560","type":"BasicTicker"}},"id":"10561","type":"Grid"},{"attributes":{"below":[{"id":"10556","type":"LinearAxis"}],"center":[{"id":"10559","type":"Grid"},{"id":"10561","type":"Grid"}],"left":[{"id":"10557","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10554","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10565","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10564","type":"DataRange1d"},"x_scale":{"id":"10562","type":"LinearScale"},"y_range":{"id":"10566","type":"DataRange1d"},"y_scale":{"id":"10563","type":"LinearScale"}},"id":"10551","type":"Plot"},{"attributes":{"formatter":{"id":"10569","type":"BasicTickFormatter"},"ticker":{"id":"10558","type":"BasicTicker"}},"id":"10556","type":"LinearAxis"}],"root_ids":["10551"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"b61a5c6f-e6df-44b0-b663-92c0197b60e8","roots":{"10551":"30062e89-5eb3-4c3d-8422-4eed54f9becd"}}];
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