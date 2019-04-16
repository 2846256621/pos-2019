'use strict';

function printReceipt(inputs) {
  let pos = '';
  let total = 0;
  for(let i=0;i<inputs.length;i++){
    pos += '名称：'+inputs[i].name+'，数量：' + inputs[i].count+inputs[i].unit+ '，单价：'+inputs[i].price.toFixed(2)+'(元)，小计：'+(inputs[i].count*inputs[i].price).toFixed(2)+'(元)\n';
    total += inputs[i].price*inputs[i].count;
  }
  console.log('***<没钱赚商店>收据***\n' +pos+ '----------------------\n'+'总计：'+total.toFixed(2)+'(元)\n' +
    '**********************')
}
