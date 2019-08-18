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
      };var element = document.getElementById("a59fd65c-e170-4f30-8b76-666d49ca61f9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a59fd65c-e170-4f30-8b76-666d49ca61f9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"72363f2e-9984-4edb-a3c2-3e9cd9ce7f12":{"roots":{"references":[{"attributes":{},"id":"19860","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"19841","type":"CategoricalAxis"}],"center":[{"id":"19844","type":"Grid"},{"id":"19849","type":"Grid"}],"left":[{"id":"19845","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19854","type":"GlyphRenderer"}],"title":{"id":"19831","type":"Title"},"toolbar":{"id":"19850","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19833","type":"FactorRange"},"x_scale":{"id":"19837","type":"CategoricalScale"},"y_range":{"id":"19835","type":"DataRange1d"},"y_scale":{"id":"19839","type":"LinearScale"}},"id":"19830","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"19851","type":"ColumnDataSource"},"glyph":{"id":"19852","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19853","type":"VBar"},"selection_glyph":null,"view":{"id":"19855","type":"CDSView"}},"id":"19854","type":"GlyphRenderer"},{"attributes":{},"id":"19837","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"19860","type":"BasicTickFormatter"},"ticker":{"id":"19846","type":"BasicTicker"}},"id":"19845","type":"LinearAxis"},{"attributes":{"source":{"id":"19851","type":"ColumnDataSource"}},"id":"19855","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19852","type":"VBar"},{"attributes":{"text":"Fruit Counts"},"id":"19831","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"19846","type":"BasicTicker"}},"id":"19849","type":"Grid"},{"attributes":{},"id":"19839","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19853","type":"VBar"},{"attributes":{},"id":"19862","type":"Selection"},{"attributes":{},"id":"19861","type":"UnionRenderers"},{"attributes":{},"id":"19858","type":"CategoricalTickFormatter"},{"attributes":{},"id":"19842","type":"CategoricalTicker"},{"attributes":{"grid_line_color":null,"ticker":{"id":"19842","type":"CategoricalTicker"}},"id":"19844","type":"Grid"},{"attributes":{},"id":"19846","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19833","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19850","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19862","type":"Selection"},"selection_policy":{"id":"19861","type":"UnionRenderers"}},"id":"19851","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"19858","type":"CategoricalTickFormatter"},"ticker":{"id":"19842","type":"CategoricalTicker"}},"id":"19841","type":"CategoricalAxis"},{"attributes":{"callback":null,"start":0},"id":"19835","type":"DataRange1d"}],"root_ids":["19830"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"72363f2e-9984-4edb-a3c2-3e9cd9ce7f12","roots":{"19830":"a59fd65c-e170-4f30-8b76-666d49ca61f9"}}];
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