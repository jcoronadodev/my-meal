const { PrismaClient } = require('@prisma/client');
console.log('PrismaClient is:', PrismaClient);
try {
    const prisma = new PrismaClient();
    console.log('Instance created successfully');
} catch (e) {
    console.error(e);
}
