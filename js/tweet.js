

   $.getJSON("http://search.twitter.com/search.json?rpp=100&callback=?&q=%23#fortkochi"
        ,function(data){
        for(var i=0;i<data.results.length;i++){


             document.getElemntById("hashresult").innerHTML += data.results[i].text;    
        }
 });





