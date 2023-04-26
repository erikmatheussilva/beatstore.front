import type { Connection, Profile } from '../models/social';

class SocialApi {
  getProfile(): Promise<Profile> {
    const profile: Profile = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
      bio: 'Product Designer',
      connectedStatus: 'not_connected',
      cover: '/static/mock-images/covers/cover_1.jpg',
      currentCity: 'Bucharest',
      currentJobCompany: 'Devias IO',
      currentJobTitle: 'Product Designer',
      email: 'jane.rotanson@devias.io',
      name: 'Usuário ADMINISTREI',
      originCity: 'Rm. Valcea',
      previousJobCompany: 'Focus Aesthetic Dynamics',
      previousJobTitle: 'UX Designer',
      profileProgress: 50,
      quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.'
    };

    return Promise.resolve(profile);
  }

  getConnections(): Promise<Connection[]> {
    const connections: Connection[] = [
      {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
        commonConnections: 10,
        name: 'Carson Darrin',
        status: 'rejected'
      },
      {
        id: '5e887b209c28ac3dd97f6db5',
        avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
        commonConnections: 8,
        name: 'Fran Perez',
        status: 'pending'
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        commonConnections: 5,
        name: 'Miron Vitold',
        status: 'not_connected'
      },
      {
        id: '5e887a1fbefd7938eea9c981',
        avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
        commonConnections: 1,
        name: 'Penjani Inyene',
        status: 'connected'
      }
    ];

    return Promise.resolve(connections);
  }
}

export const socialApi = new SocialApi();
