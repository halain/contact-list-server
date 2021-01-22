import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { successResponse, errorResponse } from "../helpers/api.response";

const prisma = new PrismaClient();

const contactRoutes = Router();

/**
 * Get all Contacts
 */
contactRoutes.get("/", async (req: Request, resp: Response) => {
  const contacts = await prisma.contact.findMany();
  successResponse(resp, contacts);
});

/**
 * Create Contact
 */
contactRoutes.post("/", async (req: Request, resp: Response) => {
  const { name, email, city, country, phone } = req.body;
  try {
    const contactDB = await prisma.contact.create({
      data: { name, email, city, country, phone },
    });
    successResponse(resp, contactDB);
  } catch (err) {
    errorResponse(resp, err.message);
  }
});

/**
 * Update Contact
 */
contactRoutes.put("/:id", async (req: Request, resp: Response) => {
  const id = Number(req.params.id);
  const { name, email, city, country, phone } = req.body;
  try {
    const contactDB = await prisma.contact.findUnique({
      where: { id },
    });
    if (!contactDB) {
      errorResponse(resp, "Contact Not Found");
    }
    const contactUpdated = await prisma.contact.update({
      where: { id },
      data: { name, email, city, country, phone },
    });
    successResponse(resp, contactUpdated);
  } catch (err) {
    errorResponse(resp, err.message);
  }
});

/**
 * Delete Contact
 */
contactRoutes.delete("/:id", async (req: Request, resp: Response) => {
  const id = Number(req.params.id);
  try {
    const contactDB = await prisma.contact.findUnique({
      where: { id },
    });
    if (!contactDB) {
      errorResponse(resp, "Contact Not Found");
    }
    const contactDeleted = await prisma.contact.delete({
      where: { id },
    });
    successResponse(resp, contactDeleted);
  } catch (err) {
    errorResponse(resp, err.message);
  }
});

/**
 * Filter
 */
contactRoutes.get("/search", async (req: Request, resp: Response) => {
  
  const {searchText} = req.body;
  
  const termino = searchText;
   
    const contacts = await prisma.contact.findMany({
        where: {
          OR: [
            {
              name: {
                in:termino,
                mode: "insensitive",
              }
            },
            {
              email: {
                in:termino,
                mode: "insensitive",
              }
            },
            {
              city: {
                in: termino,
                mode: "insensitive",
              }
            },
            {
              country: {
                in: termino,
                mode: "insensitive",
              }
            },
            {
              phone: {
                in: termino,
                mode: "insensitive",
              }
            },
            
          ]
         
        }
    });

    successResponse(resp, contacts);
  });

export default contactRoutes;
