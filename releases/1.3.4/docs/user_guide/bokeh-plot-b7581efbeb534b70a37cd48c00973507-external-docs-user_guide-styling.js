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
      };var element = document.getElementById("1c7e7b95-56a6-410f-b9dc-8680bb4c47c5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1c7e7b95-56a6-410f-b9dc-8680bb4c47c5' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"505987d6-7b4f-4999-8dd3-c62daf0a0003":{"roots":{"references":[{"attributes":{"callback":null},"id":"32113","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"32146","type":"Selection"},"selection_policy":{"id":"32147","type":"UnionRenderers"}},"id":"32130","type":"ColumnDataSource"},{"attributes":{},"id":"32148","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"32148","type":"Selection"},"selection_policy":{"id":"32149","type":"UnionRenderers"}},"id":"32135","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"32111","type":"DataRange1d"},{"attributes":{"source":{"id":"32135","type":"ColumnDataSource"}},"id":"32139","type":"CDSView"},{"attributes":{},"id":"32125","type":"BasicTicker"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"32131","type":"Line"},{"attributes":{},"id":"32120","type":"BasicTicker"},{"attributes":{},"id":"32149","type":"UnionRenderers"},{"attributes":{"source":{"id":"32130","type":"ColumnDataSource"}},"id":"32134","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32137","type":"Line"},{"attributes":{"below":[{"id":"32119","type":"LinearAxis"}],"center":[{"id":"32123","type":"Grid"},{"id":"32128","type":"Grid"}],"left":[{"id":"32124","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"32133","type":"GlyphRenderer"},{"id":"32138","type":"GlyphRenderer"}],"title":{"id":"32141","type":"Title"},"toolbar":{"id":"32129","type":"Toolbar"},"x_range":{"id":"32111","type":"DataRange1d"},"x_scale":{"id":"32115","type":"LinearScale"},"y_range":{"id":"32113","type":"DataRange1d"},"y_scale":{"id":"32117","type":"LinearScale"}},"id":"32110","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32132","type":"Line"},{"attributes":{"formatter":{"id":"32145","type":"BasicTickFormatter"},"ticker":{"id":"32120","type":"BasicTicker"},"visible":false},"id":"32119","type":"LinearAxis"},{"attributes":{"text":""},"id":"32141","type":"Title"},{"attributes":{"data_source":{"id":"32135","type":"ColumnDataSource"},"glyph":{"id":"32136","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32137","type":"Line"},"selection_glyph":null,"view":{"id":"32139","type":"CDSView"},"visible":false},"id":"32138","type":"GlyphRenderer"},{"attributes":{},"id":"32146","type":"Selection"},{"attributes":{"ticker":{"id":"32120","type":"BasicTicker"},"visible":false},"id":"32123","type":"Grid"},{"attributes":{"data_source":{"id":"32130","type":"ColumnDataSource"},"glyph":{"id":"32131","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32132","type":"Line"},"selection_glyph":null,"view":{"id":"32134","type":"CDSView"}},"id":"32133","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"32129","type":"Toolbar"},{"attributes":{},"id":"32143","type":"BasicTickFormatter"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"32136","type":"Line"},{"attributes":{},"id":"32115","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"32125","type":"BasicTicker"}},"id":"32128","type":"Grid"},{"attributes":{},"id":"32145","type":"BasicTickFormatter"},{"attributes":{},"id":"32117","type":"LinearScale"},{"attributes":{"formatter":{"id":"32143","type":"BasicTickFormatter"},"ticker":{"id":"32125","type":"BasicTicker"}},"id":"32124","type":"LinearAxis"},{"attributes":{},"id":"32147","type":"UnionRenderers"}],"root_ids":["32110"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"505987d6-7b4f-4999-8dd3-c62daf0a0003","roots":{"32110":"1c7e7b95-56a6-410f-b9dc-8680bb4c47c5"}}];
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
        
        
        }
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