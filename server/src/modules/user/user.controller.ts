import bcrypt from "bcryptjs";
import z from "zod";
import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { createNewUser, findUserById, findUserByEmail } from "./user.service";
import { newUserSchema } from "./user.validation";
import { findAllUser } from "./user.service";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newUser = req.body;

    const validationResult = newUserSchema.safeParse(newUser);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Provided new user data is invalid.",
        error: validationResult.error,
      });

      return;
    }

    const existingUser = await findUserByEmail(newUser.email);

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "An account with this email already exists.",
        error: null,
      });
      return;
    }

    const createdUser = await createNewUser(newUser);
    const { password, ...sanitizedUser } = createdUser!;

    res.status(201).json({
      success: true,
      message: "Registered new user successfully.",
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const credentials = req.body;

    const validationResult = newUserSchema
      .omit({ name: true })
      .safeParse(credentials);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Provided credentials is invalid.",
        error: validationResult.error,
      });
      return;
    }

    const foundUser = await findUserByEmail(credentials.email);

    if (!foundUser) {
      res.status(401).json({
        success: false,
        message: "Email or password was incorrect.",
        error: null,
      });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordCorrect) {
      res.status(401).json({
        success: false,
        message: "Email or password was incorrect.",
        error: null,
      });
      return;
    }

    const { password, ...sanitizedUser } = foundUser;

    res.status(201).json({
      success: true,
      message: "Logged in user successfully.",
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
};

// export const enrollCourse = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { userId } = req.params;
//     const { courseId } = req.body;
//
//     if (!isValidObjectId(userId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Provided user id is invalid.",
//         error: null,
//       });
//     }
//
//     if (!isValidObjectId(courseId)) {
//       return res.status(400).json({
//         success: false,
//         message: "Provided course id is invalid.",
//         error: null,
//       });
//     }
//
//     const foundUser = await findUserById(userId!);
//
//     if (!foundUser) {
//       return res.status(401).json({
//         success: false,
//         message: "User not found for the provided id.",
//         error: null,
//       });
//     }
//
//     await createNewEnrollment(userId!, courseId);
//
//     res.status(200).json({
//       success: true,
//       message: "Enrolled course successfully.",
//       data: null,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.params;

    const validationResult = z.string().email().safeParse(email);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: "Provided user email is invalid.",
        error: validationResult.error,
      });
      return;
    }

    const foundUser = await findUserByEmail(email!);
    const { password, ...sanitizedUser } = foundUser!;

    if (!foundUser) {
      res.status(401).json({
        success: false,
        message: "User not found for the provided id.",
        error: null,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully.",
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const foundUsers = await findAllUser();

    if (!foundUsers) {
      return res.status(401).json({
        success: false,
        message: "Users not found.",
        error: null,
      });
    }

    const sanitizedUsers = foundUsers.map(({ password, ...rest }) => rest);

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully.",
      data: sanitizedUsers,
    });
  } catch (error) {
    next(error);
  }
};
