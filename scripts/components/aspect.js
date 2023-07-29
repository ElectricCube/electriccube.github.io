const Aspect = {
    props: {
        codex: Boolean,
        dungeon: String,
        name: String,
        slot: String,
        unique: Boolean
    },
    template: `
        <div class="col-12 col-md-4 mb-3">
            <div class="bg-black border h-100 p-3 shadow">
                <div class="d-flex flex-column">
                    <div v-if="unique">
                        <div class="diablo-font fs-5 fw-bold text-center text-unique">{{ name }}</div>
                        <div class="border-bottom diablo-font fs-5 fw-bold mb-3 pb-3 text-center">{{ slot }}</div>
                        <div>Random drop in world tier 3 or above.</div>
                    </div>
                    <div v-else>
                        <div class="diablo-font fs-5 fw-bold text-center text-orange">{{ name }}</div>
                        <div class="border-bottom diablo-font fs-5 fw-bold mb-3 pb-3 text-center">{{ slot }}</div>

                        <div v-if="codex">
                            Aspect unlocked by completing <span class="fw-bold">{{ dungeon }}</span> dungeon.
                        </div>
                        <div v-else>Aspect must be extracted from an existing item.</div>
                    </div>
                </div>
            </div>
        </div>
    `
};
