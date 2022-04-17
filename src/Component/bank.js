
import React from 'react'
import '../css/form-style.css'
import melli from '../logos/261_2f5341e46b55e2b716ef29393d44e24b.png'
import tejarat from '../logos/259_4c5bd956c048efaffe0de026c33945bd.png'
import saderat from '../logos/262_71f794e5c5920b4f98e133bf3c5cf533.png'
import maskan from '../logos/263_d72e1600763c10b59605308158d0ec5a.png'
import parsian from '../logos/264_c8744a74bec9487dfe9b04b12501b1de.png'
import sepah from '../logos/265_d695220736dbaa3df696c68395beb3db.png'
import shahr from '../logos/266_dcba6672b0ba03d875444999e0bf41ab.png'
import saman from '../logos/267_0a674c9fe03c75347d96978aebbede3e.png'
import ansar from '../logos/268_a8d5da65055d0c441c5e355528fa2741.png'
import egteshdnovin from '../logos/269_30b90ec9bfd64ff123f45f0168991e09.png'
import meheriran from '../logos/272_e2b947c497165fb2b201146ca0922113.png'
import dey from '../logos/273_0554851625a1a6513a774a5c207e2e9a.png'
import melat from '../logos/442_2be3e526e96286fa7b09a1705ddf40d5.png'
import sanatvamadan from '../logos/bank_sanaat_va_madan_20120315_1089313896.jpg'
import gavamin from '../logos/Ghavamin.jpg'
import karafarin from '../logos/Karafarin.jpg'
import tosee from '../logos/Moasese-Etebari-Tosee-Logo-PNG-Way2pay-97-06-14.png'
import postbank from '../logos/Postbank.jpg'
import sarmaye from '../logos/Sarmayeh.jpg'
import sina from '../logos/sinabank_big.jpg'
import Tsaderat from '../logos/Tosee-Saderat-logo-LimooGraphic.jpg'
import TT from '../logos/TT.jpg'
import pasargad from '../logos/استخدام-بانک-پاسارگاد-1.jpg'
import refah from '../logos/بانک+رفاه.jpg'
import vamelal from '../logos/موسسه+اعتباری+ملل.jpg'
import keshavarzi from '../logos/18.jpg'
import noor from '../logos/36.png'
import iranzamin from '../logos/70b2980fd7c801233a11089e90aa44d64294e29c8461b94513ffc85831831050.png'
import ayande from '../logos/finds-ir-2017060215110929.jpg'
import gardeshgari from '../logos/Bank-Tourism-Logo.jpg'
import hekmat from '../logos/Hekmat-1.jpg'
import resalt from '../logos/1200px-Resalat-logo-bank.png'
import kosar from '../logos/34.png'
import iranvez from '../logos/Iran_-_Venezuela_logo.png'
import khavarmiyane from '../logos/Logo-Vertical.jpg'
import mehreeghtesad from '../logos/Mehr-eghtesad.png'
import shetab from '../logos/271_7d200a78f2b67db67929c426bd94e341.png'












 function Bank({number}) {
     let bankName=''
     let logo=shetab
     if(number.charAt(0)==='6'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='3'&&
     number.charAt(3)==='7'&&
     number.charAt(5)==='9'&&
     number.charAt(6)==='9'){
        bankName='بانک ملی'
        logo=melli

     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='8'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='2'&&
     number.charAt(5)==='1'&&
     number.charAt(6)==='0'){
        bankName='بانک سپه'
        logo=sepah
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='6'&&
     number.charAt(5)==='4'&&
     number.charAt(6)==='8'){
        bankName='بانک توسعه صادرات'
        logo=Tsaderat

     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='6'&&
     number.charAt(6)==='1'){
        bankName='بانک صنعت ومعدن'
        logo=sanatvamadan
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='3'&&
     number.charAt(3)==='7'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='0'){
        bankName='بانک کشاورزی'
        logo=keshavarzi

     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='8'&&
     number.charAt(3)==='0'&&
     number.charAt(5)==='2'&&
     number.charAt(6)==='3'){
        bankName='بانک مسکن'
        logo=maskan
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='7'&&
     number.charAt(5)==='6'&&
     number.charAt(6)==='0'){
        bankName='پست بانک ایران'
        logo=postbank
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='2'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='0'&&
     number.charAt(6)==='8'){
        bankName='بانک توسعه تعاون'
        logo=TT
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='4'&&
     number.charAt(5)==='1'&&
     number.charAt(6)==='2'){
        bankName='  بانک اقتصاد نوین'
        logo=egteshdnovin
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='2'&&
     number.charAt(3)==='1'&&
     number.charAt(5)==='0'&&
     number.charAt(6)==='6'){
        bankName=' بانک پارسیان		'
        logo=parsian
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='2'&&
     number.charAt(3)==='2'&&
     number.charAt(5)==='2'&&
     number.charAt(6)==='9'){
        bankName='بانک پاسارگاد	'
        logo=pasargad
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='3'&&
     number.charAt(5)==='4'&&
     number.charAt(6)==='7'){
        bankName='بانک پاسارگاد	'
        logo=pasargad
     }
     
     
     
     if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='5'&&
     number.charAt(5)==='9'&&
     number.charAt(6)==='9'){
        bankName='بانک قوامین	'
        logo=gavamin
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='4'&&
     number.charAt(5)==='8'&&
     number.charAt(6)==='8'){
        bankName='بانک کارآفرین	'
        logo=karafarin
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='1'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='8'&&
     number.charAt(6)==='6'){
        bankName='بانک سامان	'
        logo=saman
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='3'&&
     number.charAt(5)==='4'&&
     number.charAt(6)==='6'){
        bankName='بانک سینا	'
        logo=sina
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='6'&&
     number.charAt(5)==='0'&&
     number.charAt(6)==='7'){
        bankName='بانک سرمایه	'
        logo=sarmaye
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='2'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='3'&&
     number.charAt(6)==='8'){
        bankName='بانک دی	'
        logo=dey
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='3'&&
     number.charAt(3)==='7'&&
     number.charAt(5)==='6'&&
     number.charAt(6)==='9'){
        bankName='بانک صادرات	'
        logo=saderat
     }if(number.charAt(0)==='2'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='1'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='7'){
        bankName='بانک صادرات	'
        logo=saderat
     }
     if(number.charAt(0)==='6'
     &&number.charAt(1)==='1'&&
     number.charAt(2)==='0'&&
     number.charAt(3)==='4'&&
     number.charAt(5)==='3'&&
     number.charAt(6)==='3'){
        bankName='بانک ملت	'
        logo=melat
     }if(number.charAt(0)==='9'
     &&number.charAt(1)==='9'&&
     number.charAt(2)==='1'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='5'){
        bankName='بانک ملت	'
        logo=melat
     }
     if(number.charAt(0)==='5'
     &&number.charAt(1)==='8'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='4'&&
     number.charAt(5)==='6'&&
     number.charAt(6)==='3'){
        bankName='بانک رفاه	'
        logo=refah
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='3'&&
     number.charAt(5)==='8'&&
     number.charAt(6)==='1'){
        bankName='بانک انصار	'
        logo=ansar
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='6'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='7'){
        bankName='موسسه اعتباری نور	'
        logo=noor
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='9'&&
     number.charAt(3)==='3'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='0'){
        bankName='بانک مهر اقتصاد	'
        logo=mehreeghtesad
        
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='8'&&
     number.charAt(3)==='1'&&
     number.charAt(5)==='5'&&
     number.charAt(6)==='7'){
        bankName='موسسه اعتباری توسعه	'
        logo=tosee
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='6'&&
     number.charAt(3)==='2'&&
     number.charAt(5)==='5'&&
     number.charAt(6)==='6'){
        bankName='موسسه اعتباری ملل (عسکریه)	'
        logo=vamelal
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='6'&&
     number.charAt(3)==='3'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='3'){
        bankName='بانک قرض الحسنه مهرایران	'
        logo=meheriran
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='8'&&
     number.charAt(2)==='5'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='8'&&
     number.charAt(6)==='3'){
        bankName='	بانک تجارت'
        logo=tejarat
        
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='2'&&
     number.charAt(2)==='7'&&
     number.charAt(3)==='3'&&
     number.charAt(5)==='5'&&
     number.charAt(6)==='3'){
        bankName='	بانک تجارت'
        logo=tejarat
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='4'&&
     number.charAt(3)==='7'&&
     number.charAt(5)==='0'&&
     number.charAt(6)==='6'){
        bankName='	بانک شهر'
        logo=shahr
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='2'&&
     number.charAt(3)==='8'&&
     number.charAt(5)==='0'&&
     number.charAt(6)==='6'){
        bankName='	بانک شهر'
        logo=shahr
        
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='6'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='4'&&
     number.charAt(6)==='9'){
        bankName='بانک حکمت ایرانیان'
        logo=hekmat
        
     }
     if(number.charAt(0)==='5'
     &&number.charAt(1)==='8'&&
     number.charAt(2)==='1'&&
     number.charAt(3)==='8'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='4'){
        bankName='بانک ایران و ونزوئلا'
        logo=iranvez
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='5'&&
     number.charAt(3)==='7'&&
     number.charAt(5)==='8'&&
     number.charAt(6)==='5'){
        bankName='بانک ایران زمین'
        logo=iranzamin
        
     }if(number.charAt(0)==='6'
     &&number.charAt(1)==='3'&&
     number.charAt(2)==='6'&&
     number.charAt(3)==='2'&&
     number.charAt(5)==='1'&&
     number.charAt(6)==='4'){
        bankName='بانک آینده'
        logo=ayande
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='8'&&
     number.charAt(2)==='5'&&
     number.charAt(3)==='9'&&
     number.charAt(5)==='4'&&
     number.charAt(6)==='7'){
        bankName='بانک خاورمیانه'
        logo=khavarmiyane
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='5'&&
     number.charAt(3)==='8'&&
     number.charAt(5)==='0'&&
     number.charAt(6)==='1'){
        bankName='موسسه اعتباری کوثر'
        logo=kosar
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='5'&&
     number.charAt(3)==='4'&&
     number.charAt(5)==='1'&&
     number.charAt(6)==='6'){
        bankName='بانک گردشگری'
        logo=gardeshgari
        
     }if(number.charAt(0)==='5'
     &&number.charAt(1)==='0'&&
     number.charAt(2)==='4'&&
     number.charAt(3)==='1'&&
     number.charAt(5)==='7'&&
     number.charAt(6)==='2'){
        bankName='بانک قرض الحسنه رسالت'
        logo=resalt
        
     }
   


    return (
        <div className='bank'>
        {' '}
        <img src={logo} alt='logo' className='Bank-logo'  height='50px' width='60px'/>
         <div className='bankName'>{bankName}</div>
        </div>
    )
}
export default Bank