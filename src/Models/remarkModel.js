import { useState } from 'react';
import { Modal,StyleSheet,View ,Text,TouchableOpacity} from 'react-native';


function RemarkModel(props) {
    const {model}=props
    console.log(">>>>>>>",model)
    const [showModal, setShowModal] = useState(model);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return <>
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => toggleModal()}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalText}>This is a modal</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => toggleModal()}
                    >
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    </>
}

export default RemarkModel;



const styles = StyleSheet.create({
modal: {
backgroundColor: '#fff',
borderRadius: 10,
padding: 20,
alignItems: 'center',
justifyContent: 'center',
margin: 20,
},
modalText: {
fontSize: 20,
marginBottom: 20,
},
button: {
backgroundColor: '#007AFF',
borderRadius: 5,
padding: 10,
},
buttonText: {
color: '#fff',
fontSize: 20,
},
});