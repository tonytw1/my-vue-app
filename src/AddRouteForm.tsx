import {MetricsDropdown} from "./MetricsDropdown.tsx";
import {GaugesDropdown} from "./GaugesDropdown.tsx";

export function AddRouteForm() {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        formJson['Gauge'] = 'Meh';

        console.log(formJson);

        const requestOptions = {
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formJson)

        }

        fetch('http://10.0.46.10:32100/routes', requestOptions)
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <h4>Add route</h4>
            <MetricsDropdown /> to <GaugesDropdown />
            <button type="submit">Submit</button>
        </form>
    )
}
