import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomCard from '../../components/UI/CustomCard/CustomCard';
import { baseUrl } from '../../constants';
import { getPeople } from '../../store/actions/usersActions';

const People = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.users.people);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <div className='People'>
      {people &&
        people.map((human) => {
          let age = currentYear - new Date(human.birthdate).getFullYear();
          age = Math.floor(age);
          return (
            <CustomCard
              key={human._id}
              firstLabel='Имя'
              firstText={human.username}
              secondLabel='Возраст'
              secondText={age}
              image={`${baseUrl}/uploads/${human.image}`}
            />
          );
        })}
    </div>
  );
};

export default People;
