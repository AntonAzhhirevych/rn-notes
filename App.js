import React, { useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import MainLayaut from './src/MainLayaut';
import MainLayaut from './src/MainLayaut';
import { TodoState } from './src/context/todo/TodoState';
// import { TodoState } from './src/context/todo/todoState';
import { ScreenState } from './src/context/screen/ScreenState';

// 'expo-font' библиотека для работы с шрифтами
// AppLoading елемент для асигхронной обработки
// --startAsync запуск асинхронной функции
// --onError если startAsync вернет ошибку можем обработать
// --onFinish действие по завершению

//loadApplication асинхронная загрузка шрифтов

const loadApplication = async () => {
  await Font.loadAsync({
    'ralewey-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'ralewey-bold': require('./assets/fonts/Raleway-Bold.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayaut />
      </TodoState>
    </ScreenState>
  );
}
