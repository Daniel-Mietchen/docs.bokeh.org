(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("45a77760-923b-476b-9ed6-591c837fb8dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '45a77760-923b-476b-9ed6-591c837fb8dd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"45182dc3-c2ca-47ef-a874-c0fe53d83b13":{"roots":{"references":[{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4daf4a"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"29166","type":"Quadratic"},{"attributes":{},"id":"29182","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29182","type":"BasicTickFormatter"},"plot":{"id":"29164","type":"Plot"},"ticker":{"id":"29171","type":"BasicTicker"}},"id":"29169","type":"LinearAxis"},{"attributes":{},"id":"29185","type":"UnionRenderers"},{"attributes":{},"id":"29171","type":"BasicTicker"},{"attributes":{},"id":"29179","type":"LinearScale"},{"attributes":{"data_source":{"id":"29163","type":"ColumnDataSource"},"glyph":{"id":"29166","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29168","type":"CDSView"}},"id":"29167","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29176","type":"Toolbar"},{"attributes":{"plot":{"id":"29164","type":"Plot"},"ticker":{"id":"29171","type":"BasicTicker"}},"id":"29172","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"29184","type":"Selection"},"selection_policy":{"id":"29185","type":"UnionRenderers"}},"id":"29163","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"29180","type":"BasicTickFormatter"},"plot":{"id":"29164","type":"Plot"},"ticker":{"id":"29173","type":"BasicTicker"}},"id":"29170","type":"LinearAxis"},{"attributes":{"below":[{"id":"29169","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29170","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29167","type":"GlyphRenderer"},{"id":"29169","type":"LinearAxis"},{"id":"29170","type":"LinearAxis"},{"id":"29172","type":"Grid"},{"id":"29174","type":"Grid"}],"title":null,"toolbar":{"id":"29176","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29178","type":"DataRange1d"},"x_scale":{"id":"29177","type":"LinearScale"},"y_range":{"id":"29175","type":"DataRange1d"},"y_scale":{"id":"29179","type":"LinearScale"}},"id":"29164","type":"Plot"},{"attributes":{},"id":"29184","type":"Selection"},{"attributes":{},"id":"29177","type":"LinearScale"},{"attributes":{"callback":null},"id":"29178","type":"DataRange1d"},{"attributes":{},"id":"29173","type":"BasicTicker"},{"attributes":{},"id":"29180","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"29175","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"29164","type":"Plot"},"ticker":{"id":"29173","type":"BasicTicker"}},"id":"29174","type":"Grid"},{"attributes":{"source":{"id":"29163","type":"ColumnDataSource"}},"id":"29168","type":"CDSView"}],"root_ids":["29164"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"45182dc3-c2ca-47ef-a874-c0fe53d83b13","roots":{"29164":"45a77760-923b-476b-9ed6-591c837fb8dd"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();