let arr = [{
  num: '1',
  num2: '20',
  brr: [{ a: 0, b: 'PDF' }, { a: 0, b: 'PDF' }]
},
{
  num: '1',
  num2: '20',
  brr: [{ a: 1, b: 'PDF' }, { a: 1, b: 'PDF' }]
},
]
// let itemIndex = ''
arr.forEach(el => {
  // el.brr.forEach(item => {
  //   // console.log(item);
  //   if (item.a !== 0) itemIndex = item.a
  // })
  // const itemIndex = el.brr.find((item) => { item.a !== 0 })
  // console.log(el.brr);
  let item = el.brr.findIndex(item => item.a !== 0)
  console.log(item);
  // console.log(itemIndex);
})
