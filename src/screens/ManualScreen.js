import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import componentStyles from '../styles/componentStyles'
import StyledText from '../components/StyledText'
import useManuals from '../hooks/useManuals'


const ManualScreen = () => {

	const route = useRoute()
	const { id } = route.params 
	const data = useManuals(id)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
				{data ? (
					<View style={{ flex: 1 }}>
						{/* TITULO DEL MANUAL */}
						<StyledText fontSize='xlarge' fontWeight='bold' style={styles.manualTitle}>{data.emergency_manual.manual_title}</StyledText>

						{data.emergency_manual.manual_content.map((section) => (

							<View key={section.section_id} style={styles.sectionContainer}>

								{/* TITULO SECCION */}
								{section.section_title && <StyledText fontSize='large' fontWeight='bold' style={styles.sectionTitle}>{section.section_title}</StyledText>}

								{/* IMAGEN SECCION */}
								{section.section_image && <Image source={{ uri: section.section_image }}
								style={data.manual_id === 5 ? styles.manualImageEarthquake : styles.manualImage} />}

								{/* DESCRIPCION SECCION */}
								{section.section_description && <StyledText style={styles.sectionDescription}>{section.section_description}</StyledText>}

								{section.section_elements.map((elem) => (
									<View key={elem.element_id} style={styles.elementContainer}>

										{/* TITULO PASO */}
										{elem.type === 'subsection_title' && <StyledText fontSize='large' fontWeight='semibold' style={styles.subsectionTitle}>{elem.text}</StyledText>}

										{/* PASOS A SEGUIR */}
										{elem.type === 'step' && (
											<View style={styles.stepContainer}>
												<Ionicons name={'ios-checkmark'} size={16} color={'#43dc33'} style={styles.checkmarkIcon} />
												<View style={{flex: 1}}>
													<StyledText fontWeight='bold'>{elem.textBold}</StyledText>
													<StyledText style={styles.stepText}>{elem.text}</StyledText>
												</View>
											</View>
										)}

										{elem.type === 'substep' && (
											<View style={styles.substepContainer}>
												<View style={styles.substepBullet} />
												<View style={{flex: 1}}>
												<StyledText fontSize='small' fontWeight='bold' style={styles.substepTextBold}>	{elem.textBold}</StyledText>
												<StyledText fontSize='small' style={styles.substepText}>{elem.text}</StyledText>
												</View>
											</View>
										)}

									</View>
								))}
							</View>
						))}
					</View>
				) : (
					<View style={styles.loadingContainer}>
						<StyledText fontSize='xlarge'>...</StyledText>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>

	)

}

const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	manualTitle: {
		textAlign: 'center',
		marginBottom: 10,
	},
	sectionContainer: {
		marginBottom: 20,
	},
	manualImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
		marginBottom: 10,
		backgroundColor: '#f4f4f4',
		borderRadius: 6
	},
	manualImageEarthquake: {
		width: '100%',
		height: 100,
		resizeMode: 'cover',
		marginBottom: 10,
		backgroundColor: '#f4f4f4',
		borderRadius: 6
	},
	sectionTitle: {
		marginBottom: 5
	},
	sectionDescription: {
		marginBottom: 10
	},
	elementContainer: {
		marginBottom: 10
	},
	subsectionTitle: {
		marginBottom: 5
	},
	stepContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5
	},
	checkmarkIcon: {
		marginRight: 5
	},
	stepText: {
		color: 'gray'
	},
	substepContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	substepBullet: {
		width: 5,
		height: 5,
		borderRadius: 4,
		backgroundColor: 'gray',
		marginRight: 5
	},
	substepTextContainer: {
		flex: 1
	},
	substepTextBold: {
		marginBottom: 2
	},
	substepText: {
		color: 'gray',
		marginBottom: 2
	},
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});


export default ManualScreen