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
      };var element = document.getElementById("d2fc3c7a-314d-49e2-91c3-24689256a15e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd2fc3c7a-314d-49e2-91c3-24689256a15e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"1ea3eef0-a784-4ba1-95de-2e20388bbb86":{"roots":{"references":[{"attributes":{},"id":"35356","type":"SaveTool"},{"attributes":{},"id":"35378","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"35375","type":"BasicTickFormatter"},"ticker":{"id":"35349","type":"BasicTicker"}},"id":"35348","type":"LinearAxis"},{"attributes":{"below":[{"id":"35343","type":"LinearAxis"}],"center":[{"id":"35347","type":"Grid"},{"id":"35352","type":"Grid"}],"left":[{"id":"35348","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"35371","type":"GlyphRenderer"}],"title":{"id":"35333","type":"Title"},"toolbar":{"id":"35360","type":"Toolbar"},"x_range":{"id":"35335","type":"DataRange1d"},"x_scale":{"id":"35339","type":"LinearScale"},"y_range":{"id":"35337","type":"DataRange1d"},"y_scale":{"id":"35341","type":"LinearScale"}},"id":"35332","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35357","type":"ResetTool"},{"attributes":{},"id":"35379","type":"Selection"},{"attributes":{},"id":"35349","type":"BasicTicker"},{"attributes":{"ticker":{"id":"35344","type":"BasicTicker"}},"id":"35347","type":"Grid"},{"attributes":{},"id":"35358","type":"HelpTool"},{"attributes":{"text":"Mouse over the dots"},"id":"35333","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35380","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"35349","type":"BasicTicker"}},"id":"35352","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"35359","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"35370","type":"Circle"},{"attributes":{"callback":null},"id":"35335","type":"DataRange1d"},{"attributes":{"callback":null},"id":"35337","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"35369","type":"Circle"},{"attributes":{"data_source":{"id":"35331","type":"ColumnDataSource"},"glyph":{"id":"35369","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35370","type":"Circle"},"selection_glyph":null,"view":{"id":"35372","type":"CDSView"}},"id":"35371","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35353","type":"PanTool"},{"id":"35354","type":"WheelZoomTool"},{"id":"35355","type":"BoxZoomTool"},{"id":"35356","type":"SaveTool"},{"id":"35357","type":"ResetTool"},{"id":"35358","type":"HelpTool"},{"id":"35359","type":"HoverTool"}]},"id":"35360","type":"Toolbar"},{"attributes":{},"id":"35344","type":"BasicTicker"},{"attributes":{"source":{"id":"35331","type":"ColumnDataSource"}},"id":"35372","type":"CDSView"},{"attributes":{},"id":"35353","type":"PanTool"},{"attributes":{},"id":"35339","type":"LinearScale"},{"attributes":{},"id":"35354","type":"WheelZoomTool"},{"attributes":{},"id":"35375","type":"BasicTickFormatter"},{"attributes":{},"id":"35341","type":"LinearScale"},{"attributes":{"overlay":{"id":"35380","type":"BoxAnnotation"}},"id":"35355","type":"BoxZoomTool"},{"attributes":{},"id":"35377","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"35377","type":"BasicTickFormatter"},"ticker":{"id":"35344","type":"BasicTicker"}},"id":"35343","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"35379","type":"Selection"},"selection_policy":{"id":"35378","type":"UnionRenderers"}},"id":"35331","type":"ColumnDataSource"}],"root_ids":["35332"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"1ea3eef0-a784-4ba1-95de-2e20388bbb86","roots":{"35332":"d2fc3c7a-314d-49e2-91c3-24689256a15e"}}];
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