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
      };var element = document.getElementById("cbe1be99-94d3-4e43-903c-d9bd2589c76f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cbe1be99-94d3-4e43-903c-d9bd2589c76f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"38f312d5-a31b-417f-a4ee-b2917b86a4be":{"roots":{"references":[{"attributes":{"below":[{"id":"19182","type":"CategoricalAxis"}],"center":[{"id":"19185","type":"Grid"},{"id":"19190","type":"Grid"},{"id":"19202","type":"Legend"}],"left":[{"id":"19186","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19195","type":"GlyphRenderer"}],"title":{"id":"19172","type":"Title"},"toolbar":{"id":"19191","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19174","type":"FactorRange"},"x_scale":{"id":"19178","type":"CategoricalScale"},"y_range":{"id":"19176","type":"Range1d"},"y_scale":{"id":"19180","type":"LinearScale"}},"id":"19171","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19174","type":"FactorRange"},{"attributes":{},"id":"19209","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19183","type":"CategoricalTicker"}},"id":"19185","type":"Grid"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19210","type":"Selection"},"selection_policy":{"id":"19209","type":"UnionRenderers"}},"id":"19170","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19193","type":"VBar"},{"attributes":{},"id":"19178","type":"CategoricalScale"},{"attributes":{"dimension":1,"ticker":{"id":"19187","type":"BasicTicker"}},"id":"19190","type":"Grid"},{"attributes":{"data_source":{"id":"19170","type":"ColumnDataSource"},"glyph":{"id":"19193","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19194","type":"VBar"},"selection_glyph":null,"view":{"id":"19196","type":"CDSView"}},"id":"19195","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19194","type":"VBar"},{"attributes":{},"id":"19187","type":"BasicTicker"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"19195","type":"GlyphRenderer"}]},"id":"19203","type":"LegendItem"},{"attributes":{},"id":"19210","type":"Selection"},{"attributes":{"source":{"id":"19170","type":"ColumnDataSource"}},"id":"19196","type":"CDSView"},{"attributes":{"callback":null,"end":9},"id":"19176","type":"Range1d"},{"attributes":{"formatter":{"id":"19199","type":"BasicTickFormatter"},"ticker":{"id":"19187","type":"BasicTicker"}},"id":"19186","type":"LinearAxis"},{"attributes":{},"id":"19200","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"19200","type":"CategoricalTickFormatter"},"ticker":{"id":"19183","type":"CategoricalTicker"}},"id":"19182","type":"CategoricalAxis"},{"attributes":{"items":[{"id":"19203","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"19202","type":"Legend"},{"attributes":{"text":"Fruit Counts"},"id":"19172","type":"Title"},{"attributes":{},"id":"19183","type":"CategoricalTicker"},{"attributes":{},"id":"19180","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19191","type":"Toolbar"},{"attributes":{},"id":"19199","type":"BasicTickFormatter"}],"root_ids":["19171"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"38f312d5-a31b-417f-a4ee-b2917b86a4be","roots":{"19171":"cbe1be99-94d3-4e43-903c-d9bd2589c76f"}}];
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