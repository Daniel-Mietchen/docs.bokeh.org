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
      };var element = document.getElementById("c5d8e073-1c78-4b08-95c7-273ffe305c44");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c5d8e073-1c78-4b08-95c7-273ffe305c44' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3b79e472-f91f-4427-96c1-2dd460f1a5b9":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13933","type":"X"},{"attributes":{"source":{"id":"13930","type":"ColumnDataSource"}},"id":"13935","type":"CDSView"},{"attributes":{"formatter":{"id":"13947","type":"BasicTickFormatter"},"ticker":{"id":"13940","type":"BasicTicker"}},"id":"13937","type":"LinearAxis"},{"attributes":{},"id":"13940","type":"BasicTicker"},{"attributes":{},"id":"13938","type":"BasicTicker"},{"attributes":{},"id":"13951","type":"Selection"},{"attributes":{"below":[{"id":"13936","type":"LinearAxis"}],"center":[{"id":"13939","type":"Grid"},{"id":"13941","type":"Grid"}],"left":[{"id":"13937","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"13934","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"13945","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"13944","type":"DataRange1d"},"x_scale":{"id":"13942","type":"LinearScale"},"y_range":{"id":"13946","type":"DataRange1d"},"y_scale":{"id":"13943","type":"LinearScale"}},"id":"13931","type":"Plot"},{"attributes":{},"id":"13942","type":"LinearScale"},{"attributes":{},"id":"13949","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"13938","type":"BasicTicker"}},"id":"13939","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"13940","type":"BasicTicker"}},"id":"13941","type":"Grid"},{"attributes":{},"id":"13943","type":"LinearScale"},{"attributes":{"callback":null},"id":"13944","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"13951","type":"Selection"},"selection_policy":{"id":"13952","type":"UnionRenderers"}},"id":"13930","type":"ColumnDataSource"},{"attributes":{},"id":"13952","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"13946","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"13945","type":"Toolbar"},{"attributes":{"formatter":{"id":"13949","type":"BasicTickFormatter"},"ticker":{"id":"13938","type":"BasicTicker"}},"id":"13936","type":"LinearAxis"},{"attributes":{},"id":"13947","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"13930","type":"ColumnDataSource"},"glyph":{"id":"13933","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"13935","type":"CDSView"}},"id":"13934","type":"GlyphRenderer"}],"root_ids":["13931"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"3b79e472-f91f-4427-96c1-2dd460f1a5b9","roots":{"13931":"c5d8e073-1c78-4b08-95c7-273ffe305c44"}}];
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