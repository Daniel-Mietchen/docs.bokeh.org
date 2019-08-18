
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
  };var element = document.getElementById("fcbfc2f5-ae47-48b5-b8d3-8b47c11dafb2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fcbfc2f5-ae47-48b5-b8d3-8b47c11dafb2' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"4055504f-016b-402a-a92b-07c0af32c5b4":{"roots":{"references":[{"attributes":{"callback":null},"id":"ffe85e57-a892-416d-9977-0e2426e3bc9f","type":"DataRange1d"},{"attributes":{"data_source":{"id":"58f3ac65-5b56-450d-8da0-ddb3ec50d604","type":"ColumnDataSource"},"glyph":{"id":"50f44d67-2e74-48c4-9434-c0dd3807d7d5","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"33bcb0c5-12a8-40a4-a386-dd7c796ad73b","type":"Circle"},"selection_glyph":null},"id":"838f9ea8-cf7b-4d98-af7a-826285f03853","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"61dbd9cf-81c8-4b1e-aa3a-8171ae1da954","type":"BasicTicker"}},"id":"73fc1d1f-56a2-4162-99de-8c87666bf25e","type":"Grid"},{"attributes":{"data_source":{"id":"36a64004-fa9d-4da2-a68e-d67b0fe70ce0","type":"ColumnDataSource"},"glyph":{"id":"d9846e4a-6b5c-41ca-9e24-6ac2c4f9ed71","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"e6259c6e-393f-49e4-ac0e-1f3405511465","type":"Triangle"},"selection_glyph":null},"id":"d95d2f5c-ef0d-4657-9490-d42f79fa2407","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ad1f71f-8bb9-41dc-853e-ea8da75d43e7","type":"Square"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"adcf477e-7aea-48d9-a814-0a91608bd700","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"50f44d67-2e74-48c4-9434-c0dd3807d7d5","type":"Circle"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"9bc71268-abef-48dc-b477-5ddea1e9f23e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"182c837b-a514-4831-9384-75202e8100b2","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"},"ticker":{"id":"100e9ab5-fb3e-4253-b502-bb4e7cfb0e9a","type":"BasicTicker"}},"id":"3b948095-2648-482a-b650-bf85a7b94436","type":"Grid"},{"attributes":{"below":[{"id":"c576f3d2-ae97-43ff-a61f-2d444d5ae1b4","type":"LinearAxis"}],"left":[{"id":"eecf22f6-8a3f-4862-93bd-0c6c40290ca9","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c576f3d2-ae97-43ff-a61f-2d444d5ae1b4","type":"LinearAxis"},{"id":"73fc1d1f-56a2-4162-99de-8c87666bf25e","type":"Grid"},{"id":"eecf22f6-8a3f-4862-93bd-0c6c40290ca9","type":"LinearAxis"},{"id":"3cea7516-8287-44ee-a3f8-9d68c30fb77d","type":"Grid"},{"id":"1847035f-d1ef-428d-b627-1799bfd399a5","type":"BoxAnnotation"},{"id":"aae551cf-e2a0-4967-9885-669e370ef277","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"cad6a71b-8ec7-4132-82c7-15154dfc3fbe","type":"ToolEvents"},"tools":[{"id":"02f698df-ac84-45cb-ae31-abefdc41aecf","type":"PanTool"},{"id":"182c837b-a514-4831-9384-75202e8100b2","type":"WheelZoomTool"},{"id":"052ab916-6593-479e-a479-daf4f1ecf61e","type":"BoxZoomTool"},{"id":"d792499f-5f21-4282-9a72-ff7235478339","type":"PreviewSaveTool"},{"id":"c9764d6e-ac2d-4d3a-ad18-072cbdd5a0fe","type":"ResizeTool"},{"id":"9a26aa12-d156-4ff2-9957-d649c32adcef","type":"ResetTool"},{"id":"adcf477e-7aea-48d9-a814-0a91608bd700","type":"HelpTool"}],"x_range":{"id":"248b820b-f708-4a14-9f26-0afcb2b15041","type":"DataRange1d"},"y_range":{"id":"0f3947ed-fcd2-4118-9a7e-1b06f961e7f3","type":"DataRange1d"}},"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6b6f85ee-e955-48cb-82f4-3f248375c09d","type":"BasicTickFormatter"},"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cd092ac-8dc9-4aa1-b411-c69921b2fe06","type":"BasicTicker"}},"id":"42c93a70-b6c3-402c-a30c-2da37425db78","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8cff6ba9-3252-45ec-96a2-6b2dca965097","type":"DataRange1d"},{"attributes":{},"id":"0cd092ac-8dc9-4aa1-b411-c69921b2fe06","type":"BasicTicker"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"9f52a172-5e91-4a40-a59c-8cc119a9af1e","type":"ResizeTool"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"8843c6b5-15dc-43a2-9d89-fb219ebcc4a1","type":"PreviewSaveTool"},{"attributes":{},"id":"45614dee-cf09-4442-a458-dba9a3ef21ef","type":"ToolEvents"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"a912d07a-9a0f-4e8f-aa64-a668ac2127ad","type":"PanTool"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"309cda18-8a42-4a0a-af4d-115edd298859","type":"ResizeTool"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"c1c374d6-f938-4954-92a4-146b67aca336","type":"HelpTool"},{"attributes":{"callback":null},"id":"7f338c15-f66b-4c22-8a8c-b9b715a5735e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7321fffd-8254-437a-b3b1-ff20966faee5","type":"BasicTickFormatter"},"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"},"ticker":{"id":"100e9ab5-fb3e-4253-b502-bb4e7cfb0e9a","type":"BasicTicker"}},"id":"84475b85-478c-4608-a0c6-047bda080842","type":"LinearAxis"},{"attributes":{},"id":"7321fffd-8254-437a-b3b1-ff20966faee5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0f3947ed-fcd2-4118-9a7e-1b06f961e7f3","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1847035f-d1ef-428d-b627-1799bfd399a5","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"e3dc31e4-07cb-4d37-afd9-ecd5468187d9","type":"ResetTool"},{"attributes":{"overlay":{"id":"7ec64a77-7136-4a15-b7b5-2737eea4dd5a","type":"BoxAnnotation"},"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"ed1b79c1-6d25-4dab-840a-7970dea151cd","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2dc0d47e-8ff4-4d3b-ac7d-2134d742d086","type":"Square"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"c9764d6e-ac2d-4d3a-ad18-072cbdd5a0fe","type":"ResizeTool"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"ecde75ab-de25-483a-ad5d-80f538c7b79c","type":"ResetTool"},{"attributes":{},"id":"100e9ab5-fb3e-4253-b502-bb4e7cfb0e9a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"58f3ac65-5b56-450d-8da0-ddb3ec50d604","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"},"ticker":{"id":"d48ca51b-ee99-4d0f-9f89-3bd0f36a22af","type":"BasicTicker"}},"id":"8cc2bc0f-a023-4932-9255-65019686c60d","type":"Grid"},{"attributes":{},"id":"721d2f83-f9cb-4e79-a652-738a84411385","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10fb414c-0fa7-4923-86c9-2ecc894a1bf9","type":"DataRange1d"},{"attributes":{},"id":"97aac507-097c-4f42-b56a-b76e254c67cc","type":"ToolEvents"},{"attributes":{"children":[[{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"},{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}],[null,{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}]]},"id":"522da9e1-5c96-42a4-8314-112385c056e8","type":"GridPlot"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"9a26aa12-d156-4ff2-9957-d649c32adcef","type":"ResetTool"},{"attributes":{},"id":"fde1082b-6e74-49db-a228-d98f588373c5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"e1854a32-a2ef-42de-ab33-aa12aa399df4","type":"PreviewSaveTool"},{"attributes":{"dimension":1,"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"460ddf3b-6e14-4900-aaf1-5147a6b68c09","type":"BasicTicker"}},"id":"3cea7516-8287-44ee-a3f8-9d68c30fb77d","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"8d447b53-077d-415b-8b66-2b92f17bbc0c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9846e4a-6b5c-41ca-9e24-6ac2c4f9ed71","type":"Triangle"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"aaf84eaa-6737-4a40-b187-59fe1b299bbb","type":"PanTool"},{"attributes":{"below":[{"id":"1f93b83f-6a0d-42e9-8ae8-4e39820e8156","type":"LinearAxis"}],"left":[{"id":"4e0aa951-8aeb-41f6-ad98-cd62ba224bbc","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1f93b83f-6a0d-42e9-8ae8-4e39820e8156","type":"LinearAxis"},{"id":"8cc2bc0f-a023-4932-9255-65019686c60d","type":"Grid"},{"id":"4e0aa951-8aeb-41f6-ad98-cd62ba224bbc","type":"LinearAxis"},{"id":"32f7a52a-4d9e-4b22-946e-22ab090da0ba","type":"Grid"},{"id":"7ec64a77-7136-4a15-b7b5-2737eea4dd5a","type":"BoxAnnotation"},{"id":"d95d2f5c-ef0d-4657-9490-d42f79fa2407","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"97aac507-097c-4f42-b56a-b76e254c67cc","type":"ToolEvents"},"tools":[{"id":"aaf84eaa-6737-4a40-b187-59fe1b299bbb","type":"PanTool"},{"id":"fb683973-a60e-4f1a-9464-216a11c8bfe2","type":"WheelZoomTool"},{"id":"ed1b79c1-6d25-4dab-840a-7970dea151cd","type":"BoxZoomTool"},{"id":"8843c6b5-15dc-43a2-9d89-fb219ebcc4a1","type":"PreviewSaveTool"},{"id":"309cda18-8a42-4a0a-af4d-115edd298859","type":"ResizeTool"},{"id":"e3dc31e4-07cb-4d37-afd9-ecd5468187d9","type":"ResetTool"},{"id":"45b6b2c3-3dc5-41d9-bfa9-a5d2653dcae2","type":"HelpTool"}],"x_range":{"id":"8cff6ba9-3252-45ec-96a2-6b2dca965097","type":"DataRange1d"},"y_range":{"id":"10fb414c-0fa7-4923-86c9-2ecc894a1bf9","type":"DataRange1d"}},"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"fb683973-a60e-4f1a-9464-216a11c8bfe2","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"f174ff94-4aaf-4f61-a405-5c9b14c887eb","type":"BasicTickFormatter"},"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"460ddf3b-6e14-4900-aaf1-5147a6b68c09","type":"BasicTicker"}},"id":"eecf22f6-8a3f-4862-93bd-0c6c40290ca9","type":"LinearAxis"},{"attributes":{},"id":"cad6a71b-8ec7-4132-82c7-15154dfc3fbe","type":"ToolEvents"},{"attributes":{},"id":"2274f6dc-cd91-407c-929b-332373339677","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cd092ac-8dc9-4aa1-b411-c69921b2fe06","type":"BasicTicker"}},"id":"48c2d746-ff3c-47cb-a7b0-ea0bcb3b4623","type":"Grid"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"02f698df-ac84-45cb-ae31-abefdc41aecf","type":"PanTool"},{"attributes":{"formatter":{"id":"2274f6dc-cd91-407c-929b-332373339677","type":"BasicTickFormatter"},"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"61dbd9cf-81c8-4b1e-aa3a-8171ae1da954","type":"BasicTicker"}},"id":"c576f3d2-ae97-43ff-a61f-2d444d5ae1b4","type":"LinearAxis"},{"attributes":{},"id":"174abbaf-c6c5-4676-8233-2f032ae7d4a4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"721d2f83-f9cb-4e79-a652-738a84411385","type":"BasicTickFormatter"},"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"},"ticker":{"id":"174abbaf-c6c5-4676-8233-2f032ae7d4a4","type":"BasicTicker"}},"id":"4e0aa951-8aeb-41f6-ad98-cd62ba224bbc","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f61d1134-1b70-448c-98dc-a7d857ef8bbe","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"248b820b-f708-4a14-9f26-0afcb2b15041","type":"DataRange1d"},{"attributes":{},"id":"f174ff94-4aaf-4f61-a405-5c9b14c887eb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"d792499f-5f21-4282-9a72-ff7235478339","type":"PreviewSaveTool"},{"attributes":{"below":[{"id":"42c93a70-b6c3-402c-a30c-2da37425db78","type":"LinearAxis"}],"left":[{"id":"84475b85-478c-4608-a0c6-047bda080842","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"42c93a70-b6c3-402c-a30c-2da37425db78","type":"LinearAxis"},{"id":"48c2d746-ff3c-47cb-a7b0-ea0bcb3b4623","type":"Grid"},{"id":"84475b85-478c-4608-a0c6-047bda080842","type":"LinearAxis"},{"id":"3b948095-2648-482a-b650-bf85a7b94436","type":"Grid"},{"id":"f61d1134-1b70-448c-98dc-a7d857ef8bbe","type":"BoxAnnotation"},{"id":"838f9ea8-cf7b-4d98-af7a-826285f03853","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"45614dee-cf09-4442-a458-dba9a3ef21ef","type":"ToolEvents"},"tools":[{"id":"a912d07a-9a0f-4e8f-aa64-a668ac2127ad","type":"PanTool"},{"id":"9bc71268-abef-48dc-b477-5ddea1e9f23e","type":"WheelZoomTool"},{"id":"fd43ba8d-f2ea-409a-9a94-7385750b75b9","type":"BoxZoomTool"},{"id":"e1854a32-a2ef-42de-ab33-aa12aa399df4","type":"PreviewSaveTool"},{"id":"9f52a172-5e91-4a40-a59c-8cc119a9af1e","type":"ResizeTool"},{"id":"ecde75ab-de25-483a-ad5d-80f538c7b79c","type":"ResetTool"},{"id":"c1c374d6-f938-4954-92a4-146b67aca336","type":"HelpTool"}],"x_range":{"id":"ffe85e57-a892-416d-9977-0e2426e3bc9f","type":"DataRange1d"},"y_range":{"id":"7f338c15-f66b-4c22-8a8c-b9b715a5735e","type":"DataRange1d"}},"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d48ca51b-ee99-4d0f-9f89-3bd0f36a22af","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8d447b53-077d-415b-8b66-2b92f17bbc0c","type":"ColumnDataSource"},"glyph":{"id":"7ad1f71f-8bb9-41dc-853e-ea8da75d43e7","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"2dc0d47e-8ff4-4d3b-ac7d-2134d742d086","type":"Square"},"selection_glyph":null},"id":"aae551cf-e2a0-4967-9885-669e370ef277","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ec64a77-7136-4a15-b7b5-2737eea4dd5a","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"f61d1134-1b70-448c-98dc-a7d857ef8bbe","type":"BoxAnnotation"},"plot":{"id":"cfc9544c-3e76-4239-bdff-245e03c55044","subtype":"Figure","type":"Plot"}},"id":"fd43ba8d-f2ea-409a-9a94-7385750b75b9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"}},"id":"45b6b2c3-3dc5-41d9-bfa9-a5d2653dcae2","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"36a64004-fa9d-4da2-a68e-d67b0fe70ce0","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"},"ticker":{"id":"174abbaf-c6c5-4676-8233-2f032ae7d4a4","type":"BasicTicker"}},"id":"32f7a52a-4d9e-4b22-946e-22ab090da0ba","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33bcb0c5-12a8-40a4-a386-dd7c796ad73b","type":"Circle"},{"attributes":{"overlay":{"id":"1847035f-d1ef-428d-b627-1799bfd399a5","type":"BoxAnnotation"},"plot":{"id":"8fef77da-f3fa-405f-a53b-b7a5dba266e0","subtype":"Figure","type":"Plot"}},"id":"052ab916-6593-479e-a479-daf4f1ecf61e","type":"BoxZoomTool"},{"attributes":{},"id":"61dbd9cf-81c8-4b1e-aa3a-8171ae1da954","type":"BasicTicker"},{"attributes":{},"id":"6b6f85ee-e955-48cb-82f4-3f248375c09d","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6259c6e-393f-49e4-ac0e-1f3405511465","type":"Triangle"},{"attributes":{},"id":"460ddf3b-6e14-4900-aaf1-5147a6b68c09","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fde1082b-6e74-49db-a228-d98f588373c5","type":"BasicTickFormatter"},"plot":{"id":"bab6e4a2-7511-4a55-9334-77013b508f75","subtype":"Figure","type":"Plot"},"ticker":{"id":"d48ca51b-ee99-4d0f-9f89-3bd0f36a22af","type":"BasicTicker"}},"id":"1f93b83f-6a0d-42e9-8ae8-4e39820e8156","type":"LinearAxis"}],"root_ids":["522da9e1-5c96-42a4-8314-112385c056e8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"4055504f-016b-402a-a92b-07c0af32c5b4","elementid":"fcbfc2f5-ae47-48b5-b8d3-8b47c11dafb2","modelid":"522da9e1-5c96-42a4-8314-112385c056e8"}];
          
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