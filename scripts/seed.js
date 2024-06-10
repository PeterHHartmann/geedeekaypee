const { db } = require('@vercel/postgres');
const {
  users,
  char_classes,
  class_talent_specs,
  char_roles,
  class_roles,
  main_roster,
  raids,
  raid_templates,
  raids_template_positions
} = require('../lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
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

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedCharacterClasses(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS char_classes (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "char_classes" table`)

        const allCharClasses = Array.from(Object.values(char_classes))
        const insertedCharacterClasses = await Promise.all(
            allCharClasses.map(async (character_class) => {
                return client.sql`
                INSERT INTO char_classes (id, name)
                VALUES (${character_class.id}, ${character_class.name})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedCharacterClasses.length} character classes`);
        return {
            createTable,
            classes: insertedCharacterClasses
        }
    } catch (error) {
        console.error('Error seeding character classes:', error);
        throw error;
    }
}

async function seedClassTalentSpecs(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS class_talent_specs (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                class_id UUID REFERENCES char_classes (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            );`;
        
        console.log(`Created "class_talent_specs" table`)

        const allClassTalentSpecs = Object.values(class_talent_specs).flatMap(classTalentSpec => Object.values(classTalentSpec));
        const insertedClassTalentSpecs = await Promise.all(
            allClassTalentSpecs.map(async (spec) => {
                return client.sql`
                INSERT INTO class_talent_specs (id, name, class_id)
                VALUES (${spec.id}, ${spec.name}, ${spec.class_id})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedClassTalentSpecs.length} class talent specs`);
        return {
            createTable,
            specs: insertedClassTalentSpecs
        }
    } catch (error) {
        console.error('Error seeding class specs:', error);
        throw error;
    }
}

async function seedCharRoles(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS char_roles (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;

        
        console.log(`Created "char_roles" table`)
        
        const allCharRoles = Array.from(Object.values(char_roles))
        const insertedCharacterRoles = await Promise.all(
            allCharRoles.map(async (character_role) => {
                return client.sql`
                INSERT INTO char_roles (id, name)
                VALUES (${character_role.id}, ${character_role.name})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedCharacterRoles.length} character roles`);
        return {
            createTable,
            roles: insertedCharacterRoles
        }
    } catch (error) {
        console.error('Error seeding character roles:', error);
        throw error;
    }
}

async function seedCharClassRoles(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql
        `CREATE TABLE IF NOT EXISTS char_class_roles (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            class_id UUID REFERENCES char_classes (id),
            role_id UUID REFERENCES char_roles (id),
            created_at TIMESTAMP DEFAULT current_timestamp
        );`
        console.log(`Created "char_class_roles" table`)

        const allClassRoles = Object.values(class_roles).flatMap(charClass => Object.values(charClass));
        const insertedClassRoles = await Promise.all(
            allClassRoles.map(async (character_class_role) => {
                return client.sql`
                    INSERT INTO char_class_roles (id, class_id, role_id)
                    VALUES (${character_class_role.id}, ${character_class_role.class_id}, ${character_class_role.role_id})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        return {
            createTable,
            class_roles: insertedClassRoles
        }
    } catch (error) {
                console.error('Error seeding character class roles:', error);
        throw error;
    }
}

async function seedMainRoster(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS main_roster (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                user_email VARCHAR(255) REFERENCES users (email),
                class_id UUID REFERENCES char_classes (id),
                spec_id UUID REFERENCES class_talent_specs (id),
                role_id UUID REFERENCES char_roles (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`
        console.log(`Created "main_roster" table`)

        const insertedCharacters = await Promise.all(
            main_roster.map(async (character) => {
                return client.sql`
                INSERT INTO main_roster (id, name, user_email, class_id, spec_id, role_id)
                VALUES (${character.id}, ${character.name}, ${character.user_email}, ${character.class_id}, ${character.spec_id}, ${character.role_id})
                ON CONFLICT (id) DO NOTHING
                ;`
            })
        )

        console.log(`Seeded ${insertedCharacters.length} main_roster`);

        return {
            createTable,
            main_roster: insertedCharacters
        }
    } catch (error) {
        console.error('Error seeding roster main_roster:', error);
        throw error;
    }
}

async function seedRaids(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raids (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "raids" table`)

        const allRaids = Array.from(Object.values(raids))
        const insertedRaids = await Promise.all(
            allRaids.map(async (raid) => {
                return client.sql`
                INSERT INTO raids (id, name)
                VALUES (${raid.id}, ${raid.name})
                ON CONFLICT (id) DO NOTHING
                ;`;
            }),
        );

        console.log(`Seeded ${insertedRaids.length} raids`);
        return {
            createTable,
            raids: insertedRaids
        }
    } catch (error) {
        console.error('Error seeding raids:', error);
        throw error;
    }
}

async function seedRaidTemplates(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_templates (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_id UUID REFERENCES raids (id),
                name VARCHAR(255) NOT NULL,
                size SMALLINT DEFAULT NULL,
                difficulty VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "raid_templates" table`)

        const allRaidTemplates = Array.from(Object.values(raid_templates))

        const insertedRaidTemplates = await Promise.all(
            allRaidTemplates.map(async (template) => {
                return client.sql`
                INSERT INTO raid_templates (id, raid_id, name, size, difficulty)
                VALUES (${template.id}, ${template.raid_id}, ${template.name}, ${template.size}, ${template.difficulty})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedRaidTemplates.length} raid templates`);
        return {
            createTable,
            raids: insertedRaidTemplates
        }
    } catch (error) {
        console.error('Error seeding raid templates:', error);
        throw error;
    }
}

async function seedRaidTemplateRosterPositions(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_template_positions (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                template_id UUID REFERENCES raid_templates (id),
                position SMALLINT NOT NULL,
                priority SMALLINT NOT NULL,
                class_id UUID REFERENCES char_classes (id),
                role_id UUID REFERENCES char_roles (id),
                spec_id UUID REFERENCES class_talent_specs (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`;
        console.log(`Created "raid_template_positions" table`)

        const allRaidTemplatePositions = Object.values(raids_template_positions)
            .flatMap((template) => Object.entries(template.positions)
                .flatMap(([key, value]) => value
                    .map((prio, index) => ({
                        id: prio.id,
                        template_id: template.template_id, 
                        position: parseInt(key, 10),
                        priority: index + 1,
                        class_id: prio.class_role.class_id,
                        role_id: prio.class_role.role_id,
                        spec_id: prio.spec_id
                    }))
                )
            )

        const insertedRaidTemplatePositions = await Promise.all(
            allRaidTemplatePositions.map(async (template_position) => {
                return client.sql`
                INSERT INTO raid_template_positions (id, template_id, position, priority, class_id, role_id, spec_id)
                VALUES (${template_position.id}, ${template_position.template_id}, ${template_position.position}, ${template_position.priority}, ${template_position.class_id}, ${template_position.role_id}, ${template_position.spec_id})
                ON CONFLICT (id) DO NOTHING
                ;`;
            }),
        );

        console.log(`Seeded ${insertedRaidTemplatePositions.length} raid template positions`);

        return {
            createTable,
            raids: insertedRaidTemplatePositions
        }
    } catch (error) {
        console.error('Error seeding template positions:', error);
        throw error;
    }
}

async function seedRaidEvents(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_events (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_email VARCHAR(255) REFERENCES users (email),
                template_id UUID REFERENCES raid_templates (id),
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
        console.error('Error seeding raid_events:', error);
        throw error;
    }
}

async function seedRaidEventRoster(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS raid_event_rosters (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                raid_event_id UUID REFERENCES raid_events (id) ON DELETE CASCADE,
                position SMALLINT NOT NULL,
                main_roster_id UUID REFERENCES main_roster (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            )
        ;`;
        console.log(`Created "raid_event_roster" table`)

        return {
            createTable
        }
    } catch (error) {
        console.error('Error seeding raid_event_rosters:', error);
        throw error;
    }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCharacterClasses(client);
  await seedClassTalentSpecs(client);
  await seedCharRoles(client);
  await seedCharClassRoles(client);
  await seedMainRoster(client);
  await seedRaids(client);
  await seedRaidTemplates(client);
  await seedRaidTemplateRosterPositions(client)
  await seedRaidEvents(client)
  await seedRaidEventRoster(client)

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
