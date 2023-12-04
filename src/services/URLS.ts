export const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const LOGIN_URL = `${BASE_URL}/api/v1/auth/login`;
export const EMAIL_URL = `${BASE_URL}/api/v1/emails`;
export const PROJECT_URL = `${BASE_URL}/api/v1/projects`;
export const PROJECT_ADMIN_URL = `${BASE_URL}/api/v1/admin/projects`;

export const GET_IMAGE_URL = (page:string) => `${BASE_URL}/api/v1/${page}/images`;