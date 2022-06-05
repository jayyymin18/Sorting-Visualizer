function swap(items=[], leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items=[], left, right, animations=[]) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            animations.push([i,j, items[i], items[j]]);
            animations.push([i,j, items[i], items[j]]);
            animations.push([i,j, items[i], items[j]]);
            i++;
            j--;
        }
    }
    return i;
}

export function quickSort(items=[], left, right, animations=[]) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right, animations);
        }
    }
    return items;
}