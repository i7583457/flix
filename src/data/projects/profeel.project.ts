import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';
import { profeelVideos } from '../videos/profeel.videos';

export const profeelProject: Project = {
  title: 'Profeel App & Admin',
  picture:
    'https://firebasestorage.googleapis.com/v0/b/vicflix-2fbe0.appspot.com/o/Pictures%2FProjects%2Fprofeel%2Fprofeel.png?alt=media&token=8b1bf32f-66fd-4557-b28d-516a796ad996',
  placeholder:
    'https://firebasestorage.googleapis.com/v0/b/vicflix-2fbe0.appspot.com/o/Pictures%2FProjects%2Fprofeel%2Fprofeel_placeholder.png?alt=media&token=b57f1349-cce1-479e-9ef1-3a3c90a955f1',
  slogan: 'Optimiser et sécuriser les process des professionnels',
  description: `Profeel est un programme CheckReno.
  Il consistait à realiser une API, un back-office administrateur, une app web client, une application mobile et un site vitrine`,
  logo: 'profeel.png',
  videos: Object.values(profeelVideos).flat(),
  year: 2021,
  links: [
    {
      title: 'Site client Profeel',
      link: 'https://client.profeel-testing.devtotem.team/',
    },
    {
      title: 'Application Profeel iOS',
      link: 'https://apps.apple.com/us/app/milinus/id1506570411',
    },
  ],
  type: [ProjectType.App, ProjectType.Mobile],
  id: 'LAtFkd',
  info: `Aucun lien ou accès d'application administrateur ne sera fourni.
    Toutes les vidéos sont issues de fausses données de test et ne correspondent pas à des vraies données client.
  `,
  technos: [
    TechnosList.Nuxt,
    TechnosList.Vue,
    TechnosList.Typescript,
    TechnosList.GraphQL,
    TechnosList.Tailwind,
  ],
  context: ProjectContext.Totem,
};
