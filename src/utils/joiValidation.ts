import Joi from "joi";

interface JoiReturnType {
  status: boolean;
  message: string;
}

class JoiUtils {
  private reviewSchema = Joi.string().required().label("Review");

  public validateReviewData(reviewData: string): JoiReturnType {
    const { error, value } = this.reviewSchema.validate(reviewData);
    if (error) {
      return { status: false, message: error.details[0].message };
    }
    if (value) {
      return { status: true, message: value };
    }
    return { status: true, message: value };
  }
}

export const joiUtils = new JoiUtils();
