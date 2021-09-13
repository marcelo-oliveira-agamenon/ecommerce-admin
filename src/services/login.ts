import apiService from '../config/axiosConfig';

class LoginService {
  async signUp(email: string, password: string): Promise<void> {
    await apiService.post('/login', {
      email,
      password,
    });
  }
}

export default new LoginService();
