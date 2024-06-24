const { db } = require('@vercel/postgres');
const {charClasses} = require('./data/charClasses.js')
const {classTalentSpecs} = require('./data/classTalentSpecs.js')
const {charRoles} = require('./data/charRoles.js')
const {charClassRoles} = require('./data/charClassRoles.js')
const {raidVariants} = require('./data/raidVariants.js')
const {raidTemplates} = require('./data/raidTemplates.js')
const {raidTemplateRosterPositions} = require('./data/raidTemplateRosterPositions.js')
const {raidTemplateAssignments} = require('./data/raidTemplateAssignments.js')

async function CREATE_EXTENSION_uuid_ossp(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    } catch (error) {
        console.log('Error creating "uuid-ossp" extension', error);
        throw error
    }
}

async function CREATE_TABLE_users(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT current_timestamp
      );
    `;

    console.log(`Created "users" table`);
    return {
      createTable
    };
  } catch (error) {
    console.error('Error creating user table:', error);
    throw error;
  }
}

async function CREATE_TABLE_char_classes(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS char_classes (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "char_classes" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating character classes table:', error);
        throw error;
    }
}

async function INSERT_char_classes(client) {
    try {
        const allCharClasses = Array.from(Object.values(charClasses))
        const insertedCharacterClasses = await Promise.all(
            allCharClasses.map(async (character_class) => {
                return client.sql`
                INSERT INTO char_classes (id, name)
                VALUES (${character_class.id}, ${character_class.name})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Inserted ${insertedCharacterClasses.length} character classes`);
        return {
            classes: insertedCharacterClasses
        }
    } catch (error) {
        console.error('Error inserting character classes:', error);
        throw error;
    }
}

async function CREATE_TABLE_class_talent_specs(client){
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS class_talent_specs (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                class_id UUID REFERENCES char_classes (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            );`;
        
        console.log(`Created "class_talent_specs" table`)

        return {
            createTable,
        }
    } catch (error) {
        console.error('Error creating "class_talent_specs" table:', error);
        throw error;
    }
}

