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
      };var element = document.getElementById("b3bc32c5-d6ef-45a2-849a-c2da07c897a6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b3bc32c5-d6ef-45a2-849a-c2da07c897a6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1231c4af-7290-4571-b10d-14b6403b771b":{"roots":{"references":[{"attributes":{"formatter":{"id":"34835","type":"BasicTickFormatter"},"ticker":{"id":"34803","type":"BasicTicker"}},"id":"34802","type":"LinearAxis"},{"attributes":{},"id":"34837","type":"UnionRenderers"},{"attributes":{},"id":"34813","type":"WheelZoomTool"},{"attributes":{},"id":"34798","type":"LinearScale"},{"attributes":{"source":{"id":"34825","type":"ColumnDataSource"}},"id":"34829","type":"CDSView"},{"attributes":{"data_source":{"id":"34825","type":"ColumnDataSource"},"glyph":{"id":"34826","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34827","type":"Circle"},"selection_glyph":null,"view":{"id":"34829","type":"CDSView"}},"id":"34828","type":"GlyphRenderer"},{"attributes":{},"id":"34816","type":"ResetTool"},{"attributes":{},"id":"34835","type":"BasicTickFormatter"},{"attributes":{},"id":"34817","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34826","type":"Circle"},{"attributes":{"grid_line_color":null,"ticker":{"id":"34803","type":"BasicTicker"}},"id":"34806","type":"Grid"},{"attributes":{},"id":"34833","type":"BasicTickFormatter"},{"attributes":{},"id":"34836","type":"Selection"},{"attributes":{},"id":"34808","type":"BasicTicker"},{"attributes":{"below":[{"id":"34802","type":"LinearAxis"}],"center":[{"id":"34806","type":"Grid"},{"id":"34811","type":"Grid"}],"left":[{"id":"34807","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34828","type":"GlyphRenderer"}],"title":{"id":"34831","type":"Title"},"toolbar":{"id":"34818","type":"Toolbar"},"x_range":{"id":"34794","type":"DataRange1d"},"x_scale":{"id":"34798","type":"LinearScale"},"y_range":{"id":"34796","type":"DataRange1d"},"y_scale":{"id":"34800","type":"LinearScale"}},"id":"34793","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34812","type":"PanTool"},{"id":"34813","type":"WheelZoomTool"},{"id":"34814","type":"BoxZoomTool"},{"id":"34815","type":"SaveTool"},{"id":"34816","type":"ResetTool"},{"id":"34817","type":"HelpTool"}]},"id":"34818","type":"Toolbar"},{"attributes":{"overlay":{"id":"34838","type":"BoxAnnotation"}},"id":"34814","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34827","type":"Circle"},{"attributes":{},"id":"34812","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34838","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34796","type":"DataRange1d"},{"attributes":{},"id":"34803","type":"BasicTicker"},{"attributes":{},"id":"34815","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34836","type":"Selection"},"selection_policy":{"id":"34837","type":"UnionRenderers"}},"id":"34825","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"34833","type":"BasicTickFormatter"},"ticker":{"id":"34808","type":"BasicTicker"}},"id":"34807","type":"LinearAxis"},{"attributes":{"band_fill_alpha":0.1,"band_fill_color":"navy","dimension":1,"ticker":{"id":"34808","type":"BasicTicker"}},"id":"34811","type":"Grid"},{"attributes":{"callback":null},"id":"34794","type":"DataRange1d"},{"attributes":{},"id":"34800","type":"LinearScale"},{"attributes":{"text":""},"id":"34831","type":"Title"}],"root_ids":["34793"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"1231c4af-7290-4571-b10d-14b6403b771b","roots":{"34793":"b3bc32c5-d6ef-45a2-849a-c2da07c897a6"}}];
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