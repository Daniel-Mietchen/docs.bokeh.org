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
      };var element = document.getElementById("b8f39817-0ddd-4514-97bf-921eab6e7daf");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b8f39817-0ddd-4514-97bf-921eab6e7daf' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"fdb9a021-d052-41c2-8050-a3c8cbbd1f22":{"roots":{"references":[{"attributes":{"data_source":{"id":"18603","type":"ColumnDataSource"},"glyph":{"id":"18604","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18605","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18607","type":"CDSView"}},"id":"18606","type":"GlyphRenderer"},{"attributes":{},"id":"18615","type":"BasicTickFormatter"},{"attributes":{},"id":"18581","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18590","type":"PanTool"},{"id":"18591","type":"WheelZoomTool"},{"id":"18592","type":"BoxZoomTool"},{"id":"18593","type":"SaveTool"},{"id":"18594","type":"ResetTool"},{"id":"18595","type":"HelpTool"}]},"id":"18596","type":"Toolbar"},{"attributes":{"index":0,"label":{"value":"orange"},"renderers":[{"id":"18606","type":"GlyphRenderer"}]},"id":"18608","type":"LegendItem"},{"attributes":{},"id":"18591","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"18613","type":"BasicTickFormatter"},"ticker":{"id":"18581","type":"BasicTicker"}},"id":"18580","type":"LinearAxis"},{"attributes":{},"id":"18590","type":"PanTool"},{"attributes":{},"id":"18594","type":"ResetTool"},{"attributes":{"source":{"id":"18603","type":"ColumnDataSource"}},"id":"18607","type":"CDSView"},{"attributes":{"text":""},"id":"18611","type":"Title"},{"attributes":{"index":1,"label":{"value":"red"},"renderers":[{"id":"18606","type":"GlyphRenderer"}]},"id":"18609","type":"LegendItem"},{"attributes":{},"id":"18618","type":"Selection"},{"attributes":{"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18604","type":"MultiLine"},{"attributes":{"callback":null,"data":{"line_color":["orange","red"],"xs":[[1,2,3],[1,2,3]],"ys":[[1,3,2],[3,4,3]]},"selected":{"id":"18618","type":"Selection"},"selection_policy":{"id":"18617","type":"UnionRenderers"}},"id":"18603","type":"ColumnDataSource"},{"attributes":{},"id":"18613","type":"BasicTickFormatter"},{"attributes":{},"id":"18595","type":"HelpTool"},{"attributes":{},"id":"18617","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"18574","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18615","type":"BasicTickFormatter"},"ticker":{"id":"18586","type":"BasicTicker"}},"id":"18585","type":"LinearAxis"},{"attributes":{"items":[{"id":"18608","type":"LegendItem"},{"id":"18609","type":"LegendItem"}]},"id":"18610","type":"Legend"},{"attributes":{},"id":"18576","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"18586","type":"BasicTicker"}},"id":"18589","type":"Grid"},{"attributes":{},"id":"18578","type":"LinearScale"},{"attributes":{"overlay":{"id":"18619","type":"BoxAnnotation"}},"id":"18592","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"18581","type":"BasicTicker"}},"id":"18584","type":"Grid"},{"attributes":{"below":[{"id":"18580","type":"LinearAxis"}],"center":[{"id":"18584","type":"Grid"},{"id":"18589","type":"Grid"},{"id":"18610","type":"Legend"}],"left":[{"id":"18585","type":"LinearAxis"}],"renderers":[{"id":"18606","type":"GlyphRenderer"}],"title":{"id":"18611","type":"Title"},"toolbar":{"id":"18596","type":"Toolbar"},"x_range":{"id":"18572","type":"DataRange1d"},"x_scale":{"id":"18576","type":"LinearScale"},"y_range":{"id":"18574","type":"DataRange1d"},"y_scale":{"id":"18578","type":"LinearScale"}},"id":"18571","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18619","type":"BoxAnnotation"},{"attributes":{},"id":"18586","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18605","type":"MultiLine"},{"attributes":{"callback":null},"id":"18572","type":"DataRange1d"},{"attributes":{},"id":"18593","type":"SaveTool"}],"root_ids":["18571"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"fdb9a021-d052-41c2-8050-a3c8cbbd1f22","roots":{"18571":"b8f39817-0ddd-4514-97bf-921eab6e7daf"}}];
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