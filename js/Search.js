function AjaxCall(url, data, successEvent, failureEvent) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successEvent,
        error: failureEvent,
        async: true
    });
}

function onFailure(msg) {
    console.log(msg);
}

function filterByCategory(item) {
    if (item.Category == "sponser") {
        return true;
    }
    return false;
}

function OnlyNonSpecialcharacters(e) { // Alphanumeric only
    var k = e.key;
    re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    var isSplChar = re.test(k);
    if (isSplChar)
        return false;
    else
        return true;
}


function getParameterByName(name, url) {
    try {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        // return results[2];
        return decodeURI(results[2].replace(/\+/g, " "));
    } catch (e) { return ''; }
}


var searchText="";
var searchId="";
var Indexname ="sbi"
var ServiceName ="sbicard";

var version = detectIE();

function detectIE(){
var ua = window.navigator.userAgent;
 var edge = ua.indexOf('Edge/');
	 if (edge > 0) {
	   // Edge (IE 12+) => return version number
	   return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	 }	
	 
	 return 0;
}

if(version > 20){
    var appInsights = window.appInsights || function (config) { function r(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f; s.src = config.url || "//az416426.vo.msecnd.net/scripts/b/ai.2.min.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(s); try { t.cookie = u.cookie } catch (h) { } for (t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; i.length;)r("track" + i.pop()); return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) { var s = f && f(config, r, u, e, o); return s !== !0 && t["_" + i](config, r, u, e, o), s }), t }
    ({
        instrumentationKey: "f9fd6fec-4bf1-4c76-9722-d3ecdbf68d38"
    });
window.appInsights = appInsights;
}

function getPopularSearch(PopISFaq){
    var POPurl="";
/*if(PopISFaq){
    POPurl ="https://sbicardssearch.azurewebsites.net/PopularSearch/faq"+Indexname+"PopularSearch.json";
}else{
    POPurl ="https://sbicardssearch.azurewebsites.net/PopularSearch/"+Indexname+"PopularSearch.json";
}*/
//var POPurl ="https://sbicardssearch.azurewebsites.net/PopularSearch/sbiuat2PopularSearch.json";
var POPurl ="https://sbicardssearch.azurewebsites.net/popularsearch.json";
var popularsearch = [];
$.ajax({
headers: {
'Content-Type': 'application/json',
"Accept": 'application/json',
'Access-Control-Allow-Origin':'*'
},
type:"GET",
url:POPurl,
dataType:'json',
success: function(data) {
var listpopular ="";
var listpopularhtml = "";
$.each(data.Popularsearch, function(i, f) {
listpopularhtml = listpopularhtml+ "<li rel='" + f.count + "'>" + "<a class='' href='" +searchUrl+search_url+ "?q="+f.value+ "'>" + f.value + "</a>" + "</li>"

});

$('#userdata ul').html(listpopularhtml);

setTimeout(function () {
$("#userdata ul li").sort(sort_li).appendTo('#userdata ul');

var i = 1;
$("#userdata ul li").each(function () {
$(this).addClass('tag' + i);
i++;
});

var parent = $("#userdata ul");
var divs = parent.children();
while (divs.length) {
parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}


},100)
},
error: function() {
console.log('Error loading PopularSearch');
}
});



function sort_li(a, b){
return (parseInt($(b).attr('rel'))) > (parseInt($(a).attr('rel'))) ? 1 : -1;
}
 

}

$(document).ready(function(){
    var PopISFaq =true;
    if(window.location.href.indexOf('faq-search.page')> -1){
        var queryParameter = getParameterByName('q');
        getSearchResultTestFaq(queryParameter);
        
        getPopularSearch(PopISFaq); 
            $(".filter-data").remove();      
        
    }
    else if(window.location.href.indexOf('search.page')> -1){
        var queryParameter = getParameterByName('q');
        PopISFaq =false;
        getSearchResultTest(queryParameter);
        getPopularSearch(PopISFaq);
        personalData(queryParameter);
        corporatData(queryParameter);
    }
    
});


var seachCounter1 =5;
function personalData(text) {
var personalsearch = [];
var index = 'https://sbicard.search.windows.net/indexes/'+Indexname+'/docs?';
var SearchParams = "api-version=2019-05-06&search=" + text + "&$select=url,title,description,category,subcategory&scoringProfile=Weightage&$count=true&facet=category&facet=subcategory&highlight=title,description&highlightPreTag=<b>&highlightPostTag=</b>&$filter=category eq 'personal'&$top=10000";
var params = encodeURI(SearchParams);
var theUrl = index + params;
var corporatesearch = [];
$.ajax({
            method: "GET",
            url: theUrl,
            headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*" },
            contentType: "application/json",
            success: function (data) {
    if(data["@odata.count"] == 0){
    
                    $(".cat-personal").remove();
            } 

            $(".inner-search").each(function(index, el) {
                var listPersonal = "";
                var listPersonalhtml = "";
                var subCat = $(this).find("ul").data("cat");
                $.each(data.value, function(i, f) {
                    if (f.subcategory == subCat) {
                            var fidesc=f.description;       
                            var fiTitle =f.title;       
                            if(f["@search.highlights"] != undefined){     
                                if (f["@search.highlights"].title != undefined && f["@search.highlights"].title != null) {      
                                     fiTitle = f["@search.highlights"].title[0];       
                                }       
                                if (f["@search.highlights"].description != undefined && f["@search.highlights"].description != null) {      
                                    fidesc = f["@search.highlights"].description[0];      
                                }       
                            }
                        //console.log(f.subcategory);
                        listPersonalhtml = listPersonalhtml + "<li class='" + f.subcategory + "'>" + "<h3>" + "<a class='' href='" + f.url + "' rel='" + f.category + "'>" + fiTitle + "</a>" + "</h3>" + "<p>" + fidesc + "</p>" + "</li>"
                    }
                });
                listPersonalhtml = listPersonalhtml + "<div class='" + "loadmore" + "'>" + "<a class='" + "load-more" + "'" + "href='" + "#" + "'>Load More</a></div>";
                $(this).find("ul.data_loading").html(listPersonalhtml);
                var accorName = " on " + text + " (" + $(this).find("ul li").length + ")";
                $(this).find(".heading-txt .lenthcount").text(accorName)

                //if($(this).find("ul li").length == 0){
                //$(this).hide();
                //}
                //}, 100);
                $(this).find("ul li").each(function(a) {
                    a + 1 > seachCounter && $(this).addClass("hide")
                }),
                0 == $(this).find("ul li.hide").length && $(this).find(".load-more").addClass("hide")
                console.log("length" + $(this).find("ul li").length)
                if($(this).find("ul li").length<1 && $(this).hasClass("filter-data") && $(this).hasClass("cat-personal")){
                    $(this).remove();
            } 
            });
}
});
}


function corporatData(text) {
var index = 'https://sbicard.search.windows.net/indexes/'+Indexname+'/docs?';
var SearchParams = "api-version=2019-05-06&search=" + text + "&$select=url,title,description,category,subcategory&scoringProfile=Weightage&$count=true&facet=category&facet=subcategory&highlight=title,description&highlightPreTag=<b>&highlightPostTag=</b>&$filter=category eq 'corporate'&$top=10000";
var params = encodeURI(SearchParams);
var theUrl = index + params;
var corporatesearch = [];
$.ajax({
            method: "GET",
            url: theUrl,
            headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*" },
            contentType: "application/json",
            success: function (data) {
if(data["@odata.count"] == 0){
    
                    $(".cat-corporate").remove();
            } 
$(".inner-search").each(function(index, el) {
var listCorporate = "";
var listCorporatehtml = "";
var subCat = $(this).find("ul").data("cat");
$.each(data.value, function(i, f) {
if (f.subcategory == subCat) {
        var fidesc=f.description;       
        var fiTitle =f.title;
        if(f["@search.highlights"] != undefined){     
            if (f["@search.highlights"].title != undefined && f["@search.highlights"].title != null) {      
                 fiTitle = f["@search.highlights"].title[0];       
            }       
            if (f["@search.highlights"].description != undefined && f["@search.highlights"].description != null) {      
                fidesc = f["@search.highlights"].description[0];      
            }       
        }

// console.log(f.subcategory);
listCorporatehtml = listCorporatehtml + "<li class='" + f.subcategory + "'>" + "<h3>" + "<a class='' href='" + f.url + "' rel='" + f.category + "'>" + fiTitle + "</a>" + "</h3>" + "<p>" + fidesc + "</p>" + "</li>"
}
});

listCorporatehtml = listCorporatehtml + "<div class='" + "loadmore" + "'>" + "<a class='" + "load-more" + "'" + "href='" + "#" + "'>Load More</a></div>"
$(this).find("ul.data_loading1").html(listCorporatehtml);
var accorName = " on "+text +" (" + $(this).find("ul li").length +")";

$(this).find(".heading-txt .lenthcount").text(accorName);

//if($(this).find("ul li").length == 0){
//$(this).hide();
//}
//}, 100);
$(this).find("ul li").each(function(a) {
a + 1 > seachCounter && $(this).addClass("hide")
}), 0 == $(this).find("ul li.hide").length && $(this).find(".load-more").addClass("hide")
if($(this).find("ul li").length<1 && $(this).hasClass("filter-data") && $(this).hasClass("cat-corporate")){
                    $(this).remove();
            } 

});

},
error: function() {

}

});
}


 


var seachCounter=5;

function loadMore(a) {
    var b = 1;
    $(a).find("ul li").each(function() {
        $(this).hasClass("hide") && seachCounter > b && ($(this).removeClass("hide"), b++), 0 == $(a).find("ul li.hide").length && $(a).find(".load-more").addClass("hide")
    })
}

$(document).delegate( ".load-more", "click",function(e){
      e.preventDefault();
     var parent=$(this).parents(".inner-search");
     
     loadMore(parent);

  });
function getAutoCompleteResult(text) {

    var searchText = text;
    if (searchText.length >= 1) {    //UAT
        var index = 'https://sbicard.search.windows.net/indexes/'+Indexname+'/docs/autocomplete?';
         var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&suggesterName=sgsbi&searchFields=title,content,keywords&scoringProfile=Weightage&$top=15&$count=true";
         var params = encodeURI(SearchParams);
         var AutoCompleteUri = index + params;
        
        $(function () {
            $("#search").autocomplete({
                source: function (request, response) {
                $.ajax({
                    type: "GET",
                    url: AutoCompleteUri,
                    dataType: "json",
                    headers: {
                        "api-key": "4E301B4CE63994DE77C6D3180F76E103",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },              
                        success: function (data) {
                            if (data.value && data.value.length > 0) {
                                //response(data.value.map(x => x["queryPlusText"]));
                                 response($.map(data.value, function (item) {
                                    return item.queryPlusText;
                                }));
                                
                            }
                        },
                        complete:function(){

                        $("body").find("div.overlay-loader").remove();
                        $("body").scrollTop;

                }
                    });
                },
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left-23 bottom+10"
                }
            });

             $("#big-search").autocomplete({
                source: function (request, response) {
                $.ajax({
                    type: "GET",
                    url: AutoCompleteUri,
                    dataType: "json",
                    headers: {
                        "api-key": "4E301B4CE63994DE77C6D3180F76E103",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },              
                        success: function (data) {
                            if (data.value && data.value.length > 0) {
                                //response(data.value.map(x => x["queryPlusText"]));
                                  response($.map(data.value, function (item) {
                                    return item.queryPlusText;
                                }));
                            }
                        },
                        complete:function(){

                            $("body").find("div.overlay-loader").remove();
                            $("body").scrollTop;

                        }
                    });
                },  
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left-23 bottom+10"
                }
            });
        });
    }
}

