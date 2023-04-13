import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";
import {useNavigate} from "react-router-dom";

function PstvRes() {

  const direct=useNavigate()
  const header = (
      <>
          <Button label="Peruuttaa" icon="pi pi-times" className="p-button-outlined p-button-secondary" 
              onClick={() =>direct("/",{replace:true})}
          />
      </>
      
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
        <div className="input-card">
            <span className="p-float-label">
                <AutoComplete   inputid="ac" value="" name='street' />
                <label htmlFor="ac">Henkilötunnus</label>
            </span>
        </div>
        <Button label="Mennä Sopimukseen" icon="pi" />
    </div>
);

  return (
    <div className="posi-card flex justify-content-center">
      <Card title="Onnittelut, alueesi on käytettävissä potisen kuiden asentamiseen!" subTitle="" footer={footer} header={header} className="md:w-25rem">
          <p className="m-0">
              The processing of personal information is an important compliance matter for all businesses these days. 
              By now most people know that the Protection of Personal Information Act 4 of 2013 (the “PoPI Act”) is the law with effect 1 July 2020.  
              Every public and private enterprise has to comply, and a grace period of 1 year applies.  From 1 July 2021, 
              the full might of the law will apply.
          </p>
      </Card>
  </div>
  )
}

export default PstvRes;