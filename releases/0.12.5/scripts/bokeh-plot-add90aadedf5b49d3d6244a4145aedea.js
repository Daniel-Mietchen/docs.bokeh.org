(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("59346205-c7af-493d-a137-c8515f56d333");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59346205-c7af-493d-a137-c8515f56d333' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"4393d217-cd50-47b3-9a3d-1469352d8235":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(85.428571, 98.571429]"],"color":["navy"],"fill_alpha":[0.8],"height":[84.0],"label":["(85.428571, 98.571429]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["92.0"],"y":[42.0]}},"id":"e86bdf5d-ea41-4a1c-af23-40b1dee393dc","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(164.285714, 177.428571]"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"label":["(164.285714, 177.428571]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["170.8571425"],"y":[7.5]}},"id":"dc2564c8-5466-4f45-93b9-e9d72645be47","type":"ColumnDataSource"},{"attributes":{},"id":"949cbf83-b7ac-4301-91d6-85e893d2da3e","type":"BasicTicker"},{"attributes":{"plot":null,"text":"HP Distribution"},"id":"21a2a5ee-785b-4554-a1c2-725f1800687e","type":"Title"},{"attributes":{"callback":null,"end":236.9000000714286,"start":39.09999992857143},"id":"7615598d-9679-4324-9478-19f12430950c","type":"Range1d"},{"attributes":{"data_source":{"id":"2c4134c2-7c3e-452f-abca-dd45ee6eb34c","type":"ColumnDataSource"},"glyph":{"id":"6fb99f23-6dce-4050-9759-b7d01aadcb64","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"5ad2a887-655c-4659-8fa4-be8ad934af57","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"},"ticker":{"id":"2b61396e-6ec8-4215-b5d6-f2b27b76e2ae","type":"BasicTicker"}},"id":"3640942f-f80e-44cf-8d1c-31569611342d","type":"Grid"},{"attributes":{"data_source":{"id":"dc2564c8-5466-4f45-93b9-e9d72645be47","type":"ColumnDataSource"},"glyph":{"id":"e4989392-ab2c-4d7a-96cf-b773ca3b896a","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"0ae83a38-3643-4879-b84c-e67f82c01922","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"37d00a13-8fa7-46cd-bb1a-e92e34f71e11","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"222eb74b-5525-4ea6-aeb9-824e593d8324","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"147e1cac-0429-41a8-8d9d-e73083fdd5fd","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fb99f23-6dce-4050-9759-b7d01aadcb64","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(203.714286, 216.857143]"],"color":["navy"],"fill_alpha":[0.8],"height":[5.0],"label":["(203.714286, 216.857143]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["210.28571449999998"],"y":[2.5]}},"id":"79bb1caf-4e6e-40c4-ad0e-bcaa31dba56b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"eb40227d-f15d-4428-84a2-d61d0928b3e1","type":"ColumnDataSource"},"glyph":{"id":"222eb74b-5525-4ea6-aeb9-824e593d8324","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"e340b327-4d71-44e3-a1b4-0a9ecb2b6d47","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"56b6de55-d507-4343-b22d-a15e7d3fe8ef","type":"ColumnDataSource"},"glyph":{"id":"181bfbad-573e-44b7-8cf2-fa9bfe9103a9","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"202c2dff-f420-4e6a-8a79-aaed0ea15817","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(72.285714, 85.428571]"],"color":["navy"],"fill_alpha":[0.8],"height":[59.0],"label":["(72.285714, 85.428571]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857153],"x":["78.85714250000001"],"y":[29.5]}},"id":"725b9c9d-07a0-45da-9ef4-36f493f1e488","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"db6e0a3f-90f2-4c1c-ac55-86f03bbbcfcc","type":"PanTool"},{"id":"37d00a13-8fa7-46cd-bb1a-e92e34f71e11","type":"WheelZoomTool"},{"id":"b47eb9aa-156b-4ca2-abe9-e36eefeb284b","type":"BoxZoomTool"},{"id":"3435909b-b8d9-4c6a-b64a-f0bd4c663b19","type":"SaveTool"},{"id":"0a2040df-1c90-4731-a538-600120c24aae","type":"ResetTool"},{"id":"3a66cbe8-5669-4589-a69e-f53dd40fed4f","type":"HelpTool"}]},"id":"2da15f71-e4d9-4442-a920-9f3a68717519","type":"Toolbar"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4989392-ab2c-4d7a-96cf-b773ca3b896a","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["[46.000000, 59.142857]"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"label":["[46.000000, 59.142857]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["52.571428499999996"],"y":[7.5]}},"id":"7dfa5f6a-c725-42ba-a903-fdb51ca00538","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(177.428571, 190.571429]"],"color":["navy"],"fill_alpha":[0.8],"height":[8.0],"label":["(177.428571, 190.571429]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["184.0"],"y":[4.0]}},"id":"608ebe38-634c-4f70-9b77-fbf2ebdc6c1e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"896ad368-8477-4547-9a68-dbfde0f230e8","type":"ColumnDataSource"},"glyph":{"id":"40470901-5bd5-4f1e-b74d-03423b4c975c","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"0a7ade36-d144-4688-a8dc-9b86958addca","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"61515f99-3ed1-48d6-b1f5-619333a5b9ab","type":"BoxAnnotation"},"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"b47eb9aa-156b-4ca2-abe9-e36eefeb284b","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(138.000000, 151.142857]"],"color":["navy"],"fill_alpha":[0.8],"height":[42.0],"label":["(138.000000, 151.142857]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["144.5714285"],"y":[21.0]}},"id":"cd830898-da30-45f2-b1a7-5ea1fc768609","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c71f7ff-9e0d-49a8-ad12-4ec628daee6b","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"95961f2c-ac5f-4211-b264-8f356828934a","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(59.142857, 72.285714]"],"color":["navy"],"fill_alpha":[0.8],"height":[67.0],"label":["(59.142857, 72.285714]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["65.7142855"],"y":[33.5]}},"id":"d7afdbfd-aeb9-4596-a49d-e9e8ebe0a439","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"608ebe38-634c-4f70-9b77-fbf2ebdc6c1e","type":"ColumnDataSource"},"glyph":{"id":"147e1cac-0429-41a8-8d9d-e73083fdd5fd","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"923088dc-b32a-4eef-ba9c-380225dfb442","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"61515f99-3ed1-48d6-b1f5-619333a5b9ab","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":92.4},"id":"1344ffae-b301-4191-acca-2dd54d04a7ec","type":"Range1d"},{"attributes":{},"id":"06fc958c-2435-4105-ab44-2c061c9f6757","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40470901-5bd5-4f1e-b74d-03423b4c975c","type":"Rect"},{"attributes":{"data_source":{"id":"9abd4c8b-3458-4322-872c-476b4b66093c","type":"ColumnDataSource"},"glyph":{"id":"2b6a8ecd-8026-45ca-9f9d-6b0937d0a7de","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"68621014-8b96-429a-8858-6f7143b22783","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(98.571429, 111.714286]"],"color":["navy"],"fill_alpha":[0.8],"height":[51.0],"label":["(98.571429, 111.714286]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["105.14285749999999"],"y":[25.5]}},"id":"56b6de55-d507-4343-b22d-a15e7d3fe8ef","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"3a66cbe8-5669-4589-a69e-f53dd40fed4f","type":"HelpTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b6a8ecd-8026-45ca-9f9d-6b0937d0a7de","type":"Rect"},{"attributes":{"axis_label":"hp","formatter":{"id":"381ea3ce-2ac2-43e7-ab41-de90a46ff83d","type":"BasicTickFormatter"},"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"},"ticker":{"id":"949cbf83-b7ac-4301-91d6-85e893d2da3e","type":"BasicTicker"}},"id":"76b21740-8688-4f73-a6d1-864aa0378d69","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9499ea6f-1991-43e5-b6f0-09409ea529de","type":"ColumnDataSource"},"glyph":{"id":"5ce5e5d6-6acf-41bb-b7a8-93fd00ec3fe4","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f31f3516-6592-485a-b60a-1f947993692e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(111.714286, 124.857143]"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"label":["(111.714286, 124.857143]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857153],"x":["118.2857145"],"y":[7.5]}},"id":"896ad368-8477-4547-9a68-dbfde0f230e8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(124.857143, 138.000000]"],"color":["navy"],"fill_alpha":[0.8],"height":[14.0],"label":["(124.857143, 138.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["131.4285715"],"y":[7.0]}},"id":"2c4134c2-7c3e-452f-abca-dd45ee6eb34c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(151.142857, 164.285714]"],"color":["navy"],"fill_alpha":[0.8],"height":[8.0],"label":["(151.142857, 164.285714]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["157.71428550000002"],"y":[4.0]}},"id":"9499ea6f-1991-43e5-b6f0-09409ea529de","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(216.857143, 230.000000]"],"color":["navy"],"fill_alpha":[0.8],"height":[5.0],"label":["(216.857143, 230.000000]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857139],"x":["223.4285715"],"y":[2.5]}},"id":"9abd4c8b-3458-4322-872c-476b4b66093c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"0a2040df-1c90-4731-a538-600120c24aae","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"71e78888-e3ea-4c2f-8257-e67bf97b2876","type":"Rect"},{"attributes":{"data_source":{"id":"e86bdf5d-ea41-4a1c-af23-40b1dee393dc","type":"ColumnDataSource"},"glyph":{"id":"2c7ae0f3-2ea5-42d0-89be-7bfcc56d0f09","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"17f73362-3c4b-46f2-a7fa-7940f30b4bc5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(190.571429, 203.714286]"],"color":["navy"],"fill_alpha":[0.8],"height":[4.0],"label":["(190.571429, 203.714286]"],"line_alpha":[1.0],"line_color":["black"],"width":[13.142857142857167],"x":["197.1428575"],"y":[2.0]}},"id":"eb40227d-f15d-4428-84a2-d61d0928b3e1","type":"ColumnDataSource"},{"attributes":{"axis_label":"Count( Hp )","formatter":{"id":"06fc958c-2435-4105-ab44-2c061c9f6757","type":"BasicTickFormatter"},"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"},"ticker":{"id":"2b61396e-6ec8-4215-b5d6-f2b27b76e2ae","type":"BasicTicker"}},"id":"4ab1ff37-d8c6-4403-a103-3fb60cabcbca","type":"LinearAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c7ae0f3-2ea5-42d0-89be-7bfcc56d0f09","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23f06f95-bb0d-4c61-bf61-390073ce2636","type":"Rect"},{"attributes":{"data_source":{"id":"79bb1caf-4e6e-40c4-ad0e-bcaa31dba56b","type":"ColumnDataSource"},"glyph":{"id":"d7b3a587-283a-41ef-91b4-bcca9a7fa603","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"9f89b1fa-1edb-4d00-980d-3b6a421f7c47","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"76b21740-8688-4f73-a6d1-864aa0378d69","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"4ab1ff37-d8c6-4403-a103-3fb60cabcbca","type":"LinearAxis"}],"renderers":[{"id":"61515f99-3ed1-48d6-b1f5-619333a5b9ab","type":"BoxAnnotation"},{"id":"6dd39ee5-abf7-4170-aace-6050cbe88176","type":"GlyphRenderer"},{"id":"0d70ac16-efad-448f-a36f-4d85f3ff291b","type":"GlyphRenderer"},{"id":"76b4bf81-27c1-4f09-b67a-680b72d7c66e","type":"GlyphRenderer"},{"id":"17f73362-3c4b-46f2-a7fa-7940f30b4bc5","type":"GlyphRenderer"},{"id":"202c2dff-f420-4e6a-8a79-aaed0ea15817","type":"GlyphRenderer"},{"id":"0a7ade36-d144-4688-a8dc-9b86958addca","type":"GlyphRenderer"},{"id":"5ad2a887-655c-4659-8fa4-be8ad934af57","type":"GlyphRenderer"},{"id":"3250be30-cd61-49b8-a0a5-33d8727c9116","type":"GlyphRenderer"},{"id":"f31f3516-6592-485a-b60a-1f947993692e","type":"GlyphRenderer"},{"id":"0ae83a38-3643-4879-b84c-e67f82c01922","type":"GlyphRenderer"},{"id":"923088dc-b32a-4eef-ba9c-380225dfb442","type":"GlyphRenderer"},{"id":"e340b327-4d71-44e3-a1b4-0a9ecb2b6d47","type":"GlyphRenderer"},{"id":"9f89b1fa-1edb-4d00-980d-3b6a421f7c47","type":"GlyphRenderer"},{"id":"68621014-8b96-429a-8858-6f7143b22783","type":"GlyphRenderer"},{"id":"4b428316-4437-4c69-85e4-eb06b89f65a3","type":"Legend"},{"id":"76b21740-8688-4f73-a6d1-864aa0378d69","type":"LinearAxis"},{"id":"4ab1ff37-d8c6-4403-a103-3fb60cabcbca","type":"LinearAxis"},{"id":"3640942f-f80e-44cf-8d1c-31569611342d","type":"Grid"}],"title":{"id":"21a2a5ee-785b-4554-a1c2-725f1800687e","type":"Title"},"tool_events":{"id":"ee84cf14-68e3-4128-8f9a-f69e4ad2f235","type":"ToolEvents"},"toolbar":{"id":"2da15f71-e4d9-4442-a920-9f3a68717519","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"7615598d-9679-4324-9478-19f12430950c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1344ffae-b301-4191-acca-2dd54d04a7ec","type":"Range1d"}},"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"d7afdbfd-aeb9-4596-a49d-e9e8ebe0a439","type":"ColumnDataSource"},"glyph":{"id":"95961f2c-ac5f-4211-b264-8f356828934a","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"0d70ac16-efad-448f-a36f-4d85f3ff291b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cd830898-da30-45f2-b1a7-5ea1fc768609","type":"ColumnDataSource"},"glyph":{"id":"7c71f7ff-9e0d-49a8-ad12-4ec628daee6b","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"3250be30-cd61-49b8-a0a5-33d8727c9116","type":"GlyphRenderer"},{"attributes":{},"id":"2b61396e-6ec8-4215-b5d6-f2b27b76e2ae","type":"BasicTicker"},{"attributes":{},"id":"ee84cf14-68e3-4128-8f9a-f69e4ad2f235","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ce5e5d6-6acf-41bb-b7a8-93fd00ec3fe4","type":"Rect"},{"attributes":{"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"3435909b-b8d9-4c6a-b64a-f0bd4c663b19","type":"SaveTool"},{"attributes":{"plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"db6e0a3f-90f2-4c1c-ac55-86f03bbbcfcc","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"181bfbad-573e-44b7-8cf2-fa9bfe9103a9","type":"Rect"},{"attributes":{},"id":"381ea3ce-2ac2-43e7-ab41-de90a46ff83d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"725b9c9d-07a0-45da-9ef4-36f493f1e488","type":"ColumnDataSource"},"glyph":{"id":"23f06f95-bb0d-4c61-bf61-390073ce2636","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"76b4bf81-27c1-4f09-b67a-680b72d7c66e","type":"GlyphRenderer"},{"attributes":{"location":"top_left","plot":{"id":"d8608f3d-ab0b-4027-a406-4052a8e28065","subtype":"Chart","type":"Plot"}},"id":"4b428316-4437-4c69-85e4-eb06b89f65a3","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7b3a587-283a-41ef-91b4-bcca9a7fa603","type":"Rect"},{"attributes":{"data_source":{"id":"7dfa5f6a-c725-42ba-a903-fdb51ca00538","type":"ColumnDataSource"},"glyph":{"id":"71e78888-e3ea-4c2f-8257-e67bf97b2876","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"6dd39ee5-abf7-4170-aace-6050cbe88176","type":"GlyphRenderer"}],"root_ids":["d8608f3d-ab0b-4027-a406-4052a8e28065"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"4393d217-cd50-47b3-9a3d-1469352d8235","elementid":"59346205-c7af-493d-a137-c8515f56d333","modelid":"d8608f3d-ab0b-4027-a406-4052a8e28065"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();