/**
 * Created by lvwei on 2017/2/18.
 */
(function(ng) {
  "use strict";
  ng.module('app.services')
    .factory('msgService', msgService);

  msgService.$inject = [];

  function msgService() {
    var service = {
      errorMsg: errorMsg, //根据返回码获取错误提示信息
      codeDefine: codeDefine, //返回码配置的提示信息
      msgHintType: msgHintType, //代码对应的提示类型
      handleFirm: handleFirm, //根据调用的接口做相应的业务提示
      httpReturnCode: {
        success: [
          1000, 
          1001, //用户未进行身份认证
          2018, //用户不存在
          20002, //用户已存在
          20003, //微信未关注
        ]
      }
    };
    return service;
    /**
     * 根据返回码获取错误提示信息, 返回('')空为不提示信息, 返回 undefined 为没有返回码指定的信息
     * */
    function errorMsg(code) {
      return (service.codeDefine())[code];
    }
    //返回码配置的提示信息
    function codeDefine() {
      return {
        //http 状态码
        // '0': '请求无法完成, 请稍后再试',
        '-1': '请求超时, 请稍后再试',
        '-2001': '账号或密码错误, 登录失败',
        '401': '请登录',
        '404': '您访问的页面不存在',
        '500': '服务器繁忙, 请稍后再试',
        '520': '请求无法完成',
        '521': '无效商品已清除',
        '522': '无效商品已清除',
        //接口返回的状态码
        '999999': '系统耍任性了，请稍后再试',
        '9999': '服务器繁忙, 请稍后再试',
        '1003': '系统逛街去了',
        '1004': '系统逛街去了',
        '1005': '服务器繁忙, 请稍后再试',
        '1010': '系统离家出走了',
        '1011': '请填写收货地址',
        '2001': '服务器繁忙, 请稍后再试',
        '2002': '记录不存在',
        '2003': '记录已存在',
        '2004': '%s状态错误',
        '2005': '服务器繁忙, 请稍后再试',
        '2006': '图片数据超过限制',
        '2007': '%s状态错误',
        '2008': '系统逛街去了',
        '2009': '系统逛街去了',
        '2010': '密码错误',
        '2011': '验证码错误或已过期, 请重新获取验证码',
        '2012': '短信发送失败, 请明日再试',
        '2013': '',
        '2014': '',
        '2015': '请登录',
        '2016': '登录超时, 请重新登录',
        '2017': '权限错误, 操作失败',
        '2018': '',
        '2019': '购物车商品数量达到上限, 请先删除购物车部分商品后再添加',
        '2020': '服务器繁忙, 请稍后再试',
        '2021': '图片不存在',
        '2022': '商品库存不足',
        '2025': '',
        '3000': '',
        '3001': '',
        '3002': '',
        '3003': '',
        '4002': '',
        '4003': '',
        '4001': '',
        '4005': '',
        '4006': '',
        '4007': '',
        '4009': '',
        '5001': '',
        '5002': '',
        '5003': '暂时无法提交订单，请稍后再试',
        '5004': '暂时无法使用订单功能，请稍后再试',
        '5005': '暂时无法结算订单，请稍后再试',
        '5011': '订单金额超过上限，请分开下单',
        '5012': '订单商品信息错误',
        '5013': '积分已变更',
        '5014': '积分已变更',
        '5015': '账户积分不足',
        '5016': '订单信息错误',
        '5017': '收货地址信息错误',
        '5018': '收货地址信息错误',
        '5019': '提交订单失败',
        '5020': '提交订单失败',
        '5021': '收货地址保存失败',
        '5022': '提交订单失败',
        '5023': '订单库存状态错误',
        '5024': '商品库存不足',
        '5025': '订单商品错误',
        '5026': '订单状态已更新，请刷新',
        '5027': '订单信息错误',
        '5028': '订单信息错误',
        '5029': '订单信息错误',
        '5030': '创建订单失败',
        '5050': '订单已支付',
        '5051': '请选择支付方式',
        '5052': '暂无退款',
        '5053': '该订单暂未支付',
        '5054': '订单支付单存在多条',
        '5055': '订单支付失败，请重新支付',
        '5056': '申请数量超过可退数量，请修改',
        '5057': '信息保存失败，请重新提交',
        '5058': '信息保存失败，请重新提交',
        '5059': '订单售后信息错误',
        '5060': '退货物流信息错误',
        '5061': '请填写售后申请信息',
        '5062': '售后信息错误',
        '5063': '子订单状态错误',
        '5065': '申请金额错误，请确认申请金额',
        '5066': '订单中含有商品售后中',
        '5067': '售后单不属于该订单',
        '5068': '备注内容过长',
        '5069': '退款单号错误',
        '5070': '子订单不允许删除', //这个码问下情况
        '5071': '取消出库，请重新出库',
        '5072': '订单信息错误',
        '5073': '备注字数过多',
        '5074': '拆单出错',
        '5075': '订单确认后赠送积分失败',
        '5076': '请勿重复操作',
        '5078': '商品已下架',
        '5079': '优惠券已失效',
        '5080': '您使用了特殊优惠，此商品不能退换货哦',
        '5081': '请在包裹签收后确认订单哦',
        '6000': '报关功能已关闭，暂无法报关',
        '6001': '支付单报关失败',
        '6002': '微信报关业务类型不匹配',
        '7000': '优惠券已发放结束', // 用于优惠券已发放结束提示
        '7003': '领取已达到上限',
        '7010': '商品已下架',
        '7013': '',
        '7014': '您已使用该类券,无法再次领取',
        '9005': '返利申请一天只操作一次',
        '20002': '',
        '19004': '姓名与身份证不一致，可能会导致您的商品无法正常清关，请重新认证',
        '-3': '信息记录为空',
        '-2': '信息已存在，请勿重复提交',
        //自定义状态码
        //购物车
        'CART_INVALID_GOODS_CLEARED': '无效商品已清除成功',
        'CART_REDUCE_LIMIT': '商品数量不可再减',
        'CART_ADD_LIMIT': '库存不足，不能再增加了',
        'CART_AMOUNT_MAXIMUM': '订单金额超过上限，请分开下单',
        'SELECT_SKU_PLEASE': '请选择规格',
        'SUCCESS_ADD_GOODS_TO_CART': '已经成功加入购物车',
        //订单列表, 详情
        'CANCEL_FAIL_WHILE_DELIVED': '商品已出库，取消订单失败',
        'BUYAGAIN_FAIL_WHEN_GOODS_INVALID': '订单商品已失效',
        //收银台
        'PAYMENT_FAILE': '支付失败',
        'INCORRECT_OP': '操作失败, 请重新尝试',
        'SEND_CODE_SUCCESS': '验证码已发送',
        'CODE_ERROR': '验证码错误,请重新验证',
        // 'PASSWD_ERROR' : '密码格式错误',
        'PASSWD_ERROR': '请输入6-16位密码',
        'PASSWD_NULL': '请输入密码',
        'CODE_NULL': '请输入短信验证码',
        'PHONE_ERROR': '请输入11位正确的手机号',
        'PHONE_NULL': '请输入手机号码',
        'IDCARD_ERROR': '请输入正确的身份证号码',
        'IDCARD_NULL': '请填写收货人身份证号码哦~',
        'COLLECT_SUCCESS': '收藏成功',
        'COLLECT_CANNEL': '取消收藏',
        'COLLECT_ADD_REMOVE': '移入收藏夹成功',
        'DEFAULT_ADDRESS': '默认地址不可删除，请先切换默认地址',
        'DATA_NULL': '数据不能为空',
        'CONTACT_US': '请关注公众号后台留言或下载APP',
        'SAVE_SUCCESS': '保存成功',
        'ZIPCODE_ERROR': '邮编格式错误',
        'ADDRESS_ERROR': '地址格式错误',
        'NO_MORE': '没有更多了~', // 适用于上拉加载数据提示信息
        // 激活码，适用于各种活动激活码信息提示，激活码类型由%s匹配
        'ACTIVE_CODE_NULL': '%s激活码不能为空',
        'ACTIVE_CODE_EXPIRED': '该%s激活码已失效',
        'ACTIVE_CODE_NO_EXIST': '%s激活码不存在',
        'ACTIVE_CODE_SUCCESS': '领取成功',
        'PRODUCT_ERROR': '哎呦，商品信息异常了',
        // 搜索提示文案
        'SEARCH_KEY_NULL': '请输入搜索词',

        'REGEXP_ERROR': '校验失败',
        // 'REGEXP_MATCH_NULL': '%s不能为空',  // 匹配空值提示信息
        'BANKCARD_ERROR': '银行卡号格式错误',
        'BANKCARD_NULL': '银行卡号不能为空',
        'BANKSELECT_NULL': '请选择所属银行',
        'USERNAME_ERROR': '姓名格式错误',
        'USERNAME_NULL': '姓名不能为空',
        'BANK_EXIST': '银行卡已添加',
        'BUYERID_NULL': '请填写身份证号码哦~',
        'BUYERID_ERROR': '请输入正确的身份证号码',
        'BUYERNAME_NULL': '请填写姓名哦~',
        'BUYERNAME_ERROR': '订购人姓名证格式错误',

        'SERVICESN_NULL': '查看的售后单不存在, 请返回重新尝试',
        'HELP_SUCCESS': '助力成功',
        'LOGIN_SUCCESS': '登录成功',
      };
    }
    /**
     * 代码对应的提示类型 (0或无为黑框提示, 1为弹框提示)
     * */
    function msgHintType() {
      return {
        '9999': '',
        '1003': '',
        '1004': '',
        '1005': '',
        '1010': '',
        '1011': '',
        '2001': '',
        '2002': '',
        '2003': 1,
        '2004': 1,
        '2005': '',
        '2006': '',
        '2007': 1,
        '2008': '',
        '2009': '',
        '2010': '',
        '2011': '',
        '2012': '',
        '2013': '',
        '2014': '',
        '2015': '',
        '2016': '',
        '2017': '',
        '2018': '',
        '2019': 1,
        '2020': '',
        '2021': '',
        '3000': '',
        '3001': '',
        '3002': '',
        '3003': '',
        '4002': '',
        '4003': '',
        '4001': '',
        '4005': '',
        '4006': '',
        '4007': '',
        '4009': '',
        '5001': '',
        '5002': '',
        '5003': 1,
        '5004': 1,
        '5005': 1,
        '5011': 1,
        '5012': 1,
        '5013': 1,
        '5014': 1,
        '5015': '',
        '5016': 1,
        '5017': '',
        '5018': 1,
        '5019': '',
        '5020': '',
        '5021': '',
        '5022': '',
        '5023': '',
        '5024': 1,
        '5025': 1,
        '5026': 1,
        '5027': '',
        '5028': '',
        '5029': '',
        '5030': '',
        '5050': '',
        '5051': '',
        '5052': '',
        '5053': '',
        '5054': 1,
        '5055': 1,
        '5056': 1,
        '5057': 1,
        '5058': 1,
        '5059': '',
        '5060': '',
        '5061': '',
        '5062': '',
        '5063': '',
        '5065': 1,
        '5066': 1,
        '5067': 1,
        '5068': '',
        '5069': '',
        '5070': '',
        '5071': 1,
        '5072': 1,
        '5073': 1,
        '5074': 1,
        '5075': '',
        '5076': '',
        '5078': '',
        '5079': 1,
        '5080': '',
        '6000': 1,
        '6001': '',
        '6002': 1,
        '7003': '',
        '7013': '',
        '7014': '',
        '-3': 1,
        '-2': 1,
        '19004': 1
      };
    }

    //根据调用的接口做相应的业务提示
    function handleFirm() {
      return {
        //下单
        'createVirtualOrder': '订单', //取得订单中 sku 商品允许申请退货退款的信息的接口
        //售后
        'getServiceOrderList': '', //取得订单中 sku 商品允许申请退货退款的信息的接口
        'changeGoodsCount': '售后', //修改售后申请的商品数量, 返回退款金额
        'applySkuRefund': '', //取得售后申请页面信息 - 首次申请
        'submitApplySkuRefund': '售后', //首次提交售后申请
        'reApplySkuRefund': '', //申请驳回的申请修改, 原售后订单信息获取
        'reSubmitApplySkuRefund': '售后', //修改申请后, 重新提交售后申请
        'submitSkuRefund': '', //申请审核成功后, 提交售后物流信息
        'getOrderServiceProgress': '', //取得售后信息详情 [售后跟踪], 参数: serviceSn
        'getOrderServiceRefundProgress': '', //取得售后退款进程 [退款去向]
        'getOrderServiceConsults': '', //取得售后退款进程 [退款去向]
        'getLogisticsInfo': '' //取得售后退款进程 [退款去向]
      };
    }

    function requestCode() {


    }

  }
})(angular);