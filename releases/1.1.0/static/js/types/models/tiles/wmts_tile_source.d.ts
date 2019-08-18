import { MercatorTileSource } from './mercator_tile_source';
import * as p from "../../core/properties";
export declare namespace WMTSTileSource {
    type Attrs = p.AttrsOf<Props>;
    type Props = MercatorTileSource.Props;
}
export interface WMTSTileSource extends WMTSTileSource.Attrs {
}
export declare class WMTSTileSource extends MercatorTileSource {
    properties: WMTSTileSource.Props;
    constructor(attrs?: Partial<WMTSTileSource.Attrs>);
    static initClass(): void;
    get_image_url(x: number, y: number, z: number): string;
}
