// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import { Button, Pressable, Text, StyleSheet } from 'react-native';

import ShowList from './ShowList';

//TODO
//need to center the button
export function Home() {

  const navigate = useNavigate(); // 2. Initialize the navigate function

  const handleClick = () => {
    navigate('/showlist'); // 3. Pass the desired path
  };
  return (
    <>
    <div>
      <h1> Show Tracker </h1>
      <h2> A place to track all your shows </h2>
      {/* <Button
        onPress={handleClick}
        title="Get Started"
        color="#841584"
        accessibilityLabel="Get started with all your shows"
      /> */}
      <Pressable style={styles.customButton} onPress={handleClick} alignItems='center'>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </div>
    
    </>
  );
}

const styles = StyleSheet.create({
  customButton: {
    width: '50%',           // Dynamic relative width
    height: 52,             // Ideal mobile touch target size
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

