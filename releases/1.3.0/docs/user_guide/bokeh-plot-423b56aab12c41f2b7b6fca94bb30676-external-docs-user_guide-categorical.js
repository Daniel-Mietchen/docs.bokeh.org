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
      };var element = document.getElementById("a81c701d-2253-4e59-9068-87fa9aa57317");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a81c701d-2253-4e59-9068-87fa9aa57317' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"57298e4a-fff3-4183-b2ef-73a0ff5dd5ce":{"roots":{"references":[{"attributes":{"label":{"value":"west"},"renderers":[{"id":"20818","type":"GlyphRenderer"}]},"id":"20828","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20797","type":"Toolbar"},{"attributes":{"data_source":{"id":"20778","type":"ColumnDataSource"},"glyph":{"id":"20803","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"east","nonselection_glyph":{"id":"20804","type":"VBar"},"selection_glyph":null,"view":{"id":"20806","type":"CDSView"}},"id":"20805","type":"GlyphRenderer"},{"attributes":{"fields":["east","west"]},"id":"20801","type":"Stack"},{"attributes":{},"id":"20789","type":"CategoricalTicker"},{"attributes":{},"id":"20812","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"20793","type":"BasicTicker"}},"id":"20796","type":"Grid"},{"attributes":{"fields":["east"]},"id":"20799","type":"Stack"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"20779","type":"FactorRange"},{"attributes":{"formatter":{"id":"20812","type":"BasicTickFormatter"},"ticker":{"id":"20793","type":"BasicTicker"}},"id":"20792","type":"LinearAxis"},{"attributes":{},"id":"20810","type":"CategoricalTickFormatter"},{"attributes":{"fields":["east"]},"id":"20800","type":"Stack"},{"attributes":{"source":{"id":"20778","type":"ColumnDataSource"}},"id":"20806","type":"CDSView"},{"attributes":{"callback":null,"data":{"east":[5,5,6,5,5,4,5,6,7,8,6,9],"west":[5,7,9,4,5,4,7,7,7,6,6,7],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"20827","type":"Selection"},"selection_policy":{"id":"20826","type":"UnionRenderers"}},"id":"20778","type":"ColumnDataSource"},{"attributes":{},"id":"20827","type":"Selection"},{"attributes":{"below":[{"id":"20788","type":"CategoricalAxis"}],"center":[{"id":"20791","type":"Grid"},{"id":"20796","type":"Grid"},{"id":"20813","type":"Legend"}],"left":[{"id":"20792","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20805","type":"GlyphRenderer"},{"id":"20818","type":"GlyphRenderer"}],"title":{"id":"20808","type":"Title"},"toolbar":{"id":"20797","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20779","type":"FactorRange"},"x_scale":{"id":"20784","type":"CategoricalScale"},"y_range":{"id":"20782","type":"DataRange1d"},"y_scale":{"id":"20786","type":"LinearScale"}},"id":"20780","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"20810","type":"CategoricalTickFormatter"},"major_label_orientation":1,"ticker":{"id":"20789","type":"CategoricalTicker"}},"id":"20788","type":"CategoricalAxis"},{"attributes":{},"id":"20826","type":"UnionRenderers"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20789","type":"CategoricalTicker"}},"id":"20791","type":"Grid"},{"attributes":{},"id":"20793","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"20798","type":"Stack"}},"fill_alpha":{"value":0.5},"fill_color":{"value":"blue"},"line_alpha":{"value":0.5},"line_color":{"value":"blue"},"top":{"expr":{"id":"20799","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20803","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"20800","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20801","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20817","type":"VBar"},{"attributes":{"label":{"value":"east"},"renderers":[{"id":"20805","type":"GlyphRenderer"}]},"id":"20814","type":"LegendItem"},{"attributes":{"source":{"id":"20778","type":"ColumnDataSource"}},"id":"20819","type":"CDSView"},{"attributes":{},"id":"20784","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"20778","type":"ColumnDataSource"},"glyph":{"id":"20816","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"west","nonselection_glyph":{"id":"20817","type":"VBar"},"selection_glyph":null,"view":{"id":"20819","type":"CDSView"}},"id":"20818","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":18,"start":0},"id":"20782","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"20798","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20799","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20804","type":"VBar"},{"attributes":{"fields":[]},"id":"20798","type":"Stack"},{"attributes":{"text":""},"id":"20808","type":"Title"},{"attributes":{},"id":"20786","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"20800","type":"Stack"}},"fill_alpha":{"value":0.5},"fill_color":{"value":"red"},"line_alpha":{"value":0.5},"line_color":{"value":"red"},"top":{"expr":{"id":"20801","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20816","type":"VBar"},{"attributes":{"items":[{"id":"20814","type":"LegendItem"},{"id":"20828","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"20813","type":"Legend"}],"root_ids":["20780"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"57298e4a-fff3-4183-b2ef-73a0ff5dd5ce","roots":{"20780":"a81c701d-2253-4e59-9068-87fa9aa57317"}}];
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