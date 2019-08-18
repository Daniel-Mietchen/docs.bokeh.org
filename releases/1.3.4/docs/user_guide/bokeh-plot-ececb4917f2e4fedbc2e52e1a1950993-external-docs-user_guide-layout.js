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
      };var element = document.getElementById("99472c93-d8a9-4809-8928-ffd854235e2f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '99472c93-d8a9-4809-8928-ffd854235e2f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8eb3df47-65e4-4edf-8b7d-8b5a19552875":{"roots":{"references":[{"attributes":{},"id":"26641","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26756","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"26707","type":"LinearAxis"}],"center":[{"id":"26711","type":"Grid"},{"id":"26716","type":"Grid"}],"left":[{"id":"26712","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26733","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26723","type":"Toolbar"},"x_range":{"id":"26699","type":"DataRange1d"},"x_scale":{"id":"26703","type":"LinearScale"},"y_range":{"id":"26701","type":"DataRange1d"},"y_scale":{"id":"26705","type":"LinearScale"}},"id":"26697","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26642","type":"WheelZoomTool"},{"attributes":{},"id":"26757","type":"Selection"},{"attributes":{"overlay":{"id":"26753","type":"BoxAnnotation"}},"id":"26643","type":"BoxZoomTool"},{"attributes":{},"id":"26758","type":"UnionRenderers"},{"attributes":{},"id":"26744","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26732","type":"Square"},{"attributes":{"callback":null},"id":"26699","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26759","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"26701","type":"DataRange1d"},{"attributes":{},"id":"26637","type":"BasicTicker"},{"attributes":{},"id":"26703","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26641","type":"PanTool"},{"id":"26642","type":"WheelZoomTool"},{"id":"26643","type":"BoxZoomTool"},{"id":"26644","type":"SaveTool"},{"id":"26645","type":"ResetTool"},{"id":"26646","type":"HelpTool"}]},"id":"26647","type":"Toolbar"},{"attributes":{},"id":"26644","type":"SaveTool"},{"attributes":{},"id":"26645","type":"ResetTool"},{"attributes":{"ticker":{"id":"26632","type":"BasicTicker"}},"id":"26635","type":"Grid"},{"attributes":{},"id":"26705","type":"LinearScale"},{"attributes":{},"id":"26646","type":"HelpTool"},{"attributes":{"formatter":{"id":"26750","type":"BasicTickFormatter"},"ticker":{"id":"26708","type":"BasicTicker"}},"id":"26707","type":"LinearAxis"},{"attributes":{},"id":"26713","type":"BasicTicker"},{"attributes":{},"id":"26708","type":"BasicTicker"},{"attributes":{"source":{"id":"26692","type":"ColumnDataSource"}},"id":"26696","type":"CDSView"},{"attributes":{},"id":"26665","type":"LinearScale"},{"attributes":{"ticker":{"id":"26708","type":"BasicTicker"}},"id":"26711","type":"Grid"},{"attributes":{},"id":"26632","type":"BasicTicker"},{"attributes":{"callback":null},"id":"26661","type":"DataRange1d"},{"attributes":{},"id":"26746","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"26669","type":"LinearAxis"}],"center":[{"id":"26673","type":"Grid"},{"id":"26678","type":"Grid"}],"left":[{"id":"26674","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26695","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26685","type":"Toolbar"},"x_range":{"id":"26661","type":"DataRange1d"},"x_scale":{"id":"26665","type":"LinearScale"},"y_range":{"id":"26663","type":"DataRange1d"},"y_scale":{"id":"26667","type":"LinearScale"}},"id":"26659","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"26713","type":"BasicTicker"}},"id":"26716","type":"Grid"},{"attributes":{},"id":"26629","type":"LinearScale"},{"attributes":{"callback":null},"id":"26663","type":"DataRange1d"},{"attributes":{"formatter":{"id":"26748","type":"BasicTickFormatter"},"ticker":{"id":"26713","type":"BasicTicker"}},"id":"26712","type":"LinearAxis"},{"attributes":{},"id":"26742","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"26742","type":"BasicTickFormatter"},"ticker":{"id":"26632","type":"BasicTicker"}},"id":"26631","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"26757","type":"Selection"},"selection_policy":{"id":"26758","type":"UnionRenderers"}},"id":"26730","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26717","type":"PanTool"},{"id":"26718","type":"WheelZoomTool"},{"id":"26719","type":"BoxZoomTool"},{"id":"26720","type":"SaveTool"},{"id":"26721","type":"ResetTool"},{"id":"26722","type":"HelpTool"}]},"id":"26723","type":"Toolbar"},{"attributes":{},"id":"26667","type":"LinearScale"},{"attributes":{},"id":"26755","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"26740","type":"BasicTickFormatter"},"ticker":{"id":"26637","type":"BasicTicker"}},"id":"26636","type":"LinearAxis"},{"attributes":{},"id":"26740","type":"BasicTickFormatter"},{"attributes":{},"id":"26627","type":"LinearScale"},{"attributes":{"formatter":{"id":"26746","type":"BasicTickFormatter"},"ticker":{"id":"26670","type":"BasicTicker"}},"id":"26669","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26625","type":"DataRange1d"},{"attributes":{},"id":"26675","type":"BasicTicker"},{"attributes":{},"id":"26717","type":"PanTool"},{"attributes":{},"id":"26670","type":"BasicTicker"},{"attributes":{},"id":"26718","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"26670","type":"BasicTicker"}},"id":"26673","type":"Grid"},{"attributes":{"source":{"id":"26730","type":"ColumnDataSource"}},"id":"26734","type":"CDSView"},{"attributes":{"children":[{"id":"26621","subtype":"Figure","type":"Plot"},{"id":"26659","subtype":"Figure","type":"Plot"},{"id":"26697","subtype":"Figure","type":"Plot"}]},"id":"26735","type":"Column"},{"attributes":{"overlay":{"id":"26759","type":"BoxAnnotation"}},"id":"26719","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"26675","type":"BasicTicker"}},"id":"26678","type":"Grid"},{"attributes":{"formatter":{"id":"26744","type":"BasicTickFormatter"},"ticker":{"id":"26675","type":"BasicTicker"}},"id":"26674","type":"LinearAxis"},{"attributes":{"data_source":{"id":"26730","type":"ColumnDataSource"},"glyph":{"id":"26731","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26732","type":"Square"},"selection_glyph":null,"view":{"id":"26734","type":"CDSView"}},"id":"26733","type":"GlyphRenderer"},{"attributes":{},"id":"26720","type":"SaveTool"},{"attributes":{},"id":"26721","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"26754","type":"Selection"},"selection_policy":{"id":"26755","type":"UnionRenderers"}},"id":"26692","type":"ColumnDataSource"},{"attributes":{},"id":"26722","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26679","type":"PanTool"},{"id":"26680","type":"WheelZoomTool"},{"id":"26681","type":"BoxZoomTool"},{"id":"26682","type":"SaveTool"},{"id":"26683","type":"ResetTool"},{"id":"26684","type":"HelpTool"}]},"id":"26685","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26731","type":"Square"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26693","type":"Triangle"},{"attributes":{"data_source":{"id":"26692","type":"ColumnDataSource"},"glyph":{"id":"26693","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26694","type":"Triangle"},"selection_glyph":null,"view":{"id":"26696","type":"CDSView"}},"id":"26695","type":"GlyphRenderer"},{"attributes":{},"id":"26750","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"26631","type":"LinearAxis"}],"center":[{"id":"26635","type":"Grid"},{"id":"26640","type":"Grid"}],"left":[{"id":"26636","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"26657","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"26647","type":"Toolbar"},"x_range":{"id":"26623","type":"DataRange1d"},"x_scale":{"id":"26627","type":"LinearScale"},"y_range":{"id":"26625","type":"DataRange1d"},"y_scale":{"id":"26629","type":"LinearScale"}},"id":"26621","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26679","type":"PanTool"},{"attributes":{},"id":"26751","type":"Selection"},{"attributes":{},"id":"26680","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26655","type":"Circle"},{"attributes":{},"id":"26748","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"26756","type":"BoxAnnotation"}},"id":"26681","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26656","type":"Circle"},{"attributes":{"callback":null},"id":"26623","type":"DataRange1d"},{"attributes":{},"id":"26682","type":"SaveTool"},{"attributes":{},"id":"26752","type":"UnionRenderers"},{"attributes":{"source":{"id":"26654","type":"ColumnDataSource"}},"id":"26658","type":"CDSView"},{"attributes":{},"id":"26683","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26753","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"26694","type":"Triangle"},{"attributes":{},"id":"26754","type":"Selection"},{"attributes":{"data_source":{"id":"26654","type":"ColumnDataSource"},"glyph":{"id":"26655","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26656","type":"Circle"},"selection_glyph":null,"view":{"id":"26658","type":"CDSView"}},"id":"26657","type":"GlyphRenderer"},{"attributes":{},"id":"26684","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"26751","type":"Selection"},"selection_policy":{"id":"26752","type":"UnionRenderers"}},"id":"26654","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"26637","type":"BasicTicker"}},"id":"26640","type":"Grid"}],"root_ids":["26735"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"8eb3df47-65e4-4edf-8b7d-8b5a19552875","roots":{"26735":"99472c93-d8a9-4809-8928-ffd854235e2f"}}];
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