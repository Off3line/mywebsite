import React, { useState } from "react";
import 'react-awesome-button/dist/styles.css';
import './ButtonStyle.css'
import { AwesomeButton } from 'react-awesome-button';
import { Box, VStack } from "@chakra-ui/react";

const NavigationPanel = () => {
    const [profile,setProfile] = useState('Business');
    const [cssprofile,setCssProfile] = useState('aws-btn-business')
    

    const changeProfile = () =>{
        if(profile === 'Business'){
            setProfile('Personal')
            setCssProfile('aws-btn-personal')
        }
        else{
            setProfile('Business')
            setCssProfile('aws-btn-business')
        }

    }
    return (  <Box w='50%' bg='yellow' >
                <VStack>
                    <AwesomeButton type='primary' onPress={changeProfile} className={cssprofile}>{profile}</AwesomeButton>
                    <AwesomeButton type='danger' className={cssprofile}>Education</AwesomeButton>
                    <AwesomeButton type='secondary' className={cssprofile}>Contact</AwesomeButton>
                </VStack>
               </Box>)
}
          
export default NavigationPanel;