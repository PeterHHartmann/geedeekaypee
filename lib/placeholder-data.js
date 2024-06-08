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

const char_classes = [
    {id: '20fbaccd-aac6-41b8-8ad5-ffac7ed9bccc', name: 'Death Knight'},
    {id: '21be25bc-9522-4d35-982c-9b549845381a', name: 'Druid'},
    {id: '9b5e615e-5a7c-4b60-b41f-bcb70db33dc0', name: 'Hunter'},
    {id: 'aa8fa417-d1cf-41d3-a869-84ab492106a4', name: 'Mage'},
    {id: 'e5062544-db20-4b09-b28f-b94a3ffad24b', name: 'Paladin'},
    {id: '33d42a9c-9033-49f8-ac46-c1caa4422ca5', name: 'Priest'},
    {id: 'f8010fcc-d841-4ef2-8e16-303dfb029057', name: 'Rogue'},
    {id: '3dce3b4c-2610-4b0b-b250-18760cfb1dab', name: 'Shaman'},
    {id: 'c8ee7f84-6749-40ca-8b02-f0b7356a5fc8', name: 'Warlock'},
    {id: '28edd349-c97e-43b4-b650-dcf750570f85', name: 'Warrior'},
]

const class_talent_specs = [
    { id: '379ed3b3-e2d8-44b2-bdc6-41e7f6b7092c', name: 'Blood', class_id: char_classes[0].id },
    { id: 'b8156f41-1267-4dc2-b098-225f2d65a394', name: 'Unholy', class_id: char_classes[0].id },
    { id: '07e2f64c-bf5a-4201-b2bd-4c4261555206', name: 'Frost', class_id: char_classes[0].id },
    { id: '40935316-b166-4af8-aed8-4fa2ec374fd8', name: 'Feral Bear', class_id: char_classes[1].id },
    { id: '3d338c52-5ae7-46a9-b70b-ce99dbcda950', name: 'Feral Cat', class_id: char_classes[1].id },
    { id: 'a8c1bdf8-f26f-4bc8-9149-466f071fe541', name: 'Balance', class_id: char_classes[1].id },
    { id: 'ab11e6b6-e682-4a4a-a36c-c1b56eb7ca57', name: 'Restoration', class_id: char_classes[1].id },
    { id: 'c2f23ad4-f4ea-4afe-9326-fc0956ae0c38', name: 'Marksmanship', class_id: char_classes[2].id },
    { id: '77b672e9-23c6-41c2-bbc3-2f3201eaaf7b', name: 'Beast Mastery', class_id: char_classes[2].id },
    { id: 'cb64ef3d-6c9c-4e76-8478-50b664c917c9', name: 'Survival', class_id: char_classes[2].id },
    { id: '532fb29f-132f-4ce5-be76-24fc143e292e', name: 'Frost', class_id: char_classes[3].id },
    { id: '7c25ca6d-0071-486d-a9d7-953e140f961d', name: 'Arcane', class_id: char_classes[3].id },
    { id: '6000517b-185b-4ad1-acfc-bdb629040fe4', name: 'Fire', class_id: char_classes[3].id},
    { id: '948eb6dc-f64e-4980-9d69-abb5b0442b22', name: 'Protection', class_id: char_classes[4].id },
    { id: 'dbaa79c9-b2af-457d-86ea-9f9e7a25b39a', name: 'Holy', class_id: char_classes[4].id },
    { id: 'a6453839-a021-4aa1-89d1-4b973752d77f', name: 'Retribution', class_id: char_classes[4].id },
    { id: 'b5dd041b-7fad-4cbc-b6db-1f331682e205', name: 'Discipline', class_id: char_classes[5].id },
    { id: 'b5a45441-82eb-4f10-b21d-510a5f2c81ab', name: 'Holy', class_id: char_classes[5].id },
    { id: 'b700adc3-c638-459e-b0a7-ad8d43aa6f7a', name: 'Shadow', class_id: char_classes[5].id },
    { id: 'c4f199e9-4194-4c07-b699-53082b97cc25', name: 'Combat', class_id: char_classes[6].id },
    { id: '6ca4c126-8c4b-4bb0-81f6-119eaecbcac6', name: 'Assassination', class_id: char_classes[6].id },
    { id: '46cd8ba0-967c-41ea-a708-1c221266f825', name: 'Subtlety', class_id: char_classes[6].id },
    { id: '26745676-575f-4f99-8502-1478e1348694', name: 'Restoration', class_id: char_classes[7].id },
    { id: 'ea9ae447-20c5-4550-a195-120c424076f7', name: 'Elemental', class_id: char_classes[7].id },
    { id: 'a8ebf142-8305-4c2e-bfc0-a877e92a2926', name: 'Enhancement', class_id: char_classes[7].id },
    { id: 'df266433-146e-4c85-9603-561235f47c88', name: 'Destruction', class_id: char_classes[8].id },
    { id: 'e126fd93-2a4b-4dea-b530-8c7953c46716', name: 'Demonology', class_id: char_classes[8].id },
    { id: '9647d7a2-ed8e-4284-9de1-c434bb555b9b', name: 'Affliction', class_id: char_classes[8].id },
    { id: '22918327-d63a-458d-a192-54a6b5c7368b', name: 'Protection', class_id: char_classes[9].id },
    { id: 'aed236f2-3c7d-4090-8c3f-50acb390896a', name: 'Arms', class_id: char_classes[9].id },
    { id: 'aaeb41b6-dd3a-49e0-b354-30e8521aae7b', name: 'Fury', class_id: char_classes[9].id },
]

