(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("e5b3edb0-5714-4a66-ac3d-a6863fd75f35");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5b3edb0-5714-4a66-ac3d-a6863fd75f35' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"abeb8edd-12bf-4c00-a243-17c1fe6cd3c5":{"roots":{"references":[{"attributes":{},"id":"19567","type":"LinearScale"},{"attributes":{"plot":{"id":"19561","subtype":"Figure","type":"Plot"},"ticker":{"id":"19572","type":"BasicTicker"}},"id":"19575","type":"Grid"},{"attributes":{},"id":"19581","type":"WheelZoomTool"},{"attributes":{},"id":"19577","type":"CategoricalTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"19561","subtype":"Figure","type":"Plot"},"ticker":{"id":"19577","type":"CategoricalTicker"}},"id":"19579","type":"Grid"},{"attributes":{},"id":"19584","type":"ResetTool"},{"attributes":{"callback":null,"data":{"Time_25%":{"__ndarray__":"zMzMzMxMKECamZmZmRkmQDMzMzMzMyZAAAAAAACAJkDNzMzMzMwlQDQzMzMzsyVANDMzMzOzJUBmZmZmZmYlQDQzMzMzsyVAmpmZmZmZJEA0MzMzM7MkQDQzMzMzsyRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAMzMzMzMzJEA9CtejcP0jQOJ6FK5HYSRApHA9CtcjJEAAAAAAAIAkQK5H4XoULiRApHA9CtfjI0B7FK5H4fojQHsUrkfhuiNAXI/C9SjcI0D2KFyPwrUjQBSuR+F6lCNA4noUrkdhI0A=","dtype":"float64","shape":[28]},"Time_50%":{"__ndarray__":"zMzMzMzMKEAzMzMzMzMmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUCamZmZmZklQM3MzMzMzCVAmpmZmZmZJEDNzMzMzMwkQM3MzMzMzCRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAZmZmZmZmJEAUrkfhehQkQHsUrkfheiRAKVyPwvUoJEAAAAAAAIAkQOF6FK5HYSRAcT0K16PwI0AK16NwPQokQEjhehSuxyNAexSuR+H6I0C4HoXrUbgjQEjhehSuxyNAAAAAAACAI0A=","dtype":"float64","shape":[28]},"Time_75%":{"__ndarray__":"MzMzMzMzKUDMzMzMzEwmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUA0MzMzM7MlQM3MzMzMzCVANDMzMzOzJEBmZmZmZuYkQM3MzMzMzCRAzczMzMzMJECamZmZmRklQAAAAAAAgCRAZmZmZmZmJEBcj8L1KBwkQFK4HoXrkSRAuB6F61E4JECkcD0K16MkQClcj8L1aCRA9ihcj8L1I0CPwvUoXA8kQArXo3A9yiNASOF6FK4HJEB6FK5H4bojQM3MzMzMzCNACtejcD2KI0A=","dtype":"float64","shape":[28]},"Time_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[28]},"Time_max":{"__ndarray__":"MzMzMzMzKUBmZmZmZmYmQGZmZmZmZiZAmpmZmZmZJkAAAAAAAAAmQM3MzMzMzCVAzczMzMzMJUDNzMzMzMwlQM3MzMzMzCVAzczMzMzMJEAAAAAAAAAlQM3MzMzMzCRAzczMzMzMJEAzMzMzMzMlQJqZmZmZmSRAZmZmZmZmJECkcD0K1yMkQClcj8L1qCRASOF6FK5HJEBI4XoUrsckQHE9CtejcCRAexSuR+H6I0AUrkfhehQkQM3MzMzMzCNAFK5H4XoUJEA9CtejcL0jQFK4HoXr0SNAFK5H4XqUI0A=","dtype":"float64","shape":[28]},"Time_mean":{"__ndarray__":"MzMzMzOzKEAzMzMzMzMmQERERERERCZAiIiIiIiIJkDd3d3d3d0lQLy7u7u7uyVAvLu7u7u7JUCIiIiIiIglQLy7u7u7uyVAq6qqqqqqJEDNzMzMzMwkQLy7u7u7uyRAzczMzMzMJEARERERERElQHd3d3d3dyRAREREREREJEAK16NwPQokQPnFkl8seSRAMJb8YskvJEAYS36x5JckQERERERERCRA7FG4HoXrI0ADnTbQaQMkQEGnDXTawCNA7+7u7u7uI0C4HoXrUbgjQClcj8L1qCNA84slv1hyI0A=","dtype":"float64","shape":[28]},"Time_min":{"__ndarray__":"AAAAAAAAKEAAAAAAAAAmQAAAAAAAACZAZmZmZmZmJkCamZmZmZklQJqZmZmZmSVAmpmZmZmZJUAzMzMzMzMlQJqZmZmZmSVAmpmZmZmZJECamZmZmZkkQJqZmZmZmSRAzczMzMzMJEAAAAAAAAAlQGZmZmZmZiRAAAAAAAAAJEBmZmZmZuYjQEjhehSuRyRAH4XrUbgeJEAAAAAAAIAkQHsUrkfh+iNA16NwPQrXI0DsUbgehesjQK5H4XoUriNAPQrXo3C9I0AzMzMzM7MjQOF6FK5HYSNAw/UoXI9CI0A=","dtype":"float64","shape":[28]},"Time_std":{"__ndarray__":"MjMzMzMz0z+AmZmZmZm5PxC45ghyj70/pLjmCHKPrT8QuOYIco+9PxC45ghyj60/ELjmCHKPrT+dILAJZY3DPxC45ghyj60/ELjmCHKPrT+AmZmZmZm5PxC45ghyj60/AAAAAAAAAAAQuOYIco+tP6S45ghyj60/ELjmCHKPvT/ciVWbcfmvP7L4aTHLVLg/1FuOZ/ZQpT/RTW45NrG0P6MWP5UXAcA/K04+QN51oj9EW45n9lClPyJ8NxRgdaA/zW20vM9dtj8AFK5H4XqEP/tCvWrMJL8/jFuOZ/ZQtT8=","dtype":"float64","shape":[28]},"Year":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"selected":{"id":"19607","type":"Selection"},"selection_policy":{"id":"19606","type":"UnionRenderers"}},"id":"19559","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012"]},"id":"19565","type":"FactorRange"},{"attributes":{"overlay":{"id":"19588","type":"BoxAnnotation"}},"id":"19582","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"19559","type":"ColumnDataSource"},"glyph":{"id":"19596","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19597","type":"HBar"},"selection_glyph":null,"view":{"id":"19599","type":"CDSView"}},"id":"19598","type":"GlyphRenderer"},{"attributes":{},"id":"19585","type":"HelpTool"},{"attributes":{"source":{"id":"19559","type":"ColumnDataSource"}},"id":"19599","type":"CDSView"},{"attributes":{},"id":"19580","type":"PanTool"},{"attributes":{},"id":"19602","type":"BasicTickFormatter"},{"attributes":{},"id":"19607","type":"Selection"},{"attributes":{"below":[{"id":"19571","type":"LinearAxis"}],"left":[{"id":"19576","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":550,"plot_width":400,"renderers":[{"id":"19571","type":"LinearAxis"},{"id":"19575","type":"Grid"},{"id":"19576","type":"CategoricalAxis"},{"id":"19579","type":"Grid"},{"id":"19588","type":"BoxAnnotation"},{"id":"19598","type":"GlyphRenderer"}],"title":{"id":"19560","type":"Title"},"toolbar":{"id":"19586","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19563","type":"Range1d"},"x_scale":{"id":"19567","type":"LinearScale"},"y_range":{"id":"19565","type":"FactorRange"},"y_scale":{"id":"19569","type":"CategoricalScale"}},"id":"19561","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19572","type":"BasicTicker"},{"attributes":{},"id":"19604","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"19596","type":"HBar"},{"attributes":{},"id":"19569","type":"CategoricalScale"},{"attributes":{},"id":"19606","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.4},"left":{"field":"Time_min"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"Time_max"},"y":{"field":"Year"}},"id":"19597","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19580","type":"PanTool"},{"id":"19581","type":"WheelZoomTool"},{"id":"19582","type":"BoxZoomTool"},{"id":"19583","type":"SaveTool"},{"id":"19584","type":"ResetTool"},{"id":"19585","type":"HelpTool"}]},"id":"19586","type":"Toolbar"},{"attributes":{"axis_label":"Time (seconds)","formatter":{"id":"19602","type":"BasicTickFormatter"},"plot":{"id":"19561","subtype":"Figure","type":"Plot"},"ticker":{"id":"19572","type":"BasicTicker"}},"id":"19571","type":"LinearAxis"},{"attributes":{"callback":null,"end":12.7,"start":9.5},"id":"19563","type":"Range1d"},{"attributes":{},"id":"19583","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19588","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Time Spreads for Sprint Medalists (by Year)"},"id":"19560","type":"Title"},{"attributes":{"formatter":{"id":"19604","type":"CategoricalTickFormatter"},"plot":{"id":"19561","subtype":"Figure","type":"Plot"},"ticker":{"id":"19577","type":"CategoricalTicker"}},"id":"19576","type":"CategoricalAxis"}],"root_ids":["19561"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"abeb8edd-12bf-4c00-a243-17c1fe6cd3c5","roots":{"19561":"e5b3edb0-5714-4a66-ac3d-a6863fd75f35"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();