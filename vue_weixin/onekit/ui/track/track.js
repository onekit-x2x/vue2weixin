const vttToJson = require("./vtt-to-json")
var fileSystemManager = wx.getFileSystemManager();

Component({
    options: {
        virtualHost: true
      },
    /**
     * 组件的属性列表
     */
    properties: {
src:{type:String,value:""}
    },


lifetimes:{
    attached(){
        this.loadZimu(this.properties.src)
    }
},
    /**
     * 组件的方法列表
     */
    methods: {

        loadZimu: function (path) {
            this.downloadZimu(path);
        },
        readZimu: function (tempFilePath) {
            var that = this;
            let fileStr = fileSystemManager.readFileSync(tempFilePath, 'utf-8')
            vttToJson(fileStr)
            .then((result) => { 
                const vtt = [];
                for(const item of result){
                    vtt.push([item,item.start, item.end,item.part, item.works]);
                }
                 that.triggerEvent("vtt",{vtt},{ bubbles: true, composed: true });
            });
        },
        downloadZimu: function (path) {
            var that = this;
            wx.downloadFile({
                "url": path ,
                success: function (e) {
                    that.readZimu(e.tempFilePath);
                }
            })
        }
    }
})
