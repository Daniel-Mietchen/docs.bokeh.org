import { ActionTool, ActionToolView } from "./action_tool";
import * as p from "../../../core/properties";
export declare class HelpToolView extends ActionToolView {
    model: HelpTool;
    doit(): void;
}
export declare namespace HelpTool {
    type Attrs = p.AttrsOf<Props>;
    type Props = ActionTool.Props & {
        help_tooltip: p.Property<string>;
        redirect: p.Property<string>;
    };
}
export interface HelpTool extends HelpTool.Attrs {
}
export declare class HelpTool extends ActionTool {
    properties: HelpTool.Props;
    constructor(attrs?: Partial<HelpTool.Attrs>);
    static initClass(): void;
    tool_name: string;
    icon: string;
    readonly tooltip: string;
}
