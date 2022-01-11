import apiService from '../config/axiosConfig';
import { UserFromAPIResponse } from '../models/user';

class LoginService {
  async signUp(email: string, password: string): Promise<void> {
    await apiService
      .post(
        '/v1/login',
        {
          email,
          password,
        },
        {
          params: {
            admin: 'true',
          },
        },
      )
      .then(({ data }) => {
        const dataResponse: UserFromAPIResponse = data;

        if (dataResponse.token) {
          localStorage.setItem('grab-and-cash-token', dataResponse.token);
        }

        if (dataResponse.user) {
          localStorage.setItem('grab-and-cash-user', JSON.stringify(dataResponse.user));
        }
      });
  }

  async refreshToken(): Promise<void> {
    await apiService.patch('/v1/refresh').then(({ data }) => {
      const dataResponse: Partial<UserFromAPIResponse> = data;

      if (dataResponse.token) {
        localStorage.setItem('grab-and-cash-token', dataResponse.token);
      }
    });
  }
}

export default new LoginService();
