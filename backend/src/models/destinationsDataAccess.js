const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.destination.findMany();
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

exports.getUnique = async (destinationId) => {
  try {
    return await prisma.destination.findUnique({
      where: { id: parseInt(destinationId, 10) },
      include: {
        objet: true,
      },
    });
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (destination) => {
  try {
    return await prisma.destination.create({
      data: {
        continent: destination.continent,
        pays: destination.pays,
        ville: destination.ville,
        langue: destination.langue,
        devise: destination.devise,
        description: destination.description,
        objet: {
          connectOrCreate: {
            where: { nom: destination.nom },
            create: {
              nom: destination.nom,
              categorie: destination.categorie,
              saisonnier: destination.saisonnier,
            },
          },
        },
      },
    });
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOne = async (destinationId, destination) => {
  try {
    return await prisma.destination.update({
      where: { id: parseInt(destinationId, 10) },
      data: {
        continent: destination.continent,
        pays: destination.pays,
        ville: destination.ville,
        langue: destination.langue,
        devise: destination.devise,
        description: destination.description,
        objet: {
          connectOrCreate: {
            where: { nom: destination.nom },
            create: {
              nom: destination.nom,
              categorie: destination.categorie,
              saisonnier: destination.saisonnier,
            },
          },
        },
      },
    });
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

exports.removeOne = async (destinationId) => {
  try {
    return await prisma.destination.delete({
      where: { id: parseInt(destinationId, 10) },
    });
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};
