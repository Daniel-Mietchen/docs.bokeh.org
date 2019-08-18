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
      };var element = document.getElementById("0fd2266a-f561-4ccd-945d-01ad03e01eea");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0fd2266a-f561-4ccd-945d-01ad03e01eea' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"2774cb5b-49ff-431b-95c2-271371e5e154":{"roots":{"references":[{"attributes":{},"id":"28539","type":"Selection"},{"attributes":{"formatter":{"id":"28536","type":"BasicTickFormatter"},"ticker":{"id":"28505","type":"BasicTicker"}},"id":"28504","type":"LinearAxis"},{"attributes":{},"id":"28519","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"28510","type":"BasicTicker"}},"id":"28513","type":"Grid"},{"attributes":{"below":[{"id":"28504","type":"LinearAxis"}],"center":[{"id":"28508","type":"Grid"},{"id":"28513","type":"Grid"}],"left":[{"id":"28509","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28530","type":"GlyphRenderer"}],"title":{"id":"28533","type":"Title"},"toolbar":{"id":"28520","type":"Toolbar"},"x_range":{"id":"28496","type":"DataRange1d"},"x_scale":{"id":"28500","type":"LinearScale"},"y_range":{"id":"28498","type":"DataRange1d"},"y_scale":{"id":"28502","type":"LinearScale"}},"id":"28495","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28540","type":"UnionRenderers"},{"attributes":{},"id":"28510","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"28529","type":"Quad"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"28539","type":"Selection"},"selection_policy":{"id":"28540","type":"UnionRenderers"}},"id":"28527","type":"ColumnDataSource"},{"attributes":{"source":{"id":"28527","type":"ColumnDataSource"}},"id":"28531","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"28528","type":"Quad"},{"attributes":{"data_source":{"id":"28527","type":"ColumnDataSource"},"glyph":{"id":"28528","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28529","type":"Quad"},"selection_glyph":null,"view":{"id":"28531","type":"CDSView"}},"id":"28530","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28514","type":"PanTool"},{"id":"28515","type":"WheelZoomTool"},{"id":"28516","type":"BoxZoomTool"},{"id":"28517","type":"SaveTool"},{"id":"28518","type":"ResetTool"},{"id":"28519","type":"HelpTool"}]},"id":"28520","type":"Toolbar"},{"attributes":{"callback":null},"id":"28498","type":"DataRange1d"},{"attributes":{},"id":"28514","type":"PanTool"},{"attributes":{},"id":"28500","type":"LinearScale"},{"attributes":{"text":""},"id":"28533","type":"Title"},{"attributes":{},"id":"28515","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"28496","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28534","type":"BasicTickFormatter"},"ticker":{"id":"28510","type":"BasicTicker"}},"id":"28509","type":"LinearAxis"},{"attributes":{},"id":"28534","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"28538","type":"BoxAnnotation"}},"id":"28516","type":"BoxZoomTool"},{"attributes":{},"id":"28505","type":"BasicTicker"},{"attributes":{},"id":"28502","type":"LinearScale"},{"attributes":{},"id":"28536","type":"BasicTickFormatter"},{"attributes":{},"id":"28517","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28538","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"28505","type":"BasicTicker"}},"id":"28508","type":"Grid"},{"attributes":{},"id":"28518","type":"ResetTool"}],"root_ids":["28495"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"2774cb5b-49ff-431b-95c2-271371e5e154","roots":{"28495":"0fd2266a-f561-4ccd-945d-01ad03e01eea"}}];
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