import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native'; // Import LogBox
import HomeScreen from './screens/HomeScreen';
import ImpulseSpendingMain from './screens/ImpulseSpending/ImpulseSpendingMain';
import PostTransactionNudge from './screens/ImpulseSpending/PostTransactionNudge';
import PreTransactionAlert from './screens/ImpulseSpending/PreTransactionAlert';
import RewardHighlight from './screens/ImpulseSpending/RewardHighlight';
import SubscriptionPrompt from './screens/ImpulseSpending/SubscriptionPrompt';
import NudgeDetails from './screens/ImpulseSpending/NudgeDetails';
import ForgetfulnessMain from './screens/Forgetfulness/ForgetfulnessMain';
import ReminderList from './screens/Forgetfulness/ReminderList';
import MicroRewardSummary from './screens/Forgetfulness/MicroRewardSummary';
import ComplexityMain from './screens/Complexity/ComplexityMain';
import SimplifyNewSubscription from './screens/Complexity/SimplifyNewSubscription';
import ExplainContractTerms from './screens/Complexity/ExplainContractTerms';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Text strings must be rendered within a <Text> component',
]);

// Optional: Ignore all logs (use this cautiously)
// LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const onLayoutRootView = useCallback(async () => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Impulse Spending Module */}
          <Stack.Screen name="ImpulseSpendingMain" component={ImpulseSpendingMain} />
          <Stack.Screen name="PostTransactionNudge" component={PostTransactionNudge} />
          <Stack.Screen name="PreTransactionAlert" component={PreTransactionAlert} />
          <Stack.Screen name="RewardHighlight" component={RewardHighlight} />
          <Stack.Screen name="SubscriptionPrompt" component={SubscriptionPrompt} />
          <Stack.Screen name="NudgeDetails" component={NudgeDetails} />
          {/* Forgetfulness Module */}
          <Stack.Screen name="ForgetfulnessMain" component={ForgetfulnessMain} />
          <Stack.Screen name="ReminderList" component={ReminderList} />
          <Stack.Screen name="MicroRewardSummary" component={MicroRewardSummary} />
          {/* Complexity (Overwhelm) Module */}
          <Stack.Screen name="ComplexityMain" component={ComplexityMain} />
          <Stack.Screen name="SimplifyNewSubscription" component={SimplifyNewSubscription} />
          <Stack.Screen name="ExplainContractTerms" component={ExplainContractTerms} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
