'use strict';

function printReceipt(inputs) {
  //统计种类及数量
  let count = 0;
  let countObj = {};
  inputs.forEach(val =>{
    count = 0;
    if(val.indexOf('-') !== -1){
      count = parseInt(val.slice(val.indexOf('-')+1));
      val = val.slice(0,val.indexOf('-'));
    }
    else count = 1;
    if(!countObj[val]){
      countObj[val] = count;
    }
    else countObj[val] += count;
  });
  //找到购买的商品 放入content数组
  let kinds = Item.all();
  let content = [];
  let codes = Object.keys(countObj);
  kinds.forEach((item) =>{
    codes.forEach((val) =>{
      if(item.barcode === val){
        content.push(item);
      }
    })
  });
  //找到打折商品 将数量减一
  let sale = Promotion.all();
  let pos = '';
  let money = 0;
  let saveMoney = 0;
  let save = 0;
  for(let i =0;i<content.length;i++) {
    if (isSaved(codes[i], sale)) {
      saveMoney = content[i].price * (countObj[codes[i]] - 1);
      save += content[i].price * 1;
    }
    else {
      saveMoney = content[i].price * (countObj[codes[i]]);
    }
    pos += `名称：${content[i].name}，数量：${ countObj[codes[i]]}${content[i].unit }，单价：${content[i].price.toFixed(2)}(元)，小计：${saveMoney.toFixed(2)}(元)\n`;
    money += content[i].price * countObj[codes[i]];
  }

  const date=new Date();
  let year=date.getFullYear();//当前年份
  let month=date.getMonth()+1;//当前月份，因为获取的是从0~11的值，所以月份我们需要加上1
  let day=date.getDate();//当前号数，这里我们需要注意的是和获取星期的区分，不要搞混了
  let hour=date.getHours();//24小时制0~23，如果需要强制保留两位，则我们需要判断，其值小于0，我们就用拼接字符串的方式来拼接---'0'+hour;
  let minute=date.getMinutes();//分钟数0~59，强制保留两位方法和小时相同；
  let second = date.getSeconds();//秒数0~59，强制保留两位和小时分钟相同
  let formattedDateString;
  formattedDateString = `${year}年${month.toString().padStart(2,'0')}月${day}日 ${hour}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
  // console.log(formattedDateString);


  console.log(
    `***<没钱赚商店>收据***
打印时间：${formattedDateString}
----------------------
${pos}----------------------
总计：${(money - save).toFixed(2)}(元)
节省：${save.toFixed(2)}(元)
**********************`);



}
function isSaved(barcode,sale) {
  for(let j=0;j<sale[0].barcodes.length;j++){
    if(barcode === sale[0].barcodes[j]){
      return true;
    }
  }
  return false;
}
