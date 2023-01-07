import { useState, useEffect } from 'react';
import axios from 'axios';
import { IExercisesData } from '../models/exercises-data.model';

export const GetExerciseData = () => {
  const [exercises, setExercises] = useState<IExercisesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://exercisedb.p.rapidapi.com/exercises',
        {
          headers: {
            'X-RapidAPI-Key':
              'e8532ab052msh0736805a6f5ceebp17086ajsna8f30fbe6b67',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        }
      );
      setExercises(response.data);
    };
    fetchData();
  }, []);
  return exercises;
};
