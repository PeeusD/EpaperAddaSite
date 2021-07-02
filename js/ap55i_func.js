
/* API for downloading */


function  dwnld_func(start, end){
   sessionStorage.clear();
   sessionStorage.setItem("s", start);
   sessionStorage.setItem("e", end);
}

async function api_func(srt, end){
  
  
    const api_url = "https://apiv2xxx.herokuapp.com/api";
  
    const response = await fetch(api_url);
  
    var content = await response.json();
    var j = 1;
    for(var i= srt ; i<= end; i++){
      document.getElementById( 'tbl' ).innerHTML += "<tr ><td>"+
       j++ + "\t"+
      
      content['data'][i]['date']+
      "<a class='cnt' href='"+content['data'][i]['link']+
      "'> <i class='fa fa-download'></i></a></td></tr>";
 
    }
   
  }


  api_func(sessionStorage.s, sessionStorage.e);