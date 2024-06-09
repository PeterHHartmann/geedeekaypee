// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
    },
    {
        id: '45d48234-37f1-4dc5-9dd3-80cbb9f4b368',
        name: 'Benis',
        email: 'benis@gmail.com',
        password: '1Big!ideas+',
  },
];

const char_classes = {
    deathknight: {id: '20fbaccd-aac6-41b8-8ad5-ffac7ed9bccc', name: 'Death Knight'},
    druid: {id: '21be25bc-9522-4d35-982c-9b549845381a', name: 'Druid'},
    hunter: {id: '9b5e615e-5a7c-4b60-b41f-bcb70db33dc0', name: 'Hunter'},
    mage: {id: 'aa8fa417-d1cf-41d3-a869-84ab492106a4', name: 'Mage'},
    paladin: {id: 'e5062544-db20-4b09-b28f-b94a3ffad24b', name: 'Paladin'},
    priest: {id: '33d42a9c-9033-49f8-ac46-c1caa4422ca5', name: 'Priest'},
    rogue: {id: 'f8010fcc-d841-4ef2-8e16-303dfb029057', name: 'Rogue'},
    shaman: {id: '3dce3b4c-2610-4b0b-b250-18760cfb1dab', name: 'Shaman'},
    warlock: {id: 'c8ee7f84-6749-40ca-8b02-f0b7356a5fc8', name: 'Warlock'},
    warrior: {id: '28edd349-c97e-43b4-b650-dcf750570f85', name: 'Warrior'},
}

const class_talent_specs = {
    deathknight: {
        blood: { id: '379ed3b3-e2d8-44b2-bdc6-41e7f6b7092c', name: 'Blood', class_id: char_classes.deathknight.id },
        unholy: { id: 'b8156f41-1267-4dc2-b098-225f2d65a394', name: 'Unholy', class_id: char_classes.deathknight.id },
        frost: { id: '07e2f64c-bf5a-4201-b2bd-4c4261555206', name: 'Frost', class_id: char_classes.deathknight.id },
    },
    druid: {
        feralbear: { id: '40935316-b166-4af8-aed8-4fa2ec374fd8', name: 'Feral Bear', class_id: char_classes.druid.id },
        feralcat: { id: '3d338c52-5ae7-46a9-b70b-ce99dbcda950', name: 'Feral Cat', class_id: char_classes.druid.id },
        balance: { id: 'a8c1bdf8-f26f-4bc8-9149-466f071fe541', name: 'Balance', class_id: char_classes.druid.id },
        restoration: { id: 'ab11e6b6-e682-4a4a-a36c-c1b56eb7ca57', name: 'Restoration', class_id: char_classes.druid.id },
    },
    hunter: {
        marksmanship: { id: 'c2f23ad4-f4ea-4afe-9326-fc0956ae0c38', name: 'Marksmanship', class_id: char_classes.hunter.id },
        beastmastery: { id: '77b672e9-23c6-41c2-bbc3-2f3201eaaf7b', name: 'Beast Mastery', class_id: char_classes.hunter.id },
        survival: { id: 'cb64ef3d-6c9c-4e76-8478-50b664c917c9', name: 'Survival', class_id: char_classes.hunter.id },
    },
    mage: {
        frost: { id: '532fb29f-132f-4ce5-be76-24fc143e292e', name: 'Frost', class_id: char_classes.mage.id },
        arcane: { id: '7c25ca6d-0071-486d-a9d7-953e140f961d', name: 'Arcane', class_id: char_classes.mage.id },
        fire: { id: '6000517b-185b-4ad1-acfc-bdb629040fe4', name: 'Fire', class_id: char_classes.mage.id},
    },
    paladin: {
        protection: { id: '948eb6dc-f64e-4980-9d69-abb5b0442b22', name: 'Protection', class_id: char_classes.paladin.id },
        holy: { id: 'dbaa79c9-b2af-457d-86ea-9f9e7a25b39a', name: 'Holy', class_id: char_classes.paladin.id },
        retribution: { id: 'a6453839-a021-4aa1-89d1-4b973752d77f', name: 'Retribution', class_id: char_classes.paladin.id },
    },
    priest: {
        discipline: { id: 'b5dd041b-7fad-4cbc-b6db-1f331682e205', name: 'Discipline', class_id: char_classes.priest.id },
        holy: { id: 'b5a45441-82eb-4f10-b21d-510a5f2c81ab', name: 'Holy', class_id: char_classes.priest.id },
        shadow: { id: 'b700adc3-c638-459e-b0a7-ad8d43aa6f7a', name: 'Shadow', class_id: char_classes.priest.id },
    },
    rogue: {
        combat: { id: 'c4f199e9-4194-4c07-b699-53082b97cc25', name: 'Combat', class_id: char_classes.rogue.id },
        assassination: { id: '6ca4c126-8c4b-4bb0-81f6-119eaecbcac6', name: 'Assassination', class_id: char_classes.rogue.id },
        subtlety: { id: '46cd8ba0-967c-41ea-a708-1c221266f825', name: 'Subtlety', class_id: char_classes.rogue.id },
    },
    shaman: {
        restoration: { id: '26745676-575f-4f99-8502-1478e1348694', name: 'Restoration', class_id: char_classes.shaman.id },
        elemental: { id: 'ea9ae447-20c5-4550-a195-120c424076f7', name: 'Elemental', class_id: char_classes.shaman.id },
        enhancement: { id: 'a8ebf142-8305-4c2e-bfc0-a877e92a2926', name: 'Enhancement', class_id: char_classes.shaman.id },
    },
    warlock: {
        destruction: { id: 'df266433-146e-4c85-9603-561235f47c88', name: 'Destruction', class_id: char_classes.warlock.id },
        demonology: { id: 'e126fd93-2a4b-4dea-b530-8c7953c46716', name: 'Demonology', class_id: char_classes.warlock.id },
        affliction: { id: '9647d7a2-ed8e-4284-9de1-c434bb555b9b', name: 'Affliction', class_id: char_classes.warlock.id },
    },
    warrior: {
        protection: { id: '22918327-d63a-458d-a192-54a6b5c7368b', name: 'Protection', class_id: char_classes.warrior.id },
        arms: { id: 'aed236f2-3c7d-4090-8c3f-50acb390896a', name: 'Arms', class_id: char_classes.warrior.id },
        fury: { id: 'aaeb41b6-dd3a-49e0-b354-30e8521aae7b', name: 'Fury', class_id: char_classes.warrior.id },
    }
}

