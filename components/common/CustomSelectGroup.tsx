import { GroupOptionModel } from '@/models/index';
import Select, { components } from "react-select";

interface Props {
    data: GroupOptionModel[];
}

export function CustomSelectGroup({ data }: Props) {
    const handleHeaderClick = (id: number) => {
        const node = document.querySelector(`#${id}`)?.parentElement?.nextElementSibling;
        const classes = node?.classList;
        if (classes?.contains("group_collapsed")) {
            node?.classList.remove("group_collapsed");
        } else {
            node?.classList.add("group_collapsed");
        }
    };
    const CustomGroupHeading = (props: any) => {
        console.log(props.data);
        return (
            <div
                className="group-heading-wrapper"
                onClick={() => handleHeaderClick(props.id)}
            >
                <components.GroupHeading {...props} />
            </div>
        );
    };

    return (
        <div className='cust_select_container'>
            <Select
                options={data}
                components={{ GroupHeading: CustomGroupHeading }}
            />
        </div>
    )
}