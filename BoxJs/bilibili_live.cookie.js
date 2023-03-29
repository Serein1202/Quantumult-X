#添加前请检查MITM中是否存在*.bilibili.com主机名
# 189及以前版本
# ^https:\/\/(www|live)\.bilibili\.com\/?.? url script-response-body https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js
# 190及以后版本
^https:\/\/(www|live)\.bilibili\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js