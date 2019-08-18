import { UIEvent, GestureEvent, TapEvent, KeyEvent } from "../../../core/ui_events";
import * as p from "../../../core/properties";
import { EditTool, EditToolView } from "./edit_tool";
export declare class FreehandDrawToolView extends EditToolView {
    model: FreehandDrawTool;
    _draw(ev: UIEvent, mode: string, emit?: boolean): void;
    _pan_start(ev: GestureEvent): void;
    _pan(ev: GestureEvent): void;
    _pan_end(ev: GestureEvent): void;
    _tap(ev: TapEvent): void;
    _keyup(ev: KeyEvent): void;
}
export declare namespace FreehandDrawTool {
    type Attrs = p.AttrsOf<Props>;
    type Props = EditTool.Props & {
        num_objects: p.Property<number>;
    };
}
export interface FreehandDrawTool extends FreehandDrawTool.Attrs {
}
export declare class FreehandDrawTool extends EditTool {
    properties: FreehandDrawTool.Props;
    constructor(attrs?: Partial<FreehandDrawTool.Attrs>);
    static initClass(): void;
    tool_name: string;
    icon: string;
    event_type: ("pan" | "tap")[];
    default_order: number;
}
