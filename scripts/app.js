Vue.createApp({
    components: {
        Aspect,
        Heart,
        Skill
    },
    template: `
        <div>
            <div class="mb-5">
                <div class="d-flex flex-column pt-3">
                    <h1>Flurry Rogue</h1>
                    <p class="text-muted">Last Updated: July 29th 2023</p>
                </div>

                <p>This build is a mobile, melee oriented take of the class that's an excellent starter and beginner friendly. Flurry is a fast hitting melee skill that we spam often, even with Combo Points, while applying various crowd control effects. This build is great for all around play in all types of content and easy to use due to its high sustain, making this build quite tough, more-so than the other Rogue builds.</p>
            </div>

            <div class="mb-5">
                <h3>Skills</h3>

                <div class="row">
                    <Skill
                        image="shadow_step.jpg"
                        name="Shadow Step"
                    />
                    <Skill
                        image="dash.jpg"
                        name="Dash"
                    />
                    <Skill
                        image="shadow_imbuement.jpg"
                        name="Shadow Imbuement"
                    />
                    <Skill
                        image="poison_imbuement.jpg"
                        name="Poison Imbuement"
                    />
                    <Skill
                        image="puncture.jpg"
                        name="Puncture"
                    />
                    <Skill
                        image="flurry.jpg"
                        name="Flurry"
                    />
                </div>
            </div>

            <div class="mb-5">
                <h3>Caged Hearts</h3>
                <p>Players on the Eternal Realm should ignore this section of the guide. This build is designed to work without Caged Hearts, though it can be enhanced by them.</p>

                <h5 class="text-primary">Best-in-Slot</h5>

                <div class="row">
                    <Heart
                        name="Tempting Fate"
                        type="vicious"
                    />
                    <Heart
                        name="Vile Apothecary"
                        type="wrathful"
                    />
                    <Heart
                        name="Revenge"
                        type="brutal"
                    />
                </div>

                <h5 class="text-primary">Alternative</h5>

                <div class="row">
                    <Heart
                        name="Prudent Heart"
                        type="brutal"
                    />
                    <Heart
                        name="Cluster Munitions"
                        type="vicious"
                    />
                </div>
            </div>

            <div>
                <h3>Aspects</h3>

                <div class="row">
                    <Aspect
                        :codex="true"
                        dungeon="Oldstones"
                        name="Edgemaster's"
                        slot="Ranged"
                    />
                    <Aspect
                        name="Condemnation"
                        slot="Melee"
                        :unique="true"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Renegade's Retreat"
                        name="Corruption"
                        slot="Melee"
                    />
                    <Aspect
                        :codex="false"
                        name="Mangler's"
                        slot="Helm"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Dark Ravine"
                        name="Might"
                        slot="Chest"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Buried Halls"
                        name="Rapid"
                        slot="Gloves"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Halls of the Damned"
                        name="Disobedience"
                        slot="Pants"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Halls of the Damned"
                        name="Disobedience"
                        slot="Pants"
                    />
                    <Aspect
                        name="Penitent Greaves"
                        slot="Boots"
                        :unique="true"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Luban's Rest"
                        name="Cheat's"
                        slot="Amulet"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Underroot"
                        name="Expectant"
                        slot="Ring"
                    />
                    <Aspect
                        :codex="true"
                        dungeon="Forsaken Quarry"
                        name="Encircling Blade"
                        slot="Ring"
                    />
                </div>
            </div>
        </div>
    `
}).mount('#app');
