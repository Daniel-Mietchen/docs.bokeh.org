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
      };var element = document.getElementById("8eb2336f-b7d7-498d-9121-23346ad7c40c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8eb2336f-b7d7-498d-9121-23346ad7c40c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"307dd6b7-3b0c-4c7d-a8ab-c0a1b6d17d42":{"roots":{"references":[{"attributes":{},"id":"9855","type":"LinearScale"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9843","type":"AnnularWedge"},{"attributes":{},"id":"9861","type":"Selection"},{"attributes":{"below":[{"id":"9846","type":"LinearAxis"}],"center":[{"id":"9849","type":"Grid"},{"id":"9851","type":"Grid"}],"left":[{"id":"9847","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9844","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9852","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9856","type":"DataRange1d"},"x_scale":{"id":"9854","type":"LinearScale"},"y_range":{"id":"9853","type":"DataRange1d"},"y_scale":{"id":"9855","type":"LinearScale"}},"id":"9841","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"9850","type":"BasicTicker"}},"id":"9851","type":"Grid"},{"attributes":{"ticker":{"id":"9848","type":"BasicTicker"}},"id":"9849","type":"Grid"},{"attributes":{"source":{"id":"9840","type":"ColumnDataSource"}},"id":"9845","type":"CDSView"},{"attributes":{},"id":"9862","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"9857","type":"BasicTickFormatter"},"ticker":{"id":"9850","type":"BasicTicker"}},"id":"9847","type":"LinearAxis"},{"attributes":{},"id":"9854","type":"LinearScale"},{"attributes":{"data_source":{"id":"9840","type":"ColumnDataSource"},"glyph":{"id":"9843","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9845","type":"CDSView"}},"id":"9844","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9859","type":"BasicTickFormatter"},"ticker":{"id":"9848","type":"BasicTicker"}},"id":"9846","type":"LinearAxis"},{"attributes":{},"id":"9848","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9856","type":"DataRange1d"},{"attributes":{},"id":"9859","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"9852","type":"Toolbar"},{"attributes":{},"id":"9857","type":"BasicTickFormatter"},{"attributes":{},"id":"9850","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"9861","type":"Selection"},"selection_policy":{"id":"9862","type":"UnionRenderers"}},"id":"9840","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9853","type":"DataRange1d"}],"root_ids":["9841"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"307dd6b7-3b0c-4c7d-a8ab-c0a1b6d17d42","roots":{"9841":"8eb2336f-b7d7-498d-9121-23346ad7c40c"}}];
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