const char_roles = [
    { id: 'd7a0dddc-dd3c-46ef-8071-a71cf211d068', name: 'Tank'},
    { id: '2a44044c-e707-4d8c-b587-54f4e2e421df', name: 'Healer'},
    { id: '59facb3d-2db0-4f0f-9282-c71d007fb569', name: 'Melee DPS'},
    { id: '0dc3d43f-7d74-4790-b9f2-93014c787bca', name: 'Ranged DPS'},
]

const class_roles = {
    deathknight: {
        tank: { id: 'f83662ad-758c-46c7-a58d-b978542b5ea3', class_id: char_classes[0].id, role_id: char_roles[0].id },
        mdps: { id: '85f3c9c7-ec65-45a5-8020-642609f88c36', class_id: char_classes[0].id, role_id: char_roles[2].id }
    },
    druid: {
        tank: { id: '593f11db-9640-4f83-b8b3-7908b4bba82a', class_id: char_classes[1].id, role_id: char_roles[0].id },
        heal: { id: 'b01d7bfc-cfd1-4835-934f-7aa6eec6e6a7', class_id: char_classes[1].id, role_id: char_roles[1].id },
        mdps: { id: '86bcdfb6-6732-4f54-852b-4e7d8f4c8be0', class_id: char_classes[1].id, role_id: char_roles[2].id },
        rdps: { id: '1c253595-c8ae-4c23-9643-98bb309f8dd4', class_id: char_classes[1].id, role_id: char_roles[3].id }
    },
    hunter: {
        rdps: { id: '9d1069ad-d810-416c-abb1-2fae25459236', class_id: char_classes[2].id, role_id: char_roles[3].id }
    },
    mage: {
        rdps: { id: '66bcd9c1-9cf5-4ee1-9f07-af64d8d186b6', class_id: char_classes[3].id, role_id: char_roles[3].id }
    },
    paladin: {
        tank: { id: '36694c96-33ff-4766-a746-e9d63b62f86b', class_id: char_classes[4].id, role_id: char_roles[0].id },
        heal: { id: 'ec470a37-2de9-4a5f-bf4f-1d9306ee511c', class_id: char_classes[4].id, role_id: char_roles[1].id },
        mdps: { id: 'ae7409e7-8fd0-4266-916a-9966c02719b5', class_id: char_classes[4].id, role_id: char_roles[2].id }
    },
    priest: {
        heal: { id: 'ddd8a59c-0263-44ef-8ff9-60811ef7fdc7', class_id: char_classes[5].id, role_id: char_roles[1].id },
        rdps: { id: '29f492f6-c29a-43a4-ad44-0bf32e607b8e', class_id: char_classes[5].id, role_id: char_roles[3].id },
    },
    rogue: {
        mdps: { id: 'e88211e3-659e-4d33-8514-859debc5db6a', class_id: char_classes[6].id, role_id: char_roles[2].id },
    },
    shaman: {
        heal: { id: 'ff268859-3764-404a-9ab1-b3507c91ba8a', class_id: char_classes[7].id, role_id: char_roles[1].id },
        mdps: { id: 'd24df474-a5a1-4815-b63f-eee22ac06977', class_id: char_classes[7].id, role_id: char_roles[2].id },
        rdps: { id: '8d0dc518-0c0d-4b1c-af50-a3c0b006930e', class_id: char_classes[7].id, role_id: char_roles[3].id },
    },
    warlock: {
        rdps: { id: 'afa11f70-dbab-4c50-b735-215ff27d32f1', class_id: char_classes[8].id, role_id: char_roles[3].id },
    },
    warrior: {
        tank: { id: '031430e4-6cfc-4970-a67f-7f2c0926e2d2', class_id: char_classes[9].id, role_id: char_roles[0].id },
        mdps: { id: '6d267b4e-24a8-435f-abef-6f523657d658', class_id: char_classes[9].id, role_id: char_roles[2].id },
    }
}

