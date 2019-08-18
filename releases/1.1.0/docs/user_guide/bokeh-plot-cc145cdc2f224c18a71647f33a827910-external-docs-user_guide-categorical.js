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
      };var element = document.getElementById("330bdd12-7cf7-464b-8da3-dbaff6cea00b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '330bdd12-7cf7-464b-8da3-dbaff6cea00b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"51372106-24ce-4428-af43-1b60c38a4760":{"roots":{"references":[{"attributes":{},"id":"20106","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"20096","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20097","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20113","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"20096","type":"Stack"}},"fill_alpha":{"value":0.5},"fill_color":{"value":"red"},"line_alpha":{"value":0.5},"line_color":{"value":"red"},"top":{"expr":{"id":"20097","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20112","type":"VBar"},{"attributes":{},"id":"20107","type":"CategoricalTickFormatter"},{"attributes":{"fields":["east"]},"id":"20095","type":"Stack"},{"attributes":{},"id":"20089","type":"BasicTicker"},{"attributes":{"source":{"id":"20074","type":"ColumnDataSource"}},"id":"20102","type":"CDSView"},{"attributes":{},"id":"20080","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"20094","type":"Stack"}},"fill_alpha":{"value":0.5},"fill_color":{"value":"blue"},"line_alpha":{"value":0.5},"line_color":{"value":"blue"},"top":{"expr":{"id":"20095","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20099","type":"VBar"},{"attributes":{"data_source":{"id":"20074","type":"ColumnDataSource"},"glyph":{"id":"20099","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"east","nonselection_glyph":{"id":"20100","type":"VBar"},"selection_glyph":null,"view":{"id":"20102","type":"CDSView"}},"id":"20101","type":"GlyphRenderer"},{"attributes":{},"id":"20085","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20093","type":"Toolbar"},{"attributes":{"callback":null,"data":{"east":[5,5,6,5,5,4,5,6,7,8,6,9],"west":[5,7,9,4,5,4,7,7,7,6,6,7],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"20123","type":"Selection"},"selection_policy":{"id":"20122","type":"UnionRenderers"}},"id":"20074","type":"ColumnDataSource"},{"attributes":{},"id":"20123","type":"Selection"},{"attributes":{"fields":["east"]},"id":"20096","type":"Stack"},{"attributes":{"formatter":{"id":"20107","type":"CategoricalTickFormatter"},"major_label_orientation":1,"ticker":{"id":"20085","type":"CategoricalTicker"}},"id":"20084","type":"CategoricalAxis"},{"attributes":{},"id":"20122","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"20074","type":"ColumnDataSource"},"glyph":{"id":"20112","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"west","nonselection_glyph":{"id":"20113","type":"VBar"},"selection_glyph":null,"view":{"id":"20115","type":"CDSView"}},"id":"20114","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"20085","type":"CategoricalTicker"}},"id":"20087","type":"Grid"},{"attributes":{"fields":[]},"id":"20094","type":"Stack"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"20075","type":"FactorRange"},{"attributes":{"items":[{"id":"20110","type":"LegendItem"},{"id":"20124","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"20109","type":"Legend"},{"attributes":{"formatter":{"id":"20106","type":"BasicTickFormatter"},"ticker":{"id":"20089","type":"BasicTicker"}},"id":"20088","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"20089","type":"BasicTicker"}},"id":"20092","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"20094","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20095","type":"Stack"}},"width":{"value":0.9},"x":{"field":"x"}},"id":"20100","type":"VBar"},{"attributes":{},"id":"20082","type":"LinearScale"},{"attributes":{"callback":null,"end":18,"start":0},"id":"20078","type":"DataRange1d"},{"attributes":{"label":{"value":"east"},"renderers":[{"id":"20101","type":"GlyphRenderer"}]},"id":"20110","type":"LegendItem"},{"attributes":{"label":{"value":"west"},"renderers":[{"id":"20114","type":"GlyphRenderer"}]},"id":"20124","type":"LegendItem"},{"attributes":{"below":[{"id":"20084","type":"CategoricalAxis"}],"center":[{"id":"20087","type":"Grid"},{"id":"20092","type":"Grid"},{"id":"20109","type":"Legend"}],"left":[{"id":"20088","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20101","type":"GlyphRenderer"},{"id":"20114","type":"GlyphRenderer"}],"title":{"id":"20104","type":"Title"},"toolbar":{"id":"20093","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20075","type":"FactorRange"},"x_scale":{"id":"20080","type":"CategoricalScale"},"y_range":{"id":"20078","type":"DataRange1d"},"y_scale":{"id":"20082","type":"LinearScale"}},"id":"20076","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["east","west"]},"id":"20097","type":"Stack"},{"attributes":{"source":{"id":"20074","type":"ColumnDataSource"}},"id":"20115","type":"CDSView"},{"attributes":{"text":""},"id":"20104","type":"Title"}],"root_ids":["20076"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"51372106-24ce-4428-af43-1b60c38a4760","roots":{"20076":"330bdd12-7cf7-464b-8da3-dbaff6cea00b"}}];
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