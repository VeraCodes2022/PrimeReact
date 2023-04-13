import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Etusivu_Kortti() {

  const direct=useNavigate()
  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
);
const footer = (
    <div className="flex flex-wrap justify-content-end gap-3">
        <Button label="Olen Yritys" icon="pi" 
        onClick={()=>direct("/yrty", {replace: true})}
        />
        <Button label="Olen Henkilö" icon="pi" 
        className="p-button-outlined p-button-secondary" 
        onClick={()=>direct("/hnkl", {replace: true})}
        />
    </div>
);
  return (
    <div className="home-card flex justify-content-center">
        <Card title="KOUVOLAN KUITU" subTitle="Valokuitu Liittymä Kotiisi" footer={footer} header={header} className="md:w-25rem">
            <p className="m-0">
                  Kouvolan kuidun valokuituverkko kattaa nyt Kouvolan, Kuusankosken, Valkealan ja Lappeenrannan alueita
            </p>
        </Card>
    </div>
  )
}

export default Etusivu_Kortti;