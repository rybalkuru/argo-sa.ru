import { useState } from "react";
import { YMaps, Map, Polygon, MapType } from "react-yandex-maps";
import style from "./MapDrawPoligon.module.scss";
const mapState = {
    type: "yandex#hybrid" as MapType,
    center: [55.73, 37.9],
    zoom: 10,
};

const MapDrawPoligon = () => {
    const draw = (ref: any) => {
        ref.editor.startDrawing();
        ref.editor.events.add("statechange", (event: any) => {
            const coords =
                event.originalEvent.target.geometry._coordPath._coordinates[0];

            console.log(coords);
        });
    };

    return (
        <section>
            <h1></h1>
            <YMaps>
                <Map
                    className={style.map}
                    defaultState={mapState}
                    modules={["geoObject.addon.editor"]}
                >
                    <Polygon
                        instanceRef={(ref: any) => ref && draw(ref)}
                        geometry={[]}
                        options={{
                            editorDrawingCursor: "crosshair",
                            editorMaxPoints: 10,

                            fillColor: "#00FF0077",
                            // Цвет обводки.
                            strokeColor: "#0000FF",
                            // Ширина обводки.
                            strokeWidth: 2,
                        }}
                    />
                </Map>
            </YMaps>
        </section>
    );
};

export default MapDrawPoligon;
