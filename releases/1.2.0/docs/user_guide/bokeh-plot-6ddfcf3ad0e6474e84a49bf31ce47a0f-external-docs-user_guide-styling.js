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
      };var element = document.getElementById("9fe8b6bc-002d-4238-912e-608ea71e2233");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9fe8b6bc-002d-4238-912e-608ea71e2233' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"fa7e073b-6a6a-4783-b83b-193b2e8d5923":{"roots":{"references":[{"attributes":{},"id":"34163","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"34130","type":"BasicTicker"}},"id":"34133","type":"Grid"},{"attributes":{"overlay":{"id":"34166","type":"BoxAnnotation"}},"id":"34141","type":"BoxZoomTool"},{"attributes":{},"id":"34164","type":"Selection"},{"attributes":{},"id":"34144","type":"HelpTool"},{"attributes":{},"id":"34125","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34139","type":"PanTool"},{"id":"34140","type":"WheelZoomTool"},{"id":"34141","type":"BoxZoomTool"},{"id":"34142","type":"SaveTool"},{"id":"34143","type":"ResetTool"},{"id":"34144","type":"HelpTool"}]},"id":"34145","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34153","type":"Circle"},{"attributes":{},"id":"34165","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"34152","type":"ColumnDataSource"},"glyph":{"id":"34153","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34154","type":"Circle"},"selection_glyph":null,"view":{"id":"34156","type":"CDSView"}},"id":"34155","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34154","type":"Circle"},{"attributes":{},"id":"34127","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34166","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"34135","type":"BasicTicker"}},"id":"34138","type":"Grid"},{"attributes":{},"id":"34130","type":"BasicTicker"},{"attributes":{},"id":"34139","type":"PanTool"},{"attributes":{"source":{"id":"34152","type":"ColumnDataSource"}},"id":"34156","type":"CDSView"},{"attributes":{},"id":"34143","type":"ResetTool"},{"attributes":{"formatter":{"id":"34163","type":"BasicTickFormatter"},"ticker":{"id":"34157","type":"FixedTicker"}},"id":"34129","type":"LinearAxis"},{"attributes":{},"id":"34140","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"34123","type":"DataRange1d"},{"attributes":{},"id":"34142","type":"SaveTool"},{"attributes":{"text":""},"id":"34159","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34164","type":"Selection"},"selection_policy":{"id":"34165","type":"UnionRenderers"}},"id":"34152","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"34121","type":"DataRange1d"},{"attributes":{"ticks":[2,3.5,4]},"id":"34157","type":"FixedTicker"},{"attributes":{"formatter":{"id":"34161","type":"BasicTickFormatter"},"ticker":{"id":"34135","type":"BasicTicker"}},"id":"34134","type":"LinearAxis"},{"attributes":{"below":[{"id":"34129","type":"LinearAxis"}],"center":[{"id":"34133","type":"Grid"},{"id":"34138","type":"Grid"}],"left":[{"id":"34134","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34155","type":"GlyphRenderer"}],"title":{"id":"34159","type":"Title"},"toolbar":{"id":"34145","type":"Toolbar"},"x_range":{"id":"34121","type":"DataRange1d"},"x_scale":{"id":"34125","type":"LinearScale"},"y_range":{"id":"34123","type":"DataRange1d"},"y_scale":{"id":"34127","type":"LinearScale"}},"id":"34120","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34161","type":"BasicTickFormatter"},{"attributes":{},"id":"34135","type":"BasicTicker"}],"root_ids":["34120"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"fa7e073b-6a6a-4783-b83b-193b2e8d5923","roots":{"34120":"9fe8b6bc-002d-4238-912e-608ea71e2233"}}];
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