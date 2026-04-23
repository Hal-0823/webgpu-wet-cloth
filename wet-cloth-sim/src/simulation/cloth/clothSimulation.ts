import * as THREE from "three";

type ClothVertex = {
    position : THREE.Vector3;           // 頂点の位置
    previousPosition : THREE.Vector3;   // 前のフレームの位置（速度計算に使用）
    pinned : boolean;                   // 頂点が固定されているかどうか
    pinPosition : THREE.Vector3;        // 固定されている場合の位置
};

type ClothSpring = {
    a: number;                          // 接続元頂点のインデックス
    b: number;                          // 接続先頂点のインデックス
    restLength: number;                 // ばねの自然長
};

export class ClothSimulation {
    public readonly geometry: THREE.PlaneGeometry;

    constructor(
        width: number,
        height: number,
        widthSegments: number,
        heightSegments: number
    ){
        this.geometry = new THREE.PlaneGeometry(
            width,
            height,
            widthSegments,
            heightSegments
        );
    }
}