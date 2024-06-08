const { db } = require('@vercel/postgres');
const {
  users,
  char_classes,
  class_talent_specs,
  char_roles,
  class_roles,
  main_roster,
  raids
} = require('../lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
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

        const insertedCharacterClasses = await Promise.all(
            char_classes.map(async (character_class) => {
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

        const insertedClassTalentSpecs = await Promise.all(
            class_talent_specs.map(async (spec) => {
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

        const insertedCharacterRoles = await Promise.all(
            char_roles.map(async (character_role) => {
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
        
        let allClassRoles = []
        for (const charClass of Object.values(class_roles)){
            for (const role of Object.values(charClass)){
                allClassRoles.push(role)
            }
        }

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
            );
        `
        console.log(`Created "main_roster" table`)

        const insertedCharacters = await Promise.all(
            main_roster.map(async (character) => {
                return client.sql`
                INSERT INTO main_roster (id, name, user_email, class_id, spec_id, role_id)
                VALUES (${character.id}, ${character.name}, ${character.user_email}, ${character.class_id}, ${character.spec_id}, ${character.role_id})
                ON CONFLICT (id) DO NOTHING;
                `
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
                size SMALLINT DEFAULT NULL,
                difficulty VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `;
        console.log(`Created "raids" table`)

        const insertedRaids = await Promise.all(
            raids.map(async (raid) => {
                return client.sql`
                INSERT INTO raids (id, name, size, difficulty)
                VALUES (${raid.id}, ${raid.name}, ${raid.size}, ${raid.difficulty})
                ON CONFLICT (id) DO NOTHING;
                `;
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

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCharacterClasses(client);
  await seedClassTalentSpecs(client);
  await seedCharRoles(client);
  await seedCharClassRoles(client);
  await seedMainRoster(client);
  await seedRaids(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
