'use strict';
function printReceipt(inputs) {
  //统计种类及数量
  let a = _.groupBy(inputs, (val) => val.slice(0, 10));
  let countObj = {};
  for (let key in a) {
    let count = 0;
    a[key].forEach(val => {
      if (val.includes('-')) {
        count += parseInt(val.slice(val.indexOf('-') + 1));
      }
      else {
        count++;
      }
    });
    countObj[key] = count;
  }
  //找到购买的商品 放入content数组
  let kinds = loadAllItems();
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
  let sale = loadPromotions();
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
  console.log(
    `***<没钱赚商店>收据***
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
