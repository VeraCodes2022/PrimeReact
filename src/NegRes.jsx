import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {useNavigate} from "react-router-dom";

function NegRes() {
  const direct=useNavigate()
  const header = (
      <>
          <Button label="Peruuttaa" icon="pi pi-times" className="p-button-outlined p-button-secondary" 
              onClick={() =>direct("/",{replace:true})}
          />
      </>
      
  );

  return (
    <div className='neg-card flex justify-content-center'>
      <Card title="Anteeksi,valokuituverkon rakentaminen alueellesi ei ole juuri nyt!" subTitle="" header={header} className="md:w-25rem">
      <p className="m-0">
          valokuituverkon rakentaminen alueellesi ei ole juuri nyt
          suunnitelmissamme, mutta kartoitamme jatkuvasti uusia valokuitualueita.
          Mikäli alueeltasi löytyy kiinnostusta Kouvolakuit, edistämme mielellämme verkon 
          suunnittelua. Kerro siis kiinostuksestasi ja vinkkaa asiasta myös naapureille
          jos halua keskustella alueesi myyjän kanssa, löydät yhteystiedot <a href=''><strong>täältä</strong></a>
      </p>
    </Card>
</div>
  )
}

export default NegRes;