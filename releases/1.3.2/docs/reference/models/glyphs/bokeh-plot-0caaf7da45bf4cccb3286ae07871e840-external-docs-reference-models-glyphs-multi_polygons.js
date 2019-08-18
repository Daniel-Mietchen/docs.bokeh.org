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
      };var element = document.getElementById("04657c2a-8a10-4c2f-9e0a-63a2f34d1c04");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '04657c2a-8a10-4c2f-9e0a-63a2f34d1c04' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"7757aa82-5043-41dd-a70b-b8bdd3ded850":{"roots":{"references":[{"attributes":{},"id":"10991","type":"BasicTickFormatter"},{"attributes":{},"id":"10993","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10989","type":"DataRange1d"},{"attributes":{"source":{"id":"10974","type":"ColumnDataSource"}},"id":"10979","type":"CDSView"},{"attributes":{},"id":"10982","type":"BasicTicker"},{"attributes":{"below":[{"id":"10980","type":"LinearAxis"}],"center":[{"id":"10983","type":"Grid"},{"id":"10985","type":"Grid"}],"left":[{"id":"10981","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10978","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10990","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10989","type":"DataRange1d"},"x_scale":{"id":"10988","type":"LinearScale"},"y_range":{"id":"10987","type":"DataRange1d"},"y_scale":{"id":"10986","type":"LinearScale"}},"id":"10975","type":"Plot"},{"attributes":{"formatter":{"id":"10993","type":"BasicTickFormatter"},"ticker":{"id":"10984","type":"BasicTicker"}},"id":"10981","type":"LinearAxis"},{"attributes":{},"id":"10988","type":"LinearScale"},{"attributes":{},"id":"10986","type":"LinearScale"},{"attributes":{"formatter":{"id":"10991","type":"BasicTickFormatter"},"ticker":{"id":"10982","type":"BasicTicker"}},"id":"10980","type":"LinearAxis"},{"attributes":{"callback":null},"id":"10987","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10990","type":"Toolbar"},{"attributes":{},"id":"10984","type":"BasicTicker"},{"attributes":{"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"10977","type":"MultiPolygons"},{"attributes":{},"id":"10996","type":"Selection"},{"attributes":{},"id":"10995","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"10982","type":"BasicTicker"}},"id":"10983","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"10984","type":"BasicTicker"}},"id":"10985","type":"Grid"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]],[[[2,2,4,4],[2.5,2.5,3],[3.5,3,3]],[[3.5,3.5,4]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]],[[[2,4,4,2],[3,3.5,3.5],[2.5,2.5,3]],[[1,1.5,1.5]]]]},"selected":{"id":"10996","type":"Selection"},"selection_policy":{"id":"10995","type":"UnionRenderers"}},"id":"10974","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10974","type":"ColumnDataSource"},"glyph":{"id":"10977","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10979","type":"CDSView"}},"id":"10978","type":"GlyphRenderer"}],"root_ids":["10975"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"7757aa82-5043-41dd-a70b-b8bdd3ded850","roots":{"10975":"04657c2a-8a10-4c2f-9e0a-63a2f34d1c04"}}];
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