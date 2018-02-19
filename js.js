//поиск числа в масиве
function searchNumb(a, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === a){
            return true;
        }
    }
    return false;
};
searchNumb(3,[1,2,3,4]); //true
searchNumb(3,[1,2,4]); //false

//поиск строки в масиве
function searchString(string, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === string){
            return console.log(string);
        }
    }
    return false;
};
searchString('string', [1,2,3,'string',5,6]); // returt 'string'
searchString('strin', [1,2,3,'string',5,6]); // returt false

//сортировка бульбашкой
function sort(arr) {
    var n = arr.length;
    //проход по масиву
    for (var i = 0; i < n-1; i++)
     {
         //обменять соседние элементы, если не упорядочены
         for (var j = 0; j < n-1-i; j++)
         { 
             //проверить елементы j и j+1
             if (arr[j+1] < arr[j]){
                 //если след. елемент больше предыдущего, то меняем местами их
                 var t = arr[j+1];
                 arr[j+1] = arr[j];
                 arr[j] = t;
             }
         }
     }                     
    return arr;
};
sort([1,6,3,2,5,4]);
