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
      };var element = document.getElementById("4598aa44-0147-4dfb-8a9d-0d8001ae95a1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4598aa44-0147-4dfb-8a9d-0d8001ae95a1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5ffb0efb-1bc5-4844-9f82-96c38bf4a898":{"roots":{"references":[{"attributes":{},"id":"24518","type":"ResetTool"},{"attributes":{"formatter":{"id":"24539","type":"BasicTickFormatter"},"ticker":{"id":"24505","type":"BasicTicker"}},"id":"24504","type":"LinearAxis"},{"attributes":{},"id":"24519","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"24510","type":"BasicTicker"}},"id":"24513","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24514","type":"PanTool"},{"id":"24515","type":"WheelZoomTool"},{"id":"24516","type":"BoxZoomTool"},{"id":"24517","type":"SaveTool"},{"id":"24518","type":"ResetTool"},{"id":"24519","type":"HelpTool"}]},"id":"24520","type":"Toolbar"},{"attributes":{},"id":"24515","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"24494","type":"ColumnDataSource"},"glyph":{"id":"24528","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24529","type":"Line"},"selection_glyph":null,"view":{"id":"24531","type":"CDSView"}},"id":"24530","type":"GlyphRenderer"},{"attributes":{"args":{"source":{"id":"24494","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        for (var i = 0; i &lt; x.length; i++) {\\n            y[i] = Math.pow(x[i], f)\\n        }\\n        source.change.emit();\\n    "},"id":"24532","type":"CustomJS"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"24528","type":"Line"},{"attributes":{"source":{"id":"24494","type":"ColumnDataSource"}},"id":"24531","type":"CDSView"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"24532","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"24533","type":"Slider"},{"attributes":{},"id":"24510","type":"BasicTicker"},{"attributes":{},"id":"24541","type":"Selection"},{"attributes":{},"id":"24517","type":"SaveTool"},{"attributes":{},"id":"24539","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"24533","type":"Slider"},{"id":"24495","subtype":"Figure","type":"Plot"}]},"id":"24534","type":"Column"},{"attributes":{},"id":"24514","type":"PanTool"},{"attributes":{"callback":null},"id":"24498","type":"DataRange1d"},{"attributes":{"text":""},"id":"24535","type":"Title"},{"attributes":{},"id":"24537","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"24537","type":"BasicTickFormatter"},"ticker":{"id":"24510","type":"BasicTicker"}},"id":"24509","type":"LinearAxis"},{"attributes":{"callback":null},"id":"24496","type":"DataRange1d"},{"attributes":{"ticker":{"id":"24505","type":"BasicTicker"}},"id":"24508","type":"Grid"},{"attributes":{},"id":"24542","type":"UnionRenderers"},{"attributes":{},"id":"24500","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24543","type":"BoxAnnotation"},{"attributes":{},"id":"24502","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"24529","type":"Line"},{"attributes":{"overlay":{"id":"24543","type":"BoxAnnotation"}},"id":"24516","type":"BoxZoomTool"},{"attributes":{},"id":"24505","type":"BasicTicker"},{"attributes":{"below":[{"id":"24504","type":"LinearAxis"}],"center":[{"id":"24508","type":"Grid"},{"id":"24513","type":"Grid"}],"left":[{"id":"24509","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"24530","type":"GlyphRenderer"}],"title":{"id":"24535","type":"Title"},"toolbar":{"id":"24520","type":"Toolbar"},"x_range":{"id":"24496","type":"DataRange1d"},"x_scale":{"id":"24500","type":"LinearScale"},"y_range":{"id":"24498","type":"DataRange1d"},"y_scale":{"id":"24502","type":"LinearScale"}},"id":"24495","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"24541","type":"Selection"},"selection_policy":{"id":"24542","type":"UnionRenderers"}},"id":"24494","type":"ColumnDataSource"}],"root_ids":["24534"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"5ffb0efb-1bc5-4844-9f82-96c38bf4a898","roots":{"24534":"4598aa44-0147-4dfb-8a9d-0d8001ae95a1"}}];
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