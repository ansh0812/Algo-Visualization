function Bubble_Sort() {
    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(bars[j], random_array[j], "yellow"); //Color update

            if (random_array[j] > random_array[j + 1]) {
                div_update(bars[j], random_array[j], "red"); //Color update
                div_update(bars[j + 1], random_array[j + 1], "red"); //Color update

                var temp = random_array[j];
                random_array[j] = random_array[j + 1];
                random_array[j + 1] = temp;

                div_update(bars[j], random_array[j], "red"); //Height update
                div_update(bars[j + 1], random_array[j + 1], "red"); //Height update
            }
            div_update(bars[j], random_array[j], "black"); //Color updat
        }
        div_update(bars[j], random_array[j], "blue"); //Color update
    }
<<<<<<< HEAD
    div_update(bars[0], random_array[0], "blue"); //Color update

    //enable_buttons();
=======
    div_updates(bars[0], random_array[0], "aqua"); //Color update

 

>>>>>>> 35536204c83452d536e45e1bcdbc1540dbd1f74f
}