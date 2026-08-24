import { prisma } from "../lib/prisma.js";
import { Request, Response, NextFunction } from "express";

export const getAllTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tags = await prisma.tag.findMany();

    if (!tags) {
      return res.status(404).json({
        success: false,
        message: 'Could not find any tags'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Here are all of the tags',
      tags
    });

  } catch(err) {
    next(err);
  }
}