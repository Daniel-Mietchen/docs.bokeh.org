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
      };var element = document.getElementById("c5a39248-1c4c-4902-9f23-9127907ef9c4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5a39248-1c4c-4902-9f23-9127907ef9c4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"431fdcdc-24ff-4e5e-a46f-85b674df0692":{"roots":{"references":[{"attributes":{"overlay":{"id":"32934","type":"BoxAnnotation"}},"id":"32928","type":"BoxZoomTool"},{"attributes":{"source":{"id":"32941","type":"ColumnDataSource"}},"id":"32945","type":"CDSView"},{"attributes":{},"id":"32922","type":"BasicTicker"},{"attributes":{},"id":"32927","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"32951","type":"BasicTickFormatter"},"plot":{"id":"32907","subtype":"Figure","type":"Plot"},"ticker":{"id":"32922","type":"BasicTicker"}},"id":"32921","type":"LinearAxis"},{"attributes":{},"id":"32914","type":"LinearScale"},{"attributes":{},"id":"32926","type":"PanTool"},{"attributes":{"plot":{"id":"32907","subtype":"Figure","type":"Plot"},"ticker":{"id":"32917","type":"BasicTicker"}},"id":"32920","type":"Grid"},{"attributes":{},"id":"32917","type":"BasicTicker"},{"attributes":{"formatter":{"id":"32949","type":"BasicTickFormatter"},"plot":{"id":"32907","subtype":"Figure","type":"Plot"},"ticker":{"id":"32917","type":"BasicTicker"}},"id":"32916","type":"LinearAxis"},{"attributes":{"data_source":{"id":"32941","type":"ColumnDataSource"},"glyph":{"id":"32942","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32943","type":"Diamond"},"selection_glyph":null,"view":{"id":"32945","type":"CDSView"}},"id":"32944","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32934","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"32947","type":"Title"},{"attributes":{},"id":"32949","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32954","type":"Selection"},"selection_policy":{"id":"32953","type":"UnionRenderers"}},"id":"32941","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32926","type":"PanTool"},{"id":"32927","type":"WheelZoomTool"},{"id":"32928","type":"BoxZoomTool"},{"id":"32929","type":"SaveTool"},{"id":"32930","type":"ResetTool"},{"id":"32931","type":"HelpTool"}]},"id":"32932","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32942","type":"Diamond"},{"attributes":{},"id":"32912","type":"LinearScale"},{"attributes":{},"id":"32930","type":"ResetTool"},{"attributes":{"callback":null},"id":"32908","type":"DataRange1d"},{"attributes":{},"id":"32951","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32943","type":"Diamond"},{"attributes":{},"id":"32953","type":"UnionRenderers"},{"attributes":{},"id":"32931","type":"HelpTool"},{"attributes":{},"id":"32954","type":"Selection"},{"attributes":{"below":[{"id":"32916","type":"LinearAxis"}],"left":[{"id":"32921","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32916","type":"LinearAxis"},{"id":"32920","type":"Grid"},{"id":"32921","type":"LinearAxis"},{"id":"32925","type":"Grid"},{"id":"32934","type":"BoxAnnotation"},{"id":"32944","type":"GlyphRenderer"}],"title":{"id":"32947","type":"Title"},"toolbar":{"id":"32932","type":"Toolbar"},"x_range":{"id":"32908","type":"DataRange1d"},"x_scale":{"id":"32912","type":"LinearScale"},"y_range":{"id":"32910","type":"DataRange1d"},"y_scale":{"id":"32914","type":"LinearScale"}},"id":"32907","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"32910","type":"DataRange1d"},{"attributes":{},"id":"32929","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"32907","subtype":"Figure","type":"Plot"},"ticker":{"id":"32922","type":"BasicTicker"}},"id":"32925","type":"Grid"}],"root_ids":["32907"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"431fdcdc-24ff-4e5e-a46f-85b674df0692","roots":{"32907":"c5a39248-1c4c-4902-9f23-9127907ef9c4"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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