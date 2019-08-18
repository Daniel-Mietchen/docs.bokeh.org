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
      };var element = document.getElementById("bb13b934-4a26-4ab0-b1bc-66f3f7e61c57");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bb13b934-4a26-4ab0-b1bc-66f3f7e61c57' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"ac570693-9fa7-49bf-aea2-44242b046af8":{"roots":{"references":[{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"19303","type":"AdaptiveTicker"},{"attributes":{"overlay":{"id":"19327","type":"BoxAnnotation"}},"id":"19281","type":"BoxZoomTool"},{"attributes":{},"id":"19280","type":"WheelZoomTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"19310","type":"MonthsTicker"},{"attributes":{"source":{"id":"19292","type":"ColumnDataSource"}},"id":"19296","type":"CDSView"},{"attributes":{},"id":"19302","type":"DatetimeTickFormatter"},{"attributes":{},"id":"19282","type":"SaveTool"},{"attributes":{"days":[1,15]},"id":"19309","type":"DaysTicker"},{"attributes":{},"id":"19381","type":"UnionRenderers"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"19307","type":"DaysTicker"},{"attributes":{"dimension":"height","line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":1382868000000.0},"id":"19370","type":"Span"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"19303","type":"AdaptiveTicker"},{"id":"19304","type":"AdaptiveTicker"},{"id":"19305","type":"AdaptiveTicker"},{"id":"19306","type":"DaysTicker"},{"id":"19307","type":"DaysTicker"},{"id":"19308","type":"DaysTicker"},{"id":"19309","type":"DaysTicker"},{"id":"19310","type":"MonthsTicker"},{"id":"19311","type":"MonthsTicker"},{"id":"19312","type":"MonthsTicker"},{"id":"19313","type":"MonthsTicker"},{"id":"19314","type":"YearsTicker"}]},"id":"19275","type":"DatetimeTicker"},{"attributes":{"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19331","type":"Line"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"19311","type":"MonthsTicker"},{"attributes":{"months":[0,4,8]},"id":"19312","type":"MonthsTicker"},{"attributes":{"dimension":1,"ticker":{"id":"19275","type":"DatetimeTicker"}},"id":"19278","type":"Grid"},{"attributes":{"items":[{"id":"19329","type":"LegendItem"},{"id":"19368","type":"LegendItem"}]},"id":"19328","type":"Legend"},{"attributes":{"text":"2013 Sunrise and Sunset times in Warsaw"},"id":"19298","type":"Title"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"19305","type":"AdaptiveTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"19317","type":"AdaptiveTicker"},{"attributes":{"callback":null},"id":"19263","type":"DataRange1d"},{"attributes":{"dimension":"height","line_color":{"value":"green"},"line_dash":[6],"line_width":{"value":3},"location":1364720400000.0},"id":"19369","type":"Span"},{"attributes":{"ticker":{"id":"19270","type":"DatetimeTicker"}},"id":"19273","type":"Grid"},{"attributes":{"callback":null},"id":"19261","type":"DataRange1d"},{"attributes":{},"id":"19265","type":"LinearScale"},{"attributes":{"data_source":{"id":"19292","type":"ColumnDataSource"},"glyph":{"id":"19293","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19294","type":"Line"},"selection_glyph":null,"view":{"id":"19296","type":"CDSView"}},"id":"19295","type":"GlyphRenderer"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"19323","type":"MonthsTicker"},{"attributes":{},"id":"19300","type":"DatetimeTickFormatter"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"19318","type":"DaysTicker"},{"attributes":{"below":[{"id":"19269","type":"DatetimeAxis"}],"center":[{"id":"19273","type":"Grid"},{"id":"19278","type":"Grid"},{"id":"19328","type":"Legend"},{"id":"19369","type":"Span"},{"id":"19370","type":"Span"}],"left":[{"id":"19274","type":"DatetimeAxis"}],"renderers":[{"id":"19295","type":"GlyphRenderer"},{"id":"19333","type":"GlyphRenderer"}],"title":{"id":"19298","type":"Title"},"toolbar":{"id":"19285","type":"Toolbar"},"x_range":{"id":"19261","type":"DataRange1d"},"x_scale":{"id":"19265","type":"LinearScale"},"y_range":{"id":"19263","type":"DataRange1d"},"y_scale":{"id":"19267","type":"LinearScale"}},"id":"19260","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1356998400000.0,1357084800000.0,1357171200000.0,1357257600000.0,1357344000000.0,1357430400000.0,1357516800000.0,1357603200000.0,1357689600000.0,1357776000000.0,1357862400000.0,1357948800000.0,1358035200000.0,1358121600000.0,1358208000000.0,1358294400000.0,1358380800000.0,1358467200000.0,1358553600000.0,1358640000000.0,1358726400000.0,1358812800000.0,1358899200000.0,1358985600000.0,1359072000000.0,1359158400000.0,1359244800000.0,1359331200000.0,1359417600000.0,1359504000000.0,1359590400000.0,1359676800000.0,1359763200000.0,1359849600000.0,1359936000000.0,1360022400000.0,1360108800000.0,1360195200000.0,1360281600000.0,1360368000000.0,1360454400000.0,1360540800000.0,1360627200000.0,1360713600000.0,1360800000000.0,1360886400000.0,1360972800000.0,1361059200000.0,1361145600000.0,1361232000000.0,1361318400000.0,1361404800000.0,1361491200000.0,1361577600000.0,1361664000000.0,1361750400000.0,1361836800000.0,1361923200000.0,1362009600000.0,1362096000000.0,1362182400000.0,1362268800000.0,1362355200000.0,1362441600000.0,1362528000000.0,1362614400000.0,1362700800000.0,1362787200000.0,1362873600000.0,1362960000000.0,1363046400000.0,1363132800000.0,1363219200000.0,1363305600000.0,1363392000000.0,1363478400000.0,1363564800000.0,1363651200000.0,1363737600000.0,1363824000000.0,1363910400000.0,1363996800000.0,1364083200000.0,1364169600000.0,1364256000000.0,1364342400000.0,1364428800000.0,1364515200000.0,1364601600000.0,1364688000000.0,1364774400000.0,1364860800000.0,1364947200000.0,1365033600000.0,1365120000000.0,1365206400000.0,1365292800000.0,1365379200000.0,1365465600000.0,1365552000000.0,1365638400000.0,1365724800000.0,1365811200000.0,1365897600000.0,1365984000000.0,1366070400000.0,1366156800000.0,1366243200000.0,1366329600000.0,1366416000000.0,1366502400000.0,1366588800000.0,1366675200000.0,1366761600000.0,1366848000000.0,1366934400000.0,1367020800000.0,1367107200000.0,1367193600000.0,1367280000000.0,1367366400000.0,1367452800000.0,1367539200000.0,1367625600000.0,1367712000000.0,1367798400000.0,1367884800000.0,1367971200000.0,1368057600000.0,1368144000000.0,1368230400000.0,1368316800000.0,1368403200000.0,1368489600000.0,1368576000000.0,1368662400000.0,1368748800000.0,1368835200000.0,1368921600000.0,1369008000000.0,1369094400000.0,1369180800000.0,1369267200000.0,1369353600000.0,1369440000000.0,1369526400000.0,1369612800000.0,1369699200000.0,1369785600000.0,1369872000000.0,1369958400000.0,1370044800000.0,1370131200000.0,1370217600000.0,1370304000000.0,1370390400000.0,1370476800000.0,1370563200000.0,1370649600000.0,1370736000000.0,1370822400000.0,1370908800000.0,1370995200000.0,1371081600000.0,1371168000000.0,1371254400000.0,1371340800000.0,1371427200000.0,1371513600000.0,1371600000000.0,1371686400000.0,1371772800000.0,1371859200000.0,1371945600000.0,1372032000000.0,1372118400000.0,1372204800000.0,1372291200000.0,1372377600000.0,1372464000000.0,1372550400000.0,1372636800000.0,1372723200000.0,1372809600000.0,1372896000000.0,1372982400000.0,1373068800000.0,1373155200000.0,1373241600000.0,1373328000000.0,1373414400000.0,1373500800000.0,1373587200000.0,1373673600000.0,1373760000000.0,1373846400000.0,1373932800000.0,1374019200000.0,1374105600000.0,1374192000000.0,1374278400000.0,1374364800000.0,1374451200000.0,1374537600000.0,1374624000000.0,1374710400000.0,1374796800000.0,1374883200000.0,1374969600000.0,1375056000000.0,1375142400000.0,1375228800000.0,1375315200000.0,1375401600000.0,1375488000000.0,1375574400000.0,1375660800000.0,1375747200000.0,1375833600000.0,1375920000000.0,1376006400000.0,1376092800000.0,1376179200000.0,1376265600000.0,1376352000000.0,1376438400000.0,1376524800000.0,1376611200000.0,1376697600000.0,1376784000000.0,1376870400000.0,1376956800000.0,1377043200000.0,1377129600000.0,1377216000000.0,1377302400000.0,1377388800000.0,1377475200000.0,1377561600000.0,1377648000000.0,1377734400000.0,1377820800000.0,1377907200000.0,1377993600000.0,1378080000000.0,1378166400000.0,1378252800000.0,1378339200000.0,1378425600000.0,1378512000000.0,1378598400000.0,1378684800000.0,1378771200000.0,1378857600000.0,1378944000000.0,1379030400000.0,1379116800000.0,1379203200000.0,1379289600000.0,1379376000000.0,1379462400000.0,1379548800000.0,1379635200000.0,1379721600000.0,1379808000000.0,1379894400000.0,1379980800000.0,1380067200000.0,1380153600000.0,1380240000000.0,1380326400000.0,1380412800000.0,1380499200000.0,1380585600000.0,1380672000000.0,1380758400000.0,1380844800000.0,1380931200000.0,1381017600000.0,1381104000000.0,1381190400000.0,1381276800000.0,1381363200000.0,1381449600000.0,1381536000000.0,1381622400000.0,1381708800000.0,1381795200000.0,1381881600000.0,1381968000000.0,1382054400000.0,1382140800000.0,1382227200000.0,1382313600000.0,1382400000000.0,1382486400000.0,1382572800000.0,1382659200000.0,1382745600000.0,1382832000000.0,1382918400000.0,1383004800000.0,1383091200000.0,1383177600000.0,1383264000000.0,1383350400000.0,1383436800000.0,1383523200000.0,1383609600000.0,1383696000000.0,1383782400000.0,1383868800000.0,1383955200000.0,1384041600000.0,1384128000000.0,1384214400000.0,1384300800000.0,1384387200000.0,1384473600000.0,1384560000000.0,1384646400000.0,1384732800000.0,1384819200000.0,1384905600000.0,1384992000000.0,1385078400000.0,1385164800000.0,1385251200000.0,1385337600000.0,1385424000000.0,1385510400000.0,1385596800000.0,1385683200000.0,1385769600000.0,1385856000000.0,1385942400000.0,1386028800000.0,1386115200000.0,1386201600000.0,1386288000000.0,1386374400000.0,1386460800000.0,1386547200000.0,1386633600000.0,1386720000000.0,1386806400000.0,1386892800000.0,1386979200000.0,1387065600000.0,1387152000000.0,1387238400000.0,1387324800000.0,1387411200000.0,1387497600000.0,1387584000000.0,1387670400000.0,1387756800000.0,1387843200000.0,1387929600000.0,1388016000000.0,1388102400000.0,1388188800000.0,1388275200000.0,1388361600000.0,1388448000000.0],"y":[56040000.0,56100000.0,56160000.0,56220000.0,56280000.0,56340000.0,56460000.0,56520000.0,56580000.0,56700000.0,56760000.0,56880000.0,56940000.0,57060000.0,57120000.0,57240000.0,57360000.0,57420000.0,57540000.0,57660000.0,57720000.0,57840000.0,57960000.0,58020000.0,58140000.0,58260000.0,58380000.0,58500000.0,58560000.0,58680000.0,58800000.0,58920000.0,59040000.0,59160000.0,59280000.0,59400000.0,59460000.0,59580000.0,59700000.0,59820000.0,59940000.0,60060000.0,60180000.0,60300000.0,60360000.0,60480000.0,60600000.0,60720000.0,60840000.0,60960000.0,61080000.0,61200000.0,61260000.0,61380000.0,61500000.0,61620000.0,61740000.0,61860000.0,61920000.0,62040000.0,62160000.0,62280000.0,62400000.0,62460000.0,62580000.0,62700000.0,62820000.0,62940000.0,63000000.0,63120000.0,63240000.0,63360000.0,63480000.0,63540000.0,63660000.0,63780000.0,63900000.0,63960000.0,64080000.0,64200000.0,64320000.0,64380000.0,64500000.0,64620000.0,64680000.0,64800000.0,64920000.0,65040000.0,65100000.0,68820000.0,68940000.0,69060000.0,69120000.0,69240000.0,69360000.0,69420000.0,69540000.0,69660000.0,69780000.0,69840000.0,69960000.0,70080000.0,70200000.0,70260000.0,70380000.0,70500000.0,70560000.0,70680000.0,70800000.0,70920000.0,70980000.0,71100000.0,71220000.0,71280000.0,71400000.0,71520000.0,71640000.0,71700000.0,71820000.0,71940000.0,72000000.0,72120000.0,72240000.0,72300000.0,72420000.0,72540000.0,72600000.0,72720000.0,72840000.0,72900000.0,73020000.0,73140000.0,73200000.0,73320000.0,73380000.0,73500000.0,73560000.0,73680000.0,73740000.0,73860000.0,73920000.0,74040000.0,74100000.0,74220000.0,74280000.0,74340000.0,74460000.0,74520000.0,74580000.0,74640000.0,74760000.0,74820000.0,74880000.0,74940000.0,75000000.0,75060000.0,75120000.0,75180000.0,75240000.0,75300000.0,75300000.0,75360000.0,75420000.0,75480000.0,75480000.0,75540000.0,75540000.0,75600000.0,75600000.0,75600000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75660000.0,75600000.0,75600000.0,75540000.0,75540000.0,75480000.0,75480000.0,75420000.0,75360000.0,75360000.0,75300000.0,75240000.0,75180000.0,75120000.0,75060000.0,75000000.0,74940000.0,74880000.0,74820000.0,74760000.0,74640000.0,74580000.0,74520000.0,74400000.0,74340000.0,74220000.0,74160000.0,74040000.0,73980000.0,73860000.0,73800000.0,73680000.0,73560000.0,73500000.0,73380000.0,73260000.0,73140000.0,73020000.0,72960000.0,72840000.0,72720000.0,72600000.0,72480000.0,72360000.0,72240000.0,72120000.0,72000000.0,71880000.0,71760000.0,71640000.0,71520000.0,71340000.0,71220000.0,71100000.0,70980000.0,70860000.0,70740000.0,70560000.0,70440000.0,70320000.0,70200000.0,70020000.0,69900000.0,69780000.0,69600000.0,69480000.0,69360000.0,69240000.0,69060000.0,68940000.0,68820000.0,68640000.0,68520000.0,68400000.0,68220000.0,68100000.0,67920000.0,67800000.0,67680000.0,67500000.0,67380000.0,67260000.0,67080000.0,66960000.0,66840000.0,66660000.0,66540000.0,66420000.0,66240000.0,66120000.0,65940000.0,65820000.0,65700000.0,65520000.0,65400000.0,65280000.0,65160000.0,64980000.0,64860000.0,64740000.0,64560000.0,64440000.0,64320000.0,64200000.0,64020000.0,63900000.0,63780000.0,63660000.0,63540000.0,63360000.0,63240000.0,63120000.0,63000000.0,62880000.0,62760000.0,62640000.0,62520000.0,62400000.0,58680000.0,58560000.0,58440000.0,58320000.0,58200000.0,58080000.0,57960000.0,57840000.0,57780000.0,57660000.0,57540000.0,57420000.0,57360000.0,57240000.0,57120000.0,57060000.0,56940000.0,56880000.0,56760000.0,56700000.0,56580000.0,56520000.0,56460000.0,56340000.0,56280000.0,56220000.0,56160000.0,56100000.0,56040000.0,55980000.0,55920000.0,55860000.0,55800000.0,55740000.0,55680000.0,55620000.0,55620000.0,55560000.0,55560000.0,55500000.0,55500000.0,55440000.0,55440000.0,55440000.0,55380000.0,55380000.0,55380000.0,55380000.0,55380000.0,55380000.0,55380000.0,55440000.0,55440000.0,55440000.0,55440000.0,55500000.0,55500000.0,55560000.0,55620000.0,55620000.0,55680000.0,55740000.0,55740000.0,55800000.0,55860000.0,55920000.0]},"selected":{"id":"19341","type":"Selection"},"selection_policy":{"id":"19342","type":"UnionRenderers"}},"id":"19292","type":"ColumnDataSource"},{"attributes":{"days":[1,8,15,22]},"id":"19320","type":"DaysTicker"},{"attributes":{},"id":"19326","type":"YearsTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19327","type":"BoxAnnotation"},{"attributes":{},"id":"19267","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1356998400000.0,1357084800000.0,1357171200000.0,1357257600000.0,1357344000000.0,1357430400000.0,1357516800000.0,1357603200000.0,1357689600000.0,1357776000000.0,1357862400000.0,1357948800000.0,1358035200000.0,1358121600000.0,1358208000000.0,1358294400000.0,1358380800000.0,1358467200000.0,1358553600000.0,1358640000000.0,1358726400000.0,1358812800000.0,1358899200000.0,1358985600000.0,1359072000000.0,1359158400000.0,1359244800000.0,1359331200000.0,1359417600000.0,1359504000000.0,1359590400000.0,1359676800000.0,1359763200000.0,1359849600000.0,1359936000000.0,1360022400000.0,1360108800000.0,1360195200000.0,1360281600000.0,1360368000000.0,1360454400000.0,1360540800000.0,1360627200000.0,1360713600000.0,1360800000000.0,1360886400000.0,1360972800000.0,1361059200000.0,1361145600000.0,1361232000000.0,1361318400000.0,1361404800000.0,1361491200000.0,1361577600000.0,1361664000000.0,1361750400000.0,1361836800000.0,1361923200000.0,1362009600000.0,1362096000000.0,1362182400000.0,1362268800000.0,1362355200000.0,1362441600000.0,1362528000000.0,1362614400000.0,1362700800000.0,1362787200000.0,1362873600000.0,1362960000000.0,1363046400000.0,1363132800000.0,1363219200000.0,1363305600000.0,1363392000000.0,1363478400000.0,1363564800000.0,1363651200000.0,1363737600000.0,1363824000000.0,1363910400000.0,1363996800000.0,1364083200000.0,1364169600000.0,1364256000000.0,1364342400000.0,1364428800000.0,1364515200000.0,1364601600000.0,1364688000000.0,1364774400000.0,1364860800000.0,1364947200000.0,1365033600000.0,1365120000000.0,1365206400000.0,1365292800000.0,1365379200000.0,1365465600000.0,1365552000000.0,1365638400000.0,1365724800000.0,1365811200000.0,1365897600000.0,1365984000000.0,1366070400000.0,1366156800000.0,1366243200000.0,1366329600000.0,1366416000000.0,1366502400000.0,1366588800000.0,1366675200000.0,1366761600000.0,1366848000000.0,1366934400000.0,1367020800000.0,1367107200000.0,1367193600000.0,1367280000000.0,1367366400000.0,1367452800000.0,1367539200000.0,1367625600000.0,1367712000000.0,1367798400000.0,1367884800000.0,1367971200000.0,1368057600000.0,1368144000000.0,1368230400000.0,1368316800000.0,1368403200000.0,1368489600000.0,1368576000000.0,1368662400000.0,1368748800000.0,1368835200000.0,1368921600000.0,1369008000000.0,1369094400000.0,1369180800000.0,1369267200000.0,1369353600000.0,1369440000000.0,1369526400000.0,1369612800000.0,1369699200000.0,1369785600000.0,1369872000000.0,1369958400000.0,1370044800000.0,1370131200000.0,1370217600000.0,1370304000000.0,1370390400000.0,1370476800000.0,1370563200000.0,1370649600000.0,1370736000000.0,1370822400000.0,1370908800000.0,1370995200000.0,1371081600000.0,1371168000000.0,1371254400000.0,1371340800000.0,1371427200000.0,1371513600000.0,1371600000000.0,1371686400000.0,1371772800000.0,1371859200000.0,1371945600000.0,1372032000000.0,1372118400000.0,1372204800000.0,1372291200000.0,1372377600000.0,1372464000000.0,1372550400000.0,1372636800000.0,1372723200000.0,1372809600000.0,1372896000000.0,1372982400000.0,1373068800000.0,1373155200000.0,1373241600000.0,1373328000000.0,1373414400000.0,1373500800000.0,1373587200000.0,1373673600000.0,1373760000000.0,1373846400000.0,1373932800000.0,1374019200000.0,1374105600000.0,1374192000000.0,1374278400000.0,1374364800000.0,1374451200000.0,1374537600000.0,1374624000000.0,1374710400000.0,1374796800000.0,1374883200000.0,1374969600000.0,1375056000000.0,1375142400000.0,1375228800000.0,1375315200000.0,1375401600000.0,1375488000000.0,1375574400000.0,1375660800000.0,1375747200000.0,1375833600000.0,1375920000000.0,1376006400000.0,1376092800000.0,1376179200000.0,1376265600000.0,1376352000000.0,1376438400000.0,1376524800000.0,1376611200000.0,1376697600000.0,1376784000000.0,1376870400000.0,1376956800000.0,1377043200000.0,1377129600000.0,1377216000000.0,1377302400000.0,1377388800000.0,1377475200000.0,1377561600000.0,1377648000000.0,1377734400000.0,1377820800000.0,1377907200000.0,1377993600000.0,1378080000000.0,1378166400000.0,1378252800000.0,1378339200000.0,1378425600000.0,1378512000000.0,1378598400000.0,1378684800000.0,1378771200000.0,1378857600000.0,1378944000000.0,1379030400000.0,1379116800000.0,1379203200000.0,1379289600000.0,1379376000000.0,1379462400000.0,1379548800000.0,1379635200000.0,1379721600000.0,1379808000000.0,1379894400000.0,1379980800000.0,1380067200000.0,1380153600000.0,1380240000000.0,1380326400000.0,1380412800000.0,1380499200000.0,1380585600000.0,1380672000000.0,1380758400000.0,1380844800000.0,1380931200000.0,1381017600000.0,1381104000000.0,1381190400000.0,1381276800000.0,1381363200000.0,1381449600000.0,1381536000000.0,1381622400000.0,1381708800000.0,1381795200000.0,1381881600000.0,1381968000000.0,1382054400000.0,1382140800000.0,1382227200000.0,1382313600000.0,1382400000000.0,1382486400000.0,1382572800000.0,1382659200000.0,1382745600000.0,1382832000000.0,1382918400000.0,1383004800000.0,1383091200000.0,1383177600000.0,1383264000000.0,1383350400000.0,1383436800000.0,1383523200000.0,1383609600000.0,1383696000000.0,1383782400000.0,1383868800000.0,1383955200000.0,1384041600000.0,1384128000000.0,1384214400000.0,1384300800000.0,1384387200000.0,1384473600000.0,1384560000000.0,1384646400000.0,1384732800000.0,1384819200000.0,1384905600000.0,1384992000000.0,1385078400000.0,1385164800000.0,1385251200000.0,1385337600000.0,1385424000000.0,1385510400000.0,1385596800000.0,1385683200000.0,1385769600000.0,1385856000000.0,1385942400000.0,1386028800000.0,1386115200000.0,1386201600000.0,1386288000000.0,1386374400000.0,1386460800000.0,1386547200000.0,1386633600000.0,1386720000000.0,1386806400000.0,1386892800000.0,1386979200000.0,1387065600000.0,1387152000000.0,1387238400000.0,1387324800000.0,1387411200000.0,1387497600000.0,1387584000000.0,1387670400000.0,1387756800000.0,1387843200000.0,1387929600000.0,1388016000000.0,1388102400000.0,1388188800000.0,1388275200000.0,1388361600000.0,1388448000000.0],"y":[27900000.0,27900000.0,27900000.0,27900000.0,27840000.0,27840000.0,27840000.0,27780000.0,27780000.0,27720000.0,27660000.0,27660000.0,27600000.0,27540000.0,27480000.0,27420000.0,27360000.0,27300000.0,27240000.0,27180000.0,27120000.0,27060000.0,27000000.0,26880000.0,26820000.0,26760000.0,26640000.0,26580000.0,26520000.0,26400000.0,26340000.0,26220000.0,26100000.0,26040000.0,25920000.0,25800000.0,25740000.0,25620000.0,25500000.0,25380000.0,25260000.0,25200000.0,25080000.0,24960000.0,24840000.0,24720000.0,24600000.0,24480000.0,24360000.0,24240000.0,24120000.0,24000000.0,23880000.0,23700000.0,23580000.0,23460000.0,23340000.0,23220000.0,23100000.0,22920000.0,22800000.0,22680000.0,22560000.0,22440000.0,22260000.0,22140000.0,22020000.0,21840000.0,21720000.0,21600000.0,21480000.0,21300000.0,21180000.0,21060000.0,20880000.0,20760000.0,20640000.0,20460000.0,20340000.0,20220000.0,20040000.0,19920000.0,19800000.0,19620000.0,19500000.0,19380000.0,19200000.0,19080000.0,18960000.0,22380000.0,22260000.0,22140000.0,21960000.0,21840000.0,21720000.0,21540000.0,21420000.0,21300000.0,21180000.0,21000000.0,20880000.0,20760000.0,20640000.0,20460000.0,20340000.0,20220000.0,20100000.0,19980000.0,19800000.0,19680000.0,19560000.0,19440000.0,19320000.0,19200000.0,19080000.0,18960000.0,18840000.0,18720000.0,18600000.0,18480000.0,18360000.0,18240000.0,18120000.0,18000000.0,17880000.0,17760000.0,17700000.0,17580000.0,17460000.0,17340000.0,17280000.0,17160000.0,17040000.0,16980000.0,16860000.0,16800000.0,16680000.0,16620000.0,16500000.0,16440000.0,16380000.0,16260000.0,16200000.0,16140000.0,16080000.0,16020000.0,15960000.0,15840000.0,15780000.0,15780000.0,15720000.0,15660000.0,15600000.0,15540000.0,15480000.0,15480000.0,15420000.0,15420000.0,15360000.0,15360000.0,15300000.0,15300000.0,15300000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15240000.0,15300000.0,15300000.0,15300000.0,15360000.0,15360000.0,15420000.0,15420000.0,15480000.0,15480000.0,15540000.0,15600000.0,15600000.0,15660000.0,15720000.0,15780000.0,15840000.0,15900000.0,15960000.0,16020000.0,16080000.0,16140000.0,16200000.0,16260000.0,16380000.0,16440000.0,16500000.0,16560000.0,16680000.0,16740000.0,16800000.0,16920000.0,16980000.0,17100000.0,17160000.0,17280000.0,17340000.0,17460000.0,17520000.0,17640000.0,17700000.0,17820000.0,17880000.0,18000000.0,18060000.0,18180000.0,18300000.0,18360000.0,18480000.0,18540000.0,18660000.0,18780000.0,18840000.0,18960000.0,19020000.0,19140000.0,19260000.0,19320000.0,19440000.0,19560000.0,19620000.0,19740000.0,19860000.0,19920000.0,20040000.0,20160000.0,20220000.0,20340000.0,20400000.0,20520000.0,20640000.0,20700000.0,20820000.0,20940000.0,21000000.0,21120000.0,21240000.0,21300000.0,21420000.0,21540000.0,21600000.0,21720000.0,21780000.0,21900000.0,22020000.0,22080000.0,22200000.0,22320000.0,22380000.0,22500000.0,22620000.0,22680000.0,22800000.0,22920000.0,22980000.0,23100000.0,23220000.0,23280000.0,23400000.0,23520000.0,23580000.0,23700000.0,23820000.0,23880000.0,24000000.0,24120000.0,24180000.0,24300000.0,24420000.0,24540000.0,24600000.0,24720000.0,24840000.0,24900000.0,25020000.0,25140000.0,25260000.0,25320000.0,25440000.0,25560000.0,25680000.0,25740000.0,25860000.0,25980000.0,26100000.0,26220000.0,26280000.0,26400000.0,22920000.0,23040000.0,23160000.0,23220000.0,23340000.0,23460000.0,23580000.0,23700000.0,23820000.0,23880000.0,24000000.0,24120000.0,24240000.0,24360000.0,24420000.0,24540000.0,24660000.0,24780000.0,24900000.0,24960000.0,25080000.0,25200000.0,25320000.0,25380000.0,25500000.0,25620000.0,25680000.0,25800000.0,25920000.0,25980000.0,26100000.0,26160000.0,26280000.0,26340000.0,26460000.0,26520000.0,26640000.0,26700000.0,26760000.0,26880000.0,26940000.0,27000000.0,27120000.0,27180000.0,27240000.0,27300000.0,27360000.0,27420000.0,27480000.0,27540000.0,27540000.0,27600000.0,27660000.0,27720000.0,27720000.0,27780000.0,27780000.0,27840000.0,27840000.0,27900000.0,27900000.0,27900000.0,27900000.0,27900000.0,27900000.0,27900000.0]},"selected":{"id":"19380","type":"Selection"},"selection_policy":{"id":"19381","type":"UnionRenderers"}},"id":"19330","type":"ColumnDataSource"},{"attributes":{},"id":"19380","type":"Selection"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"19319","type":"DaysTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19293","type":"Line"},{"attributes":{"formatter":{"id":"19302","type":"DatetimeTickFormatter"},"ticker":{"id":"19270","type":"DatetimeTicker"}},"id":"19269","type":"DatetimeAxis"},{"attributes":{"days":[1,8,15,22]},"id":"19308","type":"DaysTicker"},{"attributes":{"source":{"id":"19330","type":"ColumnDataSource"}},"id":"19334","type":"CDSView"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"19304","type":"AdaptiveTicker"},{"attributes":{},"id":"19314","type":"YearsTicker"},{"attributes":{"label":{"value":"Sunrise"},"renderers":[{"id":"19333","type":"GlyphRenderer"}]},"id":"19368","type":"LegendItem"},{"attributes":{"months":[0,4,8]},"id":"19324","type":"MonthsTicker"},{"attributes":{},"id":"19279","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19279","type":"PanTool"},{"id":"19280","type":"WheelZoomTool"},{"id":"19281","type":"BoxZoomTool"},{"id":"19282","type":"SaveTool"},{"id":"19283","type":"ResetTool"},{"id":"19284","type":"HelpTool"}]},"id":"19285","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19332","type":"Line"},{"attributes":{"days":[1,15]},"id":"19321","type":"DaysTicker"},{"attributes":{"data_source":{"id":"19330","type":"ColumnDataSource"},"glyph":{"id":"19331","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19332","type":"Line"},"selection_glyph":null,"view":{"id":"19334","type":"CDSView"}},"id":"19333","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"19294","type":"Line"},{"attributes":{"months":[0,6]},"id":"19313","type":"MonthsTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"19322","type":"MonthsTicker"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"19315","type":"AdaptiveTicker"},{"attributes":{},"id":"19283","type":"ResetTool"},{"attributes":{},"id":"19342","type":"UnionRenderers"},{"attributes":{},"id":"19284","type":"HelpTool"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"19315","type":"AdaptiveTicker"},{"id":"19316","type":"AdaptiveTicker"},{"id":"19317","type":"AdaptiveTicker"},{"id":"19318","type":"DaysTicker"},{"id":"19319","type":"DaysTicker"},{"id":"19320","type":"DaysTicker"},{"id":"19321","type":"DaysTicker"},{"id":"19322","type":"MonthsTicker"},{"id":"19323","type":"MonthsTicker"},{"id":"19324","type":"MonthsTicker"},{"id":"19325","type":"MonthsTicker"},{"id":"19326","type":"YearsTicker"}]},"id":"19270","type":"DatetimeTicker"},{"attributes":{"label":{"value":"Sunset"},"renderers":[{"id":"19295","type":"GlyphRenderer"}]},"id":"19329","type":"LegendItem"},{"attributes":{"axis_label":"Time of Day","formatter":{"id":"19300","type":"DatetimeTickFormatter"},"ticker":{"id":"19275","type":"DatetimeTicker"}},"id":"19274","type":"DatetimeAxis"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"19306","type":"DaysTicker"},{"attributes":{},"id":"19341","type":"Selection"},{"attributes":{"months":[0,6]},"id":"19325","type":"MonthsTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"19316","type":"AdaptiveTicker"}],"root_ids":["19260"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"ac570693-9fa7-49bf-aea2-44242b046af8","roots":{"19260":"bb13b934-4a26-4ab0-b1bc-66f3f7e61c57"}}];
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
        
        
        }
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