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
      };var element = document.getElementById("8af8393d-db2e-40ce-9052-2e4bcea8eb2d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8af8393d-db2e-40ce-9052-2e4bcea8eb2d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8a6b5b56-8e63-46ff-a1bc-83cdad82bdd5":{"roots":{"references":[{"attributes":{},"id":"13552","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"13542","type":"Toolbar"},{"attributes":{"formatter":{"id":"13550","type":"BasicTickFormatter"},"ticker":{"id":"13540","type":"BasicTicker"}},"id":"13537","type":"LinearAxis"},{"attributes":{},"id":"13551","type":"UnionRenderers"},{"attributes":{},"id":"13550","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"13530","type":"ColumnDataSource"},"glyph":{"id":"13533","type":"Square"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"13535","type":"CDSView"}},"id":"13534","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"13552","type":"Selection"},"selection_policy":{"id":"13551","type":"UnionRenderers"}},"id":"13530","type":"ColumnDataSource"},{"attributes":{},"id":"13545","type":"LinearScale"},{"attributes":{},"id":"13548","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"13548","type":"BasicTickFormatter"},"ticker":{"id":"13538","type":"BasicTicker"}},"id":"13536","type":"LinearAxis"},{"attributes":{},"id":"13538","type":"BasicTicker"},{"attributes":{},"id":"13543","type":"LinearScale"},{"attributes":{"ticker":{"id":"13538","type":"BasicTicker"}},"id":"13539","type":"Grid"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13533","type":"Square"},{"attributes":{"dimension":1,"ticker":{"id":"13540","type":"BasicTicker"}},"id":"13541","type":"Grid"},{"attributes":{"below":[{"id":"13536","type":"LinearAxis"}],"center":[{"id":"13539","type":"Grid"},{"id":"13541","type":"Grid"}],"left":[{"id":"13537","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"13534","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"13542","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"13544","type":"DataRange1d"},"x_scale":{"id":"13543","type":"LinearScale"},"y_range":{"id":"13546","type":"DataRange1d"},"y_scale":{"id":"13545","type":"LinearScale"}},"id":"13531","type":"Plot"},{"attributes":{"source":{"id":"13530","type":"ColumnDataSource"}},"id":"13535","type":"CDSView"},{"attributes":{"callback":null},"id":"13544","type":"DataRange1d"},{"attributes":{"callback":null},"id":"13546","type":"DataRange1d"},{"attributes":{},"id":"13540","type":"BasicTicker"}],"root_ids":["13531"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"8a6b5b56-8e63-46ff-a1bc-83cdad82bdd5","roots":{"13531":"8af8393d-db2e-40ce-9052-2e4bcea8eb2d"}}];
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