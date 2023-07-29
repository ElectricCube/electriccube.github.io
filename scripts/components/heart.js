const Heart = {
    props: {
        name: String,
        type: String
    },
    computed: {
        heartImage() {
            return 'images/hearts/' + this.type + '.webp'
        }
    },
    template: `
        <div class="col-12 col-md-4 mb-3">
            <div class="bg-black border h-100 p-3 pt-0 shadow">
                <div class="d-flex flex-column">
                    <div class="align-self-center">
                        <img :src="heartImage" class="heart-icon">
                    </div>
                    <div class="diablo-font fs-5 fw-bold text-center">{{ name }}</div>
                </div>
            </div>
        </div>
    `
};