const char_roles = {
    tank: { id: 'd7a0dddc-dd3c-46ef-8071-a71cf211d068', name: 'Tank'},
    heal: { id: '2a44044c-e707-4d8c-b587-54f4e2e421df', name: 'Healer'},
    mdps: { id: '59facb3d-2db0-4f0f-9282-c71d007fb569', name: 'Melee DPS'},
    rdps: { id: '0dc3d43f-7d74-4790-b9f2-93014c787bca', name: 'Ranged DPS'},
}

const class_roles = {
    deathknight: {
        tank: { id: 'f83662ad-758c-46c7-a58d-b978542b5ea3', class_id: char_classes.deathknight.id, role_id: char_roles.tank.id },
        mdps: { id: '85f3c9c7-ec65-45a5-8020-642609f88c36', class_id: char_classes.deathknight.id, role_id: char_roles.mdps.id }
    },
    druid: {
        tank: { id: '593f11db-9640-4f83-b8b3-7908b4bba82a', class_id: char_classes.druid.id, role_id: char_roles.tank.id },
        heal: { id: 'b01d7bfc-cfd1-4835-934f-7aa6eec6e6a7', class_id: char_classes.druid.id, role_id: char_roles.heal.id },
        mdps: { id: '86bcdfb6-6732-4f54-852b-4e7d8f4c8be0', class_id: char_classes.druid.id, role_id: char_roles.mdps.id },
        rdps: { id: '1c253595-c8ae-4c23-9643-98bb309f8dd4', class_id: char_classes.druid.id, role_id: char_roles.rdps.id }
    },
    hunter: {
        rdps: { id: '9d1069ad-d810-416c-abb1-2fae25459236', class_id: char_classes.hunter.id, role_id: char_roles.rdps.id }
    },
    mage: {
        rdps: { id: '66bcd9c1-9cf5-4ee1-9f07-af64d8d186b6', class_id: char_classes.mage.id, role_id: char_roles.rdps.id }
    },
    paladin: {
        tank: { id: '36694c96-33ff-4766-a746-e9d63b62f86b', class_id: char_classes.paladin.id, role_id: char_roles.tank.id },
        heal: { id: 'ec470a37-2de9-4a5f-bf4f-1d9306ee511c', class_id: char_classes.paladin.id, role_id: char_roles.heal.id },
        mdps: { id: 'ae7409e7-8fd0-4266-916a-9966c02719b5', class_id: char_classes.paladin.id, role_id: char_roles.mdps.id }
    },
    priest: {
        heal: { id: 'ddd8a59c-0263-44ef-8ff9-60811ef7fdc7', class_id: char_classes.priest.id, role_id: char_roles.heal.id },
        rdps: { id: '29f492f6-c29a-43a4-ad44-0bf32e607b8e', class_id: char_classes.priest.id, role_id: char_roles.rdps.id },
    },
    rogue: {
        mdps: { id: 'e88211e3-659e-4d33-8514-859debc5db6a', class_id: char_classes.rogue.id, role_id: char_roles.mdps.id },
    },
    shaman: {
        heal: { id: 'ff268859-3764-404a-9ab1-b3507c91ba8a', class_id: char_classes.shaman.id, role_id: char_roles.heal.id },
        mdps: { id: 'd24df474-a5a1-4815-b63f-eee22ac06977', class_id: char_classes.shaman.id, role_id: char_roles.mdps.id },
        rdps: { id: '8d0dc518-0c0d-4b1c-af50-a3c0b006930e', class_id: char_classes.shaman.id, role_id: char_roles.rdps.id },
    },
    warlock: {
        rdps: { id: 'afa11f70-dbab-4c50-b735-215ff27d32f1', class_id: char_classes.warlock.id, role_id: char_roles.rdps.id },
    },
    warrior: {
        tank: { id: '031430e4-6cfc-4970-a67f-7f2c0926e2d2', class_id: char_classes.warrior.id, role_id: char_roles.tank.id },
        mdps: { id: '6d267b4e-24a8-435f-abef-6f523657d658', class_id: char_classes.warrior.id, role_id: char_roles.mdps.id },
    }
}

