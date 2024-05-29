// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const character_classes = [
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

const character_roles = [
    { id: 'd7a0dddc-dd3c-46ef-8071-a71cf211d068', name: 'Tank'},
    { id: '2a44044c-e707-4d8c-b587-54f4e2e421df', name: 'Healer'},
    { id: '59facb3d-2db0-4f0f-9282-c71d007fb569', name: 'Dps'},
]

const character_class_roles = [
    { id: 'f83662ad-758c-46c7-a58d-b978542b5ea3', class_id: character_classes[0].id, role_id: character_roles[0].id },
    { id: '85f3c9c7-ec65-45a5-8020-642609f88c36', class_id: character_classes[0].id, role_id: character_roles[2].id },
    { id: '593f11db-9640-4f83-b8b3-7908b4bba82a', class_id: character_classes[1].id, role_id: character_roles[0].id },
    { id: 'b01d7bfc-cfd1-4835-934f-7aa6eec6e6a7', class_id: character_classes[1].id, role_id: character_roles[1].id },
    { id: '86bcdfb6-6732-4f54-852b-4e7d8f4c8be0', class_id: character_classes[1].id, role_id: character_roles[2].id },
    { id: '9d1069ad-d810-416c-abb1-2fae25459236', class_id: character_classes[2].id, role_id: character_roles[2].id },
    { id: '66bcd9c1-9cf5-4ee1-9f07-af64d8d186b6', class_id: character_classes[3].id, role_id: character_roles[2].id },
    { id: '36694c96-33ff-4766-a746-e9d63b62f86b', class_id: character_classes[4].id, role_id: character_roles[0].id },
    { id: 'ec470a37-2de9-4a5f-bf4f-1d9306ee511c', class_id: character_classes[4].id, role_id: character_roles[1].id },
    { id: 'ae7409e7-8fd0-4266-916a-9966c02719b5', class_id: character_classes[4].id, role_id: character_roles[2].id },
    { id: 'ddd8a59c-0263-44ef-8ff9-60811ef7fdc7', class_id: character_classes[5].id, role_id: character_roles[1].id },
    { id: '29f492f6-c29a-43a4-ad44-0bf32e607b8e', class_id: character_classes[5].id, role_id: character_roles[2].id },
    { id: 'e88211e3-659e-4d33-8514-859debc5db6a', class_id: character_classes[6].id, role_id: character_roles[2].id },
    { id: 'ff268859-3764-404a-9ab1-b3507c91ba8a', class_id: character_classes[7].id, role_id: character_roles[1].id },
    { id: '8d0dc518-0c0d-4b1c-af50-a3c0b006930e', class_id: character_classes[7].id, role_id: character_roles[2].id },
    { id: 'afa11f70-dbab-4c50-b735-215ff27d32f1', class_id: character_classes[8].id, role_id: character_roles[2].id },
    { id: '031430e4-6cfc-4970-a67f-7f2c0926e2d2', class_id: character_classes[9].id, role_id: character_roles[0].id },
    { id: '6d267b4e-24a8-435f-abef-6f523657d658', class_id: character_classes[9].id, role_id: character_roles[2].id },
]

const characters = [
    { 
        id: 'e76707d7-57c7-469c-933f-118a50eb17b8', 
        name: 'Thaldrion', 
        class_id: character_classes[4].id, 
        role_id: character_roles[0].id, 
        user_email: 'user@nextmail.com'},
    { 
        id: 'ccd1f7cb-d0de-4530-81fc-d48ff610658b', 
        name: 'Zarathor', 
        class_id: character_classes[0].id, 
        role_id: character_roles[0].id, 
        user_email: 'user@nextmail.com' 
    },
    { 
        id: '282cfb5f-f20a-4f2b-8ad0-e89b965ef7ac', 
        name: 'Elunara', 
        class_id: character_classes[5].id, 
        role_id: character_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '53fbd70b-556a-452b-b704-38efbdb792b8', 
        name: 'Grommashar', 
        class_id: character_classes[7].id, 
        role_id: character_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'acfc1c49-9a14-42f6-9e38-1599d060b98a', 
        name: 'Sylverwind', 
        class_id: character_classes[4].id, 
        role_id: character_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '8257599e-a08a-4af6-bf25-c9f6c40d6c64', 
        name: 'Danathos', 
        class_id: character_classes[4].id, 
        role_id: character_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'e5065a59-3f49-4e44-97f4-fb519ce4f693', 
        name: 'Vyraeth', 
        class_id: character_classes[5].id, 
        role_id: character_roles[1].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6c6c031a-424a-43ae-a513-3bc36ff1046a', 
        name: 'Morningshade', 
        class_id: character_classes[8].id, 
        role_id: character_roles[2].id,
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'ab9ad49e-da66-4b86-bc80-4f5f3c23ca74', 
        name: 'Korgarok', 
        class_id: character_classes[9].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'},
    { 
        id: '0fbc5ccf-fc4f-41e6-b1ee-fae2274c78c6', 
        name: 'Nyxalis', 
        class_id: character_classes[0].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'b6095d64-40b4-4d0b-adad-d1a56836aed9', 
        name: 'Aetherion', 
        class_id: character_classes[3].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'b9a8cf83-cb1b-4ea6-b9d0-04ca4c59387b', 
        name: 'Drakkos', 
        class_id: character_classes[6].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '9c92fc28-0851-4237-8544-52440791b607', 
        name: 'Felblade', 
        class_id: character_classes[7].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'c64b2201-ab5e-4539-ab8c-1d45a8568064', 
        name: 'Lyriax', 
        class_id: character_classes[9].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '3715d140-b44e-4cad-94b9-06dde12ef0b1', 
        name: 'Zenkaris', 
        class_id: character_classes[2].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'f4b9a2ae-f44c-4951-96a0-9a8e79ac64c3', 
        name: 'Ashenfury', 
        class_id: character_classes[0].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '7f6782e7-0400-40ad-94ea-4a7f6fa01d75', 
        name: 'Vesperine', 
        class_id: character_classes[1].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6b7c989b-cb7a-4277-87b0-7a96c16773b8', 
        name: 'Kaltharion', 
        class_id: character_classes[3].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '0ffa8c38-dfb5-4f54-8e63-0a5ce78c453c', 
        name: 'Miravelle', 
        class_id: character_classes[6].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '6b77e472-cff3-4eb5-a900-69b10f013cfd', 
        name: 'Stormrune', 
        class_id: character_classes[2].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'b84428ef-a1b9-4d19-b156-e5cc49e0ae7d', 
        name: 'Thundrax', 
        class_id: character_classes[1].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '1e6af78e-d00e-40aa-a8a0-aa0f482820ad', 
        name: 'Nightwarden', 
        class_id: character_classes[3].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: 'a87aaf01-4557-4469-a4e2-01b9f76e0d22', 
        name: 'Frostbane', 
        class_id: character_classes[8].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '184516f6-b85f-405d-9cdc-7c18d95369a3', 
        name: 'Lunarae', 
        class_id: character_classes[6].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
    { 
        id: '22c6fc11-6f17-438a-af48-eed0edf71777', 
        name: 'Grymshadow', 
        class_id: character_classes[4].id, 
        role_id: character_roles[2].id, 
        user_email: 'user@nextmail.com'
    },
];

module.exports = {
  users,
  character_classes,
  character_roles,
  character_class_roles,
  characters
};
