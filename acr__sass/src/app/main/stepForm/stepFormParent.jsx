import React from 'react';
import MasterForm from "./stepForm";
import FusePageCarded from '@fuse/core/FusePageCarded';
import ModalComponent from "./modalComponent";

const StepFormParent = (props) => {
    return (
        <FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<h1>Header</h1>}
			// content={<ProductsTable />}
			content={<ModalComponent />}
			innerScroll
		/>
        //<ModalComponent />
    );
}

export default React.memo(StepFormParent);