export interface WeaponInterface {
    readonly name?: string;
    readonly damage?: number;
}
export interface WeaponOptionsInterface extends WeaponInterface {
}
export declare class Weapon implements WeaponInterface {
    readonly name: string;
    readonly damage: number;
    constructor(options: WeaponOptionsInterface);
}
