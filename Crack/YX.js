
/**************************************
脚本功能：知乎 盐故事+知识+书刊+测评
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：20230211
问题反馈：QQ+
食用方法: 配合伟人其他脚本一块食用
测试版本: 8.51.0
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：https://t.me/WeiRenOvO
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


20230210
8.51.0
******************************/
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', yvqab = '__0xf4edc',  __0xf4edc=['SlQvwoDCilxCw7bCn3/CsG4b','wqsrwo3CicKZG8KSwocx','w4ZzwqzCgmXDr8OQScO0FxfCp8OwwqI=','L8KyecKLw68=','SjVaImg=','KcKfeMKMEA==','w5LCpjDDqQo=','5YqG6Zq654uG5pyB5Y6w776TBsKo5L+I5a+i5p6o5by+56qB','w4RlwqfCj2HDsMOK','w5/Cl8KZw6nCucKp','VMKDw6zDncOTw6vCh3Uhw5cQY8K1X8OIG0g/w7bDsz95w5JhwoJSw4bDnFbCk8Kkf8KcbiNEAsOQwpEyw5k/LMOcdVBrw6o=','w74rI8KIwojCoxDDosKqw70='];(function(_0x231fd0,_0x4f680a){var _0x5b4826=function(_0x4a3682){while(--_0x4a3682){_0x231fd0['push'](_0x231fd0['shift']());}};_0x5b4826(++_0x4f680a);}(__0xf4edc,0xd4));var _0x243b=function(_0x2bbd6d,_0x362c31){_0x2bbd6d=_0x2bbd6d-0x0;var _0x3aa8a0=__0xf4edc[_0x2bbd6d];if(_0x243b['initialized']===undefined){(function(){var _0x358f98=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3e495b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x358f98['atob']||(_0x358f98['atob']=function(_0x40d22a){var _0x2aae9e=String(_0x40d22a)['replace'](/=+$/,'');for(var _0x580422=0x0,_0x15b749,_0x23208f,_0x5869cf=0x0,_0x1c4f05='';_0x23208f=_0x2aae9e['charAt'](_0x5869cf++);~_0x23208f&&(_0x15b749=_0x580422%0x4?_0x15b749*0x40+_0x23208f:_0x23208f,_0x580422++%0x4)?_0x1c4f05+=String['fromCharCode'](0xff&_0x15b749>>(-0x2*_0x580422&0x6)):0x0){_0x23208f=_0x3e495b['indexOf'](_0x23208f);}return _0x1c4f05;});}());var _0x3f4d73=function(_0x30e874,_0x3bc49b){var _0x2241d3=[],_0x3966cf=0x0,_0x5af524,_0x264341='',_0x5d06cc='';_0x30e874=atob(_0x30e874);for(var _0x5a72ae=0x0,_0x202517=_0x30e874['length'];_0x5a72ae<_0x202517;_0x5a72ae++){_0x5d06cc+='%'+('00'+_0x30e874['charCodeAt'](_0x5a72ae)['toString'](0x10))['slice'](-0x2);}_0x30e874=decodeURIComponent(_0x5d06cc);for(var _0x3c4013=0x0;_0x3c4013<0x100;_0x3c4013++){_0x2241d3[_0x3c4013]=_0x3c4013;}for(_0x3c4013=0x0;_0x3c4013<0x100;_0x3c4013++){_0x3966cf=(_0x3966cf+_0x2241d3[_0x3c4013]+_0x3bc49b['charCodeAt'](_0x3c4013%_0x3bc49b['length']))%0x100;_0x5af524=_0x2241d3[_0x3c4013];_0x2241d3[_0x3c4013]=_0x2241d3[_0x3966cf];_0x2241d3[_0x3966cf]=_0x5af524;}_0x3c4013=0x0;_0x3966cf=0x0;for(var _0x1f2b4e=0x0;_0x1f2b4e<_0x30e874['length'];_0x1f2b4e++){_0x3c4013=(_0x3c4013+0x1)%0x100;_0x3966cf=(_0x3966cf+_0x2241d3[_0x3c4013])%0x100;_0x5af524=_0x2241d3[_0x3c4013];_0x2241d3[_0x3c4013]=_0x2241d3[_0x3966cf];_0x2241d3[_0x3966cf]=_0x5af524;_0x264341+=String['fromCharCode'](_0x30e874['charCodeAt'](_0x1f2b4e)^_0x2241d3[(_0x2241d3[_0x3c4013]+_0x2241d3[_0x3966cf])%0x100]);}return _0x264341;};_0x243b['rc4']=_0x3f4d73;_0x243b['data']={};_0x243b['initialized']=!![];}var _0x550c83=_0x243b['data'][_0x2bbd6d];if(_0x550c83===undefined){if(_0x243b['once']===undefined){_0x243b['once']=!![];}_0x3aa8a0=_0x243b['rc4'](_0x3aa8a0,_0x362c31);_0x243b['data'][_0x2bbd6d]=_0x3aa8a0;}else{_0x3aa8a0=_0x550c83;}return _0x3aa8a0;};var modifiedHeaders=$request[_0x243b('0x0','#6z0')];modifiedHeaders[_0x243b('0x1','u9da')]='ff_supports_webp=1;KLBRSID=dc02df4a8178e8c4dfd0a3c8cbd8c726|1676014897|1676014859;_xsrf=lGqYWZyQrbDLekVWlgX1UCBMVJXUg59k;z_c0=2|1:0|10:1676010079|4:z_c0|92:Mi4xZERrWVF3QUFBQUFBSUZoYXQ1Sk9GZ3NBQUFCZ0FsVk5YbThOWkFDb1hSb21zR0trSmtHU213X1dTTGtVOGVDT213|67ca6d13af73afc9e54d6871719c88ce843dd02a33ce5da4b2e679aad8a281cb;capsion_ticket=2|1:0|10:1676010078|14:capsion_ticket|44:YTBiZjhlYTdhZWQwNDEwYjgyMTUyMDQzNmQ1Yzg4ZTI=|40c149184dc718460c2c30baa0cdc8e4c68b959dd3ed5f82ad00476192db9834;q_c0=2|1:0|10:1676010079|4:q_c0|92:Mi4xZERrWVF3QUFBQUFBSUZoYXQ1Sk9GZ3NBQUFCZ0FsVk5YbThOWkFDb1hSb21zR0trSmtHU213X1dTTGtVOGVDT213|d841e114519895e166bed37971e3841a656454270c759c9eed4fefd07532b705;_zap=e2713f07-a4a6-4917-b8e4-032357a648ae;d_c0=ACBYWreSThZLBe63ViIOdq5A69jNpKdO5rI=|1676014856;zst_82=2.0AMDXS_mkThYLAAAASwUAADIuMAz15WMAAAAASd1ehcz8MFByyTE-Wna4kveHQH0=';modifiedHeaders['X-MS-ID']=_0x243b('0x2','@*1G');modifiedHeaders[_0x243b('0x3','0qJ&')]='ZhihuHybrid\x20osee2unifiedRelease/12722\x20osee2unifiedReleaseVersion/8.50.0\x20Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_3_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148';modifiedHeaders[_0x243b('0x4','vDEA')]='Bearer\x202.1dDkYQwAAAAAAIFhat5JOFgsAAABgAlVNXm8NZACoXRomsGKkJkGSmw_WSLkU8eCOmw';$done({'headers':modifiedHeaders});;(function(_0x2da3a8,_0x3db354,_0x9ca2e2){var _0x1f42f3={'QXnLt':'ert','lUmnj':function _0x2966a0(_0x4b4c0a,_0x9abc82){return _0x4b4c0a!==_0x9abc82;},'HUWhf':_0x243b('0x5','7SUO'),'pasTd':function _0x29b89e(_0x1518e8,_0x212b79){return _0x1518e8===_0x212b79;},'OJLBc':_0x243b('0x6','#6z0'),'Updpf':function _0x38642e(_0x1d1124,_0x15ccf7){return _0x1d1124+_0x15ccf7;},'VYUoN':'版本号，js会定期弹窗，还请支持我们的工作'};_0x9ca2e2='al';try{_0x9ca2e2+=_0x1f42f3[_0x243b('0x7','@vnH')];_0x3db354=encode_version;if(!(_0x1f42f3['lUmnj'](typeof _0x3db354,_0x1f42f3[_0x243b('0x8','@Dlq')])&&_0x1f42f3[_0x243b('0x9','!sO*')](_0x3db354,_0x1f42f3['OJLBc']))){_0x2da3a8[_0x9ca2e2](_0x1f42f3['Updpf']('删除',_0x1f42f3[_0x243b('0xa','DrmE')]));}}catch(_0x7ef45f){_0x2da3a8[_0x9ca2e2](_0x243b('0xb',')KK!'));}}(window));;encode_version = 'jsjiami.com.v5';
