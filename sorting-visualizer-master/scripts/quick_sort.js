function partition(l, r) {
    var pivot = arrHeight[r]; // Choosing the rightmost element as the pivot
    div_update(arr[r], arrHeight[r], "pink"); // Highlight pivot with pink
    var i = l - 1; // Index of smaller element

    for (var j = l; j <= r - 1; j++) {
        div_update(arr[j], arrHeight[j], "pink"); // Highlight current element with pink

        if (arrHeight[j] < pivot) {
            i++;
            // Swap arrHeight[i] and arrHeight[j]
            var temp = arrHeight[i];
            arrHeight[i] = arrHeight[j];
            arrHeight[j] = temp;

            div_update(arr[i], arrHeight[i], "green"); // Visualize swap with green
            div_update(arr[j], arrHeight[j], "green");
        } else {
            div_update(arr[j], arrHeight[j], "green"); // Visualize without swap in green
        }
    }

    // Swap arrHeight[i + 1] with pivot (arrHeight[r])
    var temp = arrHeight[i + 1];
    arrHeight[i + 1] = arrHeight[r];
    arrHeight[r] = temp;

    div_update(arr[i + 1], arrHeight[i + 1], "green"); // Pivot to its correct position in green
    div_update(arr[r], arrHeight[r], "green");

    return i + 1; // Return the partitioning index
}

function quick_sort(l, r) {
    if (l < r) {
        var pi = partition(l, r); // Partition the array

        quick_sort(l, pi - 1); // Recursively sort the left part
        quick_sort(pi + 1, r); // Recursively sort the right part
    }

    if (l === 0 && r === arrHeight.length - 1) {
        // Once the sorting is complete, make all bars green
        for (var i = 0; i <= r; i++) {
            div_update(arr[i], arrHeight[i], "green");
        }
    }
}