const spec_class_roles = {
    deathknight: {
        blood: {
            tank: { id: '', spec_id: class_talent_specs.deathknight.blood.id, class_role_id: class_roles.deathknight.tank.id },
            mdps: { id: '', spec_id: class_talent_specs.deathknight.blood.id, class_role_id: class_roles.deathknight.mdps.id }
        },
        unholy: {
            tank: { id: '', spec_id: class_talent_specs.deathknight.unholy.id, class_role_id: class_roles.deathknight.tank.id  },
            mdps: { id: '', spec_id: class_talent_specs.deathknight.unholy.id, class_role_id: class_roles.deathknight.mdps.id }
        },
        frost: {
            tank: { id: '', spec_id: class_talent_specs.deathknight.frost.id, class_role_id: class_roles.deathknight.tank.id  },
            mdps: { id: '', spec_id: class_talent_specs.deathknight.frost.id, class_role_id: class_roles.deathknight.mdps.id }
        },
    }
}

const main_roster = [
    { 
        id: 'e76707d7-57c7-469c-933f-118a50eb17b8', 
        name: 'Thaldrion', 
        class_id: char_classes.paladin.id,
        spec_id: class_talent_specs.deathknight.blood.id,
        role_id: char_roles.tank.id,
        user_email: 'user@nextmail.com'},
    {
        id: 'ccd1f7cb-d0de-4530-81fc-d48ff610658b', 
        name: 'Zarathor', 
        class_id: char_classes.deathknight.id, 
        spec_id: class_talent_specs.paladin.protection.id,
        role_id: char_roles.tank.id, 
        user_email: 'user@nextmail.com' 
    },
    {
        id: '564bdf37-97ca-45b0-b733-97f1281ac8a9', 
        name: 'Baldur', 
        class_id: char_classes.warrior.id, 
        spec_id: class_talent_specs.warrior.protection.id,
        role_id: char_roles.tank.id,
        user_email: 'user@nextmail.com' 
    },
    { 
        id: '282cfb5f-f20a-4f2b-8ad0-e89b965ef7ac', 
        name: 'Elunara', 
        class_id: char_classes.priest.id, 
        spec_id: class_talent_specs.priest.discipline.id,
        role_id: char_roles.heal.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '53fbd70b-556a-452b-b704-38efbdb792b8', 
        name: 'Grommashar', 
        class_id: char_classes.shaman.id,
        spec_id: class_talent_specs.shaman.restoration.id,
        role_id: char_roles.heal.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'acfc1c49-9a14-42f6-9e38-1599d060b98a', 
        name: 'Sylverwind', 
        class_id: char_classes.paladin.id, 
        spec_id: class_talent_specs.paladin.holy.id,
        role_id: char_roles.heal.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '8257599e-a08a-4af6-bf25-c9f6c40d6c64', 
        name: 'Danathos', 
        class_id: char_classes.paladin.id,
        spec_id: class_talent_specs.paladin.holy.id, 
        role_id: char_roles.heal.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'e5065a59-3f49-4e44-97f4-fb519ce4f693', 
        name: 'Vyraeth', 
        class_id: char_classes.druid.id, 
        spec_id: class_talent_specs.druid.restoration.id,
        role_id: char_roles.heal.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '1645e24d-2ffe-456f-b038-9c6994fbcc0b', 
        name: 'Thalindra',
        class_id: char_classes.priest.id, 
        spec_id: class_talent_specs.priest.holy.id,
        role_id: char_roles.heal.id,
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6c6c031a-424a-43ae-a513-3bc36ff1046a', 
        name: 'Morningshade', 
        class_id: char_classes.warlock.id, 
        spec_id: class_talent_specs.warlock.demonology.id,
        role_id: char_roles.rdps.id,
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'ab9ad49e-da66-4b86-bc80-4f5f3c23ca74', 
        name: 'Korgarok', 
        class_id: char_classes.warrior.id, 
        spec_id: class_talent_specs.warrior.fury.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'},
    { 
        id: '0fbc5ccf-fc4f-41e6-b1ee-fae2274c78c6', 
        name: 'Nyxalis',
        class_id: char_classes.priest.id, 
        spec_id: class_talent_specs.priest.shadow.id,
        role_id: char_roles.rdps.id,
        user_email: 'user@nextmail.com'
    },
    {
        id: 'b6095d64-40b4-4d0b-adad-d1a56836aed9', 
        name: 'Aetherion', 
        class_id: char_classes.mage.id,
        spec_id: class_talent_specs.mage.fire.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'b9a8cf83-cb1b-4ea6-b9d0-04ca4c59387b', 
        name: 'Drakkos', 
        class_id: char_classes.rogue.id, 
        spec_id: class_talent_specs.rogue.combat.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '9c92fc28-0851-4237-8544-52440791b607', 
        name: 'Felblade', 
        class_id: char_classes.warlock.id, 
        spec_id: class_talent_specs.warlock.demonology.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'c64b2201-ab5e-4539-ab8c-1d45a8568064', 
        name: 'Lyriax', 
        class_id: char_classes.deathknight.id, 
        spec_id: class_talent_specs.deathknight.unholy.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '3715d140-b44e-4cad-94b9-06dde12ef0b1', 
        name: 'Zenkaris', 
        class_id: char_classes.hunter.id, 
        spec_id: class_talent_specs.hunter.marksmanship.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'f4b9a2ae-f44c-4951-96a0-9a8e79ac64c3', 
        name: 'Ashenfury', 
        class_id: char_classes.warrior.id, 
        spec_id: class_talent_specs.warrior.fury.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '7f6782e7-0400-40ad-94ea-4a7f6fa01d75', 
        name: 'Vesperine', 
        class_id: char_classes.druid.id, 
        spec_id: class_talent_specs.druid.feralcat.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6b7c989b-cb7a-4277-87b0-7a96c16773b8', 
        name: 'Kaltharion', 
        class_id: char_classes.druid.id, 
        spec_id: class_talent_specs.druid.balance.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '0ffa8c38-dfb5-4f54-8e63-0a5ce78c453c', 
        name: 'Miravelle', 
        class_id: char_classes.warlock.id,
        spec_id: class_talent_specs.warlock.demonology.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6b77e472-cff3-4eb5-a900-69b10f013cfd', 
        name: 'Stormrune', 
        class_id: char_classes.shaman.id, 
        spec_id: class_talent_specs.shaman.enhancement.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: 'b84428ef-a1b9-4d19-b156-e5cc49e0ae7d', 
        name: 'Thundrax', 
        class_id: char_classes.paladin.id, 
        spec_id: class_talent_specs.paladin.retribution.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '1e6af78e-d00e-40aa-a8a0-aa0f482820ad', 
        name: 'Nightwarden', 
        class_id: char_classes.paladin.id, 
        spec_id: class_talent_specs.paladin.retribution.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'a87aaf01-4557-4469-a4e2-01b9f76e0d22', 
        name: 'Frostbane', 
        class_id: char_classes.mage.id, 
        spec_id: class_talent_specs.mage.fire.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '184516f6-b85f-405d-9cdc-7c18d95369a3', 
        name: 'Lunarae', 
        class_id: char_classes.priest.id, 
        spec_id: class_talent_specs.priest.shadow.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '22c6fc11-6f17-438a-af48-eed0edf71777', 
        name: 'Grymshadow', 
        class_id: char_classes.warlock.id, 
        spec_id: class_talent_specs.warlock.affliction.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '3a293121-574a-4562-bece-07728a808044', 
        name: 'Gorathar', 
        class_id: char_classes.shaman.id, 
        spec_id: class_talent_specs.shaman.elemental.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '8a8a3d8a-a157-4f69-9ae2-154dbac30758', 
        name: 'Durok', 
        class_id: char_classes.warrior.id, 
        spec_id: class_talent_specs.warrior.arms.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '5e1b5bb7-b689-46a2-bcba-d54f2d23b9c5', 
        name: 'Morgath', 
        class_id: char_classes.rogue.id, 
        spec_id: class_talent_specs.rogue.assassination.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '3b306103-e925-422e-82b6-5ac6783187b0', 
        name: 'Varilynn', 
        class_id: char_classes.rogue.id, 
        spec_id: class_talent_specs.rogue.subtlety.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '7c80d8d5-a0c5-499f-9969-ea6cbb38dc85', 
        name: 'Sylthara', 
        class_id: char_classes.mage.id, 
        spec_id: class_talent_specs.mage.frost.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '284916b0-24ca-4493-8894-39b469c90959', 
        name: 'Lyriana', 
        class_id: char_classes.mage.id, 
        spec_id: class_talent_specs.mage.arcane.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'beb101e2-cd94-4ae4-b894-ec007414025d', 
        name: 'Kragor', 
        class_id: char_classes.deathknight.id, 
        spec_id: class_talent_specs.deathknight.frost.id,
        role_id: char_roles.mdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '0979ee0c-ccff-4c5a-b6d5-30e420275e96', 
        name: 'Tharnak', 
        class_id: char_classes.warlock.id, 
        spec_id: class_talent_specs.warlock.affliction.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: 'd8279bbf-8552-40ef-aea8-408dba9728c8', 
        name: 'Myralis', 
        class_id: char_classes.warlock.id, 
        spec_id: class_talent_specs.warlock.destruction.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '86a23f3d-9c22-45b7-8557-adfee1b820c6', 
        name: 'Selindra', 
        class_id: char_classes.hunter.id, 
        spec_id: class_talent_specs.hunter.beastmastery.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '97d041b3-2398-4ce0-839b-cc33c64bf877', 
        name: 'Aerilynn', 
        class_id: char_classes.hunter.id, 
        spec_id: class_talent_specs.hunter.survival.id,
        role_id: char_roles.rdps.id, 
        user_email: 'user@nextmail.com'
    },
];

const raids = {
    icc: { 
        id: 'a4f0eaf9-5142-40a0-92e9-143c711d7351', 
        name: 'Icecrown Citadel'
    }
}

const raid_templates = {
    icc25hc: {
        id: '348c5108-ab12-4c29-bc0e-9780d3a4bffd', 
        raid_id: raids.icc.id,
        name: 'Icecrown Citadel 25man Heroic',
        size: 25,
        difficulty: 'HC'
    },
    icc10hc: {
        id: '08177edf-d838-4717-8e0e-3ddf42a2ca57', 
        raid_id: raids.icc.id,
        name: 'Icecrown Citadel 10man Heroic',
        size: 10,
        difficulty: 'HC'
    }
}

const raids_template_positions = {
    icc25hc: {
        template_id: raid_templates.icc25hc.id,
        positions: {
            1: [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_role: class_roles.paladin.tank, spec_id: class_talent_specs.paladin.protection.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_role: class_roles.deathknight.tank, spec_id: class_talent_specs.deathknight.blood.id},
            ],
            2: [
                {id: '2b4802fb-65c1-4927-9dd4-3e3808b70545', class_role: class_roles.deathknight.tank, spec_id: class_talent_specs.deathknight.blood.id},
                {id: 'd6f14920-0891-4b51-893e-f5750509af5b', class_role: class_roles.paladin.tank, spec_id: class_talent_specs.paladin.protection.id},
            ],
            3: [
                {id: '27d627ab-156c-4389-9825-c78d0c1f1837', class_role: class_roles.deathknight.mdps, spec_id: class_talent_specs.deathknight.unholy.id},
                {id: '2ea07625-ffb6-4592-9381-11d3142ff458', class_role: class_roles.deathknight.mdps, spec_id: class_talent_specs.deathknight.frost.id},
            ],
            4: [
                {id: '5267ceb1-3539-49d8-96d6-db60c8afcb2e', class_role: class_roles.paladin.mdps, spec_id: class_talent_specs.paladin.retribution.id},
            ],
            5: [
                {id: '4477e5a4-6206-4df7-b5be-8cb49723d581', class_role: class_roles.paladin.mdps, spec_id: class_talent_specs.paladin.retribution.id},
            ],
            6: [
                {id: '9b053dbe-3f44-4b71-9552-b064b9023bce', class_role: class_roles.warrior.mdps, spec_id: class_talent_specs.warrior.fury.id},
                {id: '54d0a55d-c83c-42c8-846b-e3f3edbb6834', class_role: class_roles.druid.mdps, spec_id: class_talent_specs.druid.feralcat.id},
                {id: '18637105-2b67-45e8-953d-c582c54f1839', class_role: class_roles.shaman.mdps, spec_id: class_talent_specs.shaman.enhancement.id},
                {id: '962b7dbe-e721-48c0-853f-dc87188b450e', class_role: class_roles.hunter.rdps, spec_id: class_talent_specs.hunter.marksmanship.id},
                {id: '083b1c98-2953-4849-bccc-4523307ec235', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
            ],
            7: [
                {id: '5e865582-a3fb-4d40-a8a6-22ca61434412', class_role: class_roles.warrior.mdps, spec_id: class_talent_specs.warrior.fury.id},
                {id: '8ff447c7-9cae-4c35-9322-bf264d50c3da', class_role: class_roles.druid.mdps, spec_id: class_talent_specs.druid.feralcat.id},
                {id: 'aa172dfc-8702-4e09-9aa0-77b6fb7a52f3', class_role: class_roles.shaman.mdps, spec_id: class_talent_specs.shaman.enhancement.id},
                {id: '066f8723-e65e-4ee6-8765-4a4e2dd2e673', class_role: class_roles.hunter.rdps, spec_id: class_talent_specs.hunter.marksmanship.id},
                {id: 'e556def8-fe2f-45f3-98a3-871136851f9a', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
            ],
            8: [
                {id: '69ee5f62-f348-496e-85e9-210d3a7997b8', class_role: class_roles.warrior.mdps, spec_id: class_talent_specs.warrior.fury.id},
                {id: '6a009783-964e-4c73-a6c1-8503054b3ce8', class_role: class_roles.druid.mdps, spec_id: class_talent_specs.druid.feralcat.id},
                {id: '2ca532cd-37a4-45a5-941a-0a7a62b3023c', class_role: class_roles.shaman.mdps, spec_id: class_talent_specs.shaman.enhancement.id},
                {id: 'eca6f265-5a44-4a66-b6f7-01e5b61c31eb', class_role: class_roles.hunter.rdps, spec_id: class_talent_specs.hunter.marksmanship.id},
                {id: 'ac02fee6-89de-4ac9-a0ea-9cf299d2dbd3', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
            ],
            9: [
                {id: '5f6bc972-8d04-4cf7-8754-886b3b87e448', class_role: class_roles.warrior.mdps, spec_id: class_talent_specs.warrior.fury.id},
                {id: '1dac8a36-3ce3-41d2-980b-48075e92a257', class_role: class_roles.druid.mdps, spec_id: class_talent_specs.druid.feralcat.id},
                {id: 'bd4d841f-d953-432b-9be3-3155409d3b9a', class_role: class_roles.shaman.mdps, spec_id: class_talent_specs.shaman.enhancement.id},
                {id: 'd553ea58-6d49-4acd-8938-35c9c46f7caa', class_role: class_roles.hunter.rdps, spec_id: class_talent_specs.hunter.marksmanship.id},
                {id: '03af507f-6d81-4443-bb36-388fa36bbb3d', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
            ],
            10: [
                {id: 'f36d6586-da34-4969-ac6b-7282ce2e032b', class_role: class_roles.warrior.mdps, spec_id: class_talent_specs.warrior.fury.id},
                {id: '4205177b-81e5-497d-b9ac-9b47e75c7430', class_role: class_roles.druid.mdps, spec_id: class_talent_specs.druid.feralcat.id},
                {id: 'a3bc7210-bd2f-4add-8a15-f7cfef2d7f39', class_role: class_roles.shaman.mdps, spec_id: class_talent_specs.shaman.enhancement.id},
                {id: 'c583990c-195f-47e7-a4b9-a1a6e97614ab', class_role: class_roles.hunter.rdps, spec_id: class_talent_specs.hunter.marksmanship.id},
                {id: '57160510-484b-4f2c-a4b2-ac8d593a9745', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
            ],
            11: [
                {id: '2f0f8917-2b27-45a6-98bf-d82fb33ac279', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
                {id: '386c848c-cece-4efd-adc8-5a35a1310186', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '5c2b55bf-455d-4950-83b6-dfc15a914001', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '58c91141-e270-45d1-86be-e9f825ab72ab', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            12: [
                {id: '6b223749-07ff-48b7-8c2f-9d59d2ef37af', class_role: class_roles.rogue.mdps, spec_id: class_talent_specs.rogue.combat.id},
                {id: '410894f1-217f-480d-b67d-4ebf7f86242d', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '66371a53-c31b-4393-bda5-2c68ae1aa3aa', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: '17a669c0-471f-42a3-afed-7782388c1729', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '4f2cd4e9-9010-4d1b-83e2-be773f262d1c', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            13: [
                {id: 'b6ca7d29-2323-40ee-b2f9-ec7c4c0bb820', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: 'f9a17e77-a480-488c-91dc-70f4f06a426d', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: '46824c9f-04fd-4183-af78-51ed327a9a4f', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '493d8c26-2f0b-41ef-bbc3-2a89d1615c55', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            14: [
                {id: '948c1ee5-46ca-47a5-95c1-4ddf1c0895b0', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '74613cc4-8f4b-4f23-ad8e-bf28650648e9', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: 'ba829cf1-ca6a-458e-9e0a-2d15eee2c357', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '9e377afb-7248-4cf7-9d01-463365b62c38', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            15: [
                {id: 'f76be519-ba9a-49b2-a714-a08fc73dbd95', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '0b1b77b6-7f9e-4c23-8c80-79b269dd9628', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: 'a03e5292-2da4-404e-b205-4d0932a586a8', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '8378f400-769c-46c5-bb36-705633023eb3', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            16: [
                {id: 'beb98c93-cef7-4a71-beec-2369b8f99c87', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '27d09ca6-5bbe-4832-afb5-7325be1820ab', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: 'bc5085c1-0bf0-4b70-8bdf-50554d0c37f5', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '81164a13-24e9-4ec3-b2d5-8ef004ac33b9', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            17: [
                {id: 'e7fd9fd2-5eb1-4a16-afa4-908873ada8c2', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '530433cb-e8a3-476c-8b76-5b09e38bc486', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: '6852800a-cf86-4743-83ca-ee9354cdba83', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: 'ff0835e2-faea-443e-842c-c65b3956ccf6', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            18: [
                {id: '1d9407c0-c106-49a0-85e5-6a78604bb62c', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: 'eb4d68fa-b1a8-443f-bacf-4a6b21608df5', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: '34ce9693-c2df-48ba-990a-c60f316fffdd', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: 'aaf57817-4558-435e-919d-b0ee92d17017', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            19: [
                {id: '625b6abe-3681-4839-81a2-3ecb2d2c738d', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '78f27753-d007-440f-b98b-8cdd8a717eda', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: '44eef1de-6b55-4e43-86b2-1fd639836310', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '1ddd9ccc-753b-439b-8766-a5dfef20138e', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            20: [
                {id: '742bd0c6-b676-4c93-aa40-55c6d282623c', class_role: class_roles.priest.rdps, spec_id: class_talent_specs.priest.shadow.id},
                {id: '65f9b0bf-7946-43c1-8575-4f0984dc0890', class_role: class_roles.mage.rdps, spec_id: class_talent_specs.mage.fire.id},
                {id: 'fc556972-e5bc-4be0-a8c5-ee8d7255b6ea', class_role: class_roles.warlock.rdps, spec_id: class_talent_specs.warlock.demonology.id},
                {id: '471b779f-0acd-4fb0-8d21-7200ba8d95f6', class_role: class_roles.druid.rdps, spec_id: class_talent_specs.druid.balance.id},
            ],
            21: [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_role: class_roles.paladin.heal, spec_id: class_talent_specs.paladin.holy.id},
            ],
            22: [
                {id: '2a2a68b3-a47a-47a9-bf6d-28c6155c367b', class_role: class_roles.paladin.heal, spec_id: class_talent_specs.paladin.holy.id},
            ],
            23: [
                {id: '49e71594-c8f0-4699-a39c-e291961e89e8', class_role: class_roles.shaman.heal, spec_id: class_talent_specs.shaman.restoration.id},
            ],
            24: [
                {id: '810b6f77-31bf-47be-864a-f116a4a2ff17', class_role: class_roles.priest.heal, spec_id: class_talent_specs.priest.discipline.id},
            ],
            25: [
                {id: 'ec60d86d-845b-46f7-b8b1-4bda10cb45d7', class_role: class_roles.shaman.heal, spec_id: class_talent_specs.shaman.restoration.id},
                {id: 'd2d244a3-8f57-421b-9f33-10948d79f92d', class_role: class_roles.druid.heal, spec_id: class_talent_specs.druid.restoration.id},
                {id: 'daacd4b9-5433-444d-98a2-f99aa0d1004d', class_role: class_roles.priest.heal, spec_id: class_talent_specs.priest.holy.id},
            ],
            }
    },
    icc10hc: {
        template_id: raid_templates.icc10hc.id,
        positions: {
            1: [
                {id: 'adc58138-eed5-4a9b-a5d4-672dc6b788fa', class_role: class_roles.deathknight.tank, spec_id: class_talent_specs.deathknight.blood.id},
                {id: '28f5af45-4b16-4f29-a62f-465aa0c5f103', class_role: class_roles.paladin.tank, spec_id: class_talent_specs.paladin.protection.id},
            ],
            2: [
                {id: 'ad69ffa5-1be1-446b-8857-b716d8385844', class_role: class_roles.paladin.tank, spec_id: class_talent_specs.paladin.protection.id},
                {id: '2fc91b7f-4f73-46ad-9617-d3f124768fe1', class_role: class_roles.deathknight.tank, spec_id: class_talent_specs.deathknight.blood.id},
            ]
       }
    } 
}



module.exports = {
  users,
  char_classes,
  class_talent_specs,
  char_roles,
  class_roles,
  main_roster,
  raids,
  raid_templates,
  raids_template_positions,
};
