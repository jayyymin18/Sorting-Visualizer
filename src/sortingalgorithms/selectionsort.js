export function selectionSort(array){
let pos;
const animations=[];
let i, j;
  for( i= 0;i<array.length-1;i++)
   {  pos=i;
      for( j=i+1;j<array.length;j++){
          if(array[j]<array[pos]){
            pos=j;
          }
      }
      swap(i,pos, array);
      animations.push([i,pos,array[i],array[pos]]);
      animations.push([i,pos,array[i],array[pos]]);
      animations.push([i,pos,array[i],array[pos]]);
   }
return animations;
}

function swap(i,j, array){
       let temp= array[i];
       array[i]=array[j];
       array[j]= temp;
}