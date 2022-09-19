var cloudcleare = {
  chunk:function chunk(array,size) {
    var re = []
    var arr = []
    for (var i = 0; i < array.length; i++) {
        if (arr.length == size) {
            re.push(arr)
            var arr = []
        }
        arr.push(array[i])
    }
    re.push(arr)
    return re
  },

  compact:function compact (array) {
    let result = []
    for (var i = 0; i <array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  fill:function fill (array, value, start=0, end=array.length) {
    for (var i = start;i <end;i++) {
      array[i] = value
    }
    return array
  },

  drop:function drop(array, n=1) {
    if (n >= array.length){
      return []
    }
    for (var i = 0; i <n; i++) {
      array.shift()
    }
    return array
  },

  flatten:function flatten (array) {
    var result = []
    for (var i = 0; i <array.length;i ++) {
      if (!Array.isArray(array[i])){
        result.push(array[i])
      }else {
        for (var j =0; j<array[i].length;j++){
          result.push(array[i][j])
        }
      }
    }
    return result
  },

  flattenDeep:function flattenDeep(array) {
    var result = []
    if (!Array.isArray(array)){
      result.push(array)
    }else {
      for (var i =0; i<array.length;i++) {
        result = result.concat(flattenDeep(array[i]))
      }
    }
    return result
  },

  head:function head (array) {
    return array[0]
  },

  indexOf:function indexOf (array, value, fromIndex=0) {
    if (fromIndex < 0) {
      for (var j = array.length -1; j >= 0;j --) {
        if (value == array[j]) {
          return j
        }
      }
    }

    for (var i =fromIndex; i <array.length;i++){
      if (value == array[i]) {
        return i
      }
    }
    return -1
  },

  lastIndexOf:function lastIndexOf(array, value, fromIndex=array.length-1) {
    for (var i = fromIndex;i>=0;i--) {
      if (array[i] == value){
        return i
      }
    }
    return -1
  },

  initial:function initial(array) {
    var result =[]
    for (var i = 0;i < array.length -1;i++){
      result.push(array[i])
    }
    return result
  },

  join:function join (array, separator=',') {
    var str = ''
    for (var i = 0; i <array.length; i ++) {
      if (i == array.length -1) {
        str = str + array[i]
        return str
      }
      str = str + array[i] + separator
    }
  },

  last:function last (array) {
    return array[array.length-1]
  },

  pull:function pull(array, ...values) {
    var result = []
    for (var i = 0;i < array.length; i++) {
      if (!(values.includes(array))) {
        result.push(array[i])
      }
    }
    return result
  },

  reverse:function reverse(array){
    var result = []
    for (var i = array.length-1; i >=0; i--) {
      result.push(array[i])
    }
    return result
  },

  size:function size(collection) {
    if (Array.isArray(collection) ||typeof collection === 'string' ) {
      return collection.length
    }else if (typeof collection == 'object') {
      var arr = Object.keys(collection)
      return arr.length
    }
  },

  sample:function sample(collection) {
    var collectionIndex = Math.floor(Math.random()*collection.length)
    return collection[collectionIndex]
  },

  isUndefined:function isUndefined(value) {
    if (typeof (value) == 'undefined'){
      return true
    }
    return false
  },

  isNull:function isNull(value) {
    if (!value && typeof value !== 'undefined' && value !=0){
      return true
    }
    return false
  },

  isNil:function isNil(value) {
    if (value ==undefined){
      return true
    }
    return false
  },

  max:function max(array) {
    var max =-Infinity
    if(array.length < 1) {
      return undefined
    }
    for (var i =0;i < array.length;i++) {
      if(array[i] > max ) {
        max = array[i]
      }
    }
    return max
  },

  max:function min(array) {
    var min =Infinity
    if(array.length < 1) {
      return undefined
    }
    for (var i =0;i < array.length;i++) {
      if(array[i] < min ) {
        min = array[i]
      }
    }
    return min
  },


}
