// [task_local]
//  # 微博超话自动签到
// 0 0 0 * * * * weibo_checkin.js

//  [rewrite_local]
//  # 微博超话页面跳转
//  ^https://weibo\.com/p/aj/general/button.*$ url script-request-header weibo_checkin.js

// [mitm]
// # 微博域名
// hostname = weibo.com

// [script]
// 微博超话自动签到脚本
// 请确保您已登录微博账号并加入了需要签到的超话

const checkinUrl = 'http://i.huati.weibo.com/aj/super/checkin&texta=签到&textb=已签到&status=0&id=1008080cea6d151d54dd9b254e33c4161cd4e5';
const checkinRequest = {
    url: checkinUrl,
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1',
        'Referer': 'https://weibo.com/p/1008080cea6d151d54dd9b254e33c4161cd4e5?k=%E5%85%89%E9%81%87%E5%9B%BD%E9%99%85%E6%9C%8D&forward_name=pageinfo&_from_=topic_forward',
        'Cookie': $prefs.valueForKey('SINAGLOBAL=3247267858895.5396.1669358181799; UOR=,,login.sina.com.cn; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WFKcFnEWPi.-ITRvlZ-ca465JpX5KMhUgL.Fo27Sh27SKefe052dJLoIEzfeFH81FHFSCHWBbH8SC-RSCHF1CH8SE-4BC-RS28jIgSL; ALF=1681980879; SSOLoginState=1679388880; SCF=AtpY8PRL9c80OFMHg4hLCt1GeuLspbOCRPWIJkIV2Hc7il--QGPFSf59-FypL5h1_QjS0WePNsRfDDWQKbHOsZo.; SUB=_2A25JHQCBDeRhGedO71MR9S3JyDyIHXVqa3VJrDV8PUNbmtAGLXLhkW9Nm4uHz0tKLmubMlONUPueDL4oMfoms88T; XSRF-TOKEN=07QeLsVcPmNwHVcrXzNwXIBo; UPSTREAM-V-WEIBO-COM=b09171a17b2b5a470c42e2f713edace0; _s_tentry=weibo.com; Apache=2447826710706.582.1679388982410; ULV=1679388982484:9:4:1:2447826710706.582.1679388982410:1678760722716; wb_view_log_1041053530=1920*10801; WBPSESS=W2BsATxTv5DVSgi9PYuuB9kP_j-OYQkZSlvlNFaZNyZL9pTylOfL3ZlaLVaP_MyPwlJlI0nP8Vd5hkgnMMnkTZkd-Ctw2uRdKEOQ8W-aMYBIlyTMFAL-LxT_hWXLM1Jk4BMeQZSgg9Aqi0V2JsurWw==; PC_TOKEN=c2a448fcb4; webim_unReadCount=%7B%22time%22%3A1679391792349%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A2%7D')
    }
};

$task.fetch(checkinRequest).then(response => {
    const data = JSON.parse(response.body);
    if (data.code === '100000' && data.msg === '') {
        $notify('微博超话签到成功');
    } else {
        $notify('微博超话签到失败', data.msg);
    }
}, reason => {
    $notify('微博超话签到失败', reason.error);
});