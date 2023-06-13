import React from 'react'
import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import manualStyles from '../styles/manualStyles'
import StyledText from '../components/StyledText'
import useManuals from '../hooks/useManuals'


const ManualScreen = () => {

	const route = useRoute()
	const { id } = route.params 
	const data = useManuals(id)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={manualStyles.scrollContainer}>
				{data ? (
					<View style={{ flex: 1 }}>
						{/* TITULO DEL MANUAL */}
						<StyledText fontSize='xlarge' fontWeight='bold' style={manualStyles.manualTitle}>{data.emergency_manual.manual_title}</StyledText>

						{data.emergency_manual.manual_content.map((section) => (

							<View key={section.section_id} style={manualStyles.sectionContainer}>

								{/* TITULO SECCION */}
								{section.section_title && <StyledText fontSize='large' fontWeight='bold' style={manualStyles.sectionTitle}>{section.section_title}</StyledText>}

								{/* IMAGEN SECCION */}
								{section.section_image && <Image source={{ uri: section.section_image }}
								style={data.manual_id === 5 ? manualStyles.manualImageEarthquake : manualStyles.manualImage} />}

								{/* DESCRIPCION SECCION */}
								{section.section_description && <StyledText style={manualStyles.sectionDescription}>{section.section_description}</StyledText>}

								{section.section_elements.map((elem) => (
									<View key={elem.element_id} style={manualStyles.elementContainer}>

										{/* TITULO PASO */}
										{elem.type === 'subsection_title' && <StyledText fontSize='large' fontWeight='semibold' style={manualStyles.subsectionTitle}>{elem.text}</StyledText>}

										{/* PASOS A SEGUIR */}
										{elem.type === 'step' && (
											<View style={manualStyles.stepContainer}>
												<Ionicons name={'ios-checkmark'} size={16} color={'#43dc33'} style={manualStyles.checkmarkIcon} />
												<View style={{flex: 1}}>
													<StyledText fontWeight='bold'>{elem.textBold}</StyledText>
													<StyledText style={manualStyles.stepText}>{elem.text}</StyledText>
												</View>
											</View>
										)}

										{elem.type === 'substep' && (
											<View style={manualStyles.substepContainer}>
												<View style={manualStyles.substepBullet} />
												<View style={{flex: 1}}>
												<StyledText fontSize='small' fontWeight='bold' style={manualStyles.substepTextBold}>	{elem.textBold}</StyledText>
												<StyledText fontSize='small' style={manualStyles.substepText}>{elem.text}</StyledText>
												</View>
											</View>
										)}

									</View>
								))}
							</View>
						))}
					</View>
				) : (
					<View style={manualStyles.loadingContainer}>
						<StyledText fontSize='xlarge'>...</StyledText>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>

	)

}


export default ManualScreen