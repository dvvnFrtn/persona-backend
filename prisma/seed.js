const db = require("../src/db/prisma.db");
const jsonData = require("../src/db/data.json");

async function upsertMember(member) {
  try {
    const user1 = await db.prisma.member.upsert({
      where: { name: member.name },
      update: {},
      create: {
        name: member.name,
        age: member.age,
        role: member.role,
        about: member.about,
        picture: member.picture,
        githubLink: member.githubLink,
        instaLink: member.instaLink,
        teleLink: member.teleLink,
        linkedinLink: member.linkedinLink,
        skills: {
          create: member.skills.map(skill => ({
            skill: {
              connectOrCreate: {
                where: { name: skill },
                create: { name: skill }
              }
            }
          }))
        },
        interest: {
          create: member.interests.map(interest => ({
            interest: {
              connectOrCreate: {
                where: { name: interest },
                create: { name: interest }
              }
            }
          }))
        }
      }
    });
    return user1;
  } catch (error) {
    // Retry logic
    if (error.code === 'P2034') {
      console.log('Retrying due to write conflict or deadlock...');
      // You can add some delay here if needed
      return await upsertMember(member);
    } else {
      throw error; // Re-throw if it's not a write conflict or deadlock
    }
  }
}

async function main() {
  for (const member of jsonData) {
    await upsertMember(member);
  }
}

main()
  .then(() => {
    console.log('All members processed successfully.');
    process.exit(0); // Exit the process after successful execution
  })
  .catch(error => {
    console.error('Error processing members:', error);
    process.exit(1); // Exit the process with error code 1 in case of failure
  });
  