async function INSERT_class_talent_specs(client){
    try {
        const allClassTalentSpecs = Object.values(classTalentSpecs).flatMap(classTalentSpec => Object.values(classTalentSpec));
        const insertedClassTalentSpecs = await Promise.all(
            allClassTalentSpecs.map(async (spec) => {
                return client.sql`
                INSERT INTO class_talent_specs (id, name, class_id)
                VALUES (${spec.id}, ${spec.name}, ${spec.class_id})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Inserted ${insertedClassTalentSpecs.length} class talent specs`);
        return {
            specs: insertedClassTalentSpecs
        }
    } catch (error) {
        console.error('Error inserting class talent specs:', error);
        throw error;
    }
}

async function CREATE_TABLE_char_roles(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS char_roles (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "char_roles" table`)
        
        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "character roles" table:', error);
        throw error;
    }
}

async function INSERT_char_roles(client) {
    try {
        const allCharRoles = Array.from(Object.values(charRoles))
        const insertedCharRoles = await Promise.all(
            allCharRoles.map(async (charRole) => {
                return client.sql`
                INSERT INTO char_roles (id, name)
                VALUES (${charRole.id}, ${charRole.name})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Inserted ${insertedCharRoles.length} character roles`);
        return {
            charRoles: insertedCharRoles
        }
    } catch (error) {
        console.error('Error inserting character roles:', error);
        throw error;
    }
}

async function CREATE_TABLE_char_class_roles(client){
    try {
        const createTable = await client.sql
        `CREATE TABLE IF NOT EXISTS char_class_roles (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            class_id UUID REFERENCES char_classes (id),
            role_id UUID REFERENCES char_roles (id),
            created_at TIMESTAMP DEFAULT current_timestamp
        );`
        console.log(`Created "char_class_roles" table`)
        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "char_class_roles" table:', error);
        throw error;
    }
}

async function INSERT_char_class_roles(client){
    try {
        const allCharClassRoles = Object.values(charClassRoles).flatMap(charClass => Object.values(charClass));
        const insertedCharClassRoles = await Promise.all(
            allCharClassRoles.map(async (charClassRole) => {
                return client.sql`
                    INSERT INTO char_class_roles (id, class_id, role_id)
                    VALUES (${charClassRole.id}, ${charClassRole.class_id}, ${charClassRole.role_id})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Inserted ${insertedCharClassRoles.length} character class roles`);

        return {
            class_roles: insertedCharClassRoles
        }
    } catch (error) {
        console.error('Error inserting character class roles:', error);
        throw error;
    }
}

async function CREATE_TABLE_main_roster_chars(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS main_roster_chars (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                user_email VARCHAR(255) REFERENCES users (email),
                class_id UUID REFERENCES char_classes (id),
                spec_id UUID REFERENCES class_talent_specs (id),
                role_id UUID REFERENCES char_roles (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`
        console.log(`Created "main_roster_chars" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "main_roster_chars" table:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_variants(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_variants (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "raid_variants" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "raid_variants" table:', error);
        throw error;
    }
}

async function INSERT_raid_variants(client) {
    try {
        const allRaids = Array.from(Object.values(raidVariants))
        const insertedRaids = await Promise.all(
            allRaids.map(async (raid) => {
                return client.sql`
                INSERT INTO raid_variants (id, name)
                VALUES (${raid.id}, ${raid.name})
                ON CONFLICT (id) DO NOTHING
                ;`;
            }),
        );

        console.log(`Inserted ${insertedRaids.length} raid_variants`);
        return {
            raids: insertedRaids
        }
    } catch (error) {
        console.error('Error inserting raid_variants:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_templates(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_templates (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_variant_id UUID REFERENCES raid_variants (id),
                name VARCHAR(255) NOT NULL,
                size SMALLINT DEFAULT NULL,
                difficulty VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "raid_templates" table`)
        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "raid_templates" table:', error);
        throw error;
    }
}

async function INSERT_raid_templates(client) {
    try {
        const allRaidTemplates = Array.from(Object.values(raidTemplates))
        const insertedRaidTemplates = await Promise.all(
            allRaidTemplates.map(async (template) => {
                return client.sql`
                INSERT INTO raid_templates (id, raid_variant_id, name, size, difficulty)
                VALUES (${template.id}, ${template.raid_variant_id}, ${template.name}, ${template.size}, ${template.difficulty})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedRaidTemplates.length} raid templates`);
        return {
            raids: insertedRaidTemplates
        }
    } catch (error) {
        console.error('Error inserting raid templates:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_template_roster_positions(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_template_roster_positions (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_template_id UUID REFERENCES raid_templates (id),
                position SMALLINT NOT NULL,
                priority SMALLINT NOT NULL,
                class_id UUID REFERENCES char_classes (id),
                role_id UUID REFERENCES char_roles (id),
                spec_id UUID REFERENCES class_talent_specs (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`;
        console.log(`Created "raid_template_positions" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "raid_template_positions" table:', error);
        throw error;
    }
}

async function INSERT_raid_template_roster_positions(client) {
    try {
        const allRaidTemplateRosterPositions = Object.values(raidTemplateRosterPositions)
            .flatMap((raidTemplate) => Object.entries(raidTemplate.rosterPositions)
                .flatMap(([position, priorityList]) => priorityList
                    .map((priority, index) => ({
                        id: priority.id,
                        raid_template_id: raidTemplate.raid_template_id, 
                        position: parseInt(position, 10),
                        priority: index + 1,
                        class_id: priority.class_id,
                        role_id: priority.role_id,
                        spec_id: priority.spec_id
                    }))
                )
            )

        const insertedRaidTemplateRosterPositions = await Promise.all(
            allRaidTemplateRosterPositions.map(async (template_roster_position) => {
                return client.sql`
                INSERT INTO raid_template_roster_positions (id, raid_template_id, position, priority, class_id, role_id, spec_id)
                VALUES (${template_roster_position.id}, ${template_roster_position.raid_template_id}, ${template_roster_position.position}, ${template_roster_position.priority}, ${template_roster_position.class_id}, ${template_roster_position.role_id}, ${template_roster_position.spec_id})
                ON CONFLICT (id) DO NOTHING
                ;`;
            }),
        );

        console.log(`Inserted ${insertedRaidTemplateRosterPositions.length} raid template roster positions`);

        return {
            raid_template_roster_positions: insertedRaidTemplateRosterPositions
        }
    } catch (error) {
        console.error('Error inserting raid template roster positions:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_events(client){
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_events (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_email VARCHAR(255) REFERENCES users (email),
                raid_template_id UUID REFERENCES raid_templates (id),
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                time TIME NOT NULL,
                is_public BOOLEAN,
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`;

        console.log(`Created "raid_events" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "raid_events" table:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_event_roster_chars(client){
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_event_roster_chars (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_event_id UUID REFERENCES raid_events (id) ON DELETE CASCADE,
                position SMALLINT NOT NULL,
                main_roster_id UUID REFERENCES main_roster_chars (id) ON DELETE CASCADE,
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`;
        console.log(`Created "raid_event_roster_chars" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "raid_event_roster_chars" table:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_template_assignments(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_template_assignments (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_template_id UUID REFERENCES raid_templates (id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                assignment_group SMALLINT NOT NULL,
                position SMALLINT NOT NULL,
                priority SMALLINT NOT NULL,
                class_id UUID REFERENCES char_classes (id),
                role_id UUID REFERENCES char_roles (id),
                spec_id UUID REFERENCES class_talent_specs (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            )
            ;`
        console.log(`Created "raid_template_assignments" table`)

        return {
            createTable
        }

    } catch (error) {
                console.error('Error creating "raid_template_assignments" table:', error);
        throw error;
    }
}

async function INSERT_raid_template_assignments(client) {
    try {
        const allRaidTemplateAssignments = Object.values(raidTemplateAssignments)
            .flatMap((raidTemplate) => Object.entries(raidTemplate.assignments)
                .flatMap(([assignmentName, positionsList], groupIndex) => positionsList
                    .flatMap((positionList, positionListIndex) => positionList
                        .map((priority, priorityIndex) => ({
                            id: priority.id,
                            raid_template_id: raidTemplate.raid_template_id, 
                            name: assignmentName,
                            group: groupIndex + 1,
                            position: positionListIndex + 1,
                            priority: priorityIndex + 1,
                            class_id: priority.class_id,
                            role_id: priority.role_id,
                            spec_id: priority.spec_id
                        }))
                    )    
                )
            )

        const insertedRaidTemplateAssignments = await Promise.all(
            allRaidTemplateAssignments.map(async (assignment) => {
                return client.sql`
                    INSERT INTO raid_template_assignments (id, raid_template_id, name, assignment_group, position, priority, class_id, role_id, spec_id)
                    VALUES (${assignment.id}, ${assignment.raid_template_id}, ${assignment.name},  ${assignment.group}, ${assignment.position}, ${assignment.priority}, ${assignment.class_id}, ${assignment.role_id}, ${assignment.spec_id})
                    ON CONFLICT (id) DO NOTHING
                    ;`;
            }),
        );

        console.log(`Inserted ${insertedRaidTemplateAssignments.length} raid template assignments`);
        return {
            raid_template_assignments: insertedRaidTemplateAssignments
        }
    } catch (error) {
        console.error('Error inserting raid template assignments:', error);
        throw error;
    }
}

async function CREATE_TABLE_raid_event_assignements(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_event_assignments (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_event_id UUID REFERENCES raid_events (id) ON DELETE CASCADE,
                position SMALLINT NOT NULL,
                assignment_group SMALLINT NOT NULL,
                raid_roster_id UUID REFERENCES raid_event_roster_chars (id) ON DELETE CASCADE,
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`;
        console.log(`Created "raid_event_assignments" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error creating "raid_event_assignments" table:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await CREATE_EXTENSION_uuid_ossp(client);

    await CREATE_TABLE_users(client);

    await CREATE_TABLE_char_classes(client);
    await INSERT_char_classes(client);

    await CREATE_TABLE_class_talent_specs(client);
    await INSERT_class_talent_specs(client);

    await CREATE_TABLE_char_roles(client);
    await INSERT_char_roles(client);

    await CREATE_TABLE_char_class_roles(client);
    await INSERT_char_class_roles(client);

    await CREATE_TABLE_main_roster_chars(client);

    await CREATE_TABLE_raid_variants(client)
    await INSERT_raid_variants(client);

    await CREATE_TABLE_raid_templates(client);
    await INSERT_raid_templates(client);

    await CREATE_TABLE_raid_template_roster_positions(client);
    await INSERT_raid_template_roster_positions(client);

    await CREATE_TABLE_raid_events(client);

    await CREATE_TABLE_raid_event_roster_chars(client);

    await CREATE_TABLE_raid_template_assignments(client);
    await INSERT_raid_template_assignments(client);

    await CREATE_TABLE_raid_event_assignements(client);

    await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to provision the database:',
    err,
  );
});