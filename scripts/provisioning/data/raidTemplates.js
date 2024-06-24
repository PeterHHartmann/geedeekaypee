const { raidVariants } = require('./raidVariants.js')

const raidTemplates = {
    icc25hc: {
        id: '348c5108-ab12-4c29-bc0e-9780d3a4bffd', 
        raid_variant_id: raidVariants.icc.id,
        name: 'Icecrown Citadel 25man Heroic',
        size: 25,
        difficulty: 'HC'
    },
    icc10hc: {
        id: '08177edf-d838-4717-8e0e-3ddf42a2ca57', 
        raid_variant_id: raidVariants.icc.id,
        name: 'Icecrown Citadel 10man Heroic',
        size: 10,
        difficulty: 'HC'
    }
}

module.exports = {
    raidTemplates
}