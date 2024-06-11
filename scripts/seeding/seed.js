const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const { users } = require('./placeholder-data/users.js')
const { mainRosters } = require('./placeholder-data/mainRosters.js')

async function INSERT_users(client) {
  try {
    const allUsers = Object.values(users)
    const insertedUsers = await Promise.all(
      allUsers.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING
      ;`;
      }),
    );

    console.log(`Inserted ${insertedUsers.length} users`);

    return {
      users: insertedUsers
    };
  } catch (error) {
    console.error('Error inserting users:', error);
    throw error;
  }
}

async function INSERT_main_roster_chars(client) {
    try {
        const allCharacters = Array.from(Object.entries(mainRosters)
            .flatMap(([user_email, characters]) => characters
                .flatMap((character) => 
                    ({
                        ...character,
                        user_email: user_email
                    })
                )
            ))
        
        const insertedMainRosterCharacters = await Promise.all(
            allCharacters.map(async (character) => {
                return client.sql`
                INSERT INTO main_roster_chars (id, name, user_email, class_id, spec_id, role_id)
                VALUES (${character.id}, ${character.name}, ${character.user_email}, ${character.class_id}, ${character.spec_id}, ${character.role_id})
                ON CONFLICT (id) DO NOTHING
                ;`
            })
        )

        console.log(`Inserted ${insertedMainRosterCharacters.length} main roster characters`);

        return {
            characters: insertedMainRosterCharacters,
        }
    } catch (error) {
        console.error('Error inserting mainroster chararacters:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await INSERT_users(client);

    await INSERT_main_roster_chars(client);

    await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to provision the database:',
    err,
  );
});