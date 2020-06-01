var main = new Vue({
    el: '#main_container',
    data: {
        fishData: fishData,
        insectData: insectData,
        fish_visible: true,
        insects_visible: false,
        animal_change_button_color: "success",
        animal_change_button_text: "Insects",
        animal_price_sorting_type: "desc",
        animal_name_sorting_type: "asc"
    },
    mounted() {
        window.addEventListener('load', () => {
            main.filter_by_name();
        });
    },
    methods: {
        change_animal_filter: function() {
            if (main.fish_visible) {
                // Fish is visible so remove it and display insects
                main.fish_visible = false;
                main.insects_visible = true;
                main.animal_change_button_color = "primary";
                main.animal_change_button_text = "Fish";
            } else {
                // Insects are visible so display fish
                main.fish_visible = true;
                main.insects_visible = false;
                main.animal_change_button_color = "success";
                main.animal_change_button_text = "Insects";
            }
        },
        filter_by_price: function() {
            // Filter By Price
            if (main.animal_price_sorting_type == "desc") {
                main.animal_price_sorting_type = "asc";
            } else {
                main.animal_price_sorting_type = "desc";
            }
            main.fishData = main.sort_array(main.fishData, "fish_price", main.animal_price_sorting_type);
            main.insectData = main.sort_array(main.insectData, "insect_price", main.animal_price_sorting_type);
        },
        filter_by_name: function() {
            // Filter By Name
            if (main.animal_name_sorting_type == "desc") {
                main.animal_name_sorting_type = "asc";
            } else {
                main.animal_name_sorting_type = "desc";
            }

            main.fishData = main.sort_array(main.fishData, "fish_name", main.animal_name_sorting_type);
            main.insectData = main.sort_array(main.insectData, "insect_name", main.animal_name_sorting_type);
        },
        priceWithCommas: function(x) {
            // Add commas to price
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        sort_array: function(array, element, order) {
            // Sort a array using element and dynamicsort
            return array.sort(main.dynamicsort(element, order))
        },
        dynamicsort: function(property, order) {
            var sort_order = 1;
            if (order === "desc") {
                sort_order = -1;
            }
            return function(a, b) {
                // a should come before b in the sorted order
                if (a[property] < b[property]) {
                    return -1 * sort_order;
                    // a should come after b in the sorted order
                } else if (a[property] > b[property]) {
                    return 1 * sort_order;
                    // a and b are the same
                } else {
                    return 0 * sort_order;
                }
            }
        }
    }
})