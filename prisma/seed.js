const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.member.upsert({
    where: { name: "Rizki Fajar" },
    update: {},
    create: {
      name: "Rizki Fajar",
      age: 19,
      role: "Backend-Dev",
      about:
        "Hello, I'm a technology enthusiast and a current undergraduate student majoring in Information Technology. My passion lies in backend development, where I enjoy unraveling the complexities of technology and continuously learning new concepts and technologies.",
      picture: "rizki.png",
      githubLink: "https://github.com/dvvnFrtn",
      instaLink: "https://www.instagram.com/rzkifj_/",
      teleLink: "t.me/rzkiifj",
      linkedinLink: "https://www.linkedin.com/in/rizkifj/",
      skills: {
        create: [
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "golang",
                },
                create: {
                  name: "golang",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "laravel",
                },
                create: {
                  name: "laravel",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "nodejs",
                },
                create: {
                  name: "nodejs",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "docker",
                },
                create: {
                  name: "docker",
                },
              },
            },
          },
        ],
      },
      interest: {
        create: [
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Music",
                },
                create: {
                  name: "Music",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Technology",
                },
                create: {
                  name: "Technology",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Gaming",
                },
                create: {
                  name: "Gaming",
                },
              },
            },
          },
        ],
      },
    },
  });
  const user2 = await prisma.member.upsert({
    where: { name: "Azraf Azizullah" },
    update: {},
    create: {
      name: "Azraf Azizullah",
      age: 19,
      role: "Dev-Ops",
      about:
        "Welcome to my corner of the web! As a seasoned DevOps Engineer with a passion for exploration, I bring over a decade of IT expertise to the table. Join me on a journey where technology meets wanderlust. Explore insights, tips, and experiences melding the worlds of IT and travel, curated through years of hands-on involvement in the tech industry. Let's embark on this digital voyage together!",
      picture: "azraf.jpg",
      githubLink: "https://github.com/azrappp",
      instaLink: "https://www.instagram.com/azrafazizullah_/",
      teleLink: "t.me/azrafazizullah",
      linkedinLink: "https://www.linkedin.com/in/azrafazizullah/",
      skills: {
        create: [
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "figma",
                },
                create: {
                  name: "figma",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "laravel",
                },
                create: {
                  name: "laravel",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "nodejs",
                },
                create: {
                  name: "nodejs",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "docker",
                },
                create: {
                  name: "docker",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "reactjs",
                },
                create: {
                  name: "reactjs",
                },
              },
            },
          },
        ],
      },
      interest: {
        create: [
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Hiking",
                },
                create: {
                  name: "Hiking",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Technology",
                },
                create: {
                  name: "Technology",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Gaming",
                },
                create: {
                  name: "Gaming",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Badminton",
                },
                create: {
                  name: "Badminton",
                },
              },
            },
          },
        ],
      },
    },
  });
  const user3 = await prisma.member.upsert({
    where: { name: "Muhammad Allam Zaahid" },
    update: {},
    create: {
      name: "Muhammad Allam Zaahid",
      age: 19,
      role: "Cloud-Engineer",
      about:
        "Hello! With a deep fascination for cloud technologies, I am dedicated to exploring the limitless possibilities that cloud computing offers. Join me on a journey where innovation meets dedication. Whether you're a fellow tech enthusiast or just curious about cloud technologies, I hope to provide valuable content and inspire others to embrace the future of IT.",
      picture: "allam.jpg",
      githubLink: "https://github.com/allamzaahid1",
      instaLink: "https://www.instagram.com/hamiaski",
      teleLink: "t.me/hamiaski",
      linkedinLink: "https://www.linkedin.com/in/allamzaahid/",
      skills: {
        create: [
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "arduino",
                },
                create: {
                  name: "arduino",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "mysql",
                },
                create: {
                  name: "mysql",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "java",
                },
                create: {
                  name: "java",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "csp",
                },
                create: {
                  name: "csp",
                },
              },
            },
          },
          {
            skill: {
              connectOrCreate: {
                where: {
                  name: "premiere",
                },
                create: {
                  name: "premiere",
                },
              },
            },
          },
        ],
      },
      interest: {
        create: [
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Drawing",
                },
                create: {
                  name: "Drawing",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Technology",
                },
                create: {
                  name: "Technology",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Gaming",
                },
                create: {
                  name: "Gaming",
                },
              },
            },
          },
          {
            interest: {
              connectOrCreate: {
                where: {
                  name: "Swimming",
                },
                create: {
                  name: "Swimming",
                },
              },
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
