import lodash from 'lodash';

const obj = {
  foo: {
    key: 'foo',
    name: '父'
  },
  bar: {
    key: 'bar',
    name: '爸'
  }
}

console.log(Object.values(obj)) //best

console.log(Object.entries(obj).map(v => v[1]))

// deprecated
console.log(lodash.toArray(obj))

console.log(lodash.toPairs(obj).map(v => v[1]))

console.log(lodash.values(obj))

