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
      };var element = document.getElementById("769e75e9-5f56-4da2-9aff-355ba619611c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '769e75e9-5f56-4da2-9aff-355ba619611c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"bf12d525-c8ce-436e-9244-7def7b2191d8":{"roots":{"references":[{"attributes":{"data_source":{"id":"2558","type":"ColumnDataSource"},"glyph":{"id":"2559","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2560","type":"VBar"},"selection_glyph":null,"view":{"id":"2562","type":"CDSView"}},"id":"2561","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2565","type":"CategoricalTickFormatter"},"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2549","type":"CategoricalTicker"}},"id":"2548","type":"CategoricalAxis"},{"attributes":{},"id":"2549","type":"CategoricalTicker"},{"attributes":{},"id":"2546","type":"LinearScale"},{"attributes":{"source":{"id":"2558","type":"ColumnDataSource"}},"id":"2562","type":"CDSView"},{"attributes":{},"id":"2568","type":"Selection"},{"attributes":{"below":[{"id":"2548","type":"CategoricalAxis"}],"left":[{"id":"2552","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"2548","type":"CategoricalAxis"},{"id":"2551","type":"Grid"},{"id":"2552","type":"LinearAxis"},{"id":"2556","type":"Grid"},{"id":"2561","type":"GlyphRenderer"}],"title":{"id":"2537","type":"Title"},"toolbar":{"id":"2557","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2540","type":"FactorRange"},"x_scale":{"id":"2544","type":"CategoricalScale"},"y_range":{"id":"2542","type":"DataRange1d"},"y_scale":{"id":"2546","type":"LinearScale"}},"id":"2538","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"2557","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":{"id":"2568","type":"Selection"},"selection_policy":{"id":"2569","type":"UnionRenderers"}},"id":"2558","type":"ColumnDataSource"},{"attributes":{},"id":"2565","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2560","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"2537","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2559","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2549","type":"CategoricalTicker"}},"id":"2551","type":"Grid"},{"attributes":{},"id":"2544","type":"CategoricalScale"},{"attributes":{},"id":"2553","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"2540","type":"FactorRange"},{"attributes":{"formatter":{"id":"2567","type":"BasicTickFormatter"},"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2553","type":"BasicTicker"}},"id":"2552","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"2542","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2553","type":"BasicTicker"}},"id":"2556","type":"Grid"},{"attributes":{},"id":"2569","type":"UnionRenderers"},{"attributes":{},"id":"2567","type":"BasicTickFormatter"}],"root_ids":["2538"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"bf12d525-c8ce-436e-9244-7def7b2191d8","roots":{"2538":"769e75e9-5f56-4da2-9aff-355ba619611c"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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