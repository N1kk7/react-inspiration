// import creatorAvatar from '../assets/images/creatorAvatar.png';
import creatorAvatar from '../assets/images/creator-avatar.png';
import tiktok from '../assets/images/tiktok.png';
import inst from '../assets/images/instagram.png'
import xSocial from '../assets/images/x.png'
import globeSocial from '../assets/images/globe.png'
import { ICreator } from '../model/creatorModel';








const creatorData: ICreator ={
    id: 1,
    creatorImg: creatorAvatar,
    creator: 'UGC Creator',
    location: 'Kiev, Ukraine',
    clapperboard: '$300+',
    message: 'From the initial meeting to the final delivery, Ethan has created a feeling of trust and delivered everything we asked of him.',
    socials: {
        tikTok: tiktok,
        instagram: inst,
        x: xSocial,
        globe: globeSocial,
    }
      
}

export default creatorData
 
