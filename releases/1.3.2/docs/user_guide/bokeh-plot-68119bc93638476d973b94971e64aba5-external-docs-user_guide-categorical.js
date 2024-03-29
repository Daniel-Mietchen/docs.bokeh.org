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
      };var element = document.getElementById("c8ba666d-3c6e-4969-86ba-075c3485589b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c8ba666d-3c6e-4969-86ba-075c3485589b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"3c53e74a-2d74-467b-a235-e70900808ddd":{"roots":{"references":[{"attributes":{},"id":"20193","type":"UnionRenderers"},{"attributes":{},"id":"20150","type":"BasicTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"20138","type":"Stack"},{"attributes":{},"id":"20130","type":"BasicTicker"},{"attributes":{},"id":"20166","type":"Selection"},{"attributes":{"formatter":{"id":"20148","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20126","type":"CategoricalTicker"}},"id":"20125","type":"CategoricalAxis"},{"attributes":{"fields":["2015"]},"id":"20136","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20166","type":"Selection"},"selection_policy":{"id":"20165","type":"UnionRenderers"}},"id":"20141","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"20125","type":"CategoricalAxis"}],"center":[{"id":"20128","type":"Grid"},{"id":"20133","type":"Grid"},{"id":"20152","type":"Legend"}],"left":[{"id":"20129","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20145","type":"GlyphRenderer"},{"id":"20158","type":"GlyphRenderer"},{"id":"20172","type":"GlyphRenderer"}],"title":{"id":"20115","type":"Title"},"toolbar":{"id":"20134","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20117","type":"FactorRange"},"x_scale":{"id":"20121","type":"CategoricalScale"},"y_range":{"id":"20119","type":"DataRange1d"},"y_scale":{"id":"20123","type":"LinearScale"}},"id":"20114","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"20137","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20138","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20157","type":"VBar"},{"attributes":{},"id":"20121","type":"CategoricalScale"},{"attributes":{"fields":["2015"]},"id":"20137","type":"Stack"},{"attributes":{},"id":"20194","type":"Selection"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20115","type":"Title"},{"attributes":{},"id":"20126","type":"CategoricalTicker"},{"attributes":{},"id":"20148","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"20137","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20138","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20156","type":"VBar"},{"attributes":{"source":{"id":"20154","type":"ColumnDataSource"}},"id":"20159","type":"CDSView"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20194","type":"Selection"},"selection_policy":{"id":"20193","type":"UnionRenderers"}},"id":"20168","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"20150","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20130","type":"BasicTicker"}},"id":"20129","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20134","type":"Toolbar"},{"attributes":{"source":{"id":"20168","type":"ColumnDataSource"}},"id":"20173","type":"CDSView"},{"attributes":{},"id":"20165","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20158","type":"GlyphRenderer"}]},"id":"20167","type":"LegendItem"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20145","type":"GlyphRenderer"}]},"id":"20153","type":"LegendItem"},{"attributes":{"fields":[]},"id":"20135","type":"Stack"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20126","type":"CategoricalTicker"}},"id":"20128","type":"Grid"},{"attributes":{"data_source":{"id":"20154","type":"ColumnDataSource"},"glyph":{"id":"20156","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20157","type":"VBar"},"selection_glyph":null,"view":{"id":"20159","type":"CDSView"}},"id":"20158","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"20168","type":"ColumnDataSource"},"glyph":{"id":"20170","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20171","type":"VBar"},"selection_glyph":null,"view":{"id":"20173","type":"CDSView"}},"id":"20172","type":"GlyphRenderer"},{"attributes":{},"id":"20181","type":"UnionRenderers"},{"attributes":{},"id":"20123","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"20139","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20140","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20170","type":"VBar"},{"attributes":{"items":[{"id":"20153","type":"LegendItem"},{"id":"20167","type":"LegendItem"},{"id":"20183","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20152","type":"Legend"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20172","type":"GlyphRenderer"}]},"id":"20183","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"20135","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20136","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20143","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"20119","type":"DataRange1d"},{"attributes":{"fields":["2015","2016"]},"id":"20139","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20182","type":"Selection"},"selection_policy":{"id":"20181","type":"UnionRenderers"}},"id":"20154","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"20130","type":"BasicTicker"}},"id":"20133","type":"Grid"},{"attributes":{"source":{"id":"20141","type":"ColumnDataSource"}},"id":"20146","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"20139","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20140","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20171","type":"VBar"},{"attributes":{},"id":"20182","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"20135","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20136","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20144","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20140","type":"Stack"},{"attributes":{"data_source":{"id":"20141","type":"ColumnDataSource"},"glyph":{"id":"20143","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20144","type":"VBar"},"selection_glyph":null,"view":{"id":"20146","type":"CDSView"}},"id":"20145","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20117","type":"FactorRange"}],"root_ids":["20114"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"3c53e74a-2d74-467b-a235-e70900808ddd","roots":{"20114":"c8ba666d-3c6e-4969-86ba-075c3485589b"}}];
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