const main_roster = [
    { 
        id: 'e76707d7-57c7-469c-933f-118a50eb17b8', 
        name: 'Thaldrion', 
        class_id: char_classes[4].id,
        spec_id: class_talent_specs[13].id,
        role_id: char_roles[0].id,
        user_email: 'user@nextmail.com'},
    {
        id: 'ccd1f7cb-d0de-4530-81fc-d48ff610658b', 
        name: 'Zarathor', 
        class_id: char_classes[0].id, 
        spec_id: class_talent_specs[0].id,
        role_id: char_roles[0].id, 
        user_email: 'user@nextmail.com' 
    },
    {
        id: '564bdf37-97ca-45b0-b733-97f1281ac8a9', 
        name: 'Baldur', 
        class_id: char_classes[9].id, 
        spec_id: class_talent_specs[28].id,
        role_id: char_roles[0].id,
        user_email: 'user@nextmail.com' 
    },
    { 
        id: '282cfb5f-f20a-4f2b-8ad0-e89b965ef7ac', 
        name: 'Elunara', 
        class_id: char_classes[5].id, 
        spec_id: class_talent_specs[16].id,
        role_id: char_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '53fbd70b-556a-452b-b704-38efbdb792b8', 
        name: 'Grommashar', 
        class_id: char_classes[7].id,
        spec_id: class_talent_specs[22].id,
        role_id: char_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'acfc1c49-9a14-42f6-9e38-1599d060b98a', 
        name: 'Sylverwind', 
        class_id: char_classes[4].id, 
        spec_id: class_talent_specs[14].id,
        role_id: char_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '8257599e-a08a-4af6-bf25-c9f6c40d6c64', 
        name: 'Danathos', 
        class_id: char_classes[4].id,
        spec_id: class_talent_specs[14].id, 
        role_id: char_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'e5065a59-3f49-4e44-97f4-fb519ce4f693', 
        name: 'Vyraeth', 
        class_id: char_classes[1].id, 
        spec_id: class_talent_specs[6].id,
        role_id: char_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '1645e24d-2ffe-456f-b038-9c6994fbcc0b', 
        name: 'Thalindra',
        class_id: char_classes[5].id, 
        spec_id: class_talent_specs[17].id,
        role_id: char_roles[1].id,
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6c6c031a-424a-43ae-a513-3bc36ff1046a', 
        name: 'Morningshade', 
        class_id: char_classes[8].id, 
        spec_id: class_talent_specs[26].id,
        role_id: char_roles[3].id,
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'ab9ad49e-da66-4b86-bc80-4f5f3c23ca74', 
        name: 'Korgarok', 
        class_id: char_classes[9].id, 
        spec_id: class_talent_specs[30].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'},
    { 
        id: '0fbc5ccf-fc4f-41e6-b1ee-fae2274c78c6', 
        name: 'Nyxalis',
        class_id: char_classes[5].id, 
        spec_id: class_talent_specs[18].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'b6095d64-40b4-4d0b-adad-d1a56836aed9', 
        name: 'Aetherion', 
        class_id: char_classes[3].id, 
        spec_id: class_talent_specs[12].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'b9a8cf83-cb1b-4ea6-b9d0-04ca4c59387b', 
        name: 'Drakkos', 
        class_id: char_classes[6].id, 
        spec_id: class_talent_specs[19].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '9c92fc28-0851-4237-8544-52440791b607', 
        name: 'Felblade', 
        class_id: char_classes[8].id, 
        spec_id: class_talent_specs[26].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'c64b2201-ab5e-4539-ab8c-1d45a8568064', 
        name: 'Lyriax', 
        class_id: char_classes[0].id, 
        spec_id: class_talent_specs[1].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '3715d140-b44e-4cad-94b9-06dde12ef0b1', 
        name: 'Zenkaris', 
        class_id: char_classes[2].id, 
        spec_id: class_talent_specs[7].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'f4b9a2ae-f44c-4951-96a0-9a8e79ac64c3', 
        name: 'Ashenfury', 
        class_id: char_classes[9].id, 
        spec_id: class_talent_specs[30].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '7f6782e7-0400-40ad-94ea-4a7f6fa01d75', 
        name: 'Vesperine', 
        class_id: char_classes[1].id, 
        spec_id: class_talent_specs[4].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6b7c989b-cb7a-4277-87b0-7a96c16773b8', 
        name: 'Kaltharion', 
        class_id: char_classes[1].id, 
        spec_id: class_talent_specs[5].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '0ffa8c38-dfb5-4f54-8e63-0a5ce78c453c', 
        name: 'Miravelle', 
        class_id: char_classes[8].id,
        spec_id: class_talent_specs[26].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6b77e472-cff3-4eb5-a900-69b10f013cfd', 
        name: 'Stormrune', 
        class_id: char_classes[7].id, 
        spec_id: class_talent_specs[24].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: 'b84428ef-a1b9-4d19-b156-e5cc49e0ae7d', 
        name: 'Thundrax', 
        class_id: char_classes[4].id, 
        spec_id: class_talent_specs[15].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '1e6af78e-d00e-40aa-a8a0-aa0f482820ad', 
        name: 'Nightwarden', 
        class_id: char_classes[4].id, 
        spec_id: class_talent_specs[15].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'a87aaf01-4557-4469-a4e2-01b9f76e0d22', 
        name: 'Frostbane', 
        class_id: char_classes[3].id, 
        spec_id: class_talent_specs[12].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '184516f6-b85f-405d-9cdc-7c18d95369a3', 
        name: 'Lunarae', 
        class_id: char_classes[5].id, 
        spec_id: class_talent_specs[18].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '22c6fc11-6f17-438a-af48-eed0edf71777', 
        name: 'Grymshadow', 
        class_id: char_classes[8].id, 
        spec_id: class_talent_specs[26].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '3a293121-574a-4562-bece-07728a808044', 
        name: 'Gorathar', 
        class_id: char_classes[7].id, 
        spec_id: class_talent_specs[23].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '8a8a3d8a-a157-4f69-9ae2-154dbac30758', 
        name: 'Durok', 
        class_id: char_classes[9].id, 
        spec_id: class_talent_specs[29].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '5e1b5bb7-b689-46a2-bcba-d54f2d23b9c5', 
        name: 'Morgath', 
        class_id: char_classes[6].id, 
        spec_id: class_talent_specs[20].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '3b306103-e925-422e-82b6-5ac6783187b0', 
        name: 'Varilynn', 
        class_id: char_classes[6].id, 
        spec_id: class_talent_specs[21].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '7c80d8d5-a0c5-499f-9969-ea6cbb38dc85', 
        name: 'Sylthara', 
        class_id: char_classes[3].id, 
        spec_id: class_talent_specs[10].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '284916b0-24ca-4493-8894-39b469c90959', 
        name: 'Lyriana', 
        class_id: char_classes[3].id, 
        spec_id: class_talent_specs[11].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'beb101e2-cd94-4ae4-b894-ec007414025d', 
        name: 'Kragor', 
        class_id: char_classes[0].id, 
        spec_id: class_talent_specs[2].id,
        role_id: char_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '0979ee0c-ccff-4c5a-b6d5-30e420275e96', 
        name: 'Tharnak', 
        class_id: char_classes[8].id, 
        spec_id: class_talent_specs[27].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: 'd8279bbf-8552-40ef-aea8-408dba9728c8', 
        name: 'Myralis', 
        class_id: char_classes[8].id, 
        spec_id: class_talent_specs[25].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '86a23f3d-9c22-45b7-8557-adfee1b820c6', 
        name: 'Selindra', 
        class_id: char_classes[2].id, 
        spec_id: class_talent_specs[8].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
    {
        id: '97d041b3-2398-4ce0-839b-cc33c64bf877', 
        name: 'Aerilynn', 
        class_id: char_classes[2].id, 
        spec_id: class_talent_specs[9].id,
        role_id: char_roles[3].id, 
        user_email: 'user@nextmail.com'
    },
];

const raids = [
    { 
        id: 'a4f0eaf9-5142-40a0-92e9-143c711d7351', 
        name: 'Icecrown Citadel', 
        size: 25, 
        difficulty: 'HC', 
        group: {
            1: [{class_role_id: 0, spec_id: 0}]
        }
    }
]

module.exports = {
  users,
  char_classes,
  class_talent_specs,
  char_roles,
  class_roles,
  main_roster,
  raids
};
