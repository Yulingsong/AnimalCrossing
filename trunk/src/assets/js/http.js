/**
 * Created by apple on 2018/7/10.
 */
var API_ROOT= config.api;
var Rxports = {


  /**
   * 网络post请求可选择是否带参
   * @param {*} url    请求地址
   * @param {*} data   请求数据
   * @param {*} success 正确的回调方法
   * @param {*} error   错误的回调方法
   */
  post: function (url, data, success, error) {
    $.ajax({
      type: 'post',
      url: url,
      data: data,
      dataType: "json",
      success: function (result) {
        console.log(JSON.parse(JSON.stringify(result)));
        success(result)
      },
      error: function erryFunction(err) {
        console.log(err);
        //网络请求错误
        error(err);
      }
    });
  },
  jsonpost: function (url, data, success, error) {
    $.ajax({
      type: 'post',
      contentType: "application/json;charset=UTF-8",
      url: url,
      data: JSON.stringify(data),
      dataType: "json",
      success: function (result) {
        console.log(result);
        success(result)
      },
      error: function erryFunction(err) {
        console.log(err);
        //网络请求错误
        error(err);
      }
    });
  },
  get: function (url, success, error) {
    $.ajax({
      type: 'get',
      url: url,
      dataType: "JSON",
      success: function (result) {
        //无常规错误，根绝data数据做具体的业务判断显示
        success(result)
      },
      error: function erryFunction(err) {
        //网络请求错误
        error(err);
      }
    });
  }
};
export default Rxports;
