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
      };var element = document.getElementById("24670b23-21f4-442f-aabd-6482d450f892");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '24670b23-21f4-442f-aabd-6482d450f892' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"436eb712-3584-4bc1-b773-7e3c0ab90686":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Dec","Nov","Oct","Sep","Aug","Jul","Jun","May","Apr","Mar","Feb","Jan"]},"id":"21546","type":"FactorRange"},{"attributes":{"source":{"id":"21539","type":"ColumnDataSource"}},"id":"21565","type":"CDSView"},{"attributes":{"ticker":{"id":"21553","type":"CategoricalTicker"}},"id":"21555","type":"Grid"},{"attributes":{"high":11.4,"low":2.4,"palette":["#75968f","#a5bab7","#c9d9d3","#e2e2e2","#dfccce","#ddb7b1","#cc7878","#933b41","#550b1d"]},"id":"21540","type":"LinearColorMapper"},{"attributes":{"above":[{"id":"21552","type":"CategoricalAxis"}],"center":[{"id":"21555","type":"Grid"},{"id":"21559","type":"Grid"}],"left":[{"id":"21556","type":"CategoricalAxis"}],"plot_height":300,"plot_width":800,"renderers":[{"id":"21564","type":"GlyphRenderer"}],"right":[{"id":"21568","type":"ColorBar"}],"title":{"id":"21542","type":"Title"},"toolbar":{"id":"21560","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21544","type":"FactorRange"},"x_scale":{"id":"21548","type":"CategoricalScale"},"y_range":{"id":"21546","type":"FactorRange"},"y_scale":{"id":"21550","type":"CategoricalScale"}},"id":"21541","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"Year"},"y":{"field":"Month"}},"id":"21563","type":"Rect"},{"attributes":{"callback":null,"data":{"Month":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"Year":["1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2014","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2015","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016","2016"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827],"rate":{"__ndarray__":"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MzMVQGZmZmZmZhRAzczMzMzMGECamZmZmZkXQM3MzMzMzBZAZmZmZmZmFkAAAAAAAAAWQDMzMzMzMxdAmpmZmZmZF0BmZmZmZmYWQJqZmZmZmRVAzczMzMzMFEAzMzMzMzMVQM3MzMzMzBRAMzMzMzMzGUAAAAAAAAAYQDMzMzMzMxdAmpmZmZmZFUCamZmZmZkVQAAAAAAAABZAZmZmZmZmFkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZE0AAAAAAAAAUQAAAAAAAABRAmpmZmZmZF0DNzMzMzMwWQAAAAAAAABZAMzMzMzMzE0DNzMzMzMwSQM3MzMzMzBRAAAAAAAAAFEAzMzMzMzMTQM3MzMzMzBJAmpmZmZmZEUAzMzMzMzMRQJqZmZmZmRFAzczMzMzMFEAAAAAAAAAUQAAAAAAAABRAZmZmZmZmEEDNzMzMzMwQQM3MzMzMzBJAzczMzMzMEkAAAAAAAAASQJqZmZmZmRFAzczMzMzMEEBmZmZmZmYQQAAAAAAAABBAMzMzMzMzE0DNzMzMzMwSQJqZmZmZmRFAZmZmZmZmEEAAAAAAAAAQQAAAAAAAABJAAAAAAAAAEkDNzMzMzMwQQGZmZmZmZhBAZmZmZmZmDkBmZmZmZmYOQJqZmZmZmQ1AAAAAAAAAEkCamZmZmZkRQDMzMzMzMxFAmpmZmZmZDUBmZmZmZmYOQGZmZmZmZhBAzczMzMzMEEBmZmZmZmYQQGZmZmZmZg5AzczMzMzMDECamZmZmZkNQJqZmZmZmQ1AzczMzMzMEkBmZmZmZmYSQAAAAAAAABJAzczMzMzMEEBmZmZmZmYQQM3MzMzMzBJAzczMzMzMEkCamZmZmZkTQM3MzMzMzBJAAAAAAAAAFEAzMzMzMzMVQJqZmZmZmRVAMzMzMzMzGUBmZmZmZmYYQGZmZmZmZhhAzczMzMzMFkAAAAAAAAAWQAAAAAAAABhAmpmZmZmZF0DNzMzMzMwWQJqZmZmZmRVAMzMzMzMzFUBmZmZmZmYWQM3MzMzMzBZAAAAAAAAAGkCamZmZmZkZQM3MzMzMzBhAMzMzMzMzF0AzMzMzMzMXQAAAAAAAABpAMzMzMzMzGUAAAAAAAAAYQDMzMzMzMxdAZmZmZmZmFkBmZmZmZmYWQJqZmZmZmRVAMzMzMzMzGUAAAAAAAAAYQAAAAAAAABhAmpmZmZmZFUAzMzMzMzMVQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAZmZmZmZmFEDNzMzMzMwUQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMXQJqZmZmZmRVAmpmZmZmZE0CamZmZmZkTQM3MzMzMzBRAzczMzMzMFECamZmZmZkTQDMzMzMzMxNAZmZmZmZmEkAzMzMzMzMTQGZmZmZmZhJAZmZmZmZmFEBmZmZmZmYUQDMzMzMzMxNAAAAAAAAAEkCamZmZmZkRQDMzMzMzMxNAAAAAAAAAFEBmZmZmZmYSQJqZmZmZmRFAZmZmZmZmEEAzMzMzMzMRQDMzMzMzMxFAAAAAAAAAFECamZmZmZkTQAAAAAAAABJAMzMzMzMzEUAzMzMzMzMRQM3MzMzMzBJAmpmZmZmZE0BmZmZmZmYSQAAAAAAAABJAmpmZmZmZEUAAAAAAAAASQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwUQM3MzMzMzBRAMzMzMzMzE0DNzMzMzMwUQM3MzMzMzBZAAAAAAAAAGEBmZmZmZmYYQAAAAAAAABhAZmZmZmZmGEAAAAAAAAAaQGZmZmZmZhxAAAAAAAAAIUDNzMzMzMwhQAAAAAAAACJAMzMzMzMzIUAzMzMzMzMiQGZmZmZmZiNAZmZmZmZmI0AzMzMzMzMjQAAAAAAAACNAAAAAAAAAI0DNzMzMzMwiQGZmZmZmZiNAMzMzMzMzJUDNzMzMzMwkQGZmZmZmZiRAAAAAAAAAI0CamZmZmZkiQDMzMzMzMyNAZmZmZmZmI0AAAAAAAAAjQGZmZmZmZiJAAAAAAAAAIkCamZmZmZkiQDMzMzMzMyJAmpmZmZmZI0AAAAAAAAAjQGZmZmZmZiJAZmZmZmZmIUBmZmZmZmYhQJqZmZmZmSJAmpmZmZmZIkAzMzMzMzMiQJqZmZmZmSFAAAAAAAAAIUBmZmZmZmYgQJqZmZmZmSBAmpmZmZmZIUBmZmZmZmYhQM3MzMzMzCBAzczMzMzMHkCamZmZmZkfQM3MzMzMzCBAMzMzMzMzIUBmZmZmZmYgQGZmZmZmZh5AAAAAAAAAHkCamZmZmZkdQGZmZmZmZh5AAAAAAAAAIUAzMzMzMzMgQGZmZmZmZh5AZmZmZmZmHEAzMzMzMzMdQDMzMzMzMx9AzczMzMzMHkAzMzMzMzMdQAAAAAAAABxAAAAAAAAAHEBmZmZmZmYaQAAAAAAAABpAAAAAAAAAHEAAAAAAAAAcQDMzMzMzMxtAmpmZmZmZF0BmZmZmZmYYQDMzMzMzMxlAAAAAAAAAGkAzMzMzMzMZQM3MzMzMzBZAAAAAAAAAFkAAAAAAAAAWQJqZmZmZmRVAZmZmZmZmGEAzMzMzMzMXQGZmZmZmZhZAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAZmZmZmZmFkDNzMzMzMwUQJqZmZmZmRNAMzMzMzMzE0AzMzMzMzMTQDMzMzMzMxNAMzMzMzMzFUDNzMzMzMwUQGZmZmZmZhRAzczMzMzMEkAAAAAAAAASQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQDMzMzMzMxNAzczMzMzMEkCamZmZmZkRQAAAAAAAABJA","dtype":"float64","shape":[828]}},"selected":{"id":"21576","type":"Selection"},"selection_policy":{"id":"21577","type":"UnionRenderers"}},"id":"21539","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21560","type":"Toolbar"},{"attributes":{},"id":"21574","type":"CategoricalTickFormatter"},{"attributes":{"desired_num_ticks":9},"id":"21566","type":"BasicTicker"},{"attributes":{},"id":"21577","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"21539","type":"ColumnDataSource"},"glyph":{"id":"21562","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21563","type":"Rect"},"selection_glyph":null,"view":{"id":"21565","type":"CDSView"}},"id":"21564","type":"GlyphRenderer"},{"attributes":{},"id":"21550","type":"CategoricalScale"},{"attributes":{"fill_color":{"field":"rate","transform":{"id":"21540","type":"LinearColorMapper"}},"height":{"units":"data","value":1},"line_color":{"value":null},"width":{"units":"data","value":1},"x":{"field":"Year"},"y":{"field":"Month"}},"id":"21562","type":"Rect"},{"attributes":{},"id":"21572","type":"CategoricalTickFormatter"},{"attributes":{"format":"%d%%"},"id":"21567","type":"PrintfTickFormatter"},{"attributes":{},"id":"21548","type":"CategoricalScale"},{"attributes":{"color_mapper":{"id":"21540","type":"LinearColorMapper"},"formatter":{"id":"21567","type":"PrintfTickFormatter"},"location":[0,0],"ticker":{"id":"21566","type":"BasicTicker"}},"id":"21568","type":"ColorBar"},{"attributes":{},"id":"21553","type":"CategoricalTicker"},{"attributes":{},"id":"21557","type":"CategoricalTicker"},{"attributes":{},"id":"21576","type":"Selection"},{"attributes":{"text":"US Unemployment 1948\\u20142016"},"id":"21542","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"21574","type":"CategoricalTickFormatter"},"major_label_orientation":1.0,"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"ticker":{"id":"21553","type":"CategoricalTicker"}},"id":"21552","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"]},"id":"21544","type":"FactorRange"},{"attributes":{"dimension":1,"ticker":{"id":"21557","type":"CategoricalTicker"}},"id":"21559","type":"Grid"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"21572","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"ticker":{"id":"21557","type":"CategoricalTicker"}},"id":"21556","type":"CategoricalAxis"}],"root_ids":["21541"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"436eb712-3584-4bc1-b773-7e3c0ab90686","roots":{"21541":"24670b23-21f4-442f-aabd-6482d450f892"}}];
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