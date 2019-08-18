import { CenterRotatable, CenterRotatableView, CenterRotatableData } from "./center_rotatable";
import { PointGeometry, RectGeometry } from "../../core/geometry";
import { LineVector, FillVector } from "../../core/property_mixins";
import { Arrayable } from "../../core/types";
import { Class } from "../../core/class";
import * as types from "../../core/types";
import * as p from "../../core/properties";
import { Context2d } from "../../core/util/canvas";
import { Selection } from "../selections/selection";
import { Scale } from "../scales/scale";
export interface RectData extends CenterRotatableData {
    sx0: Arrayable<number>;
    sy1: Arrayable<number>;
    ssemi_diag: Arrayable<number>;
}
export interface RectView extends RectData {
}
export declare class RectView extends CenterRotatableView {
    model: Rect;
    visuals: Rect.Visuals;
    protected _set_data(): void;
    protected _map_data(): void;
    protected _render(ctx: Context2d, indices: number[], { sx, sy, sx0, sy1, sw, sh, _angle }: RectData): void;
    protected _hit_rect(geometry: RectGeometry): Selection;
    protected _hit_point(geometry: PointGeometry): Selection;
    protected _map_dist_corner_for_data_side_length(coord: Arrayable<number>, side_length: Arrayable<number>, scale: Scale): [Arrayable<number>, Arrayable<number>];
    protected _ddist(dim: 0 | 1, spts: Arrayable<number>, spans: Arrayable<number>): Arrayable<number>;
    draw_legend_for_index(ctx: Context2d, bbox: types.Rect, index: number): void;
    protected _bounds({ x0, x1, y0, y1 }: types.Rect): types.Rect;
}
export declare namespace Rect {
    type Attrs = p.AttrsOf<Props>;
    type Props = CenterRotatable.Props & LineVector & FillVector & {
        dilate: p.Property<boolean>;
    };
    type Visuals = CenterRotatable.Visuals;
}
export interface Rect extends Rect.Attrs {
}
export declare class Rect extends CenterRotatable {
    properties: Rect.Props;
    default_view: Class<RectView>;
    constructor(attrs?: Partial<Rect.Attrs>);
    static initClass(): void;
}
