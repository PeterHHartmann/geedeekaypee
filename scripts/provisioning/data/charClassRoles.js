const { charClasses } = require('./charClasses')
const { charRoles } = require('./charRoles')

const charClassRoles = {
    deathknight: {
        tank: { id: 'f83662ad-758c-46c7-a58d-b978542b5ea3', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id },
        mdps: { id: '85f3c9c7-ec65-45a5-8020-642609f88c36', class_id: charClasses.deathknight.id, role_id: charRoles.mdps.id }
    },
    druid: {
        tank: { id: '593f11db-9640-4f83-b8b3-7908b4bba82a', class_id: charClasses.druid.id, role_id: charRoles.tank.id },
        heal: { id: 'b01d7bfc-cfd1-4835-934f-7aa6eec6e6a7', class_id: charClasses.druid.id, role_id: charRoles.heal.id },
        mdps: { id: '86bcdfb6-6732-4f54-852b-4e7d8f4c8be0', class_id: charClasses.druid.id, role_id: charRoles.mdps.id },
        rdps: { id: '1c253595-c8ae-4c23-9643-98bb309f8dd4', class_id: charClasses.druid.id, role_id: charRoles.rdps.id }
    },
    hunter: {
        rdps: { id: '9d1069ad-d810-416c-abb1-2fae25459236', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id }
    },
    mage: {
        rdps: { id: '66bcd9c1-9cf5-4ee1-9f07-af64d8d186b6', class_id: charClasses.mage.id, role_id: charRoles.rdps.id }
    },
    paladin: {
        tank: { id: '36694c96-33ff-4766-a746-e9d63b62f86b', class_id: charClasses.paladin.id, role_id: charRoles.tank.id },
        heal: { id: 'ec470a37-2de9-4a5f-bf4f-1d9306ee511c', class_id: charClasses.paladin.id, role_id: charRoles.heal.id },
        mdps: { id: 'ae7409e7-8fd0-4266-916a-9966c02719b5', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id }
    },
    priest: {
        heal: { id: 'ddd8a59c-0263-44ef-8ff9-60811ef7fdc7', class_id: charClasses.priest.id, role_id: charRoles.heal.id },
        rdps: { id: '29f492f6-c29a-43a4-ad44-0bf32e607b8e', class_id: charClasses.priest.id, role_id: charRoles.rdps.id },
    },
    rogue: {
        mdps: { id: 'e88211e3-659e-4d33-8514-859debc5db6a', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id },
    },
    shaman: {
        heal: { id: 'ff268859-3764-404a-9ab1-b3507c91ba8a', class_id: charClasses.shaman.id, role_id: charRoles.heal.id },
        mdps: { id: 'd24df474-a5a1-4815-b63f-eee22ac06977', class_id: charClasses.shaman.id, role_id: charRoles.mdps.id },
        rdps: { id: '8d0dc518-0c0d-4b1c-af50-a3c0b006930e', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id },
    },
    warlock: {
        rdps: { id: 'afa11f70-dbab-4c50-b735-215ff27d32f1', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id },
    },
    warrior: {
        tank: { id: '031430e4-6cfc-4970-a67f-7f2c0926e2d2', class_id: charClasses.warrior.id, role_id: charRoles.tank.id },
        mdps: { id: '6d267b4e-24a8-435f-abef-6f523657d658', class_id: charClasses.warrior.id, role_id: charRoles.mdps.id },
    }
}

module.exports = {
    charClassRoles
}