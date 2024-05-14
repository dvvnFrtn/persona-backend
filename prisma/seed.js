const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.member.upsert({
    where: { name: 'Rizki Fajar' },
    update: {},
    create: {
      name: 'Rizki Fajar',
      age: 19,
      role: 'Backend-Dev',
      about: 'Hello, I\'m a technology enthusiast and a current undergraduate student majoring in Information Technology. My passion lies in backend development, where I enjoy unraveling the complexities of technology and continuously learning new concepts and technologies.',
      githubLink: 'https://github.com/dvvnFrtn',
      instaLink: 'https://www.instagram.com/rzkifj_/',
      teleLink: 't.me/rzkiifj',
      linkedinLink: 'https://www.linkedin.com/in/rizkifj/',
      skills: {
        create: [
            {
                skill: {
                    connectOrCreate: {
                        where: {
                            name: 'golang'
                        },
                        create: {
                            name: 'golang'
                        }
                    }
                }
            },
            {
                skill: {
                    connectOrCreate: {
                        where: {
                            name: 'laravel'
                        },
                        create: {
                            name: 'laravel'
                        }
                    }
                }
            },
            {
                skill: {
                    connectOrCreate: {
                        where: {
                            name: 'nodejs'
                        },
                        create: {
                            name: 'nodejs'
                        }
                    }
                }
            },
            {
                skill: {
                    connectOrCreate: {
                        where: {
                            name: 'docker'
                        },
                        create: {
                            name: 'docker'
                        }
                    }
                }
            },
        ]
      },
      interest: {
        create: [
            {
                interest: {
                    connectOrCreate: {
                        where: {
                            name: 'Music'
                        },
                        create: {
                            name: 'Music'
                        }
                    }
                }
            },
            {
                interest: {
                    connectOrCreate: {
                        where: {
                            name: 'Technology'
                        },
                        create: {
                            name: 'Technology'
                        }
                    }
                }
            },
            {
                interest: {
                    connectOrCreate: {
                        where: {
                            name: 'Gaming'
                        },
                        create: {
                            name: 'Gaming'
                        }
                    }
                }
            },
        ]
      }
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
