import React, { useState } from 'react';
import RecordButton from './RecordButton';

function Record() {
    //Set onLoad to link
    const [type, setType] = useState('link');

    return (
        <div>
            <select onChange={e => { setType(e.target.value) }}>
                <option value={"link"}>Youtube</option>
                <option value={"script"}>Script</option>
            </select>
            <ScriptThing show={type === "script"} />
            <LinkThing show={type === "link"} />
            <Setting />
        </div>
    );
}

function LinkThing(shown) {
    //Link test
    //https://www.youtube.com/watch?v=l0jJGlalLh8

    const [id, setId] = useState('');
    let correctLink = id.split('=');

    if (shown.show) {
        return (
            <div>
                <input placeholder='Youtube Link' onChange={(e) => setId(e.target.value)} /> <br />
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${correctLink[1]}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Embedded youtube"
                />
            </div>)
    }
    return <></>;
}

function ScriptThing(shown) {
    const [script, setScript] = useState();
    if (shown.show) {
        return <div>Script Stuff Here</div>
    }
    return <></>;
}

function Setting() {
    let st = {
        height: '100px',
        position: 'fixed',
        bottom: '0%',
        width: '100%',
        backgroundColor: '#393838',
        opacity: '1',
    }

    return (
        <>
            <div style={st}>
                <table style={{width: '100%', height: '100px' }}>
                    <tr>
                        <td style={{ width: '25%',textAlign: 'center'}}>
                            <div style={{color: 'white'}}>Key Signature</div>

                            <select>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                            <div style={{color: 'white'}}>Scale</div>
                            <select>
                                <option>Major</option>
                                <option>Minor</option>
                            </select>
                        </td>
                        <td style={{width: '22%', textAlign: 'left'}}>
                            
                        </td>
                        <td>
                            <RecordButton />
                        </td>
                        <td style={{width: '25%', textAlign: 'center'}}>
                            <div style={{color: 'white'}}>Tempo</div>
                            <input type="text" defaultValue="120" />
                        </td>
                    </tr>

                </table>
            </div>

        </>
    );

}

export default Record;