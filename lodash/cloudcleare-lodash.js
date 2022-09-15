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
    if(arr.length < size){
      re.push(arr)
    }
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


}
