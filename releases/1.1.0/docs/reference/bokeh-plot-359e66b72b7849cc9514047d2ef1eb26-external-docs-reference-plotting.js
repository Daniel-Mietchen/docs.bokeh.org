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
      };var element = document.getElementById("d3898fd6-2572-4798-9d0f-690a95909775");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd3898fd6-2572-4798-9d0f-690a95909775' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"42d8c86c-8a6e-479d-aa1d-e5dce5a91690":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"15122","type":"HexTile"},{"attributes":{},"id":"15135","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"15103","type":"LinearAxis"}],"center":[{"id":"15107","type":"Grid"},{"id":"15112","type":"Grid"}],"left":[{"id":"15108","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"15124","type":"GlyphRenderer"}],"title":{"id":"15129","type":"Title"},"toolbar":{"id":"15115","type":"Toolbar"},"x_range":{"id":"15095","type":"DataRange1d"},"x_scale":{"id":"15099","type":"LinearScale"},"y_range":{"id":"15097","type":"DataRange1d"},"y_scale":{"id":"15101","type":"LinearScale"}},"id":"15094","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15113","type":"WheelZoomTool"},{"attributes":{},"id":"15101","type":"LinearScale"},{"attributes":{"callback":null,"data":{"c":[1,1,1,2,1,2,1,1,1,1,1,1,4,1,2,1,2,1,3,7,6,8,3,3,2,1,3,1,3,9,11,3,6,3,1,2,7,11,8,8,6,9,5,3,2,1,4,7,7,16,15,11,5,4,1,5,1,1,2,2,7,8,7,13,5,9,1,2,1,2,3,10,14,15,10,13,6,3,3,3,1,6,1,9,8,10,9,5,2,1,1,3,2,5,6,8,3,9,2,3,1,1,2,3,2,2,1,1,1,2,3,1,1,2,1,1,1,1,1,1,1],"q":[-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,11,11],"r":[0,7,-4,-3,-2,1,3,4,6,-6,-3,-2,-1,0,2,3,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,4,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-12,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-7,-6,-5,-4,-3,-2,-1,0,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,-9,-7,-6,-5,-4,-3,-2,-1,1,-10,-8,-7,-6,-4,-3,-2,-9,-8,-6,-5,-8,-4]},"selected":{"id":"15135","type":"Selection"},"selection_policy":{"id":"15134","type":"UnionRenderers"}},"id":"15119","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15119","type":"ColumnDataSource"},"glyph":{"id":"15121","type":"HexTile"},"hover_glyph":{"id":"15123","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"15122","type":"HexTile"},"selection_glyph":null,"view":{"id":"15125","type":"CDSView"}},"id":"15124","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15113","type":"WheelZoomTool"},{"id":"15114","type":"ResetTool"},{"id":"15126","type":"HoverTool"}]},"id":"15115","type":"Toolbar"},{"attributes":{"formatter":{"id":"15133","type":"BasicTickFormatter"},"ticker":{"id":"15104","type":"BasicTicker"}},"id":"15103","type":"LinearAxis"},{"attributes":{},"id":"15134","type":"UnionRenderers"},{"attributes":{"callback":null,"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"15126","type":"HoverTool"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"15118","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"15121","type":"HexTile"},{"attributes":{},"id":"15104","type":"BasicTicker"},{"attributes":{"text":""},"id":"15129","type":"Title"},{"attributes":{"ticker":{"id":"15104","type":"BasicTicker"},"visible":false},"id":"15107","type":"Grid"},{"attributes":{"formatter":{"id":"15131","type":"BasicTickFormatter"},"ticker":{"id":"15109","type":"BasicTicker"}},"id":"15108","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15097","type":"DataRange1d"},{"attributes":{},"id":"15109","type":"BasicTicker"},{"attributes":{},"id":"15131","type":"BasicTickFormatter"},{"attributes":{"high":16,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"15118","type":"LinearColorMapper"},{"attributes":{},"id":"15114","type":"ResetTool"},{"attributes":{},"id":"15099","type":"LinearScale"},{"attributes":{"source":{"id":"15119","type":"ColumnDataSource"}},"id":"15125","type":"CDSView"},{"attributes":{},"id":"15133","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"15123","type":"HexTile"},{"attributes":{"callback":null},"id":"15095","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"15109","type":"BasicTicker"},"visible":false},"id":"15112","type":"Grid"}],"root_ids":["15094"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"42d8c86c-8a6e-479d-aa1d-e5dce5a91690","roots":{"15094":"d3898fd6-2572-4798-9d0f-690a95909775"}}];
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