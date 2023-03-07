import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import type { Restaurant } from '~/types/lunch-menu';
import { handleAugustas } from './helpers/augustas-helper';
import { handleBryners } from './helpers/bryneres-helper';
import { handleEstreet } from './helpers/estreet-helper';
import { handleInvito } from './helpers/invito-helper';

const Restaurants = {
  augustas: 'Augustas',
  bryners: 'Bryners',
  estreet: 'E Street',
  invito: 'Invito',
};

export const lunchRouter = createTRPCRouter({
  menu: publicProcedure.query(async ({ ctx }) => {
    const bryners = await handleBryners(ctx, Restaurants.bryners);
    const augustas = await handleAugustas(ctx, Restaurants.augustas);
    const invito = await handleInvito(ctx, Restaurants.invito);
    const estreet = await handleEstreet(ctx, Restaurants.estreet);

    return [augustas, bryners, estreet, invito] as Restaurant[];
  }),
});
