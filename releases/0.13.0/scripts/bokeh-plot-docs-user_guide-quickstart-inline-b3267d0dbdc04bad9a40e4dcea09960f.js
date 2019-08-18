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
      };var element = document.getElementById("271f96c0-223c-4125-a0fc-fb38e3f3618f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '271f96c0-223c-4125-a0fc-fb38e3f3618f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"5f942f6a-fe6c-4518-b9e7-ac6fea61de83":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"b602c11f-5eca-40e4-9e8a-462710a5d7e2","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"85b99cad-871e-4cbe-b461-46c0f8636b2c","type":"BoxAnnotation"}},"id":"bfed6984-3ea4-4b98-869d-5631f5b634f5","type":"BoxZoomTool"},{"attributes":{},"id":"4c331e58-10e6-4a0a-b97d-a27c437e2a50","type":"ResetTool"},{"attributes":{},"id":"d2f26e9f-e265-46fc-924a-6fb20efc8882","type":"SaveTool"},{"attributes":{"callback":null,"overlay":{"id":"c8ff3881-cfb8-4b3b-91e5-83e21e27eaa8","type":"BoxAnnotation"}},"id":"cc029839-55ea-4190-b804-b8ba95c94cda","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"b602c11f-5eca-40e4-9e8a-462710a5d7e2","type":"PolyAnnotation"}},"id":"263c58db-ff52-4c17-a0c2-a6a037bdad25","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"85b99cad-871e-4cbe-b461-46c0f8636b2c","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c8ff3881-cfb8-4b3b-91e5-83e21e27eaa8","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"ec02e52d-6952-47b5-91e9-6a079263e1a2","type":"ColumnDataSource"},"glyph":{"id":"1ce742d3-1645-4c87-b02e-11f9749cbc3d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89aa5d85-8231-480b-8768-4637252d4a5f","type":"Circle"},"selection_glyph":null,"view":{"id":"a00d4af4-c2e5-41b4-bd7b-1071e2fae4b6","type":"CDSView"}},"id":"0d4cbdb5-dc4b-408f-8fc9-b6286c1a4bca","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"a1bf81f8-1834-4b33-8c86-d7a00137eaef","subtype":"Figure","type":"Plot"},{"id":"24a380e9-92ad-4bd3-b153-0ed66159c1a3","subtype":"Figure","type":"Plot"}]},"id":"f21e639b-d827-4dd3-9e53-10c97d397def","type":"Row"},{"attributes":{},"id":"ed8d88af-592b-431b-be51-035e1c0697bf","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"f21e639b-d827-4dd3-9e53-10c97d397def","type":"Row"}]},"id":"965244c5-2a03-4bb7-9a11-1b76c5b696c8","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"89aa5d85-8231-480b-8768-4637252d4a5f","type":"Circle"},{"attributes":{},"id":"78c81a46-f148-4006-a94d-3f48ccd1fd8b","type":"Selection"},{"attributes":{},"id":"3e6ea8e9-63dd-44e1-8426-31a7ad4ae502","type":"PanTool"},{"attributes":{},"id":"a5de46a3-db7d-4b44-a4dc-a7d956e50a76","type":"BasicTickFormatter"},{"attributes":{},"id":"c4aac1ee-4123-4b2f-91b4-701e86304953","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"24a380e9-92ad-4bd3-b153-0ed66159c1a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4aac1ee-4123-4b2f-91b4-701e86304953","type":"BasicTicker"}},"id":"953ec9dc-f76a-4447-8b07-e486e16be543","type":"Grid"},{"attributes":{},"id":"1eceeb20-571b-4163-b925-d388b5f11aba","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"bf07f12a-584a-433d-8cdb-344b28010447","type":"PanTool"},{"id":"85e02c82-ea41-4aa8-9ec9-f5c2e15659a6","type":"WheelZoomTool"},{"id":"f687d01f-6c1f-41b9-a855-c53aff810c3d","type":"BoxZoomTool"},{"id":"b1a69135-d29d-4060-b439-93889c9e715b","type":"ResetTool"},{"id":"dd11701d-6d42-4b66-9295-6d2667bd3712","type":"SaveTool"},{"id":"50feb4d5-f768-40a6-b443-a877b93dde41","type":"BoxSelectTool"},{"id":"bba708ed-929d-4260-b61c-430c558bd60b","type":"LassoSelectTool"},{"id":"3e6ea8e9-63dd-44e1-8426-31a7ad4ae502","type":"PanTool"},{"id":"9b3e2817-2b11-428e-ba1f-8b285679e21c","type":"WheelZoomTool"},{"id":"bfed6984-3ea4-4b98-869d-5631f5b634f5","type":"BoxZoomTool"},{"id":"4c331e58-10e6-4a0a-b97d-a27c437e2a50","type":"ResetTool"},{"id":"d2f26e9f-e265-46fc-924a-6fb20efc8882","type":"SaveTool"},{"id":"cc029839-55ea-4190-b804-b8ba95c94cda","type":"BoxSelectTool"},{"id":"263c58db-ff52-4c17-a0c2-a6a037bdad25","type":"LassoSelectTool"}]},"id":"79b1fe54-8921-4588-9588-87a7d79282a5","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"1ce742d3-1645-4c87-b02e-11f9749cbc3d","type":"Circle"},{"attributes":{"toolbar":{"id":"79b1fe54-8921-4588-9588-87a7d79282a5","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3b7f3f84-6e1e-4c20-8915-369b5743dc91","type":"ToolbarBox"},{"attributes":{},"id":"13653e4d-d00a-418a-9cda-8f59ec6ff42e","type":"BasicTicker"},{"attributes":{},"id":"39159f93-ee71-43c2-9f22-60331dbce4cd","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"3b7f3f84-6e1e-4c20-8915-369b5743dc91","type":"ToolbarBox"},{"id":"965244c5-2a03-4bb7-9a11-1b76c5b696c8","type":"Column"}]},"id":"0de2c5d9-0655-463a-8e05-4ba28ac0dc87","type":"Column"},{"attributes":{"formatter":{"id":"39159f93-ee71-43c2-9f22-60331dbce4cd","type":"BasicTickFormatter"},"plot":{"id":"24a380e9-92ad-4bd3-b153-0ed66159c1a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4aac1ee-4123-4b2f-91b4-701e86304953","type":"BasicTicker"}},"id":"3256c39a-047e-464c-9bb0-de4040c21504","type":"LinearAxis"},{"attributes":{},"id":"9d9f33d8-a493-4d70-8f81-78fb0a9b540f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a5de46a3-db7d-4b44-a4dc-a7d956e50a76","type":"BasicTickFormatter"},"plot":{"id":"a1bf81f8-1834-4b33-8c86-d7a00137eaef","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d9f33d8-a493-4d70-8f81-78fb0a9b540f","type":"BasicTicker"}},"id":"509ce3b6-19f0-43a9-9ffb-b7516c58a447","type":"LinearAxis"},{"attributes":{"formatter":{"id":"83e2f796-049c-4f1d-b54a-8e613fd91019","type":"BasicTickFormatter"},"plot":{"id":"24a380e9-92ad-4bd3-b153-0ed66159c1a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d2fd548-d415-4721-bd3c-4edb7457670a","type":"BasicTicker"}},"id":"8d1bf354-fd5d-4a08-916f-7c4d68aa1707","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAADvgzmDsYSlP++DOYOxhLU/8yJrIoUjwD/vgzmDsYTFP+vkB+Td5co/8yJrIoUj0D9xU9JSG9TSP++DOYOxhNU/bbSgs0c12D/r5Afk3eXaP2kVbxR0lt0/8yJrIoUj4D8yu5460HvhP3FT0lIb1OI/sOsFa2Ys5D/vgzmDsYTlPy4cbZv83OY/bbSgs0c16D+sTNTLko3pP+vkB+Td5eo/Kn07/Cg+7D9pFW8UdJbtP6itoiy/7u4/8yJrIoUj8D8T74Suqs/wPzK7njrQe/E/Uoe4xvUn8j9xU9JSG9TyP5Ef7N5AgPM/sOsFa2Ys9D/Qtx/3i9j0P++DOYOxhPU/DlBTD9cw9j8uHG2b/Nz2P03ohiciifc/bbSgs0c1+D+MgLo/beH4P6xM1MuSjfk/yxjuV7g5+j/r5Afk3eX6PwqxIXADkvs/Kn07/Cg+/D9JSVWITur8P2kVbxR0lv0/iOGIoJlC/j+oraIsv+7+P8d5vLjkmv8/8yJrIoUjAEADCXjol3kAQBPvhK6qzwBAItWRdL0lAUAyu5460HsBQEKhqwDj0QFAUoe4xvUnAkBhbcWMCH4CQHFT0lIb1AJAgTnfGC4qA0CRH+zeQIADQKAF+aRT1gNAsOsFa2YsBEDA0RIxeYIEQNC3H/eL2ARA350svZ4uBUDvgzmDsYQFQP9pRknE2gVADlBTD9cwBkAeNmDV6YYGQC4cbZv83AZAPgJ6YQ8zB0BN6IYnIokHQF3Ok+003wdAbbSgs0c1CEB9mq15WosIQIyAuj9t4QhAnGbHBYA3CUCsTNTLko0JQLwy4ZGl4wlAyxjuV7g5CkDb/vody48KQOvkB+Td5QpA+soUqvA7C0AKsSFwA5ILQBqXLjYW6AtAKn07/Cg+DEA5Y0jCO5QMQElJVYhO6gxAWS9iTmFADUBpFW8UdJYNQHj7e9qG7A1AiOGIoJlCDkCYx5VmrJgOQKitoiy/7g5At5Ov8tFED0DHeby45JoPQNdfyX738A9A8yJrIoUjEED7lXGFjk4QQAMJeOiXeRBAC3x+S6GkEEAT74Suqs8QQBtiixG0+hBAItWRdL0lEUAqSJjXxlARQDK7njrQexFAOi6lndmmEUBCoasA49ERQEoUsmPs/BFAUoe4xvUnEkBa+r4p/1ISQGFtxYwIfhJAaeDL7xGpEkBxU9JSG9QSQHnG2LUk/xJAgTnfGC4qE0CJrOV7N1UTQJEf7N5AgBNAmJLyQUqrE0CgBfmkU9YTQKh4/wddARRAsOsFa2YsFEC4XgzOb1cUQMDREjF5ghRAyEQZlIKtFEDQtx/3i9gUQNcqJlqVAxVA350svZ4uFUDnEDMgqFkVQO+DOYOxhBVA9/Y/5rqvFUD/aUZJxNoVQAfdTKzNBRZADlBTD9cwFkAWw1ly4FsWQB42YNXphhZAJqlmOPOxFkAuHG2b/NwWQDaPc/4FCBdAPgJ6YQ8zF0BGdYDEGF4XQE3ohiciiRdAVVuNiiu0F0BdzpPtNN8XQGVBmlA+ChhAbbSgs0c1GEB1J6cWUWAYQH2arXlaixhAhA203GO2GECMgLo/beEYQJTzwKJ2DBlAnGbHBYA3GUCk2c1oiWIZQKxM1MuSjRlAtL/aLpy4GUC8MuGRpeMZQMOl5/SuDhpAyxjuV7g5GkDTi/S6wWQaQNv++h3LjxpA43EBgdS6GkDr5Afk3eUaQPNXDkfnEBtA+soUqvA7G0ACPhsN+mYbQAqxIXADkhtAEiQo0wy9G0Aaly42FugbQCIKNZkfExxAKn07/Cg+HEAy8EFfMmkcQDljSMI7lBxAQdZOJUW/HEBJSVWITuocQFG8W+tXFR1AWS9iTmFAHUBhomixamsdQGkVbxR0lh1AcIh1d33BHUB4+3vahuwdQIBugj2QFx5AiOGIoJlCHkCQVI8Do20eQJjHlWasmB5AoDqcybXDHkCoraIsv+4eQK8gqY/IGR9At5Ov8tFEH0C/BrZV228fQMd5vLjkmh9Az+zCG+7FH0DXX8l+9/AfQG/p53AADiBA8yJrIoUjIEB3XO7TCTkgQPuVcYWOTiBAf8/0NhNkIEADCXjol3kgQIdC+5kcjyBAC3x+S6GkIECPtQH9JbogQBPvhK6qzyBAlygIYC/lIEAbYosRtPogQJ+bDsM4ECFAItWRdL0lIUCmDhUmQjshQCpImNfGUCFAroEbiUtmIUAyu5460HshQLb0IexUkSFAOi6lndmmIUC+ZyhPXrwhQEKhqwDj0SFAxtousmfnIUBKFLJj7PwhQM5NNRVxEiJAUoe4xvUnIkDWwDt4ej0iQFr6vin/UiJA3TNC24NoIkBhbcWMCH4iQOWmSD6NkyJAaeDL7xGpIkDtGU+hlr4iQHFT0lIb1CJA9YxVBKDpIkB5xti1JP8iQP3/W2epFCNAgTnfGC4qI0AFc2LKsj8jQIms5Xs3VSNADeZoLbxqI0CRH+zeQIAjQBVZb5DFlSNAmJLyQUqrI0AczHXzzsAjQKAF+aRT1iNAJD98VtjrI0CoeP8HXQEkQCyygrnhFiRAsOsFa2YsJEA0JYkc60EkQLheDM5vVyRAPJiPf/RsJEDA0RIxeYIkQEQLluL9lyRAyEQZlIKtJEBMfpxFB8MkQNC3H/eL2CRAU/GiqBDuJEDXKiZalQMlQFtkqQsaGSVA350svZ4uJUBj169uI0QlQOcQMyCoWSVAa0q20SxvJUDvgzmDsYQlQHO9vDQ2miVA9/Y/5rqvJUB7MMOXP8UlQP9pRknE2iVAg6PJ+kjwJUAH3UyszQUmQIsW0F1SGyZADlBTD9cwJkCSidbAW0YmQBbDWXLgWyZAmvzcI2VxJkAeNmDV6YYmQKJv44ZunCZAJqlmOPOxJkCq4unpd8cmQC4cbZv83CZAslXwTIHyJkA2j3P+BQgnQLrI9q+KHSdAPgJ6YQ8zJ0DCO/0SlEgnQEZ1gMQYXidAya4Ddp1zJ0BN6IYnIoknQNEhCtmmnidAVVuNiiu0J0DZlBA8sMknQF3Ok+003ydA4QcXn7n0J0BlQZpQPgooQOl6HQLDHyhAbbSgs0c1KEDx7SNlzEooQHUnpxZRYChA+WAqyNV1KEB9mq15WosoQAHUMCvfoChAhA203GO2KEAIRzeO6MsoQIyAuj9t4ShAELo98fH2KECU88CidgwpQBgtRFT7ISlA","dtype":"float64","shape":[300]},"y0":{"__ndarray__":"AAAAAAAAAAAK5tpjEoOlP2szXHY1frU/PGJUCZUYwD9kzXNYyGrFP+eq4sdMs8o/Aqu2177vzz+juZ4+4I7SP86+fhp9HdU/2q/hCI6i1z9FdyBk7xzaP2mfYluCi9w/WiNLdC3t3j/Ktx2FbqDgP12EeeXBwuE/J8ApmA3d4j/g1Ij70e7jPxszD0mT9+Q/nWxJzdn25T8FtvYdMuzmP+dXN04t1+c/vnezIGG36D/7i6M3aIzpP9PDpELiVeo/PKpEKnQT6z8oVDA5yMTrPwl79EKOaew/yv48yHsB7T+Fa4MYTIztP8xIHXHACe4/0CecGaB57j9gnHJ9uNvuP2iI0kLdL+8/RGO6Xuh17z/taygmuq3vP0r/a1w51+8/cZmOPlPy7z8+Wc+L+/7vP2swLYss/e8/+z79Defs7z+PLoxvMs7vP1e4ypEcoe8/qdYG17ll7z+3eLQYJRzvPwLjSZt/xO4/pzk1//Be7j9HAfIup+vtP1GwRkrWau0/U7Ozjrjc7D8AjB49jkHsP6TyxHydmes/RxyFOzLl6j+qfIkLniTqP3iJZ/43WOk/KSvCfVyA6D/lp4EhbZ3nP07ss4PQr+Y/SSUpEvK35T+xo+HdQbbkP9z/Ymg0q+M/JGULb0KX4j9l1nq06HrhP2QZK8inVuA/EpSfmAdW3j9guTF0CPHbP7Ek5Uhnf9k/Tx+98j4C1z/C1ASEr3rUP9ksEcPd6dE/vI3ES+Whzj943sCXNWLJP/GF4usLF8Q//9OJ9JmFvT+YL6Egw8+yP0K9c//VIqA/cs+2kJeEhb8TwRIls+Kqv+naFkwMLLi/A09WpOhtwb+dyZDR6b3Gv+vbN8uiA8y/2zhtqlie0L+d3P91XDPTv1ZWu+yxv9W/xJ/JHzJC2L8wgG+Surnav0tOYr0tJd2/ecHfj3OD37/Buib3vOngv0lwE5caCuK/89mAR1Ai47/v9zhY3zHkv4UvTAJNOOW/TdaTnyI15r9u8lbg7Sfnv9Xu+P5AEOi/ueWa8bLt6L8REZmZ37/pvzfozvBnhuq/vnONNPJA67+6ajAOKu/rv3nAP7nAkOy/NWUMJ20l7b/7H7gf7Kztv4eSmWAAJ+6/3anut3KT7r+q9dAdEvLuvzaeYMqzQu+/MPMbSTOF77+J1FqJcrnvv8SB5utZ3++/cKqnTdj277+T62UP4//vv245lRp2+u+/jgkv45Pm779pZ5ZmRcTvv8hzhyeak++/eCUUJ6hU77/odrHaiwfvvz2AWR9orO6/9E7IKWZD7r+Zm9pztcztv8nJFqeLSO2/4OZphCS37L+DnyPJwRjsv9tiPRGrbeu/jSP6ti226r/3We2vnPLpvygXeWdQI+m/FB7UlqZI6L/ZFaoaAmPnv5v9aMbKcua/YxdQNW145b8Gg1WZWnTkv768+IcIZ+O/fyIZxfBQ4r9fiegLkTLhv/zGEtZqDOC/ecRnQga+3b+6xW5lxFXbv0Ded7Qm4di/7yQuZUlh1r9XTyvDTdfTv2jkK61ZRNG/DOJjIC5Tzb+doKTBZhDIv8bb0iW+wsK/NIXUPzTZur/4d0exyCCwvwFWn7lJhJW/dFWfuUmElT/Vd0exyCCwPxGF1D802bo/1NvSJb7Cwj+roKTBZhDIP/vhYyAuU80/YOQrrVlE0T9PTyvDTdfTP+YkLmVJYdY/ON53tCbh2D/BxW5lxFXbP3/EZ0IGvt0/+MYS1moM4D9biegLkTLhP3siGcXwUOI/u7z4hwhn4z8Cg1WZWnTkP2AXUDVteOU/nv1oxspy5j/bFaoaAmPnPxEe1JamSOg/JRd5Z1Aj6T/1We2vnPLpP4sj+rYttuo/2WI9Eatt6z+FnyPJwRjsP+LmaYQkt+w/yMkWp4tI7T+Ym9pztcztP/JOyClmQ+4/PIBZH2is7j/ndrHaiwfvP3clFCeoVO8/yHOHJ5qT7z9pZ5ZmRcTvP40JL+OT5u8/bTmVGnb67z+T62UP4//vP3Cqp03Y9u8/xYHm61nf7z+J1FqJcrnvPzHzG0kzhe8/N55gyrNC7z+r9dAdEvLuP9+p7rdyk+4/iZKZYAAn7j/9H7gf7KztPzdlDCdtJe0/eMA/ucCQ7D+4ajAOKu/rP7xzjTTyQOs/NejO8GeG6j8PEZmZ37/pP7flmvGy7eg/2u74/kAQ6D908lbg7SfnP1PWk58iNeY/iC9MAk045T/z9zhY3zHkP/fZgEdQIuM/TXATlxoK4j/Buib3vOngP3nB349zg98/TE5ivS0l3T8wgG+SurnaP72fyR8yQtg/UFa77LG/1T+W3P91XDPTP9Q4bapYntA/C9w3y6IDzD++yZDR6b3GPyVPVqTobcE/DNsWTAwsuD9ZwRIls+KqP43QtpCXhIU/+7xz/9UioL+VL6Egw8+yv/zTifSZhb2/8IXi6wsXxL933sCXNWLJv8qNxEvloc6/3ywRw93p0b/J1ASEr3rUv1YfvfI+Ate/oiTlSGd/2b9RuTF0CPHbvwOUn5gHVt6/YBkryKdW4L9h1nq06HrhvyFlC29Cl+K/2f9iaDSr47+xo+HdQbbkv0klKRLyt+W/Tuyzg9Cv5r/kp4EhbZ3nvysrwn1cgOi/e4ln/jdY6b+sfIkLniTqv0kchTsy5eq/n/LEfJ2Z67/8ix49jkHsv0+zs4643Oy/TrBGStZq7b9FAfIup+vtv6Y5Nf/wXu6/AuNJm3/E7r+2eLQYJRzvv6nWBte5Ze+/V7jKkRyh77+QLoxvMs7vv/w+/Q3n7O+/azAtiyz9778+Wc+L+/7vv3GZjj5T8u+/S/9rXDnX77/uaygmuq3vv0Vjul7ode+/aYjSQt0v779hnHJ9uNvuv9InnBmgee6/zUgdccAJ7r+Ga4MYTIztv8r+PMh7Ae2/CXv0Qo5p7L8nVDA5yMTrvzyqRCp0E+u/0cOkQuJV6r/4i6M3aIzpv7p3syBht+i/7lc3Ti3X578KtvYdMuzmv6JsSc3Z9uW/IDMPSZP35L/k1Ij70e7jvyvAKZgN3eK/YIR55cHC4b/Mtx2FbqDgv10jS3Qt7d6/aZ9iW4KL3L9DdyBk7xzav9av4QiOote/yL5+Gn0d1b+buZ4+4I7Sv++qtte+78+/Davix0yzyr+GzXNYyGrFv1tiVAmVGMC/nzNcdjV+tb9h5tpjEoOlvwdcFDMmpsG8","dtype":"float64","shape":[300]},"y1":{"__ndarray__":"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","dtype":"float64","shape":[300]}},"selected":{"id":"78c81a46-f148-4006-a94d-3f48ccd1fd8b","type":"Selection"},"selection_policy":{"id":"1eceeb20-571b-4163-b925-d388b5f11aba","type":"UnionRenderers"}},"id":"ec02e52d-6952-47b5-91e9-6a079263e1a2","type":"ColumnDataSource"},{"attributes":{},"id":"9d2fd548-d415-4721-bd3c-4edb7457670a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"529e7d40-240d-4902-9611-77900e98e722","type":"DataRange1d"},{"attributes":{"source":{"id":"ec02e52d-6952-47b5-91e9-6a079263e1a2","type":"ColumnDataSource"}},"id":"a00d4af4-c2e5-41b4-bd7b-1071e2fae4b6","type":"CDSView"},{"attributes":{},"id":"61cca971-7ffb-4676-b74e-f1c50f811fe0","type":"LinearScale"},{"attributes":{"callback":null},"id":"bc2bf6e0-7c4e-4dd9-a154-d736cd720af0","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"02eebc98-a2c4-4a60-ac14-3709e8b60e2f","type":"PolyAnnotation"}},"id":"bba708ed-929d-4260-b61c-430c558bd60b","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"da08706c-b2cb-4ba4-9428-6567596a8329","type":"LinearAxis"}],"left":[{"id":"509ce3b6-19f0-43a9-9ffb-b7516c58a447","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"da08706c-b2cb-4ba4-9428-6567596a8329","type":"LinearAxis"},{"id":"71304f3b-4736-4d37-832f-942fd86a11f8","type":"Grid"},{"id":"509ce3b6-19f0-43a9-9ffb-b7516c58a447","type":"LinearAxis"},{"id":"7147f67c-ced3-466f-aed6-067d28c52a9a","type":"Grid"},{"id":"895df8b7-b005-454d-b974-e2e081f45d92","type":"BoxAnnotation"},{"id":"881efefe-6f39-48f8-a0b3-2bbd6b0b43ec","type":"BoxAnnotation"},{"id":"02eebc98-a2c4-4a60-ac14-3709e8b60e2f","type":"PolyAnnotation"},{"id":"aa646030-6154-4b76-a45f-546933c86287","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"04485889-4008-4d61-aa0d-85d02f54bbc2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8aa1a38b-3952-443f-8140-73e28468ff1f","type":"DataRange1d"},"x_scale":{"id":"fd62d2bd-d7a0-4100-a885-55e646821e9a","type":"LinearScale"},"y_range":{"id":"fd97b493-d6cb-427f-a316-bcf302e30f95","type":"DataRange1d"},"y_scale":{"id":"a66e9f20-7d13-409b-8e18-15f1a555bc60","type":"LinearScale"}},"id":"a1bf81f8-1834-4b33-8c86-d7a00137eaef","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"8d1bf354-fd5d-4a08-916f-7c4d68aa1707","type":"LinearAxis"}],"left":[{"id":"3256c39a-047e-464c-9bb0-de4040c21504","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"8d1bf354-fd5d-4a08-916f-7c4d68aa1707","type":"LinearAxis"},{"id":"73296d91-3300-46e5-9300-9ceafc013259","type":"Grid"},{"id":"3256c39a-047e-464c-9bb0-de4040c21504","type":"LinearAxis"},{"id":"953ec9dc-f76a-4447-8b07-e486e16be543","type":"Grid"},{"id":"85b99cad-871e-4cbe-b461-46c0f8636b2c","type":"BoxAnnotation"},{"id":"c8ff3881-cfb8-4b3b-91e5-83e21e27eaa8","type":"BoxAnnotation"},{"id":"b602c11f-5eca-40e4-9e8a-462710a5d7e2","type":"PolyAnnotation"},{"id":"0d4cbdb5-dc4b-408f-8fc9-b6286c1a4bca","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10341d4b-0fe8-4edd-98ac-a88f772d2511","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"529e7d40-240d-4902-9611-77900e98e722","type":"DataRange1d"},"x_scale":{"id":"61cca971-7ffb-4676-b74e-f1c50f811fe0","type":"LinearScale"},"y_range":{"id":"bc2bf6e0-7c4e-4dd9-a154-d736cd720af0","type":"DataRange1d"},"y_scale":{"id":"cd9d756c-34bf-406c-beee-fb5c7f237c2f","type":"LinearScale"}},"id":"24a380e9-92ad-4bd3-b153-0ed66159c1a3","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"24a380e9-92ad-4bd3-b153-0ed66159c1a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d2fd548-d415-4721-bd3c-4edb7457670a","type":"BasicTicker"}},"id":"73296d91-3300-46e5-9300-9ceafc013259","type":"Grid"},{"attributes":{},"id":"83e2f796-049c-4f1d-b54a-8e613fd91019","type":"BasicTickFormatter"},{"attributes":{},"id":"9b3e2817-2b11-428e-ba1f-8b285679e21c","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"881efefe-6f39-48f8-a0b3-2bbd6b0b43ec","type":"BoxAnnotation"}},"id":"50feb4d5-f768-40a6-b443-a877b93dde41","type":"BoxSelectTool"},{"attributes":{},"id":"cd9d756c-34bf-406c-beee-fb5c7f237c2f","type":"LinearScale"},{"attributes":{},"id":"dd11701d-6d42-4b66-9295-6d2667bd3712","type":"SaveTool"},{"attributes":{"data_source":{"id":"ec02e52d-6952-47b5-91e9-6a079263e1a2","type":"ColumnDataSource"},"glyph":{"id":"78d1f272-e36a-4471-b15f-8f6d33b00634","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13336e45-4a28-45a7-9ec7-7f9e128b3919","type":"Circle"},"selection_glyph":null,"view":{"id":"c9ee1759-0e78-4c6e-b436-ac04a74e890e","type":"CDSView"}},"id":"aa646030-6154-4b76-a45f-546933c86287","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"881efefe-6f39-48f8-a0b3-2bbd6b0b43ec","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"895df8b7-b005-454d-b974-e2e081f45d92","type":"BoxAnnotation"},{"attributes":{"source":{"id":"ec02e52d-6952-47b5-91e9-6a079263e1a2","type":"ColumnDataSource"}},"id":"c9ee1759-0e78-4c6e-b436-ac04a74e890e","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e6ea8e9-63dd-44e1-8426-31a7ad4ae502","type":"PanTool"},{"id":"9b3e2817-2b11-428e-ba1f-8b285679e21c","type":"WheelZoomTool"},{"id":"bfed6984-3ea4-4b98-869d-5631f5b634f5","type":"BoxZoomTool"},{"id":"4c331e58-10e6-4a0a-b97d-a27c437e2a50","type":"ResetTool"},{"id":"d2f26e9f-e265-46fc-924a-6fb20efc8882","type":"SaveTool"},{"id":"cc029839-55ea-4190-b804-b8ba95c94cda","type":"BoxSelectTool"},{"id":"263c58db-ff52-4c17-a0c2-a6a037bdad25","type":"LassoSelectTool"}]},"id":"10341d4b-0fe8-4edd-98ac-a88f772d2511","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"bf07f12a-584a-433d-8cdb-344b28010447","type":"PanTool"},{"id":"85e02c82-ea41-4aa8-9ec9-f5c2e15659a6","type":"WheelZoomTool"},{"id":"f687d01f-6c1f-41b9-a855-c53aff810c3d","type":"BoxZoomTool"},{"id":"b1a69135-d29d-4060-b439-93889c9e715b","type":"ResetTool"},{"id":"dd11701d-6d42-4b66-9295-6d2667bd3712","type":"SaveTool"},{"id":"50feb4d5-f768-40a6-b443-a877b93dde41","type":"BoxSelectTool"},{"id":"bba708ed-929d-4260-b61c-430c558bd60b","type":"LassoSelectTool"}]},"id":"04485889-4008-4d61-aa0d-85d02f54bbc2","type":"Toolbar"},{"attributes":{},"id":"85e02c82-ea41-4aa8-9ec9-f5c2e15659a6","type":"WheelZoomTool"},{"attributes":{},"id":"bf07f12a-584a-433d-8cdb-344b28010447","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"02eebc98-a2c4-4a60-ac14-3709e8b60e2f","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"895df8b7-b005-454d-b974-e2e081f45d92","type":"BoxAnnotation"}},"id":"f687d01f-6c1f-41b9-a855-c53aff810c3d","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"a1bf81f8-1834-4b33-8c86-d7a00137eaef","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d9f33d8-a493-4d70-8f81-78fb0a9b540f","type":"BasicTicker"}},"id":"7147f67c-ced3-466f-aed6-067d28c52a9a","type":"Grid"},{"attributes":{},"id":"b1a69135-d29d-4060-b439-93889c9e715b","type":"ResetTool"},{"attributes":{"callback":null},"id":"8aa1a38b-3952-443f-8140-73e28468ff1f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"78d1f272-e36a-4471-b15f-8f6d33b00634","type":"Circle"},{"attributes":{"plot":{"id":"a1bf81f8-1834-4b33-8c86-d7a00137eaef","subtype":"Figure","type":"Plot"},"ticker":{"id":"13653e4d-d00a-418a-9cda-8f59ec6ff42e","type":"BasicTicker"}},"id":"71304f3b-4736-4d37-832f-942fd86a11f8","type":"Grid"},{"attributes":{"formatter":{"id":"ed8d88af-592b-431b-be51-035e1c0697bf","type":"BasicTickFormatter"},"plot":{"id":"a1bf81f8-1834-4b33-8c86-d7a00137eaef","subtype":"Figure","type":"Plot"},"ticker":{"id":"13653e4d-d00a-418a-9cda-8f59ec6ff42e","type":"BasicTicker"}},"id":"da08706c-b2cb-4ba4-9428-6567596a8329","type":"LinearAxis"},{"attributes":{},"id":"a66e9f20-7d13-409b-8e18-15f1a555bc60","type":"LinearScale"},{"attributes":{"callback":null},"id":"fd97b493-d6cb-427f-a316-bcf302e30f95","type":"DataRange1d"},{"attributes":{},"id":"fd62d2bd-d7a0-4100-a885-55e646821e9a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"13336e45-4a28-45a7-9ec7-7f9e128b3919","type":"Circle"}],"root_ids":["0de2c5d9-0655-463a-8e05-4ba28ac0dc87"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5f942f6a-fe6c-4518-b9e7-ac6fea61de83","roots":{"0de2c5d9-0655-463a-8e05-4ba28ac0dc87":"271f96c0-223c-4125-a0fc-fb38e3f3618f"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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