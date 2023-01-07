import React from 'react';
import { GetExerciseData } from '../../utils/get-exercises';
import ExerciseCardComponent from './components/exercise-card';
import { ExercisesPageSection } from './styled';

const Exercises = () => {
  const exercises = GetExerciseData();
  return (
    <ExercisesPageSection>
      {exercises.slice(0, 5).map(exercise => (
        <ExerciseCardComponent
          key={exercise.id}
          imageLink={exercise.gifUrl}
          title={exercise.name}
          description={exercise.target}
        />
      ))}
    </ExercisesPageSection>
  );
};

export default Exercises;
