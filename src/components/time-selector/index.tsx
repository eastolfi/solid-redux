import { Component, createEffect, createMemo, createSignal } from "solid-js";
import { TimepickerUI } from "timepicker-ui";

const TimeSelector: Component = () => {
    let ref: HTMLDivElement | undefined;
    const [ state, setState ] = createSignal('' as string);

    // const testHandler = createMemo((e: CustomEvent) => {
    //     setState();

    // });
    const handle = (e: CustomEvent) => {
        setState(`${e.detail.hour}:${e.detail.minutes} ${e.detail.type}`);
    }

    createEffect(() => {
        const tm = ref as HTMLDivElement;
        const picker = new TimepickerUI(ref as HTMLDivElement, {});
        picker.create();

        ref?.addEventListener('accept', (e) => handle(e as CustomEvent))
    });

    // const tp = document.querySelector('timepicker-ui') as HTMLElement;
    // const init = new TimepickerUI(tp);
    // init.create();

    return (
        <>
            <div class="timepicker-ui" ref={ ref as HTMLDivElement }>
                <input
                    type="text"
                    class="timepicker-ui-input"
                    value="12:00 AM"
                />
            </div>
        </>
    );
};

export default TimeSelector;
