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
      };var element = document.getElementById("535aa960-f7ee-4b68-b61d-e03fc9a19fe8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '535aa960-f7ee-4b68-b61d-e03fc9a19fe8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0a379ee1-0c5b-433f-bcf8-eb46bc4ae60e":{"roots":{"references":[{"attributes":{},"id":"22376","type":"ResetTool"},{"attributes":{},"id":"22340","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"22407","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22408","type":"ToolbarBox"},{"attributes":{},"id":"22335","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22374","type":"BoxSelectTool"},{"id":"22375","type":"HoverTool"},{"id":"22376","type":"ResetTool"}]},"id":"22377","type":"Toolbar"},{"attributes":{},"id":"22365","type":"BasicTicker"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"22323","type":"BooleanFilter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22384","type":"Circle"},{"attributes":{},"id":"22360","type":"LinearScale"},{"attributes":{"data_source":{"id":"22322","type":"ColumnDataSource"},"glyph":{"id":"22352","type":"Circle"},"hover_glyph":{"id":"22354","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22353","type":"Circle"},"selection_glyph":null,"view":{"id":"22356","type":"CDSView"}},"id":"22355","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22402","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22383","type":"Circle"},{"attributes":{"formatter":{"id":"22388","type":"BasicTickFormatter"},"ticker":{"id":"22340","type":"BasicTicker"}},"id":"22339","type":"LinearAxis"},{"attributes":{"ticker":{"id":"22365","type":"BasicTicker"}},"id":"22368","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"22393","type":"Selection"},"selection_policy":{"id":"22394","type":"UnionRenderers"}},"id":"22322","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"22400","type":"BasicTickFormatter"},"ticker":{"id":"22365","type":"BasicTicker"}},"id":"22364","type":"LinearAxis"},{"attributes":{"children":[[{"id":"22325","subtype":"Figure","type":"Plot"},0,0],[{"id":"22357","subtype":"Figure","type":"Plot"},0,1]]},"id":"22406","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22352","type":"Circle"},{"attributes":{"text":""},"id":"22397","type":"Title"},{"attributes":{"filters":[{"id":"22323","type":"BooleanFilter"}],"source":{"id":"22322","type":"ColumnDataSource"}},"id":"22324","type":"CDSView"},{"attributes":{"formatter":{"id":"22390","type":"BasicTickFormatter"},"ticker":{"id":"22335","type":"BasicTicker"}},"id":"22334","type":"LinearAxis"},{"attributes":{"below":[{"id":"22364","type":"LinearAxis"}],"center":[{"id":"22368","type":"Grid"},{"id":"22373","type":"Grid"}],"left":[{"id":"22369","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22385","type":"GlyphRenderer"}],"title":{"id":"22397","type":"Title"},"toolbar":{"id":"22377","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22326","type":"DataRange1d"},"x_scale":{"id":"22360","type":"LinearScale"},"y_range":{"id":"22328","type":"DataRange1d"},"y_scale":{"id":"22362","type":"LinearScale"}},"id":"22357","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22390","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22375","type":"HoverTool"},{"attributes":{"dimension":1,"ticker":{"id":"22340","type":"BasicTicker"}},"id":"22343","type":"Grid"},{"attributes":{},"id":"22346","type":"ResetTool"},{"attributes":{},"id":"22370","type":"BasicTicker"},{"attributes":{"children":[{"id":"22408","type":"ToolbarBox"},{"id":"22406","type":"GridBox"}]},"id":"22409","type":"Column"},{"attributes":{},"id":"22400","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22398","type":"BasicTickFormatter"},"ticker":{"id":"22370","type":"BasicTicker"}},"id":"22369","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22353","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"22392","type":"BoxAnnotation"}},"id":"22344","type":"BoxSelectTool"},{"attributes":{"source":{"id":"22322","type":"ColumnDataSource"}},"id":"22356","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"22370","type":"BasicTicker"}},"id":"22373","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"22402","type":"BoxAnnotation"}},"id":"22374","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"22322","type":"ColumnDataSource"},"glyph":{"id":"22382","type":"Circle"},"hover_glyph":{"id":"22384","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22383","type":"Circle"},"selection_glyph":null,"view":{"id":"22324","type":"CDSView"}},"id":"22385","type":"GlyphRenderer"},{"attributes":{},"id":"22394","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"22335","type":"BasicTicker"}},"id":"22338","type":"Grid"},{"attributes":{"callback":null},"id":"22328","type":"DataRange1d"},{"attributes":{"below":[{"id":"22334","type":"LinearAxis"}],"center":[{"id":"22338","type":"Grid"},{"id":"22343","type":"Grid"}],"left":[{"id":"22339","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22355","type":"GlyphRenderer"}],"title":{"id":"22387","type":"Title"},"toolbar":{"id":"22347","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22326","type":"DataRange1d"},"x_scale":{"id":"22330","type":"LinearScale"},"y_range":{"id":"22328","type":"DataRange1d"},"y_scale":{"id":"22332","type":"LinearScale"}},"id":"22325","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22332","type":"LinearScale"},{"attributes":{"tools":[{"id":"22344","type":"BoxSelectTool"},{"id":"22345","type":"HoverTool"},{"id":"22346","type":"ResetTool"},{"id":"22374","type":"BoxSelectTool"},{"id":"22375","type":"HoverTool"},{"id":"22376","type":"ResetTool"}]},"id":"22407","type":"ProxyToolbar"},{"attributes":{},"id":"22330","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22392","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"22326","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22382","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22354","type":"Circle"},{"attributes":{},"id":"22362","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22344","type":"BoxSelectTool"},{"id":"22345","type":"HoverTool"},{"id":"22346","type":"ResetTool"}]},"id":"22347","type":"Toolbar"},{"attributes":{},"id":"22393","type":"Selection"},{"attributes":{"text":""},"id":"22387","type":"Title"},{"attributes":{},"id":"22398","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22345","type":"HoverTool"},{"attributes":{},"id":"22388","type":"BasicTickFormatter"}],"root_ids":["22409"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"0a379ee1-0c5b-433f-bcf8-eb46bc4ae60e","roots":{"22409":"535aa960-f7ee-4b68-b61d-e03fc9a19fe8"}}];
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