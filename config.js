window.config={
    // 主题默认颜色
    theme:true,
    
    // 后端网址配置
    hosturl:"https://api.ikantan.com/",
    title:"KANTAN-VPN",
    title1:"海外でも日本のビデオやテレビは日本と同じだ",
    title2:"Kantanは、海外から簡単に日本のVPNに接続することができます",

    //   下载配置
    down:[
        {
            name:"Windows",
            title:"Windows用ダウンロード",
            down:[
                {title:"Clash下载",href:"https://github.com/Fndroid/clash_for_windows_pkg/releases/download/0.20.27/Clash.for.Windows-0.20.27-win.7z"},
                {title:"V2ray下载",href:"https://github.com/v2ray/v2ray-core/releases/download/v4.28.2/v2ray-windows-64.zip"},
                {title:"Netch下载",href:"https://github.com/netchx/netch/releases/download/1.9.7/Netch.7z"}
            ]
        },
        {
            name:"Android",
            title:"Android用ダウンロード",
            down:[
                {title:"Clash下载",href:"https://github.com/Kr328/ClashForAndroid/releases/download/v2.5.12/cfa-2.5.12-foss-arm64-v8a-release.apk"},
                {title:"V2rayNG下载",href:"https://github.com/2dust/v2rayNG/releases/download/1.8.5/v2rayNG_1.8.5.apk"}
            ]
        },
        {
            name:"iOS",
            title:"iOS用ダウンロード",
            down:[
                {title:"Shadowrocket",href:"https://apps.apple.com/us/app/shadowrocket/id932747118?l=zh"},
                {title:"Quantumult X",href:"https://apps.apple.com/us/app/quantumult-x/id1443988620"}
            ]
        }
    ],




    //    流媒体配置
    streammedia:[
        {title:'NETFLIX',img:"./icon/netflix.png"},
        {title:'Twitter',img:"./icon/twitter.png"},
        {title:'FaceBook',img:"./icon/facebook.png"},
        {title:'Instagram',img:"./icon/instagram.png"},
        {title:'TikTok',img:"./icon/tiktok.png"},
        {title:'Reddit',img:"./icon/reddit.png"},
        {title:'Linkedin',img:"./icon/linkedin.png"},
        {title:'Pornhub',img:"./icon/pornhub.svg"},
    ],

    // 套餐配置
    taocan:[
        {
            title:"VPNサブスクリプションを購入する",
            money:10,
            cent:["ABEMA、NHK+、Tver、GYAO、アマプラ、Netflix、DAZNなど、海外ではIP制限により視聴できない日本の動画サービスも、KANTAN VPNを利用すれば、自宅の大画面テレビやスマートフォンで日本と同じように視聴できる！"]
        }
    ]
}
