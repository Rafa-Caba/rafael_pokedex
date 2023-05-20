import React, { useEffect } from 'react';
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    useEffect(() => {
        SplashScreen.hide();
    }, [])
    

    return (
        <>
            <Image 
                source={ require('../assets/pokebola.png') } 
                style={ styles.pokebolaBG }
            />

            <View style={{ alignItems: 'center' }}>

                <FlatList 
                    data={ simplePokemonList }
                    keyExtractor={ (pokemon) => pokemon.id }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                        }}>Pokedex</Text>
                    )}

                    renderItem={ ({ item }) => ( <PokemonCard pokemon={ item } /> )}

                    // Infinite Scroll
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }

                    // Indicador al final de la carga actual 
                    ListFooterComponent={(
                        <ActivityIndicator 
                            style={{ height: 100 }} 
                            size={ 40 }
                            color="gray"

                        /> 
                    )}

                />
            </View>

        </>
    )
}
