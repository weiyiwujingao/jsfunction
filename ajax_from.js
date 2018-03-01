//ajax 批量数据一次性提交运用，后台获取和分开
$.ajax({
    type: "POST",//方法类型
    dataType: "json",//预期服务器返回的数据类型
    url: url ,//url
    data: $('#form').serialize(),//form 表单id值也可以用其他方式获取对象
    success: function (result) {
        if (result.Code == 200) {
            alert("SUCCESS");
        }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown)
    {
        alert('网络繁忙,请稍后再试! 错误码:'+textStatus);
    }
});
