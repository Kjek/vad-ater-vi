import AdminOption from '@component/admin/AdminOption';
import InputButton from '@component/admin/Button';
import LoginSection from '@component/admin/LoginSection';
import Text from '@component/admin/Text';
import TextBox from '@component/admin/TextBox';
import { api } from '@util/api';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRef } from 'react';

const LoginPage: NextPage = () => {
  const { data: session } = useSession();
  const regex = useRef<string>();

  const { mutate: reScrape } = api.admin.reScrape.useMutation();
  const { mutate: reScrapeAll } = api.admin.reScrapeAll.useMutation();
  const { mutate: saveRegex } = api.admin.regex.useMutation();

  const { data: restaurants } = api.admin.restaurants.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {session?.user ? (
        <div className='flex h-full w-full items-center justify-center'>
          <div className='dark:bg-gray-custom mx-80 my-8 flex h-full w-full flex-col gap-4 rounded-md p-8'>
            <AdminOption
              text='Re-scrape all restaurants'
              buttonValue='Re-scrape all'
              onClick={() => void reScrapeAll()}
            />
            {restaurants?.map((restaurant) => (
              <div key={restaurant.name} className='flex w-full gap-8'>
                <Text className='flex-1'>{restaurant.name}</Text>
                <TextBox
                  placeholder='Insert regex'
                  defaultValue={restaurant.restaurantRegex?.regex || undefined}
                  onChange={(event) => {
                    regex.current = event.target.value;
                  }}
                />
                <InputButton
                  value={'Save'}
                  onClick={() =>
                    saveRegex({
                      restaurantId: restaurant.id,
                      regex: regex.current,
                    })
                  }
                />
                <InputButton
                  value={'Re-scrape'}
                  onClick={() => {
                    reScrape({ restaurantId: restaurant.id });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <LoginSection />
      )}
    </>
  );
};

export default LoginPage;
