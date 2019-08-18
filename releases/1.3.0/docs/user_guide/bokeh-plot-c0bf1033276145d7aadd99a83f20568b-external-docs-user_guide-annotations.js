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
      };var element = document.getElementById("01334f06-c7f5-46c9-b646-607e31317ec8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '01334f06-c7f5-46c9-b646-607e31317ec8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"52139e25-1046-4d43-a89f-e2d0010b9cd0":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18151","type":"PanTool"},{"id":"18152","type":"WheelZoomTool"},{"id":"18153","type":"BoxZoomTool"},{"id":"18154","type":"SaveTool"},{"id":"18155","type":"ResetTool"},{"id":"18156","type":"HelpTool"}]},"id":"18157","type":"Toolbar"},{"attributes":{"callback":null},"id":"18135","type":"DataRange1d"},{"attributes":{},"id":"18176","type":"UnionRenderers"},{"attributes":{},"id":"18147","type":"BasicTicker"},{"attributes":{},"id":"18174","type":"BasicTickFormatter"},{"attributes":{},"id":"18151","type":"PanTool"},{"attributes":{"data_source":{"id":"18164","type":"ColumnDataSource"},"glyph":{"id":"18165","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18166","type":"Circle"},"selection_glyph":null,"view":{"id":"18168","type":"CDSView"}},"id":"18167","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18165","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18175","type":"BoxAnnotation"},{"attributes":{},"id":"18139","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"18147","type":"BasicTicker"}},"id":"18150","type":"Grid"},{"attributes":{},"id":"18152","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"18142","type":"BasicTicker"}},"id":"18145","type":"Grid"},{"attributes":{"formatter":{"id":"18174","type":"BasicTickFormatter"},"ticker":{"id":"18147","type":"BasicTicker"}},"id":"18146","type":"LinearAxis"},{"attributes":{},"id":"18156","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"18177","type":"Selection"},"selection_policy":{"id":"18176","type":"UnionRenderers"}},"id":"18164","type":"ColumnDataSource"},{"attributes":{},"id":"18154","type":"SaveTool"},{"attributes":{"overlay":{"id":"18175","type":"BoxAnnotation"}},"id":"18153","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18141","type":"LinearAxis"},{"id":"18169","type":"Title"}],"center":[{"id":"18145","type":"Grid"},{"id":"18150","type":"Grid"}],"left":[{"id":"18146","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"18167","type":"GlyphRenderer"}],"title":{"id":"18131","type":"Title"},"title_location":"left","toolbar":{"id":"18157","type":"Toolbar"},"x_range":{"id":"18133","type":"DataRange1d"},"x_scale":{"id":"18137","type":"LinearScale"},"y_range":{"id":"18135","type":"DataRange1d"},"y_scale":{"id":"18139","type":"LinearScale"}},"id":"18130","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"18133","type":"DataRange1d"},{"attributes":{},"id":"18172","type":"BasicTickFormatter"},{"attributes":{},"id":"18142","type":"BasicTicker"},{"attributes":{},"id":"18155","type":"ResetTool"},{"attributes":{"text":"Left Title"},"id":"18131","type":"Title"},{"attributes":{},"id":"18137","type":"LinearScale"},{"attributes":{},"id":"18177","type":"Selection"},{"attributes":{"formatter":{"id":"18172","type":"BasicTickFormatter"},"ticker":{"id":"18142","type":"BasicTicker"}},"id":"18141","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18166","type":"Circle"},{"attributes":{"source":{"id":"18164","type":"ColumnDataSource"}},"id":"18168","type":"CDSView"},{"attributes":{"align":"center","text":"Bottom Centered Title"},"id":"18169","type":"Title"}],"root_ids":["18130"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"52139e25-1046-4d43-a89f-e2d0010b9cd0","roots":{"18130":"01334f06-c7f5-46c9-b646-607e31317ec8"}}];
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