function getAutoCompleteResultFaq(text) {

    var searchText = text;
    if (searchText.length >= 1) {    //UAT
        var index = 'https://sbicard.search.windows.net/indexes/'+Indexname+'/docs/autocomplete?';
         var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&suggesterName=sgsbi&searchFields=title,content,keywords&scoringProfile=Weightage&$top=15&$count=true&$filter=category eq 'faq'";
         var params = encodeURI(SearchParams);
         var AutoCompleteUri = index + params;
    
        $(function () {

             $("#big-searchFaq").autocomplete({
                source: function (request, response) {
                $.ajax({
                    type: "GET",
                    url: AutoCompleteUri,
                    dataType: "json",
                    headers: {
                        "api-key": "4E301B4CE63994DE77C6D3180F76E103",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },              
                        success: function (data) {
                            if (data.value && data.value.length > 0) {
                                  response($.map(data.value, function (item) {
                                    return item.queryPlusText;
                                }));
                            }
                        },
                        complete:function(){

                            $("body").find("div.overlay-loader").remove();
                            $("body").scrollTop;

                        }
                    });
                },  
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left-23 bottom+10"
                }
            });
        });
    }
}


function getSearchResultTestFaq(text) {
var html = '';
    searchText = text;
    //if (searchText.length >= 1) {    //UAT
       
        var index = 'https://sbicard.search.windows.net/indexes/'+Indexname+'/docs?';
        var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&$select=url,title,description&scoringProfile=Weightage&$count=true&$top=10000&$filter=category eq 'faq'";
        var params = encodeURI(SearchParams);
        var theUrl = index + params;
        $.ajax({
            method: "GET",
            url: theUrl,
            headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*", "x-ms-azs-return-searchid": "true", "Access-Control-Expose-Headers": "x-ms-azs-searchid"},
            contentType: "application/json",
            success: function (data) {
               
                if (data.value.length > 0) {
                    var ACount =data["@odata.count"];
            var ResultCount = "All Results ("+ACount+")";
                    html = getHtmlFromJsonTest(data.value, null);
					digitalData.page.pageInfo.onsiteSearchTerm = text;
					digitalData.page.pageInfo.onsiteSearchResults = ACount.toString();
                $('.countResult').html(ResultCount);
                $('.lblResult').html(html);
                $('.SQResult').html(html);
                  
                    setTimeout(function(){ 
                            $(".SQResult").each(function(){
                                $(this).find("ul li").each(function(index,ele){
                                    if((index+1) > seachCounter){
                                        $(this).addClass("hide");
                                    }
                                });
                                if($(this).find("ul li.hide").length==0){
                                    $(this).find(".load-more").addClass("hide");
                                }
                            });
             
                     }, 1);
                }
                else {
                  digitalData.page.pageInfo.onsiteSearchTerm = text;
					digitalData.page.pageInfo.onsiteSearchResults = "zero";
                    $('.countResult').html("All Results (0)");
                    $('.inner-search').append('<ul class="content"><div class="loadmore"><a class="load-more hide" href="#">Load More</a></div></ul>');

                }
            },
            complete: function (XMLHttpRequest) {
                     searchId = XMLHttpRequest.getResponseHeader('x-ms-azs-searchid');
					 if(version > 20){
						 appInsights.trackEvent("Search", {
							SearchServiceName: "sbicard",
							SearchId: searchId,
							IndexName: Indexname,
							QueryTerms: searchText,
							ResultCount: XMLHttpRequest.responseJSON["@odata.count"],
							ScoringProfile: "Weightage",
							IsFaq: true
						});
					 }
                },
            error: function (jqxhr, textStatus, e) {
               
            }
        });
   // }
}


