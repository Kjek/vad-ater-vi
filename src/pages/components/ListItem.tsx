import type { Restaurant } from '~/types/lunch-menu';
import Collapsable from './Collapsable';

interface ListProps {
  restaurant: Restaurant;
}

const ListItem = (props: ListProps) => {
  return (
    <>
      <div className='text-white'>
        <div className='rounded-md bg-gradient-to-r from-[#ef473a] to-[#cb2d3e] p-1'>
          <div className='bg-neutral-775 rounded-md'>
            <div className='whitespace-pre-line p-10'>
              <h1 className='text-center text-3xl font-bold'>
                {props.restaurant.name}
              </h1>
              <h2 className='text-2xl font-bold'>
                {props.restaurant.today.day}
              </h2>
              <p className='text-lg'>{props.restaurant.today.food}</p>
              <div className='pt-4'>
                {props.restaurant.weeklySpecials &&
                props.restaurant.weeklySpecials.length > 0
                  ? props.restaurant.weeklySpecials.map((item) => (
                      <div className='whitespace-pre-line pb-4' key={item.type}>
                        <h3 className='font-bold'>{item.type}</h3>
                        <h4>{item.food}</h4>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <Collapsable lunchMenu={props.restaurant.menu} />
        </div>
      </div>
    </>
  );
};

export default ListItem;
