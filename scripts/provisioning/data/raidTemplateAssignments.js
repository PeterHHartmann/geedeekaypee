const {raidTemplates} = require('./raidTemplates.js')
const {charClasses } = require('./charClasses.js')
const {charRoles } = require('./charRoles.js')
const {classTalentSpecs} = require('./classTalentSpecs.js')

const raidTemplateAssignments = {
    icc25hc: {
        template_id: raidTemplates.icc25hc.id,
        assignments: {
            'Tank #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
            ],
            'Tank #2': [
                {id: '2b4802fb-65c1-4927-9dd4-3e3808b70545', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                {id: 'd6f14920-0891-4b51-893e-f5750509af5b', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
            ],
            'Tank Healer #1': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: 'ec60d86d-845b-46f7-b8b1-4bda10cb45d7', class_id: charClasses.shaman.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.shaman.restoration.id},
            ],
            'Tank Healer #2': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: 'ec60d86d-845b-46f7-b8b1-4bda10cb45d7', class_id: charClasses.shaman.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.shaman.restoration.id},
            ],
            'Divine Sacrifice #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
            ],
            'Divine Sacrifice #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Divine Sacrifice #3': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Divine Sacrifice #4': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Divine Sacrifice #5': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Aura Mastery #1': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            'Aura Mastery #2': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Aura Mastery #3': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Soulstone #1': [
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Soulstone #2': [
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Soulstone #3': [
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Soulstone #4': [
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Soulstone #5': [
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Blessing of Protection #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            'Blessing of Protection #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            'Blessing of Protection #3': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            'Blessing of Protection #4': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            'Blessing of Protection #5': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
            ],
            'Divine Intervention #1': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
            ],
            'Divine Intervention #2': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
            ],
            'Beacon of Light #1': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Beacon of Light #2': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Beacon of Light #3': [
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Sacrifice #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Sacrifice #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Sacrifice #3': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Sacrifice #4': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Sacrifice #5': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Pain Suppression': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline},
            ],
            'Divine Hymn #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.holy},
            ],
            'Divine Hymn #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.discipline},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.priest.shadow},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.priest.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.priest.holy},
            ],
            'Hunter': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Crowd Control #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration},
            ],
            'Crowd Control #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration},
            ],
            'Crowd Control #3': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.druid.feralcat},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.druid.balance},
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.druid.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.druid.restoration},
            ],
            'Pet Class #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Pet Class #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Pet Class #3': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.hunter.id, role_id: charRoles.rdps.id, spec_id: null},
                {id: '8bd22948-7a80-463f-8c3e-0d76569cc526', class_id: charClasses.warlock.id, role_id: charRoles.rdps.id, spec_id: null},
            ],
            'Blood Beast #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
            ],
            'Blood Beast #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
            ],
            'Blood Beast #3': [
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.mdps.id, spec_id: null},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: null},
            ],
            'Blood Beast #4': [
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: null, role_id: charRoles.mdps.id, role_id: charRoles.mdps.id, spec_id: null},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: null},
            ],
            'Blood Beast #5': [
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.deathknight.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.deathknight.blood.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: null, role_id: charRoles.mdps.id, spec_id: null},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.rogue.id, role_id: charRoles.mdps.id, spec_id: null},
            ],
            'Interrupt #1': [
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.mage.id, role_id:charRoles.rdps.id, spec_id: null},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.shaman.elemental.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.shaman.id, role_id: null, spec_id: null},
            ],
            'Interrupt #2': [
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: null},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.shaman.elemental.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.shaman.id, role_id: null, spec_id: null},
            ],
            'Interrupt #3': [
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.mage.id, role_id: charRoles.rdps.id, spec_id: null},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.shaman.id, role_id: charRoles.rdps.id, spec_id: classTalentSpecs.shaman.elemental.id},
                {id: '87a47863-2f32-40ed-8ed9-80f3b5bd13d2', class_id: charClasses.shaman.id, role_id: null, spec_id: null},
            ],
            'Hand of Justice #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Justice #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Justice #3': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.tank.id, spec_id: classTalentSpecs.paladin.protection.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Freedom #1': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
            'Hand of Freedom #2': [
                {id: '3abd86c7-d5ae-4bb5-a46f-116fa1b6f305', class_id: charClasses.paladin.id, role_id: charRoles.mdps.id, spec_id: classTalentSpecs.paladin.retribution.id},
                {id: '9472aadc-38bc-4149-9afa-6c9f031b0772', class_id: charClasses.paladin.id, role_id: charRoles.heal.id, spec_id: classTalentSpecs.paladin.holy.id},
            ],
        }
    }
}

module.exports = {
    raidTemplateAssignments
}