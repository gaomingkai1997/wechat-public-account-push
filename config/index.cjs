/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ov6G45i7FCLsESBFvETTPZ2IeZrg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dS_Vh7-ZJ3cMQJPYCMwAGK2q9tl9-pHXaQq1XQ5_0VI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
          //type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '自己', year: '1997', date: '12-03',
        },
        {
          type: '*生日', name: '最爱的老公', year: '1997', date: '01-30',
        },
        {
          type: '生日', name: '呆妈妈', year: '1974', date: '09-28',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-07-11' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-05-01' },
        
        { keyword: 'certificate_day', date: '2021-03-22' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ov6G45i8KdAYgiyoRmLfyzqRjFHw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dS_Vh7-ZJ3cMQJPYCMwAGK2q9tl9-pHXaQq1XQ5_0VI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
          //type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '自己', year: '1997', date: '12-03',
        },
        {
          type: '*生日', name: '最爱的老公', year: '1997', date: '01-30',
        },
        {
          type: '生日', name: '呆妈妈', year: '1974', date: '09-28',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-07-11' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-05-01' },
        
        { keyword: 'certificate_day', date: '2021-03-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'CqxpY4opewG6bdtdZT5jzE-toitVYJT0E68WUWhW_iE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ov6G45i8KdAYgiyoRmLfyzqRjFHw',
    }
  ],

}

module.exports = USER_CONFIG

