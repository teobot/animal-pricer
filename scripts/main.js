var main = new Vue({
    el: '#main_container',
    data: {
        fishData: fishData
    },
    created() {
        this.fishData = this.fishData.sort((a, b) => (a.fish_name > b.fish_name) ? 1 : -1);
    },
    methods: {
        priceWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        filter_by_price: function() {
            // Filter By Price
            console.log("filter by price");
            main.fishData = main.fishData.sort((a, b) => (a.fish_price > b.fish_price) ? 1 : -1);
        },
        filter_by_name: function() {
            main.fishData = main.fishData.sort((a, b) => (a.fish_name > b.fish_name) ? 1 : -1);
        },
    }
})