
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
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
  };var element = document.getElementById("a0a1840e-f950-4a8e-8c20-f763f21fdc6f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0a1840e-f950-4a8e-8c20-f763f21fdc6f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0248b426-7414-4e0f-a9a4-e53cccdcedee":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"227bee1e-f950-4ed2-a084-b79c356c1d7a","type":"Rect"},{"attributes":{"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"38fe7b83-8019-4941-b94d-800b29676716","type":"ResetTool"},{"attributes":{"data_source":{"id":"b8a43e72-d0f8-427b-b008-dda7fe9f0f51","type":"ColumnDataSource"},"glyph":{"id":"33b8236c-c773-4812-9d1a-b87089ebdf38","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7b73ae37-39b4-4b7f-ae8b-5968f8429cb5","type":"GlyphRenderer"},{"attributes":{},"id":"5e209c2c-2ae7-41e4-a916-152869a3e863","type":"BasicTicker"},{"attributes":{"data_source":{"id":"96472e4e-19a8-41da-b202-e8be6ab477c7","type":"ColumnDataSource"},"glyph":{"id":"717dde65-a0d0-41ca-bd08-73405d3e043d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7c6ce5bc-9157-4f05-9939-3c8c69b7131b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"97b8a45a-e560-43e3-906e-aa80e04e91d3","type":"PreviewSaveTool"},{"attributes":{"callback":null,"end":92.4},"id":"6e26051a-fa47-4a42-9af5-75b62e927be9","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4df96747-24f7-4e51-980c-70a213b21607","type":"Rect"},{"attributes":{"data_source":{"id":"d4d6d373-a6b3-4792-a1af-ce6c10603e01","type":"ColumnDataSource"},"glyph":{"id":"ce499cf4-f240-41ae-a951-ea2ab6c4e3e8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"55c5047c-4a16-4918-8b7e-df9c16835f26","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["52.45"],"y":[7.5]}},"id":"3c1253b8-1b2d-45a9-9785-84bcae987164","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[5.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["223.45"],"y":[2.5]}},"id":"7c953716-ed39-4e1b-8160-d18ce02a0239","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce499cf4-f240-41ae-a951-ea2ab6c4e3e8","type":"Rect"},{"attributes":{"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"728940e4-2b1c-44af-ad10-8c797425d098","type":"ResizeTool"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[84.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["92.0"],"y":[42.0]}},"id":"96472e4e-19a8-41da-b202-e8be6ab477c7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f47d1cc-6e37-4985-af4d-2d83ec2a5df9","type":"Rect"},{"attributes":{"data_source":{"id":"c08bb5a4-9516-4867-bbc7-032e977675c7","type":"ColumnDataSource"},"glyph":{"id":"8b67f85f-1710-4924-a367-e4b53bce61ea","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fbfd075b-ae42-4f88-9773-6ef6955d8256","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"36a9052f-4636-46bf-af75-b6f5bfdec02a","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[67.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["65.7"],"y":[33.5]}},"id":"f0676624-2660-4bfd-86dc-455b9eacaf47","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[4.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["197.14999999999998"],"y":[2.0]}},"id":"c08bb5a4-9516-4867-bbc7-032e977675c7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b67f85f-1710-4924-a367-e4b53bce61ea","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["118.30000000000001"],"y":[7.5]}},"id":"592a907b-c1a5-4a03-8326-cb32ad55b13e","type":"ColumnDataSource"},{"attributes":{"axis_label":"hp","formatter":{"id":"1735f47c-5830-45e2-ad12-967c6a13d2f0","type":"BasicTickFormatter"},"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"},"ticker":{"id":"b119e172-59cd-48eb-9195-2de04ccce2b8","type":"BasicTicker"}},"id":"7253e602-9fe3-48e1-8a9a-b0ae424d4564","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[59.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["78.85"],"y":[29.5]}},"id":"9c29eeb3-f4b5-44e8-8e28-45cb55966208","type":"ColumnDataSource"},{"attributes":{"axis_label":"Count( Hp )","formatter":{"id":"6fdb9a4f-5bf8-4125-b6fe-ed8dc05a0ebd","type":"BasicTickFormatter"},"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"},"ticker":{"id":"5e209c2c-2ae7-41e4-a916-152869a3e863","type":"BasicTicker"}},"id":"98400a7a-ab8c-46df-9090-def93f6db69c","type":"LinearAxis"},{"attributes":{},"id":"1735f47c-5830-45e2-ad12-967c6a13d2f0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33b8236c-c773-4812-9d1a-b87089ebdf38","type":"Rect"},{"attributes":{"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"19d93a65-c51f-4b24-acb8-17a20d00cae7","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"717dde65-a0d0-41ca-bd08-73405d3e043d","type":"Rect"},{"attributes":{"data_source":{"id":"9c29eeb3-f4b5-44e8-8e28-45cb55966208","type":"ColumnDataSource"},"glyph":{"id":"8f47d1cc-6e37-4985-af4d-2d83ec2a5df9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1c3a336-21c4-4ceb-96b1-f36f50347207","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[51.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["105.15"],"y":[25.5]}},"id":"bb72024d-1e57-48ff-9fd8-befbefc3b6ac","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"62b787f1-8112-4aa5-9034-a48fb02d178c","type":"Rect"},{"attributes":{"data_source":{"id":"f0676624-2660-4bfd-86dc-455b9eacaf47","type":"ColumnDataSource"},"glyph":{"id":"36a9052f-4636-46bf-af75-b6f5bfdec02a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a38c5880-97fa-46fb-8b94-10299f59a1b7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["170.85000000000002"],"y":[7.5]}},"id":"5917d6f0-dfc5-419f-96c1-a55b84b1dfe2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7c953716-ed39-4e1b-8160-d18ce02a0239","type":"ColumnDataSource"},"glyph":{"id":"6ab7234a-9862-472a-a0a8-e36f1fd3d0c1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c33b715c-9e05-4a8c-8d92-f6e09b97e525","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d295de7b-b200-4140-ab6b-aebc8da73e68","type":"ColumnDataSource"},"glyph":{"id":"84c1c7b9-2ca8-43e8-802d-8a7e670a6158","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4e54b66-4436-4d22-9326-90f627fc59f6","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1e8a131c-70eb-4853-83f6-ba848c397f45","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"9c3f1a7b-6ef5-4c0d-a859-db8953910af1","type":"ColumnDataSource"},"glyph":{"id":"62b787f1-8112-4aa5-9034-a48fb02d178c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"82994585-87df-430d-a3fa-0945badc28f6","type":"GlyphRenderer"},{"attributes":{},"id":"beca9b67-ed14-4a91-8493-9aebd9ad65a0","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23af6baa-2a66-455a-8bae-549826038670","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[8.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["157.7"],"y":[4.0]}},"id":"5ce32484-b2ea-4a54-a563-6aa591493023","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"099814e9-34da-4c73-be35-c58b0e920218","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34585e9d-d63e-4e07-a944-2a1938fec678","type":"Rect"},{"attributes":{"data_source":{"id":"5ce32484-b2ea-4a54-a563-6aa591493023","type":"ColumnDataSource"},"glyph":{"id":"4df96747-24f7-4e51-980c-70a213b21607","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"729df827-5725-4413-ab99-3f9b221b388f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"046421c9-fa76-4718-99b9-666a637bcae3","type":"HelpTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ab7234a-9862-472a-a0a8-e36f1fd3d0c1","type":"Rect"},{"attributes":{"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"74b83bb4-a9f7-4c2e-b2fe-4c626185482b","type":"PanTool"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[8.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["184.0"],"y":[4.0]}},"id":"9c3f1a7b-6ef5-4c0d-a859-db8953910af1","type":"ColumnDataSource"},{"attributes":{},"id":"b119e172-59cd-48eb-9195-2de04ccce2b8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3c1253b8-1b2d-45a9-9785-84bcae987164","type":"ColumnDataSource"},"glyph":{"id":"099814e9-34da-4c73-be35-c58b0e920218","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"963e5220-d782-423d-b5ec-b95b95d8be56","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[41.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["144.55"],"y":[20.5]}},"id":"d295de7b-b200-4140-ab6b-aebc8da73e68","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1e8a131c-70eb-4853-83f6-ba848c397f45","type":"BoxAnnotation"},"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"}},"id":"178790fc-e213-40e1-a5ef-acf898f64d3a","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"bb72024d-1e57-48ff-9fd8-befbefc3b6ac","type":"ColumnDataSource"},"glyph":{"id":"227bee1e-f950-4ed2-a084-b79c356c1d7a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"314ffd08-2314-4d0d-a44b-a2d24fb6c03d","type":"GlyphRenderer"},{"attributes":{},"id":"6fdb9a4f-5bf8-4125-b6fe-ed8dc05a0ebd","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"},"ticker":{"id":"5e209c2c-2ae7-41e4-a916-152869a3e863","type":"BasicTicker"}},"id":"8600109a-de03-4143-8560-e95da5d1ac05","type":"Grid"},{"attributes":{"below":[{"id":"7253e602-9fe3-48e1-8a9a-b0ae424d4564","type":"LinearAxis"}],"left":[{"id":"98400a7a-ab8c-46df-9090-def93f6db69c","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"1e8a131c-70eb-4853-83f6-ba848c397f45","type":"BoxAnnotation"},{"id":"963e5220-d782-423d-b5ec-b95b95d8be56","type":"GlyphRenderer"},{"id":"a38c5880-97fa-46fb-8b94-10299f59a1b7","type":"GlyphRenderer"},{"id":"c1c3a336-21c4-4ceb-96b1-f36f50347207","type":"GlyphRenderer"},{"id":"7c6ce5bc-9157-4f05-9939-3c8c69b7131b","type":"GlyphRenderer"},{"id":"314ffd08-2314-4d0d-a44b-a2d24fb6c03d","type":"GlyphRenderer"},{"id":"e44261d7-9570-425b-804f-4a3b3a84ae0d","type":"GlyphRenderer"},{"id":"55c5047c-4a16-4918-8b7e-df9c16835f26","type":"GlyphRenderer"},{"id":"a4e54b66-4436-4d22-9326-90f627fc59f6","type":"GlyphRenderer"},{"id":"729df827-5725-4413-ab99-3f9b221b388f","type":"GlyphRenderer"},{"id":"c7a6a460-3503-4f25-83f8-493ae690ac65","type":"GlyphRenderer"},{"id":"82994585-87df-430d-a3fa-0945badc28f6","type":"GlyphRenderer"},{"id":"fbfd075b-ae42-4f88-9773-6ef6955d8256","type":"GlyphRenderer"},{"id":"7b73ae37-39b4-4b7f-ae8b-5968f8429cb5","type":"GlyphRenderer"},{"id":"c33b715c-9e05-4a8c-8d92-f6e09b97e525","type":"GlyphRenderer"},{"id":"7253e602-9fe3-48e1-8a9a-b0ae424d4564","type":"LinearAxis"},{"id":"98400a7a-ab8c-46df-9090-def93f6db69c","type":"LinearAxis"},{"id":"8600109a-de03-4143-8560-e95da5d1ac05","type":"Grid"}],"title":"HP Distribution","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"beca9b67-ed14-4a91-8493-9aebd9ad65a0","type":"ToolEvents"},"tools":[{"id":"74b83bb4-a9f7-4c2e-b2fe-4c626185482b","type":"PanTool"},{"id":"19d93a65-c51f-4b24-acb8-17a20d00cae7","type":"WheelZoomTool"},{"id":"178790fc-e213-40e1-a5ef-acf898f64d3a","type":"BoxZoomTool"},{"id":"97b8a45a-e560-43e3-906e-aa80e04e91d3","type":"PreviewSaveTool"},{"id":"728940e4-2b1c-44af-ad10-8c797425d098","type":"ResizeTool"},{"id":"38fe7b83-8019-4941-b94d-800b29676716","type":"ResetTool"},{"id":"046421c9-fa76-4718-99b9-666a637bcae3","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"246520c8-9d79-4711-b7d6-672742f0d68c","type":"Range1d"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"6e26051a-fa47-4a42-9af5-75b62e927be9","type":"Range1d"},"yscale":"auto"},"id":"d5701e1b-580b-4fb8-9e96-0b5c23843832","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"5917d6f0-dfc5-419f-96c1-a55b84b1dfe2","type":"ColumnDataSource"},"glyph":{"id":"23af6baa-2a66-455a-8bae-549826038670","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c7a6a460-3503-4f25-83f8-493ae690ac65","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[15.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["131.45"],"y":[7.5]}},"id":"d4d6d373-a6b3-4792-a1af-ce6c10603e01","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":243.86999999999998,"start":32.03},"id":"246520c8-9d79-4711-b7d6-672742f0d68c","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"84c1c7b9-2ca8-43e8-802d-8a7e670a6158","type":"Rect"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["navy"],"fill_alpha":[0.8],"height":[5.0],"line_alpha":[1.0],"line_color":["black"],"width":[13.25],"x":["210.3"],"y":[2.5]}},"id":"b8a43e72-d0f8-427b-b008-dda7fe9f0f51","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"592a907b-c1a5-4a03-8326-cb32ad55b13e","type":"ColumnDataSource"},"glyph":{"id":"34585e9d-d63e-4e07-a944-2a1938fec678","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e44261d7-9570-425b-804f-4a3b3a84ae0d","type":"GlyphRenderer"}],"root_ids":["d5701e1b-580b-4fb8-9e96-0b5c23843832"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"0248b426-7414-4e0f-a9a4-e53cccdcedee","elementid":"a0a1840e-f950-4a8e-8c20-f763f21fdc6f","modelid":"d5701e1b-580b-4fb8-9e96-0b5c23843832"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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