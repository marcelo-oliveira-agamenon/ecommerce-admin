import apiService from '../config/axiosConfig';

class LoginService {
  async signUp(email: string, password: string): Promise<void> {
    await apiService
      .post('/v1/admin/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      });
  }
}

export default new LoginService();
