const mockArticles=require("./mock-articles");
module.exports=function(app){
app.get("/articles",function(request,response){
    response.send(mockArticles);
})
app.get("/articles/:key",function(request,response){
    response.send(
        mockArticles.filter(article=>article.key===request.params.key)[0]);
})
};