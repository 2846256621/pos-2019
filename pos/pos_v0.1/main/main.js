'use strict';

function printReceipt(inputs) {
  let kindsContainer ={};
  inputs.forEach(function (item) {
    //开始创建每个名字的数组，如果开始没有这个名字，则返回数组。如果有了这个名字，则继续往该名字中铺设相同的数据
    // kindsContainer[kindsName[i]][0].price //每个名字中存有对象，可以访问第一个对象的单价，单位等
    kindsContainer[item.name] = kindsContainer[item.name] || [];
    kindsContainer[item.name].push(item);
  });
  let kindsName = Object.keys(kindsContainer); //得到种类
  let count = []; //每个种类的数量
  for(let i=0;i<kindsName.length;i++){
    count[i] = 0;
  }
  for(let j=0;j<inputs.length;j++){
    for(let i=0;i<kindsName.length;i++){
      if(kindsName[i] === inputs[j].name ){
        count[i]++;
      }
    }
  }
  let pos = '';
  let total = 0;
  for(let i=0;i<kindsName.length && i<count.length && i<inputs.length;i++){
    pos += '名称：'+kindsName[i]+'，数量：' + count[i] + kindsContainer[kindsName[i]][0].unit+ '，单价：'+kindsContainer[kindsName[i]][0].price.toFixed(2)+'(元)，小计：'+(count[i]*kindsContainer[kindsName[i]][0].price).toFixed(2)+'(元)\n';
    total += kindsContainer[kindsName[i]][0].price * count[i];
  }
  console.log('***<没钱赚商店>收据***\n' +pos+ '----------------------\n'+'总计：'+total.toFixed(2)+'(元)\n' +
    '**********************')
}
