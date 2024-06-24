const {raidTemplates} = require('./raidTemplates.js')
const {charClasses } = require('./charClasses.js')
const {charRoles } = require('./charRoles.js')
const {classTalentSpecs} = require('./classTalentSpecs.js')

const raidTemplateAssignments = {
    icc25hc: {
        raid_template_id: raidTemplates.icc25hc.id,
        assignments: {
            'Tank':[
                [
                    {id: '20f6ed9c-813e-48fd-ae1d-982185220033', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '38810711-e37d-4364-9fd8-82451943b8b7', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                ],
                [
                    {id: 'd0480436-3c67-463f-8d56-3c5e0346e060', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                    {id: '5da70e85-4d16-4db0-b6ea-723d6a4d6c1d', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                ]
            ],
            'Tank Healer':[
                [
                    {id: 'ea05374b-fef6-4c50-ab5e-92396efde180', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: '7d69f948-40e5-44f9-8c00-9429061e5c33', class_id: charClasses.shaman.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.shaman.restoration.id},
                ],
                [
                    {id: '176e7274-1171-4076-97c0-423403a0a26c', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: '11264153-1fe9-4f27-a57a-958b35ff24f3', class_id: charClasses.shaman.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.shaman.restoration.id},
                ]
            ],
            'Divine Sacrifice':[
                [
                    {id: '854b8c0d-ea2f-4815-afed-a317397b051c', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                ],
                [
                    {id: 'd3b82eae-1357-40ce-beaa-5cd53b2cf8b4', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: 'b25c27ca-fe36-433c-8e49-f85d415579e2', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: 'd5108755-3237-404a-ad04-52203d8d2a9b', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '6dd7073a-1ab2-4b3b-9b4c-abe2407f7363', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '41f4caf4-5063-48d3-b786-94a940004803', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
            ],
            'Aura Mastery': [
                [
                    {id: '62897b3d-1c4d-4c80-a817-b50ddcdeded8', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                ],
                [
                    {id: '6fd13355-9d42-4f2b-b2a0-fc9bf8dd6b92', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: 'fc0b3525-ed17-4058-99e5-6be53be81dec', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
            ],

            'Soulstone': [
                [
                    {id: '68ef2916-d03e-4d51-8a9f-68c7dfd5ea6b', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
                [
                    {id: '7fc81602-1508-464e-8c5b-797ea93598ff', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
                [
                    {id: '1ed76b07-9060-4601-b1fe-3b0b946d164d', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
                [
                    {id: '5247af34-c854-45d7-bbf7-e23f0b1a29e2', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
                [
                    {id: '74951e40-3b38-4392-b853-68ed7d87ba7a', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
            ],
            'Blessing of Protection': [
                [
                    {id: '18f73795-3eee-46c9-89b9-5be986d9e60c', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '1cdf21e7-f900-4249-b3b6-217b162d9582', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: 'cabb52a6-4ff7-4eb4-8dc2-9b61d8dace0e', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                ],
                [
                    {id: '890ff82c-6159-4e8b-81c2-67983ffd503b', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '751d43b6-1426-468d-84b3-b75a78ea75c2', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: '44771cb9-5103-4532-b293-93278bd61bbc', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                ],
                [
                    {id: 'f4873627-54ec-4bac-a0b0-a5f90d6de1a9', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '7efc713b-d074-4c74-83fe-4a2ef67a9d24', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: '0f57ef40-6e16-4278-a179-4371b4cbe5a3', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                ],
                [
                    {id: '0946b795-191b-4f17-a179-9cb8943fc648', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '52dbde36-a487-41b2-b44d-689e99121bbe', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: 'bdd9c2b0-e8b1-4b3c-8d05-b050d33f71b5', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                ],
                [
                    {id: '334a4204-25a2-404b-ac12-a368d1c873db', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '540d1a82-9ad9-444c-b972-cdc326304704', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                    {id: '85ccfec7-fd67-4110-bfb8-8769d302bd29', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                ]
            ],
            'Divine Intervention': [
                [
                    {id: 'e0255054-d33b-43fb-8349-30fa9392bc9d', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: '83004f7d-e6b7-46b0-a7a0-ebd1f227bbc1', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                ],
                [
                    {id: 'd343b569-0ef9-45fc-a314-a552115813af', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: '944d6ac6-e677-471d-b90c-0a4a2d8ca4eb', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                ],
            ],
            'Beacon of Light': [
                [
                    {id: '0dd5a003-9155-4fa1-a65e-24f4aaf12d81', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '27fbc4e3-8b60-4757-8dde-5d2f01d23bca', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '07a37b97-ae5d-42d2-8c8f-af2f568dcd64', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ]
            ],
            'Hand of Sacrifice': [
                [
                    {id: '8a945431-96df-4a0b-b230-be38933e1687', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '1d02191d-d2df-4a71-9772-95ce70464980', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: 'ffbf0022-1fc8-4582-b284-a91cc519ca89', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '3cf02e06-06ee-4fc9-bbe0-646a0c0dbe3d', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '51b8da96-6b90-4d71-8300-74f3e6bd0c69', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: '4d3abfa4-bd84-4bf8-b31f-bd1b7b942b78', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '9af06512-5d67-4023-8a76-2b75156fede3', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '513ffa68-e1e6-4c5e-9c29-055e5aae511e', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: 'cbcdbd9e-bf05-4330-a807-01b1aec998d6', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '0e8fd911-c43a-4095-9db1-0dd61f62cf56', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: 'a8b1a97f-3d0c-4acb-b12c-33c06f08e5f8', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: '6e55e094-0039-4792-a83d-03a0295b0274', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '583b1eb4-f12b-433b-9479-5e9c1248f99a', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '04b27be2-e97e-45c1-8783-7421992996ce', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: '44e8493b-43a8-44a3-9b3a-d15cfaddc7a5', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ]
            ],
            'Pain Suppression': [
                [
                    {id: '7847ac44-d43f-4337-9f96-aca74cb8bea1', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline.id},
                ]
            ],
            'Divine Hymn': [
                [
                    {id: 'e2919014-2e2a-4ea4-928b-db141c5e115c', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline.id},
                    {id: '08e94ed3-5637-4576-8222-5d3101b010e1', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow.id},
                    {id: '3b430b8f-f213-4e0f-b9aa-9315468018e8', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.holy.id},
                ],
                [
                    {id: '473dfa6a-dbb4-49fb-b986-5e71fe815afc', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline.id},
                    {id: 'b0e1318c-6885-487b-8ef8-2c0cc6e4168f', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow.id},
                    {id: 'ec37dc1b-812f-4136-af45-0a31f61a6f03', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.holy.id},
                ]
            ],
            'Hunter': [
                [
                    {id: 'af103bc7-33c2-4540-9c4a-5701b10b3fe6', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                ]
            ],
            'Crowd Control #1': [
                [
                    {id: 'cba64a6b-0fd6-47fe-836b-474b1c5e4dad', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                    {id: '7eba2304-5e82-47a6-8799-cccfed7172e6', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance.id},
                    {id: 'd8dc87c8-b622-4f75-b1b2-f464fabbeaf0', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration.id},
                ],
                [
                    {id: 'e8df01ba-7152-409b-b8c8-684146863301', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                    {id: '67325cc4-e1ae-414b-8d9c-7edb990d10a2', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance.id},
                    {id: '7ab8b315-bb82-420d-8568-55da0855b729', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration.id},
                ],
                [
                    {id: 'a796f03f-17ab-45dd-91ad-e793f0394f21', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat.id},
                    {id: '5fea6a83-37d6-42de-9529-501c5007141a', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance.id},
                    {id: '744e0acf-b41a-41d1-ba26-5969caf5627e', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration.id},
                ]
            ],
            'Pet Class': [
                [
                    {id: 'fd486335-b6be-46fd-9de5-a2b5a605410c', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                    {id: '871a7fe7-2823-453c-a7a8-ef29901bf46c', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
                [
                    {id: 'f4392466-3300-4556-9b6d-432b5eda8cfa', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                    {id: '18b3ea21-78dc-4a1b-b4f5-b1b17752dd07', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ],
                [
                    {id: '8b1bdedd-0ca3-46b2-99e3-0a62e5090eeb', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                    {id: 'd92f545c-fe6f-417a-b3fd-c253d90c8656', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
                ]
            ],
            'Blood Beast': [
                [
                    {id: 'd9c15bae-0d75-4f35-9061-89d298a47435', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '2864c295-5232-47f3-9ecb-86edb6169022', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: 'c04ca2e6-fc35-474e-a244-697f4a344c0c', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                ],
                [
                    {id: 'ddf1ad23-0a29-4d94-a587-2aea4b2d597f', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: 'ca0733a6-ea51-4ac0-a7d5-d34a38009088', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: 'e3873fd3-3398-4959-aa7d-087242813756', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                ],
                [
                    {id: '3ab93d91-0747-4218-93d1-ad14b1e2718b', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                    {id: 'c48a1950-69bb-4b6d-bc95-9544f14de590', class_id: charClasses.deathknight.id, role_id: charRoles.mdps.id, spec_id: null},
                    {id: '298ae487-4ecb-4c9c-8681-3a3d626f8e87', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: null},
                ],
                [
                    {id: '9ec230ee-943a-474e-971f-22d2930a72f6', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                    {id: '7aeaf74b-5e54-40ab-8354-8b531ab9c774', class_id: null, role_id: charRoles.mdps.id, role_id: charRoles.mdps.id, spec_id: null},
                    {id: 'd5fdf0cb-00d7-4f66-be99-4f502554db6a', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: null},
                ],
                [
                    {id: '3da133e9-7f32-45ea-b329-16fecc2ec9a0', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                    {id: 'ca412cbb-760c-428f-82b7-29de406b4e98', class_id: null, role_id: charRoles.mdps.id, spec_id: null},
                    {id: 'a73ab4ee-296f-4a71-8c51-d61fe09eaaee', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: null},
                ]
            ],
            'Interrupt': [
                [
                    {id: 'fe6c5149-3b92-4fe8-b141-054d8c1a98fb', class_id: charClasses.mage.id, role_id:charRoles.rdps.id, spec_id: null},
                    {id: 'abd1033c-df1e-4dc4-94ef-3c31c550a222', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.shaman.elemental.id},
                    {id: '13405dc5-5c25-4a5d-a67f-6fecb976225f', class_id: charClasses.shaman.id, role_id: null, spec_id: null},
                ],
                [
                    {id: 'd416cae9-4509-409d-bedf-51ae14416748', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: null},
                    {id: 'd102587c-69af-4e42-978f-6818167421a1', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.shaman.elemental.id},
                    {id: '2e44ffdc-6b30-46cf-adc4-ab6fcc542daa', class_id: charClasses.shaman.id, role_id: null, spec_id: null},
                ],
                [
                    {id: '1d9cc4c7-ed39-43a5-8646-c5b4671eb1df', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: null},
                    {id: '948af3e5-4b39-4238-84c1-bc7f88ddfb54', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.shaman.elemental.id},
                    {id: '73a45a61-16a4-4c2e-909c-6f351bee7ca0', class_id: charClasses.shaman.id, role_id: null, spec_id: null},
                ]
            ],
            'Hand of Justice': [
                [
                    {id: '3eb700bc-f257-40e5-a5ba-7af8be8029bb', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: 'd814d729-1dd7-450c-bc64-2641b8a31311', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: 'e51956e5-0510-4621-b745-28754e3d573f', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '13edf5bc-9dc8-4f75-9a68-c9d9c315f3bd', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: 'bf0d9299-38ea-4131-8025-c44e1d3bebdb', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                    {id: '6d83b208-2002-4410-b387-e0b1e22b5bf0', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: '2930764f-7360-46a8-b03a-79406c65d4f5', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: 'f6f6b5fc-1e7f-4aa7-8bf3-3b53e89fdf83', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ],
                [
                    {id: 'f6f6b5fc-1e7f-4aa7-8bf3-3b53e89fdf83', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                    {id: '3aad061e-5b99-42ae-9c38-610afbcc7b0c', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                ]
            ]
        }
    }
}

module.exports = {
    raidTemplateAssignments
}