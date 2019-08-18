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
      };var element = document.getElementById("3ba948e4-bbeb-4b1c-b093-bad5b28c09a4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3ba948e4-bbeb-4b1c-b093-bad5b28c09a4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fb2bf724-a9d0-4383-9a20-8b49934f747a":{"roots":{"references":[{"attributes":{"formatter":{"id":"33300","type":"BasicTickFormatter"},"ticker":{"id":"33268","type":"BasicTicker"}},"id":"33267","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33259","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33303","type":"BoxAnnotation"},{"attributes":{},"id":"33300","type":"BasicTickFormatter"},{"attributes":{},"id":"33302","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"33298","type":"BasicTickFormatter"},"ticker":{"id":"33273","type":"BasicTicker"}},"id":"33272","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33277","type":"PanTool"},{"id":"33278","type":"WheelZoomTool"},{"id":"33279","type":"BoxZoomTool"},{"id":"33280","type":"SaveTool"},{"id":"33281","type":"ResetTool"},{"id":"33282","type":"HelpTool"}]},"id":"33283","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33301","type":"Selection"},"selection_policy":{"id":"33302","type":"UnionRenderers"}},"id":"33290","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33291","type":"Circle"},{"attributes":{"overlay":{"id":"33303","type":"BoxAnnotation"}},"id":"33279","type":"BoxZoomTool"},{"attributes":{},"id":"33265","type":"LinearScale"},{"attributes":{},"id":"33277","type":"PanTool"},{"attributes":{},"id":"33301","type":"Selection"},{"attributes":{"ticker":{"id":"33268","type":"BasicTicker"}},"id":"33271","type":"Grid"},{"attributes":{"callback":null},"id":"33261","type":"DataRange1d"},{"attributes":{},"id":"33280","type":"SaveTool"},{"attributes":{},"id":"33268","type":"BasicTicker"},{"attributes":{},"id":"33273","type":"BasicTicker"},{"attributes":{"text":""},"id":"33296","type":"Title"},{"attributes":{},"id":"33282","type":"HelpTool"},{"attributes":{},"id":"33298","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"33290","type":"ColumnDataSource"}},"id":"33294","type":"CDSView"},{"attributes":{},"id":"33278","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33292","type":"Circle"},{"attributes":{},"id":"33281","type":"ResetTool"},{"attributes":{"data_source":{"id":"33290","type":"ColumnDataSource"},"glyph":{"id":"33291","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33292","type":"Circle"},"selection_glyph":null,"view":{"id":"33294","type":"CDSView"}},"id":"33293","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"33267","type":"LinearAxis"}],"center":[{"id":"33271","type":"Grid"},{"id":"33276","type":"Grid"}],"left":[{"id":"33272","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"33293","type":"GlyphRenderer"}],"title":{"id":"33296","type":"Title"},"toolbar":{"id":"33283","type":"Toolbar"},"x_range":{"id":"33259","type":"DataRange1d"},"x_scale":{"id":"33263","type":"LinearScale"},"y_range":{"id":"33261","type":"DataRange1d"},"y_scale":{"id":"33265","type":"LinearScale"}},"id":"33258","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33263","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"33273","type":"BasicTicker"}},"id":"33276","type":"Grid"}],"root_ids":["33258"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"fb2bf724-a9d0-4383-9a20-8b49934f747a","roots":{"33258":"3ba948e4-bbeb-4b1c-b093-bad5b28c09a4"}}];
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