// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  if (Math.abs(z - x) < Math.abs(z - y)) {
    return "Cat A";
  } else if (Math.abs(z - x) > Math.abs(z - y)) {
    return "Cat B";
  } else if (Math.abs(z - x) === Math.abs(z - x)) {
    return "Mouse C";
  }

}



/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    // Write your code here
let height = 1;
for(let i = 0; i<n; i++){
    
    if(i % 2 == 0){
        height *= 2
    }else{
        height +=1;
    }
}
return height;


}