function getSearchResultTest(text) {
var html = '';
    searchText = text;
    if(searchText != null)  {
        //if (searchText.length >= 1) {    //UAT
           
            var index = 'https://sbicard.search.windows.net/indexes/'+Indexname+'/docs?';
            var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&$select=url,title,description&scoringProfile=Weightage&highlight=title,description&highlightPreTag=<b>&highlightPostTag=</b>&$count=true&$top=10000";
            var params = encodeURI(SearchParams);
            var theUrl = index + params;
            $.ajax({
                method: "GET",
                url: theUrl,
                headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*" , "x-ms-azs-return-searchid": "true", "Access-Control-Expose-Headers": "x-ms-azs-searchid"},
                contentType: "application/json",
                success: function (data) {

                    

                    if (data.value.length > 0) {
                        var ACount =data["@odata.count"];
                var ResultCount = "All Results ("+ACount+")";
                        html = getHtmlFromJsonTest(data.value, null);
						digitalData.page.pageInfo.onsiteSearchTerm = text;
						digitalData.page.pageInfo.onsiteSearchResults = ACount.toString();;
                    $('.countResult').html(ResultCount);
                    $('.lblResult').html(html);
                    $('.SQResult').html(html);
                
                        setTimeout(function(){ 
                                $(".SQResult").each(function(){
                                    $(this).find("ul li").each(function(index,ele){
                                        if((index+1) > seachCounter){
                                            $(this).addClass("hide");
                                        }
                                    });
                                    if($(this).find("ul li.hide").length==0){
                                        $(this).find(".load-more").addClass("hide");
                                    }
                                });
                 
                         }, 1);
                       
                    }
                    else {
                      digitalData.page.pageInfo.onsiteSearchTerm = text;
					digitalData.page.pageInfo.onsiteSearchResults = "zero";
                        $('.countResult').html("All Results (0)");
            $('.inner-search').append('<ul class="content"><div class="loadmore"><a class="load-more hide" href="#">Load More</a></div></ul>');
                    }
                },
                complete: function (XMLHttpRequest) {
                     searchId = XMLHttpRequest.getResponseHeader('x-ms-azs-searchid');
                     if(version > 20){
						 appInsights.trackEvent("Search", {
							SearchServiceName: "sbicard",
							SearchId: searchId,
							IndexName: Indexname,
							QueryTerms: searchText,
							ResultCount: XMLHttpRequest.responseJSON["@odata.count"],
							ScoringProfile: "Weightage",
							IsFaq: false
						});
					 }
                },
                error: function (jqxhr, textStatus, e) {
                   
                }
            });
        }
    //} 
}

