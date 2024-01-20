import { GroupOptionModel } from '@/models/index';
import { useRouter } from 'next/router';
import Select, { components } from "react-select";
import { CatIcon } from '../icons';

interface Props {
    data: GroupOptionModel[];
}

export function CustomSelectGroup({ data }: Props) {
    const route = useRouter();
    const handleHeaderClick = (id: number) => {
        const currentnode = document.querySelector(`#${id}`)?.parentElement;
        const node = document.querySelector(`#${id}`)?.parentElement?.nextElementSibling;
        const classes = node?.classList;
        const oldNode = document.querySelector(`.group_open`);
        const sibling = oldNode?.nextElementSibling;
        if (classes?.contains("group_collapsed")) {
            currentnode?.classList.add("group_open");
            node?.classList.remove("group_collapsed");
        } else {
            currentnode?.classList.remove("group_open");
            node?.classList.add("group_collapsed");
        }

        oldNode?.classList.remove("group_open");
        sibling?.classList.add("group_collapsed");
    };

    const handleSelectOpen = () => {
        setTimeout(function () {
            const mynode = document.querySelectorAll(`.group-heading-wrapper`);
            mynode.forEach(element => {
                const node = element.nextElementSibling;
                const classes = node?.classList;
                if (classes?.contains("group_collapsed")) {
                    node?.classList.remove("group_collapsed");
                } else {
                    node?.classList.add("group_collapsed");
                }
            });
        }, 5)
    }

    const CustomGroupHeading = (props: any) => {
        return (
            <div
                className="group-heading-wrapper"
                onClick={() => handleHeaderClick(props.id)}
            >
                <components.GroupHeading {...props} />
                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" ><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
            </div>
        );
    };

    const Control = (props: any) => {
        return (

            <components.Control {...props} className="select_control" />
        );
    };

    const Placeholder = (props: any) => {
        return (

            <components.Placeholder {...props} className="select_placeHolder" />
        );
    };

    const IndicatorsContainer = (props: any) => {
        return (

            <components.IndicatorsContainer {...props} className="select_indicator" />
        );
    };


    const Option = (props: any) => {
        return (
            <components.Option {...props} className="select_option" />
        );
    };

    const SingleValue = (props: any) => {
        return (

            <components.SingleValue {...props} className="selected_value" />
        );
    };
    const Menu = (props: any) => {
        return (

            <components.Menu {...props} className="select_menu" />
        );
    };
    const style = {
        control: (base: any) => ({
            ...base,
            border: 0,
            // This line disable the blue border
            boxShadow: "none"
        })
    };
    return (
        <div className='cust_select_container'>
            <i><CatIcon /> </i>
            <Select
                options={data}
                components={{ GroupHeading: CustomGroupHeading, Control, Placeholder, IndicatorsContainer, Option, SingleValue, Menu }}
                onMenuOpen={() => {
                    handleSelectOpen();
                }}
                placeholder="All Categories"
                styles={style}
                isSearchable={false}
                onChange={(choice: any) => route.push("/products?category_ids[0]=" + choice.value)}

            />
        </div>
    )
}