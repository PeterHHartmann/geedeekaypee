const { charClasses } = require('./charClasses.js')

const classTalentSpecs = {
    deathknight: {
        blood: { id: '379ed3b3-e2d8-44b2-bdc6-41e7f6b7092c', name: 'Blood', class_id: charClasses.deathknight.id },
        unholy: { id: 'b8156f41-1267-4dc2-b098-225f2d65a394', name: 'Unholy', class_id: charClasses.deathknight.id },
        frost: { id: '07e2f64c-bf5a-4201-b2bd-4c4261555206', name: 'Frost', class_id: charClasses.deathknight.id },
    },
    druid: {
        feralbear: { id: '40935316-b166-4af8-aed8-4fa2ec374fd8', name: 'Feral Bear', class_id: charClasses.druid.id },
        feralcat: { id: '3d338c52-5ae7-46a9-b70b-ce99dbcda950', name: 'Feral Cat', class_id: charClasses.druid.id },
        balance: { id: 'a8c1bdf8-f26f-4bc8-9149-466f071fe541', name: 'Balance', class_id: charClasses.druid.id },
        restoration: { id: 'ab11e6b6-e682-4a4a-a36c-c1b56eb7ca57', name: 'Restoration', class_id: charClasses.druid.id },
    },
    hunter: {
        marksmanship: { id: 'c2f23ad4-f4ea-4afe-9326-fc0956ae0c38', name: 'Marksmanship', class_id: charClasses.hunter.id },
        beastmastery: { id: '77b672e9-23c6-41c2-bbc3-2f3201eaaf7b', name: 'Beast Mastery', class_id: charClasses.hunter.id },
        survival: { id: 'cb64ef3d-6c9c-4e76-8478-50b664c917c9', name: 'Survival', class_id: charClasses.hunter.id },
    },
    mage: {
        frost: { id: '532fb29f-132f-4ce5-be76-24fc143e292e', name: 'Frost', class_id: charClasses.mage.id },
        arcane: { id: '7c25ca6d-0071-486d-a9d7-953e140f961d', name: 'Arcane', class_id: charClasses.mage.id },
        fire: { id: '6000517b-185b-4ad1-acfc-bdb629040fe4', name: 'Fire', class_id: charClasses.mage.id},
    },
    paladin: {
        protection: { id: '948eb6dc-f64e-4980-9d69-abb5b0442b22', name: 'Protection', class_id: charClasses.paladin.id },
        holy: { id: 'dbaa79c9-b2af-457d-86ea-9f9e7a25b39a', name: 'Holy', class_id: charClasses.paladin.id },
        retribution: { id: 'a6453839-a021-4aa1-89d1-4b973752d77f', name: 'Retribution', class_id: charClasses.paladin.id },
    },
    priest: {
        discipline: { id: 'b5dd041b-7fad-4cbc-b6db-1f331682e205', name: 'Discipline', class_id: charClasses.priest.id },
        holy: { id: 'b5a45441-82eb-4f10-b21d-510a5f2c81ab', name: 'Holy', class_id: charClasses.priest.id },
        shadow: { id: 'b700adc3-c638-459e-b0a7-ad8d43aa6f7a', name: 'Shadow', class_id: charClasses.priest.id },
    },
    rogue: {
        combat: { id: 'c4f199e9-4194-4c07-b699-53082b97cc25', name: 'Combat', class_id: charClasses.rogue.id },
        assassination: { id: '6ca4c126-8c4b-4bb0-81f6-119eaecbcac6', name: 'Assassination', class_id: charClasses.rogue.id },
        subtlety: { id: '46cd8ba0-967c-41ea-a708-1c221266f825', name: 'Subtlety', class_id: charClasses.rogue.id },
    },
    shaman: {
        restoration: { id: '26745676-575f-4f99-8502-1478e1348694', name: 'Restoration', class_id: charClasses.shaman.id },
        elemental: { id: 'ea9ae447-20c5-4550-a195-120c424076f7', name: 'Elemental', class_id: charClasses.shaman.id },
        enhancement: { id: 'a8ebf142-8305-4c2e-bfc0-a877e92a2926', name: 'Enhancement', class_id: charClasses.shaman.id },
    },
    warlock: {
        destruction: { id: 'df266433-146e-4c85-9603-561235f47c88', name: 'Destruction', class_id: charClasses.warlock.id },
        demonology: { id: 'e126fd93-2a4b-4dea-b530-8c7953c46716', name: 'Demonology', class_id: charClasses.warlock.id },
        affliction: { id: '9647d7a2-ed8e-4284-9de1-c434bb555b9b', name: 'Affliction', class_id: charClasses.warlock.id },
    },
    warrior: {
        protection: { id: '22918327-d63a-458d-a192-54a6b5c7368b', name: 'Protection', class_id: charClasses.warrior.id },
        arms: { id: 'aed236f2-3c7d-4090-8c3f-50acb390896a', name: 'Arms', class_id: charClasses.warrior.id },
        fury: { id: 'aaeb41b6-dd3a-49e0-b354-30e8521aae7b', name: 'Fury', class_id: charClasses.warrior.id },
    }
}

module.exports = {
    classTalentSpecs
}