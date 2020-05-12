var main = new Vue({
    el: '#main_container',
    data: {
        fishData: fishData
    },
    created() {
        this.fishData = this.fishData.sort(this.dynamicsort("fish_name", "asc"))
    },
    methods: {
        priceWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        filter_by_price: function() {
            // Filter By Price
            main.fishData.sort(main.dynamicsort("fish_price", "asc"))

        },
        filter_by_name: function() {
            // Filter By Name
            main.fishData.sort(main.dynamicsort("fish_name", "asc"))
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