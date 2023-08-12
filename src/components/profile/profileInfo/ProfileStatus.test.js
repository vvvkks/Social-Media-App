import React from "react"
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import { act } from "react-dom/test-utils";

describe("ProfileStatus component", () => {
    test("status from props should be displayed", () => {
        const status = "vvvkks";
        const component = create(<ProfileStatus status={status}/>);
        const instance = component.root;
        const profileStatusComponent = instance.findByType(ProfileStatus);
        expect(profileStatusComponent.props.status).toBe(status);
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={"vvvkks"}/>);
        const instance = component.root;
        const input = instance.findByType("span");
        expect(input).not.toBeNull();
    });
    test("after creation <span> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"vvvkks"}/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status={"vvvkks"} />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe("vvvkks");
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"vvvkks"} />);
        const instance = component.root;
        const span = instance.findByType("span");

        act(() => {
            span.props.onDoubleClick();
        });

        const input = instance.findByType("input");
        expect(input.props.value).toBe("vvvkks");
    });
});