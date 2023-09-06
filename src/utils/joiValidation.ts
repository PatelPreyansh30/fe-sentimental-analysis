import Joi from "joi";
import { ReviewType } from "./types";

interface JoiReturnType {
  status: boolean;
  message: string;
}

class JoiUtils {
  private reviewSchema = Joi.object({
    sentence: Joi.string().required().label("Review"),
  });

  public validateReviewData(loginData: ReviewType): JoiReturnType {
    const { error, value } = this.reviewSchema.validate(loginData);
    if (error) {
      return { status: false, message: error.details[0].message };
    }
    if (value) {
      return { status: true, message: value.message };
    }
    return { status: true, message: value.message };
  }
}

export const joiUtils = new JoiUtils();
