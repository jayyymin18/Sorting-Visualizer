export function MergeSort(array) {
  const animations=[];
  if(array.length<=1) return array;
  const auxarray= array.slice();
  helper(array, 0, array.length-1, auxarray, animations);
  return animations;
}

function helper(
  mainArray,
  startIdx,
  endIdx,
  auxarray,
  animations
) {
  
  if(startIdx === endIdx) return;
  const midIdx= Math.floor((startIdx+endIdx)/2);
  helper(auxarray, startIdx, midIdx, mainArray, animations );
  helper(auxarray, midIdx+1, endIdx, mainArray, animations); 
  merge(mainArray, startIdx, midIdx, endIdx,auxarray,animations);

}

function merge(
  mainArray,
  startIdx,
  midIdx,
  endIdx,
  auxarray,
  animations
){
  let k= startIdx;
  let i= startIdx;
  let j= midIdx+1;
  while(i<=midIdx&&j<=endIdx)
  {   animations.push([i,j]);
      animations.push([i,j]);
     if(auxarray[i]<=auxarray[j]){
       animations.push([k,auxarray[i]]);
       mainArray[k++]= auxarray[i++];
     }
     else{
       animations.push([k, auxarray[j]]);
       mainArray[k++]= auxarray[j++];
     }
    }

while(i<=midIdx){
  animations.push([i,i]);
  animations.push([i,i]);
  animations.push([k,auxarray[i]]);
  mainArray[k++]= auxarray[i++];
}

while( j<=endIdx){
  animations.push([j,j]);
  animations.push([j,j]);
  animations.push([k, auxarray[j]]);
  mainArray[k++]= auxarray[j++];
}

}


