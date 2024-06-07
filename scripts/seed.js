const { db } = require('@vercel/postgres');
const {
  users,
  character_classes,
  class_specs,
  character_roles,
  character_class_roles,
  characters
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
        password TEXT NOT NULL
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
            CREATE TABLE IF NOT EXISTS character_classes (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
        `;
        console.log(`Created "character_classes" table`)

        const insertedCharacterClasses = await Promise.all(
            character_classes.map(async (character_class) => {
                return client.sql`
                INSERT INTO character_classes (id, name)
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

async function seedClassSpecs(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS class_specs (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                class_id UUID REFERENCES character_classes (id)
            );`;
        
        console.log(`Created "class_specs" table`)

        const insertedClassSpecs = await Promise.all(
            class_specs.map(async (spec) => {
                return client.sql`
                INSERT INTO class_specs (id, name, class_id)
                VALUES (${spec.id}, ${spec.name}, ${spec.class_id})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedClassSpecs.length} class specs`);
        return {
            createTable,
            classes: insertedClassSpecs
        }
    } catch (error) {
        console.error('Error seeding class specs:', error);
        throw error;
    }
}

async function seedCharacterRoles(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS character_roles (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
        `;
        console.log(`Created "character_roles" table`)

        const insertedCharacterRoles = await Promise.all(
            character_roles.map(async (character_role) => {
                return client.sql`
                INSERT INTO character_roles (id, name)
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

async function seedCharacterClassRoles(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`CREATE TABLE IF NOT EXISTS character_class_roles (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            class_id UUID REFERENCES character_classes (id),
            role_id UUID REFERENCES character_roles (id)
        )`
        console.log(`Created "character_class_roles" table`)
        const insertedCharacterClassRoles = await Promise.all(
            character_class_roles.map(async (character_class_role) => {
                return client.sql`
                    INSERT INTO character_class_roles (id, class_id, role_id)
                    VALUES (${character_class_role.id}, ${character_class_role.class_id}, ${character_class_role.role_id})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        return {
            createTable,
            class_roles: insertedCharacterClassRoles
        }
    } catch (error) {
                console.error('Error seeding character class roles:', error);
        throw error;
    }
}

async function seedCharacters(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS characters (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                user_email VARCHAR(255) REFERENCES users (email),
                class_id UUID REFERENCES character_classes (id),
                spec_id UUID REFERENCES class_specs (id),
                role_id UUID REFERENCES character_roles (id),
                created_at TIMESTAMP DEFAULT current_timestamp
            );
        `
        console.log(`Created "characters" table`)

        const insertedCharacters = await Promise.all(
            characters.map(async (character) => {
                return client.sql`
                INSERT INTO characters (id, name, user_email, class_id, spec_id, role_id)
                VALUES (${character.id}, ${character.name}, ${character.user_email}, ${character.class_id}, ${character.spec_id}, ${character.role_id})
                ON CONFLICT (id) DO NOTHING;
                `
            })
        )

        console.log(`Seeded ${insertedCharacters.length} characters`);

        return {
            createTable,
            characters: insertedCharacters
        }
    } catch (error) {
        console.error('Error seeding roster characters:', error);
        throw error;
    }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCharacterClasses(client);
  await seedClassSpecs(client);
  await seedCharacterRoles(client);
  await seedCharacterClassRoles(client);
  await seedCharacters(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
