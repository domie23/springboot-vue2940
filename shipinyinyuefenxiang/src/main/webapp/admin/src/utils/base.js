const base = {
    get() {
        return {
            url : "http://localhost:8080/shipinyinyuefenxiang/",
            name: "shipinyinyuefenxiang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shipinyinyuefenxiang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "音乐电影分享系统"
        } 
    }
}
export default base
