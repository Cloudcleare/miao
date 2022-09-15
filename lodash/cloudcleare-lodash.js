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
          result[i].push(array[j])
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
      for (var i =0; i<arr.length;i++) {
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

    for (var i = 0; i <array.length;i++){
      if (value == array[j]) {
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
    for (var i = 0;i < array.length -2;i++){
      result.push(array[i])
    }
    return result
  },


}
