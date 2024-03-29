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
      };var element = document.getElementById("47a2c4b4-401b-4051-ae55-92ccf55fb443");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '47a2c4b4-401b-4051-ae55-92ccf55fb443' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"75c624b2-cd22-41b6-a24b-6a2d4dab5ac7":{"roots":{"references":[{"attributes":{"overlay":{"id":"14011","type":"BoxAnnotation"}},"id":"14005","type":"BoxZoomTool"},{"attributes":{},"id":"14004","type":"WheelZoomTool"},{"attributes":{},"id":"14025","type":"BasicTickFormatter"},{"attributes":{},"id":"13994","type":"BasicTicker"},{"attributes":{},"id":"13999","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14011","type":"BoxAnnotation"},{"attributes":{},"id":"14006","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14019","type":"Circle"},{"attributes":{"below":[{"id":"13993","type":"LinearAxis"}],"left":[{"id":"13998","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"13993","type":"LinearAxis"},{"id":"13997","type":"Grid"},{"id":"13998","type":"LinearAxis"},{"id":"14002","type":"Grid"},{"id":"14011","type":"BoxAnnotation"},{"id":"14021","type":"GlyphRenderer"}],"title":{"id":"14023","type":"Title"},"toolbar":{"id":"14009","type":"Toolbar"},"x_range":{"id":"13985","type":"DataRange1d"},"x_scale":{"id":"13989","type":"LinearScale"},"y_range":{"id":"13987","type":"DataRange1d"},"y_scale":{"id":"13991","type":"LinearScale"}},"id":"13984","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"13984","subtype":"Figure","type":"Plot"},"ticker":{"id":"13999","type":"BasicTicker"}},"id":"14002","type":"Grid"},{"attributes":{"callback":null},"id":"13985","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"14023","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14030","type":"Selection"},"selection_policy":{"id":"14031","type":"UnionRenderers"}},"id":"14018","type":"ColumnDataSource"},{"attributes":{},"id":"14027","type":"BasicTickFormatter"},{"attributes":{},"id":"14031","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"14027","type":"BasicTickFormatter"},"plot":{"id":"13984","subtype":"Figure","type":"Plot"},"ticker":{"id":"13994","type":"BasicTicker"}},"id":"13993","type":"LinearAxis"},{"attributes":{"source":{"id":"14018","type":"ColumnDataSource"}},"id":"14022","type":"CDSView"},{"attributes":{},"id":"13991","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14003","type":"PanTool"},{"id":"14004","type":"WheelZoomTool"},{"id":"14005","type":"BoxZoomTool"},{"id":"14006","type":"SaveTool"},{"id":"14007","type":"ResetTool"},{"id":"14008","type":"HelpTool"}]},"id":"14009","type":"Toolbar"},{"attributes":{"data_source":{"id":"14018","type":"ColumnDataSource"},"glyph":{"id":"14019","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14020","type":"Circle"},"selection_glyph":null,"view":{"id":"14022","type":"CDSView"}},"id":"14021","type":"GlyphRenderer"},{"attributes":{},"id":"14007","type":"ResetTool"},{"attributes":{},"id":"14008","type":"HelpTool"},{"attributes":{"plot":{"id":"13984","subtype":"Figure","type":"Plot"},"ticker":{"id":"13994","type":"BasicTicker"}},"id":"13997","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14020","type":"Circle"},{"attributes":{"formatter":{"id":"14025","type":"BasicTickFormatter"},"plot":{"id":"13984","subtype":"Figure","type":"Plot"},"ticker":{"id":"13999","type":"BasicTicker"}},"id":"13998","type":"LinearAxis"},{"attributes":{},"id":"14030","type":"Selection"},{"attributes":{"callback":null},"id":"13987","type":"DataRange1d"},{"attributes":{},"id":"13989","type":"LinearScale"},{"attributes":{},"id":"14003","type":"PanTool"}],"root_ids":["13984"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"75c624b2-cd22-41b6-a24b-6a2d4dab5ac7","roots":{"13984":"47a2c4b4-401b-4051-ae55-92ccf55fb443"}}];
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