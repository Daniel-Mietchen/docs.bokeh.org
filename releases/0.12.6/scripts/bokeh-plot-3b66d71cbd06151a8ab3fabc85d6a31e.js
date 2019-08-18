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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("eace4d02-949a-426f-8325-5c65d52f9f1d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eace4d02-949a-426f-8325-5c65d52f9f1d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"357bfaa5-b421-418f-a0ea-ce2e6e22dca9":{"roots":{"references":[{"attributes":{"data_source":{"id":"b812564a-7cdb-4b8a-bcfd-092252827439","type":"ColumnDataSource"},"glyph":{"id":"cc173933-4fbc-42aa-a358-b49ac9de5872","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"84c99cb8-916a-4f4b-a479-1c827be90cc6","type":"AnnularWedge"},"selection_glyph":null},"id":"5e63f25e-4163-4160-898a-492df3279018","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","fill_color","line_color"],"data":{"fill_color":["#aeaeb8","#e69584"],"line_color":["#aeaeb8","#e69584"],"x":[-40,-40],"y":[-370,-390]}},"id":"c0c8b4b0-d0d3-4140-a7aa-8c8d79ff57ad","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"249c56ac-851c-465a-8508-f44b9a6ea398","type":"ColumnDataSource"},"glyph":{"id":"85850bd0-5dae-4cee-96c8-e533f112f5b2","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6a7604ce-ecd7-4718-8bd3-af9e9f85f8e2","type":"AnnularWedge"},"selection_glyph":null},"id":"b55ade38-31ac-4aa5-927d-2134cd2d6ce5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"13a6a707-94ca-4908-9108-fcc666cc66f1","type":"ColumnDataSource"},"glyph":{"id":"a7215c7b-d16f-4c08-8df3-34e50fbb9f50","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39e2beb8-58e1-4f66-9e79-458737618dcd","type":"AnnularWedge"},"selection_glyph":null},"id":"a8f2848f-b8c1-4e8d-ac4c-ab5e0551b5df","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6e281fde-3bc6-48fd-a90b-ff56921729d4","type":"ColumnDataSource"},"glyph":{"id":"5d53ac1c-f329-4380-9821-bc2120bf7fb0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fbb6c543-57a7-4287-84e0-ee224040ee0e","type":"Circle"},"selection_glyph":null},"id":"ad88b536-476b-46e1-99b1-f0c8181d7ae5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"FyEz4zyk8z8EPFU1uHTrP7hriEjtQd8/ln2Zmahpvj/urLv7GA3Qv6Lc7g5O2uO/yuL/nw+u7797dIiY6MD1v4/3EGHJqvu/Ub3MFFXKAMDc/hB5Rb8DwGZAVd01tAbA8IGZQSapCcB6w92lFp4MwAcFIgoHkw/ARyMzt/tDEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"pmlXNAGDYkDWwF0C/m1lQDjj0CUzIWlAZ+OHhpjCZECbzPtu2O9jQJvM+27Y72NAHRgJcjWcZkAdGAlyNZxmQAbJjNcyD2VAx3MGqjT1bUAGyYzXMg9lQIaiNChEiGtAOOPQJTMhaUDoDDhWBvtgQKDSxFcteWFASjEX/kFVYUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"8DJENPjL8j+1X3fXLsTpPxqzzIza4Ns/Hpuqql3lsD+MZXe3K27Tv/G4zGzXiuW/jN/ufkyv8L+iYndHLZn2v7bl/w8Og/y/ZTREbHc2AcDwdYjQZysEwHq3zDRYIAfABPkQmUgVCsCOOlX9OAoNwBt8mWEp/w/A0d7u4gx6EcA=","dtype":"float64","shape":[16]}}},"id":"249c56ac-851c-465a-8508-f44b9a6ea398","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"7622021c-df58-43c0-90d1-3ef4782aef85","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x","fill_color","line_color"],"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]}},"id":"68f7db62-f205-4818-a7a4-bec8acb4e03a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"}},"id":"2fcd8b87-8c7a-4bf2-9945-fdb48e750ef5","type":"HelpTool"},{"attributes":{"data_source":{"id":"4ee90905-bc30-4c44-ad93-0b504c5ab682","type":"ColumnDataSource"},"glyph":{"id":"e574952d-fda2-4669-bfdf-fb28d60e7a08","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1b41eb8f-cc85-4d4c-b61c-ee27c2f62fdd","type":"AnnularWedge"},"selection_glyph":null},"id":"2734d76a-b2d2-4e73-b99f-4f4664c3adaa","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}}},"id":"f79c8278-b41a-43d8-bffe-c5ff56a50a13","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"eb0e9043-3323-46d8-9d17-fd1a6d44f134","type":"Range1d"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"cc173933-4fbc-42aa-a358-b49ac9de5872","type":"AnnularWedge"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a32aae53-35a6-43c2-9a78-2fbdaadb1ee2","type":"PanTool"},{"id":"c5c99c02-eabb-4aa1-a83a-eaad145ddbae","type":"WheelZoomTool"},{"id":"b0528b10-13c8-4e45-b74e-fa40975a58a4","type":"BoxZoomTool"},{"id":"4c1a64a9-dc9f-4692-ba46-cd83409d194f","type":"SaveTool"},{"id":"a3acaedf-7a88-405f-a38a-cef9a1cdac3d","type":"ResetTool"},{"id":"2fcd8b87-8c7a-4bf2-9945-fdb48e750ef5","type":"HelpTool"}]},"id":"0951900f-93d2-4838-b74c-74d0083e7fcb","type":"Toolbar"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"b17d52ba-206a-4432-be53-ae1aaaa13b8d","type":"Range1d"},{"attributes":{},"id":"8fb23690-d4ca-4107-8151-637f12c3668f","type":"LinearScale"},{"attributes":{"data_source":{"id":"c0c8b4b0-d0d3-4140-a7aa-8c8d79ff57ad","type":"ColumnDataSource"},"glyph":{"id":"7622021c-df58-43c0-90d1-3ef4782aef85","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a5c9de5e-3abd-43f8-be88-2f66bb1d9e33","type":"Circle"},"selection_glyph":null},"id":"52458746-fdf3-4e75-b99a-ff95764b4b65","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"e574952d-fda2-4669-bfdf-fb28d60e7a08","type":"AnnularWedge"},{"attributes":{"overlay":{"id":"04dd7684-60aa-42fa-8f11-3bf1f9a9befa","type":"BoxAnnotation"},"plot":{"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"}},"id":"b0528b10-13c8-4e45-b74e-fa40975a58a4","type":"BoxZoomTool"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0d01e94-5e0a-4c2c-b7a9-29e0c11d9e21","type":"Text"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"Zv0QQcZU9T+i9BDxytXuP3ru/18JAuM/RKG7Ox+5zD9kd4gI55XCvwQkM1M7eeC/LCpE5PxM7L8smKo6XxD0v0AbMwNA+vm/U567yyDk/7+0ECLKAOcCwD5SZi7x2wXAyJOqkuHQCMBS1e720cULwN8WM1vCug7ANKy7X9nXEMA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"bLZfBPAOV0Cg0sRXLXlhQDLrDr5nTGNA1FIAQwHoVkAGyYzXMg9lQNRSAEMB6FZAFEU4zHF2XEAGyYzXMg9lQHi2fdUW2VZAAAAAAAAgckAGyYzXMg9lQIaiNChEiGtA/HdeznjObkAAAAAAACByQKYExgH2o29ApgTGAfajb0A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"Pw8ikoF89D9UGDOTQSXtPysSIgKAUeE/CDBExPn2xT+g6P9/DFjJv1IAEbHEKeK/egYiQob97b9Thpnpo+j0v2cJIrKE0vq/PUZVvTJeAMDIh5khI1MDwFLJ3YUTSAbA3Aoi6gM9CcBmTGZO9DEMwPONqrLkJg/Avmd3i+oNEcA=","dtype":"float64","shape":[16]}}},"id":"13a6a707-94ca-4908-9108-fcc666cc66f1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f3d80057-9e7c-4e49-9c3f-b708f909ce60","type":"ColumnDataSource"},"glyph":{"id":"84dc0e66-daea-458f-bfaf-24a49c689aaa","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1c16c359-7618-46b4-ab41-4c2d074fa8ac","type":"Text"},"selection_glyph":null},"id":"17e52447-dd37-47e3-9a70-a373acf1e18d","type":"GlyphRenderer"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d044d1e7-b40e-4094-913b-ae1ef37168db","type":"Text"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"5d53ac1c-f329-4380-9821-bc2120bf7fb0","type":"Circle"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"3a3f2fa7-0248-4a24-8f46-df79ce4ee5db","type":"Text"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"116cfa90-a3fa-4e24-b350-5e9cf4a8e96e","type":"Text"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"c01802f8-7162-4388-9caf-edc41a6255de","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5c9de5e-3abd-43f8-be88-2f66bb1d9e33","type":"Circle"},{"attributes":{"data_source":{"id":"370bdc19-057d-4abb-9b71-b7489aa1bfa6","type":"ColumnDataSource"},"glyph":{"id":"116cfa90-a3fa-4e24-b350-5e9cf4a8e96e","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3a3f2fa7-0248-4a24-8f46-df79ce4ee5db","type":"Text"},"selection_glyph":null},"id":"fe95f055-227b-4321-840f-78ccab3fcdff","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"04dd7684-60aa-42fa-8f11-3bf1f9a9befa","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"}},"id":"a32aae53-35a6-43c2-9a78-2fbdaadb1ee2","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"0448d25d-511a-4cd9-a4fc-ea69a254a4cf","type":"Title"},{"attributes":{"data_source":{"id":"a1767798-6399-43ab-8ebb-d90c68406fbe","type":"ColumnDataSource"},"glyph":{"id":"d044d1e7-b40e-4094-913b-ae1ef37168db","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c0d01e94-5e0a-4c2c-b7a9-29e0c11d9e21","type":"Text"},"selection_glyph":null},"id":"14f704a6-1d44-44fd-bda8-5d57d143f1b5","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"84c99cb8-916a-4f4b-a479-1c827be90cc6","type":"AnnularWedge"},{"attributes":{"plot":{"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"}},"id":"a3acaedf-7a88-405f-a38a-cef9a1cdac3d","type":"ResetTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"1b41eb8f-cc85-4d4c-b61c-ee27c2f62fdd","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]}},"id":"75a2025e-b3ba-44cb-8289-2514791ce74b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["radius"],"data":{"radius":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxAAAAAAACAVkA=","dtype":"float64","shape":[7]}}},"id":"6e281fde-3bc6-48fd-a90b-ff56921729d4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["Gram-positive","Gram-negative"],"x":[-30,-30],"y":[-370,-390]}},"id":"f3d80057-9e7c-4e49-9c3f-b708f909ce60","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68f7db62-f205-4818-a7a4-bec8acb4e03a","type":"ColumnDataSource"},"glyph":{"id":"c01802f8-7162-4388-9caf-edc41a6255de","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55c0f5b4-6c53-420d-bba9-6494e294979b","type":"Rect"},"selection_glyph":null},"id":"fc509933-e0a6-4cd8-b0e3-bf5f40424624","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"75a2025e-b3ba-44cb-8289-2514791ce74b","type":"ColumnDataSource"},"glyph":{"id":"ce6343ca-9061-45c0-a3f3-f6bb33ce7d90","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d40b4fd8-9a1c-4651-9ee5-7843b1b6761c","type":"Text"},"selection_glyph":null},"id":"37996c46-1d74-42f5-a310-39337f2c1ae2","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"0a7b16bd-ab49-477d-aab4-a8ce97a4a89f","type":"AnnularWedge"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d40b4fd8-9a1c-4651-9ee5-7843b1b6761c","type":"Text"},{"attributes":{"callback":null,"column_names":["outer_radius","start_angle","end_angle"],"data":{"end_angle":{"__ndarray__":"yERVhbPz8T9mg5l5pRPoP3v6ENHHf9g/KMXd3ZUIiz8rHjNzPs/Wv0CVqspgO+e/tM3dLZGH8b/KUGb2cXH3v97T7r5SW/2/eKu7w5miAcAD7f8nipcEwI0uRIx6jAfAF3CI8GqBCsChscxUW3YNwJd5iNylNRDAW5qqDh6wEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"m8z7btjvY0D9PDy5w1RpQDjj0CUzIWlABsmM1zIPZUChS31Y0mVsQB0YCXI1nGZAOOPQJTMhaUCyh+QAGnxuQM3Wg944S2RA/HdeznjObkA449AlMyFpQAAAAAAAIHJAAAAAAAAgckCg0sRXLXlhQFhbROgM+V5AoNLEVy15YUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"oVZm1m4b8T8Xp7sbHGPmP91BVRW1HtU/p1NmZnBGpL/J1u4uUTDav49xiCjq6+i/27vM3NVf8r/xPlWltkn4vwXC3W2XM/6/jCIzG7wOAsAXZHd/rAMFwKGlu+Oc+AfAK+f/R43tCsC1KESsfeINwCE1RAi3axDA5VVmOi/mEcA=","dtype":"float64","shape":[16]}}},"id":"4ee90905-bc30-4c44-ad93-0b504c5ab682","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"39e2beb8-58e1-4f66-9e79-458737618dcd","type":"AnnularWedge"},{"attributes":{"plot":{"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"}},"id":"c5c99c02-eabb-4aa1-a83a-eaad145ddbae","type":"WheelZoomTool"},{"attributes":{},"id":"6be8f728-13fb-43ae-8a0f-5ad2c39ffd3b","type":"ToolEvents"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"84dc0e66-daea-458f-bfaf-24a49c689aaa","type":"Text"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"85850bd0-5dae-4cee-96c8-e533f112f5b2","type":"AnnularWedge"},{"attributes":{},"id":"45ceb6ad-7963-4114-9e80-b88c98e8493a","type":"LinearScale"},{"attributes":{"plot":{"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"}},"id":"4c1a64a9-dc9f-4692-ba46-cd83409d194f","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["start_angle","end_angle","fill_color","line_color"],"data":{"end_angle":{"__ndarray__":"juv/7wot9j95aHcnKkPwP8nK3b2SsuQ/QImZWaK90T9QDCIig6e3v2iPqupjkd2/3E1mhnOc6r8EqruLGjjzvxgtRFT7Ifm/LLDMHNwL/7+hmapy3noCwCvb7tbObwXAtRwzO79kCMA/Xnefr1kLwMufuwOgTg7AqvD/M8ihEMA=","dtype":"float64","shape":[16]},"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}}},"id":"b812564a-7cdb-4b8a-bcfd-092252827439","type":"ColumnDataSource"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c16c359-7618-46b4-ab41-4c2d074fa8ac","type":"Text"},{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"border_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"04dd7684-60aa-42fa-8f11-3bf1f9a9befa","type":"BoxAnnotation"},{"id":"5e63f25e-4163-4160-898a-492df3279018","type":"GlyphRenderer"},{"id":"a8f2848f-b8c1-4e8d-ac4c-ab5e0551b5df","type":"GlyphRenderer"},{"id":"b55ade38-31ac-4aa5-927d-2134cd2d6ce5","type":"GlyphRenderer"},{"id":"2734d76a-b2d2-4e73-b99f-4f4664c3adaa","type":"GlyphRenderer"},{"id":"ad88b536-476b-46e1-99b1-f0c8181d7ae5","type":"GlyphRenderer"},{"id":"fe95f055-227b-4321-840f-78ccab3fcdff","type":"GlyphRenderer"},{"id":"48e70454-ab21-48c6-a182-6f6018be32e4","type":"GlyphRenderer"},{"id":"14f704a6-1d44-44fd-bda8-5d57d143f1b5","type":"GlyphRenderer"},{"id":"52458746-fdf3-4e75-b99a-ff95764b4b65","type":"GlyphRenderer"},{"id":"17e52447-dd37-47e3-9a70-a373acf1e18d","type":"GlyphRenderer"},{"id":"fc509933-e0a6-4cd8-b0e3-bf5f40424624","type":"GlyphRenderer"},{"id":"37996c46-1d74-42f5-a310-39337f2c1ae2","type":"GlyphRenderer"}],"title":{"id":"0448d25d-511a-4cd9-a4fc-ea69a254a4cf","type":"Title"},"tool_events":{"id":"6be8f728-13fb-43ae-8a0f-5ad2c39ffd3b","type":"ToolEvents"},"toolbar":{"id":"0951900f-93d2-4838-b74c-74d0083e7fcb","type":"Toolbar"},"toolbar_sticky":false,"x_range":{"id":"eb0e9043-3323-46d8-9d17-fd1a6d44f134","type":"Range1d"},"x_scale":{"id":"45ceb6ad-7963-4114-9e80-b88c98e8493a","type":"LinearScale"},"y_range":{"id":"b17d52ba-206a-4432-be53-ae1aaaa13b8d","type":"Range1d"},"y_scale":{"id":"8fb23690-d4ca-4107-8151-637f12c3668f","type":"LinearScale"}},"id":"6494ee82-4220-4c5b-9316-572015d16a38","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"55c0f5b4-6c53-420d-bba9-6494e294979b","type":"Rect"},{"attributes":{"data_source":{"id":"f79c8278-b41a-43d8-bffe-c5ff56a50a13","type":"ColumnDataSource"},"glyph":{"id":"f275c406-1abd-42d8-bbb1-2487c2332fc9","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a7b16bd-ab49-477d-aab4-a8ce97a4a89f","type":"AnnularWedge"},"selection_glyph":null},"id":"48e70454-ab21-48c6-a182-6f6018be32e4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","text","x","angle"],"data":{"angle":{"__ndarray__":"BKq7ixo48z/dTWaGc5zqP2iPqupjkd0/WgwiIoOntz8+iZlZor3Rv8nK3b2SsuS/eGh3JypD8L+O6//vCi32v47r/+8KLfY/emh3JypD8D/Iyt29krLkP0CJmVmivdE/QAwiIoOnt79gj6rqY5Hdv+BNZoZznOq/BKq7ixo4878=","dtype":"float64","shape":[16]},"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":{"__ndarray__":"cGn7M6UwWkAzVkZE5WtoQKq2lcOOOXBAjuBL4jQMckDOGdT43m5xQMF6BpGZ7WxA7SBXXEoVY0AXTcs3yKRKQBFNyzfIpErA6CBXXEoVY8DBegaRme1swM4Z1PjebnHAj+BL4jQMcsCrtpXDjjlwwDJWRkTla2jAcmn7M6UwWsA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"aywf0KvmcEAmrFe0AMpqQKfycbJzKGBAv6EJxQDCOkC6LG9iL9dTwNZbjg1z2GXAdpVS2APSbsAYUkjE/tBxwBhSSMT+0HHAepVS2APSbsDWW44Nc9hlwL8sb2Iv11PAmaEJxQDCOkCi8nGycyhgQCesV7QAympAaywf0KvmcEA=","dtype":"float64","shape":[16]}}},"id":"a1767798-6399-43ab-8ebb-d90c68406fbe","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","text"],"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxA","dtype":"float64","shape":[6]}}},"id":"370bdc19-057d-4abb-9b71-b7489aa1bfa6","type":"ColumnDataSource"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce6343ca-9061-45c0-a3f3-f6bb33ce7d90","type":"Text"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"fbb6c543-57a7-4287-84e0-ee224040ee0e","type":"Circle"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"6a7604ce-ecd7-4718-8bd3-af9e9f85f8e2","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"a7215c7b-d16f-4c08-8df3-34e50fbb9f50","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"f275c406-1abd-42d8-bbb1-2487c2332fc9","type":"AnnularWedge"}],"root_ids":["6494ee82-4220-4c5b-9316-572015d16a38"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"357bfaa5-b421-418f-a0ea-ce2e6e22dca9","elementid":"eace4d02-949a-426f-8325-5c65d52f9f1d","modelid":"6494ee82-4220-4c5b-9316-572015d16a38"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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