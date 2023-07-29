const Skill = {
    props: {
        image: String,
        name: String
    },
    template: `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="bg-black border h-100 p-3 shadow">
                <div class="d-flex flex-column">
                    <div class="align-self-center mb-3">
                        <img :src="'images/skills/' + image" class="skill-icon">
                    </div>
                    <div class="diablo-font fs-5 fw-bold text-center">{{ name }}</div>
                </div>
            </div>
        </div>
    `
};
