const {raidTemplates} = require('./raidTemplates.js')
const {charClasses } = require('./charClasses.js')
const {charRoles } = require('./charRoles.js')
const {classTalentSpecs} = require('./classTalentSpecs.js')

const raidTemplateRosterPositions = {
    icc25hc: {
        raid_template_id: raidTemplates.icc25hc.id,
        rosterPositions: {
            1: [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
            ],
            2: [
                {id: '2b4802fb-65c1-4927-9dd4-3e3808b70545', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                {id: 'd6f14920-0891-4b51-893e-f5750509af5b', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
            ],
            3: [
                {id: '27d627ab-156c-4389-9825-c78d0c1f1837', class_id: charClasses.deathknight.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.deathknight.unholy.id},
                {id: '2ea07625-ffb6-4592-9381-11d3142ff458', class_id: charClasses.deathknight.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.deathknight.frost.id},
            ],
            4: [
                {id: '5267ceb1-3539-49d8-96d6-db60c8afcb2e', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            5: [
                {id: '4477e5a4-6206-4df7-b5be-8cb49723d581', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            6: [
                {id: '9b053dbe-3f44-4b71-9552-b064b9023bce', class_id: charClasses.warrior.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.warrior.fury.id},
                {id: '54d0a55d-c83c-42c8-846b-e3f3edbb6834', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                {id: '18637105-2b67-45e8-953d-c582c54f1839', class_id: charClasses.shaman.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.shaman.enhancement.id},
                {id: '962b7dbe-e721-48c0-853f-dc87188b450e', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.hunter.marksmanship.id},
                {id: '083b1c98-2953-4849-bccc-4523307ec235', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.rogue.combat.id},
            ],
            7: [
                {id: '5e865582-a3fb-4d40-a8a6-22ca61434412', class_id: charClasses.warrior.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.warrior.fury.id},
                {id: '8ff447c7-9cae-4c35-9322-bf264d50c3da', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                {id: 'aa172dfc-8702-4e09-9aa0-77b6fb7a52f3', class_id: charClasses.shaman.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.shaman.enhancement.id},
                {id: '066f8723-e65e-4ee6-8765-4a4e2dd2e673', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.hunter.marksmanship.id},
                {id: 'e556def8-fe2f-45f3-98a3-871136851f9a', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.rogue.combat.id},
            ],
            8: [
                {id: '69ee5f62-f348-496e-85e9-210d3a7997b8', class_id: charClasses.warrior.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.warrior.fury.id},
                {id: '6a009783-964e-4c73-a6c1-8503054b3ce8', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                {id: '2ca532cd-37a4-45a5-941a-0a7a62b3023c', class_id: charClasses.shaman.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.shaman.enhancement.id},
                {id: 'eca6f265-5a44-4a66-b6f7-01e5b61c31eb', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.hunter.marksmanship.id},
                {id: 'ac02fee6-89de-4ac9-a0ea-9cf299d2dbd3', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.rogue.combat.id},
            ],
            9: [
                {id: '5f6bc972-8d04-4cf7-8754-886b3b87e448', class_id: charClasses.warrior.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.warrior.fury.id},
                {id: '1dac8a36-3ce3-41d2-980b-48075e92a257', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                {id: 'bd4d841f-d953-432b-9be3-3155409d3b9a', class_id: charClasses.shaman.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.shaman.enhancement.id},
                {id: 'd553ea58-6d49-4acd-8938-35c9c46f7caa', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.hunter.marksmanship.id},
                {id: '03af507f-6d81-4443-bb36-388fa36bbb3d', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.rogue.combat.id},
            ],
            10: [
                {id: 'f36d6586-da34-4969-ac6b-7282ce2e032b', class_id: charClasses.warrior.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.warrior.fury.id},
                {id: '4205177b-81e5-497d-b9ac-9b47e75c7430', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                {id: 'a3bc7210-bd2f-4add-8a15-f7cfef2d7f39', class_id: charClasses.shaman.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.shaman.enhancement.id},
                {id: 'c583990c-195f-47e7-a4b9-a1a6e97614ab', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.hunter.marksmanship.id},
                {id: '57160510-484b-4f2c-a4b2-ac8d593a9745', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.rogue.combat.id},
            ],
            11: [
                {id: '2f0f8917-2b27-45a6-98bf-d82fb33ac279', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.rogue.combat.id},
                {id: '410894f1-217f-480d-b67d-4ebf7f86242d', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow.id},
                {id: 'b81e2cdb-7956-407a-bff9-c6dd29bd3205', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.demonology.id},
            ],
            12: [
                {id: '9ed38c14-44ee-404d-8c8c-99ab4fea112e', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow.id},
                {id: '66371a53-c31b-4393-bda5-2c68ae1aa3aa', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.mage.fire.id},
            ],
            13: [
                {id: 'f9a17e77-a480-488c-91dc-70f4f06a426d', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.mage.fire.id},
            ],
            14: [
                {id: '74613cc4-8f4b-4f23-ad8e-bf28650648e9', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.mage.fire.id},
            ],
            15: [
                {id: 'a03e5292-2da4-404e-b205-4d0932a586a8', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.demonology.id},
            ],
            16: [
                {id: 'beb98c93-cef7-4a71-beec-2369b8f99c87', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow.id},
                {id: '81164a13-24e9-4ec3-b2d5-8ef004ac33b9', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance.id},
            ],
            17: [
                {id: 'ff0835e2-faea-443e-842c-c65b3956ccf6', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance.id},
                {id: 'e7fd9fd2-5eb1-4a16-afa4-908873ada8c2', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow.id},
            ],
            18: [
                {id: 'aaf57817-4558-435e-919d-b0ee92d17017', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.affliction.id},
                {id: '34ce9693-c2df-48ba-990a-c60f316fffdd', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.demonology.id},
            ],
            19: [
                {id: '44eef1de-6b55-4e43-86b2-1fd639836310', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.demonology.id},
                {id: '1ddd9ccc-753b-439b-8766-a5dfef20138e', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.affliction.id},
            ],
            20: [
                {id: '742bd0c6-b676-4c93-aa40-55c6d282623c', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.demonology.id},
                {id: '65f9b0bf-7946-43c1-8575-4f0984dc0890', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.warlock.affliction.id},
            ],
            21: [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            22: [
                {id: '2a2a68b3-a47a-47a9-bf6d-28c6155c367b', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            23: [
                {id: '49e71594-c8f0-4699-a39c-e291961e89e8', class_id: charClasses.shaman.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.shaman.restoration.id},
            ],
            24: [
                {id: '810b6f77-31bf-47be-864a-f116a4a2ff17', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline.id},
            ],
            25: [
                {id: 'ec60d86d-845b-46f7-b8b1-4bda10cb45d7', class_id: charClasses.shaman.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.shaman.restoration.id},
                {id: 'd2d244a3-8f57-421b-9f33-10948d79f92d', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration.id},
                {id: 'daacd4b9-5433-444d-98a2-f99aa0d1004d', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.holy.id},
            ]
        }
    },
    icc10hc: {
        raid_template_id: raidTemplates.icc10hc.id,
        rosterPositions: {
            1: [
                {id: 'adc58138-eed5-4a9b-a5d4-672dc6b788fa', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                {id: '28f5af45-4b16-4f29-a62f-465aa0c5f103', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
            ],
            2: [
                {id: 'ad69ffa5-1be1-446b-8857-b716d8385844', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '2fc91b7f-4f73-46ad-9617-d3f124768fe1', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
            ]
       }
    } 
}

module.exports = {
    raidTemplateRosterPositions
}