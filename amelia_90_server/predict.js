import * as tf from '@tensorflow/tfjs';
import { loadGraphModel, loadLayersModel } from '@tensorflow/tfjs';

//const model =await tf.loadLayersModel(urlhandle);
export async function loadmodel(dataframe){
    let o=[];
    const model = await tf.loadLayersModel('http://localhost:5000/model/model.json');
    tf.tensor(dataframe).print()
    let t=tf.tensor(dataframe,[1,74])    
    let b= model.predict(t);
    //let y=await model.predict(t).data();
    let prediction=b.arraySync();        
    return (prediction)
}
