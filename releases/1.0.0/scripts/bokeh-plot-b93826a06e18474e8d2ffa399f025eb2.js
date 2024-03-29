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
      };var element = document.getElementById("c463a9f3-fd65-418a-822a-f711d56b802e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c463a9f3-fd65-418a-822a-f711d56b802e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d151ba45-ba0e-47cd-bb7e-a9ecd4fada50":{"roots":{"references":[{"attributes":{"callback":null},"id":"11638","type":"DataRange1d"},{"attributes":{},"id":"11679","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11673","type":"Patches"},{"attributes":{},"id":"11652","type":"BasicTicker"},{"attributes":{},"id":"11681","type":"BasicTickFormatter"},{"attributes":{},"id":"11659","type":"SaveTool"},{"attributes":{"callback":null},"id":"11640","type":"DataRange1d"},{"attributes":{},"id":"11642","type":"LinearScale"},{"attributes":{},"id":"11660","type":"ResetTool"},{"attributes":{},"id":"11683","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11664","type":"BoxAnnotation"},{"attributes":{},"id":"11684","type":"UnionRenderers"},{"attributes":{},"id":"11661","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11656","type":"PanTool"},{"id":"11657","type":"WheelZoomTool"},{"id":"11658","type":"BoxZoomTool"},{"id":"11659","type":"SaveTool"},{"id":"11660","type":"ResetTool"},{"id":"11661","type":"HelpTool"}]},"id":"11662","type":"Toolbar"},{"attributes":{},"id":"11647","type":"BasicTicker"},{"attributes":{},"id":"11644","type":"LinearScale"},{"attributes":{"formatter":{"id":"11679","type":"BasicTickFormatter"},"plot":{"id":"11637","subtype":"Figure","type":"Plot"},"ticker":{"id":"11647","type":"BasicTicker"}},"id":"11646","type":"LinearAxis"},{"attributes":{},"id":"11657","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"11637","subtype":"Figure","type":"Plot"},"ticker":{"id":"11647","type":"BasicTicker"}},"id":"11650","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"11637","subtype":"Figure","type":"Plot"},"ticker":{"id":"11652","type":"BasicTicker"}},"id":"11655","type":"Grid"},{"attributes":{"overlay":{"id":"11664","type":"BoxAnnotation"}},"id":"11658","type":"BoxZoomTool"},{"attributes":{"source":{"id":"11671","type":"ColumnDataSource"}},"id":"11675","type":"CDSView"},{"attributes":{"data_source":{"id":"11671","type":"ColumnDataSource"},"glyph":{"id":"11672","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11673","type":"Patches"},"selection_glyph":null,"view":{"id":"11675","type":"CDSView"}},"id":"11674","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11672","type":"Patches"},{"attributes":{"below":[{"id":"11646","type":"LinearAxis"}],"left":[{"id":"11651","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11646","type":"LinearAxis"},{"id":"11650","type":"Grid"},{"id":"11651","type":"LinearAxis"},{"id":"11655","type":"Grid"},{"id":"11664","type":"BoxAnnotation"},{"id":"11674","type":"GlyphRenderer"}],"title":{"id":"11677","type":"Title"},"toolbar":{"id":"11662","type":"Toolbar"},"x_range":{"id":"11638","type":"DataRange1d"},"x_scale":{"id":"11642","type":"LinearScale"},"y_range":{"id":"11640","type":"DataRange1d"},"y_scale":{"id":"11644","type":"LinearScale"}},"id":"11637","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"11683","type":"Selection"},"selection_policy":{"id":"11684","type":"UnionRenderers"}},"id":"11671","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"11677","type":"Title"},{"attributes":{},"id":"11656","type":"PanTool"},{"attributes":{"formatter":{"id":"11681","type":"BasicTickFormatter"},"plot":{"id":"11637","subtype":"Figure","type":"Plot"},"ticker":{"id":"11652","type":"BasicTicker"}},"id":"11651","type":"LinearAxis"}],"root_ids":["11637"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"d151ba45-ba0e-47cd-bb7e-a9ecd4fada50","roots":{"11637":"c463a9f3-fd65-418a-822a-f711d56b802e"}}];
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