$(document).on('keyup', '.headsearch', function(){
    var boxSize = $(this).width();
    $('.lblResult').css('width', boxSize);
});

function SearchResultsEvents() {
    var $input = $('input.rating');
    if ($input.length) {
        $input.removeClass('rating-loading').addClass('rating-loading').rating();
    }

    $("#barsearchrating").change(function (e) {
        e.preventDefault();

        var keyword = $(".headsearch1").val();
        var star = $(this).val();
        if (star != "") {
            var params = {};
            params.keyword = keyword;
            params.star = star;
            params = JSON.stringify(params);
            AjaxCall("/AxisWebService.asmx/SetSearchRating", params, function (response) {
                onSetSearchRatingSuccess(response, keyword, star);
            }, onFailure);
        }

    });


}


function getHtmlFromJsonTest(data, data1) {
    var html = "";
    var mandate = (typeof data) == 'string' ? eval('(' + data + ')') : data;

    var datapresent = false;
    if (data.length > 0)
        datapresent = true;
    if (data1 != null) { if (data1.length > 0) { datapresent = true; } }

    if (datapresent) {
        html = html + '<div class="lisearchrating" style="display:none;"><div class="dvgiverating">Give your rating</div><input id="barsearchrating" value="0" type="text" class="rating" data-min="0" data-max="5" data-step="0.5" data-size="xs" title="" /></div>';
        html = html + "<UL class='Search'>";

        $(".lblCount").text(data.length);
        for (i = 0; i < data.length; i += 1) {

            var Anchor = data[i].url;
            var ctahtml = "";
            if (data[i].CTAText != "" && data[i].CTAText != null)
                ctahtml = "<a class='lnkctalink' href='" + data[i].url + "'><em>" + data[i].title + "</em></a>";

            var iconforsearchhtml = "";
            var searchlinkclass = "";
            if (data[i].IconForSearch != "" && data[i].IconForSearch != null) {
                iconforsearchhtml = "<img class='imgiconforsearch' src='" + data[i].IconForSearch + "' />";
                searchlinkclass = "imgSearchContain";
            }

            var finaltitle = "";

            var result = data[i].title.split('|')[0].trim();
        if(data[i]["@search.highlights"] != undefined){
        if(data[i]["@search.highlights"].title != undefined && data[i]["@search.highlights"].title != null){
        result = data[i]["@search.highlights"].title[0];  
        }
        }               
            var search = $(".headsearch1").val().trim();
            var sindex = result.toLowerCase().indexOf(search.toLowerCase())
            var eindex = sindex + search.length;
            finaltitle = result;

            var searchdesc = "";
    
			if(data[i].description !=null && data[i].description != ""){    
				searchdesc = "<span class='spnsearchdesc'>" + data[i].description + "</span>";
			} 
			if(data[i]["@search.highlights"] != undefined){
				   if (data[i]["@search.highlights"].description != undefined) {
				searchdesc = "<span class='spnsearchdesc'>" + data[i]["@search.highlights"].description[0] + "</span>";
				}
			}

           // html = html + "<LI class='lisearchitem " + data[i].Category + "' ><a class='lnksearchlink " + searchlinkclass + "' href='" + Anchor + "'onclick= 'OnclickUrl()' >" + iconforsearchhtml + "" + finaltitle + "<div><label>" + searchdesc + "</label></div></a>" + ctahtml + "</LI>";
			html = html + "<LI class='lisearchitem " + data[i].Category + "' ><a class='lnksearchlink an-search-result " + searchlinkclass + "' href='" + Anchor +"' onclick= 'OnclickUrl()' data-analytics-searchPosition='"+(i+1)+"'>" + iconforsearchhtml + "" + finaltitle + "<div><label>" + searchdesc + "</label></div></a>" + ctahtml + "</LI>";
            
        }

        html= html + "<div class='loadmore'><a class='load-more' href='#'>Load More</a></div>"
        
        html = html + "</UL>";
        return html;
    }
    else { return ''; }
}

