'use strict';

function printReceipt(inputs) {
    let content = loadAllItems();
    let result = {};
    let pos = '';
    let total = 0;
    inputs.forEach(function (val) {
      if(!result[val]){ //变量只能放在方括号里面
        result[val] = 1;
      }
      else
        result[val]++ ;
    });
    let kinds = Object.keys(result);
    for(let j =0;j<content.length;j++){
      for(let i= 0;i<kinds.length;i++){     //for-in遍历键（key)，for-of遍历值（value） 数组的键是下标
        if(kinds[i]=== content[j].barcode){
          pos += `名称：${content[j].name}，数量：${ result[kinds[i]]}${content[j].unit }，单价：${content[j].price.toFixed(2)}(元)，小计：${(result[kinds[i]]*content[j].price).toFixed(2)}(元)\n`;
          total +=content[j].price * result[kinds[i]];
        }
        }
      }
      console.log(
`***<没钱赚商店>收据***
${pos}----------------------
总计：${total.toFixed(2)}(元)
**********************`);
    }

