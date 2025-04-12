import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <TaskScreen></TaskScreen>
      </TaskProvider>
    </SafeAreaProvider>
  );
}

export default App;
