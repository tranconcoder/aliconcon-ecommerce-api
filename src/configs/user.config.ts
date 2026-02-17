import { getEnv, EnvKey } from '../api/helpers/env.helper.js';

export const USER_PUBLIC_FIELDS: (keyof model.auth.UserSchema)[] = [
    '_id',
    'phoneNumber',
    "user_avatar",
    'user_fullName',
    'user_email',
    'user_role',
    "user_sex",
    "user_status",
    "user_dayOfBirth",
];

export const TEST_ACCOUNT_PASSWORD = getEnv(EnvKey.TEST_ACCOUNT_PASSWORD, false, '123456789aA@');