function onSetSearchRatingSuccess(response, keyword, star) {
    if (response.d == "success") {
        $(".lisearchrating").hide();
    }
}


    function searchRedirectionFaq(value,event,elment){
    var header_search_url='/en/faq-search.page';
        if($(elment).hasClass('no-global')){
                  var url=search_url;
              }else{
                  var url=header_search_url;
              }
           
                if(url.indexOf('?') > -1){
                    url += 'q='+value;  
                }else{
                   url += '?q='+value;
                }  
               event.stopPropagation(event);
                window.location.href = url;    
     }
      
     function searchRedirection(value,event,elment){
        if($(elment).hasClass('no-global')){
                  var url=search_url;
              }else{
                  var url=header_search_url;
              }
           
                if(url.indexOf('?') > -1){
                    url += 'q='+value;  
                }else{
                   url += '?q='+value;
                }  
               event.stopPropagation(event);
                window.location.href = url;    
        

      }
      
$(document).ready(function () {


    searchUrl = document.location.origin;

    $('.azureSearchResults > h4').hide();

    if ($('.headertopnav').length > 0) {
        $('.headertopnav').html($('.headertopnav').html().replace('headsearch', 'headsearch1').replace('search_butn', 'search_butn11'));

        $('.hiddensearch').html($('.hiddensearch').html().replace('headsearch', 'headsearch1').replace('search_butn', 'search_butn11'));
    }

    var searchText = getParameterByName('q');
    $('.headsearch1').val(searchText);


    if (searchText == '' || searchText == null) {

    }
    else {

    }

    $('.headsearch1, .stickyheadsearch').keypress(function (e) {
        e.stopPropagation();
        $(this).show();
        return OnlyNonSpecialcharacters(e);
    });

    $('.headsearch1').click(function (e) {
        e.stopPropagation();
        $(this).parents('.hiddensearch').show();

    });
    
    $('.headsearch1, .stickyheadsearch').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
           if(e.currentTarget.id =="search" || e.currentTarget.id =="big-search" ){
            
            var text="";
        
                if(e.currentTarget.id =="search"){
                    text = $('#search').val();
                    
                }
                else{
                    text = $('#big-search').val();  
            
                }
                var elmnt=$(this).parent().find("input[name='search']");
                delayTimer = setTimeout(function () {
                   
                
                searchRedirection(text,e,elmnt);
                    //getSearchResultTest(text,e);
            
                }, 500);            
            }
            else if(e.currentTarget.id =="searchFaq"){

                var text = $('#searchFaq').val();
                var elmnt=$(this).parent().find("input[name='searchFaq']");
                delayTimer = setTimeout(function () {
                   
                
                searchRedirectionFaq(text,e,elmnt);
                   // getSearchResultTest(text,e);
            
                }, 500);
            }
        
        
        }
        else if (e.keyCode == 40) {
            e.preventDefault();
            var index = $(this).parent().find('.lblResult ul li.selected').index();
            $(this).parent().find('.lblResult ul li.selected').removeClass('selected');
            $(this).parent().find('.lblResult ul li ').eq(index + 1).addClass('selected');
            e.stopPropagation();
            return false;
        }
        else if (e.keyCode == 38) {
            var index = $(this).parent().find('.lblResult ul li.selected').index();
            $(this).parent().find('.lblResult ul li.selected').removeClass('selected');
            $(this).parent().find('.lblResult ul li ').eq(index - 1).addClass('selected');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    $('.headsearch1, .stickyheadsearch').keyup(function (e) {
        var text = $(this).val();
        if (e.keyCode == 40 || e.keyCode == 38) {
            e.preventDefault();
        }
    else if(e.keyCode == 13){
          e.preventDefault();
           if(e.currentTarget.id =="search" || e.currentTarget.id =="big-search" ){
            
            var text="";
                if(e.currentTarget.id =="search"){
                    text = $('#search').val();
            
                }
                else{
                    text = $('#big-search').val();  
            
                }
                var elmnt=$(this).parent().find("input[name='search']");
                delayTimer = setTimeout(function () {
                   
                
                searchRedirection(text,e,elmnt);
                    //getSearchResultTest(text,e);
            
                }, 500);            
            }
            else if(e.currentTarget.id =="searchFaq"){

                var text = $('#searchFaq').val();
                var elmnt=$(this).parent().find("input[name='searchFaq']");
                delayTimer = setTimeout(function () {
                   
                
                searchRedirectionFaq(text,e,elmnt);
                   // getSearchResultTest(text,e);
            
                }, 500);
            }
        
        }
        else{
            var loaderHtml='<div class="overlay-loader"></div>';
            
            if($(this)[0].id =="search" || $(this)[0].id =="big-search" )
            {
            $(this).after(loaderHtml); 
                getAutoCompleteResult(text);
                //getSearchResultTest(text);
            }else if($(this)[0].id =="searchFaq")
            {
                getAutoCompleteResultFaq(text);
                //getSearchResultTest(text);
            }
                $('.lblResult').css('visibility', 'visible');
                $('.blackoverlay').show();

                if ($(".lblResult_new").length > 0) {
                    $('body').addClass('searchActive01');
                }
            
        }
        
    
    });
	
	
	  function OnclickUrl(){
		if(version > 20){
         appInsights.trackEvent("SearchClicked", {
            SearchServiceName: ServiceName,
            SearchId: searchId,
            IndexName: BaseIndexName,
            QueryTerms: searchText,
            ClickedDocId: documentid,
            Rank: documentposition,
            ClickedDocUrl:Anchor,
            ResultCount: doccount, 
            ScoringProfile: "Weightage",
            IsFaq: true
        });
		}
        //console.log(ServiceName,searchId,BaseIndexName,searchText,documentid,documentposition,Anchor,doccount)
    }

    

    
    $(".js-colseBtn").click(function (e) {
        e.preventDefault();
        $('body').removeClass('searchActive01');
    });

    $('.search_butn11').click(function () {
        if ($.trim($(this).prev().val()) == "") {
            $(this).prev().focus();
        } else {

           

        }
        return false;
    });

    $(".lnkSmartSearch").click(function (e) {

        $(".headsearch1").val("");

    });

});
