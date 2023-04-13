import React, { useState,useRef} from "react";
import { AutoComplete } from "primereact/autocomplete";
import {useNavigate} from "react-router-dom";
import {Toast} from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { nanoid } from 'nanoid';
import { Calendar } from 'primereact/calendar';


function Kenkl_HaeLoumake(props) {

    const { addRow_Handler }=props;
    const [ selectedType, setSelectedType ] = useState(null);
    const toastRef=useRef(null);
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [postiNum, setPostiNum] = useState(0);
    const [phonErMsg, setPhonErMsg] = useState('');
    const [pstiErMsg, setPstiErMsg]=useState('');
    const direct =useNavigate()
    const [ historyType, setHistoryType ] = useState(null);
    const [ tarveType, setTarveType ] = useState(null);

    const [input,setInput] = useState(
        {
            etunimi:"",
            sukunimi:"",
            tilastoalue:"",
            tyyppi:"",
            tila:"",
            e_kerta:"",
            e_kk:"",
            osoite:"",
            postitoimipaikka:"",
            sähköposti:"",
            aikataulu:"",
            kiinteistön_tyyppi:null,
            historia:"",
            tarve:"",
            tagit:"",
            kunta:""
        }
    )
    const residentType=[
        {type: "Omakotitalo"},
        {type: "Rivitalo"},
        {type: "Liiketila"},
        {type: "Muu"}
    ]
    const historia=[
        {type: "3G"},
        {type: "4G"},
        {type: "5G"},
        {type: "Valokuitu"},
        {type: "Uusi talo ei nettia"}
    ]

    const tarve=[
        {type: "Valokuituliittymän + Perus-netti 100M 46€/kk"},
        {type: "Valokuituliittymän + Gigabitti-netti 1G 49€/kk"},
        {type: "Valokuituliittymän + Symmetrinen Gigabitti-netti 49€/kk"}
      
    ]
    const inputOnChange=(e)=>{
        e.preventDefault();
        setInput({...input,[e.target.name]:e.target.value});
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        if( !input.etunimi || 
            !input.sukunimi||
            !input.osoite||
            !input.postitoimipaikka){
        toastRef.current.show({ severity:'error', summary: 'Please fill all required * fields' })
                return}else{
        addRow_Handler({
        id:nanoid(),
        etunimi:input.etunimi,
        sukunimi:input.sukunimi,
        tilastoalue:input.tilastoalue,
        tyyppi:input.tyyppi,
        tila:input.tila,
        e_kerta:input.e_kerta,
        e_kk:input.e_kk,
        osoite:input.osoite,
        postinumero:postiNum,
        postitoimipaikka:input.postitoimipaikka,
        puhelin:phoneNumber,
        sähköposti:input.sähköposti,
        kiinteistön_tyyppi:selectedType.type,
        aikataulu:input.aikataulu,
        historia:input.historia,
        tarve:input.tarve,
        tagit:input.tagit,
        kunta:input.kunta
    })
    setInput({
        yritys:"",
        yhteyshenkilö:"",
        tilastoalue:"",
        tyyppi:"",
        tila:"",
        e_kerta:"",
        e_kk:"",
        osoite:"",
        postinumero:"",
        postitoimipaikka:"",
        puhelin:"",
        sähköposti:"",
        aikataulu:"",
        historia:"",
        tarve:"",
        tagit:"",
        kunta:""
    })
    setSelectedType(null)
    toastRef.current.show({severity:'info', summary:'tiedot on lähetetty'});
 }
        
 direct("/p_res",{replace:true})
}


    return (
    <form className="check-tb" onSubmit={e=>submitHandler(e)}>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete type="text"  value={input.etunimi}  name='etunimi'   onChange={inputOnChange} />
                <label>Etunimi</label>
            </span>
            <i>*</i>
        </div>                                                                                                                                                                               
        <div className="card">
            <span className="p-float-label">
                <AutoComplete type="text" value={input.sukunimi}  name='sukunimi'   onChange={inputOnChange} />
                <label>Sukunimi</label>
            </span>
            <i>*</i>
        </div>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete inputid="ac"  value={phoneNumber} 
                onChange={
                    e=>{
                    var value = e.target.value
                        var cleaned = ("" + value).replace(/\D/g, "");
                        let normValue = `${cleaned.substring(0, 3)}${
                        cleaned.length > 3 ? " " : ""
                        }${cleaned.substring(3, 6)}${
                        cleaned.length > 6 ? " " : ""
                        }${cleaned.substring(6, 12)}`;
                        if(normValue.length !==12){
                        setPhonErMsg("Please enter a valid format of 10 digits")
                        setPhoneNumber(normValue)
                        }else{
                        setPhonErMsg("");
                        setPhoneNumber(normValue)
                        }
                    }
                }   />
                {phonErMsg && <p className='error'>{phonErMsg}</p>}
                <label htmlFor="ac">Puhelin</label>
            </span>
            <i>*</i>
        </div>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete type="email" value={input.sähköposti}  name='sähköposti'  onChange={inputOnChange} />
                <label>Sähköposti</label>
            </span>
            <i>*</i>
        </div>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete type="text"  value={input.osoite}  name='osoite'  onChange={inputOnChange} />
                <label>Osoite</label>
            </span>
            <i>*</i>
        </div>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete type="tel"   value={postiNum}  name='postinumero'  
                onChange={e=>{var value = e.target.value
                    if(value.length!==5){
                        setPstiErMsg("Please enter a valid format of 5 digits")
                        setPostiNum(value)
                    }else{
                        setPstiErMsg("")
                        setPostiNum(value)
                     
                    }
                }} />
                  {pstiErMsg && <p className='error'>{pstiErMsg}</p>}
                <label>Postinumero</label>
            </span>
            <i>*</i>
        </div>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete  type="text" value={input.postitoimipaikka}  name='postitoimipaikka'  onChange={inputOnChange} />
                <label>Postitoimipaikka</label>
            </span>
            <i>*</i>
        </div>
        <div className="card">
            <span className="p-float-label">
                <AutoComplete  type="text" value={input.kunta}  name='kunta'  onChange={inputOnChange} />
                <label>Kunta</label>
            </span>
            <i>*</i>
        </div>
        <div className="card downdrop">
                <span className="p-float-label">
                    <Dropdown  value={historyType} 
                    name='kiinteistön_tyyppi'
                    className="p-invalid"
                    optionLabel="type"
                    onChange={e=>setHistoryType(e.value)}  options={historia}
                    />
                    <label>Historia</label>
                </span>
                <i>*</i>
        </div>
        <div className="card downdrop">
            <span className="p-float-label">
                <Dropdown  value={tarveType} 
                name='kiinteistön_tyyppi'
                className="p-invalid"
                optionLabel="type"
                onChange={e=>setTarveType(e.value)} options={tarve}
                />
                <label>Tarve</label>
            </span>
            <i>*</i>
        </div>
        <div className="card downdrop">
            <span className="p-float-label">
                <Dropdown  value={selectedType} 
                name='kiinteistön_tyyppi'
                className="p-invalid"
                optionLabel="type"
                onChange={e=>setSelectedType(e.value)} options={residentType}
                />
                <label>Kiinteistön Tyyppi</label>
            </span>
            <i>&nbsp;</i>
        </div>
        <div className="card">
                <span className="p-float-label  aikataulu">
                    <Calendar name='aikataulu'  value={input.aikataulu} onChange={inputOnChange}  selectionMode="range" readOnlyInput/>
                    <label className="week">Aikataulu</label>
                </span>
                <i>*</i>
        </div>
        <div className="card">
            <Button label="TARKISTA" />
            <Toast ref={toastRef}/>
        </div>
    </form>
    )
}

export default Kenkl_HaeLoumake;